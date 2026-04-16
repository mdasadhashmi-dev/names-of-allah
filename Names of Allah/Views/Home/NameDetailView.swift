//
//  NameDetailView.swift
//  Names of Allah
//
//  Text/article view for a name — alternative to the cinematic story view
//

import SwiftUI

struct NameDetailView: View {
    let nameId: String
    @StateObject private var themeManager = ThemeManager.shared
    @State private var showingStory = false
    @State private var showingReflection = false
    @State private var showingLearning = false

    private var name: AllahName? {
        AllahNamesDatabase.getName(byId: nameId)
    }

    private var explanation: ScholarlyExplanation? {
        ScholarlyExplanationsDatabase.getExplanation(for: nameId)
    }

    var body: some View {
        ZStack {
            LinearGradient(
                colors: themeManager.backgroundGradient,
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()

            if let name = name {
                ScrollView(showsIndicators: false) {
                    VStack(spacing: 24) {
                        // Header
                        headerSection(name)

                        // Story CTA
                        storyCTA(name)

                        // Scholarly explanation
                        if let explanation = explanation {
                            scholarlyCard(explanation)
                        }

                        // Reflection
                        reflectionCard(name)

                        // Share
                        ShareButton(name: name)
                            .padding(.top, 8)

                        // Navigation
                        navigationButtons(name)

                        Spacer().frame(height: 40)
                    }
                }
            }
        }
        .navigationBarTitleDisplayMode(.inline)
        .navigationDestination(isPresented: $showingStory) {
            CinematicView(nameId: nameId)
        }
    }

    // MARK: - Header
    @ViewBuilder
    private func headerSection(_ name: AllahName) -> some View {
        VStack(spacing: 16) {
            Spacer().frame(height: 20)

            Text("Name #\(name.number)")
                .font(.system(size: 13, weight: .medium))
                .foregroundColor(themeManager.primaryColor.opacity(0.8))
                .padding(.horizontal, 12)
                .padding(.vertical, 4)
                .background(
                    Capsule()
                        .fill(themeManager.primaryColor.opacity(0.12))
                )

            Text(name.arabic)
                .font(.system(size: themeManager.scaledSize(52, isArabic: true), weight: .bold, design: .serif))
                .foregroundColor(themeManager.textColor)

            Text(name.transliteration)
                .font(.system(size: themeManager.scaledSize(24), weight: .medium, design: .serif))
                .foregroundColor(themeManager.primaryColor)

            Text(name.meaning)
                .font(.system(size: themeManager.scaledSize(18), weight: .light, design: .serif))
                .foregroundColor(themeManager.secondaryTextColor)

            if let ref = name.quranicReference {
                HStack(spacing: 6) {
                    Image(systemName: "book.fill")
                        .font(.system(size: 12))
                    Text(ref)
                        .font(.system(size: 13, weight: .medium))
                }
                .foregroundColor(themeManager.primaryColor.opacity(0.7))
            }
        }
        .frame(maxWidth: .infinity)
        .padding(.bottom, 10)
    }

    // MARK: - Story CTA
    @ViewBuilder
    private func storyCTA(_ name: AllahName) -> some View {
        Button(action: { showingStory = true }) {
            HStack(spacing: 12) {
                Image(systemName: "play.circle.fill")
                    .font(.system(size: 24))
                VStack(alignment: .leading, spacing: 4) {
                    Text("Watch Story")
                        .font(.system(size: 17, weight: .semibold, design: .serif))
                    if let title = name.storyTitle {
                        Text(title)
                            .font(.system(size: 13, weight: .light))
                            .foregroundColor(themeManager.secondaryTextColor)
                    }
                }
                Spacer()
                Image(systemName: "chevron.right")
                    .font(.system(size: 14, weight: .semibold))
            }
            .foregroundColor(themeManager.textColor)
            .padding(20)
            .background(
                RoundedRectangle(cornerRadius: 16)
                    .fill(themeManager.primaryColor.opacity(0.12))
                    .overlay(
                        RoundedRectangle(cornerRadius: 16)
                            .stroke(themeManager.primaryColor.opacity(0.3), lineWidth: 1)
                    )
            )
        }
        .padding(.horizontal, 20)
    }

    // MARK: - Scholarly Card
    @ViewBuilder
    private func scholarlyCard(_ explanation: ScholarlyExplanation) -> some View {
        VStack(alignment: .leading, spacing: 16) {
            HStack(spacing: 10) {
                Image(systemName: "book.closed.fill")
                    .font(.system(size: 18))
                    .foregroundColor(themeManager.primaryColor)
                Text("Scholarly Explanation")
                    .font(.system(size: 18, weight: .semibold, design: .serif))
                    .foregroundColor(themeManager.textColor)
            }

            Text("Shaykh as-Sa'di (d.1376H)")
                .font(.system(size: 13, weight: .medium))
                .foregroundColor(themeManager.primaryColor.opacity(0.7))

            Text(explanation.explanation)
                .font(.system(size: themeManager.scaledSize(15), weight: .regular, design: .serif))
                .foregroundColor(themeManager.textColor.opacity(0.9))
                .lineSpacing(7)

            if !explanation.quranicVerses.isEmpty {
                ForEach(Array(explanation.quranicVerses.enumerated()), id: \.offset) { _, verse in
                    VStack(alignment: .leading, spacing: 6) {
                        Text("\"\(verse.text)\"")
                            .font(.system(size: themeManager.scaledSize(14), weight: .regular, design: .serif))
                            .foregroundColor(themeManager.textColor.opacity(0.85))
                            .lineSpacing(5)
                            .italic()
                        Text("— \(verse.reference)")
                            .font(.system(size: 12, weight: .medium))
                            .foregroundColor(themeManager.primaryColor.opacity(0.7))
                    }
                    .padding(14)
                    .background(
                        RoundedRectangle(cornerRadius: 12)
                            .fill(themeManager.primaryColor.opacity(0.08))
                    )
                }
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

    // MARK: - Reflection Card
    @ViewBuilder
    private func reflectionCard(_ name: AllahName) -> some View {
        if let question = name.reflectionQuestion {
            VStack(alignment: .leading, spacing: 16) {
                HStack(spacing: 10) {
                    Image(systemName: "heart.text.square.fill")
                        .font(.system(size: 18))
                        .foregroundColor(themeManager.primaryColor)
                    Text("Reflection")
                        .font(.system(size: 18, weight: .semibold, design: .serif))
                        .foregroundColor(themeManager.textColor)
                }

                Text(question)
                    .font(.system(size: themeManager.scaledSize(16), weight: .regular, design: .serif))
                    .foregroundColor(themeManager.textColor.opacity(0.9))
                    .lineSpacing(6)
                    .italic()
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
    }

    // MARK: - Navigation
    @ViewBuilder
    private func navigationButtons(_ name: AllahName) -> some View {
        let allNames = AllahNamesDatabase.all
        let currentIndex = allNames.firstIndex(where: { $0.nameId == name.nameId })

        HStack(spacing: 16) {
            if let idx = currentIndex, idx > 0 {
                let prev = allNames[idx - 1]
                NavigationLink(destination: NameDetailView(nameId: prev.nameId)) {
                    HStack(spacing: 6) {
                        Image(systemName: "chevron.left")
                            .font(.system(size: 12))
                        Text(prev.transliteration)
                            .font(.system(size: 14, weight: .medium))
                    }
                    .foregroundColor(themeManager.primaryColor)
                    .padding(.horizontal, 16)
                    .padding(.vertical, 10)
                    .background(
                        RoundedRectangle(cornerRadius: 12)
                            .fill(themeManager.primaryColor.opacity(0.1))
                    )
                }
            }

            Spacer()

            if let idx = currentIndex, idx < allNames.count - 1 {
                let next = allNames[idx + 1]
                NavigationLink(destination: NameDetailView(nameId: next.nameId)) {
                    HStack(spacing: 6) {
                        Text(next.transliteration)
                            .font(.system(size: 14, weight: .medium))
                        Image(systemName: "chevron.right")
                            .font(.system(size: 12))
                    }
                    .foregroundColor(themeManager.primaryColor)
                    .padding(.horizontal, 16)
                    .padding(.vertical, 10)
                    .background(
                        RoundedRectangle(cornerRadius: 12)
                            .fill(themeManager.primaryColor.opacity(0.1))
                    )
                }
            }
        }
        .padding(.horizontal, 20)
    }
}
