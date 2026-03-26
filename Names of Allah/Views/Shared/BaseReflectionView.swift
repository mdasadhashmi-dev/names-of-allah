//
//  BaseReflectionView.swift
//  Names of Allah
//
//  Reusable reflection view for all names
//

import SwiftUI

struct BaseReflectionView: View {
    let allahName: AllahName
    @Environment(\.dismiss) var dismiss
    @State private var reflectionText: String = ""
    @State private var showSavedMessage = false
    @State private var showExtendedLearning = false
    @FocusState private var isTextEditorFocused: Bool
    
    var body: some View {
        ZStack {
            LinearGradient(
                colors: [
                    Color(red: 0.1, green: 0.15, blue: 0.3),
                    Color.black
                ],
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()
            
            ScrollView {
                VStack(alignment: .leading, spacing: 30) {
                    VStack(spacing: 12) {
                        Text(allahName.arabic)
                            .font(.system(size: 40, weight: .bold, design: .serif))
                            .foregroundColor(.white)
                            .frame(maxWidth: .infinity, alignment: .center)
                        
                        Text("\(allahName.transliteration) • \(allahName.meaning)")
                            .font(.system(size: 16, weight: .light))
                            .foregroundColor(.white.opacity(0.8))
                            .frame(maxWidth: .infinity, alignment: .center)
                    }
                    .padding(.top, 20)
                    
                    Divider()
                        .background(Color.white.opacity(0.2))
                        .padding(.vertical, 10)
                    
                    VStack(alignment: .leading, spacing: 16) {
                        Text(allahName.reflectionQuestion ?? "Reflect on this name of Allah in your life.")
                            .font(.system(size: 20, weight: .semibold))
                            .foregroundColor(.white)
                            .lineSpacing(4)
                        
                        ZStack(alignment: .topLeading) {
                            RoundedRectangle(cornerRadius: 12)
                                .fill(Color.white.opacity(0.1))
                                .overlay(
                                    RoundedRectangle(cornerRadius: 12)
                                        .stroke(Color.white.opacity(0.3), lineWidth: 1)
                                )
                            
                            TextEditor(text: $reflectionText)
                                .font(.system(size: 16, weight: .regular))
                                .foregroundColor(.white)
                                .scrollContentBackground(.hidden)
                                .background(Color.clear)
                                .padding(12)
                                .focused($isTextEditorFocused)
                            
                            if reflectionText.isEmpty {
                                Text("Share your thoughts...")
                                    .font(.system(size: 16, weight: .regular))
                                    .foregroundColor(.white.opacity(0.4))
                                    .padding(.horizontal, 16)
                                    .padding(.vertical, 20)
                                    .allowsHitTesting(false)
                            }
                        }
                        .frame(height: 150)
                        
                        Button(action: saveReflection) {
                            Text("Save")
                                .font(.system(size: 16, weight: .medium))
                                .foregroundColor(.white)
                                .frame(maxWidth: .infinity)
                                .padding(.vertical, 14)
                                .background(
                                    RoundedRectangle(cornerRadius: 10)
                                        .fill(Color.white.opacity(0.15))
                                        .overlay(
                                            RoundedRectangle(cornerRadius: 10)
                                                .stroke(Color.white.opacity(0.3), lineWidth: 1)
                                        )
                                )
                        }
                        .disabled(reflectionText.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)
                        .opacity(reflectionText.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty ? 0.5 : 1.0)
                        
                        if showSavedMessage {
                            HStack(spacing: 8) {
                                Image(systemName: "checkmark.circle.fill")
                                    .foregroundColor(.green.opacity(0.9))
                                Text("Reflection saved ✅")
                                    .font(.system(size: 15, weight: .medium))
                                    .foregroundColor(.white.opacity(0.9))
                            }
                            .frame(maxWidth: .infinity, alignment: .center)
                            .padding(.vertical, 10)
                            .background(
                                RoundedRectangle(cornerRadius: 8)
                                    .fill(Color.green.opacity(0.2))
                                    .overlay(
                                        RoundedRectangle(cornerRadius: 8)
                                            .stroke(Color.green.opacity(0.4), lineWidth: 1)
                                    )
                            )
                            .transition(.opacity.combined(with: .scale))
                        }
                    }
                    
                    Divider()
                        .background(Color.white.opacity(0.2))
                        .padding(.vertical, 20)
                    
                    // Extended Learning Button
                    Button(action: { showExtendedLearning = true }) {
                        HStack(spacing: 12) {
                            Image(systemName: "book.fill")
                                .font(.system(size: 18))
                            
                            VStack(alignment: .leading, spacing: 4) {
                                Text("Dive Deeper")
                                    .font(.system(size: 17, weight: .semibold))
                                Text("Hadiths, Scholars, Du'as & More")
                                    .font(.system(size: 13, weight: .light))
                            }
                            
                            Spacer()
                            
                            Image(systemName: "arrow.right.circle.fill")
                                .font(.system(size: 24))
                        }
                        .foregroundColor(.white)
                        .padding(20)
                        .background(
                            RoundedRectangle(cornerRadius: 16)
                                .fill(
                                    LinearGradient(
                                        colors: [
                                            Color.appGold.opacity(0.3),
                                            Color.appGold.opacity(0.15)
                                        ],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                                .overlay(
                                    RoundedRectangle(cornerRadius: 16)
                                        .stroke(Color.appGold.opacity(0.5), lineWidth: 1)
                                )
                        )
                        .shadow(color: Color.appGold.opacity(0.2), radius: 10, x: 0, y: 5)
                    }
                    
                    Spacer().frame(height: 40)
                }
                .padding(.horizontal, 24)
                .padding(.bottom, 40)
            }
            .onTapGesture {
                isTextEditorFocused = false
            }
        }
        .navigationBarTitleDisplayMode(.inline)
        .onAppear {
            loadReflection()
        }
        .sheet(isPresented: $showExtendedLearning) {
            NavigationStack {
                ExtendedLearningView(nameId: allahName.nameId, name: allahName)
            }
        }
    }
    
    private func saveReflection() {
        let trimmedText = reflectionText.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmedText.isEmpty else { return }
        
        UserDefaults.standard.set(trimmedText, forKey: "\(allahName.nameId)-reflection")
        isTextEditorFocused = false
        
        withAnimation(.easeIn(duration: 0.3)) {
            showSavedMessage = true
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) {
            withAnimation(.easeOut(duration: 0.3)) {
                showSavedMessage = false
            }
        }
    }
    
    private func loadReflection() {
        if let savedReflection = UserDefaults.standard.string(forKey: "\(allahName.nameId)-reflection") {
            reflectionText = savedReflection
        }
    }
}

#Preview {
    BaseReflectionView(allahName: AllahNamesDatabase.all[0])
}


