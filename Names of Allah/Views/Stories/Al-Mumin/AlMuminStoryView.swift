// AlMuminStoryView.swift - Al-Mu'min (The Granter of Security)
import SwiftUI
import AVFoundation

struct AlMuminStoryView: View {
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
            LinearGradient(colors: [Color(red: 0.08, green: 0.1, blue: 0.16), Color.black], startPoint: .top, endPoint: .bottom).ignoresSafeArea()
            VStack {
                HStack(spacing: 8) { ForEach(0..<totalScreens, id: \.self) { i in Capsule().fill(i <= currentScreen ? Color.appGold : Color.white.opacity(0.3)).frame(width: i == currentScreen ? 30 : 20, height: 4).animation(.spring(response: 0.3), value: currentScreen) }}.padding(.top, 20).padding(.horizontal, 30)
                Spacer()
                Group {
                    if currentScreen == 0 { StoryTextBox(text: "A child woke up\nscreaming—\n\n\"There's a monster\nunder my bed!\"", icon: "bed.double.fill") }
                    else if currentScreen == 1 { StoryTextBox(text: "The mother held her:\n\n\"Say: Bismillah.\nAllah is with you.\"", icon: "figure.2.arms.open") }
                    else if currentScreen == 2 { StoryTextBox(text: "The child whispered:\n\n\"Bismillah...\"", icon: "bubble.left") }
                    else if currentScreen == 3 { StoryTextBox(text: "The fear began to fade.", icon: "moon.stars") }
                    else if currentScreen == 4 { StoryTextBox(text: "Years later,\nthat same child faced\na different fear—\n\nloss, uncertainty, grief.", icon: "figure.stand") }
                    else if currentScreen == 5 { StoryTextBox(text: "But she remembered:\n\nAllah is Al-Mu'min—\n\nthe One who grants security.", icon: "shield.fill") }
                    else if currentScreen == 6 { StoryTextBox(text: "When you say \"Bismillah,\"\nyou're invoking\nAl-Mu'min's protection.", icon: "hands.sparkles") }
                    else if currentScreen == 7 { StoryTextBox(text: "He grants safety\nwhen the world feels dangerous.\n\nHe grants peace\nwhen anxiety attacks.", icon: "heart.circle") }
                    else if currentScreen == 8 { StoryTextBox(text: "Whatever you fear—\n\nAl-Mu'min is greater.", icon: "mountain.2") }
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
                    if showArabic { VStack(spacing: 16) { Text("ٱلْمُؤْمِنُ").font(.system(size: 50, weight: .bold, design: .serif)).foregroundColor(.white).multilineTextAlignment(.center).padding(.horizontal, 30); Text("Surah Al-Hashr 59:23").font(.system(size: 14, weight: .light)).foregroundColor(Color.appGold.opacity(0.7)) }.transition(.opacity.combined(with: .move(edge: .top))) }
                    if showTranslation { Text("\"The Granter of Security\n(Al-Mu'min)\"").font(.system(size: 22, weight: .light, design: .serif)).foregroundColor(.white.opacity(0.9)).multilineTextAlignment(.center).lineSpacing(8).italic().padding(.horizontal, 40).transition(.opacity.combined(with: .scale(scale: 0.9))) }
                    Divider().background(Color.white.opacity(0.2)).padding(.horizontal, 40).padding(.vertical, 8)
                    if showExplanation {
                        VStack(alignment: .leading, spacing: 20) {
                            Text("Why Al-Mu'min?").font(.system(size: 22, weight: .semibold, design: .serif)).foregroundColor(.appGold).frame(maxWidth: .infinity, alignment: .center)
                            ExplanationPoint(icon: "shield.fill", text: "Al-Mu'min grants security and safety when you feel vulnerable and afraid.")
                            ExplanationPoint(icon: "hands.sparkles", text: "Every time you say 'Bismillah,' you're seeking His divine protection.")
                            ExplanationPoint(icon: "heart.circle", text: "He removes fear from the hearts of believers and replaces it with iman.")
                            ExplanationPoint(icon: "checkmark.seal", text: "Trust in Al-Mu'min—no fear can overpower His security.")
                            Text("Find your safety\nin Al-Mu'min,\nthe Granter of Security.").font(.system(size: 18, weight: .medium, design: .serif)).foregroundColor(.white.opacity(0.95)).multilineTextAlignment(.center).lineSpacing(6).frame(maxWidth: .infinity).padding(.top, 10)
                        }.padding(.horizontal, 30).transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                    Spacer().frame(height: 200)
                }.background(GeometryReader { geo in Color.clear.preference(key: ScrollOffsetKey.self, value: geo.frame(in: .named("scroll")).minY)})
            }.coordinateSpace(name: "scroll").onPreferenceChange(ScrollOffsetKey.self) { value in scrollOffset = value; if value < -50 { withAnimation { showScrollIndicator = false }}}
            VStack { Spacer(); if showScrollIndicator && showExplanation { ScrollIndicator(isVisible: true, bounceOffset: 0).padding(.bottom, 180) }}
        }
        .overlay(VStack { Spacer(); if showExplanation { NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "al-mumin")!)) { HStack(spacing: 10) { Text("Continue to Reflect").font(.system(size: 18, weight: .medium, design: .serif)); Image(systemName: "arrow.right").font(.system(size: 14, weight: .semibold)) }.foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1)).frame(maxWidth: 250).padding(.vertical, 18).background(LinearGradient(colors: [Color(red: 0.9, green: 0.82, blue: 0.65), Color(red: 0.85, green: 0.75, blue: 0.55)], startPoint: .topLeading, endPoint: .bottomTrailing)).clipShape(RoundedRectangle(cornerRadius: 30)).shadow(color: Color.appGold.opacity(0.3), radius: 20, x: 0, y: 10) }.padding(.bottom, 50).transition(.opacity.combined(with: .move(edge: .bottom))) }})
        .onAppear { animateFinalScreen() }
    }
    
    private func animateFinalScreen() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) { withAnimation(.easeOut(duration: 0.8)) { showArabic = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) { withAnimation(.easeOut(duration: 0.8)) { showTranslation = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) { withAnimation(.easeOut(duration: 0.8)) { showExplanation = true }; autoPlayAyahAudio(); DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) { withAnimation { showScrollIndicator = false }}}
    }
    
    private func autoPlayAyahAudio() {
        if let audioPath = Bundle.main.path(forResource: "al-hashr-59-23-mumin", ofType: "mp3") {
            let audioUrl = URL(fileURLWithPath: audioPath)
            do { audioPlayer = try AVAudioPlayer(contentsOf: audioUrl); audioPlayer?.play(); isPlayingAudio = true; DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) { isPlayingAudio = false }} catch { print("⚠️ Audio error") }
        }
    }
}



