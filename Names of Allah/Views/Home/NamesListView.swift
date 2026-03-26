//
//  NamesListView.swift
//  Names of Allah
//
//  Created by Mohammed Asad Hashmi on 08/12/2025.
//

import SwiftUI

struct NamesListView: View {
    @State private var selectedNameId: String? = nil
    @State private var showingSettings = false
    @State private var showingQuiz = false
    @State private var showingCalligraphy = false
    @State private var showingAdvisor = false
    @State private var calligraphyName: AllahName? = nil
    @State private var searchText = ""
    @State private var showOnboarding = false
    @AppStorage("hasCompletedOnboarding") private var hasCompletedOnboarding = false
    
    // Onboarding highlight frames
    @State private var highlightFrames: [OnboardingHighlightTarget: CGRect] = [:]
    
    // Filtered names based on search
    private var filteredNames: [AllahName] {
        if searchText.isEmpty {
            return AllahNamesDatabase.all
        } else {
            return AllahNamesDatabase.all.filter { name in
                name.arabic.contains(searchText) ||
                name.transliteration.localizedCaseInsensitiveContains(searchText) ||
                name.meaning.localizedCaseInsensitiveContains(searchText) ||
                "\(name.number)".contains(searchText)
            }
        }
    }
    
    var body: some View {
        ZStack {
            LinearGradient(colors: [Color.appDarkBg, Color.black], startPoint: .top, endPoint: .bottom).ignoresSafeArea()
            
            // Main content layer
            
            VStack(spacing: 0) {
                HStack {
                    VStack(spacing: 8) {
                        Text("أسماء الله الحسنى")
                            .font(.system(size: 28, weight: .bold, design: .serif))
                            .foregroundColor(.white)
                        Text("Select a name to begin")
                            .font(.system(size: 14, weight: .light))
                            .foregroundColor(.white.opacity(0.6))
                    }
                    Spacer()
                    
                    HStack(spacing: 12) {
                        // Feeling Advisor Button
                        Button(action: { showingAdvisor = true }) {
                            Image(systemName: "heart.text.square.fill")
                                .font(.system(size: 20))
                                .foregroundColor(.appGold)
                                .padding(12)
                                .background(
                                    Circle()
                                        .fill(Color.white.opacity(0.1))
                                )
                        }
                        .onboardingHighlight(.advisorButton)
                        
                        // Quiz Button
                        Button(action: { showingQuiz = true }) {
                            Image(systemName: "brain.head.profile")
                                .font(.system(size: 20))
                                .foregroundColor(.appGold)
                                .padding(12)
                                .background(
                                    Circle()
                                        .fill(Color.white.opacity(0.1))
                                )
                        }
                        .onboardingHighlight(.quizButton)
                        
                        // Settings Button
                        Button(action: { showingSettings = true }) {
                            Image(systemName: "gearshape.fill")
                                .font(.system(size: 20))
                                .foregroundColor(.appGold)
                                .padding(12)
                                .background(
                                    Circle()
                                        .fill(Color.white.opacity(0.1))
                                )
                        }
                        .onboardingHighlight(.settingsButton)
                    }
                }
                .padding(.horizontal, 20)
                .padding(.vertical, 20)
                
                ScrollView {
                    LazyVStack(spacing: 12) {
                        ForEach(Array(filteredNames.enumerated()), id: \.element.id) { index, name in
                            Button(action: { if name.hasContent { selectedNameId = name.nameId } }) {
                                HStack(spacing: 16) {
                                    ZStack {
                                        Circle()
                                            .fill(name.hasContent ? Color.appGold : Color.white.opacity(0.15))
                                            .frame(width: 44, height: 44)
                                        Text("\(name.number)")
                                            .font(.system(size: 14, weight: .semibold))
                                            .foregroundColor(name.hasContent ? Color(red: 0.1, green: 0.1, blue: 0.15) : .white.opacity(0.7))
                                    }
                                    
                                    VStack(alignment: .leading, spacing: 4) {
                                        Text(name.arabic)
                                            .font(.system(size: 22, weight: .semibold, design: .serif))
                                            .foregroundColor(.white)
                                        HStack(spacing: 8) {
                                            Text(name.transliteration)
                                                .font(.system(size: 14, weight: .medium))
                                                .foregroundColor(Color.appGold)
                                            Text("•").foregroundColor(.white.opacity(0.3))
                                            Text(name.meaning)
                                                .font(.system(size: 14, weight: .light))
                                                .foregroundColor(.white.opacity(0.6))
                                        }
                                    }
                                    Spacer()
                                    Image(systemName: name.hasContent ? "chevron.right" : "lock.fill")
                                        .font(.system(size: name.hasContent ? 14 : 12, weight: .semibold))
                                        .foregroundColor(name.hasContent ? Color.appGold : .white.opacity(0.3))
                                }
                                .padding(16)
                                .background(
                                    RoundedRectangle(cornerRadius: 16)
                                        .fill(Color.white.opacity(name.hasContent ? 0.08 : 0.04))
                                        .overlay(RoundedRectangle(cornerRadius: 16).stroke(name.hasContent ? Color.appGold.opacity(0.3) : Color.white.opacity(0.08), lineWidth: 1))
                                )
                            }
                            .contextMenu {
                                Button(action: {
                                    calligraphyName = name
                                    showingCalligraphy = true
                                }) {
                                    Label("View Calligraphy", systemImage: "paintbrush.pointed.fill")
                                }
                                
                                if name.hasContent {
                                    Button(action: {
                                        selectedNameId = name.nameId
                                    }) {
                                        Label("Learn Story", systemImage: "book.fill")
                                    }
                                }
                            }
                            .opacity(name.hasContent ? 1.0 : 0.6)
                            .modifier(OnboardingHighlightModifier(target: .namesList, shouldApply: index == 0))
                        }
                    }
                    .padding(.horizontal, 20)
                    .padding(.bottom, 100)
                    
                    // No results message
                    if filteredNames.isEmpty {
                        VStack(spacing: 16) {
                            Image(systemName: "magnifyingglass")
                                .font(.system(size: 50))
                                .foregroundColor(.white.opacity(0.3))
                            
                            Text("No names found")
                                .font(.system(size: 18, weight: .medium))
                                .foregroundColor(.white.opacity(0.6))
                            
                            Text("Try searching by Arabic, English name, or meaning")
                                .font(.system(size: 14, weight: .light))
                                .foregroundColor(.white.opacity(0.4))
                                .multilineTextAlignment(.center)
                                .padding(.horizontal, 40)
                        }
                        .frame(maxWidth: .infinity)
                        .padding(.top, 100)
                    }
                }
            }
                    // Onboarding overlay for first-time users
            if showOnboarding {
                OnboardingGuideView(isShowing: $showOnboarding, highlightFrames: highlightFrames)
                    .zIndex(100)
            }
        }
        .onPreferenceChange(OnboardingFramePreferenceKey.self) { frames in
            highlightFrames.merge(frames) { $1 }
        }
        .onAppear {
            // Show onboarding for first-time users
            if !hasCompletedOnboarding {
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                    withAnimation(.easeOut(duration: 0.3)) {
                        showOnboarding = true
                    }
                }
            }
        }
        .onChange(of: hasCompletedOnboarding) { completed in
            // Show onboarding when reset from settings
            if !completed && !showOnboarding {
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                    withAnimation(.easeOut(duration: 0.3)) {
                        showOnboarding = true
                    }
                }
            }
        }
        .navigationBarTitleDisplayMode(.inline)
        .if(!showOnboarding) { view in
            view.searchable(text: $searchText, prompt: "Search by name or meaning")
        }
        .navigationDestination(item: $selectedNameId) { nameId in
            CinematicView(nameId: nameId)
        }
        .sheet(isPresented: $showingSettings) {
            NavigationStack {
                SettingsView()
            }
        }
        .navigationDestination(isPresented: $showingQuiz) {
            QuizHomeView()
        }
        .navigationDestination(isPresented: $showingAdvisor) {
            FeelingAdvisorView()
        }
        .fullScreenCover(isPresented: $showingCalligraphy) {
            if let name = calligraphyName {
                CalligraphyView(name: name)
            }
        }
    }
}

#Preview {
    NavigationStack {
        NamesListView()
    }
}
