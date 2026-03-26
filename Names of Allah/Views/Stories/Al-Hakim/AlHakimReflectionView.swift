//
//  AlHakimReflectionView.swift
//  Names of Allah
//
//  Created by Mohammed Asad Hashmi on 08/12/2025.
//

import SwiftUI

struct AlHakimReflectionView: View {
    var body: some View {
        if let alHakim = AllahNamesDatabase.getName(byId: "al-hakim") {
            BaseReflectionView(allahName: alHakim)
        } else {
            Text("Error loading reflection")
        }
    }
}

#Preview {
    AlHakimReflectionView()
}




