//
//  AlMubeenStoryView.swift
//  Names of Allah
//
//  Story of Al-Mubeen (The Clear, The Manifest) — The Manifest Truth
//

import SwiftUI
import AVFoundation

struct AlMubeenStoryView: View {
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
                    Color(red: 0.1, green: 0.1, blue: 0.05),
                    Color(red: 0.15, green: 0.13, blue: 0.08),
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
            text: "On the Day of Judgment,\neveryone will stand\nbefore Allah.\n\nNo secrets.\nNo hidden deeds.\nNo whispered lies.\n\nEverything made clear.",
            icon: "sun.max.fill"
        )
    }

    var screen2: some View {
        StoryTextBox(
            text: "The books of deeds\nwill be opened.\n\nSome will receive theirs\nin their right hand.\nOthers in their left.\n\nAl-Mubeen makes\neverything manifest.",
            icon: "book.fill"
        )
    }

    var screen3: some View {
        StoryTextBox(
            text: "\"On that Day,\nAllah will pay them\ntheir just due,\nand they will know\nthat Allah is\nthe Clear Truth.\"\n\n— Surah An-Nur 24:25",
            icon: "quote.opening"
        )
    }

    var screen4: some View {
        StoryTextBox(
            text: "In this world,\ntruth gets buried.\nJustice gets delayed.\nThe innocent suffer in silence.\n\nBut Al-Mubeen\nwill make everything clear.\n\nNothing stays hidden forever.",
            icon: "eye.fill"
        )
    }

    var screen5: some View {
        StoryTextBox(
            text: "He sent clear signs.\nClear prophets.\nA clear Book.\n\n\"This is a clear statement\nfor the people.\"\n— Surah Aal-Imran 3:138\n\nThe path was never unclear.\nWe simply chose not to see.",
            icon: "sparkles"
        )
    }

    var screen6: some View {
        StoryTextBox(
            text: "Fir'awn thought\nhe could hide his tyranny.\nThe Quraysh thought\nthey could bury the truth.\n\nBut Al-Mubeen\nmade everything manifest.\n\nTruth always surfaces.",
            icon: "arrow.up.circle.fill"
        )
    }

    var screen7: some View {
        StoryTextBox(
            text: "Ibrahim stood alone\nbefore his people and said:\n\n\"I have turned my face\ntoward He who created\nthe heavens and the earth.\"\n\nThe truth was clear.\nHe chose to see it.",
            icon: "star.fill"
        )
    }

    var screen8: some View {
        StoryTextBox(
            text: "What truth are you\navoiding today?\n\nWhat is Al-Mubeen\nmaking clear to you\nthat you refuse to see?\n\nHis signs are everywhere—\nfor those willing to look.",
            icon: "heart.fill"
        )
    }

    var screen9: some View {
        StoryTextBox(
            text: "Al-Mubeen is the Clear Truth.\nHe makes manifest what is hidden,\nclarifies what is confused,\nand reveals what is concealed.\n\nIn a world of confusion,\nHe is the source of all clarity.",
            icon: "hands.sparkles.fill"
        )
    }

    var finalScreen: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 30) {
                Spacer().frame(height: 40)

                Text("يَوْمَئِذٍ يُوَفِّيهِمُ اللَّهُ دِينَهُمُ الْحَقَّ وَيَعْلَمُونَ أَنَّ اللَّهَ هُوَ الْحَقُّ الْمُبِينُ")
                    .font(.system(size: 28, weight: .bold, design: .serif))
                    .foregroundColor(.white)
                    .multilineTextAlignment(.center)
                    .lineSpacing(12)
                    .padding(.horizontal, 30)
                    .opacity(showArabic ? 1 : 0)
                    .offset(y: showArabic ? 0 : 20)

                Text("Surah An-Nur 24:25")
                    .font(.system(size: 13, weight: .light))
                    .foregroundColor(Color.appGold.opacity(0.7))
                    .opacity(showArabic ? 1 : 0)

                Text("\"On that Day, Allah will pay them\ntheir just due, and they will know\nthat Allah is the Clear Truth.\"")
                    .font(.system(size: 18, weight: .light, design: .serif))
                    .foregroundColor(.white.opacity(0.9))
                    .multilineTextAlignment(.center)
                    .lineSpacing(6)
                    .padding(.horizontal, 30)
                    .opacity(showTranslation ? 1 : 0)
                    .offset(y: showTranslation ? 0 : 15)

                VStack(spacing: 12) {
                    Text("ٱلْمُبِينُ")
                        .font(.system(size: 52, weight: .bold, design: .serif))
                        .foregroundColor(.white)
                        .shadow(color: Color.appGold.opacity(0.5), radius: 20)

                    Text("Al-Mubeen")
                        .font(.system(size: 22, weight: .medium, design: .serif))
                        .foregroundColor(Color.appGold)

                    Text("The Clear • The Manifest Truth")
                        .font(.system(size: 16, weight: .light, design: .serif))
                        .foregroundColor(.white.opacity(0.7))
                }
                .opacity(showTranslation ? 1 : 0)
                .scaleEffect(showTranslation ? 1 : 0.9)

                VStack(alignment: .leading, spacing: 16) {
                    ExplanationPoint(icon: "sun.max.fill", text: "Al-Mubeen makes all truth manifest — nothing stays hidden")
                    ExplanationPoint(icon: "book.fill", text: "He sent a Clear Book with clear guidance for all of humanity")
                    ExplanationPoint(icon: "eye.fill", text: "On the Day of Judgment, every hidden deed will be made plain")
                    ExplanationPoint(icon: "star.fill", text: "His signs are clear in creation — for those who reflect")
                }
                .padding(.horizontal, 30)
                .opacity(showExplanation ? 1 : 0)

                AyahAudioButton(
                    isPlaying: isPlayingAudio,
                    audioFileName: "an-nur-24-25",
                    action: { playAudio(fileName: "an-nur-24-25") }
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
