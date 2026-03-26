//
//  SeaPartingView.swift
//  Names of Allah
//
//  Enhanced Story Animation: Musa عَلَيْهِ ٱلسَّلَامُ and the Parting of the Sea
//

import SwiftUI

struct SeaPartingView: View {
    // Animation states
    @State private var showSky = false
    @State private var showSea = false
    @State private var seaParted = false
    @State private var showPath = false
    @State private var showMusa = false
    @State private var musaWalking = false
    @State private var showSoldiers = false
    @State private var showLight = false
    @State private var showText1 = false
    @State private var showText2 = false
    @State private var showText3 = false
    @State private var showFinalMessage = false
    @State private var waveOffset: CGFloat = 0
    @State private var cloudOffset: CGFloat = 0
    @State private var starsTwinkle = false
    @State private var staffRaised = false
    @State private var lightPulse = false
    
    let goldColor = Color(red: 0.85, green: 0.75, blue: 0.55)
    
    var body: some View {
        GeometryReader { geo in
            ZStack {
                // Deep night sky gradient
                LinearGradient(
                    colors: [
                        Color(red: 0.02, green: 0.05, blue: 0.15),
                        Color(red: 0.08, green: 0.12, blue: 0.28),
                        Color(red: 0.05, green: 0.08, blue: 0.2),
                        Color(red: 0.02, green: 0.04, blue: 0.12)
                    ],
                    startPoint: .top,
                    endPoint: .bottom
                )
                .opacity(showSky ? 1 : 0)
                .animation(.easeIn(duration: 2), value: showSky)
                
                // Animated stars
                StarsFieldView(twinkle: starsTwinkle)
                    .opacity(showSky ? 0.8 : 0)
                
                // Moving clouds
                CloudsView(offset: cloudOffset)
                    .opacity(showSky ? 0.4 : 0)
                
                // Moon with glow
                ZStack {
                    // Outer glow
                    Circle()
                        .fill(RadialGradient(
                            colors: [Color.white.opacity(0.3), Color.clear],
                            center: .center,
                            startRadius: 20,
                            endRadius: 80
                        ))
                        .frame(width: 160, height: 160)
                    
                    // Moon
                    Circle()
                        .fill(RadialGradient(
                            colors: [Color.white, Color(red: 0.95, green: 0.92, blue: 0.85)],
                            center: .topLeading,
                            startRadius: 0,
                            endRadius: 50
                        ))
                        .frame(width: 55, height: 55)
                        .shadow(color: .white.opacity(0.8), radius: 15)
                }
                .position(x: geo.size.width * 0.82, y: 90)
                .opacity(showSky ? 1 : 0)
                
                // Divine Light Beam (enhanced)
                if showLight {
                    ZStack {
                        // Main beam
                        LightBeamShape()
                            .fill(
                                LinearGradient(
                                    colors: [
                                        goldColor.opacity(lightPulse ? 0.6 : 0.4),
                                        goldColor.opacity(0.2),
                                        Color.white.opacity(0.1),
                                        Color.clear
                                    ],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                            .frame(width: seaParted ? 180 : 0, height: geo.size.height)
                            .position(x: geo.size.width / 2, y: geo.size.height / 2)
                        
                        // Light particles
                        LightParticlesView()
                            .frame(width: 150, height: geo.size.height * 0.6)
                            .position(x: geo.size.width / 2, y: geo.size.height * 0.5)
                            .opacity(seaParted ? 1 : 0)
                    }
                }
                
                // Sea floor / sand (revealed when parted)
                if showPath {
                    SeaFloorView(geo: geo, revealed: seaParted)
                }
                
                // Enhanced Left Sea Wall
                EnhancedSeaWall(isLeft: true, geo: geo, parted: seaParted, waveOffset: waveOffset)
                    .opacity(showSea ? 1 : 0)
                
                // Enhanced Right Sea Wall
                EnhancedSeaWall(isLeft: false, geo: geo, parted: seaParted, waveOffset: waveOffset)
                    .opacity(showSea ? 1 : 0)
                
                // Water spray particles when parting
                if seaParted {
                    WaterSprayView()
                        .position(x: geo.size.width * 0.3, y: geo.size.height * 0.5)
                    WaterSprayView()
                        .position(x: geo.size.width * 0.7, y: geo.size.height * 0.5)
                }
                
                // Enhanced Musa عَلَيْهِ ٱلسَّلَامُ figure
                if showMusa {
                    EnhancedMusaFigure(staffRaised: staffRaised)
                        .scaleEffect(1.2)
                        .offset(y: musaWalking ? -geo.size.height * 0.35 : 0)
                        .position(x: geo.size.width / 2, y: geo.size.height * 0.72)
                        .animation(.easeInOut(duration: 5), value: musaWalking)
                }
                
                // Enhanced Soldiers (Pharaoh's army)
                if showSoldiers {
                    EnhancedSoldiersView()
                        .position(x: geo.size.width / 2, y: geo.size.height * 0.88)
                        .opacity(musaWalking ? 0.3 : 0.7)
                }
                
                // Story Text with better styling
                VStack {
                    if showText1 {
                        EnhancedStoryText(
                            text: "Musa (AS) stood before the sea,\nPharaoh's army closing in...",
                            icon: "exclamationmark.triangle"
                        )
                        .transition(.asymmetric(
                            insertion: .opacity.combined(with: .move(edge: .top)),
                            removal: .opacity
                        ))
                    }
                    
                    if showText2 {
                        EnhancedStoryText(
                            text: "He called upon Allah,\nAl-Fattah — The Opener...",
                            icon: "hands.and.sparkles"
                        )
                        .transition(.asymmetric(
                            insertion: .opacity.combined(with: .scale(scale: 0.9)),
                            removal: .opacity
                        ))
                    }
                    
                    if showText3 {
                        EnhancedStoryText(
                            text: "\"Strike the sea with your staff\"",
                            icon: "bolt.fill",
                            isCommand: true
                        )
                        .transition(.asymmetric(
                            insertion: .opacity.combined(with: .scale(scale: 0.8)),
                            removal: .opacity
                        ))
                    }
                    
                    Spacer()
                }
                .padding(.top, 80)
                
                // Final Message (enhanced)
                if showFinalMessage {
                    FinalMessageView(goldColor: goldColor)
                        .transition(.opacity.combined(with: .scale(scale: 0.85)))
                }
            }
        }
        .ignoresSafeArea()
        .onAppear { startAnimation() }
    }
    
    private func startAnimation() {
        // Continuous animations
        withAnimation(.linear(duration: 3).repeatForever(autoreverses: true)) {
            waveOffset = 30
        }
        withAnimation(.linear(duration: 20).repeatForever(autoreverses: false)) {
            cloudOffset = 100
        }
        withAnimation(.easeInOut(duration: 1.5).repeatForever(autoreverses: true)) {
            starsTwinkle = true
        }
        withAnimation(.easeInOut(duration: 2).repeatForever(autoreverses: true)) {
            lightPulse = true
        }
        
        // Scene sequence
        withAnimation(.easeIn(duration: 2)) { showSky = true }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
            withAnimation(.easeIn(duration: 2)) { showSea = true }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
            withAnimation(.spring(response: 0.8, dampingFraction: 0.7)) {
                showText1 = true
                showSoldiers = true
            }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 4) {
            withAnimation(.spring(response: 0.6, dampingFraction: 0.8)) {
                showMusa = true
            }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 7) {
            withAnimation(.easeOut(duration: 0.5)) { showText1 = false }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 8) {
            withAnimation(.spring(response: 0.8, dampingFraction: 0.7)) {
                showText2 = true
            }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 11) {
            withAnimation(.easeOut(duration: 0.5)) { showText2 = false }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 12) {
            withAnimation(.spring(response: 0.6, dampingFraction: 0.6)) {
                showText3 = true
                staffRaised = true
            }
        }
        
        // THE DRAMATIC MOMENT - Sea Parts!
        DispatchQueue.main.asyncAfter(deadline: .now() + 14) {
            withAnimation(.easeOut(duration: 0.3)) { showText3 = false }
            
            // Haptic feedback
            let impactHeavy = UIImpactFeedbackGenerator(style: .heavy)
            impactHeavy.impactOccurred()
            
            withAnimation(.spring(response: 1.5, dampingFraction: 0.6)) {
                seaParted = true
            }
            withAnimation(.easeIn(duration: 1)) {
                showLight = true
            }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 16) {
            withAnimation(.easeIn(duration: 1.5)) {
                showPath = true
            }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 18) {
            staffRaised = false
            withAnimation(.easeInOut(duration: 5)) {
                musaWalking = true
            }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 24) {
            withAnimation(.easeOut(duration: 1.5)) {
                showMusa = false
                showSoldiers = false
                showSea = false
                showPath = false
                showLight = false
            }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 26) {
            withAnimation(.spring(response: 1, dampingFraction: 0.7)) {
                showFinalMessage = true
            }
        }
    }
}

// MARK: - Enhanced Supporting Views

struct StarsFieldView: View {
    let twinkle: Bool
    
