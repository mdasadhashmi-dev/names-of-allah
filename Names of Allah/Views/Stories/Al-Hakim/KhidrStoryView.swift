//
//  KhidrStoryView.swift
//  Names of Allah
//
//  Story of Khidr and Musa عَلَيْهِ ٱلسَّلَامُ - Demonstrating Al-Hakim (The Most Wise)
//  Multi-screen storytelling experience
//

import SwiftUI
import AVFoundation

struct KhidrStoryView: View {
    @State private var currentScreen = 0
    @State private var showContent = false
    @Environment(\.dismiss) var dismiss
    
    let totalScreens = 11
    
    var body: some View {
        ZStack {
            // Background gradient - mysterious and deep
            LinearGradient(
                colors: [
                    Color(red: 0.02, green: 0.08, blue: 0.12),
                    Color(red: 0.05, green: 0.10, blue: 0.18),
                    Color(red: 0.03, green: 0.06, blue: 0.10)
                ],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
            .ignoresSafeArea()
            
            // Display current screen
            Group {
                switch currentScreen {
                case 0: KhidrScreen1_Journey()
                case 1: KhidrScreen2_Meeting()
                case 2: KhidrScreen3_Condition()
                case 3: KhidrScreen4_Boat()
                case 4: KhidrScreen5_Boy()
                case 5: KhidrScreen6_Wall()
                case 6: KhidrScreen7_BoatReason()
                case 7: KhidrScreen8_BoyReason()
                case 8: KhidrScreen9_WallReason()
                case 9: KhidrScreen10_Lesson()
                case 10: KhidrScreen11_FinalReveal()
                default: KhidrScreen1_Journey()
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

// MARK: - Screen 1: The Journey
struct KhidrScreen1_Journey: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Musa walking
            VStack(spacing: 25) {
                Image(systemName: "figure.walk")
                    .font(.system(size: 70))
                    .foregroundColor(.white.opacity(0.7))
                
                HStack(spacing: 8) {
                    ForEach(0..<3, id: \.self) { _ in
                        Image(systemName: "arrow.right")
                    }
                }
                .font(.system(size: 20))
                .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.6))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Musa (AS), the great Prophet,\nset out on a journey\nto seek someone with\ngreater knowledge.\n\nA lesson in humility awaited him.",
                icon: "map"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 2: Meeting Khidr
struct KhidrScreen2_Meeting: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Two figures meeting
            HStack(spacing: 40) {
                VStack(spacing: 8) {
                    Image(systemName: "figure.stand")
                        .font(.system(size: 50))
                        .foregroundColor(.white.opacity(0.7))
                    Text("Musa")
                        .font(.system(size: 14))
                        .foregroundColor(.white.opacity(0.5))
                }
                
                Image(systemName: "arrow.left.and.right")
                    .font(.system(size: 24))
                    .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                
                VStack(spacing: 8) {
                    Image(systemName: "figure.stand")
                        .font(.system(size: 50))
                        .foregroundColor(Color(red: 0.7, green: 0.9, blue: 0.7).opacity(0.7))
                    Text("Al-Khidr")
                        .font(.system(size: 14))
                        .foregroundColor(.white.opacity(0.5))
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "He met Al-Khidr,\na servant of Allah\nwho was granted special knowledge.\n\nMusa asked to accompany him\nand learn.",
                icon: "person.2"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 3: The Condition
struct KhidrScreen3_Condition: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Finger on lips (silence)
            VStack(spacing: 20) {
                Image(systemName: "hand.raised.fill")
                    .font(.system(size: 60))
                    .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                
                Text("\"Do not question me\"")
                    .font(.system(size: 20, weight: .medium, design: .serif))
                    .foregroundColor(.white.opacity(0.9))
                    .italic()
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Al-Khidr agreed, but warned:\n\n\"You will not be able to bear\nwhat you see.\n\nDo not question me\nuntil I explain it to you.\"",
                icon: "exclamationmark.triangle"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 4: The Damaged Boat
struct KhidrScreen4_Boat: View {
    @State private var boatShaking = false
    
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Boat with damage
            ZStack {
                Image(systemName: "ferry")
                    .font(.system(size: 70))
                    .foregroundColor(.white.opacity(0.6))
                    .offset(x: boatShaking ? -3 : 3, y: boatShaking ? 2 : -2)
                
                Image(systemName: "xmark.circle.fill")
                    .font(.system(size: 30))
                    .foregroundColor(.red.opacity(0.8))
                    .offset(x: 30, y: 20)
            }
            .onAppear {
                withAnimation(.easeInOut(duration: 0.3).repeatForever(autoreverses: true)) {
                    boatShaking = true
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "They boarded a boat.\n\nSuddenly, Al-Khidr\ndamaged it deliberately!\n\nMusa was shocked:\n\"You'll drown innocent people!\"",
                icon: "exclamationmark.3"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 5: The Boy
struct KhidrScreen5_Boy: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Tragic scene
            VStack(spacing: 25) {
                Image(systemName: "figure.and.child.holdinghands")
                    .font(.system(size: 60))
                    .foregroundColor(.white.opacity(0.5))
                
                Image(systemName: "xmark")
                    .font(.system(size: 40))
                    .foregroundColor(.red.opacity(0.8))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "They met a young boy.\n\nAl-Khidr took his life.\n\nMusa was horrified:\n\"How could you kill\nan innocent soul?\"",
                icon: "heart.slash"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 6: The Wall
struct KhidrScreen6_Wall: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Crumbling wall being rebuilt
            VStack(spacing: 20) {
                ZStack {
                    // Broken wall
                    VStack(spacing: 4) {
                        ForEach(0..<4, id: \.self) { _ in
                            HStack(spacing: 4) {
                                ForEach(0..<3, id: \.self) { _ in
                                    Rectangle()
                                        .fill(Color.white.opacity(0.3))
                                        .frame(width: 30, height: 20)
                                }
                            }
                        }
                    }
                    
                    // Tools
                    Image(systemName: "hammer.fill")
                        .font(.system(size: 30))
                        .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                        .offset(x: 50, y: -30)
                }
            }
            
            Spacer()
            
            StoryTextBox(
                text: "In a village of unwelcoming people,\nthey found a crumbling wall.\n\nAl-Khidr rebuilt it for free.\n\nMusa objected:\n\"They offered us nothing!\nAt least take payment!\"",
                icon: "questionmark.circle"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 7: The Boat's Wisdom
struct KhidrScreen7_BoatReason: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Protected boat
            VStack(spacing: 20) {
                Image(systemName: "ferry")
                    .font(.system(size: 50))
                    .foregroundColor(.white.opacity(0.7))
                
                Image(systemName: "shield.checkered")
                    .font(.system(size: 40))
                    .foregroundColor(.green.opacity(0.7))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "The boat belonged to poor fishermen.\n\nA tyrant king was seizing\nevery perfect boat.\n\nThe damage saved them—\nhe passed it by.",
                icon: "checkmark.shield"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 8: The Boy's Wisdom
struct KhidrScreen8_BoyReason: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Parents protected
            VStack(spacing: 20) {
                HStack(spacing: 15) {
                    Image(systemName: "figure.stand")
                    Image(systemName: "figure.stand.dress")
                }
                .font(.system(size: 50))
                .foregroundColor(.white.opacity(0.7))
                
                Image(systemName: "heart.fill")
                    .font(.system(size: 35))
                    .foregroundColor(.pink.opacity(0.7))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "The boy would have grown\nto cause his righteous parents\ngreat grief and disbelief.\n\nAllah will replace him\nwith a better, purer child.",
                icon: "star.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 9: The Wall's Wisdom
struct KhidrScreen9_WallReason: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Treasure beneath
            VStack(spacing: 20) {
                VStack(spacing: 0) {
                    Rectangle()
                        .fill(Color.white.opacity(0.3))
                        .frame(width: 120, height: 30)
                    Rectangle()
                        .fill(Color.white.opacity(0.3))
                        .frame(width: 120, height: 30)
                }
                
                Image(systemName: "arrow.down")
                    .font(.system(size: 20))
                    .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                
                Image(systemName: "giftcard.fill")
                    .font(.system(size: 50))
                    .foregroundColor(Color(red: 0.9, green: 0.8, blue: 0.3))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "Beneath the wall\nlay a treasure\nfor two orphan boys.\n\nTheir father was righteous.\nAllah protected their inheritance\nuntil they grow strong.",
                icon: "gift"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 10: The Profound Lesson
struct KhidrScreen10_Lesson: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Visual: Hidden layers
            ZStack {
                ForEach(0..<4, id: \.self) { i in
                    RoundedRectangle(cornerRadius: 15)
                        .stroke(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.4 - Double(i) * 0.1), lineWidth: 2)
                        .frame(width: CGFloat(120 - i * 20), height: CGFloat(120 - i * 20))
                }
                
                Image(systemName: "eye.slash")
                    .font(.system(size: 40))
                    .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
            }
            
            Spacer()
            
            StoryTextBox(
                text: "\"I did none of this\nby my own command.\n\nThis is the wisdom behind\nwhat you could not bear.\"\n\nWhat seemed wrong\nwas Divine protection.",
                icon: "lightbulb.fill"
            )
            
            Spacer()
        }
    }
}

// MARK: - Screen 11: Final Reveal
struct KhidrScreen11_FinalReveal: View {
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
                
                // Wisdom pattern
                if showArabic {
                    WisdomPattern()
                        .frame(height: 100)
                        .transition(.opacity)
                }
                
                // Quranic Ayah
                if showArabic {
                    VStack(spacing: 16) {
                        Text("إِنَّكَ أَنتَ ٱلْعَزِيزُ ٱلْحَكِيمُ")
                            .font(.system(size: 32, weight: .bold, design: .serif))
                            .foregroundColor(.white)
                            .multilineTextAlignment(.center)
                            .lineSpacing(10)
                            .padding(.horizontal, 30)
                        
                        Text("Surah Al-Baqarah 2:129")
                            .font(.system(size: 14, weight: .light))
                            .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.7))
                    }
                    .transition(.opacity.combined(with: .move(edge: .top)))
                }
                
                // Translation
                if showTranslation {
                    Text("\"Indeed, You are\nthe Exalted in Might,\nthe Wise (Al-Hakim)\"")
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
                        Image(systemName: "brain")
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
                        
                        Text("ٱلْحَكِيمُ")
                            .font(.system(size: 64, weight: .bold, design: .serif))
                            .foregroundColor(.white)
                            .shadow(color: Color(red: 0.85, green: 0.75, blue: 0.55).opacity(glowPulse ? 0.8 : 0.4), radius: glowPulse ? 30 : 20)
                        
                        HStack(spacing: 15) {
                            Rectangle().fill(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.5)).frame(width: 40, height: 1)
                            Text("Al-Hakim")
                                .font(.system(size: 28, weight: .medium, design: .serif))
                                .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                            Rectangle().fill(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.5)).frame(width: 40, height: 1)
                        }
                        
                        Text("The Most Wise • The Perfectly Wise")
                            .font(.system(size: 18, weight: .light, design: .serif))
                            .foregroundColor(.white.opacity(0.8))
                        
                        Divider()
                            .background(Color.white.opacity(0.2))
                            .padding(.vertical, 8)
                        
                        VStack(alignment: .leading, spacing: 16) {
                            ExplanationPoint(
                                icon: "eye.trianglebadge.exclamationmark",
                                text: "What looks like tragedy may be hidden mercy"
                            )
                            
                            ExplanationPoint(
                                icon: "puzzlepiece",
                                text: "We see one piece; Allah sees the entire picture"
                            )
                            
                            ExplanationPoint(
                                icon: "arrow.up.and.down.and.arrow.left.and.right",
                                text: "His wisdom operates in dimensions beyond our grasp"
                            )
                            
                            ExplanationPoint(
                                icon: "checkmark.seal",
                                text: "Every decree has perfect wisdom, even if hidden from us"
                            )
                        }
                        .padding(.horizontal, 20)
                        .padding(.vertical, 10)
                        
                        Divider()
                            .background(Color.white.opacity(0.2))
                            .padding(.vertical, 8)
                        
                        Text("Trust Al-Hakim completely.\nHis wisdom is absolute and perfect.\n\nWhat you don't understand now\nmay be the greatest blessing in disguise.\n\nHe knows. You don't.")
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
                        
                        Text("Add 'al-qasas-28-68.mp3' to project for audio")
                            .font(.system(size: 11, weight: .light))
                            .foregroundColor(.white.opacity(0.4))
                            .padding(.top, 4)
                    }
                    .transition(.opacity.combined(with: .move(edge: .bottom)))
                }
                
                // Continue button
                if showName {
                    NavigationLink(destination: AlHakimReflectionView()) {
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
        if let audioPath = Bundle.main.path(forResource: "al-baqarah-2-129", ofType: "mp3") {
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
            print("⚠️ Audio file 'al-baqarah-2-129.mp3' not found")
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

struct WisdomPattern: View {
    var body: some View {
        GeometryReader { geo in
            ZStack {
                ForEach(0..<3, id: \.self) { i in
                    Path { path in
                        let y = geo.size.height * CGFloat(i) / 3
                        path.move(to: CGPoint(x: 0, y: y))
                        
                        for x in stride(from: 0, through: geo.size.width, by: 30) {
                            let yOffset = sin(x / 20 + CGFloat(i)) * 10
                            path.addLine(to: CGPoint(x: x, y: y + yOffset))
                        }
                    }
                    .stroke(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.4), lineWidth: 1.5)
                }
                
                // Eye symbol in center
                Image(systemName: "eye")
                    .font(.system(size: 30))
                    .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.6))
                    .position(x: geo.size.width / 2, y: geo.size.height / 2)
            }
        }
    }
}

#Preview {
    KhidrStoryView()
}

