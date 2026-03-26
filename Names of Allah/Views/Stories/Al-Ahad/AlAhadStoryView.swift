// AlAhadStoryView.swift
import SwiftUI
import AVFoundation

struct AlAhadStoryView: View {
    @State private var currentScreen = 0
    @State private var showArabic = false
    @State private var showTranslation = false
    @State private var showExplanation = false
    @State private var isPlayingAudio = false
    @State private var showScrollIndicator = true
    @State private var audioPlayer: AVAudioPlayer?
    @State private var scrollOffset: CGFloat = 0
    let totalScreens = 10
    
    var body: some View {
        ZStack {
            LinearGradient(colors: [Color(red: 0.06, green: 0.06, blue: 0.12), Color.black], startPoint: .top, endPoint: .bottom).ignoresSafeArea()
            VStack {
                HStack(spacing: 8) { ForEach(0..<totalScreens, id: \.self) { i in Capsule().fill(i <= currentScreen ? Color.appGold : Color.white.opacity(0.3)).frame(width: i == currentScreen ? 30 : 20, height: 4).animation(.spring(response: 0.3), value: currentScreen) }}.padding(.top, 20).padding(.horizontal, 30)
                Spacer()
                Group {
                    if currentScreen == 0 { StoryTextBox(text: "Surah Al-Ikhlas—\n\nworth 1/3 of the Quran.", icon: "book.closed") }
                    else if currentScreen == 1 { StoryTextBox(text: "\"Say: He is Allah,\nAl-Ahad.\"", icon: "text.quote") }
                    else if currentScreen == 2 { StoryTextBox(text: "Al-Ahad.\n\nNot just 'One'—\n\nAbsolutely Unique.", icon: "seal.fill") }
                    else if currentScreen == 3 { StoryTextBox(text: "There is nothing\nlike Him.\n\nNothing compares.", icon: "xmark.circle") }
                    else if currentScreen == 4 { StoryTextBox(text: "No partner.\nNo child.\nNo parent.", icon: "minus.circle") }
                    else if currentScreen == 5 { StoryTextBox(text: "He was not born.\nHe does not give birth.", icon: "infinity") }
                    else if currentScreen == 6 { StoryTextBox(text: "Al-Ahad is\nuniquely,\nabsolutely,\n\nONE.", icon: "1.circle.fill") }
                    else if currentScreen == 7 { StoryTextBox(text: "When you truly grasp\nAl-Ahad—\n\nyou can never worship\nanything else.", icon: "heart.fill") }
                    else if currentScreen == 8 { StoryTextBox(text: "This is pure Tawheed.", icon: "sparkles") }
                    else if currentScreen == 9 { finalScreen }
                }.transition(.asymmetric(insertion: .move(edge: .trailing).combined(with: .opacity), removal: .move(edge: .leading).combined(with: .opacity)))
                Spacer()
                if currentScreen < totalScreens - 1 { NextButton { withAnimation(.easeInOut(duration: 0.4)) { currentScreen += 1 }}.padding(.bottom, 60) }
            }
        }.navigationBarTitleDisplayMode(.inline)
    }
    
    var finalScreen: some View {
        ZStack {
            ScrollView {
                VStack(spacing: 32) {
                    Spacer().frame(height: 20)
                    if showArabic { VStack(spacing: 16) { Text("قُلْ هُوَ ٱللَّهُ أَحَدٌ").font(.system(size: 42, weight: .bold, design: .serif)).foregroundColor(.white).multilineTextAlignment(.center).padding(.horizontal, 30); Text("Surah Al-Ikhlas 112:1").font(.system(size: 14, weight: .light)).foregroundColor(Color.appGold.opacity(0.7)) }.transition(.opacity.combined(with: .move(edge: .top))) }
                    if showTranslation { Text("\"Say: He is Allah,\nthe Unique (Al-Ahad)\"").font(.system(size: 22, weight: .light, design: .serif)).foregroundColor(.white.opacity(0.9)).multilineTextAlignment(.center).lineSpacing(8).italic().padding(.horizontal, 40).transition(.opacity.combined(with: .scale(scale: 0.9))) }
                    Divider().background(Color.white.opacity(0.2)).padding(.horizontal, 40).padding(.vertical, 8)
                    if showExplanation {
                        VStack(alignment: .leading, spacing: 20) {
                            Text("Why Al-Ahad?").font(.system(size: 22, weight: .semibold, design: .serif)).foregroundColor(.appGold).frame(maxWidth: .infinity, alignment: .center)
                            ExplanationPoint(icon: "seal.fill", text: "Al-Ahad means absolutely unique—no equal, no likeness, no comparison.")
                            ExplanationPoint(icon: "sparkles", text: "This is pure Tawheed: recognizing Allah's absolute oneness.")
                            ExplanationPoint(icon: "heart.circle", text: "When you understand Al-Ahad, shirk becomes impossible.")
                            ExplanationPoint(icon: "infinity", text: "Recite Surah Al-Ikhlas—it is worth 1/3 of the Quran.")
                            Text("He is Al-Ahad—\nabsolutely,\nuniquely One.").font(.system(size: 18, weight: .medium, design: .serif)).foregroundColor(.white.opacity(0.95)).multilineTextAlignment(.center).lineSpacing(6).frame(maxWidth: .infinity).padding(.top, 10)
                        }.padding(.horizontal, 30).transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                    Spacer().frame(height: 200)
                }.background(GeometryReader { geo in Color.clear.preference(key: ScrollOffsetKey.self, value: geo.frame(in: .named("scroll")).minY)})
            }.coordinateSpace(name: "scroll").onPreferenceChange(ScrollOffsetKey.self) { value in scrollOffset = value; if value < -50 { withAnimation { showScrollIndicator = false }}}
            VStack { Spacer(); if showScrollIndicator && showExplanation { ScrollIndicator(isVisible: true, bounceOffset: 0).padding(.bottom, 180) }}
        }
        .overlay(VStack { Spacer(); if showExplanation { NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "al-ahad")!)) { HStack(spacing: 10) { Text("Continue to Reflect").font(.system(size: 18, weight: .medium, design: .serif)); Image(systemName: "arrow.right").font(.system(size: 14, weight: .semibold)) }.foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1)).frame(maxWidth: 250).padding(.vertical, 18).background(LinearGradient(colors: [Color(red: 0.9, green: 0.82, blue: 0.65), Color(red: 0.85, green: 0.75, blue: 0.55)], startPoint: .topLeading, endPoint: .bottomTrailing)).clipShape(RoundedRectangle(cornerRadius: 30)).shadow(color: Color.appGold.opacity(0.3), radius: 20, x: 0, y: 10) }.padding(.bottom, 50).transition(.opacity.combined(with: .move(edge: .bottom))) }})
        .onAppear { animateFinalScreen() }
    }
    
    private func animateFinalScreen() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) { withAnimation(.easeOut(duration: 0.8)) { showArabic = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) { withAnimation(.easeOut(duration: 0.8)) { showTranslation = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) { withAnimation(.easeOut(duration: 0.8)) { showExplanation = true }; autoPlayAyahAudio(); DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) { withAnimation { showScrollIndicator = false }}}
    }
    
    private func autoPlayAyahAudio() {
        if let audioPath = Bundle.main.path(forResource: "al-ikhlas-112-1", ofType: "mp3") {
            do { audioPlayer = try AVAudioPlayer(contentsOf: URL(fileURLWithPath: audioPath)); audioPlayer?.play(); isPlayingAudio = true; DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) { isPlayingAudio = false }} catch { print("⚠️ Audio error") }
        }
    }
}
