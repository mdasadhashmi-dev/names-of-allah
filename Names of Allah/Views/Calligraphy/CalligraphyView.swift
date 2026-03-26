// CalligraphyView.swift - Artistic Arabic calligraphy display with animation
import SwiftUI

struct CalligraphyView: View {
    let name: AllahName
    @StateObject private var theme = ThemeManager.shared
    @Environment(\.dismiss) private var dismiss
    
    @State private var animationProgress: CGFloat = 0
    @State private var showMeaning = false
    @State private var showActions = false
    @State private var selectedBackground: CalligraphyBackground = .dark
    @State private var showingShareSheet = false
    @State private var renderedImage: UIImage?
    
    var body: some View {
        ZStack {
            // Background
            selectedBackground.backgroundView(primaryColor: theme.primaryColor)
                .ignoresSafeArea()
            
            VStack(spacing: 0) {
                // Top bar
                HStack {
                    Button(action: { dismiss() }) {
                        Image(systemName: "xmark.circle.fill")
                            .font(.system(size: 32))
                            .foregroundColor(.white.opacity(0.6))
                    }
                    
                    Spacer()
                    
                    // Background selector
                    Menu {
                        ForEach(CalligraphyBackground.allCases) { bg in
                            Button(action: { 
                                withAnimation(.easeInOut(duration: 0.5)) {
                                    selectedBackground = bg 
                                }
                            }) {
                                Label(bg.rawValue, systemImage: bg.icon)
                            }
                        }
                    } label: {
                        Image(systemName: "paintpalette.fill")
                            .font(.system(size: 24))
                            .foregroundColor(.white.opacity(0.8))
                            .padding(12)
                            .background(Circle().fill(Color.white.opacity(0.1)))
                    }
                }
                .padding(.horizontal, 20)
                .padding(.top, 20)
                
                Spacer()
                
                // Main calligraphy display
                calligraphyDisplay
                
                Spacer()
                
                // Bottom actions
                if showActions {
                    actionButtons
                        .transition(.move(edge: .bottom).combined(with: .opacity))
                }
            }
        }
        .navigationBarHidden(true)
        .onAppear {
            startAnimation()
        }
    }
    
    // MARK: - Calligraphy Display
    private var calligraphyDisplay: some View {
        VStack(spacing: 40) {
            // Number badge
            Text("#\(name.number)")
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(.white.opacity(0.5))
                .padding(.horizontal, 16)
                .padding(.vertical, 8)
                .background(Capsule().stroke(Color.white.opacity(0.2), lineWidth: 1))
                .opacity(showMeaning ? 1 : 0)
            
            // Arabic Name with animation
            ZStack {
                // Glow effect
                Text(name.arabic)
                    .font(.system(size: 80, weight: .bold, design: .serif))
                    .foregroundColor(theme.primaryColor.opacity(0.3))
                    .blur(radius: 20)
                    .opacity(animationProgress)
                
                // Main text with mask animation
                Text(name.arabic)
                    .font(.system(size: 80, weight: .bold, design: .serif))
                    .foregroundColor(.white)
                    .mask(
                        GeometryReader { geo in
                            Rectangle()
                                .frame(width: geo.size.width * animationProgress)
                                .frame(maxWidth: .infinity, alignment: .trailing)
                        }
                    )
            }
            .frame(height: 120)
            
            // Transliteration and meaning
            VStack(spacing: 12) {
                Text(name.transliteration)
                    .font(.system(size: 28, weight: .medium, design: .serif))
                    .foregroundColor(theme.primaryColor)
                    .opacity(showMeaning ? 1 : 0)
                    .offset(y: showMeaning ? 0 : 20)
                
                Text(name.meaning)
                    .font(.system(size: 20, weight: .light))
                    .foregroundColor(.white.opacity(0.8))
                    .opacity(showMeaning ? 1 : 0)
                    .offset(y: showMeaning ? 0 : 20)
            }
            .animation(.easeOut(duration: 0.6).delay(0.3), value: showMeaning)
        }
        .padding(.horizontal, 40)
    }
    
