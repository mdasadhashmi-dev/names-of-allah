// QuizGameView.swift - The actual quiz gameplay
import SwiftUI

struct QuizGameView: View {
    let mode: QuizMode
    @StateObject private var session: QuizSessionViewModel
    @Environment(\.dismiss) private var dismiss
    @State private var animateScore = false
    
    init(mode: QuizMode) {
        self.mode = mode
        _session = StateObject(wrappedValue: QuizSessionViewModel(mode: mode, questionCount: 10))
    }
    
    var body: some View {
        ZStack {
            // Background
            LinearGradient(
                colors: [Color(red: 0.05, green: 0.05, blue: 0.12), Color.black],
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()
            
            if session.isFinished {
                QuizResultView(session: session) {
                    session.restart()
                } onExit: {
                    dismiss()
                }
            } else if let question = session.currentQuestion {
                questionView(question)
            } else {
                loadingView
            }
        }
        .navigationBarTitleDisplayMode(.inline)
        .navigationBarBackButtonHidden(true)
        .toolbar {
            ToolbarItem(placement: .navigationBarLeading) {
                Button(action: { dismiss() }) {
                    Image(systemName: "xmark.circle.fill")
                        .font(.system(size: 28))
                        .foregroundColor(.white.opacity(0.6))
                }
            }
        }
    }
    
    // MARK: - Question View
    private func questionView(_ question: QuizQuestion) -> some View {
        VStack(spacing: 0) {
            // Progress Header
            progressHeader
            
            ScrollView {
                VStack(spacing: 30) {
                    // Question Prompt
                    questionPrompt(question)
                    
                    // Answer Options
                    answerOptions(question)
                    
                    // Feedback & Next Button
                    if session.showingFeedback {
                        feedbackSection(question)
                    }
                    
                    Spacer().frame(height: 40)
                }
                .padding(.horizontal, 20)
            }
        }
    }
    
    // MARK: - Progress Header
    private var progressHeader: some View {
        VStack(spacing: 16) {
            // Progress bar
            GeometryReader { geo in
                ZStack(alignment: .leading) {
                    Rectangle()
                        .fill(Color.white.opacity(0.1))
                        .frame(height: 6)
                        .cornerRadius(3)
                    
                    Rectangle()
                        .fill(Color.appGold)
                        .frame(width: geo.size.width * session.progress, height: 6)
                        .cornerRadius(3)
                        .animation(.easeInOut(duration: 0.3), value: session.progress)
                }
            }
            .frame(height: 6)
            .padding(.horizontal, 20)
            
            // Stats row
            HStack {
                // Question counter
                Text("Question \(session.currentIndex + 1) of \(session.questions.count)")
                    .font(.system(size: 14, weight: .medium))
                    .foregroundColor(.white.opacity(0.7))
                
                Spacer()
                
                // Score
                HStack(spacing: 6) {
                    Image(systemName: "star.fill")
                        .font(.system(size: 12))
                        .foregroundColor(.appGold)
                    Text("\(session.score)")
                        .font(.system(size: 16, weight: .bold))
                        .foregroundColor(.white)
                        .scaleEffect(animateScore ? 1.3 : 1.0)
                }
                
                // Streak
                if session.currentStreak > 0 {
                    HStack(spacing: 4) {
                        Image(systemName: "flame.fill")
                            .font(.system(size: 12))
                            .foregroundColor(.orange)
                        Text("\(session.currentStreak)")
                            .font(.system(size: 14, weight: .semibold))
                            .foregroundColor(.orange)
                    }
                    .padding(.horizontal, 10)
                    .padding(.vertical, 4)
                    .background(
                        Capsule()
                            .fill(Color.orange.opacity(0.2))
                    )
                }
            }
            .padding(.horizontal, 20)
        }
        .padding(.top, 20)
        .padding(.bottom, 10)
    }
    
    // MARK: - Question Prompt
    private func questionPrompt(_ question: QuizQuestion) -> some View {
        VStack(spacing: 16) {
            Text(mode == .nameFromMeaning ? "Which name means:" : "What does this name mean?")
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(.appGold)
            
            if let arabic = question.arabicText {
                Text(arabic)
                    .font(.system(size: 42, weight: .bold, design: .serif))
                    .foregroundColor(.white)
            }
            
            Text(question.prompt)
                .font(.system(size: mode == .nameFromMeaning ? 28 : 22, weight: .semibold, design: .serif))
                .foregroundColor(.white)
                .multilineTextAlignment(.center)
                .lineSpacing(6)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 40)
        .padding(.horizontal, 24)
        .background(
            RoundedRectangle(cornerRadius: 24)
                .fill(Color.white.opacity(0.05))
                .overlay(
                    RoundedRectangle(cornerRadius: 24)
                        .stroke(Color.appGold.opacity(0.2), lineWidth: 1)
                )
        )
    }
    
    // MARK: - Answer Options
    private func answerOptions(_ question: QuizQuestion) -> some View {
        VStack(spacing: 12) {
            ForEach(Array(question.options.enumerated()), id: \.offset) { index, option in
                AnswerButton(
                    text: option,
                    index: index,
                    isSelected: session.selectedAnswerIndex == index,
                    isCorrect: index == question.correctIndex,
                    showResult: session.showingFeedback,
                    action: {
                        withAnimation(.easeInOut(duration: 0.2)) {
                            session.selectAnswer(index)
                        }
                        // Haptic feedback
                        let generator = UIImpactFeedbackGenerator(style: index == question.correctIndex ? .medium : .heavy)
                        generator.impactOccurred()
                        
                        // Animate score if correct
                        if index == question.correctIndex {
                            withAnimation(.spring(response: 0.3, dampingFraction: 0.5)) {
                                animateScore = true
                            }
                            DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                                animateScore = false
                            }
                        }
                    }
                )
                .disabled(session.showingFeedback)
            }
        }
    }
    
