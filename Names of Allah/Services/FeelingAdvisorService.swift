//
//  FeelingAdvisorService.swift
//  Names of Allah
//
//  Service that matches user feelings to relevant Names of Allah
//

import Foundation

// MARK: - Feeling Advisor Service

class FeelingAdvisorService {
    static let shared = FeelingAdvisorService()
    
    private var feelings: [Feeling] = []
    private var feelingsByCategory: [FeelingCategory: [Feeling]] = [:]
    private var searchIndex: [String: Feeling] = [:] // Maps lowercase terms to feelings
    
    // Stopwords to filter from user input
    private let stopwords: Set<String> = [
        "i", "am", "feeling", "feel", "very", "really", "so", "just",
        "a", "an", "the", "bit", "little", "quite", "extremely", "somewhat",
        "today", "lately", "right", "now", "like", "kind", "of"
    ]
    
    private init() {
        loadFeelings()
    }
    
    // MARK: - Data Loading
    
    private func loadFeelings() {
        // Try loading from JSON file first
        if let url = Bundle.main.url(forResource: "feelings-to-names", withExtension: "json") {
            do {
                let data = try Data(contentsOf: url)
                let decoder = JSONDecoder()
                let feelingsData = try decoder.decode(FeelingsData.self, from: data)
                self.feelings = feelingsData.feelings
                buildIndices()
                return
            } catch {
                print("FeelingAdvisorService: Error loading feelings: \(error)")
            }
        }
        
        // Use built-in feelings as fallback
        self.feelings = Self.builtInFeelings
        buildIndices()
    }
    
    // MARK: - Built-in Feelings Data
    
