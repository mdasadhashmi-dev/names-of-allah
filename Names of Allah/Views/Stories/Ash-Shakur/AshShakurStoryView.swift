//
//  AshShakurStoryView.swift
//  Names of Allah
//
//  Story of The Grateful Servant - Ash-Shakur (The Appreciative)
//

import SwiftUI
import AVFoundation

struct AshShakurStoryView: View {
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
            LinearGradient(colors: [Color(red: 0.15, green: 0.12, blue: 0.18), Color.black], startPoint: .top, endPoint: .bottom).ignoresSafeArea()
            
            VStack {
                HStack(spacing: 8) {
                    ForEach(0..<totalScreens, id: \.self) { index in
                        Capsule().fill(index <= currentScreen ? Color.appGold : Color.white.opacity(0.3)).frame(width: index == currentScreen ? 30 : 20, height: 4).animation(.spring(response: 0.3), value: currentScreen)
                    }
                }.padding(.top, 20).padding(.horizontal, 30)
                
                Spacer()
                
                Group {
                    if currentScreen == 0 { StoryTextBox(text: "A woman prayed\ntwo units of prayer.\n\nJust two.", icon: "hands.sparkles") }
                    else if currentScreen == 1 { StoryTextBox(text: "She wasn't the most pious.\nShe had made mistakes.\n\nBut she prayed sincerely.", icon: "heart.fill") }
                    else if currentScreen == 2 { StoryTextBox(text: "After she finished,\nshe raised her hands:\n\n\"Ya Allah, accept this from me.\"", icon: "hands.and.sparkles") }
                    else if currentScreen == 3 { StoryTextBox(text: "That night,\nshe saw a dream—\n\nJannah.", icon: "star.fill") }
                    else if currentScreen == 4 { StoryTextBox(text: "She was confused.\n\n\"I only prayed two rak'ahs.\nHow is this for me?\"", icon: "questionmark.circle") }
                    else if currentScreen == 5 { StoryTextBox(text: "A voice said:\n\n\"You are Ash-Shakur—\nthe Most Appreciative.\"", icon: "sparkles") }
                    else if currentScreen == 6 { StoryTextBox(text: "\"You valued her sincerity\nmore than she expected.\n\nYou multiplied it beyond measure.\"", icon: "arrow.up.forward.circle") }
                    else if currentScreen == 7 { StoryTextBox(text: "Allah doesn't just accept\ngood deeds—\n\nHe appreciates them,\nmultiplies them,\nrewards them lavishly.", icon: "gift.fill") }
                    else if currentScreen == 8 { StoryTextBox(text: "One prayer becomes ten.\nOne good deed\nbecomes seven hundred.", icon: "infinity") }
                    else if currentScreen == 9 { StoryTextBox(text: "Not because we deserve it—\n\nbut because Ash-Shakur\nis infinitely appreciative.", icon: "heart.circle.fill") }
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
                            Text("إِنَّ رَبَّنَا لَغَفُورٌۭ شَكُورٌ")
                                .font(.system(size: 36, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .multilineTextAlignment(.center)
                                .lineSpacing(10)
                                .padding(.horizontal, 30)
                            
                            Text("Surah Fatir 35:30")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(Color.appGold.opacity(0.7))
                        }.transition(.opacity.combined(with: .move(edge: .top)))
                    }
                    
                    if showTranslation {
                        Text("\"Indeed, our Lord is Forgiving\nand Appreciative (Shakur)\"")
                            .font(.system(size: 22, weight: .light, design: .serif))
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
                            Text("Why Ash-Shakur?")
                                .font(.system(size: 22, weight: .semibold, design: .serif))
                                .foregroundColor(.appGold)
                                .frame(maxWidth: .infinity, alignment: .center)
                            
                            ExplanationPoint(icon: "gift.fill", text: "Ash-Shakur appreciates even the smallest deed—a smile, a kind word, a sincere prayer.")
                            ExplanationPoint(icon: "arrow.up.circle", text: "He multiplies rewards beyond what you deserve or imagine.")
                            ExplanationPoint(icon: "heart.fill", text: "Your effort may be small, but His appreciation is infinite.")
                            ExplanationPoint(icon: "sparkles", text: "Keep doing good—Ash-Shakur never overlooks even the tiniest act of sincerity.")
                            
                            Text("Every good deed is seen.\nAsh-Shakur appreciates\nwhat you do.")
                                .font(.system(size: 18, weight: .medium, design: .serif))
                                .foregroundColor(.white.opacity(0.95))
                                .multilineTextAlignment(.center)
                                .lineSpacing(6)
                                .frame(maxWidth: .infinity)
                                .padding(.top, 10)
                        }.padding(.horizontal, 30).transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                    
                    Spacer().frame(height: 140)
                }.background(GeometryReader { geo in Color.clear.preference(key: ScrollOffsetKey.self, value: geo.frame(in: .named("scroll")).minY)})
            }.coordinateSpace(name: "scroll").onPreferenceChange(ScrollOffsetKey.self) { value in scrollOffset = value; if value < -50 { withAnimation { showScrollIndicator = false }}}
            
            VStack { Spacer(); if showScrollIndicator && showExplanation { ScrollIndicator(isVisible: true, bounceOffset: 0).padding(.bottom, 180) }}
            
            VStack {
                Spacer()
                if showExplanation {
                    NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "ash-shakur")!)) {
                        HStack(spacing: 10) { Text("Continue to Reflect").font(.system(size: 18, weight: .medium, design: .serif)); Image(systemName: "arrow.right").font(.system(size: 14, weight: .semibold)) }.foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1)).frame(maxWidth: 250).padding(.vertical, 18).background(LinearGradient(colors: [Color(red: 0.9, green: 0.82, blue: 0.65), Color(red: 0.85, green: 0.75, blue: 0.55)], startPoint: .topLeading, endPoint: .bottomTrailing)).clipShape(RoundedRectangle(cornerRadius: 30)).shadow(color: Color.appGold.opacity(0.3), radius: 20, x: 0, y: 10)
                    }.padding(.bottom, 50).transition(.opacity.combined(with: .move(edge: .bottom)))
                }
            }
        }.onAppear { animateFinalScreen() }
    }
    
    private func animateFinalScreen() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) { withAnimation(.easeOut(duration: 0.8)) { showArabic = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) { withAnimation(.easeOut(duration: 0.8)) { showTranslation = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) { withAnimation(.easeOut(duration: 0.8)) { showExplanation = true }; autoPlayAyahAudio(); DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) { withAnimation { showScrollIndicator = false }}}
    }
    
    private func autoPlayAyahAudio() {
        if let audioPath = Bundle.main.path(forResource: "fatir-35-30", ofType: "mp3") {
            let audioUrl = URL(fileURLWithPath: audioPath)
            do { audioPlayer = try AVAudioPlayer(contentsOf: audioUrl); audioPlayer?.play(); isPlayingAudio = true; DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) { isPlayingAudio = false }} catch { print("⚠️ Could not play audio: \(error.localizedDescription)") }
        } else { print("⚠️ Audio file 'fatir-35-30.mp3' not found") }
    }
}

