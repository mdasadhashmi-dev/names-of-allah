//
//  MaryamStoryView.swift
//  Names of Allah
//
//  Story of Maryam عَلَيْهَا ٱلسَّلَامُ - Demonstrating Ar-Razzaq (The Provider)
//  Multi-screen storytelling experience
//

import SwiftUI
import AVFoundation

struct MaryamStoryView: View {
    @State private var currentScreen = 0
    @State private var showContent = false
    @Environment(\.dismiss) var dismiss
    
    let totalScreens = 9
    
    var body: some View {
        ZStack {
            // Background gradient - serene and peaceful
            LinearGradient(
                colors: [
                    Color(red: 0.05, green: 0.12, blue: 0.2),
                    Color(red: 0.08, green: 0.15, blue: 0.25),
                    Color(red: 0.06, green: 0.1, blue: 0.18)
                ],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
            .ignoresSafeArea()
            
            // Display current screen
            Group {
                switch currentScreen {
                case 0: MaryamScreen1_Devotion()
                case 1: MaryamScreen2_Miracle()
                case 2: MaryamScreen3_Sanctuary()
                case 3: MaryamScreen4_Provision()
                case 4: MaryamScreen5_Question()
                case 5: MaryamScreen6_Trust()
                case 6: MaryamScreen7_Continuous()
                case 7: MaryamScreen8_Lesson()
                case 8: MaryamScreen9_FinalReveal()
                default: MaryamScreen1_Devotion()
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
                                .fill(index <= currentScreen ? Color(red: 0.85, green: 0.75, blue: 0.55) : Color.white.opacity(0.3))
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

// MARK: - Screen 1: Devoted Worship
struct MaryamScreen1_Devotion: View {
    @State private var glowing = false
    
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Praying figure
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                Color(red: 0.85, green: 0.75, blue: 0.55).opacity(glowing ? 0.3 : 0.1),
                                Color.clear
                            ],
                            center: .center,
                            startRadius: 0,
                            endRadius: 100
                        )
                    )
                    .frame(width: 200, height: 200)
                
                Image(systemName: "figure.stand.dress")
                    .font(.system(size: 70))
                    .foregroundColor(.white.opacity(0.8))
            }
            .onAppear {
                withAnimation(.easeInOut(duration: 2).repeatForever(autoreverses: true)) {
                    glowing = true
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Maryam, pure and devoted,\nwas raised in seclusion.\n\nHer life dedicated to worship,\nher heart connected to Allah.",
                icon: "hands.sparkles"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 2: The Miracle Begins
struct MaryamScreen2_Miracle: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Angel and light
            VStack(spacing: 30) {
                Image(systemName: "sparkles")
                    .font(.system(size: 50))
                    .foregroundColor(Color(red: 0.9, green: 0.85, blue: 0.7))
                
                Image(systemName: "cloud")
                    .font(.system(size: 40))
                    .foregroundColor(.white.opacity(0.6))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "An angel appeared with news:\n\nShe would bear a blessed child—\na sign for all humanity.\n\nA miracle beyond understanding.",
                icon: "moon.stars.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 3: The Sanctuary
struct MaryamScreen3_Sanctuary: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Private chamber (mihrab)
            VStack(spacing: 20) {
                ZStack {
                    RoundedRectangle(cornerRadius: 20)
                        .fill(Color.white.opacity(0.05))
                        .frame(width: 140, height: 180)
                        .overlay(
                            RoundedRectangle(cornerRadius: 20)
                                .stroke(Color.white.opacity(0.3), lineWidth: 2)
                        )
                    
                    VStack(spacing: 12) {
                        Image(systemName: "door.left.hand.closed")
                            .font(.system(size: 40))
                            .foregroundColor(.white.opacity(0.6))
                        
                        Text("Mihrab")
                            .font(.system(size: 16, weight: .light))
                            .foregroundColor(.white.opacity(0.5))
                    }
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Zakariya (AS) would check on her\nin her private sanctuary.\n\nThe door was always locked.\nNo one could enter but him.",
                icon: "lock.shield"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 4: Unexpected Provision
struct MaryamScreen4_Provision: View {
    @State private var fruitsAppear = false
    
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Fresh fruits
            HStack(spacing: 20) {
                ForEach(["🍎", "🍇", "🍊"], id: \.self) { fruit in
                    Text(fruit)
                        .font(.system(size: 50))
                        .scaleEffect(fruitsAppear ? 1 : 0)
                }
            }
            .onAppear {
                withAnimation(.spring(response: 0.6, dampingFraction: 0.6).delay(0.3)) {
                    fruitsAppear = true
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Yet every time he entered,\nhe found fresh fruit beside her.\n\nSummer fruits in winter.\nWinter fruits in summer.",
                icon: "leaf.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 5: The Question
struct MaryamScreen5_Question: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Question mark with wonder
            VStack(spacing: 20) {
                Image(systemName: "questionmark.circle")
                    .font(.system(size: 70))
                    .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                
                Text("\"Where is this from?\"")
                    .font(.system(size: 22, weight: .medium, design: .serif))
                    .foregroundColor(.white.opacity(0.9))
                    .italic()
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Astonished, Zakariya asked:\n\n\"O Maryam, where is this from?\"\n\nHow could this be?",
                icon: "exclamationmark.bubble"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 6: Her Answer
struct MaryamScreen6_Trust: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Divine light from above
            VStack(spacing: 25) {
                ForEach(0..<3, id: \.self) { i in
                    Rectangle()
                        .fill(
                            LinearGradient(
                                colors: [
                                    Color(red: 0.9, green: 0.82, blue: 0.65).opacity(0.5),
                                    Color.clear
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                        .frame(width: CGFloat(30 + i * 15), height: 100)
                        .offset(y: CGFloat(i * -10))
                }
            }
            .frame(height: 120)
            
            Spacer()
            
            StoryTextBox(
                text: "With complete certainty she said:\n\n\"It is from Allah.\n\nIndeed, Allah provides\nfor whom He wills\nwithout account.\"",
                icon: "sparkles"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 7: Continuous Provision
struct MaryamScreen7_Continuous: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Infinite cycle
            ZStack {
                ForEach(0..<3, id: \.self) { i in
                    Circle()
                        .stroke(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.3 - Double(i) * 0.1), lineWidth: 2)
                        .frame(width: CGFloat(80 + i * 40), height: CGFloat(80 + i * 40))
                }
                
                Image(systemName: "infinity")
                    .font(.system(size: 50))
                    .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Not once. Not twice.\nEvery single time.\n\nProvision from Allah,\nconstant and unexpected,\nin ways beyond imagination.",
                icon: "arrow.triangle.2.circlepath"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 8: The Lesson
struct MaryamScreen8_Lesson: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Heart with rays
            ZStack {
                ForEach(0..<8, id: \.self) { i in
                    let angle = Double(i) * 45
                    Rectangle()
                        .fill(Color(red: 0.9, green: 0.82, blue: 0.65).opacity(0.3))
                        .frame(width: 2, height: 50)
                        .rotationEffect(.degrees(angle))
                }
                
                Image(systemName: "heart.fill")
                    .font(.system(size: 40))
                    .foregroundColor(.pink.opacity(0.8))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "This inspired Zakariya himself\nto call upon Allah for a child—\n\nseeing the limitless provision,\nhe knew nothing is impossible\nfor Ar-Razzaq.",
                icon: "hands.and.sparkles.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 9: Final Reveal
struct MaryamScreen9_FinalReveal: View {
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
                
                // Provision visual
                if showArabic {
                    ProvisionPattern()
                        .frame(height: 80)
                        .transition(.opacity)
                }
                
                // Quranic Ayah
                if showArabic {
                    VStack(spacing: 16) {
                        Text("إِنَّ ٱللَّهَ هُوَ ٱلرَّزَّاقُ ذُو ٱلْقُوَّةِ ٱلْمَتِينُ")
                            .font(.system(size: 28, weight: .bold, design: .serif))
                            .foregroundColor(.white)
                            .multilineTextAlignment(.center)
                            .lineSpacing(10)
                            .padding(.horizontal, 30)
                        
                        Text("Surah Adh-Dhariyat 51:58")
                            .font(.system(size: 14, weight: .light))
                            .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.7))
                    }
                    .transition(.opacity.combined(with: .move(edge: .top)))
                }
                
                // Translation
                if showTranslation {
                    Text("\"Indeed, Allah is the Provider (Ar-Razzaq),\nthe Possessor of Strength,\nthe Firm\"")
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
                        Rectangle().fill(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.5)).frame(width: 50, height: 1)
                        Image(systemName: "leaf.fill")
                            .font(.system(size: 12))
                            .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                        Rectangle().fill(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.5)).frame(width: 50, height: 1)
                    }
                    .transition(.opacity)
                }
                
                // The Name
                if showName {
                    VStack(spacing: 25) {
                        Image(systemName: "sparkles")
                            .font(.system(size: 26))
                            .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                        
                        Text("ٱلرَّزَّاقُ")
                            .font(.system(size: 64, weight: .bold, design: .serif))
                            .foregroundColor(.white)
                            .shadow(color: Color(red: 0.85, green: 0.75, blue: 0.55).opacity(glowPulse ? 0.8 : 0.4), radius: glowPulse ? 30 : 20)
                        
                        HStack(spacing: 15) {
                            Rectangle().fill(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.5)).frame(width: 40, height: 1)
                            Text("Ar-Razzaq")
                                .font(.system(size: 28, weight: .medium, design: .serif))
                                .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                            Rectangle().fill(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.5)).frame(width: 40, height: 1)
                        }
                        
                        Text("The Provider • The Sustainer")
                            .font(.system(size: 18, weight: .light, design: .serif))
                            .foregroundColor(.white.opacity(0.8))
                        
                        Divider()
                            .background(Color.white.opacity(0.2))
                            .padding(.vertical, 8)
                        
                        VStack(alignment: .leading, spacing: 16) {
                            ExplanationPoint(
                                icon: "infinity.circle",
                                text: "Provision came without asking, beyond all logic"
                            )
                            
                            ExplanationPoint(
                                icon: "leaf.arrow.circlepath",
                                text: "Sustenance appeared exactly when needed"
                            )
                            
                            ExplanationPoint(
                                icon: "heart.text.square",
                                text: "Faith in the Provider brings peace to the heart"
                            )
                            
                            ExplanationPoint(
                                icon: "hand.raised.fingers.spread",
                                text: "Allah provides in ways we never imagined"
                            )
                        }
                        .padding(.horizontal, 20)
                        .padding(.vertical, 10)
                        
                        Divider()
                            .background(Color.white.opacity(0.2))
                            .padding(.vertical, 8)
                        
                        Text("Your rizq (provision) is already written.\nIt will reach you no matter where you are.\n\nTrust Ar-Razzaq completely.\nHe provides without limits,\nwithout keeping count.")
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
                                    .stroke(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.3), lineWidth: 1)
                            )
                    )
                    .padding(.horizontal, 20)
                    .transition(.opacity.combined(with: .scale(scale: 0.85)))
                }
                
                // Audio button
                if showName {
                    VStack(spacing: 8) {
                        Button(action: playAyahAudio) {
                            HStack(spacing: 12) {
                                Image(systemName: isPlayingAudio ? "speaker.wave.3.fill" : "speaker.wave.2.fill")
                                    .font(.system(size: 18))
                                Text(isPlayingAudio ? "Playing Ayah..." : "Play Ayah Audio")
                                    .font(.system(size: 16, weight: .medium, design: .serif))
                            }
                            .foregroundColor(.white)
                            .padding(.horizontal, 30)
                            .padding(.vertical, 14)
                            .background(
                                RoundedRectangle(cornerRadius: 25)
                                    .fill(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(isPlayingAudio ? 0.4 : 0.25))
                                    .overlay(
                                        RoundedRectangle(cornerRadius: 25)
                                            .stroke(Color(red: 0.85, green: 0.75, blue: 0.55), lineWidth: 1.5)
                                    )
                            )
                        }
                        .disabled(isPlayingAudio)
                        
                        Text("Add 'ali-imran-3-37.mp3' to project for audio")
                            .font(.system(size: 11, weight: .light))
                            .foregroundColor(.white.opacity(0.4))
                            .padding(.top, 4)
                    }
                    .transition(.opacity.combined(with: .move(edge: .bottom)))
                }
                
                // Continue button
                if showName {
                    NavigationLink(destination: ArRazzaqReflectionView()) {
                        HStack(spacing: 8) {
                            Text("Continue to Reflect")
                                .font(.system(size: 16, weight: .medium, design: .serif))
                            Image(systemName: "arrow.right")
                                .font(.system(size: 12))
                        }
                        .foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1))
                        .padding(.horizontal, 32)
                        .padding(.vertical, 16)
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
                        .clipShape(Capsule())
                        .shadow(color: Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.4), radius: 15)
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
                    HStack(spacing: 8) {
                        Image(systemName: "chevron.down")
                            .font(.system(size: 14, weight: .semibold))
                        Text("Scroll to read more")
                            .font(.system(size: 13, weight: .medium))
                        Image(systemName: "chevron.down")
                            .font(.system(size: 14, weight: .semibold))
                    }
                    .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                    .padding(.horizontal, 20)
                    .padding(.vertical, 10)
                    .background(
                        Capsule()
                            .fill(Color.black.opacity(0.7))
                            .overlay(
                                Capsule()
                                    .stroke(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.4), lineWidth: 1)
                            )
                    )
                    .offset(y: bounceAnimation ? 4 : 0)
                    .padding(.bottom, 25)
                    .transition(.opacity.combined(with: .move(edge: .bottom)))
                }
            }
        )
        }
        .onAppear {
            animateReveal()
            
            // Bounce animation for scroll indicator
            withAnimation(.easeInOut(duration: 1.5).repeatForever(autoreverses: true)) {
                bounceAnimation = true
            }
            
            // Auto-hide after 6 seconds
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
        if let audioPath = Bundle.main.path(forResource: "adh-dhariyat-51-58", ofType: "mp3") {
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
            print("⚠️ Audio file 'adh-dhariyat-51-58.mp3' not found")
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

// MARK: - Supporting Views

struct ProvisionPattern: View {
    var body: some View {
        HStack(spacing: 15) {
            ForEach(0..<5, id: \.self) { i in
                VStack(spacing: 4) {
                    Image(systemName: "arrow.down")
                        .font(.system(size: 14))
                    Image(systemName: "gift.fill")
                        .font(.system(size: 20))
                }
                .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.6))
            }
        }
    }
}

#Preview {
    MaryamStoryView()
}