    private static let builtInFeelings: [Feeling] = [
        // STRUGGLING
        Feeling(
            id: "hopeless",
            primaryLabel: "hopeless",
            aliases: ["despair", "no hope", "giving up", "defeated", "stuck"],
            description: "Remember that Allah is the Opener of all doors",
            category: .struggling,
            linkedNames: [
                FeelingToNameLink(nameId: "al-fattah", priority: 1, rationale: "Al-Fattāḥ is the Opener, the One who opens doors that seem permanently closed. When Prophet Musa faced the sea with Pharaoh's army behind him, Allah opened a path through the impossible."),
                FeelingToNameLink(nameId: "al-wakeel", priority: 2, rationale: "Al-Wakeel is the Trustee, the One you can rely upon completely. When you've exhausted all options, trust that He has a plan."),
                FeelingToNameLink(nameId: "ar-rahman", priority: 3, rationale: "Ar-Rahmān's mercy encompasses all creation. Even in your darkest moment, His mercy has not abandoned you.")
            ]
        ),
        Feeling(
            id: "anxious",
            primaryLabel: "anxious",
            aliases: ["worried", "nervous", "stressed", "panic", "restless", "overwhelmed"],
            description: "Find peace in knowing that Allah is in control",
            category: .struggling,
            linkedNames: [
                FeelingToNameLink(nameId: "al-wakeel", priority: 1, rationale: "Al-Wakeel is the ultimate Trustee. Hand over your worries to Him. 'Sufficient for us is Allah, and He is the best Disposer of affairs.'"),
                FeelingToNameLink(nameId: "as-samee", priority: 2, rationale: "As-Samīʿ hears every whisper of your anxious heart. You are never alone with your worries."),
                FeelingToNameLink(nameId: "al-mumin", priority: 3, rationale: "Al-Muʾmin is the Granter of Security. He can replace anxiety with peace.")
            ]
        ),
        Feeling(
            id: "sad",
            primaryLabel: "sad",
            aliases: ["depressed", "down", "unhappy", "grief", "grieving", "sorrowful"],
            description: "Let the Most Gentle comfort your heart",
            category: .struggling,
            linkedNames: [
                FeelingToNameLink(nameId: "al-lateef", priority: 1, rationale: "Al-Laṭīf is the Most Gentle. He works in ways so gentle you may not notice until later. Your sadness may be leading to something beautiful."),
                FeelingToNameLink(nameId: "ar-rauf", priority: 2, rationale: "Ar-Raʾūf is the Most Kind. His kindness reaches into the depths of sadness."),
                FeelingToNameLink(nameId: "al-jabbar", priority: 3, rationale: "Al-Jabbār mends broken hearts. Let Him heal you.")
            ]
        ),
        Feeling(
            id: "lonely",
            primaryLabel: "lonely",
            aliases: ["alone", "isolated", "abandoned", "forgotten", "disconnected"],
            description: "Allah is closer to you than you can imagine",
            category: .struggling,
            linkedNames: [
                FeelingToNameLink(nameId: "al-wali", priority: 1, rationale: "Al-Walī is the Protecting Friend who never leaves your side. He is with you in every moment."),
                FeelingToNameLink(nameId: "al-wadud", priority: 2, rationale: "Al-Wadūd is the Most Loving. His love for you is constant and unconditional."),
                FeelingToNameLink(nameId: "al-khabeer", priority: 3, rationale: "Al-Khabīr knows your hidden pain, the loneliness no one else sees.")
            ]
        ),
        Feeling(
            id: "fearful",
            primaryLabel: "fearful",
            aliases: ["scared", "afraid", "terrified", "frightened", "worried about future"],
            description: "Let the Guardian watch over you",
            category: .struggling,
            linkedNames: [
                FeelingToNameLink(nameId: "al-muhaymin", priority: 1, rationale: "Al-Muhaymin is the Guardian who watches over every detail of your life."),
                FeelingToNameLink(nameId: "al-hafeez", priority: 2, rationale: "Al-Ḥafīẓ protects you even when you feel most vulnerable."),
                FeelingToNameLink(nameId: "al-qawiyy", priority: 3, rationale: "Al-Qawiyy is the All-Strong. Whatever you fear has no power compared to His strength.")
            ]
        ),
        Feeling(
            id: "guilty",
            primaryLabel: "guilty",
            aliases: ["ashamed", "regret", "remorse", "sinful", "shame", "messed up"],
            description: "The door of forgiveness is always open",
            category: .struggling,
            linkedNames: [
                FeelingToNameLink(nameId: "at-tawwab", priority: 1, rationale: "At-Tawwāb always accepts repentance. No matter how many times you fall, His door remains open."),
                FeelingToNameLink(nameId: "al-ghafoor", priority: 2, rationale: "Al-Ghafūr is the All-Forgiving. His forgiveness is so complete it erases sins."),
                FeelingToNameLink(nameId: "al-afuw", priority: 3, rationale: "Al-ʿAfuww not only forgives but erases the sin completely.")
            ]
        ),
        Feeling(
            id: "angry",
            primaryLabel: "angry",
            aliases: ["frustrated", "irritated", "bitter", "resentful", "mad", "furious"],
            description: "Find peace in divine justice and forbearance",
            category: .struggling,
            linkedNames: [
                FeelingToNameLink(nameId: "al-haleem", priority: 1, rationale: "Al-Ḥalīm is the Forbearing One who does not rush to punish. Learn from His patience."),
                FeelingToNameLink(nameId: "al-adl", priority: 2, rationale: "Al-ʿAdl is the Just. Trust that perfect justice will be served."),
                FeelingToNameLink(nameId: "as-sabur", priority: 3, rationale: "Aṣ-Ṣabūr is the Patient. Ask Him to grant you patience.")
            ]
        ),
        Feeling(
            id: "lost",
            primaryLabel: "lost",
            aliases: ["confused", "no direction", "purposeless", "dont know what to do"],
            description: "Let the Guide show you the way",
            category: .struggling,
            linkedNames: [
                FeelingToNameLink(nameId: "al-hadi", priority: 1, rationale: "Al-Hādī is the Guide who leads hearts to the straight path."),
                FeelingToNameLink(nameId: "ar-rasheed", priority: 2, rationale: "Ar-Rashīd directs affairs with perfect wisdom."),
                FeelingToNameLink(nameId: "an-nur", priority: 3, rationale: "An-Nūr is the Light that illuminates darkness.")
            ]
        ),
        
        // SEEKING
        Feeling(
            id: "seeking-strength",
            primaryLabel: "weak",
            aliases: ["powerless", "need strength", "cant do this", "exhausted", "fragile"],
            description: "Draw strength from the All-Strong",
            category: .seeking,
            linkedNames: [
                FeelingToNameLink(nameId: "al-qawiyy", priority: 1, rationale: "Al-Qawiyy is the All-Strong. When you feel weak, connect to His infinite strength."),
                FeelingToNameLink(nameId: "al-mateen", priority: 2, rationale: "Al-Matīn is the Firm, whose strength never wavers."),
                FeelingToNameLink(nameId: "al-muqtadir", priority: 3, rationale: "Al-Muqtadir is the All-Powerful. Nothing is beyond His power.")
            ]
        ),
        Feeling(
            id: "seeking-guidance",
            primaryLabel: "seeking guidance",
            aliases: ["need direction", "which path", "guide me", "show me the way"],
            description: "Turn to the Guide of all paths",
            category: .seeking,
            linkedNames: [
                FeelingToNameLink(nameId: "al-hadi", priority: 1, rationale: "Al-Hādī leads to the straight path. Ask Him for guidance."),
                FeelingToNameLink(nameId: "an-nur", priority: 2, rationale: "An-Nūr illuminates the path for those who seek it."),
                FeelingToNameLink(nameId: "ar-rasheed", priority: 3, rationale: "Ar-Rashīd directs to the right path with perfect wisdom.")
            ]
        ),
        Feeling(
            id: "seeking-peace",
            primaryLabel: "seeking peace",
            aliases: ["need calm", "want tranquility", "inner peace", "rest", "serenity"],
            description: "Find peace with the Source of Peace",
            category: .seeking,
            linkedNames: [
                FeelingToNameLink(nameId: "al-mumin", priority: 1, rationale: "Al-Muʾmin grants security. He can calm the storms inside your heart."),
                FeelingToNameLink(nameId: "al-wadud", priority: 2, rationale: "Al-Wadūd's love brings peace that nothing else can."),
                FeelingToNameLink(nameId: "al-wali", priority: 3, rationale: "Al-Walī is your Friend who will never abandon you.")
            ]
        ),
        Feeling(
            id: "seeking-forgiveness",
            primaryLabel: "need forgiveness",
            aliases: ["want to repent", "made mistakes", "need second chance", "start fresh"],
            description: "His forgiveness is greater than any sin",
            category: .seeking,
            linkedNames: [
                FeelingToNameLink(nameId: "al-ghaffar", priority: 1, rationale: "Al-Ghaffār forgives again and again. There is no darkness too deep for His forgiveness."),
                FeelingToNameLink(nameId: "at-tawwab", priority: 2, rationale: "At-Tawwāb loves when His servants return to Him."),
                FeelingToNameLink(nameId: "ar-raheem", priority: 3, rationale: "Ar-Raḥīm shows special mercy to those who turn back with sincere hearts.")
            ]
        ),
        Feeling(
            id: "seeking-provision",
            primaryLabel: "worried about money",
            aliases: ["financial stress", "need provision", "struggling financially", "broke"],
            description: "The Provider's treasures never run out",
            category: .seeking,
            linkedNames: [
                FeelingToNameLink(nameId: "ar-razzaq", priority: 1, rationale: "Ar-Razzāq provides without limit. He will provide for you."),
                FeelingToNameLink(nameId: "al-wahhab", priority: 2, rationale: "Al-Wahhāb gives gifts you never even asked for."),
                FeelingToNameLink(nameId: "al-mughni", priority: 3, rationale: "Al-Mughnī can transform poverty into abundance.")
            ]
        ),
        
        // GRATEFUL
        Feeling(
            id: "grateful-blessed",
            primaryLabel: "blessed",
            aliases: ["fortunate", "grateful", "thankful", "appreciative"],
            description: "Express gratitude to the Source of all blessings",
            category: .grateful,
            linkedNames: [
                FeelingToNameLink(nameId: "ash-shakur", priority: 1, rationale: "Ash-Shakūr appreciates your gratitude and multiplies your blessings."),
                FeelingToNameLink(nameId: "al-wahhab", priority: 2, rationale: "Al-Wahhāb is the Bestower of all good. Acknowledge the Giver."),
                FeelingToNameLink(nameId: "al-kareem", priority: 3, rationale: "Al-Karīm is the Most Generous. His generosity knows no bounds.")
            ]
        ),
        Feeling(
            id: "grateful-content",
            primaryLabel: "content",
            aliases: ["satisfied", "at peace", "enough", "fulfilled"],
            description: "Contentment is a treasure from the Self-Sufficient",
            category: .grateful,
            linkedNames: [
                FeelingToNameLink(nameId: "al-ghaniyy", priority: 1, rationale: "Al-Ghaniyy needs nothing. In Him, you have everything."),
                FeelingToNameLink(nameId: "as-samad", priority: 2, rationale: "Aṣ-Ṣamad is the Eternal Refuge. He is enough."),
                FeelingToNameLink(nameId: "al-wadud", priority: 3, rationale: "Al-Wadūd's love fills the heart completely.")
            ]
        ),
        Feeling(
            id: "grateful-loved",
            primaryLabel: "loved",
            aliases: ["feeling loved", "cherished", "valued", "cared for"],
            description: "Bask in the love of the Most Loving",
            category: .grateful,
            linkedNames: [
                FeelingToNameLink(nameId: "al-wadud", priority: 1, rationale: "Al-Wadūd loved you before anyone else knew you existed."),
                FeelingToNameLink(nameId: "ar-rauf", priority: 2, rationale: "Ar-Raʾūf's kindness is tender and gentle."),
                FeelingToNameLink(nameId: "al-kareem", priority: 3, rationale: "Al-Karīm loves abundantly and unconditionally.")
            ]
        ),
        
        // REFLECTING
        Feeling(
            id: "reflecting-humble",
            primaryLabel: "humble",
            aliases: ["humbled", "small", "in awe", "realizing my place"],
            description: "Humility before the Supreme is wisdom",
            category: .reflecting,
            linkedNames: [
                FeelingToNameLink(nameId: "al-adheem", priority: 1, rationale: "Al-ʿAẓīm is the Magnificent. True humility comes from witnessing His magnificence."),
                FeelingToNameLink(nameId: "al-kabeer", priority: 2, rationale: "Al-Kabīr is the Greatest. Pride melts when you grasp His greatness."),
                FeelingToNameLink(nameId: "al-mutaali", priority: 3, rationale: "Al-Mutaʿālī is the Supreme, exalted beyond comparison.")
            ]
        ),
        Feeling(
            id: "reflecting-questioning",
            primaryLabel: "questioning",
            aliases: ["doubting", "why", "struggling with faith", "wondering"],
            description: "Questions can lead to deeper understanding",
            category: .reflecting,
            linkedNames: [
                FeelingToNameLink(nameId: "al-haqq", priority: 1, rationale: "Al-Ḥaqq is the Truth. Sincere questions lead to truth."),
                FeelingToNameLink(nameId: "al-aleem", priority: 2, rationale: "Al-ʿAlīm knows all answers. Some come now, others later."),
                FeelingToNameLink(nameId: "al-hakim", priority: 3, rationale: "Al-Ḥakīm is Most Wise. Trust there is wisdom in what you don't yet understand.")
            ]
        ),
        Feeling(
            id: "reflecting-mortality",
            primaryLabel: "thinking about death",
            aliases: ["mortality", "life is short", "afterlife", "end of life"],
            description: "Life and death are in the hands of the Ever-Living",
            category: .reflecting,
            linkedNames: [
                FeelingToNameLink(nameId: "al-hayy", priority: 1, rationale: "Al-Ḥayy is the Ever-Living who never dies. Connecting to Him is eternal life."),
                FeelingToNameLink(nameId: "al-baith", priority: 2, rationale: "Al-Bāʿith will raise all of creation. Death is not the end."),
                FeelingToNameLink(nameId: "al-baqi", priority: 3, rationale: "Al-Bāqī is the Everlasting. Attach your heart to Him.")
            ]
        )
    ]
    
