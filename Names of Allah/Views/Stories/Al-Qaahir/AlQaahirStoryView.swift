//
//  AlQaahirStoryView.swift
//  Names of Allah
//
//  Story of Al-Qaahir (The Irresistible Subduer) — The Fall of Fir'awn
//

import SwiftUI
import AVFoundation

struct AlQaahirStoryView: View {
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
                    Color(red: 0.1, green: 0.05, blue: 0.05),
                    Color(red: 0.15, green: 0.08, blue: 0.08),
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
            text: "Fir'awn declared himself god.\nHe built towers to the sky.\nHe enslaved an entire nation.\n\nHe thought no power\ncould ever touch him.",
            icon: "crown.fill"
        )
    }

    var screen2: some View {
        StoryTextBox(
            text: "\"I am your lord, most high!\"\nhe shouted from his throne.\n\nHis armies numbered\nin the thousands.\nHis kingdom stretched\nacross the land.\n\nWho could stop him?",
            icon: "exclamationmark.triangle.fill"
        )
    }

    var screen3: some View {
        StoryTextBox(
            text: "Allah sent Musa.\nA man with a stutter.\nA shepherd with a staff.\n\nNo army. No wealth.\nJust the message of\nAl-Qaahir—\nthe Irresistible.",
            icon: "hand.raised.fill"
        )
    }

    var screen4: some View {
        StoryTextBox(
            text: "Sign after sign.\nPlague after plague.\nThe river turned to blood.\nDarkness covered the land.\n\nStill Fir'awn resisted.\nStill he refused.\n\nBut Al-Qaahir\ncannot be resisted.",
            icon: "bolt.fill"
        )
    }

    var screen5: some View {
        StoryTextBox(
            text: "The sea split.\nMusa and his people crossed.\n\nFir'awn charged in—\nconfident, arrogant,\ncertain of victory.\n\nThe waters closed.",
            icon: "water.waves"
        )
    }

    var screen6: some View {
        StoryTextBox(
            text: "\"Now I believe!\"\nFir'awn cried\nas the water crushed him.\n\nToo late.\n\nAl-Qaahir subdued\nthe most powerful man on earth\nwith water.",
            icon: "moon.fill"
        )
    }

    var screen7: some View {
        StoryTextBox(
            text: "\"And He is Al-Qaahir\nabove His servants.\nAnd He is Al-Hakim,\nAl-Khabeer.\"\n\n— Surah Al-An'am 6:18\n\nNo tyrant escapes Him.\nNo power overpowers Him.",
            icon: "quote.opening"
        )
    }

    var screen8: some View {
        StoryTextBox(
            text: "Every tyrant in history\nmet their end.\n\nNamrud. Fir'awn.\nAbu Jahl. Qarun.\n\nAl-Qaahir subdues\nevery force\nthat rises against His will.\n\nNo one is beyond His reach.",
            icon: "sparkles"
        )
    }

    var screen9: some View {
        StoryTextBox(
            text: "Al-Qaahir is above all His servants.\nNo force in creation\ncan resist His will.\n\nEvery tyrant will be humbled.\nEvery oppressor will be subdued.\nHis power is irresistible.",
            icon: "hands.sparkles.fill"
        )
    }

    var finalScreen: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 30) {
                Spacer().frame(height: 40)

                Text("وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهِ ۚ وَهُوَ الْحَكِيمُ الْخَبِيرُ")
                    .font(.system(size: 28, weight: .bold, design: .serif))
                    .foregroundColor(.white)
                    .multilineTextAlignment(.center)
                    .lineSpacing(12)
                    .padding(.horizontal, 30)
                    .opacity(showArabic ? 1 : 0)
                    .offset(y: showArabic ? 0 : 20)

                Text("Surah Al-An'am 6:18")
                    .font(.system(size: 13, weight: .light))
                    .foregroundColor(Color.appGold.opacity(0.7))
                    .opacity(showArabic ? 1 : 0)

                Text("\"And He is Al-Qaahir\nabove His servants.\nAnd He is the Wise, the Acquainted.\"")
                    .font(.system(size: 18, weight: .light, design: .serif))
                    .foregroundColor(.white.opacity(0.9))
                    .multilineTextAlignment(.center)
                    .lineSpacing(6)
                    .padding(.horizontal, 30)
                    .opacity(showTranslation ? 1 : 0)
                    .offset(y: showTranslation ? 0 : 15)

                VStack(spacing: 12) {
                    Text("ٱلْقَاهِرُ")
                        .font(.system(size: 52, weight: .bold, design: .serif))
                        .foregroundColor(.white)
                        .shadow(color: Color.appGold.opacity(0.5), radius: 20)

                    Text("Al-Qaahir")
                        .font(.system(size: 22, weight: .medium, design: .serif))
                        .foregroundColor(Color.appGold)

                    Text("The Irresistible • The Subduer")
                        .font(.system(size: 16, weight: .light, design: .serif))
                        .foregroundColor(.white.opacity(0.7))
                }
                .opacity(showTranslation ? 1 : 0)
                .scaleEffect(showTranslation ? 1 : 0.9)

                VStack(alignment: .leading, spacing: 16) {
                    ExplanationPoint(icon: "crown.fill", text: "Fir'awn declared himself god — Al-Qaahir drowned him in moments")
                    ExplanationPoint(icon: "bolt.fill", text: "No army, no wealth, no power can resist Al-Qaahir's decree")
                    ExplanationPoint(icon: "water.waves", text: "He subdues the mightiest with the simplest of means")
                    ExplanationPoint(icon: "shield.fill", text: "The oppressed find comfort — Al-Qaahir will subdue every tyrant")
                }
                .padding(.horizontal, 30)
                .opacity(showExplanation ? 1 : 0)

                AyahAudioButton(
                    isPlaying: isPlayingAudio,
                    audioFileName: "al-anam-6-18",
                    action: { playAudio(fileName: "al-anam-6-18") }
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
