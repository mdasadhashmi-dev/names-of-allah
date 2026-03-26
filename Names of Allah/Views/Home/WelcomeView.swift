//
//  WelcomeView.swift
//  Names of Allah
//
//  Created by Mohammed Asad Hashmi on 08/12/2025.
//

import SwiftUI

struct WelcomeView: View {
    @State private var showContent = false
    @State private var navigateToNames = false
    @State private var showNotificationPrompt = false
    @StateObject private var notificationManager = NotificationManager.shared
    
     // Animation states
     @State private var glowPulse = false
     @State private var floatingOffset: CGFloat = 0
     @State private var sparkleRotation: Double = 0
     private let goldColor = Color(red: 0.85, green: 0.75, blue: 0.55)
    
    var body: some View {
        NavigationStack {
            ZStack {
                // Animated background
                animatedBackground
                
                // Subtle ambient lights
                AmbientLightsView()
                
                // Main content
                ScrollView(showsIndicators: false) {
                    VStack(spacing: 0) {
                        Spacer().frame(height: 60)
                        
                        // Animated Logo Section
                        logoSection
                        
                        Spacer().frame(height: 30)
                        
                        // Title Section
                        titleSection
                        
                        Spacer().frame(height: 40)
                        
                        // Hadith Card
                        hadithCard
                        
                        Spacer().frame(height: 30)
                        
                        // Subtitle
                        subtitleSection
                            .transaction { transaction in
                                transaction.animation = nil
                            }
                        
                        Spacer().frame(height: 50)
                        
                        // Begin Button
                        beginButton
                            .transaction { transaction in
                                transaction.animation = nil
                            }
                        
                        Spacer().frame(height: 40)
                        
                        // Footer
                        footerSection
                    }
                }
            }
            .onAppear {
                startAnimations()
            }
            .navigationDestination(isPresented: $navigateToNames) {
                NamesListView()
            }
            .alert("Daily Spiritual Reminder", isPresented: $showNotificationPrompt) {
                Button("Enable Notifications") {
                    notificationManager.requestPermission { granted in
                        UserDefaults.standard.set(true, forKey: "hasSeenNotificationPrompt")
                        navigateToNames = true
                    }
                }
                Button("Maybe Later") {
                    UserDefaults.standard.set(true, forKey: "hasSeenNotificationPrompt")
                    navigateToNames = true
                }
            } message: {
                Text("Receive a daily notification featuring one of Allah's beautiful names with a reflection prompt to deepen your spiritual journey.")
            }
        }
    }
    
    // MARK: - Animated Background
    private var animatedBackground: some View {
        ZStack {
            // Base gradient
            LinearGradient(
                colors: [
                    Color(red: 0.03, green: 0.05, blue: 0.15),
                    Color(red: 0.02, green: 0.02, blue: 0.08),
                    Color.black
                ],
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()
            
            // Animated glow orb
            GeometryReader { geo in
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                goldColor.opacity(glowPulse ? 0.25 : 0.15),
                                Color(red: 0.2, green: 0.3, blue: 0.5).opacity(0.1),
                                Color.clear
                            ],
                            center: .center,
                            startRadius: 0,
                            endRadius: geo.size.width * 0.7
                        )
                    )
                    .frame(width: geo.size.width * 1.5, height: geo.size.width * 1.5)
                    .position(x: geo.size.width / 2, y: geo.size.height * 0.25)
                    .blur(radius: 30)
            }
            
