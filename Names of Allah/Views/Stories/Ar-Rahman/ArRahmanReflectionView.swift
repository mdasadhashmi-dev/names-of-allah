//
//  ArRahmanReflectionView.swift
//  Names of Allah
//
//  Created by Mohammed Asad Hashmi on 08/12/2025.
//

import SwiftUI

struct ArRahmanReflectionView: View {
    var body: some View {
        if let arRahman = AllahNamesDatabase.getName(byId: "ar-rahman") {
            BaseReflectionView(allahName: arRahman)
        } else {
            Text("Error loading reflection")
        }
    }
}

#Preview {
    ArRahmanReflectionView()
}