    private func buildIndices() {
        // Build category index
        feelingsByCategory = Dictionary(grouping: feelings, by: { $0.category })
        
        // Build search index
        for feeling in feelings {
            for term in feeling.allSearchTerms {
                searchIndex[term] = feeling
            }
        }
    }
    
    // MARK: - Public Methods
    
    /// Get all feelings grouped by category
    func getFeelingsByCategory() -> [FeelingCategory: [Feeling]] {
        return feelingsByCategory
    }
    
    /// Get all feelings
    func getAllFeelings() -> [Feeling] {
        return feelings
    }
    
    /// Suggest Names for a feeling ID (when user selects from chips)
    func suggestNames(forFeelingId id: String) -> AdvisorResult {
        guard let feeling = feelings.first(where: { $0.id == id }) else {
            return createFallbackResult()
        }
        
        return createResult(for: feeling, matchType: .exact)
    }
    
    /// Suggest Names for free text input
    func suggestNames(forFeelingText text: String) -> AdvisorResult {
        let normalizedTokens = normalizeInput(text)
        
        if normalizedTokens.isEmpty {
            return createFallbackResult()
        }
        
        // Step 1: Exact match on primary label or alias
        if let feeling = findExactMatch(tokens: normalizedTokens) {
            return createResult(for: feeling, matchType: .exact)
        }
        
        // Step 2: Partial/alias match
        if let feeling = findAliasMatch(tokens: normalizedTokens) {
            return createResult(for: feeling, matchType: .alias)
        }
        
        // Step 3: Fuzzy match
        if let feeling = findFuzzyMatch(tokens: normalizedTokens) {
            return createResult(for: feeling, matchType: .fuzzy)
        }
        
        // Step 4: Category-based fallback
        if let feeling = findCategoryMatch(tokens: normalizedTokens) {
            return createResult(for: feeling, matchType: .category)
        }
        
        // Final fallback
        return createFallbackResult()
    }
    