    // MARK: - Action Buttons
    private var actionButtons: some View {
        VStack(spacing: 16) {
            // Replay animation button
            Button(action: {
                replayAnimation()
            }) {
                HStack(spacing: 10) {
                    Image(systemName: "arrow.counterclockwise")
                    Text("Replay Animation")
                }
                .font(.system(size: 16, weight: .medium))
                .foregroundColor(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 16)
                .background(
                    RoundedRectangle(cornerRadius: 14)
                        .fill(Color.white.opacity(0.1))
                        .overlay(
                            RoundedRectangle(cornerRadius: 14)
                                .stroke(Color.white.opacity(0.2), lineWidth: 1)
                        )
                )
            }
            
            // Save as wallpaper button
            Button(action: {
                saveAsWallpaper()
            }) {
                HStack(spacing: 10) {
                    Image(systemName: "photo.on.rectangle")
                    Text("Save as Wallpaper")
                }
                .font(.system(size: 16, weight: .semibold))
                .foregroundColor(Color(red: 0.1, green: 0.1, blue: 0.15))
                .frame(maxWidth: .infinity)
                .padding(.vertical, 16)
                .background(
                    RoundedRectangle(cornerRadius: 14)
                        .fill(theme.primaryColor)
                )
            }
            
            // Share button
            Button(action: {
                shareCalligraphy()
            }) {
                HStack(spacing: 10) {
                    Image(systemName: "square.and.arrow.up")
                    Text("Share")
                }
                .font(.system(size: 16, weight: .medium))
                .foregroundColor(theme.primaryColor)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 16)
                .background(
                    RoundedRectangle(cornerRadius: 14)
                        .stroke(theme.primaryColor, lineWidth: 2)
                )
            }
        }
        .padding(.horizontal, 20)
        .padding(.bottom, 40)
    }
    
    // MARK: - Animation Functions
    private func startAnimation() {
        animationProgress = 0
        showMeaning = false
        showActions = false
        
        // Animate the Arabic text writing
        withAnimation(.easeInOut(duration: 1.5)) {
            animationProgress = 1
        }
        
        // Show meaning after text animation
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.2) {
            showMeaning = true
        }
        
        // Show actions
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.8) {
            withAnimation(.easeOut(duration: 0.4)) {
                showActions = true
            }
        }
    }
    
    private func replayAnimation() {
        showMeaning = false
        showActions = false
        animationProgress = 0
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
            startAnimation()
        }
    }
    
    // MARK: - Wallpaper Functions
    private func saveAsWallpaper() {
        let wallpaperView = WallpaperView(
            name: name,
            background: selectedBackground,
            primaryColor: theme.primaryColor
        )
        
        let renderer = ImageRenderer(content: wallpaperView)
        renderer.scale = 3.0 // High resolution
        
        if let image = renderer.uiImage {
            UIImageWriteToSavedPhotosAlbum(image, nil, nil, nil)
            
            // Haptic feedback
            let generator = UINotificationFeedbackGenerator()
            generator.notificationOccurred(.success)
        }
    }
    
    private func shareCalligraphy() {
        let wallpaperView = WallpaperView(
            name: name,
            background: selectedBackground,
            primaryColor: theme.primaryColor
        )
        
        let renderer = ImageRenderer(content: wallpaperView)
        renderer.scale = 3.0
        
        if let image = renderer.uiImage {
            let activityVC = UIActivityViewController(
                activityItems: [image, "\(name.transliteration) - \(name.meaning)"],
                applicationActivities: nil
            )
            
            if let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
               let window = windowScene.windows.first,
               let rootVC = window.rootViewController {
                rootVC.present(activityVC, animated: true)
            }
        }
    }
}

// MARK: - Calligraphy Background Styles
enum CalligraphyBackground: String, CaseIterable, Identifiable {
    case dark = "Dark"
    case gradient = "Gradient"
    case geometric = "Geometric"
    case stars = "Stars"
    
    var id: String { rawValue }
    
    var icon: String {
        switch self {
        case .dark: return "moon.fill"
        case .gradient: return "circle.lefthalf.filled"
        case .geometric: return "hexagon.fill"
        case .stars: return "sparkles"
        }
    }
    
