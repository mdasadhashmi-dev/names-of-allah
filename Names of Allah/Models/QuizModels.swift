// QuizModels.swift - Quiz data models
import Foundation
import Combine

// MARK: - Quiz Mode
enum QuizMode: String, CaseIterable, Identifiable {
    case nameFromMeaning = "Guess the Name"
    case meaningFromName = "Guess the Meaning"
    
    var id: String { rawValue }
    
    var description: String {
        switch self {
        case .nameFromMeaning:
            return "We show you the meaning, you pick the correct name"
        case .meaningFromName:
            return "We show you the name, you pick the correct meaning"
        }
    }
    
    var icon: String {
        switch self {
        case .nameFromMeaning:
            return "character.textbox"
        case .meaningFromName:
            return "text.magnifyingglass"
        }
    }
    
    var isAvailable: Bool {
        switch self {
        case .nameFromMeaning, .meaningFromName:
            return true
        }
    }
}

// MARK: - Quiz Question
struct QuizQuestion: Identifiable {
    let id = UUID()
    let prompt: String
    let arabicText: String?
    let options: [String]
    let correctIndex: Int
    let relatedNameId: String
    let explanation: String
    
    var correctAnswer: String {
        options[correctIndex]
    }
}

// MARK: - Quiz Session
class QuizSessionViewModel: ObservableObject {
    @Published var questions: [QuizQuestion] = []
    @Published var currentIndex: Int = 0
    @Published var score: Int = 0
    @Published var currentStreak: Int = 0
    @Published var isFinished: Bool = false
    @Published var selectedAnswerIndex: Int? = nil
    @Published var showingFeedback: Bool = false
    
    let mode: QuizMode
    let totalQuestions: Int
    private let progressStore: QuizProgressStore
    
    var currentQuestion: QuizQuestion? {
        guard currentIndex < questions.count else { return nil }
        return questions[currentIndex]
    }
    
    var progress: Double {
        guard !questions.isEmpty else { return 0 }
        return Double(currentIndex) / Double(questions.count)
    }
    
    var scorePercentage: Int {
        guard !questions.isEmpty else { return 0 }
        return Int((Double(score) / Double(questions.count)) * 100)
    }
    
    init(mode: QuizMode, questionCount: Int = 10, progressStore: QuizProgressStore = .shared) {
        self.mode = mode
        self.totalQuestions = questionCount
        self.progressStore = progressStore
        generateQuestions()
    }
    
    private func generateQuestions() {
        let allNames = AllahNamesDatabase.all.filter { $0.hasContent }
        guard allNames.count >= 4 else { return }
        
        var generatedQuestions: [QuizQuestion] = []
        var usedNameIds: Set<String> = []
        
        let shuffledNames = allNames.shuffled()
        
        for name in shuffledNames {
            guard generatedQuestions.count < totalQuestions else { break }
            guard !usedNameIds.contains(name.nameId) else { continue }
            
            usedNameIds.insert(name.nameId)
            
            // Get 3 random wrong options
            var wrongOptions = allNames.filter { $0.nameId != name.nameId }.shuffled().prefix(3)
            
            let question: QuizQuestion
            
            switch mode {
            case .nameFromMeaning:
                // Show meaning, options are names
                var options = wrongOptions.map { $0.transliteration }
                let correctIndex = Int.random(in: 0...3)
                options.insert(name.transliteration, at: correctIndex)
                
                question = QuizQuestion(
                    prompt: name.meaning,
                    arabicText: nil,
                    options: Array(options.prefix(4)),
                    correctIndex: correctIndex,
                    relatedNameId: name.nameId,
                    explanation: "\(name.transliteration) (\(name.arabic)) means \"\(name.meaning)\""
                )
                
            case .meaningFromName:
                // Show name, options are meanings
                var options = wrongOptions.map { $0.meaning }
                let correctIndex = Int.random(in: 0...3)
                options.insert(name.meaning, at: correctIndex)
                
                question = QuizQuestion(
                    prompt: name.transliteration,
                    arabicText: name.arabic,
                    options: Array(options.prefix(4)),
                    correctIndex: correctIndex,
                    relatedNameId: name.nameId,
                    explanation: "\(name.transliteration) (\(name.arabic)) means \"\(name.meaning)\""
                )
            }
            
            generatedQuestions.append(question)
        }
        
        questions = generatedQuestions
    }
    
