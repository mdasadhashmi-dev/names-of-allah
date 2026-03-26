//
//  AlHaqqStoryView.swift
//  Names of Allah
//
//  Story of The Hour of Truth - Al-Haqq (The Truth)
//

import SwiftUI
import AVFoundation

struct AlHaqqStoryView: View {
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
            LinearGradient(colors: [Color(red: 0.1, green: 0.1, blue: 0.2), Color.black], startPoint: .top, endPoint: .bottom).ignoresSafeArea()
            
            VStack {
                HStack(spacing: 8) {
                    ForEach(0..<totalScreens, id: \.self) { index in
                        Capsule().fill(index <= currentScreen ? Color.appGold : Color.white.opacity(0.3)).frame(width: index == currentScreen ? 30 : 20, height: 4).animation(.spring(response: 0.3), value: currentScreen)
                    }
                }.padding(.top, 20).padding(.horizontal, 30)
                
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
                }.transition(.asymmetric(insertion: .move(edge: .trailing).combined(with: .opacity), removal: .move(edge: .leading).combined(with: .opacity)))
                
                Spacer()
                
                if currentScreen < totalScreens - 1 {
                    NextButton { withAnimation(.easeInOut(duration: 0.4)) { currentScreen += 1 }}.padding(.bottom, 60)
                }
            }
        }.navigationBarTitleDisplayMode(.inline)
    }
    
    var screen1: some View { StoryTextBox(text: "On the Day of Judgment,\nevery lie will be exposed.", icon: "eye.fill") }
    var screen2: some View { StoryTextBox(text: "Every secret deed—\ngood or bad—\nwill be revealed.", icon: "doc.text.magnifyingglass") }
    var screen3: some View { StoryTextBox(text: "People will deny their sins.\n\n\"We didn't do that!\"", icon: "hand.raised.slash") }
    var screen4: some View { StoryTextBox(text: "But their own hands will testify.\n\n\"Yes, you did.\"", icon: "hand.point.up") }
    var screen5: some View { StoryTextBox(text: "Their feet will speak.\nTheir skin will witness.\n\nEverything will tell the truth.", icon: "figure.walk") }
    var screen6: some View { StoryTextBox(text: "No lawyer.\nNo excuses.\nNo fabricated stories.", icon: "xmark.circle") }
    var screen7: some View { StoryTextBox(text: "Only Al-Haqq—\n\nthe Absolute Truth,\nthe Ultimate Reality.", icon: "checkmark.seal.fill") }
    var screen8: some View { StoryTextBox(text: "In this world,\npeople lie, manipulate,\nand hide.", icon: "person.fill.questionmark") }
    var screen9: some View { StoryTextBox(text: "But on that Day,\nonly the truth will remain.\n\nBecause Allah is Al-Haqq.", icon: "light.beacon.max") }
    
    var finalScreen: some View {
        ZStack {
            ScrollView {
                VStack(spacing: 32) {
                    Spacer().frame(height: 20)
                    
                    if showArabic {
                        VStack(spacing: 16) {
                            Text("فَذَٰلِكُمُ ٱللَّهُ رَبُّكُمُ ٱلْحَقُّ")
                                .font(.system(size: 36, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .multilineTextAlignment(.center)
                                .lineSpacing(10)
                                .padding(.horizontal, 30)
                            
                            Text("Surah Yunus 10:32")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(Color.appGold.opacity(0.7))
                        }.transition(.opacity.combined(with: .move(edge: .top)))
                    }
                    
                    if showTranslation {
                        Text("\"For that is Allah, your Lord,\nthe Truth (Al-Haqq)\"")
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
                            Text("Why Al-Haqq?")
                                .font(.system(size: 22, weight: .semibold, design: .serif))
                                .foregroundColor(.appGold)
                                .frame(maxWidth: .infinity, alignment: .center)
                            
                            ExplanationPoint(icon: "checkmark.seal", text: "Al-Haqq is the ultimate reality—everything else is temporary, fleeting.")
                            ExplanationPoint(icon: "scale.3d", text: "Truth may be rejected, ignored, or silenced—but it never disappears.")
                            ExplanationPoint(icon: "eye.circle", text: "Allah is the Truth. His promises are true. His warnings are true. His judgment is true.")
                            ExplanationPoint(icon: "figure.stand", text: "Live in truth. Speak truth. Seek Al-Haqq—because everything false will fade.")
                            
                            Text("Stand with Al-Haqq—\nthe only Truth\nthat never changes.")
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
                    NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "al-haqq")!)) {
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
        if let audioPath = Bundle.main.path(forResource: "yunus-10-32", ofType: "mp3") {
            let audioUrl = URL(fileURLWithPath: audioPath)
            do { audioPlayer = try AVAudioPlayer(contentsOf: audioUrl); audioPlayer?.play(); isPlayingAudio = true; DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) { isPlayingAudio = false }} catch { print("⚠️ Could not play audio: \(error.localizedDescription)") }
        } else { print("⚠️ Audio file 'yunus-10-32.mp3' not found") }
    }
}



