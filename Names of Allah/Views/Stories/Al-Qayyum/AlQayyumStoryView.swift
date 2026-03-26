//
//  AlQayyumStoryView.swift
//  Names of Allah
//
//  Story of Everything Depends on Him - Al-Qayyum (The Sustainer)
//

import SwiftUI
import AVFoundation

struct AlQayyumStoryView: View {
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
            LinearGradient(colors: [Color(red: 0.05, green: 0.1, blue: 0.2), Color.black], startPoint: .top, endPoint: .bottom).ignoresSafeArea()
            
            VStack {
                HStack(spacing: 8) {
                    ForEach(0..<totalScreens, id: \.self) { index in
                        Capsule().fill(index <= currentScreen ? Color.appGold : Color.white.opacity(0.3)).frame(width: index == currentScreen ? 30 : 20, height: 4).animation(.spring(response: 0.3), value: currentScreen)
                    }
                }.padding(.top, 20).padding(.horizontal, 30)
                
                Spacer()
                
                Group {
                    if currentScreen == 0 { StoryTextBox(text: "Your heart beats\nwithout your command.", icon: "heart.fill") }
                    else if currentScreen == 1 { StoryTextBox(text: "Your lungs breathe\nwhile you sleep.", icon: "lungs") }
                    else if currentScreen == 2 { StoryTextBox(text: "The sun rises every morning.\nThe earth spins on its axis.", icon: "sun.max") }
                    else if currentScreen == 3 { StoryTextBox(text: "Stars hold their positions.\nGravity keeps you grounded.", icon: "sparkles") }
                    else if currentScreen == 4 { StoryTextBox(text: "Who sustains all of this?\n\nEvery moment.\nEvery breath.\nEvery heartbeat.", icon: "questionmark.circle") }
                    else if currentScreen == 5 { StoryTextBox(text: "Al-Qayyum.\n\nThe Self-Sustaining,\nthe Sustainer of all.", icon: "infinity.circle") }
                    else if currentScreen == 6 { StoryTextBox(text: "Everything depends on Him.\n\nBut He depends on nothing.", icon: "arrow.up.circle") }
                    else if currentScreen == 7 { StoryTextBox(text: "If He withdrew His sustenance\nfor even a moment—\n\neverything would collapse.", icon: "exclamationmark.triangle") }
                    else if currentScreen == 8 { StoryTextBox(text: "But Al-Qayyum never sleeps.\nNever tires.\nNever forgets.", icon: "eye.circle") }
                    else if currentScreen == 9 { StoryTextBox(text: "Right now,\nas you read this—\n\nHe is sustaining\nyour existence.", icon: "hands.sparkles.fill") }
                    else if currentScreen == 10 { finalScreen }
                }.transition(.asymmetric(insertion: .move(edge: .trailing).combined(with: .opacity), removal: .move(edge: .leading).combined(with: .opacity)))
                
                Spacer()
                
                if currentScreen < totalScreens - 1 {
                    NextButton { withAnimation(.easeInOut(duration: 0.4)) { currentScreen += 1 }}.padding(.bottom, 60)
                }
            }
        }.navigationBarTitleDisplayMode(.inline)
    }
    
    var finalScreen: some View {
        ZStack {
            ScrollView {
                VStack(spacing: 32) {
                    Spacer().frame(height: 20)
                    
                    if showArabic {
                        VStack(spacing: 16) {
                            Text("ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ")
                                .font(.system(size: 30, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .multilineTextAlignment(.center)
                                .lineSpacing(10)
                                .padding(.horizontal, 30)
                            
                            Text("Surah Al-Baqarah 2:255 (Ayat al-Kursi)")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(Color.appGold.opacity(0.7))
                        }.transition(.opacity.combined(with: .move(edge: .top)))
                    }
                    
                    if showTranslation {
                        Text("\"Allah - there is no deity except Him,\nthe Ever-Living, the Sustainer\nof existence (Al-Qayyum)\"")
                            .font(.system(size: 20, weight: .light, design: .serif))
                            .foregroundColor(.white.opacity(0.9))
                            .multilineTextAlignment(.center)
                            .lineSpacing(8)
                            .italic()
                            .padding(.horizontal, 40)
                            .transition(.opacity.combined(with: .scale(scale: 0.9)))
                    }
                    
                    Divider().background(Color.white.opacity(0.2)).padding(.horizontal, 40).padding(.vertical, 8)
                    
                    if showExplanation {
                        VStack(alignment: .leading, spacing: 20) {
                            Text("Why Al-Qayyum?")
                                .font(.system(size: 22, weight: .semibold, design: .serif))
                                .foregroundColor(.appGold)
                                .frame(maxWidth: .infinity, alignment: .center)
                            
                            ExplanationPoint(icon: "infinity", text: "Al-Qayyum sustains everything—yet needs nothing to sustain Him.")
                            ExplanationPoint(icon: "heart.circle", text: "Your existence, your breath, your heartbeat—all depend on Him this very second.")
                            ExplanationPoint(icon: "moon.stars", text: "He never sleeps, never rests, never tires. He is always maintaining creation.")
                            ExplanationPoint(icon: "figure.stand", text: "When you feel alone or unsupported—remember, Al-Qayyum is holding you up.")
                            
                            Text("You exist because Al-Qayyum\nwills it—\nright now, and always.")
                                .font(.system(size: 18, weight: .medium, design: .serif))
                                .foregroundColor(.white.opacity(0.95))
                                .multilineTextAlignment(.center)
                                .lineSpacing(6)
                                .frame(maxWidth: .infinity)
                                .padding(.top, 10)
                        }.padding(.horizontal, 30).transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                    
                    Spacer().frame(height: 200)
                }.background(GeometryReader { geo in Color.clear.preference(key: ScrollOffsetKey.self, value: geo.frame(in: .named("scroll")).minY)})
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
        }
        .overlay(
            VStack {
                Spacer()
                if showExplanation {
                    NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "al-qayyum")!)) {
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
        )
        .onAppear { animateFinalScreen() }
    }
    
    private func animateFinalScreen() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) { withAnimation(.easeOut(duration: 0.8)) { showArabic = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) { withAnimation(.easeOut(duration: 0.8)) { showTranslation = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) { withAnimation(.easeOut(duration: 0.8)) { showExplanation = true }; autoPlayAyahAudio(); DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) { withAnimation { showScrollIndicator = false }}}
    }
    
    private func autoPlayAyahAudio() {
        if let audioPath = Bundle.main.path(forResource: "al-baqarah-2-255", ofType: "mp3") {
            let audioUrl = URL(fileURLWithPath: audioPath)
            do { audioPlayer = try AVAudioPlayer(contentsOf: audioUrl); audioPlayer?.play(); isPlayingAudio = true; DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) { isPlayingAudio = false }} catch { print("⚠️ Could not play audio: \(error.localizedDescription)") }
        } else { print("⚠️ Audio file 'al-baqarah-2-255.mp3' not found") }
    }
}

