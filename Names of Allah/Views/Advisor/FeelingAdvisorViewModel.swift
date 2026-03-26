//
//  FeelingAdvisorViewModel.swift
//  Names of Allah
//
//  ViewModel for the "I am feeling" advisor feature
//

import Foundation
import SwiftUI
import Combine

// MARK: - Advisor State

enum AdvisorState: Equatable {
    case idle
    case loading
    case results(AdvisorResult)
    case noMatch
    
    static func == (lhs: AdvisorState, rhs: AdvisorState) -> Bool {
        switch (lhs, rhs) {
        case (.idle, .idle), (.loading, .loading), (.noMatch, .noMatch):
            return true
        case (.results, .results):
            return true // Simplified equality for state comparison
        default:
            return false
        }
    }
}

// MARK: - Feeling Advisor ViewModel

@MainActor
class FeelingAdvisorViewModel: ObservableObject {
    @Published var inputText: String = ""
    @Published var state: AdvisorState = .idle
    @Published var selectedCategory: FeelingCategory? = nil
    
    private let service = FeelingAdvisorService.shared
    
    // MARK: - Computed Properties
    
    var feelingsByCategory: [FeelingCategory: [Feeling]] {
        service.getFeelingsByCategory()
    }
    
    var allFeelings: [Feeling] {
        service.getAllFeelings()
    }
    
    var currentResult: AdvisorResult? {
        if case .results(let result) = state {
            return result
        }
        return nil
    }
    
    var isShowingResults: Bool {
        if case .results = state { return true }
        return false
    }
    
    // MARK: - Actions
    
    /// Search based on text input
    func search() {
        let trimmedText = inputText.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmedText.isEmpty else {
            state = .idle
            return
        }
        
        state = .loading
        
        // Slight delay for UX
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) { [weak self] in
            guard let self = self else { return }
            let result = self.service.suggestNames(forFeelingText: trimmedText)
            
            if result.recommendedNames.isEmpty {
                self.state = .noMatch
            } else {
                self.state = .results(result)
            }
        }
    }
    
    /// Select a feeling from the curated chips
    func selectFeeling(_ feeling: Feeling) {
        state = .loading
        inputText = feeling.primaryLabel
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) { [weak self] in
            guard let self = self else { return }
            let result = self.service.suggestNames(forFeelingId: feeling.id)
            self.state = .results(result)
        }
    }
    
    /// Reset to initial state
    func reset() {
        inputText = ""
        state = .idle
        selectedCategory = nil
    }
    
    /// Try another feeling (go back to selection)
    func tryAnother() {
        state = .idle
        // Keep the text in case user wants to modify it
    }
}


