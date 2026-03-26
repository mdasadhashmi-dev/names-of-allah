//
//  SharedComponents.swift
//  Names of Allah
//
//  Reusable UI components across all stories
//

import SwiftUI

// MARK: - Story Text Box
struct StoryTextBox: View {
    let text: String
    let icon: String
    
    var body: some View {
        VStack(spacing: 16) {
            Image(systemName: icon)
                .font(.system(size: 24))
                .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
            
            Text(text)
                .font(.system(size: 18, weight: .light, design: .serif))
                .foregroundColor(.white)
                .multilineTextAlignment(.center)
                .lineSpacing(7)
                .fixedSize(horizontal: false, vertical: true)
        }
        .padding(.horizontal, 35)
        .padding(.vertical, 28)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(Color.black.opacity(0.4))
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .stroke(Color.white.opacity(0.15), lineWidth: 1)
                )
        )
        .padding(.horizontal, 25)
        .padding(.bottom, 100) // Space for Next button
    }
}

// MARK: - Next Button
struct NextButton: View {
    let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            HStack(spacing: 10) {
                Text("Next")
                    .font(.system(size: 17, weight: .medium, design: .serif))
                Image(systemName: "arrow.right")
                    .font(.system(size: 14, weight: .semibold))
            }
            .foregroundColor(Color(red: 0.05, green: 0.05, blue: 0.1))
            .padding(.horizontal, 40)
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
            .shadow(color: Color(red: 0.85, green: 0.75, blue: 0.55).opacity(0.4), radius: 15, x: 0, y: 8)
        }
    }
}

// MARK: - Explanation Point
struct ExplanationPoint: View {
    let icon: String
    let text: String
    
    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: icon)
                .font(.system(size: 16))
                .foregroundColor(Color(red: 0.85, green: 0.75, blue: 0.55))
                .frame(width: 24)
            
            Text(text)
                .font(.system(size: 15, weight: .regular, design: .serif))
                .foregroundColor(.white.opacity(0.9))
                .lineSpacing(4)
        }
    }
}

// MARK: - Scroll Offset Preference Key
struct ScrollOffsetKey: PreferenceKey {
    static var defaultValue: CGFloat = 0
    static func reduce(value: inout CGFloat, nextValue: () -> CGFloat) {
        value = nextValue()
    }
}

// MARK: - Scroll Indicator
struct ScrollIndicator: View {
    let isVisible: Bool
    let bounceOffset: CGFloat
    
    var body: some View {
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
        .offset(y: bounceOffset)
        .opacity(isVisible ? 1 : 0)
    }
}

// MARK: - Color Constants
extension Color {
    static let appGold = Color(red: 0.85, green: 0.75, blue: 0.55)
    static let appSoftGold = Color(red: 0.9, green: 0.82, blue: 0.65)
    static let appDarkBg = Color(red: 0.05, green: 0.08, blue: 0.18)
}

// MARK: - Conditional View Modifier
extension View {
    @ViewBuilder
    func `if`<Content: View>(_ condition: Bool, transform: (Self) -> Content) -> some View {
        if condition {
            transform(self)
        } else {
            self
        }
    }
}

// MARK: - Audio Button
struct AyahAudioButton: View {
    let isPlaying: Bool
    let audioFileName: String
    let action: () -> Void
    
    var body: some View {
        VStack(spacing: 8) {
            Button(action: action) {
                HStack(spacing: 12) {
                    Image(systemName: isPlaying ? "speaker.wave.3.fill" : "speaker.wave.2.fill")
                        .font(.system(size: 18))
                    Text(isPlaying ? "Playing Ayah..." : "Play Ayah Audio")
                        .font(.system(size: 16, weight: .medium, design: .serif))
                }
                .foregroundColor(.white)
                .padding(.horizontal, 30)
                .padding(.vertical, 14)
                .background(
                    RoundedRectangle(cornerRadius: 25)
                        .fill(Color.appGold.opacity(isPlaying ? 0.4 : 0.25))
                        .overlay(
                            RoundedRectangle(cornerRadius: 25)
                                .stroke(Color.appGold, lineWidth: 1.5)
                        )
                )
            }
            .disabled(isPlaying)
            
            Text("Add '\(audioFileName).mp3' to project for audio")
                .font(.system(size: 11, weight: .light))
                .foregroundColor(.white.opacity(0.4))
                .padding(.top, 4)
        }
    }
}

// MARK: - Continue to Reflect Button
struct ContinueToReflectButton: View {
    var body: some View {
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
                colors: [Color.appSoftGold, Color.appGold],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
        )
        .clipShape(Capsule())
        .shadow(color: Color.appGold.opacity(0.4), radius: 15)
    }
}


