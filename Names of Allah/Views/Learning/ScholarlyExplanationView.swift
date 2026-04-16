//
//  ScholarlyExplanationView.swift
//  Names of Allah
//
//  Displays scholarly explanations from Shaykh as-Sa'di's book
//

import SwiftUI

struct ScholarlyExplanationView: View {
    let nameId: String
    @StateObject private var themeManager = ThemeManager.shared

    private var explanation: ScholarlyExplanation? {
        ScholarlyExplanationsDatabase.getExplanation(for: nameId)
    }

    private var name: AllahName? {
        AllahNamesDatabase.getName(byId: nameId)
    }

    var body: some View {
        ZStack {
            LinearGradient(
                colors: themeManager.backgroundGradient,
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()

            if let explanation = explanation, let name = name {
                ScrollView(showsIndicators: false) {
                    VStack(alignment: .leading, spacing: 24) {
                        // Header
                        VStack(spacing: 12) {
                            Text(name.arabic)
                                .font(.system(size: 44, weight: .bold, design: .serif))
                                .foregroundColor(themeManager.textColor)

                            Text(name.transliteration)
                                .font(.system(size: 20, weight: .medium, design: .serif))
                                .foregroundColor(themeManager.primaryColor)

                            Text(name.meaning)
                                .font(.system(size: 16, weight: .light, design: .serif))
                                .foregroundColor(themeManager.secondaryTextColor)
                        }
                        .frame(maxWidth: .infinity)
                        .padding(.top, 30)
                        .padding(.bottom, 10)

                        // Grouped with
                        if let grouped = explanation.groupedWith, !grouped.isEmpty {
                            HStack(spacing: 8) {
                                Image(systemName: "link")
                                    .font(.system(size: 12))
                                    .foregroundColor(themeManager.primaryColor.opacity(0.7))
                                Text("Explained together with: \(grouped.joined(separator: ", "))")
                                    .font(.system(size: 13, weight: .light))
                                    .foregroundColor(themeManager.secondaryTextColor)
                            }
                            .padding(.horizontal, 24)
                        }

                        // Source
                        HStack(spacing: 8) {
                            Image(systemName: "book.closed.fill")
                                .font(.system(size: 14))
                                .foregroundColor(themeManager.primaryColor)
                            Text("Shaykh as-Sa'di (d.1376H)")
                                .font(.system(size: 14, weight: .medium, design: .serif))
                                .foregroundColor(themeManager.primaryColor)
                        }
                        .padding(.horizontal, 24)

                        // Explanation text
                        VStack(alignment: .leading, spacing: 16) {
                            Text("Scholarly Explanation")
                                .font(.system(size: 18, weight: .semibold, design: .serif))
                                .foregroundColor(themeManager.textColor)

                            Text(explanation.explanation)
                                .font(.system(size: themeManager.scaledSize(16), weight: .regular, design: .serif))
                                .foregroundColor(themeManager.textColor.opacity(0.9))
                                .lineSpacing(8)
                                .fixedSize(horizontal: false, vertical: true)
                        }
                        .padding(24)
                        .background(
                            RoundedRectangle(cornerRadius: 20)
                                .fill(themeManager.cardBackground)
                                .overlay(
                                    RoundedRectangle(cornerRadius: 20)
                                        .stroke(themeManager.cardBorder, lineWidth: 1)
                                )
                        )
                        .padding(.horizontal, 20)

                        // Quranic verses
                        if !explanation.quranicVerses.isEmpty {
                            VStack(alignment: .leading, spacing: 16) {
                                HStack(spacing: 8) {
                                    Image(systemName: "book.fill")
                                        .font(.system(size: 16))
                                        .foregroundColor(themeManager.primaryColor)
                                    Text("Quranic Evidence")
                                        .font(.system(size: 18, weight: .semibold, design: .serif))
                                        .foregroundColor(themeManager.textColor)
                                }

                                ForEach(Array(explanation.quranicVerses.enumerated()), id: \.offset) { _, verse in
                                    VStack(alignment: .leading, spacing: 8) {
                                        Text("\"" + verse.text + "\"")
                                            .font(.system(size: themeManager.scaledSize(15), weight: .regular, design: .serif))
                                            .foregroundColor(themeManager.textColor.opacity(0.9))
                                            .lineSpacing(6)
                                            .italic()

                                        Text("— \(verse.reference)")
                                            .font(.system(size: 13, weight: .medium))
                                            .foregroundColor(themeManager.primaryColor.opacity(0.8))
                                    }
                                    .padding(16)
                                    .frame(maxWidth: .infinity, alignment: .leading)
                                    .background(
                                        RoundedRectangle(cornerRadius: 12)
                                            .fill(themeManager.primaryColor.opacity(0.08))
                                    )
                                }
                            }
                            .padding(24)
                            .background(
                                RoundedRectangle(cornerRadius: 20)
                                    .fill(themeManager.cardBackground)
                                    .overlay(
                                        RoundedRectangle(cornerRadius: 20)
                                            .stroke(themeManager.cardBorder, lineWidth: 1)
                                    )
                            )
                            .padding(.horizontal, 20)
                        }

                        // Source attribution
                        Text(explanation.source)
                            .font(.system(size: 11, weight: .light))
                            .foregroundColor(themeManager.secondaryTextColor.opacity(0.6))
                            .multilineTextAlignment(.center)
                            .padding(.horizontal, 40)
                            .frame(maxWidth: .infinity)

                        Spacer().frame(height: 40)
                    }
                }
            } else {
                VStack(spacing: 16) {
                    Image(systemName: "book.closed")
                        .font(.system(size: 50))
                        .foregroundColor(themeManager.secondaryTextColor)
                    Text("Scholarly explanation\nnot yet available")
                        .font(.system(size: 16, weight: .light, design: .serif))
                        .foregroundColor(themeManager.secondaryTextColor)
                        .multilineTextAlignment(.center)
                }
            }
        }
        .navigationBarTitleDisplayMode(.inline)
    }
}
