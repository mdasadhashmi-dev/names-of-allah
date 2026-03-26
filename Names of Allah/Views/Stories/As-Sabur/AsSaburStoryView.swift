//
//  AsSaburStoryView.swift
//  Names of Allah
//
//  Story of Nuh عَلَيْهِ ٱلسَّلَامُ - As-Sabur (The Patient)
//

import SwiftUI
import AVFoundation

struct AsSaburStoryView: View {
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
            LinearGradient(
                colors: [
                    Color(red: 0.1, green: 0.15, blue: 0.2),
                    Color.black
                ],
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()
            
            VStack {
                HStack(spacing: 8) {
                    ForEach(0..<totalScreens, id: \.self) { index in
                        Capsule()
                            .fill(index <= currentScreen ? Color.appGold : Color.white.opacity(0.3))
                            .frame(width: index == currentScreen ? 30 : 20, height: 4)
                            .animation(.spring(response: 0.3), value: currentScreen)
                    }
                }
                .padding(.top, 20)
                .padding(.horizontal, 30)
                
                Spacer()
                
                Group {
                    if currentScreen == 0 {
                        screen1
                    } else if currentScreen == 1 {
                        screen2
                    } else if currentScreen == 2 {
                        screen3
                    } else if currentScreen == 3 {
                        screen4
                    } else if currentScreen == 4 {
                        screen5
                    } else if currentScreen == 5 {
                        screen6
                    } else if currentScreen == 6 {
                        screen7
                    } else if currentScreen == 7 {
                        screen8
                    } else if currentScreen == 8 {
                        screen9
                    } else if currentScreen == 9 {
                        finalScreen
                    }
                }
                .transition(.asymmetric(insertion: .move(edge: .trailing).combined(with: .opacity),
                                      removal: .move(edge: .leading).combined(with: .opacity)))
                
                Spacer()
                
                if currentScreen < totalScreens - 1 {
                    NextButton {
                        withAnimation(.easeInOut(duration: 0.4)) {
                            currentScreen += 1
                        }
                    }
                    .padding(.bottom, 60)
                }
            }
        }
        .navigationBarTitleDisplayMode(.inline)
    }
    
    var screen1: some View {
        StoryTextBox(
            text: "Nuh عَلَيْهِ ٱلسَّلَامُ was sent\nto guide his people\nback to Allah.",
            icon: "figure.walk"
        )
    }
    
    var screen2: some View {
        StoryTextBox(
            text: "But they rejected him.\n\nThey mocked him.\nThey called him a liar.",
            icon: "hand.thumbsdown"
        )
    }
    
    var screen3: some View {
        StoryTextBox(
            text: "He didn't give up.\n\nDay after day,\nyear after year—\n\nhe kept calling them to Allah.",
            icon: "person.wave.2"
        )
    }
    
    var screen4: some View {
        StoryTextBox(
            text: "He called them at night.\nHe called them in the morning.\n\nPublicly and privately.",
            icon: "sun.and.horizon"
        )
    }
    
    var screen5: some View {
        StoryTextBox(
            text: "950 years.\n\nNine hundred and fifty years\nof rejection.",
            icon: "hourglass"
        )
    }
    
    var screen6: some View {
        StoryTextBox(
            text: "Most people would quit\nafter a few tries.\n\nNuh عَلَيْهِ ٱلسَّلَامُ continued\nfor nearly a millennium.",
            icon: "figure.stand"
        )
    }
    
    var screen7: some View {
        StoryTextBox(
            text: "Only a handful believed.\n\nBut he never stopped.\nHe never lost hope.",
            icon: "heart.fill"
        )
    }
    
    var screen8: some View {
        StoryTextBox(
            text: "Because he trusted in As-Sabur—\n\nthe One who is endlessly patient\nwith His creation.",
            icon: "infinity"
        )
    }
    
    var screen9: some View {
        StoryTextBox(
            text: "Allah is patient with us\nthrough every sin,\nevery mistake,\nevery delay.\n\nCan we not be patient\nin His path?",
            icon: "hands.sparkles"
        )
    }
    
    var finalScreen: some View {
        ZStack {
            ScrollView {
                VStack(spacing: 32) {
                    Spacer().frame(height: 20)
                    
                    if showArabic {
                        VStack(spacing: 16) {
                            Text("إِن تُقْرِضُوا۟ ٱللَّهَ قَرْضًا حَسَنًۭا يُضَـٰعِفْهُ لَكُمْ وَيَغْفِرْ لَكُمْ ۚ وَٱللَّهُ شَكُورٌ حَلِيمٌ")
                                .font(.system(size: 24, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .multilineTextAlignment(.center)
                                .lineSpacing(10)
                                .padding(.horizontal, 30)
                            
                            Text("Surah At-Taghabun 64:17")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(Color.appGold.opacity(0.7))
                        }
                        .transition(.opacity.combined(with: .move(edge: .top)))
                    }
                    
                    if showTranslation {
                        Text("\"And Allah is Appreciative\nand Forbearing (Haleem)\"")
                            .font(.system(size: 20, weight: .light, design: .serif))
                            .foregroundColor(.white.opacity(0.9))
                            .multilineTextAlignment(.center)
                            .lineSpacing(8)
                            .italic()
                            .padding(.horizontal, 40)
                            .transition(.opacity.combined(with: .scale(scale: 0.9)))
                    }
                    
                    Divider()
                        .background(Color.white.opacity(0.2))
                        .padding(.horizontal, 40)
                        .padding(.vertical, 8)
                    
                    if showExplanation {
                        VStack(alignment: .leading, spacing: 20) {
                            Text("Why As-Sabur?")
                                .font(.system(size: 22, weight: .semibold, design: .serif))
                                .foregroundColor(.appGold)
                                .frame(maxWidth: .infinity, alignment: .center)
                            
                            ExplanationPoint(icon: "clock.arrow.circlepath", text: "As-Sabur doesn't rush. He gives chance after chance, year after year.")
                            
                            ExplanationPoint(icon: "heart.circle", text: "Nuh عَلَيْهِ ٱلسَّلَامُ called for 950 years because he knew Allah was patient with them.")
                            
                            ExplanationPoint(icon: "hourglass", text: "Your prayers may take time. Your struggles may be long. But As-Sabur's timing is perfect.")
                            
                            ExplanationPoint(icon: "figure.stand", text: "If Allah is patient with us through all our sins—we can be patient with His plan.")
                            
                            Text("Be patient.\nAs-Sabur has not forgotten you.")
                                .font(.system(size: 18, weight: .medium, design: .serif))
                                .foregroundColor(.white.opacity(0.95))
                                .multilineTextAlignment(.center)
                                .lineSpacing(6)
                                .frame(maxWidth: .infinity)
                                .padding(.top, 10)
                        }
                        .padding(.horizontal, 30)
                        .transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                    
                    Spacer().frame(height: 140)
                }
                .background(
                    GeometryReader { geo in
                        Color.clear.preference(
                            key: ScrollOffsetKey.self,
                            value: geo.frame(in: .named("scroll")).minY
                        )
                    }
                )
            }
            .coordinateSpace(name: "scroll")
            .onPreferenceChange(ScrollOffsetKey.self) { value in
                scrollOffset = value
                if value < -50 {
                    withAnimation {
                        showScrollIndicator = false
                    }
                }
            }
            
            VStack {
                Spacer()
                if showScrollIndicator && showExplanation {
                    ScrollIndicator(isVisible: true, bounceOffset: 0)
                        .padding(.bottom, 180)
                }
            }
            
            VStack {
                Spacer()
                
                if showExplanation {
                    NavigationLink(destination: BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: "as-sabur")!)) {
                        HStack(spacing: 10) {
                            Text("Continue to Reflect")
                                .font(.system(size: 18, weight: .medium, design: .serif))
                            Image(systemName: "arrow.right")
                                .font(.system(size: 14, weight: .semibold))
                        }
                        .foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1))
                        .frame(maxWidth: 250)
                        .padding(.vertical, 18)
                        .background(
                            LinearGradient(
                                colors: [
                                    Color(red: 0.9, green: 0.82, blue: 0.65),
                                    Color(red: 0.85, green: 0.75, blue: 0.55)
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .clipShape(RoundedRectangle(cornerRadius: 30))
                        .shadow(color: Color.appGold.opacity(0.3), radius: 20, x: 0, y: 10)
                    }
                    .padding(.bottom, 50)
                    .transition(.opacity.combined(with: .move(edge: .bottom)))
                }
            }
        }
        .onAppear {
            animateFinalScreen()
        }
    }
    
    private func animateFinalScreen() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
            withAnimation(.easeOut(duration: 0.8)) {
                showArabic = true
            }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
            withAnimation(.easeOut(duration: 0.8)) {
                showTranslation = true
            }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) {
            withAnimation(.easeOut(duration: 0.8)) {
                showExplanation = true
            }
            autoPlayAyahAudio()
            
            DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) {
                withAnimation {
                    showScrollIndicator = false
                }
            }
        }
    }
    
    private func autoPlayAyahAudio() {
        if let audioPath = Bundle.main.path(forResource: "at-taghabun-64-17", ofType: "mp3") {
            let audioUrl = URL(fileURLWithPath: audioPath)
            do {
                audioPlayer = try AVAudioPlayer(contentsOf: audioUrl)
                audioPlayer?.play()
                isPlayingAudio = true
                
                DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) {
                    isPlayingAudio = false
                }
            } catch {
                print("⚠️ Could not play audio: \(error.localizedDescription)")
            }
        } else {
            print("⚠️ Audio file 'at-taghabun-64-17.mp3' not found")
        }
    }
}