    // MARK: - Feedback Section
    private func feedbackSection(_ question: QuizQuestion) -> some View {
        VStack(spacing: 20) {
            // Explanation
            VStack(spacing: 12) {
                HStack(spacing: 8) {
                    Image(systemName: session.selectedAnswerIndex == question.correctIndex ? "checkmark.circle.fill" : "info.circle.fill")
                        .foregroundColor(session.selectedAnswerIndex == question.correctIndex ? .green : .appGold)
                    Text(session.selectedAnswerIndex == question.correctIndex ? "Correct!" : "Learn from this")
                        .font(.system(size: 16, weight: .semibold))
                        .foregroundColor(.white)
                }
                
                Text(question.explanation)
                    .font(.system(size: 15, weight: .regular))
                    .foregroundColor(.white.opacity(0.8))
                    .multilineTextAlignment(.center)
                    .lineSpacing(4)
            }
            .padding(20)
            .background(
                RoundedRectangle(cornerRadius: 16)
                    .fill(
                        (session.selectedAnswerIndex == question.correctIndex ? Color.green : Color.appGold).opacity(0.1)
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 16)
                            .stroke(
                                (session.selectedAnswerIndex == question.correctIndex ? Color.green : Color.appGold).opacity(0.3),
                                lineWidth: 1
                            )
                    )
            )
            
            // Next Button
            Button(action: {
                withAnimation(.easeInOut(duration: 0.3)) {
                    session.nextQuestion()
                }
            }) {
                HStack(spacing: 8) {
                    Text(session.currentIndex + 1 >= session.questions.count ? "See Results" : "Next Question")
                        .font(.system(size: 17, weight: .semibold))
                    Image(systemName: "arrow.right")
                        .font(.system(size: 14, weight: .semibold))
                }
                .foregroundColor(Color(red: 0.1, green: 0.1, blue: 0.15))
                .frame(maxWidth: .infinity)
                .padding(.vertical, 18)
                .background(
                    LinearGradient(
                        colors: [Color.appGold, Color.appGold.opacity(0.8)],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .cornerRadius(16)
            }
        }
        .transition(.opacity.combined(with: .move(edge: .bottom)))
    }
    
    // MARK: - Loading View
    private var loadingView: some View {
        VStack(spacing: 20) {
            ProgressView()
                .progressViewStyle(CircularProgressViewStyle(tint: .appGold))
                .scaleEffect(1.5)
            Text("Preparing quiz...")
                .font(.system(size: 16, weight: .light))
                .foregroundColor(.white.opacity(0.7))
        }
    }
}

// MARK: - Answer Button
struct AnswerButton: View {
    let text: String
    let index: Int
    let isSelected: Bool
    let isCorrect: Bool
    let showResult: Bool
    let action: () -> Void
    
