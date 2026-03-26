import SwiftUI

struct HomeView: View {
    var body: some View {
        NavigationStack {
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
                
                VStack {
                    Spacer()
                    
                    NavigationLink(destination: CinematicView(nameId: "al-fattah")) {
                        VStack(spacing: 20) {
                            Text("ٱلْفَتَّاحُ")
                                .font(.system(size: 48, weight: .bold, design: .serif))
                                .foregroundColor(.white)
                            
                            Text("Experience Al-Fattāḥ")
                                .font(.system(size: 20, weight: .medium))
                                .foregroundColor(.white.opacity(0.95))
                            
                            Text("The Opener")
                                .font(.system(size: 16, weight: .light))
                                .foregroundColor(.white.opacity(0.7))
                        }
                        .frame(maxWidth: 320)
                        .padding(.vertical, 50)
                        .padding(.horizontal, 40)
                        .background(
                            RoundedRectangle(cornerRadius: 20)
                                .fill(Color.white.opacity(0.08))
                                .overlay(
                                    RoundedRectangle(cornerRadius: 20)
                                        .stroke(Color.white.opacity(0.2), lineWidth: 1)
                                )
                                .shadow(color: .black.opacity(0.3), radius: 20, x: 0, y: 10)
                        )
                    }
                    .buttonStyle(CardButtonStyle())
                    
                    Spacer()
                }
                .padding(.horizontal, 24)
            }
        }
    }
}

struct CardButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.96 : 1.0)
            .opacity(configuration.isPressed ? 0.9 : 1.0)
            .animation(.easeInOut(duration: 0.2), value: configuration.isPressed)
    }
}//
//  HomeView.swift
//  Names of Allah
//
//  Created by Mohammed Asad Hashmi on 08/12/2025.
//