    @ViewBuilder
    func backgroundView(primaryColor: Color) -> some View {
        switch self {
        case .dark:
            Color.black
            
        case .gradient:
            LinearGradient(
                colors: [
                    Color(red: 0.1, green: 0.05, blue: 0.15),
                    primaryColor.opacity(0.3),
                    Color.black
                ],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
            
        case .geometric:
            ZStack {
                Color.black
                GeometricPattern(color: primaryColor.opacity(0.1))
            }
            
        case .stars:
            ZStack {
                LinearGradient(
                    colors: [Color(red: 0.05, green: 0.05, blue: 0.15), Color.black],
                    startPoint: .top,
                    endPoint: .bottom
                )
                StarsPattern(primaryColor: primaryColor)
            }
        }
    }
}

// MARK: - Geometric Pattern
struct GeometricPattern: View {
    let color: Color
    
    var body: some View {
        Canvas { context, size in
            let spacing: CGFloat = 60
            
            for x in stride(from: 0, through: size.width, by: spacing) {
                for y in stride(from: 0, through: size.height, by: spacing) {
                    let rect = CGRect(x: x - 15, y: y - 15, width: 30, height: 30)
                    let path = Path { p in
                        p.addLines([
                            CGPoint(x: rect.midX, y: rect.minY),
                            CGPoint(x: rect.maxX, y: rect.midY),
                            CGPoint(x: rect.midX, y: rect.maxY),
                            CGPoint(x: rect.minX, y: rect.midY),
                        ])
                        p.closeSubpath()
                    }
                    context.stroke(path, with: .color(color), lineWidth: 1)
                }
            }
        }
    }
}

// MARK: - Stars Pattern
struct StarsPattern: View {
    let primaryColor: Color
    @State private var twinkle = false
    
    // Pre-computed star positions for consistent rendering
    private let starPositions: [(x: CGFloat, y: CGFloat, size: CGFloat)] = {
        var positions: [(CGFloat, CGFloat, CGFloat)] = []
        var seed = 42
        
        for _ in 0..<100 {
            seed = (seed &* 1103515245 &+ 12345) & 0x7fffffff
            let x = CGFloat(seed % 1000) / 1000.0
            seed = (seed &* 1103515245 &+ 12345) & 0x7fffffff
            let y = CGFloat(seed % 1000) / 1000.0
            seed = (seed &* 1103515245 &+ 12345) & 0x7fffffff
            let size = 1.0 + CGFloat(seed % 20) / 10.0
            
            positions.append((x, y, size))
        }
        return positions
    }()
    
    var body: some View {
        Canvas { context, size in
            for star in starPositions {
                let x = star.x * size.width
                let y = star.y * size.height
                let rect = CGRect(x: x, y: y, width: star.size, height: star.size)
                context.fill(Ellipse().path(in: rect), with: .color(.white.opacity(0.6)))
            }
        }
        .onAppear {
            withAnimation(.easeInOut(duration: 2).repeatForever(autoreverses: true)) {
                twinkle.toggle()
            }
        }
    }
}

// MARK: - Wallpaper View for Export
struct WallpaperView: View {
    let name: AllahName
    let background: CalligraphyBackground
    let primaryColor: Color
    
    var body: some View {
        ZStack {
            background.backgroundView(primaryColor: primaryColor)
            
            VStack(spacing: 30) {
                Spacer()
                
                // Arabic name
                Text(name.arabic)
                    .font(.system(size: 100, weight: .bold, design: .serif))
                    .foregroundColor(.white)
                    .shadow(color: primaryColor.opacity(0.5), radius: 20)
                
                // Transliteration
                Text(name.transliteration)
                    .font(.system(size: 32, weight: .medium, design: .serif))
                    .foregroundColor(primaryColor)
                
                // Meaning
                Text(name.meaning)
                    .font(.system(size: 24, weight: .light))
                    .foregroundColor(.white.opacity(0.8))
                
                Spacer()
                
                // Subtle branding
                Text("Names of Allah")
                    .font(.system(size: 12, weight: .light))
                    .foregroundColor(.white.opacity(0.3))
                    .padding(.bottom, 60)
            }
            .padding(.horizontal, 40)
        }
        .frame(width: 390, height: 844) // iPhone wallpaper size
    }
}

#Preview {
    CalligraphyView(name: AllahNamesDatabase.all[0])
}

