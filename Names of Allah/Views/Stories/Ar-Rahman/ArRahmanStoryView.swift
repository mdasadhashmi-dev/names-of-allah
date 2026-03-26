//
//  ArRahmanStoryView.swift
//  Names of Allah
//
//  Story demonstrating Ar-Rahman (The Most Merciful)
//  Allah's universal mercy to all creation
//

import SwiftUI
import AVFoundation

struct ArRahmanStoryView: View {
    @State private var currentScreen = 0
    @State private var showContent = false
    @Environment(\.dismiss) var dismiss
    
    let totalScreens = 9
    
    var body: some View {
        ZStack {
            // Background gradient - warm and compassionate
            LinearGradient(
                colors: [
                    Color(red: 0.15, green: 0.08, blue: 0.2),
                    Color(red: 0.2, green: 0.12, blue: 0.25),
                    Color(red: 0.12, green: 0.06, blue: 0.15)
                ],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
            .ignoresSafeArea()
            
            // Display current screen
            Group {
                switch currentScreen {
                case 0: RahmanScreen1_Creation()
                case 1: RahmanScreen2_Sun()
                case 2: RahmanScreen3_Rain()
                case 3: RahmanScreen4_Food()
                case 4: RahmanScreen5_Animals()
                case 5: RahmanScreen6_Everyone()
                case 6: RahmanScreen7_Breath()
                case 7: RahmanScreen8_Lesson()
                case 8: RahmanScreen9_FinalReveal()
                default: RahmanScreen1_Creation()
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

// MARK: - Screen 1: The Beginning
struct RahmanScreen1_Creation: View {
    @State private var pulse = false
    
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Universe/Earth
            ZStack {
                ForEach(0..<3, id: \.self) { i in
                    Circle()
                        .stroke(Color.appGold.opacity(0.3 - Double(i) * 0.1), lineWidth: 2)
                        .frame(width: CGFloat(100 + i * 40), height: CGFloat(100 + i * 40))
                        .scaleEffect(pulse ? 1.1 : 1.0)
                }
                
                Image(systemName: "globe.americas.fill")
                    .font(.system(size: 60))
                    .foregroundColor(.blue.opacity(0.7))
            }
            .onAppear {
                withAnimation(.easeInOut(duration: 2).repeatForever(autoreverses: true)) {
                    pulse = true
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Before anything existed,\nAllah created the heavens and the earth.\n\nHis mercy was woven\ninto every thread of creation.",
                icon: "sparkles"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 2: The Sun
struct RahmanScreen2_Sun: View {
    @State private var rotate = false
    
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Glowing sun
            ZStack {
                // Sun rays
                ForEach(0..<12, id: \.self) { i in
                    let angle = Double(i) * 30
                    Rectangle()
                        .fill(LinearGradient(
                            colors: [Color.yellow.opacity(0.6), Color.clear],
                            startPoint: .center,
                            endPoint: .trailing
                        ))
                        .frame(width: 60, height: 3)
                        .offset(x: 30)
                        .rotationEffect(.degrees(angle + (rotate ? 30 : 0)))
                }
                
                Circle()
                    .fill(RadialGradient(
                        colors: [Color.yellow, Color.orange],
                        center: .center,
                        startRadius: 0,
                        endRadius: 50
                    ))
                    .frame(width: 100, height: 100)
            }
            .onAppear {
                withAnimation(.linear(duration: 20).repeatForever(autoreverses: false)) {
                    rotate = true
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "The sun rises each day—\nfor the believer and the non-believer.\n\nIts warmth and light\nare gifts to all.",
                icon: "sun.max.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 3: Rain
struct RahmanScreen3_Rain: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Rain falling
            ZStack {
                // Cloud
                HStack(spacing: -15) {
                    ForEach(0..<3, id: \.self) { _ in
                        Circle()
                            .fill(Color.white.opacity(0.3))
                            .frame(width: 50, height: 50)
                    }
                }
                .offset(y: -60)
                
                // Rain drops
                ForEach(0..<15, id: \.self) { i in
                    RainDrop()
                        .offset(x: CGFloat(i * 20 - 140), y: -30)
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Rain falls on barren lands\nand fertile fields alike.\n\nIt doesn't ask:\n\"Are you grateful?\"\n\nIt simply gives.",
                icon: "cloud.rain.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 4: Food
struct RahmanScreen4_Food: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Food/harvest
            HStack(spacing: 25) {
                Text("🌾")
                    .font(.system(size: 50))
                Text("🍎")
                    .font(.system(size: 50))
                Text("🥖")
                    .font(.system(size: 50))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Food grows from the earth—\nfor those who thank Him,\nand those who don't.\n\nHis provision continues.",
                icon: "leaf.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 5: Animals
struct RahmanScreen5_Animals: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Various creatures
            VStack(spacing: 20) {
                HStack(spacing: 30) {
                    Image(systemName: "bird.fill")
                        .font(.system(size: 40))
                        .foregroundColor(.white.opacity(0.7))
                    Image(systemName: "hare.fill")
                        .font(.system(size: 40))
                        .foregroundColor(.white.opacity(0.7))
                }
                HStack(spacing: 30) {
                    Image(systemName: "fish.fill")
                        .font(.system(size: 40))
                        .foregroundColor(.white.opacity(0.7))
                    Image(systemName: "ladybug.fill")
                        .font(.system(size: 40))
                        .foregroundColor(.white.opacity(0.7))
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Every creature—\nfrom the tiniest ant\nto the largest whale—\n\nreceives His care and sustenance.",
                icon: "pawprint.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 6: Universal Mercy
struct RahmanScreen6_Everyone: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Diverse group of people
            HStack(spacing: 15) {
                ForEach(0..<5, id: \.self) { _ in
                    Image(systemName: "figure.stand")
                        .font(.system(size: 35))
                        .foregroundColor(.white.opacity(0.6))
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "His mercy extends to everyone—\nMuslim and non-Muslim,\nrich and poor,\nyoung and old.\n\nNo one is excluded.",
                icon: "heart.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 7: Every Breath
struct RahmanScreen7_Breath: View {
    @State private var breathe = false
    
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Breathing animation
            ZStack {
                Circle()
                    .fill(RadialGradient(
                        colors: [Color.cyan.opacity(0.4), Color.clear],
                        center: .center,
                        startRadius: 0,
                        endRadius: 80
                    ))
                    .frame(width: breathe ? 160 : 100, height: breathe ? 160 : 100)
                
                Image(systemName: "wind")
                    .font(.system(size: 50))
                    .foregroundColor(.cyan.opacity(0.8))
            }
            .onAppear {
                withAnimation(.easeInOut(duration: 3).repeatForever(autoreverses: true)) {
                    breathe = true
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Every breath you take—\na gift of Ar-Rahman.\n\nEvery heartbeat—\nHis mercy keeping you alive.",
                icon: "heart.circle.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 8: The Lesson
struct RahmanScreen8_Lesson: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Hands receiving
            Image(systemName: "hands.and.sparkles.fill")
                .font(.system(size: 80))
                .foregroundColor(Color.appGold)
            
            Spacer()
            
            StoryTextBox(
                text: "This is Ar-Rahman—\n\nMercy that flows freely\nto all of creation,\nexpecting nothing in return.\n\nHow much more for those\nwho turn to Him?",
                icon: "sparkle.magnifyingglass"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 9: Final Reveal
struct RahmanScreen9_FinalReveal: View {
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
                    
                    // Mercy pattern
                    if showArabic {
                        MercyRaysPattern()
                            .frame(height: 100)
                            .transition(.opacity)
                    }
                    
                    // Quranic Ayah
                    if showArabic {
                        VStack(spacing: 16) {
                            Text("ٱلرَّحْمَـٰنُ عَلَّمَ ٱلْقُرْءَانَ")
                                .font(.system(size: 30, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .multilineTextAlignment(.center)
                                .lineSpacing(10)
                                .padding(.horizontal, 30)
                            
                            Text("Surah Ar-Rahman 55:1-2")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(Color.appGold.opacity(0.7))
                        }
                        .transition(.opacity.combined(with: .move(edge: .top)))
                    }
                    
                    // Translation
                    if showTranslation {
                        Text("\"The Most Merciful\nTaught the Quran\"")
                            .font(.system(size: 20, weight: .light, design: .serif))
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
                            
                            Text("ٱلرَّحْمَـٰنُ")
                                .font(.system(size: 64, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                                .shadow(color: Color.appGold.opacity(glowPulse ? 0.8 : 0.4), radius: glowPulse ? 30 : 20)
                            
                            HStack(spacing: 15) {
                                Rectangle().fill(Color.appGold.opacity(0.5)).frame(width: 40, height: 1)
                                Text("Ar-Rahman")
                                    .font(.system(size: 28, weight: .medium, design: .serif))
                                    .foregroundColor(Color.appGold)
                                Rectangle().fill(Color.appGold.opacity(0.5)).frame(width: 40, height: 1)
                            }
                            
                            Text("The Most Merciful • The Beneficent")
                                .font(.system(size: 18, weight: .light, design: .serif))
                                .foregroundColor(.white.opacity(0.8))
                            
                            Divider()
                                .background(Color.white.opacity(0.2))
                                .padding(.vertical, 8)
                            
                            VStack(alignment: .leading, spacing: 16) {
                                ExplanationPoint(
                                    icon: "sun.max.fill",
                                    text: "Mercy to all—believer and non-believer alike"
                                )
                                
                                ExplanationPoint(
                                    icon: "drop.fill",
                                    text: "Every blessing, every breath is His mercy"
                                )
                                
                                ExplanationPoint(
                                    icon: "globe.americas.fill",
                                    text: "Universal mercy that sustains all of creation"
                                )
                                
                                ExplanationPoint(
                                    icon: "heart.circle.fill",
                                    text: "The mercy you receive without even asking"
                                )
                            }
                            .padding(.horizontal, 20)
                            .padding(.vertical, 10)
                            
                            Divider()
                                .background(Color.white.opacity(0.2))
                                .padding(.vertical, 8)
                            
                            Text("Ar-Rahman is the mercy\nthat encompasses everything.\n\nIt flows without condition,\nreaches without discrimination,\nand never runs out.")
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
                            audioFileName: "ar-rahman-55-1",
                            action: playAyahAudio
                        )
                        .transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                    
                    // Continue button
                    if showName {
                        NavigationLink(destination: ArRahmanReflectionView()) {
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
        if let audioPath = Bundle.main.path(forResource: "ar-rahman-55-1", ofType: "mp3") {
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
            print("⚠️ Audio file 'ar-rahman-55-1.mp3' not found")
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

struct RainDrop: View {
    @State private var fall = false
    
    var body: some View {
        Rectangle()
            .fill(Color.cyan.opacity(0.5))
            .frame(width: 2, height: 15)
            .offset(y: fall ? 100 : 0)
            .onAppear {
                withAnimation(.linear(duration: Double.random(in: 1...2)).repeatForever(autoreverses: false)) {
                    fall = true
                }
            }
    }
}

struct MercyRaysPattern: View {
    var body: some View {
        ZStack {
            ForEach(0..<8, id: \.self) { i in
                let angle = Double(i) * 45
                Rectangle()
                    .fill(LinearGradient(
                        colors: [Color.appGold.opacity(0.4), Color.clear],
                        startPoint: .center,
                        endPoint: .trailing
                    ))
                    .frame(width: 100, height: 2)
                    .offset(x: 50)
                    .rotationEffect(.degrees(angle))
            }
            
            Circle()
                .fill(Color.appGold.opacity(0.3))
                .frame(width: 30, height: 30)
        }
        .frame(height: 100)
    }
}

#Preview {
    ArRahmanStoryView()
}