    func selectAnswer(_ index: Int) {
        guard !showingFeedback, let currentQuestion = currentQuestion else { return }
        
        selectedAnswerIndex = index
        showingFeedback = true
        
        if index == currentQuestion.correctIndex {
            score += 1
            currentStreak += 1
        } else {
            currentStreak = 0
        }
    }
    
    func nextQuestion() {
        showingFeedback = false
        selectedAnswerIndex = nil
        
        if currentIndex + 1 >= questions.count {
            finishQuiz()
        } else {
            currentIndex += 1
        }
    }
    
    private func finishQuiz() {
        isFinished = true
        progressStore.recordQuizCompletion(
            score: score,
            totalQuestions: questions.count,
            streak: currentStreak
        )
    }
    
    func restart() {
        currentIndex = 0
        score = 0
        currentStreak = 0
        isFinished = false
        selectedAnswerIndex = nil
        showingFeedback = false
        generateQuestions()
    }
}

// MARK: - Quiz Progress Store
class QuizProgressStore: ObservableObject {
    static let shared = QuizProgressStore()
    
    @Published var highScore: Int {
        didSet { UserDefaults.standard.set(highScore, forKey: "quiz_highScore") }
    }
    
    @Published var longestStreak: Int {
        didSet { UserDefaults.standard.set(longestStreak, forKey: "quiz_longestStreak") }
    }
    
    @Published var totalQuizzesCompleted: Int {
        didSet { UserDefaults.standard.set(totalQuizzesCompleted, forKey: "quiz_totalCompleted") }
    }
    
    @Published var totalQuestionsAnswered: Int {
        didSet { UserDefaults.standard.set(totalQuestionsAnswered, forKey: "quiz_totalAnswered") }
    }
    
    @Published var totalCorrectAnswers: Int {
        didSet { UserDefaults.standard.set(totalCorrectAnswers, forKey: "quiz_totalCorrect") }
    }
    
    var overallAccuracy: Int {
        guard totalQuestionsAnswered > 0 else { return 0 }
        return Int((Double(totalCorrectAnswers) / Double(totalQuestionsAnswered)) * 100)
    }
    
    private init() {
        self.highScore = UserDefaults.standard.integer(forKey: "quiz_highScore")
        self.longestStreak = UserDefaults.standard.integer(forKey: "quiz_longestStreak")
        self.totalQuizzesCompleted = UserDefaults.standard.integer(forKey: "quiz_totalCompleted")
        self.totalQuestionsAnswered = UserDefaults.standard.integer(forKey: "quiz_totalAnswered")
        self.totalCorrectAnswers = UserDefaults.standard.integer(forKey: "quiz_totalCorrect")
    }
    
    func recordQuizCompletion(score: Int, totalQuestions: Int, streak: Int) {
        // Update high score
        let percentage = Int((Double(score) / Double(totalQuestions)) * 100)
        if percentage > highScore {
            highScore = percentage
        }
        
        // Update longest streak
        if streak > longestStreak {
            longestStreak = streak
        }
        
        // Update totals
        totalQuizzesCompleted += 1
        totalQuestionsAnswered += totalQuestions
        totalCorrectAnswers += score
    }
    
    func resetProgress() {
        highScore = 0
        longestStreak = 0
        totalQuizzesCompleted = 0
        totalQuestionsAnswered = 0
        totalCorrectAnswers = 0
    }
}