    // MARK: - Input Normalization
    
    private func normalizeInput(_ text: String) -> [String] {
        let lowercased = text.lowercased()
        
        // Remove diacritics
        let withoutDiacritics = lowercased.folding(options: .diacriticInsensitive, locale: .current)
        
        // Remove punctuation and split into tokens
        let tokens = withoutDiacritics
            .components(separatedBy: CharacterSet.alphanumerics.inverted)
            .filter { !$0.isEmpty }
        
        // Filter stopwords
        return tokens.filter { !stopwords.contains($0) }
    }
    
    // MARK: - Matching Methods
    
    private func findExactMatch(tokens: [String]) -> Feeling? {
        // Try joining all tokens as a phrase first
        let phrase = tokens.joined(separator: " ")
        if let feeling = searchIndex[phrase] {
            return feeling
        }
        
        // Try each individual token
        for token in tokens {
            if let feeling = searchIndex[token] {
                return feeling
            }
        }
        
        return nil
    }
    
    private func findAliasMatch(tokens: [String]) -> Feeling? {
        for feeling in feelings {
            for searchTerm in feeling.allSearchTerms {
                for token in tokens {
                    if searchTerm.contains(token) || token.contains(searchTerm) {
                        return feeling
                    }
                }
            }
        }
        return nil
    }
    
