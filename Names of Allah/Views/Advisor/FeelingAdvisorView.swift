//
//  FeelingAdvisorView.swift
//  Names of Allah
//
//  "I am feeling" advisor - recommends Names based on emotional state
//

import SwiftUI

struct FeelingAdvisorView: View {
    @StateObject private var viewModel = FeelingAdvisorViewModel()
    @Environment(\.dismiss) private var dismiss
    @State private var selectedNameId: String? = nil
    @FocusState private var isInputFocused: Bool
    
    var body: some View {
        ZStack {
            // Background
            LinearGradient(
                colors: [Color.appDarkBg, Color.black],
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()
            
            ScrollView {
                VStack(spacing: 24) {
                    // Header
                    headerSection
                    
                    // Input Section
                    inputSection
                    
                    // Content based on state
                    switch viewModel.state {
                    case .idle:
                        feelingsSelectionSection
                    case .loading:
                        loadingSection
                    case .results(let result):
                        resultsSection(result: result)
                    case .noMatch:
                        noMatchSection
                    }
                    
                    Spacer(minLength: 100)
                }
                .padding(.top, 20)
            }
        }
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .navigationBarLeading) {
                Button(action: { dismiss() }) {
                    Image(systemName: "xmark")
                        .font(.system(size: 16, weight: .medium))
                        .foregroundColor(.white.opacity(0.7))
                }
            }
        }
        .navigationDestination(item: $selectedNameId) { nameId in
            CinematicView(nameId: nameId)
        }
    }
    
    // MARK: - Header Section
    
    private var headerSection: some View {
        VStack(spacing: 12) {
            Image(systemName: "heart.text.square.fill")
                .font(.system(size: 50))
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color.appGold, Color.appSoftGold],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
            
            Text("I am feeling...")
                .font(.system(size: 28, weight: .bold, design: .serif))
                .foregroundColor(.white)
            
            Text("Share how you feel and discover Names of Allah that can bring you comfort and guidance")
                .font(.system(size: 14, weight: .light))
                .foregroundColor(.white.opacity(0.6))
                .multilineTextAlignment(.center)
                .padding(.horizontal, 40)
        }
        .padding(.bottom, 8)
    }
    
    // MARK: - Input Section
    
    private var inputSection: some View {
        VStack(spacing: 16) {
            HStack(spacing: 12) {
                Image(systemName: "magnifyingglass")
                    .foregroundColor(Color.appGold.opacity(0.7))
                    .font(.system(size: 18))
                
                TextField("", text: $viewModel.inputText, prompt: Text("Type how you're feeling...")
                    .foregroundColor(.white.opacity(0.4)))
                    .foregroundColor(.white)
                    .font(.system(size: 16, weight: .regular))
                    .focused($isInputFocused)
                    .submitLabel(.search)
                    .onSubmit {
                        viewModel.search()
                    }
                
                if !viewModel.inputText.isEmpty {
                    Button(action: {
                        viewModel.inputText = ""
                        viewModel.reset()
                    }) {
                        Image(systemName: "xmark.circle.fill")
                            .foregroundColor(.white.opacity(0.4))
                    }
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 14)
            .background(
                RoundedRectangle(cornerRadius: 16)
                    .fill(Color.white.opacity(0.08))
                    .overlay(
                        RoundedRectangle(cornerRadius: 16)
                            .stroke(Color.appGold.opacity(isInputFocused ? 0.5 : 0.2), lineWidth: 1)
                    )
            )
            .padding(.horizontal, 20)
            
            // Search button
            if !viewModel.inputText.isEmpty && !viewModel.isShowingResults {
                Button(action: { viewModel.search() }) {
                    HStack(spacing: 8) {
                        Text("Find Names")
                            .font(.system(size: 15, weight: .semibold))
                        Image(systemName: "arrow.right")
                            .font(.system(size: 13, weight: .semibold))
                    }
                    .foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1))
                    .padding(.horizontal, 28)
                    .padding(.vertical, 12)
                    .background(
                        LinearGradient(
                            colors: [Color.appSoftGold, Color.appGold],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .clipShape(Capsule())
                }
            }
        }
    }
    
    // MARK: - Feelings Selection Section
    
    private var feelingsSelectionSection: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text("Or choose how you're feeling")
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(.white.opacity(0.5))
                .padding(.horizontal, 20)
            
            ForEach(FeelingCategory.allCases) { category in
                if let feelings = viewModel.feelingsByCategory[category], !feelings.isEmpty {
                    categorySection(category: category, feelings: feelings)
                }
            }
        }
        .padding(.top, 8)
    }
    
    private func categorySection(category: FeelingCategory, feelings: [Feeling]) -> some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(spacing: 8) {
                Image(systemName: category.icon)
                    .font(.system(size: 14))
                    .foregroundColor(Color.appGold)
                
                Text(category.rawValue)
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundColor(.white)
                
                Text("- \(category.description)")
                    .font(.system(size: 13, weight: .light))
                    .foregroundColor(.white.opacity(0.5))
            }
            .padding(.horizontal, 20)
            
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 10) {
                    ForEach(feelings) { feeling in
                        feelingChip(feeling: feeling)
                    }
                }
                .padding(.horizontal, 20)
            }
        }
    }
    
    private func feelingChip(feeling: Feeling) -> some View {
        Button(action: { viewModel.selectFeeling(feeling) }) {
            Text(feeling.primaryLabel.capitalized)
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(.white)
                .padding(.horizontal, 16)
                .padding(.vertical, 10)
                .background(
                    RoundedRectangle(cornerRadius: 20)
                        .fill(Color.white.opacity(0.1))
                        .overlay(
                            RoundedRectangle(cornerRadius: 20)
                                .stroke(Color.appGold.opacity(0.3), lineWidth: 1)
                        )
                )
        }
    }
    
    // MARK: - Loading Section
    
    private var loadingSection: some View {
        VStack(spacing: 20) {
            ProgressView()
                .progressViewStyle(CircularProgressViewStyle(tint: Color.appGold))
                .scaleEffect(1.2)
            
            Text("Finding the perfect Names for you...")
                .font(.system(size: 15, weight: .light))
                .foregroundColor(.white.opacity(0.6))
        }
        .padding(.top, 60)
    }
    
    // MARK: - Results Section
    
    private func resultsSection(result: AdvisorResult) -> some View {
        VStack(spacing: 24) {
            // Message
            Text(result.message)
                .font(.system(size: 16, weight: .light, design: .serif))
                .foregroundColor(.white.opacity(0.8))
                .multilineTextAlignment(.center)
                .padding(.horizontal, 30)
            
            // Primary recommendation
            if let primaryName = result.recommendedNames.first {
                primaryNameCard(recommendedName: primaryName)
            }
            
            // Supporting names
            if result.recommendedNames.count > 1 {
                supportingNamesSection(names: Array(result.recommendedNames.dropFirst()))
            }
            
            // Try another button
            Button(action: { viewModel.tryAnother() }) {
                HStack(spacing: 8) {
                    Image(systemName: "arrow.counterclockwise")
                        .font(.system(size: 14))
                    Text("Try Another Feeling")
                        .font(.system(size: 14, weight: .medium))
                }
                .foregroundColor(Color.appGold)
                .padding(.horizontal, 20)
                .padding(.vertical, 12)
                .background(
                    Capsule()
                        .stroke(Color.appGold.opacity(0.5), lineWidth: 1)
                )
            }
            .padding(.top, 8)
        }
        .padding(.top, 16)
    }
    
    private func primaryNameCard(recommendedName: RecommendedName) -> some View {
        VStack(spacing: 16) {
            // Arabic name
            Text(recommendedName.name.arabic)
                .font(.system(size: 48, weight: .regular, design: .serif))
                .foregroundColor(.white)
            
            // Transliteration and meaning
            VStack(spacing: 6) {
                Text(recommendedName.name.transliteration)
                    .font(.system(size: 20, weight: .semibold))
                    .foregroundColor(Color.appGold)
                
                Text(recommendedName.name.meaning)
                    .font(.system(size: 16, weight: .light))
                    .foregroundColor(.white.opacity(0.7))
            }
            
            // Rationale
            Text(recommendedName.rationale)
                .font(.system(size: 15, weight: .regular, design: .serif))
                .foregroundColor(.white.opacity(0.8))
                .multilineTextAlignment(.center)
                .lineSpacing(5)
                .padding(.horizontal, 20)
                .padding(.top, 8)
            
            // Learn more button
            if recommendedName.name.hasContent {
                Button(action: { selectedNameId = recommendedName.name.nameId }) {
                    HStack(spacing: 8) {
                        Text("Learn the Full Story")
                            .font(.system(size: 15, weight: .semibold))
                        Image(systemName: "arrow.right")
                            .font(.system(size: 13, weight: .semibold))
                    }
                    .foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1))
                    .padding(.horizontal, 28)
                    .padding(.vertical, 14)
                    .background(
                        LinearGradient(
                            colors: [Color.appSoftGold, Color.appGold],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .clipShape(Capsule())
                    .shadow(color: Color.appGold.opacity(0.3), radius: 10, x: 0, y: 5)
                }
                .padding(.top, 8)
            }
        }
        .padding(.vertical, 28)
        .padding(.horizontal, 24)
        .background(
            RoundedRectangle(cornerRadius: 24)
                .fill(Color.white.opacity(0.06))
                .overlay(
                    RoundedRectangle(cornerRadius: 24)
                        .stroke(Color.appGold.opacity(0.3), lineWidth: 1)
                )
        )
        .padding(.horizontal, 20)
    }
    
    private func supportingNamesSection(names: [RecommendedName]) -> some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Also consider")
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(.white.opacity(0.5))
                .padding(.horizontal, 20)
            
            ForEach(names, id: \.name.id) { recommendedName in
                supportingNameRow(recommendedName: recommendedName)
            }
        }
    }
    
    private func supportingNameRow(recommendedName: RecommendedName) -> some View {
        Button(action: {
            if recommendedName.name.hasContent {
                selectedNameId = recommendedName.name.nameId
            }
        }) {
            HStack(spacing: 16) {
                // Arabic in circle
                ZStack {
                    Circle()
                        .fill(Color.appGold.opacity(0.15))
                        .frame(width: 50, height: 50)
                    
                    Text(recommendedName.name.arabic)
                        .font(.system(size: 18, weight: .regular, design: .serif))
                        .foregroundColor(.white)
                }
                
                VStack(alignment: .leading, spacing: 4) {
                    HStack(spacing: 8) {
                        Text(recommendedName.name.transliteration)
                            .font(.system(size: 15, weight: .semibold))
                            .foregroundColor(Color.appGold)
                        
                        Text(recommendedName.name.meaning)
                            .font(.system(size: 13, weight: .light))
                            .foregroundColor(.white.opacity(0.6))
                    }
                    
                    Text(recommendedName.rationale)
                        .font(.system(size: 13, weight: .regular))
                        .foregroundColor(.white.opacity(0.6))
                        .lineLimit(2)
                }
                
                Spacer()
                
                if recommendedName.name.hasContent {
                    Image(systemName: "chevron.right")
                        .font(.system(size: 12, weight: .semibold))
                        .foregroundColor(Color.appGold.opacity(0.6))
                }
            }
            .padding(16)
            .background(
                RoundedRectangle(cornerRadius: 16)
                    .fill(Color.white.opacity(0.05))
                    .overlay(
                        RoundedRectangle(cornerRadius: 16)
                            .stroke(Color.white.opacity(0.1), lineWidth: 1)
                    )
            )
        }
        .padding(.horizontal, 20)
    }
    
    // MARK: - No Match Section
    
    private var noMatchSection: some View {
        VStack(spacing: 20) {
            Image(systemName: "heart.slash")
                .font(.system(size: 50))
                .foregroundColor(.white.opacity(0.3))
            
            Text("We couldn't find an exact match")
                .font(.system(size: 18, weight: .medium))
                .foregroundColor(.white.opacity(0.7))
            
            Text("Try describing your feeling differently, or choose from the common feelings below")
                .font(.system(size: 14, weight: .light))
                .foregroundColor(.white.opacity(0.5))
                .multilineTextAlignment(.center)
                .padding(.horizontal, 40)
            
            Button(action: { viewModel.reset() }) {
                Text("Browse Feelings")
                    .font(.system(size: 15, weight: .medium))
                    .foregroundColor(Color.appGold)
                    .padding(.horizontal, 24)
                    .padding(.vertical, 12)
                    .background(
                        Capsule()
                            .stroke(Color.appGold.opacity(0.5), lineWidth: 1)
                    )
            }
        }
        .padding(.top, 40)
    }
}

// MARK: - Preview

#Preview {
    NavigationStack {
        FeelingAdvisorView()
    }
}


