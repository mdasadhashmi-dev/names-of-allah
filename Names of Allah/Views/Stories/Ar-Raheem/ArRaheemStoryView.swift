// ArRaheemStoryView.swift - Ar-Raheem (The Most Compassionate)
import SwiftUI
import AVFoundation
struct ArRaheemStoryView: View {
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
            LinearGradient(colors: [Color(red: 0.08, green: 0.06, blue: 0.12), Color.black], startPoint: .top, endPoint: .bottom).ignoresSafeArea()
            VStack {
                HStack(spacing: 8) { ForEach(0..<totalScreens, id: \.self) { i in Capsule().fill(i <= currentScreen ? Color.appGold : Color.white.opacity(0.3)).frame(width: i == currentScreen ? 30 : 20, height: 4).animation(.spring(response: 0.3), value: currentScreen) }}.padding(.top, 20).padding(.horizontal, 30)
                Spacer()
                Group {
                    if currentScreen == 0 { StoryTextBox(text: "Adam عَلَيْهِ ٱلسَّلَامُ sinned.", icon: "exclamationmark.triangle") }
                    else if currentScreen == 1 { StoryTextBox(text: "He disobeyed Allah.", icon: "xmark.circle") }
                    else if currentScreen == 2 { StoryTextBox(text: "He was expelled\nfrom Paradise.", icon: "arrow.down.circle") }
                    else if currentScreen == 3 { StoryTextBox(text: "But then he repented.", icon: "arrow.uturn.left") }
                    else if currentScreen == 4 { StoryTextBox(text: "And Ar-Raheem—\nThe Most Compassionate—", icon: "heart.circle.fill") }
                    else if currentScreen == 5 { StoryTextBox(text: "Accepted his repentance.", icon: "checkmark.circle") }
                    else if currentScreen == 6 { StoryTextBox(text: "Not because Adam\ndeserved it—", icon: "hand.raised.slash") }
                    else if currentScreen == 7 { StoryTextBox(text: "But because Ar-Raheem\nis infinitely compassionate.", icon: "sparkles") }
                    else if currentScreen == 8 { StoryTextBox(text: "Ar-Raheem—\n\ncompassion\nfor those who turn back.", icon: "arrow.down.heart") }
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
                    if showArabic { VStack(spacing: 16) { Text("فَتَلَقَّىٰٓ ءَادَمُ مِن رَّبِّهِۦ كَلِمَـٰتٍۢ فَتَابَ عَلَيْهِ ۚ إِنَّهُۥ هُوَ ٱلتَّوَّابُ ٱلرَّحِيمُ").font(.system(size: 22, weight: .bold, design: .serif)).foregroundColor(.white).multilineTextAlignment(.center).lineSpacing(10).padding(.horizontal, 30); Text("Surah Al-Baqarah 2:37").font(.system(size: 14, weight: .light)).foregroundColor(Color.appGold.opacity(0.7)) }.transition(.opacity.combined(with: .move(edge: .top))) }
                    if showTranslation { Text("\"Then Adam received words from his Lord,\nand He accepted his repentance.\nIndeed, He is the Accepting of Repentance,\nthe Most Compassionate (Ar-Raheem)\"").font(.system(size: 18, weight: .light, design: .serif)).foregroundColor(.white.opacity(0.9)).multilineTextAlignment(.center).lineSpacing(8).italic().padding(.horizontal, 40).transition(.opacity.combined(with: .scale(scale: 0.9))) }
                    Divider().background(Color.white.opacity(0.2)).padding(.horizontal, 40).padding(.vertical, 8)
                    if showExplanation {
                        VStack(alignment: .leading, spacing: 20) {
                            Text("Why Ar-Raheem?").font(.system(size: 22, weight: .semibold, design: .serif)).foregroundColor(.appGold).frame(maxWidth: .infinity, alignment: .center)
                            ExplanationPoint(icon: "heart.circle", text: "Ar-Raheem's compassion embraces those who turn back to Him.")
                            ExplanationPoint(icon: "checkmark.circle", text: "He accepted Adam's repentance—not because Adam deserved it, but because He is infinitely compassionate.")
                            ExplanationPoint(icon: "arrow.uturn.left", text: "When you sin and repent, Ar-Raheem accepts you.")
                            ExplanationPoint(icon: "sparkles", text: "His compassion is specifically for believers who seek His mercy.")
                            Text("Ar-Raheem—\ncompassion for\nthose who return.").font(.system(size: 18, weight: .medium, design: .serif)).foregroundColor(.white.opacity(0.95)).multilineTextAlignment(.center).lineSpacing(6).frame(maxWidth: .infinity).padding(.top, 10)
                        }.padding(.horizontal, 30).transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                    Spacer().frame(height: 200)
                }.background(GeometryReader { geo in Color.clear.preference(key: ScrollOffsetKey.self, value: geo.frame(in: .named("scroll")).minY)})
            }.coordinateSpace(name: "scroll").onPreferenceChange(ScrollOffsetKey.self) { value in scrollOffset = value; if value < -50 { withAnimation { showScrollIndicator = false }}}
            VStack { Spacer(); if showScrollIndicator && showExplanation { ScrollIndicator(isVisible: true, bounceOffset: 0).padding(.bottom, 180) }}
        }
        .overlay(VStack { Spacer(); if showExplanation { NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "ar-raheem")!)) { HStack(spacing: 10) { Text("Continue to Reflect").font(.system(size: 18, weight: .medium, design: .serif)); Image(systemName: "arrow.right").font(.system(size: 14, weight: .semibold)) }.foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1)).frame(maxWidth: 250).padding(.vertical, 18).background(LinearGradient(colors: [Color(red: 0.9, green: 0.82, blue: 0.65), Color(red: 0.85, green: 0.75, blue: 0.55)], startPoint: .topLeading, endPoint: .bottomTrailing)).clipShape(RoundedRectangle(cornerRadius: 30)).shadow(color: Color.appGold.opacity(0.3), radius: 20, x: 0, y: 10) }.padding(.bottom, 50).transition(.opacity.combined(with: .move(edge: .bottom))) }})
        .onAppear { animateFinalScreen() }
    }
    private func animateFinalScreen() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) { withAnimation(.easeOut(duration: 0.8)) { showArabic = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) { withAnimation(.easeOut(duration: 0.8)) { showTranslation = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) { withAnimation(.easeOut(duration: 0.8)) { showExplanation = true }; autoPlayAyahAudio(); DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) { withAnimation { showScrollIndicator = false }}}
    }
    private func autoPlayAyahAudio() {
        if let audioPath = Bundle.main.path(forResource: "al-baqarah-2-37", ofType: "mp3") {
            do { audioPlayer = try AVAudioPlayer(contentsOf: URL(fileURLWithPath: audioPath)); audioPlayer?.play(); isPlayingAudio = true; DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) { isPlayingAudio = false }} catch { print("⚠️ Audio error") }
        }
    }
}