    private func findFuzzyMatch(tokens: [String]) -> Feeling? {
        var bestMatch: (feeling: Feeling, score: Int)?
        
        for feeling in feelings {
            for searchTerm in feeling.allSearchTerms {
                for token in tokens {
                    let distance = levenshteinDistance(token, searchTerm)
                    // Accept matches with distance <= 2 for words of length 5+
                    if token.count >= 4 && distance <= 2 {
                        let score = 100 - distance * 10
                        if bestMatch == nil || score > bestMatch!.score {
                            bestMatch = (feeling, score)
                        }
                    }
                }
            }
        }
        
        return bestMatch?.feeling
    }
    
    private func findCategoryMatch(tokens: [String]) -> Feeling? {
        // Map common words to categories
        let categoryKeywords: [String: FeelingCategory] = [
            "sad": .struggling, "pain": .struggling, "hurt": .struggling, "cry": .struggling,
            "scared": .struggling, "worry": .struggling, "stress": .struggling,
            "hope": .seeking, "want": .seeking, "need": .seeking, "search": .seeking,
            "thank": .grateful, "happy": .grateful, "blessed": .grateful, "joy": .grateful,
            "think": .reflecting, "wonder": .reflecting, "question": .reflecting
        ]
        
        for token in tokens {
            if let category = categoryKeywords[token],
               let feelings = feelingsByCategory[category],
               let firstFeeling = feelings.first {
                return firstFeeling
            }
        }
        
        return nil
    }
    
