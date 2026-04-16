//
//  AlQadeerStoryView.swift
//  Names of Allah
//
//  Story of Al-Qadeer (The All-Powerful) — The Impossible Made Easy
//

import SwiftUI
import AVFoundation

struct AlQadeerStoryView: View {
    @State private var currentScreen = 0
    @State private var showContent = false
    @State private var showArabic = false
    @State private var showTranslation = false
    @State private var showExplanation = false
    @State private var audioPlayer: AVAudioPlayer?
    @State private var isPlayingAudio = false

    let totalScreens = 10

    var body: some View {
        ZStack {
            LinearGradient(
                colors: [
                    Color(red: 0.05, green: 0.05, blue: 0.1),
                    Color(red: 0.08, green: 0.08, blue: 0.15),
                    Color.black
                ],
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()

            VStack {
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

    var screen1: some View {
        StoryTextBox(
            text: "Maryam was alone.\nUnmarried. Untouched.\n\nAn angel appeared:\n\"You will have a son.\"\n\nShe said:\n\"How can I have a child\nwhen no man has touched me?\"",
            icon: "star.fill"
        )
    }

    var screen2: some View {
        StoryTextBox(
            text: "The angel replied:\n\n\"Thus it will be.\nYour Lord says:\n'It is easy for Me.'\"\n\nAl-Qadeer creates\nwithout cause,\nwithout means,\nwithout limit.",
            icon: "sparkles"
        )
    }

    var screen3: some View {
        StoryTextBox(
            text: "He breathed life into Adam\nfrom clay.\n\nNo father. No mother.\nJust His command: \"Be.\"\n\nAnd Adam was.",
            icon: "wind"
        )
    }

    var screen4: some View {
        StoryTextBox(
            text: "Ibrahim was thrown\ninto a blazing fire.\n\nAl-Qadeer said:\n\"O fire, be cool\nand peaceful upon Ibrahim.\"\n\nThe fire obeyed.\nIt had no choice.",
            icon: "flame.fill"
        )
    }

    var screen5: some View {
        StoryTextBox(
            text: "Zakariyya was old.\nHis wife was barren.\nYears of longing\nfor a child.\n\n\"My Lord,\nhow can I have a son?\"\n\n\"It is easy for Me.\nI created you before\nwhen you were nothing.\"",
            icon: "heart.fill"
        )
    }

    var screen6: some View {
        StoryTextBox(
            text: "The dead earth.\nBarren, cracked, lifeless.\n\nThen rain falls.\n\nAnd from it springs\nlife in every color.\n\nAl-Qadeer brings life\nfrom death,\nhope from despair,\nlight from darkness.",
            icon: "leaf.fill"
        )
    }

    var screen7: some View {
        StoryTextBox(
            text: "\"Indeed, Allah\nis over all things\nQadeer.\"\n\nThis phrase appears\nover 30 times in the Quran.\n\nA constant reminder:\nNothing is impossible for Him.",
            icon: "book.fill"
        )
    }

    var screen8: some View {
        StoryTextBox(
            text: "What impossible thing\nare you praying for?\n\nA child? A cure?\nForgiveness? A way out?\n\nThe One who created\nthe heavens and the earth\nfrom nothing—\nis He not Qadeer\nover your situation?",
            icon: "moon.fill"
        )
    }

    var screen9: some View {
        StoryTextBox(
            text: "Al-Qadeer is the All-Powerful.\nHe created life from nothing,\nmade fire cool, split the sea,\nand gave children to the barren.\n\nWhatever you think is impossible—\nit is easy for Him.",
            icon: "hands.sparkles.fill"
        )
    }

    var finalScreen: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 30) {
                Spacer().frame(height: 40)

                Text("أَلَيْسَ ذَٰلِكَ بِقَادِرٍ عَلَىٰ أَن يُحْيِيَ الْمَوْتَىٰ")
                    .font(.system(size: 28, weight: .bold, design: .serif))
                    .foregroundColor(.white)
                    .multilineTextAlignment(.center)
                    .lineSpacing(12)
                    .padding(.horizontal, 30)
                    .opacity(showArabic ? 1 : 0)
                    .offset(y: showArabic ? 0 : 20)

                Text("Surah Al-Qiyamah 75:40")
                    .font(.system(size: 13, weight: .light))
                    .foregroundColor(Color.appGold.opacity(0.7))
                    .opacity(showArabic ? 1 : 0)

                Text("\"Is not He who created the heavens\nand the earth able to create\nthe likes of them? Yes indeed!\nHe is Al-Khallaaq, Al-Aleem.\"")
                    .font(.system(size: 18, weight: .light, design: .serif))
                    .foregroundColor(.white.opacity(0.9))
                    .multilineTextAlignment(.center)
                    .lineSpacing(6)
                    .padding(.horizontal, 30)
                    .opacity(showTranslation ? 1 : 0)
                    .offset(y: showTranslation ? 0 : 15)

                VStack(spacing: 12) {
                    Text("ٱلْقَدِيرُ")
                        .font(.system(size: 52, weight: .bold, design: .serif))
                        .foregroundColor(.white)
                        .shadow(color: Color.appGold.opacity(0.5), radius: 20)

                    Text("Al-Qadeer")
                        .font(.system(size: 22, weight: .medium, design: .serif))
                        .foregroundColor(Color.appGold)

                    Text("The All-Powerful • The Omnipotent")
                        .font(.system(size: 16, weight: .light, design: .serif))
                        .foregroundColor(.white.opacity(0.7))
                }
                .opacity(showTranslation ? 1 : 0)
                .scaleEffect(showTranslation ? 1 : 0.9)

                VStack(alignment: .leading, spacing: 16) {
                    ExplanationPoint(icon: "star.fill", text: "He gave Maryam a son without a father — nothing limits His power")
                    ExplanationPoint(icon: "flame.fill", text: "He made fire cool for Ibrahim — elements obey His command")
                    ExplanationPoint(icon: "heart.fill", text: "He gave Zakariyya a child in old age — He reverses the impossible")
                    ExplanationPoint(icon: "sparkles", text: "Your impossible situation is nothing for Al-Qadeer — just say 'Be'")
                }
                .padding(.horizontal, 30)
                .opacity(showExplanation ? 1 : 0)

                AyahAudioButton(
                    isPlaying: isPlayingAudio,
                    audioFileName: "al-qiyamah-75-40",
                    action: { playAudio(fileName: "al-qiyamah-75-40") }
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