    var body: some View {
        GeometryReader { geo in
            ZStack {
                ForEach(0..<50, id: \.self) { i in
                    let randomX = CGFloat.random(in: 0...1)
                    let randomY = CGFloat.random(in: 0...0.5)
                    let size = CGFloat.random(in: 1...3)
                    
                    Circle()
                        .fill(Color.white)
                        .frame(width: size, height: size)
                        .position(
                            x: geo.size.width * randomX,
                            y: geo.size.height * randomY
                        )
                        .opacity(twinkle && i % 3 == 0 ? 0.4 : 1)
                }
            }
        }
    }
}

struct CloudsView: View {
    let offset: CGFloat
    
    var body: some View {
        GeometryReader { geo in
            ZStack {
                ForEach(0..<3, id: \.self) { i in
                    Ellipse()
                        .fill(Color.white.opacity(0.1))
                        .frame(width: 120, height: 40)
                        .offset(x: offset + CGFloat(i * 80), y: CGFloat(i * 30))
                        .position(x: geo.size.width * 0.3, y: 120)
                }
            }
        }
    }
}

struct LightBeamShape: Shape {
    func path(in rect: CGRect) -> Path {
        var path = Path()
        path.move(to: CGPoint(x: rect.midX - 20, y: 0))
        path.addLine(to: CGPoint(x: rect.midX + 20, y: 0))
        path.addLine(to: CGPoint(x: rect.maxX, y: rect.maxY))
        path.addLine(to: CGPoint(x: rect.minX, y: rect.maxY))
        path.closeSubpath()
        return path
    }
}

struct LightParticlesView: View {
    @State private var particleOffset: CGFloat = 0
    
