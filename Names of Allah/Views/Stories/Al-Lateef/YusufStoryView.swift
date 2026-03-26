//
//  YusufStoryView.swift
//  Names of Allah
//
//  Story of Prophet Yusuf عَلَيْهِ ٱلسَّلَامُ - Demonstrating Al-Lateef (The Most Gentle)
//  Multi-screen storytelling experience
//

import SwiftUI
import AVFoundation

struct YusufStoryView: View {
    @State private var currentScreen = 0
    @State private var showContent = false
    @Environment(\.dismiss) var dismiss
    
    let totalScreens = 10
    
    var body: some View {
        ZStack {
            // Background gradient
            LinearGradient(
                colors: [
                    Color(red: 0.08, green: 0.05, blue: 0.15),
                    Color(red: 0.12, green: 0.08, blue: 0.2),
                    Color(red: 0.1, green: 0.06, blue: 0.18)
                ],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
            .ignoresSafeArea()
            
            // Display current screen
            Group {
                switch currentScreen {
                case 0: Screen1_Dream()
                case 1: Screen2_Betrayal()
                case 2: Screen3_Well()
                case 3: Screen4_Slavery()
                case 4: Screen5_FalseAccusation()
                case 5: Screen6_Prison()
                case 6: Screen7_KingsDream()
                case 7: Screen8_Minister()
                case 8: Screen9_Reunion()
                case 9: Screen10_FinalReveal()
                default: Screen1_Dream()
                }
            }
            .opacity(showContent ? 1 : 0)
            .offset(y: showContent ? 0 : 20)
            
            // Next button overlay (except on final screen)
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

// MARK: - Screen 1: The Dream
struct Screen1_Dream: View {
    @State private var starsShining = false
    
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Stars, Sun, Moon
            ZStack {
                // 11 stars
                ForEach(0..<11, id: \.self) { i in
                    let angle = Double(i) * (360.0 / 11.0)
                    let radius: CGFloat = 100
                    
                    Image(systemName: "star.fill")
                        .font(.system(size: 16))
                        .foregroundColor(Color(red: 0.9, green: 0.82, blue: 0.65))
                        .position(
                            x: 180 + radius * CGFloat(cos(angle * .pi / 180)),
                            y: 140 + radius * CGFloat(sin(angle * .pi / 180))
                        )
                        .opacity(starsShining ? 1 : 0.3)
                }
                
                // Sun
                Image(systemName: "sun.max.fill")
                    .font(.system(size: 36))
                    .foregroundColor(.yellow.opacity(0.8))
                    .offset(x: -60, y: -40)
                    .opacity(starsShining ? 1 : 0.3)
                
                // Moon
                Image(systemName: "moon.stars.fill")
                    .font(.system(size: 32))
                    .foregroundColor(.white.opacity(0.9))
                    .offset(x: 60, y: -40)
                    .opacity(starsShining ? 1 : 0.3)
            }
            .frame(height: 280)
            .onAppear {
                withAnimation(.easeInOut(duration: 2).repeatForever(autoreverses: true)) {
                    starsShining = true
                }
            }
            
            Spacer()
            
            // Text
            StoryTextBox(
                text: "Young Yusuf saw a vision:\nEleven stars, the sun, and the moon—\nall bowing before him.\n\nA dream of greatness to come.",
                icon: "sparkles"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 2: Betrayal
struct Screen2_Betrayal: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Brothers (dark figures)
            HStack(spacing: 12) {
                ForEach(0..<5, id: \.self) { _ in
                    VStack(spacing: 4) {
                        Circle()
                            .fill(Color(red: 0.3, green: 0.2, blue: 0.25))
                            .frame(width: 20, height: 20)
                        RoundedRectangle(cornerRadius: 4)
                            .fill(Color(red: 0.25, green: 0.15, blue: 0.2))
                            .frame(width: 28, height: 40)
                    }
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "But jealousy poisoned his brothers' hearts.\n\nThey conspired in darkness,\nplotting to tear him away\nfrom his beloved father.",
                icon: "exclamationmark.triangle.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 3: The Well
struct Screen3_Well: View {
    @State private var yusufFalling = false
    
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            ZStack {
                // Well opening
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                Color(red: 0.02, green: 0.01, blue: 0.04),
                                Color.black
                            ],
                            center: .center,
                            startRadius: 20,
                            endRadius: 80
                        )
                    )
                    .frame(width: 160, height: 160)
                
                // Well rim
                Circle()
                    .stroke(Color(red: 0.4, green: 0.35, blue: 0.3), lineWidth: 10)
                    .frame(width: 160, height: 160)
                
                // Young Yusuf
                VStack(spacing: 0) {
                    Circle()
                        .fill(Color(red: 0.82, green: 0.68, blue: 0.52))
                        .frame(width: 16, height: 16)
                    RoundedRectangle(cornerRadius: 4)
                        .fill(Color(red: 0.8, green: 0.75, blue: 0.7))
                        .frame(width: 22, height: 30)
                }
                .offset(y: yusufFalling ? 20 : -60)
                .opacity(yusufFalling ? 0.5 : 1)
            }
            .frame(height: 280)
            .onAppear {
                withAnimation(.easeIn(duration: 2)) {
                    yusufFalling = true
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Cast into the depths of a cold, dark well.\n\nAlone. Abandoned. Betrayed.\n\nYet even in that darkness,\nAllah's gentle hand was guiding.",
                icon: "moon.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 4: Slavery
struct Screen4_Slavery: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Caravan and marketplace
            VStack(spacing: 20) {
                Image(systemName: "figure.walk")
                    .font(.system(size: 60))
                    .foregroundColor(.white.opacity(0.4))
                
                HStack(spacing: 8) {
                    Image(systemName: "arrow.right")
                    Image(systemName: "cart.fill")
                    Image(systemName: "arrow.right")
                }
                .font(.system(size: 24))
                .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.6))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "A passing caravan pulled him out—\nonly to sell him as a slave.\n\nIn Egypt's marketplace,\na boy became property.\n\nFirst step in an unseen plan.",
                icon: "bag.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 5: False Accusation
struct Screen5_FalseAccusation: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Closed door and figure
            ZStack {
                RoundedRectangle(cornerRadius: 12)
                    .stroke(Color.red.opacity(0.6), lineWidth: 4)
                    .frame(width: 120, height: 180)
                
                VStack(spacing: 8) {
                    Image(systemName: "xmark.shield.fill")
                        .font(.system(size: 48))
                        .foregroundColor(.red.opacity(0.7))
                    
                    Text("Accused")
                        .font(.system(size: 16, weight: .medium))
                        .foregroundColor(.white.opacity(0.7))
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Tested again.\nFalsely accused in the house of Al-Aziz.\n\nHe chose honor over freedom,\nprison over sin.\n\nTrusting Allah through the trial.",
                icon: "hand.raised.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 6: Prison Years
struct Screen6_Prison: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Prison bars and hourglass
            VStack(spacing: 30) {
                HStack(spacing: 4) {
                    ForEach(0..<7, id: \.self) { _ in
                        Rectangle()
                            .fill(Color.white.opacity(0.3))
                            .frame(width: 6, height: 120)
                    }
                }
                
                Image(systemName: "hourglass")
                    .font(.system(size: 40))
                    .foregroundColor(.white.opacity(0.5))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Long years behind bars.\nThe world forgot him.\n\nBut Allah?\n\nAllah was weaving every moment\ninto something beautiful.",
                icon: "clock.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 7: King's Dream
struct Screen7_KingsDream: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: 7 fat cows, 7 thin cows
            VStack(spacing: 20) {
                HStack(spacing: 6) {
                    ForEach(0..<7, id: \.self) { _ in
                        Image(systemName: "leaf.fill")
                            .font(.system(size: 20))
                            .foregroundColor(.green.opacity(0.7))
                    }
                }
                
                Image(systemName: "arrow.down")
                    .font(.system(size: 24))
                    .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                
                HStack(spacing: 6) {
                    ForEach(0..<7, id: \.self) { _ in
                        Image(systemName: "leaf")
                            .font(.system(size: 20))
                            .foregroundColor(.brown.opacity(0.5))
                    }
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Then—the king's mysterious dream.\n\nNone of his wise men could solve it.\n\nBut there was one man who could:\nThe forgotten prisoner.",
                icon: "moon.stars"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 8: Minister of Egypt
struct Screen8_Minister: View {
    @State private var crownGlowing = false
    
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Crown and elevation
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                Color(red: 0.9, green: 0.82, blue: 0.65).opacity(crownGlowing ? 0.4 : 0.2),
                                Color.clear
                            ],
                            center: .center,
                            startRadius: 0,
                            endRadius: 100
                        )
                    )
                    .frame(width: 200, height: 200)
                
                Image(systemName: "crown.fill")
                    .font(.system(size: 80))
                    .foregroundColor(Color(red: 0.9, green: 0.82, blue: 0.65))
            }
            .onAppear {
                withAnimation(.easeInOut(duration: 2).repeatForever(autoreverses: true)) {
                    crownGlowing = true
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "From the lowest pit\nto the highest throne.\n\nThe slave became the savior.\nThe prisoner became the minister.\n\nAllah's plan revealed.",
                icon: "arrow.up.circle.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 9: Reunion and Completion
struct Screen9_Reunion: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Family reunited
            VStack(spacing: 20) {
                Image(systemName: "figure.2.arms.open")
                    .font(.system(size: 70))
                    .foregroundColor(Color(red: 0.9, green: 0.82, blue: 0.65))
                
                HStack(spacing: 12) {
                    Image(systemName: "heart.fill")
                    Image(systemName: "heart.fill")
                    Image(systemName: "heart.fill")
                }
                .font(.system(size: 20))
                .foregroundColor(.pink.opacity(0.7))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Years later, his brothers came—\nseeking food, not knowing who he was.\n\nHis father's lost sight returned.\n\nThe family reunited in tears of joy.\n\nThe childhood dream fulfilled.",
                icon: "hands.sparkles.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 10: Final Reveal with Ayah
struct Screen10_FinalReveal: View {
    @State private var showArabic = false
    @State private var showTranslation = false
    @State private var showName = false
    @State private var glowPulse = false
    @State private var audioPlayer: AVAudioPlayer?
    @State private var isPlayingAudio = false
    @State private var showScrollIndicator = true
    @State private var bounceAnimation = false
    @Environment(\.dismiss) var dismiss
    
    var body: some View {
        ZStack {
            ScrollView {
                VStack(spacing: 35) {
                Spacer().frame(height: 60)
                
                // Golden thread visual
                if showArabic {
                    GoldenThreadPattern()
                        .frame(height: 100)
                        .transition(.opacity)
                }
                
                // Quranic Ayah in Arabic
                if showArabic {
                    VStack(spacing: 16) {
                        Text("إِنَّ رَبِّى لَطِيفٌ لِّمَا يَشَآءُ")
                            .font(.system(size: 32, weight: .bold, design: .serif))
                            .foregroundColor(.white)
                            .multilineTextAlignment(.center)
                            .lineSpacing(10)
                            .padding(.horizontal, 30)
                        
                        Text("Surah Yusuf 12:100")
                            .font(.system(size: 14, weight: .light))
                            .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.7))
                    }
                    .transition(.opacity.combined(with: .move(edge: .top)))
                }
                
                // English translation
                if showTranslation {
                    Text("\"Indeed, my Lord is Subtle\nin what He wills\"")
                        .font(.system(size: 20, weight: .light, design: .serif))
                        .foregroundColor(.white.opacity(0.9))
                        .multilineTextAlignment(.center)
                        .lineSpacing(8)
                        .italic()
                        .padding(.horizontal, 40)
                        .transition(.opacity.combined(with: .scale(scale: 0.9)))
                }
                
                // Divider
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
                
                // The Name - Al-Lateef
                if showName {
                    VStack(spacing: 25) {
                        Image(systemName: "sparkles")
                            .font(.system(size: 26))
                            .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                        
                        Text("ٱللَّطِيفُ")
                            .font(.system(size: 64, weight: .bold, design: .serif))
                            .foregroundColor(.white)
                            .shadow(color: Color(red: 0.85, green: 0.75, blue: 0.55).opacity(glowPulse ? 0.8 : 0.4), radius: glowPulse ? 30 : 20)
                        
                        HStack(spacing: 15) {
                            Rectangle().fill(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.5)).frame(width: 40, height: 1)
                            Text("Al-Lateef")
                                .font(.system(size: 28, weight: .medium, design: .serif))
                                .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                            Rectangle().fill(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.5)).frame(width: 40, height: 1)
                        }
                        
                        Text("The Most Gentle • The Subtle")
                            .font(.system(size: 18, weight: .light, design: .serif))
                            .foregroundColor(.white.opacity(0.8))
                        
                        Divider()
                            .background(Color.white.opacity(0.2))
                            .padding(.vertical, 8)
                        
                        // Comprehensive explanation
                        VStack(alignment: .leading, spacing: 16) {
                            ExplanationPoint(
                                icon: "arrow.down.circle",
                                text: "The well was not abandonment—it was the path to Egypt"
                            )
                            
                            ExplanationPoint(
                                icon: "figure.walk",
                                text: "Slavery was not degradation—it was entry into the palace"
                            )
                            
                            ExplanationPoint(
                                icon: "lock",
                                text: "Prison was not punishment—it was preparation for leadership"
                            )
                            
                            ExplanationPoint(
                                icon: "crown",
                                text: "Every trial was a thread in Allah's gentle tapestry"
                            )
                        }
                        .padding(.horizontal, 20)
                        .padding(.vertical, 10)
                        
                        Divider()
                            .background(Color.white.opacity(0.2))
                            .padding(.vertical, 8)
                        
                        Text("Allah works in ways we cannot see.\nWhat seems like a closed door\nis His gentle opening of another.\n\nHe is Al-Lateef—The Most Subtle,\nworking beneath the surface,\nguiding every moment with infinite wisdom.")
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
                
                // Audio button - only show if we want manual replay
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
                        
                        // Helper text
                        Text("Add 'yusuf-12-100.mp3' to project for audio")
                            .font(.system(size: 11, weight: .light))
                            .foregroundColor(.white.opacity(0.4))
                            .padding(.top, 4)
                    }
                    .transition(.opacity.combined(with: .move(edge: .bottom)))
                }
                
                // Continue button
                if showName {
                    NavigationLink(destination: AlLateefReflectionView()) {
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
            // Auto-play audio when Ayah appears
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
        // Auto-play the Ayah when it appears
        if let audioPath = Bundle.main.path(forResource: "yusuf-12-100", ofType: "mp3") {
            let audioUrl = URL(fileURLWithPath: audioPath)
            do {
                audioPlayer = try AVAudioPlayer(contentsOf: audioUrl)
                audioPlayer?.play()
                isPlayingAudio = true
                
                // Update state when audio finishes
                DispatchQueue.main.asyncAfter(deadline: .now() + (audioPlayer?.duration ?? 5)) {
                    isPlayingAudio = false
                }
            } catch {
                print("⚠️ Could not play audio file: \(error.localizedDescription)")
                showAudioNotFoundMessage()
            }
        } else {
            print("⚠️ Audio file 'yusuf-12-100.mp3' not found in bundle.")
            print("📝 To enable audio:")
            print("   1. Download Surah Yusuf 12:100 recitation (MP3)")
            print("   2. Add to Xcode project as 'yusuf-12-100.mp3'")
            print("   3. Ensure it's added to the app target")
            showAudioNotFoundMessage()
        }
    }
    
    private func showAudioNotFoundMessage() {
        // Visual feedback that audio file is missing
        isPlayingAudio = false
    }
    
    private func playAyahAudio() {
        // Manual play/replay of audio
        if let player = audioPlayer, player.isPlaying {
            // If already playing, restart
            player.stop()
            player.currentTime = 0
            player.play()
        } else {
            // Play for the first time or replay
            autoPlayAyahAudio()
        }
    }
}

// MARK: - Al-Lateef Specific Components

struct GoldenThreadPattern: View {
    var body: some View {
        GeometryReader { geo in
            Path { path in
                let width = geo.size.width
                let height = geo.size.height
                
                // Create flowing golden threads
                for i in 0..<3 {
                    let yOffset = CGFloat(i) * (height / 3)
                    path.move(to: CGPoint(x: 0, y: yOffset))
                    
                    for x in stride(from: 0, through: width, by: 20) {
                        let y = yOffset + sin(x / 30) * 15
                        path.addLine(to: CGPoint(x: x, y: y))
                    }
                }
            }
            .stroke(
                LinearGradient(
                    colors: [
                        Color(red: 0.9, green: 0.82, blue: 0.65).opacity(0.6),
                        Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.3)
                    ],
                    startPoint: .leading,
                    endPoint: .trailing
                ),
                style: StrokeStyle(lineWidth: 2, lineCap: .round)
            )
        }
    }
}

#Preview {
    YusufStoryView()
}
