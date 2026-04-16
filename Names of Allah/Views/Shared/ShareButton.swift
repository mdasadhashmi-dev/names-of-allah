//
//  ShareButton.swift
//  Names of Allah
//
//  Share button for sharing name details via iOS share sheet
//

import SwiftUI

struct ShareButton: View {
    let name: AllahName

    var body: some View {
        Button(action: shareName) {
            HStack(spacing: 8) {
                Image(systemName: "square.and.arrow.up")
                    .font(.system(size: 16))
                Text("Share")
                    .font(.system(size: 15, weight: .medium, design: .serif))
            }
            .foregroundColor(Color.appGold)
            .padding(.horizontal, 20)
            .padding(.vertical, 10)
            .background(
                RoundedRectangle(cornerRadius: 20)
                    .fill(Color.appGold.opacity(0.15))
                    .overlay(
                        RoundedRectangle(cornerRadius: 20)
                            .stroke(Color.appGold.opacity(0.4), lineWidth: 1)
                    )
            )
        }
    }

    private func shareName() {
        var text = "\(name.arabic) — \(name.transliteration)\n"
        text += "\"\(name.meaning)\"\n\n"
        if let ref = name.quranicReference {
            text += "\(ref)\n\n"
        }
        if let question = name.reflectionQuestion {
            text += "Reflect: \(question)\n\n"
        }
        text += "From the 99 Names of Allah app"

        let activityVC = UIActivityViewController(
            activityItems: [text],
            applicationActivities: nil
        )

        guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
              let rootVC = windowScene.windows.first?.rootViewController else { return }

        // Handle iPad popover
        if let popover = activityVC.popoverPresentationController {
            popover.sourceView = rootVC.view
            popover.sourceRect = CGRect(x: rootVC.view.bounds.midX, y: rootVC.view.bounds.midY, width: 0, height: 0)
            popover.permittedArrowDirections = []
        }

        rootVC.present(activityVC, animated: true)
    }
}

// Compact share icon button for toolbars and context menus
struct ShareIconButton: View {
    let name: AllahName

    var body: some View {
        Button(action: shareName) {
            Image(systemName: "square.and.arrow.up")
                .font(.system(size: 20))
                .foregroundColor(Color.appGold)
                .padding(12)
                .background(
                    Circle()
                        .fill(Color.white.opacity(0.1))
                )
        }
    }

    private func shareName() {
        var text = "\(name.arabic) — \(name.transliteration)\n"
        text += "\"\(name.meaning)\"\n\n"
        if let ref = name.quranicReference {
            text += "\(ref)\n\n"
        }
        if let question = name.reflectionQuestion {
            text += "Reflect: \(question)\n\n"
        }
        text += "From the 99 Names of Allah app"

        let activityVC = UIActivityViewController(
            activityItems: [text],
            applicationActivities: nil
        )

        guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
              let rootVC = windowScene.windows.first?.rootViewController else { return }

        if let popover = activityVC.popoverPresentationController {
            popover.sourceView = rootVC.view
            popover.sourceRect = CGRect(x: rootVC.view.bounds.midX, y: rootVC.view.bounds.midY, width: 0, height: 0)
            popover.permittedArrowDirections = []
        }

        rootVC.present(activityVC, animated: true)
    }
}
