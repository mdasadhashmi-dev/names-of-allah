//
//  AlWadudStoryView.swift
//  Names of Allah
//
//  Story of Ya'qub عَلَيْهِ ٱلسَّلَامُ - Al-Wadud (The Most Loving)
//

import SwiftUI
import AVFoundation

struct AlWadudStoryView: View {
    @State private var currentScreen = 0
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
            // Background gradient
            LinearGradient(
                colors: [
                    Color(red: 0.2, green: 0.1, blue: 0.2),
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
            text: "Ya'qub عَلَيْهِ ٱلسَّلَامُ had a son\nhe loved deeply.\n\nYusuf.",
            icon: "heart.fill"
        )
    }
    
    var screen2: some View {
        StoryTextBox(
            text: "One day, his other sons\ntook Yusuf and threw him\ninto a well.\n\nThey lied to their father.",
            icon: "figure.fall"
        )
    }
    
    var screen3: some View {
        StoryTextBox(
            text: "Ya'qub عَلَيْهِ ٱلسَّلَامُ cried.\n\nHe cried so much,\nhis eyes went white with grief.",
            icon: "eye.trianglebadge.exclamationmark"
        )
    }
    
    var screen4: some View {
        StoryTextBox(
            text: "Years passed.\n\nHis sons saw his pain.\nThey said:\n\n\"Move on. Forget Yusuf.\"",
            icon: "clock"
        )
    }
    
    var screen5: some View {
        StoryTextBox(
            text: "But Ya'qub عَلَيْهِ ٱلسَّلَامُ replied:\n\n\"I only complain of my grief\nto Allah.\"",
            icon: "hands.sparkles"
        )
    }
    
    var screen6: some View {
        StoryTextBox(
            text: "He never stopped loving Yusuf.\n\nHe never stopped believing\nAllah would bring him back.",
            icon: "arrow.uturn.left.circle"
        )
    }
    
    var screen7: some View {
        StoryTextBox(
            text: "Decades later—\n\nYusuf returned.\n\nAlive. A minister. Honored.",
            icon: "figure.wave"
        )
    }
    
    var screen8: some View {
        StoryTextBox(
            text: "Ya'qub's sight was restored.\n\nHis family was reunited.\n\nHis love was rewarded.",
            icon: "sparkles"
        )
    }
    
    var screen9: some View {
        StoryTextBox(
            text: "Because love that endures—\nlove rooted in faith—\n\nis a reflection of Allah's love\nfor His servants.",
            icon: "infinity.circle.fill"
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
                            Text("وَهُوَ ٱلْغَفُورُ ٱلْوَدُودُ")
                                .font(.system(size: 36, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .multilineTextAlignment(.center)
                                .lineSpacing(10)
                                .padding(.horizontal, 30)
                            
                            Text("Surah Al-Buruj 85:14")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(Color.appGold.opacity(0.7))
                        }
                        .transition(.opacity.combined(with: .move(edge: .top)))
                    }
                    
                    // Translation
                    if showTranslation {
                        Text("\"And He is the Forgiving,\nthe Loving (Al-Wadud)\"")
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
                            Text("Why Al-Wadud?")
                                .font(.system(size: 22, weight: .semibold, design: .serif))
                                .foregroundColor(.appGold)
                                .frame(maxWidth: .infinity, alignment: .center)
                            
                            ExplanationPoint(icon: "heart.circle", text: "Ya'qub's unwavering love for Yusuf mirrors Allah's love for His creation.")
                            
                            ExplanationPoint(icon: "arrow.uturn.left", text: "Even when we sin, stray, or disappoint—Allah's love doesn't end.")
                            
                            ExplanationPoint(icon: "infinity", text: "Al-Wadud isn't just 'loving.' It means overflowing, constant, unconditional love.")
                            
                            ExplanationPoint(icon: "hands.and.sparkles", text: "No matter how far you've drifted, His love awaits your return.")
                            
                            Text("You are deeply loved—\nby Al-Wadud,\nthe Most Loving.")
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
                    NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "al-wadud")!)) {
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
        if let audioPath = Bundle.main.path(forResource: "al-buruj-85-14", ofType: "mp3") {
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
            print("⚠️ Audio file 'al-buruj-85-14.mp3' not found")
        }
    }
}

