//
//  YunusStoryView.swift
//  Names of Allah
//
//  Story of Prophet Yunus عَلَيْهِ ٱلسَّلَامُ - Demonstrating Al-Ghaffar (The Oft-Forgiving)
//  Multi-screen storytelling experience
//

import SwiftUI
import AVFoundation

struct YunusStoryView: View {
    @State private var currentScreen = 0
    @State private var showContent = false
    @Environment(\.dismiss) var dismiss
    
    let totalScreens = 10
    
    var body: some View {
        ZStack {
            // Background gradient - deep and mysterious
            LinearGradient(
                colors: [
                    Color(red: 0.02, green: 0.08, blue: 0.15),
                    Color(red: 0.04, green: 0.12, blue: 0.22),
                    Color(red: 0.01, green: 0.06, blue: 0.12)
                ],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
            .ignoresSafeArea()
            
            // Display current screen
            Group {
                switch currentScreen {
                case 0: YunusScreen1_Mission()
                case 1: YunusScreen2_Frustration()
                case 2: YunusScreen3_Leaving()
                case 3: YunusScreen4_Ship()
                case 4: YunusScreen5_Storm()
                case 5: YunusScreen6_Whale()
                case 6: YunusScreen7_Darkness()
                case 7: YunusScreen8_Duaa()
                case 8: YunusScreen9_Freedom()
                case 9: YunusScreen10_FinalReveal()
                default: YunusScreen1_Mission()
                }
            }
            .opacity(showContent ? 1 : 0)
            .offset(y: showContent ? 0 : 20)
            
            // Next button
            if currentScreen < totalScreens - 1 {
                VStack {
                    Spacer()
                    NextButton(action: nextScreen)
                        .opacity(showContent ? 1 : 0)
                        .padding(.bottom, 60)
                }
            }
            
            // Progress indicator
            if currentScreen < totalScreens - 1 {
                VStack {
                    HStack(spacing: 6) {
                        ForEach(0..<totalScreens - 1, id: \.self) { index in
                            Capsule()
                                .fill(index <= currentScreen ? Color.appGold : Color.white.opacity(0.3))
                                .frame(width: index == currentScreen ? 24 : 8, height: 4)
                                .animation(.spring(response: 0.3), value: currentScreen)
                        }
                    }
                    .padding(.top, 60)
                    Spacer()
                }
                .opacity(showContent ? 1 : 0)
            }
        }
        .navigationBarTitleDisplayMode(.inline)
        .onAppear {
            withAnimation(.easeOut(duration: 0.8)) {
                showContent = true
            }
        }
    }
    
    private func nextScreen() {
        withAnimation(.easeOut(duration: 0.4)) {
            showContent = false
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) {
            currentScreen += 1
            withAnimation(.easeIn(duration: 0.8)) {
                showContent = true
            }
        }
    }
}

// MARK: - Screen 1: The Mission
struct YunusScreen1_Mission: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Prophet figure
            VStack(spacing: 20) {
                Image(systemName: "figure.stand")
                    .font(.system(size: 70))
                    .foregroundColor(.white.opacity(0.7))
                
                Image(systemName: "building.2.fill")
                    .font(.system(size: 50))
                    .foregroundColor(.white.opacity(0.5))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Prophet Yunus عَلَيْهِ ٱلسَّلَامُ was sent\nto guide his people.\n\nHe called them to Allah,\nday after day.\n\nBut they refused to listen.",
                icon: "person.wave.2"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 2: Frustration
struct YunusScreen2_Frustration: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Frustrated figure
            ZStack {
                Circle()
                    .fill(Color.red.opacity(0.2))
                    .frame(width: 150, height: 150)
                
                Image(systemName: "exclamationmark.triangle.fill")
                    .font(.system(size: 60))
                    .foregroundColor(.orange.opacity(0.8))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Years passed.\nHis patience wore thin.\n\nFrustration overtook him.\n\nHe made a decision—\nhe would leave them.",
                icon: "hand.raised.slash"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 3: Leaving Without Permission
struct YunusScreen3_Leaving: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Walking away
            HStack(spacing: 15) {
                Image(systemName: "building.2")
                    .font(.system(size: 50))
                    .foregroundColor(.white.opacity(0.3))
                
                ForEach(0..<3, id: \.self) { _ in
                    Image(systemName: "arrow.right")
                        .font(.system(size: 20))
                        .foregroundColor(Color.appGold.opacity(0.5))
                }
                
                Image(systemName: "figure.walk")
                    .font(.system(size: 50))
                    .foregroundColor(.white.opacity(0.7))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "He left his mission—\nwithout waiting for\nAllah's permission.",
                icon: "xmark.circle"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 4: The Ship
struct YunusScreen4_Ship: View {
    @State private var rock = false
    
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Ship on waves
            VStack(spacing: 10) {
                Image(systemName: "ferry.fill")
                    .font(.system(size: 70))
                    .foregroundColor(.brown.opacity(0.7))
                    .rotationEffect(.degrees(rock ? -5 : 5))
                
                // Waves
                HStack(spacing: 5) {
                    ForEach(0..<8, id: \.self) { _ in
                        Text("〰️")
                            .font(.system(size: 20))
                            .foregroundColor(.blue.opacity(0.6))
                    }
                }
            }
            .onAppear {
                withAnimation(.easeInOut(duration: 1.5).repeatForever(autoreverses: true)) {
                    rock = true
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "He boarded a ship,\nsailing across the sea.\n\nHoping to escape\nhis burden and frustration.",
                icon: "water.waves"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 5: The Storm
struct YunusScreen5_Storm: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Storm
            ZStack {
                ForEach(0..<3, id: \.self) { i in
                    Image(systemName: "cloud.bolt.fill")
                        .font(.system(size: CGFloat(40 + i * 15)))
                        .foregroundColor(.gray.opacity(0.6 - Double(i) * 0.15))
                        .offset(x: CGFloat(i * 20 - 20), y: CGFloat(i * -15))
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "A fierce storm arose.\nThe ship was in danger.\n\nBy tradition, one passenger\nmust be cast into the sea\nto lighten the load.\n\nLots were drawn...",
                icon: "cloud.bolt.rain.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 6: Swallowed by Whale
struct YunusScreen6_Whale: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Whale
            Image(systemName: "figure.fishing")
                .font(.system(size: 80))
                .foregroundColor(.blue.opacity(0.6))
                .rotationEffect(.degrees(180))
            
            Spacer()
            
            StoryTextBox(
                text: "His name was chosen.\n\nHe was thrown overboard.\n\nIn the depths,\na massive whale\nswallowed him whole.",
                icon: "drop.triangle.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 7: Darkness Within Darkness
struct YunusScreen7_Darkness: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Three layers of darkness
            ZStack {
                ForEach(0..<3, id: \.self) { i in
                    Circle()
                        .stroke(Color.white.opacity(0.2 - Double(i) * 0.05), lineWidth: 2)
                        .frame(width: CGFloat(60 + i * 40), height: CGFloat(60 + i * 40))
                }
                
                Image(systemName: "moon.zzz")
                    .font(.system(size: 40))
                    .foregroundColor(.white.opacity(0.3))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Darkness upon darkness:\nThe night, the ocean depths,\nthe belly of the whale.\n\nAlone with his mistake.\nAlone with his Lord.",
                icon: "moon.stars"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 8: The Duaa
struct YunusScreen8_Duaa: View {
    @State private var glow = false
    
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Praying hands with light
            ZStack {
                Circle()
                    .fill(Color.appGold.opacity(glow ? 0.3 : 0.1))
                    .frame(width: 150, height: 150)
                
                Image(systemName: "hands.sparkles.fill")
                    .font(.system(size: 70))
                    .foregroundColor(Color.appGold)
            }
            .onAppear {
                withAnimation(.easeInOut(duration: 2).repeatForever(autoreverses: true)) {
                    glow = true
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "He cried out:\n\n\"There is no god but You!\nGlory be to You!\nIndeed, I have been\nof the wrongdoers.\"",
                icon: "quote.opening"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 9: Freedom
struct YunusScreen9_Freedom: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Freed figure
            VStack(spacing: 20) {
                Image(systemName: "figure.arms.open")
                    .font(.system(size: 70))
                    .foregroundColor(Color.appGold)
                
                Image(systemName: "sun.max.fill")
                    .font(.system(size: 50))
                    .foregroundColor(.yellow.opacity(0.8))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Allah answered.\n\nThe whale released him\nonto the shore.\n\nForgiven.\nRestored.\nGiven another chance.",
                icon: "checkmark.seal.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 10: Final Reveal
struct YunusScreen10_FinalReveal: View {
    @State private var showArabic = false
    @State private var showTranslation = false
    @State private var showName = false
    @State private var glowPulse = false
    @State private var audioPlayer: AVAudioPlayer?
    @State private var isPlayingAudio = false
    @State private var showScrollIndicator = true
    @State private var bounceAnimation = false
    
    var body: some View {
        ZStack {
            ScrollView {
                VStack(spacing: 35) {
                    Spacer().frame(height: 60)
                    
                    // Forgiveness pattern
                    if showArabic {
                        ForgivenessPattern()
                            .frame(height: 80)
                            .transition(.opacity)
                    }
                    
                    // Quranic Ayah
                    if showArabic {
                        VStack(spacing: 16) {
                            Text("وَإِنِّى لَغَفَّارٌۭ لِّمَن تَابَ وَءَامَنَ وَعَمِلَ صَـٰلِحًۭا ثُمَّ ٱهْتَدَىٰ")
                                .font(.system(size: 26, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .multilineTextAlignment(.center)
                                .lineSpacing(10)
                                .padding(.horizontal, 30)
                            
                            Text("Surah Taha 20:82")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(Color.appGold.opacity(0.7))
                        }
                        .transition(.opacity.combined(with: .move(edge: .top)))
                    }
                    
                    // Translation
                    if showTranslation {
                        Text("\"And indeed, I am\nthe Perpetual Forgiver (Ghaffar)\nof whoever repents and believes\nand does righteousness\nand then remains guided\"")
                            .font(.system(size: 18, weight: .light, design: .serif))
                            .foregroundColor(.white.opacity(0.9))
                            .multilineTextAlignment(.center)
                            .lineSpacing(8)
                            .italic()
                            .padding(.horizontal, 40)
                            .transition(.opacity.combined(with: .scale(scale: 0.9)))
                    }
                    
                    if showTranslation {
                        HStack(spacing: 12) {
                            Rectangle().fill(Color.appGold.opacity(0.5)).frame(width: 50, height: 1)
                            Image(systemName: "heart.fill")
                                .font(.system(size: 12))
                                .foregroundColor(Color.appGold)
                            Rectangle().fill(Color.appGold.opacity(0.5)).frame(width: 50, height: 1)
                        }
                        .transition(.opacity)
                    }
                    
                    // The Name
                    if showName {
                        VStack(spacing: 25) {
                            Image(systemName: "sparkles")
                                .font(.system(size: 26))
                                .foregroundColor(Color.appGold)
                            
                            Text("ٱلْغَفَّارُ")
                                .font(.system(size: 64, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .shadow(color: Color.appGold.opacity(glowPulse ? 0.8 : 0.4), radius: glowPulse ? 30 : 20)
                            
                            HStack(spacing: 15) {
                                Rectangle().fill(Color.appGold.opacity(0.5)).frame(width: 40, height: 1)
                                Text("Al-Ghaffar")
                                    .font(.system(size: 28, weight: .medium, design: .serif))
                                    .foregroundColor(Color.appGold)
                                Rectangle().fill(Color.appGold.opacity(0.5)).frame(width: 40, height: 1)
                            }
                            
                            Text("The Oft-Forgiving • The Pardoner")
                                .font(.system(size: 18, weight: .light, design: .serif))
                                .foregroundColor(.white.opacity(0.8))
                            
                            Divider()
                                .background(Color.white.opacity(0.2))
                                .padding(.vertical, 8)
                            
                            VStack(alignment: .leading, spacing: 16) {
                                ExplanationPoint(
                                    icon: "arrow.uturn.backward.circle",
                                    text: "No matter how far you've strayed, return is possible"
                                )
                                
                                ExplanationPoint(
                                    icon: "heart.circle",
                                    text: "Sincere repentance opens the door to forgiveness"
                                )
                                
                                ExplanationPoint(
                                    icon: "hands.sparkles",
                                    text: "Allah forgives again and again—He is Al-Ghaffar"
                                )
                                
                                ExplanationPoint(
                                    icon: "checkmark.seal",
                                    text: "Even prophets make mistakes, and find His mercy"
                                )
                            }
                            .padding(.horizontal, 20)
                            .padding(.vertical, 10)
                            
                            Divider()
                                .background(Color.white.opacity(0.2))
                                .padding(.vertical, 8)
                            
                            Text("Al-Ghaffar forgives repeatedly.\nNo sin is too great,\nno mistake too many.\n\nTurn to Him sincerely,\nand He will forgive—\nagain, and again, and again.")
                                .font(.system(size: 15, weight: .light, design: .serif))
                                .foregroundColor(.white.opacity(0.85))
                                .multilineTextAlignment(.center)
                                .lineSpacing(7)
                                .padding(.horizontal, 20)
                        }
                        .padding(35)
                        .background(
                            RoundedRectangle(cornerRadius: 24)
                                .fill(Color.black.opacity(0.4))
                                .overlay(
                                    RoundedRectangle(cornerRadius: 24)
                                        .stroke(Color.appGold.opacity(0.3), lineWidth: 1)
                                )
                        )
                        .padding(.horizontal, 20)
                        .transition(.opacity.combined(with: .scale(scale: 0.85)))
                    }
                    
                    // Audio button
                    if showName {
                        AyahAudioButton(
                            isPlaying: isPlayingAudio,
                            audioFileName: "as-saffat-37-143",
                            action: playAyahAudio
                        )
                        .transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                    
                    // Continue button
                    if showName {
                        NavigationLink(destination: AlGhaffarReflectionView()) {
                            ContinueToReflectButton()
                        }
                        .padding(.top, 10)
                        .transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                    
                    Spacer().frame(height: 60)
                }
                .background(
                    GeometryReader { geo in
                        Color.clear.preference(key: ScrollOffsetKey.self, value: geo.frame(in: .named("scroll")).minY)
                    }
                )
            }
            .coordinateSpace(name: "scroll")
            .onPreferenceChange(ScrollOffsetKey.self) { value in
                if value < -10 {
                    withAnimation {
                        showScrollIndicator = false
                    }
                }
            }
            .overlay(
                VStack {
                    Spacer()
                    if showScrollIndicator && showName {
                        ScrollIndicator(isVisible: showScrollIndicator, bounceOffset: bounceAnimation ? 4 : 0)
                            .padding(.bottom, 25)
                    }
                }
            )
        }
        .onAppear {
            animateReveal()
            
            withAnimation(.easeInOut(duration: 1.5).repeatForever(autoreverses: true)) {
                bounceAnimation = true
            }
            
            DispatchQueue.main.asyncAfter(deadline: .now() + 6) {
                withAnimation {
                    showScrollIndicator = false
                }
            }
        }
    }
    
    private func animateReveal() {
        withAnimation(.easeInOut(duration: 2).repeatForever(autoreverses: true)) {
            glowPulse = true
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            withAnimation(.easeIn(duration: 1)) {
                showArabic = true
            }
            autoPlayAyahAudio()
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            withAnimation(.easeIn(duration: 1)) {
                showTranslation = true
            }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 3.5) {
            withAnimation(.spring(response: 0.8, dampingFraction: 0.7)) {
                showName = true
            }
        }
    }
    
    private func autoPlayAyahAudio() {
        if let audioPath = Bundle.main.path(forResource: "taha-20-82", ofType: "mp3") {
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
            print("⚠️ Audio file 'taha-20-82.mp3' not found")
        }
    }
    
    private func playAyahAudio() {
        if let player = audioPlayer, player.isPlaying {
            player.stop()
            player.currentTime = 0
            player.play()
        } else {
            autoPlayAyahAudio()
        }
    }
}

// MARK: - Supporting Components

struct ForgivenessPattern: View {
    var body: some View {
        HStack(spacing: 15) {
            ForEach(0..<5, id: \.self) { i in
                VStack(spacing: 4) {
                    Image(systemName: "xmark")
                        .font(.system(size: 12))
                        .foregroundColor(.red.opacity(0.5))
                    Image(systemName: "arrow.down")
                        .font(.system(size: 10))
                        .foregroundColor(Color.appGold.opacity(0.6))
                    Image(systemName: "checkmark")
                        .font(.system(size: 14))
                        .foregroundColor(.green.opacity(0.7))
                }
            }
        }
    }
}

#Preview {
    YunusStoryView()
}

