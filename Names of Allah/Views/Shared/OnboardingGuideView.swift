//
//  OnboardingGuideView.swift
//  Names of Allah
//
//  Created by Mohammed Asad Hashmi on 11/12/2025.
//

import SwiftUI

// MARK: - Highlight Target Identifiers
enum OnboardingHighlightTarget: String, CaseIterable {
    case advisorButton
    case quizButton
    case settingsButton
    case namesList
    case searchBar
}

// MARK: - Preference Key for Frame Collection
struct OnboardingFramePreferenceKey: PreferenceKey {
    static var defaultValue: [OnboardingHighlightTarget: CGRect] = [:]
    
    static func reduce(value: inout [OnboardingHighlightTarget: CGRect], nextValue: () -> [OnboardingHighlightTarget: CGRect]) {
        value.merge(nextValue()) { $1 }
    }
}

// MARK: - View Extension for marking highlight targets
extension View {
    func onboardingHighlight(_ target: OnboardingHighlightTarget) -> some View {
        self.background(
            GeometryReader { geo in
                Color.clear.preference(
                    key: OnboardingFramePreferenceKey.self,
                    value: [target: geo.frame(in: .global)]
                )
            }
        )
    }
}

// MARK: - Conditional Highlight Modifier
struct OnboardingHighlightModifier: ViewModifier {
    let target: OnboardingHighlightTarget
    let shouldApply: Bool
    
    func body(content: Content) -> some View {
        if shouldApply {
            content.onboardingHighlight(target)
        } else {
            content
        }
    }
}

// MARK: - Onboarding Step Model
struct OnboardingStep: Identifiable {
    let id: Int
    let title: String
    let description: String
    let icon: String
    let target: OnboardingHighlightTarget?
    let tooltipPosition: TooltipPosition
    
    enum TooltipPosition {
        case below
        case above
        case center
    }
}

// MARK: - Onboarding Guide View
struct OnboardingGuideView: View {
    @Binding var isShowing: Bool
    let highlightFrames: [OnboardingHighlightTarget: CGRect]
    
    @State private var currentStep = 0
    
    private let goldColor = Color(red: 0.85, green: 0.75, blue: 0.55)
    
    private let steps: [OnboardingStep] = [
        OnboardingStep(
            id: 0,
            title: "Welcome to Your Journey",
            description: "Explore the 99 Beautiful Names of Allah through immersive stories and reflections.",
            icon: "sparkles",
            target: nil,
            tooltipPosition: .center
        ),
        OnboardingStep(
            id: 1,
            title: "Browse the Names",
            description: "Tap any name to discover its meaning through an interactive cinematic experience with Quranic stories.",
            icon: "list.bullet.rectangle.portrait",
            target: .namesList,
            tooltipPosition: .below
        ),
        OnboardingStep(
            id: 2,
            title: "Feeling Advisor",
            description: "Share how you're feeling and get personalized name recommendations to connect with Allah's attributes.",
            icon: "heart.text.square.fill",
            target: .advisorButton,
            tooltipPosition: .below
        ),
        OnboardingStep(
            id: 3,
            title: "Test Your Knowledge",
            description: "Take quizzes to memorize the names and deepen your understanding.",
            icon: "brain.head.profile",
            target: .quizButton,
            tooltipPosition: .below
        ),
        OnboardingStep(
            id: 4,
            title: "Settings",
            description: "Customize your experience with notifications and preferences.",
            icon: "gearshape.fill",
            target: .settingsButton,
            tooltipPosition: .below
        ),
        OnboardingStep(
            id: 5,
            title: "Search & Calligraphy",
            description: "Use the search bar at the bottom to find names quickly. Long press any name to view beautiful Arabic calligraphy.",
            icon: "paintbrush.pointed.fill",
            target: nil,
            tooltipPosition: .center
        )
    ]
    
    var body: some View {
        GeometryReader { geometry in
            ZStack {
                // Dark overlay with cutout
                overlayWithCutout(in: geometry)
                
                // Arrow pointing to target
                if let target = steps[currentStep].target,
                   let frame = highlightFrames[target] {
                    arrowPointer(to: frame, in: geometry)
                }
                
                // Tooltip card
                tooltipCard(in: geometry)
                
                // Navigation at bottom
                VStack {
                    Spacer()
                    navigationArea
                }
            }
        }
        .ignoresSafeArea()
        .transition(.opacity)
    }
    
