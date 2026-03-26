// ThemeManager.swift - Manages app themes, color schemes, and accessibility
import SwiftUI
import Combine

// MARK: - App Color Scheme
enum AppColorScheme: String, CaseIterable, Identifiable {
    case gold = "Gold"
    case blue = "Blue"
    case green = "Green"
    case purple = "Purple"
    
    var id: String { rawValue }
    
    var primaryColor: Color {
        switch self {
        case .gold: return Color(red: 0.85, green: 0.75, blue: 0.55)
        case .blue: return Color(red: 0.4, green: 0.6, blue: 0.9)
        case .green: return Color(red: 0.4, green: 0.8, blue: 0.6)
        case .purple: return Color(red: 0.7, green: 0.5, blue: 0.9)
        }
    }
    
    var secondaryColor: Color {
        switch self {
        case .gold: return Color(red: 0.9, green: 0.82, blue: 0.65)
        case .blue: return Color(red: 0.5, green: 0.7, blue: 0.95)
        case .green: return Color(red: 0.5, green: 0.85, blue: 0.7)
        case .purple: return Color(red: 0.8, green: 0.6, blue: 0.95)
        }
    }
    
    var gradientColors: [Color] {
        switch self {
        case .gold: return [Color(red: 0.05, green: 0.08, blue: 0.18), Color(red: 0.02, green: 0.02, blue: 0.08), Color.black]
        case .blue: return [Color(red: 0.05, green: 0.1, blue: 0.2), Color(red: 0.02, green: 0.05, blue: 0.12), Color.black]
        case .green: return [Color(red: 0.05, green: 0.15, blue: 0.1), Color(red: 0.02, green: 0.08, blue: 0.05), Color.black]
        case .purple: return [Color(red: 0.1, green: 0.05, blue: 0.18), Color(red: 0.05, green: 0.02, blue: 0.1), Color.black]
        }
    }
    
    var lightGradientColors: [Color] {
        switch self {
        case .gold: return [Color(red: 0.98, green: 0.96, blue: 0.92), Color(red: 0.95, green: 0.92, blue: 0.88), Color.white]
        case .blue: return [Color(red: 0.92, green: 0.95, blue: 0.98), Color(red: 0.88, green: 0.92, blue: 0.96), Color.white]
        case .green: return [Color(red: 0.92, green: 0.98, blue: 0.95), Color(red: 0.88, green: 0.95, blue: 0.92), Color.white]
        case .purple: return [Color(red: 0.96, green: 0.92, blue: 0.98), Color(red: 0.94, green: 0.9, blue: 0.96), Color.white]
        }
    }
    
    var iconName: String {
        switch self {
        case .gold: return "sun.max.fill"
        case .blue: return "drop.fill"
        case .green: return "leaf.fill"
        case .purple: return "sparkles"
        }
    }
}

// MARK: - App Appearance Mode
enum AppAppearanceMode: String, CaseIterable, Identifiable {
    case system = "System"
    case light = "Light"
    case dark = "Dark"
    
    var id: String { rawValue }
    
    var colorScheme: ColorScheme? {
        switch self {
        case .system: return nil
        case .light: return .light
        case .dark: return .dark
        }
    }
    
    var iconName: String {
        switch self {
        case .system: return "gear"
        case .light: return "sun.max.fill"
        case .dark: return "moon.fill"
        }
    }
}

// MARK: - Font Size
enum AppFontSize: String, CaseIterable, Identifiable {
    case small = "Small"
    case medium = "Medium"
    case large = "Large"
    case extraLarge = "Extra Large"
    
    var id: String { rawValue }
    
    var scale: CGFloat {
        switch self {
        case .small: return 0.85
        case .medium: return 1.0
        case .large: return 1.15
        case .extraLarge: return 1.3
        }
    }
    
    var arabicScale: CGFloat {
        switch self {
        case .small: return 0.9
        case .medium: return 1.0
        case .large: return 1.2
        case .extraLarge: return 1.4
        }
    }
}

// MARK: - Theme Manager
class ThemeManager: ObservableObject {
    static let shared = ThemeManager()
    
    @Published var colorScheme: AppColorScheme {
        didSet {
            UserDefaults.standard.set(colorScheme.rawValue, forKey: "app_colorScheme")
        }
    }
    
    @Published var appearanceMode: AppAppearanceMode {
        didSet {
            UserDefaults.standard.set(appearanceMode.rawValue, forKey: "app_appearanceMode")
        }
    }
    
    @Published var fontSize: AppFontSize {
        didSet {
            UserDefaults.standard.set(fontSize.rawValue, forKey: "app_fontSize")
        }
    }
    
    // Computed colors based on current settings
    var primaryColor: Color { colorScheme.primaryColor }
    var secondaryColor: Color { colorScheme.secondaryColor }
    
    var isDarkMode: Bool {
        switch appearanceMode {
        case .dark: return true
        case .light: return false
        case .system: return UITraitCollection.current.userInterfaceStyle == .dark
        }
    }
    
    var backgroundGradient: [Color] {
        isDarkMode ? colorScheme.gradientColors : colorScheme.lightGradientColors
    }
    
    var textColor: Color {
        isDarkMode ? .white : Color(red: 0.1, green: 0.1, blue: 0.15)
    }
    
    var secondaryTextColor: Color {
        isDarkMode ? .white.opacity(0.7) : Color(red: 0.25, green: 0.25, blue: 0.3)
    }
    
    var cardBackground: Color {
        isDarkMode ? Color.white.opacity(0.05) : Color.white.opacity(0.6)
    }
    
    var cardBorder: Color {
        isDarkMode ? primaryColor.opacity(0.3) : primaryColor.opacity(0.2)
    }
    
    private init() {
        // Load saved preferences
        if let savedScheme = UserDefaults.standard.string(forKey: "app_colorScheme"),
           let scheme = AppColorScheme(rawValue: savedScheme) {
            self.colorScheme = scheme
        } else {
            self.colorScheme = .gold
        }
        
        if let savedMode = UserDefaults.standard.string(forKey: "app_appearanceMode"),
           let mode = AppAppearanceMode(rawValue: savedMode) {
            self.appearanceMode = mode
        } else {
            self.appearanceMode = .dark
        }
        
        if let savedSize = UserDefaults.standard.string(forKey: "app_fontSize"),
           let size = AppFontSize(rawValue: savedSize) {
            self.fontSize = size
        } else {
            self.fontSize = .medium
        }
    }
    
    // Helper to get scaled font size
    func scaledSize(_ baseSize: CGFloat, isArabic: Bool = false) -> CGFloat {
        return baseSize * (isArabic ? fontSize.arabicScale : fontSize.scale)
    }
}

// MARK: - Theme Environment Key
struct ThemeKey: EnvironmentKey {
    static let defaultValue: ThemeManager = ThemeManager.shared
}

extension EnvironmentValues {
    var theme: ThemeManager {
        get { self[ThemeKey.self] }
        set { self[ThemeKey.self] = newValue }
    }
}

// MARK: - Themed View Modifier
struct ThemedBackground: ViewModifier {
    @ObservedObject var theme = ThemeManager.shared
    
    func body(content: Content) -> some View {
        content
            .background(
                LinearGradient(
                    colors: theme.backgroundGradient,
                    startPoint: .top,
                    endPoint: .bottom
                )
                .ignoresSafeArea()
            )
    }
}

extension View {
    func themedBackground() -> some View {
        modifier(ThemedBackground())
    }
}

