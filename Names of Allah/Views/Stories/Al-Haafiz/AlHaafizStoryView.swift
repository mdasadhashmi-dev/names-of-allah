//
//  AlHaafizStoryView.swift
//  Names of Allah
//
//  Story of Al-Haafiz (The Preserver) — The Preservation of the Quran
//

import SwiftUI
import AVFoundation

struct AlHaafizStoryView: View {
    @State private var currentScreen = 0
    @State private var showContent = false
    @State private var showArabic = false
    @State private var showTranslation = false
    @State private var showExplanation = false
    @State private var audioPlayer: AVAudioPlayer?
    @State private var isPlayingAudio = false
    @State private var scrollOffset: CGFloat = 0
    @State private var showScrollIndicator = true

    let totalScreens = 10

    var body: some View {
        ZStack {
            LinearGradient(
                colors: [
                    Color(red: 0.05, green: 0.1, blue: 0.08),
                    Color(red: 0.08, green: 0.15, blue: 0.1),
                    Color.black
                ],
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()

            VStack {
                // Progress indicator
                HStack(spacing: 8) {
                    ForEach(0..<totalScreens, id: \.self) { index in
                        Capsule()
                            .fill(index <= currentScreen ? Color.appGold : Color.white.opacity(0.3))
                            .frame(width: index == currentScreen ? 30 : 20, height: 4)
                            .animation(.spring(response: 0.3), value: currentScreen)
                    }
                }
                .padding(.top, 20)
                .padding(.horizontal, 30)

                Spacer()

                Group {
                    if currentScreen == 0 { screen1 }
                    else if currentScreen == 1 { screen2 }
                    else if currentScreen == 2 { screen3 }
                    else if currentScreen == 3 { screen4 }
                    else if currentScreen == 4 { screen5 }
                    else if currentScreen == 5 { screen6 }
                    else if currentScreen == 6 { screen7 }
                    else if currentScreen == 7 { screen8 }
                    else if currentScreen == 8 { screen9 }
                    else if currentScreen == 9 { finalScreen }
                }
                .transition(.asymmetric(
                    insertion: .move(edge: .trailing).combined(with: .opacity),
                    removal: .move(edge: .leading).combined(with: .opacity)
                ))

                Spacer()

                if currentScreen < totalScreens - 1 {
                    NextButton {
                        withAnimation(.easeInOut(duration: 0.4)) {
                            currentScreen += 1
                        }
                    }
                    .padding(.bottom, 60)
                }
            }
        }
        .navigationBarTitleDisplayMode(.inline)
    }

    // MARK: - Screens

    var screen1: some View {
        StoryTextBox(
            text: "The Quran.\n\nSent down from the heavens\nto the heart of Muhammad ﷺ.\n\nEvery letter, every word,\nevery verse—preserved.",
            icon: "book.fill"
        )
    }

    var screen2: some View {
        StoryTextBox(
            text: "Enemies tried to corrupt it.\nTo twist its meaning.\nTo replace its words.\n\nBut no human hand\ncould alter what\nAl-Haafiz chose to guard.",
            icon: "shield.fill"
        )
    }

    var screen3: some View {
        StoryTextBox(
            text: "\"Indeed, it is We\nwho sent down the Reminder,\nand indeed, We\nwill be its Guardian.\"\n\n— Surah Al-Hijr 15:9",
            icon: "quote.opening"
        )
    }

    var screen4: some View {
        StoryTextBox(
            text: "Over 1,400 years.\nThrough wars and empires.\nThrough fire and flood.\n\nNot a single letter changed.\nNot a single vowel shifted.\n\nAl-Haafiz preserved every word.",
            icon: "clock.fill"
        )
    }

    var screen5: some View {
        StoryTextBox(
            text: "Millions memorize it\nfrom cover to cover.\n\nA child in Indonesia\nrecites the same words\nas a scholar in Morocco.\n\nIdentical. Letter for letter.",
            icon: "globe"
        )
    }

    var screen6: some View {
        StoryTextBox(
            text: "But Al-Haafiz doesn't only\npreserve His Book.\n\nHe preserves your deeds.\nYour intentions.\nYour tears in the night.\n\nNothing is lost with Him.",
            icon: "eye.fill"
        )
    }

    var screen7: some View {
        StoryTextBox(
            text: "He preserved Nuh through the flood.\nIbrahim through the fire.\nMusa through the sea.\nYusuf through the well.\n\nAl-Haafiz guards\nwhat He wills to protect.",
            icon: "sparkles"
        )
    }

    var screen8: some View {
        StoryTextBox(
            text: "That good deed\nyou thought no one saw?\n\nThat prayer in the darkness?\nThat tear you wiped away?\n\nAl-Haafiz recorded it.\nPreserved it.\nWill never let it be lost.",
            icon: "heart.fill"
        )
    }

    var screen9: some View {
        StoryTextBox(
            text: "Al-Haafiz is the Ultimate Preserver.\nHe guards His Book, His servants,\nand every sincere deed.\n\nNothing good is ever lost\nwith the One who preserves all things.",
            icon: "hands.sparkles.fill"
        )
    }

    // MARK: - Final Reveal
    var finalScreen: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 30) {
                Spacer().frame(height: 40)

                // Arabic Ayah
                Text("إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ")
                    .font(.system(size: 28, weight: .bold, design: .serif))
                    .foregroundColor(.white)
                    .multilineTextAlignment(.center)
                    .lineSpacing(12)
                    .padding(.horizontal, 30)
                    .opacity(showArabic ? 1 : 0)
                    .offset(y: showArabic ? 0 : 20)

                Text("Surah Al-Hijr 15:9")
                    .font(.system(size: 13, weight: .light))
                    .foregroundColor(Color.appGold.opacity(0.7))
                    .opacity(showArabic ? 1 : 0)

                // Translation
                Text("\"Indeed, it is We who sent down\nthe Reminder, and indeed,\nWe will be its Guardian.\"")
                    .font(.system(size: 18, weight: .light, design: .serif))
                    .foregroundColor(.white.opacity(0.9))
                    .multilineTextAlignment(.center)
                    .lineSpacing(6)
                    .padding(.horizontal, 30)
                    .opacity(showTranslation ? 1 : 0)
                    .offset(y: showTranslation ? 0 : 15)

                // Name reveal
                VStack(spacing: 12) {
                    Text("ٱلْحَافِظُ")
                        .font(.system(size: 52, weight: .bold, design: .serif))
                        .foregroundColor(.white)
                        .shadow(color: Color.appGold.opacity(0.5), radius: 20)

                    Text("Al-Haafiz")
                        .font(.system(size: 22, weight: .medium, design: .serif))
                        .foregroundColor(Color.appGold)

                    Text("The Preserver • The Protector")
                        .font(.system(size: 16, weight: .light, design: .serif))
                        .foregroundColor(.white.opacity(0.7))
                }
                .opacity(showTranslation ? 1 : 0)
                .scaleEffect(showTranslation ? 1 : 0.9)

                // Explanation points
                VStack(alignment: .leading, spacing: 16) {
                    ExplanationPoint(icon: "book.fill", text: "He preserved the Quran — unchanged for over 1,400 years")
                    ExplanationPoint(icon: "shield.fill", text: "He preserved the prophets through every danger and trial")
                    ExplanationPoint(icon: "eye.fill", text: "He preserves every good deed — nothing is lost with Him")
                    ExplanationPoint(icon: "heart.fill", text: "Your struggles, your prayers, your tears — all preserved by Al-Haafiz")
                }
                .padding(.horizontal, 30)
                .opacity(showExplanation ? 1 : 0)

                // Audio button
                AyahAudioButton(
                    isPlaying: isPlayingAudio,
                    audioFileName: "al-hijr-15-9",
                    action: { playAudio(fileName: "al-hijr-15-9") }
                )
                .opacity(showExplanation ? 1 : 0)

                Spacer().frame(height: 80)
            }
        }
        .onAppear {
            withAnimation(.easeOut(duration: 0.8).delay(0.3)) { showArabic = true }
            withAnimation(.easeOut(duration: 0.8).delay(1.2)) { showTranslation = true }
            withAnimation(.easeOut(duration: 0.8).delay(2.0)) { showExplanation = true }
        }
    }

    private func playAudio(fileName: String) {
        guard let url = Bundle.main.url(forResource: fileName, withExtension: "mp3") else { return }
        do {
            audioPlayer = try AVAudioPlayer(contentsOf: url)
            audioPlayer?.play()
            isPlayingAudio = true

            DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 10)) {
                isPlayingAudio = false
            }
        } catch {
            print("Audio error: \(error)")
        }
    }
}