    var body: some View {
        GeometryReader { geo in
            ZStack {
                ForEach(0..<20, id: \.self) { i in
                    Circle()
                        .fill(Color.white.opacity(Double.random(in: 0.3...0.7)))
                        .frame(width: CGFloat.random(in: 2...5), height: CGFloat.random(in: 2...5))
                        .position(
                            x: geo.size.width * CGFloat.random(in: 0.2...0.8),
                            y: geo.size.height * CGFloat.random(in: 0...1) + particleOffset
                        )
                }
            }
        }
        .onAppear {
            withAnimation(.linear(duration: 4).repeatForever(autoreverses: false)) {
                particleOffset = -50
            }
        }
    }
}

struct SeaFloorView: View {
    let geo: GeometryProxy
    let revealed: Bool
    
    var body: some View {
        ZStack {
            // Sandy bottom
            Rectangle()
                .fill(
                    LinearGradient(
                        colors: [
                            Color(red: 0.55, green: 0.45, blue: 0.35),
                            Color(red: 0.45, green: 0.38, blue: 0.28),
                            Color(red: 0.35, green: 0.28, blue: 0.2)
                        ],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                )
                .frame(width: revealed ? 110 : 0, height: geo.size.height * 0.48)
                .position(x: geo.size.width / 2, y: geo.size.height * 0.74)
            
            // Rocks/pebbles
            if revealed {
                ForEach(0..<8, id: \.self) { i in
                    Ellipse()
                        .fill(Color(red: 0.3, green: 0.25, blue: 0.2))
                        .frame(width: CGFloat.random(in: 5...12), height: CGFloat.random(in: 3...8))
                        .position(
                            x: geo.size.width / 2 + CGFloat.random(in: -40...40),
                            y: geo.size.height * 0.75 + CGFloat(i * 15)
                        )
                }
            }
        }
        .animation(.easeIn(duration: 1), value: revealed)
    }
}

struct EnhancedSeaWall: View {
    let isLeft: Bool
    let geo: GeometryProxy
    let parted: Bool
    let waveOffset: CGFloat
    