    // MARK: - Result Creation
    
    private func createResult(for feeling: Feeling, matchType: AdvisorResult.MatchType) -> AdvisorResult {
        let sortedLinks = feeling.linkedNames.sorted { $0.priority < $1.priority }
        
        let recommendedNames: [RecommendedName] = sortedLinks.compactMap { link in
            guard let name = AllahNamesDatabase.getName(byId: link.nameId) else {
                return nil
            }
            return RecommendedName(name: name, rationale: link.rationale, priority: link.priority)
        }
        
        let message = createMessage(for: feeling, matchType: matchType)
        
        return AdvisorResult(
            feeling: feeling,
            matchType: matchType,
            recommendedNames: recommendedNames,
            message: message
        )
    }
    
    private func createFallbackResult() -> AdvisorResult {
        // Return mercy-related Names as fallback
        let fallbackIds = ["ar-rahman", "ar-raheem", "al-wadud"]
        let recommendedNames: [RecommendedName] = fallbackIds.enumerated().compactMap { index, id in
            guard let name = AllahNamesDatabase.getName(byId: id) else { return nil }
            return RecommendedName(
                name: name,
                rationale: "Allah's mercy encompasses all things. Turn to Him in any state.",
                priority: index + 1
            )
        }
        
        return AdvisorResult(
            feeling: nil,
            matchType: .fallback,
            recommendedNames: recommendedNames,
            message: "We couldn't find an exact match, but here are Names of hope and mercy to connect with."
        )
    }
    
    private func createMessage(for feeling: Feeling, matchType: AdvisorResult.MatchType) -> String {
        let prefix: String
        switch matchType {
        case .exact:
            prefix = "When you feel \(feeling.primaryLabel)"
        case .alias:
            prefix = "Feeling \(feeling.primaryLabel)"
        case .fuzzy:
            prefix = "It sounds like you might be feeling \(feeling.primaryLabel)"
        case .category:
            prefix = "Based on what you shared, you might be feeling \(feeling.primaryLabel)"
        case .fallback:
            prefix = ""
        }
        
        if prefix.isEmpty {
            return feeling.description
        }
        return "\(prefix), \(feeling.description.lowercased())"
    }
    
    // MARK: - Levenshtein Distance
    
    private func levenshteinDistance(_ s1: String, _ s2: String) -> Int {
        let s1Array = Array(s1)
        let s2Array = Array(s2)
        let m = s1Array.count
        let n = s2Array.count
        
        if m == 0 { return n }
        if n == 0 { return m }
        
        var matrix = [[Int]](repeating: [Int](repeating: 0, count: n + 1), count: m + 1)
        
        for i in 0...m { matrix[i][0] = i }
        for j in 0...n { matrix[0][j] = j }
        
        for i in 1...m {
            for j in 1...n {
                let cost = s1Array[i - 1] == s2Array[j - 1] ? 0 : 1
                matrix[i][j] = min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + cost
                )
            }
        }
        
        return matrix[m][n]
    }
}


