//
//  AlWakeelStoryView.swift
//  Names of Allah
//
//  Story of When There Was Nothing Left - Al-Wakeel (The Trustee)
//

import SwiftUI
import AVFoundation

struct AlWakeelStoryView: View {
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
            LinearGradient(colors: [Color(red: 0.08, green: 0.12, blue: 0.18), Color.black], startPoint: .top, endPoint: .bottom).ignoresSafeArea()
            
            VStack {
                HStack(spacing: 8) {
                    ForEach(0..<totalScreens, id: \.self) { index in
                        Capsule().fill(index <= currentScreen ? Color.appGold : Color.white.opacity(0.3)).frame(width: index == currentScreen ? 30 : 20, height: 4).animation(.spring(response: 0.3), value: currentScreen)
                    }
                }.padding(.top, 20).padding(.horizontal, 30)
                
                Spacer()
                
                Group {
                    if currentScreen == 0 { StoryTextBox(text: "The believers were surrounded.\n\nOutnumbered.\nOutmatched.", icon: "figure.3") }
                    else if currentScreen == 1 { StoryTextBox(text: "The enemy said:\n\n\"A huge army is coming\nfor you.\"", icon: "exclamationmark.triangle.fill") }
                    else if currentScreen == 2 { StoryTextBox(text: "Fear spread.\n\nWhat could they do?", icon: "person.fill.questionmark") }
                    else if currentScreen == 3 { StoryTextBox(text: "But they didn't panic.\n\nThey said:\n\n\"Hasbunallahu wa ni'mal wakeel.\"", icon: "hands.sparkles.fill") }
                    else if currentScreen == 4 { StoryTextBox(text: "\"Allah is sufficient for us,\nand He is\nthe Best Trustee.\"", icon: "checkmark.seal.fill") }
                    else if currentScreen == 5 { StoryTextBox(text: "They handed everything\nto Al-Wakeel.\n\nTheir fear.\nTheir plans.\nTheir outcome.", icon: "hand.raised.fill") }
                    else if currentScreen == 6 { StoryTextBox(text: "And Allah took care of it.\n\nThe enemy retreated.\nNo battle happened.", icon: "arrow.uturn.left") }
                    else if currentScreen == 7 { StoryTextBox(text: "The believers returned\nunharmed—\n\nbecause they trusted\nAl-Wakeel.", icon: "figure.walk") }
                    else if currentScreen == 8 { StoryTextBox(text: "When you've done all you can—\n\nhand it to Al-Wakeel.\n\nHe will handle the rest.", icon: "hands.and.sparkles.fill") }
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
                            Text("حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ")
                                .font(.system(size: 34, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .multilineTextAlignment(.center)
                                .lineSpacing(10)
                                .padding(.horizontal, 30)
                            
                            Text("Surah Ali 'Imran 3:173")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(Color.appGold.opacity(0.7))
                        }.transition(.opacity.combined(with: .move(edge: .top)))
                    }
                    
                    if showTranslation {
                        Text("\"Sufficient for us is Allah,\nand He is the best Trustee\n(Wakeel)\"")
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
                            Text("Why Al-Wakeel?")
                                .font(.system(size: 22, weight: .semibold, design: .serif))
                                .foregroundColor(.appGold)
                                .frame(maxWidth: .infinity, alignment: .center)
                            
                            ExplanationPoint(icon: "hand.raised.fill", text: "Al-Wakeel is the One you entrust everything to—when you've done your part, let Him do His.")
                            ExplanationPoint(icon: "shield.checkered", text: "You plan. You try. Then you say: 'Ya Wakeel, I trust You with the outcome.'")
                            ExplanationPoint(icon: "figure.stand", text: "Stop carrying burdens that aren't yours. Al-Wakeel will handle what you can't.")
                            ExplanationPoint(icon: "heart.circle", text: "This phrase—Hasbunallahu wa ni'mal wakeel—saved the believers from armies. It can save you too.")
                            
                            Text("Trust Al-Wakeel.\nHe never fails\nthose who rely on Him.")
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
                    NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "al-wakeel")!)) {
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
        if let audioPath = Bundle.main.path(forResource: "ali-imran-3-173", ofType: "mp3") {
            let audioUrl = URL(fileURLWithPath: audioPath)
            do { audioPlayer = try AVAudioPlayer(contentsOf: audioUrl); audioPlayer?.play(); isPlayingAudio = true; DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) { isPlayingAudio = false }} catch { print("⚠️ Could not play audio: \(error.localizedDescription)") }
        } else { print("⚠️ Audio file 'ali-imran-3-173.mp3' not found") }
    }
}