    private var backgroundColor: Color {
        if showResult {
            if isCorrect {
                return Color.green.opacity(0.2)
            } else if isSelected {
                return Color.red.opacity(0.2)
            }
        }
        return isSelected ? Color.appGold.opacity(0.15) : Color.white.opacity(0.05)
    }
    
    private var borderColor: Color {
        if showResult {
            if isCorrect {
                return Color.green.opacity(0.8)
            } else if isSelected {
                return Color.red.opacity(0.8)
            }
        }
        return isSelected ? Color.appGold.opacity(0.5) : Color.white.opacity(0.1)
    }
    
    private var textColor: Color {
        if showResult {
            if isCorrect {
                return .green
            } else if isSelected {
                return .red
            }
        }
        return .white
    }
    
    private var optionLabel: String {
        let labels = ["A", "B", "C", "D"]
        return labels[index]
    }
    
    var body: some View {
        Button(action: action) {
            HStack(spacing: 16) {
                ZStack {
                    Circle()
                        .fill(borderColor.opacity(0.3))
                        .frame(width: 36, height: 36)
                    
                    if showResult && isCorrect {
                        Image(systemName: "checkmark")
                            .font(.system(size: 14, weight: .bold))
                            .foregroundColor(.green)
                    } else if showResult && isSelected && !isCorrect {
                        Image(systemName: "xmark")
                            .font(.system(size: 14, weight: .bold))
                            .foregroundColor(.red)
                    } else {
                        Text(optionLabel)
                            .font(.system(size: 15, weight: .semibold))
                            .foregroundColor(isSelected ? Color.appGold : .white.opacity(0.7))
                    }
                }
                
                Text(text)
                    .font(.system(size: 16, weight: .medium))
                    .foregroundColor(textColor)
                    .multilineTextAlignment(.leading)
                
                Spacer()
            }
            .padding(.horizontal, 20)
            .padding(.vertical, 18)
            .background(
                RoundedRectangle(cornerRadius: 16)
                    .fill(backgroundColor)
                    .overlay(
                        RoundedRectangle(cornerRadius: 16)
                            .stroke(borderColor, lineWidth: showResult && (isCorrect || isSelected) ? 2 : 1)
                    )
            )
        }
    }
}

// MARK: - Quiz Result View
struct QuizResultView: View {
    @ObservedObject var session: QuizSessionViewModel
    let onRetry: () -> Void
    let onExit: () -> Void
    
    @State private var showContent = false
    
    var resultMessage: (title: String, subtitle: String, icon: String, color: Color) {
        let percentage = session.scorePercentage
        
        if percentage >= 90 {
            return ("Excellent!", "You're a master of the Beautiful Names", "crown.fill", .appGold)
        } else if percentage >= 70 {
            return ("Great Job!", "Keep learning and you'll master them all", "star.fill", .green)
        } else if percentage >= 50 {
            return ("Good Effort!", "Practice makes perfect", "hand.thumbsup.fill", .blue)
        } else {
            return ("Keep Learning!", "Every step brings you closer to knowledge", "book.fill", .orange)
        }
    }
    
