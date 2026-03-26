// ArRasheedStoryView.swift - Ar-Rasheed (The Guide to the Right Path)
import SwiftUI
import AVFoundation
struct ArRasheedStoryView: View {
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
            LinearGradient(colors: [Color(red: 0.06, green: 0.10, blue: 0.14), Color.black], startPoint: .top, endPoint: .bottom).ignoresSafeArea()
            VStack {
                HStack(spacing: 8) { ForEach(0..<totalScreens, id: \.self) { i in Capsule().fill(i <= currentScreen ? Color.appGold : Color.white.opacity(0.3)).frame(width: i == currentScreen ? 30 : 20, height: 4).animation(.spring(response: 0.3), value: currentScreen) }}.padding(.top, 20).padding(.horizontal, 30)
                Spacer()
                Group {
                    if currentScreen == 0 { StoryTextBox(text: "You face a choice.", icon: "arrow.triangle.branch") }
                    else if currentScreen == 1 { StoryTextBox(text: "One path seems easy.", icon: "arrow.right") }
                    else if currentScreen == 2 { StoryTextBox(text: "The other seems hard.", icon: "arrow.up") }
                    else if currentScreen == 3 { StoryTextBox(text: "Which one is right?", icon: "questionmark.circle") }
                    else if currentScreen == 4 { StoryTextBox(text: "Ar-Rasheed—\nThe Guide to the Right Path—\n\nknows.", icon: "signpost.right.fill") }
                    else if currentScreen == 5 { StoryTextBox(text: "He doesn't just guide—\n\nHe guides to what's RIGHT.", icon: "checkmark.seal") }
                    else if currentScreen == 6 { StoryTextBox(text: "Even when you don't\nunderstand why.", icon: "hands.sparkles") }
                    else if currentScreen == 7 { StoryTextBox(text: "Trust Ar-Rasheed's guidance—\n\nHe sees\nwhat you don't.", icon: "eye.fill") }
                    else if currentScreen == 8 { StoryTextBox(text: "Ar-Rasheed guides—\n\nto perfect wisdom,\nthe right path.", icon: "arrow.forward.circle") }
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
                    if showArabic { VStack(spacing: 16) { Text("قَالُوٓا۟ أَجِئْتَنَا لِتَلْفِتَنَا عَمَّا وَجَدْنَا عَلَيْهِ ءَابَآءَنَا وَتَكُونَ لَكُمَا ٱلْكِبْرِيَآءُ فِى ٱلْأَرْضِ وَمَا نَحْنُ لَكُمَا بِمُؤْمِنِينَ").font(.system(size: 17, weight: .bold, design: .serif)).foregroundColor(.white).multilineTextAlignment(.center).lineSpacing(10).padding(.horizontal, 30); Text("Surah Hud 11:87").font(.system(size: 14, weight: .light)).foregroundColor(Color.appGold.opacity(0.7)) }.transition(.opacity.combined(with: .move(edge: .top))) }
                    if showTranslation { Text("\"Does your prayer command you\nthat we should leave what our fathers worship\nor not do with our wealth what we please?\nIndeed, you are the forbearing, the discerning (Rasheed)!\"").font(.system(size: 17, weight: .light, design: .serif)).foregroundColor(.white.opacity(0.9)).multilineTextAlignment(.center).lineSpacing(8).italic().padding(.horizontal, 40).transition(.opacity.combined(with: .scale(scale: 0.9))) }
                    Divider().background(Color.white.opacity(0.2)).padding(.horizontal, 40).padding(.vertical, 8)
                    if showExplanation {
                        VStack(alignment: .leading, spacing: 20) {
                            Text("Why Ar-Rasheed?").font(.system(size: 22, weight: .semibold, design: .serif)).foregroundColor(.appGold).frame(maxWidth: .infinity, alignment: .center)
                            ExplanationPoint(icon: "signpost.right", text: "Ar-Rasheed guides to the RIGHT path, not just any path.")
                            ExplanationPoint(icon: "checkmark.seal", text: "His guidance is perfect wisdom—trust it even when unclear.")
                            ExplanationPoint(icon: "eye.fill", text: "He sees what you don't—the end of every path.")
                            ExplanationPoint(icon: "hands.sparkles", text: "Follow Ar-Rasheed's guidance even when it seems difficult.")
                            Text("Ar-Rasheed—\nguiding to\nperfect wisdom.").font(.system(size: 18, weight: .medium, design: .serif)).foregroundColor(.white.opacity(0.95)).multilineTextAlignment(.center).lineSpacing(6).frame(maxWidth: .infinity).padding(.top, 10)
                        }.padding(.horizontal, 30).transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                    Spacer().frame(height: 200)
                }.background(GeometryReader { geo in Color.clear.preference(key: ScrollOffsetKey.self, value: geo.frame(in: .named("scroll")).minY)})
            }.coordinateSpace(name: "scroll").onPreferenceChange(ScrollOffsetKey.self) { value in scrollOffset = value; if value < -50 { withAnimation { showScrollIndicator = false }}}
            VStack { Spacer(); if showScrollIndicator && showExplanation { ScrollIndicator(isVisible: true, bounceOffset: 0).padding(.bottom, 180) }}
        }
        .overlay(VStack { Spacer(); if showExplanation { NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "ar-rasheed")!)) { HStack(spacing: 10) { Text("Continue to Reflect").font(.system(size: 18, weight: .medium, design: .serif)); Image(systemName: "arrow.right").font(.system(size: 14, weight: .semibold)) }.foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1)).frame(maxWidth: 250).padding(.vertical, 18).background(LinearGradient(colors: [Color(red: 0.9, green: 0.82, blue: 0.65), Color(red: 0.85, green: 0.75, blue: 0.55)], startPoint: .topLeading, endPoint: .bottomTrailing)).clipShape(RoundedRectangle(cornerRadius: 30)).shadow(color: Color.appGold.opacity(0.3), radius: 20, x: 0, y: 10) }.padding(.bottom, 50).transition(.opacity.combined(with: .move(edge: .bottom))) }})
        .onAppear { animateFinalScreen() }
    }
    private func animateFinalScreen() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) { withAnimation(.easeOut(duration: 0.8)) { showArabic = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) { withAnimation(.easeOut(duration: 0.8)) { showTranslation = true }}
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) { withAnimation(.easeOut(duration: 0.8)) { showExplanation = true }; autoPlayAyahAudio(); DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) { withAnimation { showScrollIndicator = false }}}
    }
    private func autoPlayAyahAudio() {
        if let audioPath = Bundle.main.path(forResource: "hud-11-87", ofType: "mp3") {
            do { audioPlayer = try AVAudioPlayer(contentsOf: URL(fileURLWithPath: audioPath)); audioPlayer?.play(); isPlayingAudio = true; DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) { isPlayingAudio = false }} catch { print("⚠️ Audio error") }
        }
    }
}



