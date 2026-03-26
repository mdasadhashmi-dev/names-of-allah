//
//  AlLateefReflectionView.swift
//  Names of Allah
//
//  Created by Mohammed Asad Hashmi on 08/12/2025.
//

import SwiftUI

struct AlLateefReflectionView: View {
    var body: some View {
        if let alLateef = AllahNamesDatabase.getName(byId: "al-lateef") {
            BaseReflectionView(allahName: alLateef)
        } else {
            Text("Error loading reflection")
        }
    }
}

#Preview {
    AlLateefReflectionView()
}




