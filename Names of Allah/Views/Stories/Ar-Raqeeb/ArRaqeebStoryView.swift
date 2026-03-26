//
//  ArRaqeebStoryView.swift
//  Names of Allah
//
//  Story of Isa عَلَيْهِ ٱلسَّلَامُ - Ar-Raqeeb (The Watchful)
//

import SwiftUI
import AVFoundation

struct ArRaqeebStoryView: View {
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
                    Color(red: 0.15, green: 0.12, blue: 0.2),
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
            text: "Isa عَلَيْهِ ٱلسَّلَامُ was a messenger of Allah,\nsent to guide his people.",
            icon: "book.closed"
        )
    }
    
    var screen2: some View {
        StoryTextBox(
            text: "He taught them to worship\nAllah alone—\n\nwith pure monotheism.",
            icon: "hand.raised.fingers.spread"
        )
    }
    
    var screen3: some View {
        StoryTextBox(
            text: "But after he was raised to Allah,\nsome people changed his message.",
            icon: "arrow.up.circle"
        )
    }
    
    var screen4: some View {
        StoryTextBox(
            text: "They began to worship him.\n\nThey called him the son of God.",
            icon: "exclamationmark.triangle"
        )
    }
    
    var screen5: some View {
        StoryTextBox(
            text: "On the Day of Judgment,\nAllah will ask Isa عَلَيْهِ ٱلسَّلَامُ:\n\n\"Did you tell them\nto worship you?\"",
            icon: "questionmark.circle"
        )
    }
    
    var screen6: some View {
        StoryTextBox(
            text: "Isa عَلَيْهِ ٱلسَّلَامُ will say:\n\n\"I only told them\nwhat You commanded me.\"",
            icon: "mouth"
        )
    }
    
    var screen7: some View {
        StoryTextBox(
            text: "\"I never told them this.\nYou were the Witness\nover them.\"",
            icon: "eye.fill"
        )
    }
    
    var screen8: some View {
        StoryTextBox(
            text: "\"When You raised me,\nYou were the Watcher\nover them.\"",
            icon: "eyes"
        )
    }
    
    var screen9: some View {
        StoryTextBox(
            text: "Every word spoken.\nEvery belief held.\nEvery action taken.\n\nAllah is Ar-Raqeeb—\nthe Watchful Witness.",
            icon: "eye.circle"
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
                            Text("وَكُنتَ أَنتَ ٱلرَّقِيبَ عَلَيْهِمْ")
                                .font(.system(size: 32, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .multilineTextAlignment(.center)
                                .lineSpacing(10)
                                .padding(.horizontal, 30)
                            
                            Text("Surah Al-Maidah 5:117")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(Color.appGold.opacity(0.7))
                        }
                        .transition(.opacity.combined(with: .move(edge: .top)))
                    }
                    
                    // Translation
                    if showTranslation {
                        Text("\"And You were the Watcher\n(Ar-Raqeeb) over them\"")
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
                            Text("Why Ar-Raqeeb?")
                                .font(.system(size: 22, weight: .semibold, design: .serif))
                                .foregroundColor(.appGold)
                                .frame(maxWidth: .infinity, alignment: .center)
                            
                            ExplanationPoint(icon: "eye.trianglebadge.exclamationmark", text: "Allah watches everything—not just actions, but intentions too.")
                            
                            ExplanationPoint(icon: "lock.shield", text: "You can hide from people, but never from Ar-Raqeeb.")
                            
                            ExplanationPoint(icon: "checkmark.seal", text: "This isn't just surveillance—it's divine justice. Every wrong will be accounted for.")
                            
                            ExplanationPoint(icon: "sparkles", text: "But also: every secret good deed, every hidden tear, every private prayer—He sees it all.")
                            
                            Text("Live as if He is watching—\nbecause Ar-Raqeeb\nalways is.")
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
                        .padding(.bottom, 180)
                }
            }
            
            // Continue button
            VStack {
                Spacer()
                
                if showExplanation {
                    NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "ar-raqeeb")!)) {
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
        if let audioPath = Bundle.main.path(forResource: "al-maidah-5-117", ofType: "mp3") {
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
            print("⚠️ Audio file 'al-maidah-5-117.mp3' not found")
        }
    }
}



