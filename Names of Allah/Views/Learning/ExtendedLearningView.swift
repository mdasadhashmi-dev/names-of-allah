// ExtendedLearningView.swift - Deep dive into each name with authentic sources
import SwiftUI

struct ExtendedLearningView: View {
    let nameId: String
    let name: AllahName
    @State private var selectedTab: LearningTab = .hadiths
    @Environment(\.dismiss) private var dismiss
    
    private var learningContent: ExtendedLearning? {
        ExtendedLearningDatabase.shared.getContent(for: nameId)
    }
    
    enum LearningTab: String, CaseIterable {
        case hadiths = "Hadiths"
        case insights = "Scholars"
        case practical = "Practice"
        case duas = "Du'as"
    }
    
    var body: some View {
        ZStack {
            // Background gradient
            LinearGradient(
                colors: [Color(red: 0.05, green: 0.05, blue: 0.1), Color.black],
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()
            
            if let content = learningContent {
                VStack(spacing: 0) {
                    // Header
                    headerView
                    
                    // Tab Selector
                    tabSelector
                    
                    // Content
                    ScrollView {
                        VStack(spacing: 20) {
                            switch selectedTab {
                            case .hadiths:
                                hadithsSection(content.hadiths)
                            case .insights:
                                insightsSection(content.scholarlyInsights)
                            case .practical:
                                practicalSection(content.realLifeApplications)
                            case .duas:
                                duasSection(content.duas)
                            }
                        }
                        .padding(.horizontal, 20)
                        .padding(.bottom, 100)
                    }
                }
            } else {
                contentComingSoonView
            }
        }
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                Button(action: { dismiss() }) {
                    Image(systemName: "xmark.circle.fill")
                        .font(.system(size: 28))
                        .foregroundColor(.white.opacity(0.7))
                }
            }
        }
    }
    
    // MARK: - Header View
    private var headerView: some View {
        VStack(spacing: 12) {
            Image(systemName: "book.fill")
                .font(.system(size: 40))
                .foregroundColor(.appGold)
            
            Text("Extended Learning")
                .font(.system(size: 24, weight: .bold, design: .serif))
                .foregroundColor(.white)
            
            VStack(spacing: 4) {
                Text(name.arabic)
                    .font(.system(size: 28, weight: .bold, design: .serif))
                    .foregroundColor(.appGold)
                
                Text(name.transliteration)
                    .font(.system(size: 16, weight: .medium))
                    .foregroundColor(.white.opacity(0.7))
            }
            
            Text("From Authentic Sources")
                .font(.system(size: 12, weight: .light))
                .foregroundColor(.white.opacity(0.5))
                .padding(.top, 4)
        }
        .padding(.vertical, 30)
    }
    
    // MARK: - Tab Selector
    private var tabSelector: some View {
        HStack(spacing: 8) {
            ForEach(LearningTab.allCases, id: \.self) { tab in
                Button(action: { withAnimation(.easeInOut(duration: 0.3)) { selectedTab = tab } }) {
                    Text(tab.rawValue)
                        .font(.system(size: 14, weight: selectedTab == tab ? .semibold : .regular))
                        .foregroundColor(selectedTab == tab ? Color(red: 0.1, green: 0.1, blue: 0.15) : .white.opacity(0.7))
                        .padding(.horizontal, 16)
                        .padding(.vertical, 10)
                        .background(
                            RoundedRectangle(cornerRadius: 20)
                                .fill(selectedTab == tab ? Color.appGold : Color.white.opacity(0.1))
                        )
                }
            }
        }
        .padding(.horizontal, 20)
        .padding(.bottom, 20)
    }
    
    // MARK: - Hadiths Section
    @ViewBuilder
    private func hadithsSection(_ hadiths: [HadithReference]) -> some View {
        ForEach(hadiths) { hadith in
            VStack(alignment: .leading, spacing: 16) {
                // Source badge
                HStack {
                    Image(systemName: "book.closed.fill")
                        .font(.system(size: 12))
                    Text(hadith.reference)
                        .font(.system(size: 12, weight: .semibold))
                    Spacer()
                    Text(hadith.grading)
                        .font(.system(size: 11, weight: .bold))
                        .padding(.horizontal, 8)
                        .padding(.vertical, 4)
                        .background(Color.green.opacity(0.2))
                        .foregroundColor(.green)
                        .cornerRadius(8)
                }
                .foregroundColor(.appGold)
                
                // Narrator
                HStack(spacing: 6) {
                    Image(systemName: "person.fill")
                        .font(.system(size: 10))
                    Text("Narrated by \(hadith.narrator)")
                        .font(.system(size: 12, weight: .light))
                }
                .foregroundColor(.white.opacity(0.6))
                
                Divider().background(Color.white.opacity(0.2))
                
                // Arabic text
                Text(hadith.arabicText)
                    .font(.system(size: 20, design: .serif))
                    .foregroundColor(.white)
                    .multilineTextAlignment(.trailing)
                    .frame(maxWidth: .infinity, alignment: .trailing)
                    .padding(.vertical, 8)
                
                // Transliteration (if available)
                if let transliteration = hadith.transliteration {
                    Text(transliteration)
                        .font(.system(size: 13, weight: .light))
                        .foregroundColor(.white.opacity(0.5))
                        .italic()
                        .padding(.vertical, 4)
                }
                
                // Translation
                Text(hadith.translation)
                    .font(.system(size: 15, weight: .regular))
                    .foregroundColor(.white.opacity(0.9))
                    .lineSpacing(6)
                    .padding(.vertical, 8)
                
                // Context
                VStack(alignment: .leading, spacing: 8) {
                    HStack(spacing: 6) {
                        Image(systemName: "lightbulb.fill")
                            .font(.system(size: 12))
                        Text("Context")
                            .font(.system(size: 13, weight: .semibold))
                    }
                    .foregroundColor(.appGold)
                    
                    Text(hadith.context)
                        .font(.system(size: 14, weight: .light))
                        .foregroundColor(.white.opacity(0.8))
                        .lineSpacing(4)
                }
                .padding(12)
                .background(
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color.appGold.opacity(0.1))
                )
                
                // Source link
                HStack(spacing: 6) {
                    Image(systemName: "link")
                        .font(.system(size: 10))
                    Text(hadith.source)
                        .font(.system(size: 11, weight: .light))
                }
                .foregroundColor(.white.opacity(0.4))
            }
            .padding(20)
            .background(
                RoundedRectangle(cornerRadius: 20)
                    .fill(Color.white.opacity(0.05))
                    .overlay(
                        RoundedRectangle(cornerRadius: 20)
                            .stroke(Color.appGold.opacity(0.2), lineWidth: 1)
                    )
            )
        }
    }
    
    // MARK: - Insights Section
    @ViewBuilder
    private func insightsSection(_ insights: [ScholarlyInsight]) -> some View {
        ForEach(insights) { insight in
            VStack(alignment: .leading, spacing: 14) {
                // Scholar name
                HStack(spacing: 8) {
                    Image(systemName: "graduationcap.fill")
                        .font(.system(size: 16))
                        .foregroundColor(.appGold)
                    Text(insight.scholar)
                        .font(.system(size: 18, weight: .semibold, design: .serif))
                        .foregroundColor(.white)
                }
                
                Divider().background(Color.white.opacity(0.2))
                
                // Arabic quote if available
                if let arabicQuote = insight.arabicQuote {
                    Text(arabicQuote)
                        .font(.system(size: 18, design: .serif))
                        .foregroundColor(.appGold.opacity(0.8))
                        .multilineTextAlignment(.trailing)
                        .frame(maxWidth: .infinity, alignment: .trailing)
                        .padding(.vertical, 8)
                }
                
                // Insight
                Text(insight.insight)
                    .font(.system(size: 15, weight: .regular))
                    .foregroundColor(.white.opacity(0.9))
                    .lineSpacing(6)
                
                // Source
                HStack(spacing: 6) {
                    Image(systemName: "book.fill")
                        .font(.system(size: 10))
                    Text("Source: \(insight.source)")
                        .font(.system(size: 12, weight: .light))
                }
                .foregroundColor(.white.opacity(0.5))
                .padding(.top, 8)
            }
            .padding(20)
            .background(
                RoundedRectangle(cornerRadius: 20)
                    .fill(Color.white.opacity(0.05))
                    .overlay(
                        RoundedRectangle(cornerRadius: 20)
                            .stroke(Color.appGold.opacity(0.2), lineWidth: 1)
                    )
            )
        }
    }
    
    // MARK: - Practical Section
    @ViewBuilder
    private func practicalSection(_ applications: [String]) -> some View {
        VStack(spacing: 16) {
            HStack {
                Image(systemName: "hand.raised.fill")
                    .font(.system(size: 20))
                    .foregroundColor(.appGold)
                Text("Apply This Name in Your Life")
                    .font(.system(size: 18, weight: .semibold, design: .serif))
                    .foregroundColor(.white)
                Spacer()
            }
            .padding(.bottom, 8)
            
            ForEach(Array(applications.enumerated()), id: \.offset) { index, application in
                HStack(alignment: .top, spacing: 12) {
                    ZStack {
                        Circle()
                            .fill(Color.appGold)
                            .frame(width: 28, height: 28)
                        Text("\(index + 1)")
                            .font(.system(size: 13, weight: .bold))
                            .foregroundColor(Color(red: 0.1, green: 0.1, blue: 0.15))
                    }
                    
                    Text(application)
                        .font(.system(size: 15, weight: .regular))
                        .foregroundColor(.white.opacity(0.9))
                        .lineSpacing(5)
                        .fixedSize(horizontal: false, vertical: true)
                    
                    Spacer()
                }
                .padding(16)
                .background(
                    RoundedRectangle(cornerRadius: 16)
                        .fill(Color.white.opacity(0.05))
                        .overlay(
                            RoundedRectangle(cornerRadius: 16)
                                .stroke(Color.appGold.opacity(0.2), lineWidth: 1)
                        )
                )
            }
        }
    }
    
    // MARK: - Duas Section
    @ViewBuilder
    private func duasSection(_ duas: [DuaReference]) -> some View {
        ForEach(duas) { dua in
            VStack(alignment: .leading, spacing: 16) {
                // Occasion badge
                HStack {
                    Image(systemName: "hands.sparkles.fill")
                        .font(.system(size: 14))
                    Text(dua.occasion)
                        .font(.system(size: 13, weight: .semibold))
                    Spacer()
                }
                .foregroundColor(.appGold)
                
                Divider().background(Color.white.opacity(0.2))
                
                // Arabic text
                Text(dua.arabicText)
                    .font(.system(size: 22, design: .serif))
                    .foregroundColor(.white)
                    .multilineTextAlignment(.trailing)
                    .frame(maxWidth: .infinity, alignment: .trailing)
                    .padding(.vertical, 12)
                
                // Transliteration
                Text(dua.transliteration)
                    .font(.system(size: 14, weight: .light))
                    .foregroundColor(.white.opacity(0.6))
                    .italic()
                    .padding(.vertical, 8)
                
                // Translation
                Text(dua.translation)
                    .font(.system(size: 15, weight: .medium))
                    .foregroundColor(.white.opacity(0.95))
                    .lineSpacing(6)
                    .padding(.vertical, 8)
                
                // Source
                HStack(spacing: 6) {
                    Image(systemName: "book.fill")
                        .font(.system(size: 10))
                    Text(dua.source)
                        .font(.system(size: 12, weight: .light))
                }
                .foregroundColor(.white.opacity(0.5))
            }
            .padding(20)
            .background(
                RoundedRectangle(cornerRadius: 20)
                    .fill(
                        LinearGradient(
                            colors: [
                                Color.appGold.opacity(0.08),
                                Color.white.opacity(0.05)
                            ],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 20)
                            .stroke(Color.appGold.opacity(0.3), lineWidth: 1)
                    )
            )
        }
    }
    
    // MARK: - Content Coming Soon
    private var contentComingSoonView: some View {
        VStack(spacing: 20) {
            Image(systemName: "book.closed")
                .font(.system(size: 60))
                .foregroundColor(.appGold.opacity(0.5))
            
            Text("Extended Learning")
                .font(.system(size: 24, weight: .bold, design: .serif))
                .foregroundColor(.white)
            
            Text("Content Coming Soon")
                .font(.system(size: 16, weight: .light))
                .foregroundColor(.white.opacity(0.6))
            
            Text("We're curating authentic hadith and scholarly insights for this name from trusted sources.")
                .font(.system(size: 14, weight: .light))
                .foregroundColor(.white.opacity(0.5))
                .multilineTextAlignment(.center)
                .padding(.horizontal, 40)
                .lineSpacing(4)
        }
    }
}