            // Geometric pattern overlay
            GeometricPatternOverlay()
                .opacity(0.03)
        }
    }
    
    // MARK: - Logo Section
    private var logoSection: some View {
        ZStack {
            // Outer glow rings
            ForEach(0..<3) { i in
                Circle()
                    .stroke(goldColor.opacity(0.1 - Double(i) * 0.03), lineWidth: 1)
                    .frame(width: CGFloat(100 + i * 40), height: CGFloat(100 + i * 40))
                    .scaleEffect(glowPulse ? 1.1 : 1.0)
                    .opacity(showContent ? 1 : 0)
            }
            
            // Central ornament
            ZStack {
                // Glow
                Image(systemName: "sparkle")
                    .font(.system(size: 50, weight: .light))
                    .foregroundColor(goldColor)
                    .blur(radius: 15)
                    .opacity(glowPulse ? 0.8 : 0.5)
                
                // Main sparkle
                Image(systemName: "sparkle")
                    .font(.system(size: 50, weight: .light))
                    .foregroundColor(goldColor)
                    .rotationEffect(.degrees(sparkleRotation))
            }
            .scaleEffect(showContent ? 1 : 0.3)
            .opacity(showContent ? 1 : 0)
            .offset(y: floatingOffset)
        }
        .frame(height: 150)
    }
    
    // MARK: - Title Section
    private var titleSection: some View {
        VStack(spacing: 20) {
            // Arabic title - clean and elegant
            Text("أسماء الله الحسنى")
                .font(.system(size: 44, weight: .bold, design: .serif))
                .foregroundColor(.white)
                .shadow(color: goldColor.opacity(0.3), radius: 20, x: 0, y: 0)
                .opacity(showContent ? 1 : 0)
                .scaleEffect(showContent ? 1 : 0.9)
            
            // English title
            Text("The Beautiful Names of Allah")
                .font(.system(size: 22, weight: .medium, design: .serif))
                .foregroundColor(.white.opacity(0.9))
                .opacity(showContent ? 1 : 0)
                .offset(y: showContent ? 0 : 15)
            
            // Decorative divider - simple and elegant
            HStack(spacing: 16) {
                Rectangle()
                    .fill(
                        LinearGradient(
                            colors: [goldColor.opacity(0.0), goldColor.opacity(0.5)],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(width: 50, height: 1)
                
                Image(systemName: "diamond.fill")
                    .font(.system(size: 6))
                    .foregroundColor(goldColor)
                
                Rectangle()
                    .fill(
                        LinearGradient(
                            colors: [goldColor.opacity(0.5), goldColor.opacity(0.0)],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(width: 50, height: 1)
            }
            .opacity(showContent ? 1 : 0)
        }
    }
    
    // MARK: - Hadith Card
    private var hadithCard: some View {
        VStack(spacing: 20) {
            // Quote icon
            Image(systemName: "quote.opening")
                .font(.system(size: 24))
                .foregroundColor(goldColor.opacity(0.5))
            
            Text("The Prophet ﷺ said:")
                .font(.system(size: 14, weight: .semibold, design: .serif))
                .foregroundColor(goldColor)
                .tracking(2)
            
            Text("\"Indeed, Allah has ninety-nine names; whoever ḥaṣiyahā (memorizes, learns, understands, and acts upon them) will enter Jannah.\"")
                .font(.system(size: 17, weight: .regular, design: .serif))
                .foregroundColor(.white.opacity(0.9))
                .multilineTextAlignment(.center)
                .lineSpacing(8)
                .fixedSize(horizontal: false, vertical: true)
            
            Text("— Sahih al-Bukhari & Muslim")
                .font(.system(size: 12, weight: .light, design: .serif))
                .foregroundColor(.white.opacity(0.5))
                .italic()
        }
        .padding(.horizontal, 32)
        .padding(.vertical, 32)
        .background(
            ZStack {
                // Glass morphism effect
                RoundedRectangle(cornerRadius: 24)
                    .fill(.ultraThinMaterial.opacity(0.3))
                
                RoundedRectangle(cornerRadius: 24)
                    .fill(
                        LinearGradient(
                            colors: [
                                Color.white.opacity(0.1),
                                Color.white.opacity(0.02)
                            ],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                
                // Animated border
                RoundedRectangle(cornerRadius: 24)
                    .stroke(
                        AngularGradient(
                            colors: [goldColor.opacity(0.5), goldColor.opacity(0.1), goldColor.opacity(0.3), goldColor.opacity(0.1), goldColor.opacity(0.5)],
                            center: .center,
                            startAngle: .degrees(sparkleRotation),
                            endAngle: .degrees(sparkleRotation + 360)
                        ),
                        lineWidth: 1.5
                    )
            }
        )
        .shadow(color: goldColor.opacity(0.15), radius: 30, x: 0, y: 15)
        .padding(.horizontal, 24)
        .opacity(showContent ? 1 : 0)
        .offset(y: showContent ? 0 : 40)
        .scaleEffect(showContent ? 1 : 0.95)
    }
    
     // MARK: - Subtitle
     private var subtitleSection: some View {
         VStack(spacing: 8) {
             Text("Embark on a visual journey")
                 .font(.system(size: 16, weight: .light, design: .serif))
             Text("of understanding and reflection")
                 .font(.system(size: 16, weight: .light, design: .serif))
         }
         .foregroundColor(.white.opacity(0.6))
         .multilineTextAlignment(.center)
         .opacity(showContent ? 1 : 0)
         .animation(nil, value: showContent)
     }
    
    // MARK: - Begin Button
    private var beginButton: some View {
        Button(action: {
            let generator = UIImpactFeedbackGenerator(style: .medium)
            generator.impactOccurred()
            
            let hasSeenNotificationPrompt = UserDefaults.standard.bool(forKey: "hasSeenNotificationPrompt")
            if !hasSeenNotificationPrompt {
                showNotificationPrompt = true
            } else {
                navigateToNames = true
            }
        }) {
            HStack(spacing: 10) {
                Text("Begin Your Journey")
                    .font(.system(size: 17, weight: .semibold, design: .serif))
                
                Image(systemName: "arrow.right")
                    .font(.system(size: 14, weight: .semibold))
            }
            .foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1))
            .frame(maxWidth: .infinity)
            .padding(.vertical, 18)
            .background(
                LinearGradient(
                    colors: [
                        Color(red: 0.9, green: 0.82, blue: 0.65),
                        goldColor
                    ],
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
            )
            .clipShape(RoundedRectangle(cornerRadius: 28))
        }
        .padding(.horizontal, 40)
        .animation(nil, value: showContent)
    }
    
    // MARK: - Footer
    private var footerSection: some View {
        HStack(spacing: 8) {
            Image(systemName: "star.fill")
                .font(.system(size: 8))
                .foregroundColor(goldColor.opacity(0.4))
            
            Text("99 Names")
                .font(.system(size: 12, weight: .light))
                .foregroundColor(.white.opacity(0.3))
            
            Text("•")
                .foregroundColor(.white.opacity(0.2))
            
            Text("Spiritual Journey")
                .font(.system(size: 12, weight: .light))
                .foregroundColor(.white.opacity(0.3))
            
            Image(systemName: "star.fill")
                .font(.system(size: 8))
                .foregroundColor(goldColor.opacity(0.4))
        }
        .padding(.bottom, 30)
        .opacity(showContent ? 1 : 0)
    }
    
     // MARK: - Animations
     private func startAnimations() {
         // Staggered content reveal
         withAnimation(.easeOut(duration: 1.2).delay(0.3)) {
             showContent = true
         }
         
         // Glow pulse animation
         withAnimation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true)) {
             glowPulse = true
         }
         
         // Floating animation
         withAnimation(.easeInOut(duration: 3).repeatForever(autoreverses: true)) {
             floatingOffset = -8
         }
         
         // Sparkle rotation
         withAnimation(.linear(duration: 20).repeatForever(autoreverses: false)) {
             sparkleRotation = 360
         }
     }
}

// MARK: - Ambient Lights View (subtle, non-distracting)
struct AmbientLightsView: View {
    @State private var animate = false
    private let goldColor = Color(red: 0.85, green: 0.75, blue: 0.55)
    
    var body: some View {
        GeometryReader { geo in
            ZStack {
                // Top right soft glow
                Circle()
                    .fill(goldColor.opacity(0.08))
                    .frame(width: 200, height: 200)
                    .blur(radius: 60)
                    .position(x: geo.size.width * 0.85, y: geo.size.height * 0.15)
                    .opacity(animate ? 0.8 : 0.4)
                
                // Bottom left soft glow
                Circle()
                    .fill(Color.blue.opacity(0.05))
                    .frame(width: 250, height: 250)
                    .blur(radius: 80)
                    .position(x: geo.size.width * 0.1, y: geo.size.height * 0.85)
                    .opacity(animate ? 0.6 : 0.3)
            }
            .onAppear {
                withAnimation(.easeInOut(duration: 4).repeatForever(autoreverses: true)) {
                    animate = true
                }
            }
        }
    }
}

// MARK: - Geometric Pattern Overlay
struct GeometricPatternOverlay: View {
    var body: some View {
        Canvas { context, size in
            let spacing: CGFloat = 80
            let goldColor = Color(red: 0.85, green: 0.75, blue: 0.55)
            
            for x in stride(from: 0, through: size.width + spacing, by: spacing) {
                for y in stride(from: 0, through: size.height + spacing, by: spacing) {
                    // Create 8-pointed star pattern
                    let center = CGPoint(x: x, y: y)
                    let starPath = createIslamicStar(center: center, radius: 15)
                    context.stroke(starPath, with: .color(goldColor), lineWidth: 0.5)
                }
            }
        }
    }
    
    private func createIslamicStar(center: CGPoint, radius: CGFloat) -> Path {
        var path = Path()
        let points = 8
        
        for i in 0..<points {
            let angle = (Double(i) / Double(points)) * 2 * .pi - .pi / 2
            let x = center.x + CGFloat(cos(angle)) * radius
            let y = center.y + CGFloat(sin(angle)) * radius
            
            if i == 0 {
                path.move(to: CGPoint(x: x, y: y))
            } else {
                path.addLine(to: CGPoint(x: x, y: y))
            }
        }
        path.closeSubpath()
        
        return path
    }
}

#Preview {
    WelcomeView()
}
