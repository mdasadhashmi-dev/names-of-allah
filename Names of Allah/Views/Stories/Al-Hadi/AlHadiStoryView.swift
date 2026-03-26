// AlHadiStoryView.swift - Al-Hadi (The Guide)
import SwiftUI
import AVFoundation
struct AlHadiStoryView: View {
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
            LinearGradient(colors: [Color(red: 0.08, green: 0.07, blue: 0.12), Color.black], startPoint: .top, endPoint: .bottom).ignoresSafeArea()
            VStack {
                HStack(spacing: 8) { ForEach(0..<totalScreens, id: \.self) { i in Capsule().fill(i <= currentScreen ? Color.appGold : Color.white.opacity(0.3)).frame(width: i == currentScreen ? 30 : 20, height: 4).animation(.spring(response: 0.3), value: currentScreen) }}.padding(.top, 20).padding(.horizontal, 30)
                Spacer()
                Group {
                    if currentScreen == 0 { StoryTextBox(text: "You're lost.", icon: "location.slash") }
                    else if currentScreen == 1 { StoryTextBox(text: "Every path\nseems wrong.", icon: "arrow.triangle.turn.up.right.diamond") }
                    else if currentScreen == 2 { StoryTextBox(text: "You don't know\nwhere to go.", icon: "questionmark.circle") }
                    else if currentScreen == 3 { StoryTextBox(text: "Then you call:\n\n\"Ya Allah, guide me.\"", icon: "hands.sparkles") }
                    else if currentScreen == 4 { StoryTextBox(text: "Al-Hadi—\nThe Guide—\n\nanswers.", icon: "arrow.down.heart") }
                    else if currentScreen == 5 { StoryTextBox(text: "The path becomes clear.", icon: "arrow.forward.circle") }
                    else if currentScreen == 6 { StoryTextBox(text: "The confusion lifts.", icon: "smoke.fill") }
                    else if currentScreen == 7 { StoryTextBox(text: "You see the way forward—\n\nbecause Al-Hadi\nshowed you.", icon: "signpost.right.fill") }
                    else if currentScreen == 8 { StoryTextBox(text: "Al-Hadi guides—\n\nwhen you're lost,\nHe shows the way.", icon: "map.fill") }
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
                    if showArabic { VStack(spacing: 16) { Text("وَلِيَعْلَمَ ٱلَّذِينَ أُوتُوا۟ ٱلْعِلْمَ أَنَّهُ ٱلْحَقُّ مِن رَّبِّكَ فَيُؤْمِنُوا۟ بِهِۦ فَتُخْبِتَ لَهُۥ قُلُوبُهُمْ ۗ وَإِنَّ ٱللَّهَ لَهَادِ ٱلَّذِينَ ءَامَنُوٓا۟ إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ").font(.system(size: 17, weight: .bold, design: .serif)).foregroundColor(.white).multilineTextAlignment(.center).lineSpacing(10).padding(.horizontal, 30); Text("Surah Al-Hajj 22:54").font(.system(size: 14, weight: .light)).foregroundColor(Color.appGold.opacity(0.7)) }.transition(.opacity.combined(with: .move(edge: .top))) }
                    if showTranslation { Text("\"And indeed, Allah is the Guide (Hadi)\nof those who believe\nto a straight path\"").font(.system(size: 22, weight: .light, design: .serif)).foregroundColor(.white.opacity(0.9)).multilineTextAlignment(.center).lineSpacing(8).italic().padding(.horizontal, 40).transition(.opacity.combined(with: .scale(scale: 0.9))) }
                    Divider().background(Color.white.opacity(0.2)).padding(.horizontal, 40).padding(.vertical, 8)
                    if showExplanation {
                        VStack(alignment: .leading, spacing: 20) {
                            Text("Why Al-Hadi?").font(.system(size: 22, weight: .semibold, design: .serif)).foregroundColor(.appGold).frame(maxWidth: .infinity, alignment: .center)
                            ExplanationPoint(icon: "signpost.right", text: "Al-Hadi guides you when you're lost and confused.")
                            ExplanationPoint(icon: "arrow.forward.circle", text: "He shows the straight path when every way seems wrong.")
                            ExplanationPoint(icon: "hands.sparkles", text: "Ask Al-Hadi for guidance—He will answer.")
                            ExplanationPoint(icon: "heart.circle", text: "Trust Al-Hadi's guidance even when you don't understand the path.")
                            Text("Al-Hadi—\nthe Guide\nto the straight path.").font(.system(size: 18, weight: .medium, design: .serif)).foregroundColor(.white.opacity(0.95)).multilineTextAlignment(.center).lineSpacing(6).frame(maxWidth: .infinity).padding(.top, 10)
                        }.padding(.horizontal, 30).transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                    Spacer().frame(height: 200)
                }.background(GeometryReader { geo in Color.clear.preference(key: ScrollOffsetKey.self, value: geo.frame(in: .named("scroll")).minY)})
            }.coordinateSpace(name: "scroll").onPreferenceChange(ScrollOffsetKey.self) { value in scrollOffset = value; if value < -50 { withAnimation { showScrollIndicator = false }}}
            VStack { Spacer(); if showScrollIndicator && showExplanation { ScrollIndicator(isVisible: true, bounceOffset: 0).padding(.bottom, 180) }}
        }
        .overlay(VStack { Spacer(); if showExplanation { NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "al-hadi")!)) { HStack(spacing: 10) { Text("Continue to Reflect").font(.system(size: 18, weight: .medium, design: .serif)); Image(systemName: "arrow.right").font(.system(size: 14, weight: .semibold)) }.foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1)).frame(maxWidth: 250).padding(.vertical, 18).background(LinearGradient(colors: [Color(red: 0.9, green: 0.82, blue: 0.65), Color(red: 0.85, green: 0.75, blue: 0.55)], startPoint: .topLeading, endPoint: .bottomTrailing)).clipShape(RoundedRectangle(cornerRadius: 30)).shadow(color: Color.appGold.opacity(0.3), radius: 20, x: 0, y: 10) }.padding(.bottom, 50).transition(.opacity.combined(with: .move(edge: .bottom))) }})
        .onAppear { animateFinalScreen() }
    }
    private func animateFinalScreen() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) { withAnimation(.easeOut(duration: 0.8)) { showArabic = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) { withAnimation(.easeOut(duration: 0.8)) { showTranslation = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) { withAnimation(.easeOut(duration: 0.8)) { showExplanation = true }; autoPlayAyahAudio(); DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) { withAnimation { showScrollIndicator = false }}}
    }
    private func autoPlayAyahAudio() {
        if let audioPath = Bundle.main.path(forResource: "al-hajj-22-54", ofType: "mp3") {
            do { audioPlayer = try AVAudioPlayer(contentsOf: URL(fileURLWithPath: audioPath)); audioPlayer?.play(); isPlayingAudio = true; DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) { isPlayingAudio = false }} catch { print("⚠️ Audio error") }
        }
    }
}



