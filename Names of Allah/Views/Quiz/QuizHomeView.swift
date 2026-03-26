// QuizHomeView.swift - Main quiz menu and statistics
import SwiftUI

struct QuizHomeView: View {
    @StateObject private var progressStore = QuizProgressStore.shared
    @State private var selectedMode: QuizMode? = nil
    @Environment(\.dismiss) private var dismiss
    
    var body: some View {
        ZStack {
            // Background
            LinearGradient(
                colors: [Color(red: 0.05, green: 0.05, blue: 0.12), Color.black],
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()
            
            ScrollView {
                VStack(spacing: 28) {
                    // Header
                    headerSection
                    
                    // Stats Cards
                    statsSection
                    
                    // Quiz Modes
                    modesSection
                    
                    Spacer().frame(height: 40)
                }
                .padding(.horizontal, 20)
            }
        }
        .navigationBarTitleDisplayMode(.inline)
        .navigationDestination(item: $selectedMode) { mode in
            QuizGameView(mode: mode)
        }
    }
    
    // MARK: - Header
    private var headerSection: some View {
        VStack(spacing: 16) {
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [Color.appGold.opacity(0.3), Color.clear],
                            center: .center,
                            startRadius: 0,
                            endRadius: 60
                        )
                    )
                    .frame(width: 120, height: 120)
                
                Image(systemName: "brain.head.profile")
                    .font(.system(size: 50))
                    .foregroundColor(.appGold)
            }
            
            Text("Quiz Yourself")
                .font(.system(size: 32, weight: .bold, design: .serif))
                .foregroundColor(.white)
            
            Text("Test your knowledge of Allah's Beautiful Names")
                .font(.system(size: 15, weight: .light))
                .foregroundColor(.white.opacity(0.7))
                .multilineTextAlignment(.center)
        }
        .padding(.top, 30)
    }
    
    // MARK: - Stats Section
    private var statsSection: some View {
        VStack(spacing: 16) {
            HStack(spacing: 12) {
                StatCard(
                    icon: "trophy.fill",
                    value: "\(progressStore.highScore)%",
                    label: "Best Score",
                    color: .appGold
                )
                
                StatCard(
                    icon: "flame.fill",
                    value: "\(progressStore.longestStreak)",
                    label: "Best Streak",
                    color: .orange
                )
            }
            
            HStack(spacing: 12) {
                StatCard(
                    icon: "checkmark.circle.fill",
                    value: "\(progressStore.totalQuizzesCompleted)",
                    label: "Quizzes Done",
                    color: .green
                )
                
                StatCard(
                    icon: "percent",
                    value: "\(progressStore.overallAccuracy)%",
                    label: "Accuracy",
                    color: .blue
                )
            }
        }
    }
    
    // MARK: - Modes Section
    private var modesSection: some View {
        VStack(alignment: .leading, spacing: 16) {
            Text("Choose a Mode")
                .font(.system(size: 20, weight: .semibold, design: .serif))
                .foregroundColor(.white)
                .padding(.top, 8)
            
            ForEach(QuizMode.allCases) { mode in
                QuizModeCard(mode: mode) {
                    if mode.isAvailable {
                        selectedMode = mode
                    }
                }
            }
        }
    }
}

// MARK: - Stat Card
struct StatCard: View {
    let icon: String
    let value: String
    let label: String
    let color: Color
    
    var body: some View {
        VStack(spacing: 8) {
            Image(systemName: icon)
                .font(.system(size: 22))
                .foregroundColor(color)
            
            Text(value)
                .font(.system(size: 24, weight: .bold))
                .foregroundColor(.white)
            
            Text(label)
                .font(.system(size: 12, weight: .light))
                .foregroundColor(.white.opacity(0.6))
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 20)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(Color.white.opacity(0.06))
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .stroke(color.opacity(0.3), lineWidth: 1)
                )
        )
    }
}

// MARK: - Quiz Mode Card
struct QuizModeCard: View {
    let mode: QuizMode
    let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            HStack(spacing: 16) {
                ZStack {
                    Circle()
                        .fill(Color.appGold.opacity(0.15))
                        .frame(width: 56, height: 56)
                    
                    Image(systemName: mode.icon)
                        .font(.system(size: 24))
                        .foregroundColor(.appGold)
                }
                
                VStack(alignment: .leading, spacing: 4) {
                    Text(mode.rawValue)
                        .font(.system(size: 18, weight: .semibold))
                        .foregroundColor(.white)
                    
                    Text(mode.description)
                        .font(.system(size: 13, weight: .light))
                        .foregroundColor(.white.opacity(0.6))
                        .lineLimit(2)
                }
                
                Spacer()
                
                if mode.isAvailable {
                    Image(systemName: "play.circle.fill")
                        .font(.system(size: 32))
                        .foregroundColor(.appGold)
                } else {
                    Text("Soon")
                        .font(.system(size: 12, weight: .medium))
                        .foregroundColor(.white.opacity(0.5))
                        .padding(.horizontal, 10)
                        .padding(.vertical, 6)
                        .background(
                            Capsule()
                                .fill(Color.white.opacity(0.1))
                        )
                }
            }
            .padding(20)
            .background(
                RoundedRectangle(cornerRadius: 20)
                    .fill(Color.white.opacity(0.05))
                    .overlay(
                        RoundedRectangle(cornerRadius: 20)
                            .stroke(
                                mode.isAvailable ? Color.appGold.opacity(0.3) : Color.white.opacity(0.1),
                                lineWidth: 1
                            )
                    )
            )
        }
        .opacity(mode.isAvailable ? 1.0 : 0.6)
    }
}

#Preview {
    NavigationStack {
        QuizHomeView()
    }
}



