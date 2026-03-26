//
//  AlQuddusStoryView.swift
//  Names of Allah
//

import SwiftUI
import AVFoundation

struct AlQuddusStoryView: View {
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
            LinearGradient(colors: [Color(red: 0.12, green: 0.15, blue: 0.2), Color.black], startPoint: .top, endPoint: .bottom).ignoresSafeArea()
            
            VStack {
                HStack(spacing: 8) {
                    ForEach(0..<totalScreens, id: \.self) { index in
                        Capsule().fill(index <= currentScreen ? Color.appGold : Color.white.opacity(0.3)).frame(width: index == currentScreen ? 30 : 20, height: 4).animation(.spring(response: 0.3), value: currentScreen)
                    }
                }.padding(.top, 20).padding(.horizontal, 30)
                
                Spacer()
                
                Group {
                    if currentScreen == 0 { StoryTextBox(text: "The angels stand before Allah—\n\nperfect, obedient,\nnever tiring.", icon: "sparkles") }
                    else if currentScreen == 1 { StoryTextBox(text: "Day and night,\nthey say:\n\n\"Subhanallah. Glory to Allah.\"", icon: "moon.stars") }
                    else if currentScreen == 2 { StoryTextBox(text: "Some bow in ruku'\nfor eternity.\n\nSome prostrate\nforever.", icon: "figure.mind.and.body") }
                    else if currentScreen == 3 { StoryTextBox(text: "They never get tired.\nThey never complain.\nThey never sin.", icon: "checkmark.circle.fill") }
                    else if currentScreen == 4 { StoryTextBox(text: "Why?\n\nBecause they see\nthe holiness of Allah.", icon: "eye.circle") }
                    else if currentScreen == 5 { StoryTextBox(text: "Al-Quddus—\n\nThe One free from\nall imperfection,\nall flaw,\nall weakness.", icon: "seal.fill") }
                    else if currentScreen == 6 { StoryTextBox(text: "We sin.\nWe forget.\nWe get distracted.", icon: "figure.stand") }
                    else if currentScreen == 7 { StoryTextBox(text: "But Al-Quddus\nnever forgets,\nnever sins,\nnever changes.", icon: "infinity.circle") }
                    else if currentScreen == 8 { StoryTextBox(text: "He is perfectly pure—\n\nand He calls us\nto purify ourselves\nfor Him.", icon: "drop.circle") }
                    else if currentScreen == 9 { finalScreen }
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
                            Text("ٱلْقُدُّوسُ ٱلسَّلَـٰمُ")
                                .font(.system(size: 44, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .multilineTextAlignment(.center)
                                .padding(.horizontal, 30)
                            
                            Text("Surah Al-Hashr 59:23")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(Color.appGold.opacity(0.7))
                        }.transition(.opacity.combined(with: .move(edge: .top)))
                    }
                    
                    if showTranslation {
                        Text("\"The Most Holy (Al-Quddus),\nthe Perfection\"")
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
                            Text("Why Al-Quddus?")
                                .font(.system(size: 22, weight: .semibold, design: .serif))
                                .foregroundColor(.appGold)
                                .frame(maxWidth: .infinity, alignment: .center)
                            
                            ExplanationPoint(icon: "seal.fill", text: "Al-Quddus is free from all imperfection, all deficiency, all need.")
                            ExplanationPoint(icon: "sparkles", text: "Everything we consider pure or holy—derives its purity from Him.")
                            ExplanationPoint(icon: "drop.circle", text: "We purify ourselves by remembering Al-Quddus through worship and dhikr.")
                            ExplanationPoint(icon: "figure.mind.and.body", text: "When you glorify Al-Quddus, you are acknowledging His absolute perfection.")
                            
                            Text("He is perfect in every way.\nAl-Quddus,\nthe Most Holy.")
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
            .onPreferenceChange(ScrollOffsetKey.self) { value in scrollOffset = value; if value < -50 { withAnimation { showScrollIndicator = false }}}
            
            VStack { Spacer(); if showScrollIndicator && showExplanation { ScrollIndicator(isVisible: true, bounceOffset: 0).padding(.bottom, 180) }}
        }
        .overlay(
            VStack {
                Spacer()
                if showExplanation {
                    NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "al-quddus")!)) {
                        HStack(spacing: 10) { Text("Continue to Reflect").font(.system(size: 18, weight: .medium, design: .serif)); Image(systemName: "arrow.right").font(.system(size: 14, weight: .semibold)) }.foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1)).frame(maxWidth: 250).padding(.vertical, 18).background(LinearGradient(colors: [Color(red: 0.9, green: 0.82, blue: 0.65), Color(red: 0.85, green: 0.75, blue: 0.55)], startPoint: .topLeading, endPoint: .bottomTrailing)).clipShape(RoundedRectangle(cornerRadius: 30)).shadow(color: Color.appGold.opacity(0.3), radius: 20, x: 0, y: 10)
                    }.padding(.bottom, 50).transition(.opacity.combined(with: .move(edge: .bottom)))
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
        if let audioPath = Bundle.main.path(forResource: "al-hashr-59-23-quddus", ofType: "mp3") {
            let audioUrl = URL(fileURLWithPath: audioPath)
            do { audioPlayer = try AVAudioPlayer(contentsOf: audioUrl); audioPlayer?.play(); isPlayingAudio = true; DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) { isPlayingAudio = false }} catch { print("⚠️ Could not play audio: \(error.localizedDescription)") }
        } else { print("⚠️ Audio file 'al-hashr-59-23-quddus.mp3' not found") }
    }
}



