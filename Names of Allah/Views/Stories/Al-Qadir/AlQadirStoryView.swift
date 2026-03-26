//
//  AlQadirStoryView.swift
//  Names of Allah
//
//  Story of Ibrahim عَلَيْهِ ٱلسَّلَامُ and the Fire - Al-Qadir (The Capable)
//

import SwiftUI
import AVFoundation

struct AlQadirStoryView: View {
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
            LinearGradient(
                colors: [
                    Color(red: 0.2, green: 0.1, blue: 0.05),
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
            text: "Ibrahim عَلَيْهِ ٱلسَّلَامُ destroyed\nthe idols his people worshipped.",
            icon: "hammer.fill"
        )
    }
    
    var screen2: some View {
        StoryTextBox(
            text: "The people were furious.\n\n\"Burn him!\" they cried.\n\"Burn him alive!\"",
            icon: "flame"
        )
    }
    
    var screen3: some View {
        StoryTextBox(
            text: "They built a massive fire—\nso large, so fierce,\nno one could approach it.",
            icon: "flame.fill"
        )
    }
    
    var screen4: some View {
        StoryTextBox(
            text: "They used a catapult\nto throw Ibrahim عَلَيْهِ ٱلسَّلَامُ\ninto the flames.",
            icon: "arrow.forward.circle"
        )
    }
    
    var screen5: some View {
        StoryTextBox(
            text: "As he flew through the air,\nJibril came and asked:\n\n\"Do you need help?\"",
            icon: "person.fill.questionmark"
        )
    }
    
    var screen6: some View {
        StoryTextBox(
            text: "Ibrahim عَلَيْهِ ٱلسَّلَامُ replied:\n\n\"From you, no.\nFrom Allah—He knows my need.\"",
            icon: "hand.raised"
        )
    }
    
    var screen7: some View {
        StoryTextBox(
            text: "Allah commanded the fire:\n\n\"O fire, be coolness\nand safety for Ibrahim.\"",
            icon: "snowflake"
        )
    }
    
    var screen8: some View {
        StoryTextBox(
            text: "The fire obeyed.\n\nIt burned the ropes,\nbut didn't touch Ibrahim عَلَيْهِ ٱلسَّلَامُ.",
            icon: "shield.checkered"
        )
    }
    
    var screen9: some View {
        StoryTextBox(
            text: "He walked out unharmed—\n\nnot a burn,\nnot even the smell of smoke.",
            icon: "figure.walk"
        )
    }
    
    var finalScreen: some View {
        ZStack {
            ScrollView {
                VStack(spacing: 32) {
                    Spacer().frame(height: 20)
                    
                    if showArabic {
                        VStack(spacing: 16) {
                            Text("إِنَّهُۥ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ")
                                .font(.system(size: 36, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .multilineTextAlignment(.center)
                                .lineSpacing(10)
                                .padding(.horizontal, 30)
                            
                            Text("Surah Al-An'am 6:65")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(Color.appGold.opacity(0.7))
                        }
                        .transition(.opacity.combined(with: .move(edge: .top)))
                    }
                    
                    if showTranslation {
                        Text("\"Indeed, He is over all things\nCapable (Qadir)\"")
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
                    
                    if showExplanation {
                        VStack(alignment: .leading, spacing: 20) {
                            Text("Why Al-Qadir?")
                                .font(.system(size: 22, weight: .semibold, design: .serif))
                                .foregroundColor(.appGold)
                                .frame(maxWidth: .infinity, alignment: .center)
                            
                            ExplanationPoint(icon: "flame.fill", text: "Al-Qadir made fire cool. He can change the nature of anything, anytime.")
                            
                            ExplanationPoint(icon: "bolt.circle", text: "Your impossible situation is not impossible for Al-Qadir.")
                            
                            ExplanationPoint(icon: "shield.fill", text: "When all the laws of nature are against you—Al-Qadir can rewrite them.")
                            
                            ExplanationPoint(icon: "sparkles", text: "Nothing is beyond His capability. Not your illness. Not your debt. Not your heartbreak.")
                            
                            Text("Trust in Al-Qadir—\nthe One who is capable\nof all things.")
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
            
            VStack {
                Spacer()
                if showScrollIndicator && showExplanation {
                    ScrollIndicator(isVisible: true, bounceOffset: 0)
                        .padding(.bottom, 180)
                }
            }
            
            VStack {
                Spacer()
                
                if showExplanation {
                    NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "al-qadir")!)) {
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
            
            DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) {
                withAnimation {
                    showScrollIndicator = false
                }
            }
        }
    }
    
    private func autoPlayAyahAudio() {
        if let audioPath = Bundle.main.path(forResource: "al-anam-6-65", ofType: "mp3") {
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
            print("⚠️ Audio file 'al-anam-6-65.mp3' not found")
        }
    }
}



