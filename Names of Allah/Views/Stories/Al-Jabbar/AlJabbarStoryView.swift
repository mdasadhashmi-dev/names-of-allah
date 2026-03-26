//
//  AlJabbarStoryView.swift
//  Names of Allah
//
//  Story of The Broken Made Whole - Al-Jabbar (The Compeller/Restorer)
//

import SwiftUI
import AVFoundation

struct AlJabbarStoryView: View {
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
            LinearGradient(colors: [Color(red: 0.15, green: 0.1, blue: 0.1), Color.black], startPoint: .top, endPoint: .bottom).ignoresSafeArea()
            
            VStack {
                HStack(spacing: 8) {
                    ForEach(0..<totalScreens, id: \.self) { index in
                        Capsule().fill(index <= currentScreen ? Color.appGold : Color.white.opacity(0.3)).frame(width: index == currentScreen ? 30 : 20, height: 4).animation(.spring(response: 0.3), value: currentScreen)
                    }
                }.padding(.top, 20).padding(.horizontal, 30)
                
                Spacer()
                
                Group {
                    if currentScreen == 0 { StoryTextBox(text: "A man's heart\nwas shattered.", icon: "heart.slash") }
                    else if currentScreen == 1 { StoryTextBox(text: "He had lost everything—\nhis family,\nhis health,\nhis hope.", icon: "figure.fall") }
                    else if currentScreen == 2 { StoryTextBox(text: "He felt broken\nbeyond repair.", icon: "bandage") }
                    else if currentScreen == 3 { StoryTextBox(text: "One night, he cried:\n\n\"Ya Allah, I am shattered.\nCan You fix me?\"", icon: "hands.and.sparkles") }
                    else if currentScreen == 4 { StoryTextBox(text: "He didn't hear a voice.\n\nBut slowly,\nthings began to change.", icon: "clock.arrow.circlepath") }
                    else if currentScreen == 5 { StoryTextBox(text: "Doors opened\nwhere there were walls.\n\nHelp came\nfrom unexpected places.", icon: "door.left.hand.open") }
                    else if currentScreen == 6 { StoryTextBox(text: "His broken heart\nbegan to heal.\n\nNot by his own strength—\n\nby Al-Jabbar.", icon: "heart.fill") }
                    else if currentScreen == 7 { StoryTextBox(text: "Al-Jabbar doesn't just mean\n'The Compeller.'\n\nIt also means\n'The One Who Mends.'", icon: "bandage.fill") }
                    else if currentScreen == 8 { StoryTextBox(text: "He restores\nwhat is broken.\n\nHe lifts\nwhat is fallen.\n\nHe heals\nwhat is wounded.", icon: "figure.arms.open") }
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
                            Text("ٱلْعَزِيزُ ٱلْجَبَّارُ")
                                .font(.system(size: 44, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .multilineTextAlignment(.center)
                                .lineSpacing(10)
                                .padding(.horizontal, 30)
                            
                            Text("Surah Al-Hashr 59:23")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(Color.appGold.opacity(0.7))
                        }.transition(.opacity.combined(with: .move(edge: .top)))
                    }
                    
                    if showTranslation {
                        Text("\"The Almighty,\nthe Compeller (Al-Jabbar)\"")
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
                            Text("Why Al-Jabbar?")
                                .font(.system(size: 22, weight: .semibold, design: .serif))
                                .foregroundColor(.appGold)
                                .frame(maxWidth: .infinity, alignment: .center)
                            
                            ExplanationPoint(icon: "bandage.fill", text: "Al-Jabbar is the Restorer—He mends broken hearts, broken lives, broken spirits.")
                            ExplanationPoint(icon: "arrow.up.circle", text: "When you feel shattered beyond repair, Al-Jabbar can put you back together.")
                            ExplanationPoint(icon: "heart.circle", text: "He doesn't just fix—He makes you stronger than before.")
                            ExplanationPoint(icon: "hands.sparkles", text: "Bring your brokenness to Al-Jabbar. He specializes in impossible repairs.")
                            
                            Text("You may be broken—\nbut Al-Jabbar\nrestores the shattered.")
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
                    NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "al-jabbar")!)) {
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
        if let audioPath = Bundle.main.path(forResource: "al-hashr-59-23-jabbar", ofType: "mp3") {
            let audioUrl = URL(fileURLWithPath: audioPath)
            do { audioPlayer = try AVAudioPlayer(contentsOf: audioUrl); audioPlayer?.play(); isPlayingAudio = true; DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) { isPlayingAudio = false }} catch { print("⚠️ Could not play audio: \(error.localizedDescription)") }
        } else { print("⚠️ Audio file 'al-hashr-59-23-jabbar.mp3' not found") }
    }
}