    var body: some View {
        ScrollView {
            VStack(spacing: 30) {
                Spacer().frame(height: 40)
                
                // Result Icon & Message
                VStack(spacing: 20) {
                    ZStack {
                        Circle()
                            .fill(resultMessage.color.opacity(0.15))
                            .frame(width: 120, height: 120)
                        
                        Image(systemName: resultMessage.icon)
                            .font(.system(size: 50))
                            .foregroundColor(resultMessage.color)
                    }
                    .scaleEffect(showContent ? 1 : 0.5)
                    .opacity(showContent ? 1 : 0)
                    
                    Text(resultMessage.title)
                        .font(.system(size: 32, weight: .bold, design: .serif))
                        .foregroundColor(.white)
                        .opacity(showContent ? 1 : 0)
                    
                    Text(resultMessage.subtitle)
                        .font(.system(size: 16, weight: .light))
                        .foregroundColor(.white.opacity(0.7))
                        .multilineTextAlignment(.center)
                        .opacity(showContent ? 1 : 0)
                }
                
                // Score Card
                VStack(spacing: 20) {
                    // Score
                    VStack(spacing: 8) {
                        Text("\(session.score)/\(session.questions.count)")
                            .font(.system(size: 56, weight: .bold))
                            .foregroundColor(.white)
                        
                        Text("\(session.scorePercentage)% Correct")
                            .font(.system(size: 18, weight: .medium))
                            .foregroundColor(.appGold)
                    }
                    
                    Divider()
                        .background(Color.white.opacity(0.2))
                        .padding(.horizontal, 40)
                    
                    // Stats
                    HStack(spacing: 40) {
                        VStack(spacing: 6) {
                            HStack(spacing: 4) {
                                Image(systemName: "flame.fill")
                                    .foregroundColor(.orange)
                                Text("\(session.currentStreak)")
                                    .font(.system(size: 20, weight: .bold))
                                    .foregroundColor(.white)
                            }
                            Text("Final Streak")
                                .font(.system(size: 12, weight: .light))
                                .foregroundColor(.white.opacity(0.6))
                        }
                        
                        VStack(spacing: 6) {
                            HStack(spacing: 4) {
                                Image(systemName: "clock.fill")
                                    .foregroundColor(.blue)
                                Text(session.mode.rawValue)
                                    .font(.system(size: 14, weight: .medium))
                                    .foregroundColor(.white)
                            }
                            Text("Quiz Mode")
                                .font(.system(size: 12, weight: .light))
                                .foregroundColor(.white.opacity(0.6))
                        }
                    }
                }
                .padding(.vertical, 30)
                .padding(.horizontal, 20)
                .background(
                    RoundedRectangle(cornerRadius: 24)
                        .fill(Color.white.opacity(0.05))
                        .overlay(
                            RoundedRectangle(cornerRadius: 24)
                                .stroke(Color.appGold.opacity(0.2), lineWidth: 1)
                        )
                )
                .opacity(showContent ? 1 : 0)
                .offset(y: showContent ? 0 : 20)
                
                // Action Buttons
                VStack(spacing: 12) {
                    Button(action: onRetry) {
                        HStack(spacing: 8) {
                            Image(systemName: "arrow.counterclockwise")
                            Text("Try Again")
                        }
                        .font(.system(size: 17, weight: .semibold))
                        .foregroundColor(Color(red: 0.1, green: 0.1, blue: 0.15))
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 18)
                        .background(Color.appGold)
                        .cornerRadius(16)
                    }
                    
                    Button(action: onExit) {
                        HStack(spacing: 8) {
                            Image(systemName: "house.fill")
                            Text("Back to Names")
                        }
                        .font(.system(size: 17, weight: .medium))
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 18)
                        .background(
                            RoundedRectangle(cornerRadius: 16)
                                .stroke(Color.white.opacity(0.3), lineWidth: 1)
                        )
                    }
                }
                .opacity(showContent ? 1 : 0)
                .offset(y: showContent ? 0 : 20)
                
                Spacer().frame(height: 40)
            }
            .padding(.horizontal, 20)
        }
        .onAppear {
            withAnimation(.easeOut(duration: 0.6).delay(0.2)) {
                showContent = true
            }
        }
    }
}

#Preview {
    NavigationStack {
        QuizGameView(mode: .nameFromMeaning)
    }
}



