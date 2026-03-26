// SettingsView.swift - App settings including notifications and themes
import SwiftUI

struct SettingsView: View {
    @StateObject private var notificationManager = NotificationManager.shared
    @StateObject private var themeManager = ThemeManager.shared
    @State private var showingPermissionAlert = false
    @State private var pendingNotificationCount = 0
    @Environment(\.dismiss) private var dismiss
    
    var body: some View {
        ZStack {
            LinearGradient(
                colors: themeManager.backgroundGradient,
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()
            
            ScrollView {
                VStack(spacing: 30) {
                    // Header
                    VStack(spacing: 8) {
                        Image(systemName: "gearshape.fill")
                            .font(.system(size: 50))
                            .foregroundColor(themeManager.primaryColor)
                        
                        Text("Settings")
                            .font(.system(size: 32, weight: .bold, design: .serif))
                            .foregroundColor(themeManager.textColor)
                    }
                    .padding(.top, 40)
                    .padding(.bottom, 20)
                    
                    // Theme Customization Card
                    themeCustomizationCard
                    
                    // Notification Settings Card
                    notificationSettingsCard
                    
                    // App Info Card
                    appInfoCard
                    
                    Spacer().frame(height: 40)
                }
            }
        }
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                Button(action: { dismiss() }) {
                    Image(systemName: "xmark.circle.fill")
                        .font(.system(size: 28))
                        .foregroundColor(themeManager.textColor.opacity(0.6))
                }
            }
        }
        .alert("Notification Permission Required", isPresented: $showingPermissionAlert) {
            Button("Open Settings") {
                if let url = URL(string: UIApplication.openSettingsURLString) {
                    UIApplication.shared.open(url)
                }
            }
            Button("Cancel", role: .cancel) {}
        } message: {
            Text("Please enable notifications in your device settings to receive daily reminders.")
        }
        .onAppear {
            updatePendingCount()
        }
    }
    
    private func updatePendingCount() {
        notificationManager.getPendingNotificationCount { count in
            pendingNotificationCount = count
        }
    }
    
    // MARK: - Theme Customization Card
    private var themeCustomizationCard: some View {
        VStack(alignment: .leading, spacing: 20) {
            HStack(spacing: 12) {
                Image(systemName: "paintbrush.fill")
                    .font(.system(size: 24))
                    .foregroundColor(themeManager.primaryColor)
                
                Text("Theme & Appearance")
                    .font(.system(size: 20, weight: .semibold, design: .serif))
                    .foregroundColor(themeManager.textColor)
            }
            
            Divider()
                .background(themeManager.textColor.opacity(0.2))
            
            // Appearance Mode
            VStack(alignment: .leading, spacing: 12) {
                Text("Appearance")
                    .font(.system(size: 14, weight: .medium))
                    .foregroundColor(themeManager.secondaryTextColor)
                
                HStack(spacing: 12) {
                    ForEach(AppAppearanceMode.allCases) { mode in
                        Button(action: {
                            withAnimation(.easeInOut(duration: 0.3)) {
                                themeManager.appearanceMode = mode
                            }
                        }) {
                            VStack(spacing: 8) {
                                Image(systemName: mode.iconName)
                                    .font(.system(size: 20))
                                Text(mode.rawValue)
                                    .font(.system(size: 12, weight: .medium))
                            }
                            .foregroundColor(themeManager.appearanceMode == mode ? themeManager.primaryColor : themeManager.secondaryTextColor)
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 16)
                            .background(
                                RoundedRectangle(cornerRadius: 12)
                                    .fill(themeManager.appearanceMode == mode ? themeManager.primaryColor.opacity(0.15) : themeManager.cardBackground)
                                    .overlay(
                                        RoundedRectangle(cornerRadius: 12)
                                            .stroke(themeManager.appearanceMode == mode ? themeManager.primaryColor.opacity(0.5) : Color.clear, lineWidth: 2)
                                    )
                            )
                        }
                    }
                }
            }
            
            // Color Scheme
            VStack(alignment: .leading, spacing: 12) {
                Text("Color Scheme")
                    .font(.system(size: 14, weight: .medium))
                    .foregroundColor(themeManager.secondaryTextColor)
                
                HStack(spacing: 12) {
                    ForEach(AppColorScheme.allCases) { scheme in
                        Button(action: {
                            withAnimation(.easeInOut(duration: 0.3)) {
                                themeManager.colorScheme = scheme
                            }
                        }) {
                            VStack(spacing: 8) {
                                ZStack {
                                    Circle()
                                        .fill(scheme.primaryColor)
                                        .frame(width: 32, height: 32)
                                    
                                    if themeManager.colorScheme == scheme {
                                        Image(systemName: "checkmark")
                                            .font(.system(size: 14, weight: .bold))
                                            .foregroundColor(.white)
                                    }
                                }
                                Text(scheme.rawValue)
                                    .font(.system(size: 11, weight: .medium))
                                    .foregroundColor(themeManager.textColor)
                            }
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 12)
                            .background(
                                RoundedRectangle(cornerRadius: 12)
                                    .fill(themeManager.colorScheme == scheme ? scheme.primaryColor.opacity(0.1) : Color.clear)
                            )
                        }
                    }
                }
            }
            
            // Font Size
            VStack(alignment: .leading, spacing: 12) {
                HStack {
                    Text("Font Size")
                        .font(.system(size: 14, weight: .medium))
                        .foregroundColor(themeManager.secondaryTextColor)
                    Spacer()
                    Text(themeManager.fontSize.rawValue)
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundColor(themeManager.primaryColor)
                }
                
                HStack(spacing: 8) {
                    ForEach(AppFontSize.allCases) { size in
                        Button(action: {
                            withAnimation(.easeInOut(duration: 0.2)) {
                                themeManager.fontSize = size
                            }
                        }) {
                            Text("Aa")
                                .font(.system(size: 12 * size.scale, weight: .medium))
                                .foregroundColor(themeManager.fontSize == size ? themeManager.primaryColor : themeManager.secondaryTextColor)
                                .frame(maxWidth: .infinity)
                                .padding(.vertical, 12)
                                .background(
                                    RoundedRectangle(cornerRadius: 10)
                                        .fill(themeManager.fontSize == size ? themeManager.primaryColor.opacity(0.15) : themeManager.cardBackground)
                                        .overlay(
                                            RoundedRectangle(cornerRadius: 10)
                                                .stroke(themeManager.fontSize == size ? themeManager.primaryColor.opacity(0.5) : Color.clear, lineWidth: 2)
                                        )
                                )
                        }
                    }
                }
                
                // Preview text
                Text("بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ")
                    .font(.system(size: themeManager.scaledSize(18, isArabic: true), design: .serif))
                    .foregroundColor(themeManager.textColor)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
                    .background(
                        RoundedRectangle(cornerRadius: 10)
                            .fill(themeManager.cardBackground)
                    )
            }
        }
        .padding(24)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(themeManager.cardBackground)
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .stroke(themeManager.cardBorder, lineWidth: 1)
                )
        )
        .padding(.horizontal, 20)
    }
    
    // MARK: - Notification Settings Card
    private var notificationSettingsCard: some View {
        VStack(alignment: .leading, spacing: 20) {
            HStack(spacing: 12) {
                Image(systemName: "bell.badge.fill")
                    .font(.system(size: 24))
                    .foregroundColor(themeManager.primaryColor)
                
                Text("Daily Name Notifications")
                    .font(.system(size: 20, weight: .semibold, design: .serif))
                    .foregroundColor(themeManager.textColor)
            }
            
            Text("Receive a daily notification featuring one of Allah's beautiful names with a reflection prompt.")
                .font(.system(size: 14, weight: .light))
                .foregroundColor(themeManager.secondaryTextColor)
                .lineSpacing(4)
            
            Divider()
                .background(themeManager.textColor.opacity(0.2))
                .padding(.vertical, 8)
            
            // Enable/Disable Toggle
            Toggle(isOn: $notificationManager.notificationsEnabled) {
                HStack {
                    Image(systemName: notificationManager.notificationsEnabled ? "checkmark.circle.fill" : "circle")
                        .foregroundColor(notificationManager.notificationsEnabled ? themeManager.primaryColor : themeManager.secondaryTextColor)
                    Text("Enable Daily Notifications")
                        .font(.system(size: 16, weight: .medium))
                        .foregroundColor(themeManager.textColor)
                }
            }
            .toggleStyle(SwitchToggleStyle(tint: themeManager.primaryColor))
            .onChange(of: notificationManager.notificationsEnabled) { newValue in
                if newValue {
                    notificationManager.requestPermission { granted in
                        if !granted {
                            showingPermissionAlert = true
                            notificationManager.notificationsEnabled = false
                        } else {
                            updatePendingCount()
                        }
                    }
                }
            }
            
            // Time Picker
            if notificationManager.notificationsEnabled {
                VStack(alignment: .leading, spacing: 12) {
                    HStack {
                        Image(systemName: "clock.fill")
                            .foregroundColor(themeManager.primaryColor)
                        Text("Notification Time")
                            .font(.system(size: 16, weight: .medium))
                            .foregroundColor(themeManager.textColor)
                    }
                    
                    DatePicker(
                        "",
                        selection: $notificationManager.notificationTime,
                        displayedComponents: .hourAndMinute
                    )
                    .datePickerStyle(.wheel)
                    .labelsHidden()
                    .colorScheme(themeManager.isDarkMode ? .dark : .light)
                    .frame(maxWidth: .infinity)
                    .padding(.horizontal)
                }
                .transition(.opacity.combined(with: .move(edge: .top)))
                
                // Status info
                HStack(spacing: 8) {
                    Image(systemName: "info.circle")
                        .foregroundColor(themeManager.primaryColor.opacity(0.7))
                    Text("\(pendingNotificationCount) notifications scheduled")
                        .font(.system(size: 13))
                        .foregroundColor(themeManager.secondaryTextColor)
                }
                .padding(.top, 8)
            }
        }
        .padding(24)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(themeManager.cardBackground)
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .stroke(themeManager.cardBorder, lineWidth: 1)
                )
        )
        .padding(.horizontal, 20)
    }
    
    // MARK: - App Info Card
    private var appInfoCard: some View {
        VStack(alignment: .leading, spacing: 16) {
            HStack(spacing: 12) {
                Image(systemName: "info.circle.fill")
                    .font(.system(size: 22))
                    .foregroundColor(themeManager.primaryColor)
                
                Text("About")
                    .font(.system(size: 18, weight: .semibold, design: .serif))
                    .foregroundColor(themeManager.textColor)
            }
            
            VStack(alignment: .leading, spacing: 8) {
                InfoRow(label: "Total Names", value: "99", theme: themeManager)
                InfoRow(label: "Stories", value: "99", theme: themeManager)
                InfoRow(label: "Version", value: "1.0", theme: themeManager)
            }
            
            Divider()
                .background(themeManager.textColor.opacity(0.2))
                .padding(.vertical, 8)
            
            // Replay Tutorial Button
            Button(action: {
                UserDefaults.standard.set(false, forKey: "hasCompletedOnboarding")
                dismiss()
            }) {
                HStack(spacing: 12) {
                    Image(systemName: "arrow.counterclockwise.circle.fill")
                        .font(.system(size: 20))
                    Text("Replay Tutorial")
                        .font(.system(size: 16, weight: .medium))
                    Spacer()
                    Image(systemName: "chevron.right")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundColor(themeManager.secondaryTextColor)
                }
                .foregroundColor(themeManager.primaryColor)
                .padding(.vertical, 12)
                .padding(.horizontal, 16)
                .background(
                    RoundedRectangle(cornerRadius: 12)
                        .fill(themeManager.primaryColor.opacity(0.1))
                )
            }
        }
        .padding(24)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(themeManager.cardBackground)
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .stroke(themeManager.cardBorder, lineWidth: 1)
                )
        )
        .padding(.horizontal, 20)
    }
}

// Helper view for info rows
struct InfoRow: View {
    let label: String
    let value: String
    var theme: ThemeManager = ThemeManager.shared
    
    var body: some View {
        HStack {
            Text(label)
                .font(.system(size: 14))
                .foregroundColor(theme.secondaryTextColor)
            Spacer()
            Text(value)
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(theme.primaryColor)
        }
    }
}