    // MARK: - Overlay with Cutout
    private func overlayWithCutout(in geometry: GeometryProxy) -> some View {
        ZStack {
            // Dark overlay with proper cutout using mask
            if let target = steps[currentStep].target,
               let frame = highlightFrames[target] {
                // Use a custom shape with hole for proper transparency
                SpotlightOverlay(
                    spotlightFrame: frame,
                    cornerRadius: frame.height > 60 ? 16 : frame.height / 2
                )
                .fill(Color.black.opacity(0.9), style: FillStyle(eoFill: true))
                .ignoresSafeArea()
                
                // Glowing border around the spotlight
                spotlightBorder(frame: frame)
            } else {
                // No target - just show dark overlay
                Color.black.opacity(0.9)
                    .ignoresSafeArea()
            }
        }
        .onTapGesture {
            advanceStep()
        }
    }
    
    private func spotlightBorder(frame: CGRect) -> some View {
        let padding: CGFloat = 6
        let expandedFrame = frame.insetBy(dx: -padding, dy: -padding)
        let cornerRadius = frame.height > 60 ? 20 : frame.height / 2 + padding
        
        return ZStack {
            // Outer glow
            RoundedRectangle(cornerRadius: cornerRadius)
                .stroke(goldColor.opacity(0.6), lineWidth: 4)
                .frame(width: expandedFrame.width, height: expandedFrame.height)
                .position(x: expandedFrame.midX, y: expandedFrame.midY)
                .blur(radius: 8)
            
            // Bright animated border
            RoundedRectangle(cornerRadius: cornerRadius)
                .stroke(goldColor, lineWidth: 3)
                .frame(width: expandedFrame.width, height: expandedFrame.height)
                .position(x: expandedFrame.midX, y: expandedFrame.midY)
            
            // Inner bright glow to make icon pop
            RoundedRectangle(cornerRadius: frame.height > 60 ? 16 : frame.height / 2)
                .fill(Color.white.opacity(0.1))
                .frame(width: frame.width, height: frame.height)
                .position(x: frame.midX, y: frame.midY)
        }
    }
    
    // MARK: - Arrow Pointer
    private func arrowPointer(to frame: CGRect, in geometry: GeometryProxy) -> some View {
        let step = steps[currentStep]
        let arrowSize: CGFloat = 20
        
        return Group {
            if step.tooltipPosition == .below {
                // Arrow pointing up to target
                Image(systemName: "arrowtriangle.up.fill")
                    .font(.system(size: arrowSize))
                    .foregroundColor(goldColor)
                    .position(x: frame.midX, y: frame.maxY + 20)
            } else if step.tooltipPosition == .above {
                // Arrow pointing down to target
                Image(systemName: "arrowtriangle.down.fill")
                    .font(.system(size: arrowSize))
                    .foregroundColor(goldColor)
                    .position(x: frame.midX, y: frame.minY - 20)
            }
        }
    }
    
    // MARK: - Tooltip Card
    private func tooltipCard(in geometry: GeometryProxy) -> some View {
        let step = steps[currentStep]
        
        return VStack(spacing: 16) {
            // Icon
            ZStack {
                Circle()
                    .fill(goldColor.opacity(0.2))
                    .frame(width: 60, height: 60)
                
                Image(systemName: step.icon)
                    .font(.system(size: 24, weight: .medium))
                    .foregroundColor(goldColor)
            }
            
            // Title
            Text(step.title)
                .font(.system(size: 20, weight: .bold, design: .serif))
                .foregroundColor(.white)
                .multilineTextAlignment(.center)
            
            // Description
            Text(step.description)
                .font(.system(size: 15, weight: .regular))
                .foregroundColor(.white.opacity(0.8))
                .multilineTextAlignment(.center)
                .lineSpacing(3)
                .fixedSize(horizontal: false, vertical: true)
            
            // Step indicator
            Text("\(currentStep + 1) of \(steps.count)")
                .font(.system(size: 12, weight: .medium))
                .foregroundColor(.white.opacity(0.4))
                .padding(.top, 4)
        }
        .padding(.horizontal, 24)
        .padding(.vertical, 28)
        .frame(maxWidth: geometry.size.width - 48)
        .background(
            RoundedRectangle(cornerRadius: 24)
                .fill(Color(red: 0.08, green: 0.08, blue: 0.12))
                .overlay(
                    RoundedRectangle(cornerRadius: 24)
                        .stroke(goldColor.opacity(0.4), lineWidth: 1.5)
                )
        )
        .shadow(color: .black.opacity(0.5), radius: 20, x: 0, y: 10)
        .position(tooltipPosition(for: step, frames: highlightFrames, in: geometry))
    }
    
