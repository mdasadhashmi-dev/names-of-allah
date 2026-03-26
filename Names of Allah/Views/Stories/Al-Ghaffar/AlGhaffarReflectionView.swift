//
//  AlGhaffarReflectionView.swift
//  Names of Allah
//
//  Created by Mohammed Asad Hashmi on 08/12/2025.
//

import SwiftUI

struct AlGhaffarReflectionView: View {
    var body: some View {
        if let alGhaffar = AllahNamesDatabase.getName(byId: "al-ghaffar") {
            BaseReflectionView(allahName: alGhaffar)
        } else {
            Text("Error loading reflection")
        }
    }
}

#Preview {
    AlGhaffarReflectionView()
}



