//
//  Feeling.swift
//  Names of Allah
//
//  Data models for the "I am feeling" advisor feature
//

import Foundation

// MARK: - Feeling Model

/// Represents a feeling/emotion that can be matched to Names of Allah
struct Feeling: Codable, Identifiable, Hashable {
    let id: String
    let primaryLabel: String
    let aliases: [String]
    let description: String
    let category: FeelingCategory
    let linkedNames: [FeelingToNameLink]
    
    /// All searchable terms for this feeling (primary + aliases)
    var allSearchTerms: [String] {
        [primaryLabel.lowercased()] + aliases.map { $0.lowercased() }
    }
}

// MARK: - Feeling Category

/// Categories to group feelings for easier browsing
enum FeelingCategory: String, Codable, CaseIterable, Identifiable {
    case struggling = "Struggling"
    case seeking = "Seeking"
    case grateful = "Grateful"
    case reflecting = "Reflecting"
    
    var id: String { rawValue }
    
    var icon: String {
        switch self {
        case .struggling: return "cloud.rain.fill"
        case .seeking: return "sparkles"
        case .grateful: return "heart.fill"
        case .reflecting: return "leaf.fill"
        }
    }
    
    var description: String {
        switch self {
        case .struggling: return "When life feels heavy"
        case .seeking: return "Searching for more"
        case .grateful: return "Counting blessings"
        case .reflecting: return "Looking inward"
        }
    }
}

// MARK: - Feeling to Name Link

/// Links a feeling to a specific Name of Allah with priority and rationale
struct FeelingToNameLink: Codable, Hashable {
    let nameId: String
    let priority: Int // 1 = primary, 2 = secondary, etc.
    let rationale: String
}

// MARK: - Advisor Result

/// The result returned by the advisor service
struct AdvisorResult {
    let feeling: Feeling?
    let matchType: MatchType
    let recommendedNames: [RecommendedName]
    let message: String
    
    enum MatchType {
        case exact
        case alias
        case fuzzy
        case category
        case fallback
    }
}

/// A recommended Name with its associated rationale
struct RecommendedName {
    let name: AllahName
    let rationale: String
    let priority: Int
}

// MARK: - Feelings Data Container

/// Container for loading feelings from JSON
struct FeelingsData: Codable {
    let feelings: [Feeling]
}