    private func tooltipPosition(for step: OnboardingStep, frames: [OnboardingHighlightTarget: CGRect], in geometry: GeometryProxy) -> CGPoint {
        let centerX = geometry.size.width / 2
        let safeAreaTop: CGFloat = 60
        let navigationHeight: CGFloat = 120 // Space for navigation at bottom
        
        if let target = step.target, let frame = frames[target] {
            switch step.tooltipPosition {
            case .below:
                // Position below the highlighted element
                let idealY = frame.maxY + 140
                // Make sure it doesn't go too low (leave room for navigation)
                let maxY = geometry.size.height - navigationHeight - 100
                return CGPoint(x: centerX, y: min(idealY, maxY))
            case .above:
                // Position above the highlighted element
                let idealY = frame.minY - 140
                // Make sure it doesn't go too high
                return CGPoint(x: centerX, y: max(idealY, safeAreaTop + 100))
            case .center:
                return CGPoint(x: centerX, y: geometry.size.height / 2)
            }
        }
        
        // Default center position
        return CGPoint(x: centerX, y: geometry.size.height / 2)
    }
    
    // MARK: - Navigation Area
    private var navigationArea: some View {
        VStack(spacing: 16) {
            // Progress dots
            HStack(spacing: 6) {
                ForEach(0..<steps.count, id: \.self) { index in
                    Circle()
                        .fill(index == currentStep ? goldColor : Color.white.opacity(0.3))
                        .frame(width: index == currentStep ? 8 : 6, height: index == currentStep ? 8 : 6)
                        .animation(.easeInOut(duration: 0.2), value: currentStep)
                }
            }
            
            // Buttons
            HStack(spacing: 16) {
                // Skip button
                Button(action: { dismissOnboarding() }) {
                    Text("Skip")
                        .font(.system(size: 16, weight: .medium))
                        .foregroundColor(.white.opacity(0.6))
                        .padding(.horizontal, 20)
                        .padding(.vertical, 12)
                }
                
                Spacer()
                
                // Next/Done button
                Button(action: { advanceStep() }) {
                    HStack(spacing: 8) {
                        Text(currentStep == steps.count - 1 ? "Get Started" : "Next")
                            .font(.system(size: 16, weight: .semibold))
                        
                        Image(systemName: currentStep == steps.count - 1 ? "checkmark" : "arrow.right")
                            .font(.system(size: 14, weight: .semibold))
                    }
                    .foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1))
                    .padding(.horizontal, 24)
                    .padding(.vertical, 12)
                    .background(goldColor)
                    .clipShape(Capsule())
                }
            }
            .padding(.horizontal, 24)
            .padding(.bottom, 50)
        }
    }
    
    // MARK: - Actions
    private func advanceStep() {
        if currentStep < steps.count - 1 {
            withAnimation(.easeInOut(duration: 0.3)) {
                currentStep += 1
            }
        } else {
            dismissOnboarding()
        }
    }
    
    private func dismissOnboarding() {
        UserDefaults.standard.set(true, forKey: "hasCompletedOnboarding")
        
        withAnimation(.easeOut(duration: 0.3)) {
            isShowing = false
        }
    }
}

// MARK: - Spotlight Overlay Shape (Rectangle with hole)
struct SpotlightOverlay: Shape {
    let spotlightFrame: CGRect
    let cornerRadius: CGFloat
    
    func path(in rect: CGRect) -> Path {
        var path = Path()
        
        // Add the full rectangle
        path.addRect(rect)
        
        // Add the spotlight hole (will be subtracted due to even-odd fill)
        let spotlightRect = spotlightFrame.insetBy(dx: -4, dy: -4)
        path.addRoundedRect(in: spotlightRect, cornerSize: CGSize(width: cornerRadius + 4, height: cornerRadius + 4))
        
        return path
    }
}

// MARK: - Preview
#Preview {
    ZStack {
        Color.black
        OnboardingGuideView(
            isShowing: .constant(true),
            highlightFrames: [
                .advisorButton: CGRect(x: 250, y: 100, width: 44, height: 44),
                .quizButton: CGRect(x: 306, y: 100, width: 44, height: 44),
                .settingsButton: CGRect(x: 362, y: 100, width: 44, height: 44)
            ]
        )
    }
}


