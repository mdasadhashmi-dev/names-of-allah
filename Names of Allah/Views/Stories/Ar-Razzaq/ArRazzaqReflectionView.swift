//
//  ArRazzaqReflectionView.swift
//  Names of Allah
//
//  Created by Mohammed Asad Hashmi on 08/12/2025.
//

import SwiftUI

struct ArRazzaqReflectionView: View {
    var body: some View {
        if let arRazzaq = AllahNamesDatabase.getName(byId: "ar-razzaq") {
            BaseReflectionView(allahName: arRazzaq)
        } else {
            Text("Error loading reflection")
        }
    }
}

#Preview {
    ArRazzaqReflectionView()
}




