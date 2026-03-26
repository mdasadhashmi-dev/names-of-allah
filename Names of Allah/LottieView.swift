//
//  LottieView.swift
//  Names of Allah
//
//  Created by Mohammed Asad Hashmi on 08/12/2025.
//

import SwiftUI
import Lottie

struct LottieView: UIViewRepresentable {
    let filename: String
    @Binding var isPlaying: Bool
    
    func makeUIView(context: Context) -> LottieAnimationView {
        let animationView = LottieAnimationView()
        animationView.contentMode = .scaleAspectFit
        animationView.loopMode = .playOnce
        animationView.backgroundBehavior = .pauseAndRestore
        
        if let animation = LottieAnimation.named(filename) {
            animationView.animation = animation
        } else {
            print("Warning: Could not load Lottie animation named '\(filename)'")
        }
        
        return animationView
    }
    
    func updateUIView(_ uiView: LottieAnimationView, context: Context) {
        if isPlaying && !uiView.isAnimationPlaying {
            uiView.play()
        } else if !isPlaying {
            uiView.pause()
        }
    }
}
