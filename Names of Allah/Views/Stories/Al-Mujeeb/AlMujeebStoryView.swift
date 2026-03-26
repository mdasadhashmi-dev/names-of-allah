//
//  AlMujeebStoryView.swift
//  Names of Allah
//
//  Story of Zakariya عَلَيْهِ ٱلسَّلَامُ - Al-Mujeeb (The Responder)
//

import SwiftUI
import AVFoundation

struct AlMujeebStoryView: View {
    @State private var currentScreen = 0
    @State private var showArabic = false
    @State private var showTranslation = false
    @State private var showExplanation = false
    @State private var audioPlayer: AVAudioPlayer?
    @State private var isPlayingAudio = false
    @State private var scrollOffset: CGFloat = 0
    @State private var showScrollIndicator = true
    
    let totalScreens = 11
    
    var body: some View {
        ZStack {
            // Background gradient
            LinearGradient(
                colors: [
                    Color(red: 0.15, green: 0.2, blue: 0.3),
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
                
                // Content based on current screen
                Group {
                    if currentScreen == 0 {
                        screen1
                    } else if currentScreen == 1 {
                        screen2
                    } else if currentScreen == 2 {
                        screen3
                    } else if currentScreen == 3 {
                        screen4
                    } else if currentScreen == 4 {
                        screen5
                    } else if currentScreen == 5 {
                        screen6
                    } else if currentScreen == 6 {
                        screen7
                    } else if currentScreen == 7 {
                        screen8
                    } else if currentScreen == 8 {
                        screen9
                    } else if currentScreen == 9 {
                        screen10
                    } else if currentScreen == 10 {
                        finalScreen
                    }
                }
                .transition(.asymmetric(insertion: .move(edge: .trailing).combined(with: .opacity),
                                      removal: .move(edge: .leading).combined(with: .opacity)))
                
                Spacer()
                
                // Next button
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
            text: "Zakariya عَلَيْهِ ٱلسَّلَامُ was old.\n\nHis bones were weak,\nhis hair was white.",
            icon: "figure.walk"
        )
    }
    
    var screen2: some View {
        StoryTextBox(
            text: "He had no children.\n\nHis wife could not conceive.",
            icon: "heart.slash"
        )
    }
    
    var screen3: some View {
        StoryTextBox(
            text: "He watched Maryam عَلَيْهَا ٱلسَّلَامُ\nreceive miraculous provision\nin her place of worship.",
            icon: "sparkles"
        )
    }
    
    var screen4: some View {
        StoryTextBox(
            text: "Fresh fruit in winter.\nFood with no source.\n\nAllah providing the impossible.",
            icon: "leaf"
        )
    }
    
    var screen5: some View {
        StoryTextBox(
            text: "Zakariya عَلَيْهِ ٱلسَّلَامُ thought:\n\n\"If Allah can do that...\n\nthen maybe—\"",
            icon: "thought.bubble"
        )
    }
    
    var screen6: some View {
        StoryTextBox(
            text: "He went into his prayer room\nand made a quiet du'a.\n\n\"My Lord, grant me\na righteous child.\"",
            icon: "hands.sparkles.fill"
        )
    }
    
    var screen7: some View {
        StoryTextBox(
            text: "He didn't announce it.\nHe didn't broadcast it.\n\nJust him and Allah.",
            icon: "lock.shield"
        )
    }
    
    var screen8: some View {
        StoryTextBox(
            text: "The angels called out to him:\n\n\"Allah gives you glad tidings\nof Yahya (John).\"",
            icon: "figure.wave"
        )
    }
    
    var screen9: some View {
        StoryTextBox(
            text: "Zakariya عَلَيْهِ ٱلسَّلَامُ was shocked.\n\n\"My Lord, how can I have a son\nwhen I am so old?\"",
            icon: "exclamationmark.circle"
        )
    }
    
    var screen10: some View {
        StoryTextBox(
            text: "\"Thus Allah does\nwhat He wills.\"\n\nAnd so, Yahya عَلَيْهِ ٱلسَّلَامُ was born—\n\na prophet, pure and blessed.",
            icon: "figure.2.arms.open"
        )
    }
    
    var finalScreen: some View {
        ZStack {
            ScrollView {
                VStack(spacing: 32) {
                    Spacer().frame(height: 20)
                    
                    // Quranic Ayah
                    if showArabic {
                        VStack(spacing: 16) {
                            Text("إِنَّ رَبِّى قَرِيبٌۭ مُّجِيبٌۭ")
                                .font(.system(size: 36, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .multilineTextAlignment(.center)
                                .lineSpacing(10)
                                .padding(.horizontal, 30)
                            
                            Text("Surah Hud 11:61")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(Color.appGold.opacity(0.7))
                        }
                        .transition(.opacity.combined(with: .move(edge: .top)))
                    }
                    
                    // Translation
                    if showTranslation {
                        Text("\"Indeed, my Lord is near\nand Responsive (Mujeeb)\"")
                            .font(.system(size: 22, weight: .light, design: .serif))
                            .foregroundColor(.white.opacity(0.9))
                            .multilineTextAlignment(.center)
                            .lineSpacing(8)
                            .italic()
                            .padding(.horizontal, 40)
                            .transition(.opacity.combined(with: .scale(scale: 0.9)))
                    }
                    
                    Divider()
                        .background(Color.white.opacity(0.2))
                        .padding(.horizontal, 40)
                        .padding(.vertical, 8)
                    
                    // Explanation
                    if showExplanation {
                        VStack(alignment: .leading, spacing: 20) {
                            Text("Why Al-Mujeeb?")
                                .font(.system(size: 22, weight: .semibold, design: .serif))
                                .foregroundColor(.appGold)
                                .frame(maxWidth: .infinity, alignment: .center)
                            
                            ExplanationPoint(icon: "checkmark.circle.fill", text: "Zakariya عَلَيْهِ ٱلسَّلَامُ made an impossible prayer—and Allah responded.")
                            
                            ExplanationPoint(icon: "waveform", text: "Al-Mujeeb doesn't just hear. He answers. He responds. He acts.")
                            
                            ExplanationPoint(icon: "clock.arrow.circlepath", text: "Your prayers may feel delayed, but Allah's timing is perfect.")
                            
                            ExplanationPoint(icon: "hands.sparkles", text: "Even when it seems impossible—keep asking. Al-Mujeeb is listening.")
                            
                            Text("Your du'a is never ignored.\nAl-Mujeeb always responds—\nin His perfect way and time.")
                                .font(.system(size: 18, weight: .medium, design: .serif))
                                .foregroundColor(.white.opacity(0.95))
                                .multilineTextAlignment(.center)
                                .lineSpacing(6)
                                .frame(maxWidth: .infinity)
                                .padding(.top, 10)
                        }
                        .padding(.horizontal, 30)
                        .transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                    
                    Spacer().frame(height: 140)
                }
                .background(
                    GeometryReader { geo in
                        Color.clear.preference(
                            key: ScrollOffsetKey.self,
                            value: geo.frame(in: .named("scroll")).minY
                        )
                    }
                )
            }
            .coordinateSpace(name: "scroll")
            .onPreferenceChange(ScrollOffsetKey.self) { value in
                scrollOffset = value
                if value < -50 {
                    withAnimation {
                        showScrollIndicator = false
                    }
                }
            }
            
            // Scroll Indicator
            VStack {
                Spacer()
                if showScrollIndicator && showExplanation {
                    ScrollIndicator(isVisible: true, bounceOffset: 0)
                        .padding(.bottom, 180) // Position above the button
                }
            }
            
            // Continue button
            VStack {
                Spacer()
                
                if showExplanation {
                    NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "al-mujeeb")!)) {
                        HStack(spacing: 10) {
                            Text("Continue to Reflect")
                                .font(.system(size: 18, weight: .medium, design: .serif))
                            Image(systemName: "arrow.right")
                                .font(.system(size: 14, weight: .semibold))
                        }
                        .foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1))
                        .frame(maxWidth: 250)
                        .padding(.vertical, 18)
                        .background(
                            LinearGradient(
                                colors: [
                                    Color(red: 0.9, green: 0.82, blue: 0.65),
                                    Color(red: 0.85, green: 0.75, blue: 0.55)
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .clipShape(RoundedRectangle(cornerRadius: 30))
                        .shadow(color: Color.appGold.opacity(0.3), radius: 20, x: 0, y: 10)
                    }
                    .padding(.bottom, 50)
                    .transition(.opacity.combined(with: .move(edge: .bottom)))
                }
            }
        }
        .onAppear {
            animateFinalScreen()
        }
    }
    
    // MARK: - Animations
    
    private func animateFinalScreen() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
            withAnimation(.easeOut(duration: 0.8)) {
                showArabic = true
            }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
            withAnimation(.easeOut(duration: 0.8)) {
                showTranslation = true
            }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) {
            withAnimation(.easeOut(duration: 0.8)) {
                showExplanation = true
            }
            autoPlayAyahAudio()
            
            // Auto-hide scroll indicator after 5 seconds
            DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) {
                withAnimation {
                    showScrollIndicator = false
                }
            }
        }
    }
    
    private func autoPlayAyahAudio() {
        if let audioPath = Bundle.main.path(forResource: "hud-11-61", ofType: "mp3") {
            let audioUrl = URL(fileURLWithPath: audioPath)
            do {
                audioPlayer = try AVAudioPlayer(contentsOf: audioUrl)
                audioPlayer?.play()
                isPlayingAudio = true
                
                DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) {
                    isPlayingAudio = false
                }
            } catch {
                print("⚠️ Could not play audio: \(error.localizedDescription)")
            }
        } else {
            print("⚠️ Audio file 'hud-11-61.mp3' not found")
        }
    }
}