    var body: some View {
        ZStack {
            // Deep water layer
            WaveShape(isLeft: isLeft, waveOffset: waveOffset)
                .fill(
                    LinearGradient(
                        colors: [
                            Color(red: 0.05, green: 0.2, blue: 0.4),
                            Color(red: 0.03, green: 0.12, blue: 0.3),
                            Color(red: 0.02, green: 0.08, blue: 0.2)
                        ],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                )
                .frame(width: parted ? geo.size.width * 0.38 : geo.size.width * 0.58, height: geo.size.height * 0.55)
            
            // Surface highlight
            WaveShape(isLeft: isLeft, waveOffset: waveOffset + 5)
                .stroke(
                    LinearGradient(
                        colors: [Color.white.opacity(0.4), Color.white.opacity(0.1)],
                        startPoint: .top,
                        endPoint: .bottom
                    ),
                    lineWidth: 2
                )
                .frame(width: parted ? geo.size.width * 0.38 : geo.size.width * 0.58, height: geo.size.height * 0.55)
            
            // Foam at top
            WaveShape(isLeft: isLeft, waveOffset: waveOffset + 10)
                .stroke(Color.white.opacity(0.6), lineWidth: 4)
                .blur(radius: 2)
                .frame(width: parted ? geo.size.width * 0.38 : geo.size.width * 0.58, height: geo.size.height * 0.55)
        }
        .offset(x: isLeft ?
            (parted ? -geo.size.width * 0.18 : geo.size.width * 0.02) :
            (parted ? geo.size.width * 0.18 : -geo.size.width * 0.02)
        )
        .position(
            x: isLeft ? geo.size.width * 0.28 : geo.size.width * 0.72,
            y: geo.size.height * 0.62
        )
        .animation(.spring(response: 2, dampingFraction: 0.7), value: parted)
    }
}

struct WaterSprayView: View {
    @State private var spray = false
    
    var body: some View {
        ZStack {
            ForEach(0..<15, id: \.self) { i in
                Circle()
                    .fill(Color.white.opacity(0.5))
                    .frame(width: CGFloat.random(in: 2...6), height: CGFloat.random(in: 2...6))
                    .offset(
                        x: spray ? CGFloat.random(in: -40...40) : 0,
                        y: spray ? CGFloat.random(in: -60...60) : 0
                    )
            }
        }
        .onAppear {
            withAnimation(.easeOut(duration: 2).repeatForever(autoreverses: true)) {
                spray = true
            }
        }
    }
}

struct EnhancedMusaFigure: View {
    let staffRaised: Bool
    
    var body: some View {
        VStack(spacing: 0) {
            // Head with turban
            ZStack {
                // Turban
                Ellipse()
                    .fill(Color(red: 0.95, green: 0.95, blue: 0.9))
                    .frame(width: 28, height: 18)
                    .offset(y: -3)
                
                // Face
                Circle()
                    .fill(Color(red: 0.82, green: 0.68, blue: 0.52))
                    .frame(width: 22, height: 22)
                
                // Beard
                Ellipse()
                    .fill(Color(red: 0.3, green: 0.25, blue: 0.2))
                    .frame(width: 14, height: 10)
                    .offset(y: 8)
            }
            
            // Robe
            ZStack {
                // Main robe
                RoundedRectangle(cornerRadius: 8)
                    .fill(
                        LinearGradient(
                            colors: [
                                Color(red: 0.85, green: 0.82, blue: 0.78),
                                Color(red: 0.75, green: 0.72, blue: 0.68),
                                Color(red: 0.65, green: 0.62, blue: 0.58)
                            ],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )
                    .frame(width: 35, height: 55)
                
                // Robe detail
                Rectangle()
                    .fill(Color(red: 0.6, green: 0.5, blue: 0.4).opacity(0.3))
                    .frame(width: 2, height: 50)
            }
            
            // Staff
            Rectangle()
                .fill(
                    LinearGradient(
                        colors: [
                            Color(red: 0.5, green: 0.35, blue: 0.2),
                            Color(red: 0.4, green: 0.28, blue: 0.15)
                        ],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .frame(width: 4, height: 65)
                .rotationEffect(.degrees(staffRaised ? -30 : 0), anchor: .bottom)
                .offset(x: 22, y: -55)
                .animation(.spring(response: 0.5, dampingFraction: 0.6), value: staffRaised)
        }
        .shadow(color: .black.opacity(0.4), radius: 8, x: 3, y: 3)
    }
}

struct EnhancedSoldiersView: View {
    var body: some View {
        HStack(spacing: 5) {
            ForEach(0..<8, id: \.self) { i in
                SoldierFigure(hasSpear: i % 2 == 0)
                    .scaleEffect(0.8 - CGFloat(i) * 0.05)
            }
        }
    }
}

struct SoldierFigure: View {
    let hasSpear: Bool
    
    var body: some View {
        VStack(spacing: 0) {
            // Helmet
            ZStack {
                RoundedRectangle(cornerRadius: 4)
                    .fill(Color(red: 0.45, green: 0.35, blue: 0.25))
                    .frame(width: 12, height: 10)
                Circle()
                    .fill(Color(red: 0.6, green: 0.45, blue: 0.35))
                    .frame(width: 10, height: 10)
                    .offset(y: 2)
            }
            
            // Armor/body
            RoundedRectangle(cornerRadius: 3)
                .fill(Color(red: 0.35, green: 0.25, blue: 0.2))
                .frame(width: 14, height: 20)
            
            // Spear
            if hasSpear {
                Rectangle()
                    .fill(Color(red: 0.5, green: 0.4, blue: 0.3))
                    .frame(width: 2, height: 25)
                    .offset(x: 8, y: -20)
            }
        }
    }
}

struct EnhancedStoryText: View {
    let text: String
    let icon: String
    var isCommand: Bool = false
    
    var body: some View {
        VStack(spacing: 12) {
            Image(systemName: icon)
                .font(.system(size: isCommand ? 28 : 22))
                .foregroundColor(isCommand ? Color(red: 0.85, green: 0.75, blue: 0.55) : .white.opacity(0.7))
            
            Text(text)
                .font(.system(size: isCommand ? 22 : 18, weight: isCommand ? .medium : .light, design: .serif))
                .foregroundColor(.white)
                .multilineTextAlignment(.center)
                .lineSpacing(8)
                .italic(isCommand)
        }
        .padding(.horizontal, 35)
        .padding(.vertical, 25)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(Color.black.opacity(0.6))
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .stroke(
                            isCommand ?
                            Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.5) :
                            Color.white.opacity(0.2),
                            lineWidth: 1
                        )
                )
        )
        .shadow(color: .black.opacity(0.3), radius: 10)
    }
}

struct FinalMessageView: View {
    let goldColor: Color
    @State private var glowPulse = false
    
    var body: some View {
        VStack(spacing: 25) {
            // Decorative top
            Image(systemName: "sparkle")
                .font(.system(size: 24))
                .foregroundColor(goldColor)
            
            // Arabic name with glow
            Text("ٱلْفَتَّاحُ")
                .font(.system(size: 56, weight: .bold, design: .serif))
                .foregroundColor(.white)
                .shadow(color: goldColor.opacity(glowPulse ? 0.8 : 0.4), radius: glowPulse ? 30 : 20)
            
            // Transliteration
            HStack(spacing: 15) {
                Rectangle().fill(goldColor.opacity(0.5)).frame(width: 40, height: 1)
                Text("Al-Fattah")
                    .font(.system(size: 26, weight: .medium, design: .serif))
                    .foregroundColor(goldColor)
                Rectangle().fill(goldColor.opacity(0.5)).frame(width: 40, height: 1)
            }
            
            // Meaning
            Text("The Opener")
                .font(.system(size: 20, weight: .light, design: .serif))
                .foregroundColor(.white.opacity(0.8))
            
            // Message
            Text("The One who opens ways\nwhere there seem to be none")
                .font(.system(size: 17, weight: .light, design: .serif))
                .foregroundColor(.white.opacity(0.7))
                .multilineTextAlignment(.center)
                .lineSpacing(6)
                .padding(.top, 10)
        }
        .padding(40)
        .background(
            RoundedRectangle(cornerRadius: 24)
                .fill(Color.black.opacity(0.7))
                .overlay(
                    RoundedRectangle(cornerRadius: 24)
                        .stroke(goldColor.opacity(0.3), lineWidth: 1)
                )
        )
        .onAppear {
            withAnimation(.easeInOut(duration: 2).repeatForever(autoreverses: true)) {
                glowPulse = true
            }
        }
    }
}

struct WaveShape: Shape {
    let isLeft: Bool
    var waveOffset: CGFloat
    var animatableData: CGFloat { get { waveOffset } set { waveOffset = newValue } }
    
    func path(in rect: CGRect) -> Path {
        var path = Path()
        let startX = isLeft ? rect.maxX : rect.minX
        let endX = isLeft ? rect.minX : rect.maxX
        
        path.move(to: CGPoint(x: startX, y: rect.minY))
        
        // Create more detailed wavy edge
        for y in stride(from: 0, through: rect.height, by: 5) {
            let wave1 = sin((y / 25) + waveOffset / 8) * 12
            let wave2 = sin((y / 40) + waveOffset / 12) * 8
            let combinedWave = wave1 + wave2
            let x = isLeft ? startX - combinedWave - 25 : startX + combinedWave + 25
            path.addLine(to: CGPoint(x: x, y: y))
        }
        
        path.addLine(to: CGPoint(x: endX, y: rect.maxY))
        path.addLine(to: CGPoint(x: endX, y: rect.minY))
        path.closeSubpath()
        
        return path
    }
}

#Preview {
    SeaPartingView()
}
