# Names of Allah - App Framework

## 📁 Project Structure

```
Names of Allah/
├── Models/
│   └── AllahName.swift                  # Core data model & database
│
├── Views/
│   ├── Shared/
│   │   ├── SharedComponents.swift       # Reusable UI components
│   │   └── BaseReflectionView.swift     # Generic reflection view
│   │
│   ├── Home/
│   │   ├── WelcomeView.swift           # Onboarding screen
│   │   ├── NamesListView.swift         # Browse all 99 names
│   │   └── HomeView.swift              # (Legacy - can be removed)
│   │
│   ├── Stories/
│   │   ├── Al-Fattah/
│   │   │   ├── SeaPartingView.swift    # Continuous animation
│   │   │   └── ReflectionView.swift    # Reflection journal
│   │   │
│   │   ├── Al-Lateef/
│   │   │   ├── YusufStoryView.swift    # 10-screen story
│   │   │   └── AlLateefReflectionView.swift
│   │   │
│   │   ├── Ar-Razzaq/
│   │   │   ├── MaryamStoryView.swift   # 9-screen story
│   │   │   └── ArRazzaqReflectionView.swift
│   │   │
│   │   └── Al-Hakim/
│   │       ├── KhidrStoryView.swift    # 11-screen story
│   │       └── AlHakimReflectionView.swift
│   │
│   └── CinematicView.swift             # Story router
│
├── Assets.xcassets/
│   ├── Audio/                          # MP3 files for Quranic verses
│   │   ├── yusuf-12-100.mp3
│   │   ├── ali-imran-3-37.mp3
│   │   └── al-qasas-28-68.mp3
│   │
│   └── AppIcon.appiconset/
│
└── Names_of_AllahApp.swift             # App entry point
```

---

## 🎯 Framework Overview

### **1. Data Layer (`Models/`)**

#### `AllahName.swift`
- **Single source of truth** for all 99 names
- Contains metadata: Arabic, transliteration, meaning, story info
- Database with helper methods

```swift
struct AllahName: Identifiable, Hashable {
    let number: Int
    let arabic: String
    let transliteration: String
    let meaning: String
    let nameId: String
    let hasContent: Bool
    let storyTitle: String?
    let quranicReference: String?
    let audioFileName: String?
    let reflectionQuestion: String?
}
```

### **2. Shared Components (`Views/Shared/`)**

Reusable across all stories:

- `StoryTextBox` - Story text with icon
- `NextButton` - Navigation between screens
- `ExplanationPoint` - Bullet points in final reveal
- `ScrollIndicator` - "Scroll to read more"
- `AyahAudioButton` - Play Quranic verse audio
- `ContinueToReflectButton` - Navigate to reflection
- `ScrollOffsetKey` - Track scroll position
- `Color.appGold`, `Color.appDarkBg` - Brand colors

#### `BaseReflectionView.swift`
- Generic reflection view for any name
- Automatically saves to UserDefaults with key: `"{nameId}-reflection"`
- Pass an `AllahName` object, it handles the rest

### **3. Story Pattern**

Each name follows this structure:

```
Story Folder/
├── {Name}StoryView.swift       # Multi-screen story OR continuous animation
└── {Name}ReflectionView.swift  # Can use BaseReflectionView
```

**Multi-Screen Story Template:**
```swift
struct {Name}StoryView: View {
    @State private var currentScreen = 0
    @State private var showContent = false
    let totalScreens = 10  // Adjust per story
    
    var body: some View {
        ZStack {
            // Background gradient
            // Screen switcher
            // Next button (if not final screen)
            // Progress indicator
        }
    }
    
    // Screen 1, 2, 3... up to N-1
    // Screen N: Final Reveal with:
    // - Quranic verse (Arabic + translation)
    // - Name reveal with glow
    // - Explanation points
    // - Audio button
    // - Continue to reflect button
}
```

---

## 🚀 Adding a New Name

### Step 1: Add to Database

```swift
// Models/AllahName.swift
AllahName(
    number: 99,
    arabic: "ٱلصَّبُورُ",
    transliteration: "As-Saboor",
    meaning: "The Most Patient",
    nameId: "as-saboor",
    hasContent: true,
    storyTitle: "Prophet Ayyub AS and Patience",
    quranicReference: "Surah Al-Baqarah 2:153",
    audioFileName: "al-baqarah-2-153",
    reflectionQuestion: "When did patience through hardship bring you closer to Allah?"
)
```

### Step 2: Create Story Files

```
Views/Stories/As-Saboor/
├── AyyubStoryView.swift
└── AsSaboorReflectionView.swift  // or use BaseReflectionView
```

### Step 3: Add Routing

```swift
// CinematicView.swift
if nameId == "as-saboor" {
    AyyubStoryView()
} else if nameId == "ar-razzaq" {
    // ... existing
}

// Reflection routing
if nameId == "as-saboor" {
    BaseReflectionView(allahName: AllahNamesDatabase.getName(byId: nameId)!)
} else if nameId == "ar-razzaq" {
    // ... existing
}
```

### Step 4: Add Audio (Optional)

1. Get MP3 of the Quranic verse
2. Add to Xcode project: `al-baqarah-2-153.mp3`
3. Audio auto-plays on final screen

---

## 📋 Story Design Guidelines

### Visual Style
- **Dark gradients** for backgrounds
- **Gold accent** (rgb: 0.85, 0.75, 0.55) for highlights
- **SF Symbols** for icons
- **Serif fonts** for elegance

### Screen Count
- **Short stories**: 8-9 screens
- **Medium stories**: 10-11 screens
- **Long stories**: 12-15 screens (max)

### Pacing
- Each screen: 1 key moment or image
- Text: 2-4 lines max per screen
- Build tension → climax → resolution → name reveal

### Final Screen Structure
1. Decorative pattern (golden threads, etc.)
2. Arabic verse (bold, centered)
3. Surah reference (small, gold)
4. English translation (italic)
5. Divider
6. Name in Arabic (large, glowing)
7. Transliteration + meaning
8. Divider
9. 4 explanation bullets connecting story to name
10. Divider
11. Closing message about the name
12. Audio button
13. Continue to reflect button

---

## 🎨 Brand Colors

```swift
Color.appGold         // rgb(0.85, 0.75, 0.55) - Primary accent
Color.appSoftGold     // rgb(0.9, 0.82, 0.65)  - Lighter variant
Color.appDarkBg       // rgb(0.05, 0.08, 0.18) - Main background
```

---

## 💾 Data Persistence

- **Reflections**: UserDefaults with key `"{nameId}-reflection"`
- **Completed names**: Can add completion tracking
- **Favorites**: Can add favorites system

---

## 🎯 Scalability

### Current State
- 4 active names with full content
- 3 placeholder names (coming soon)
- Framework ready for all 99 names

### Next Steps
1. Add 5-10 most important names first
2. Group by theme (Mercy, Power, Knowledge, etc.)
3. Build collections: "Names of Mercy", "Names in Hardship"
4. Add search functionality
5. Add bookmarking

---

## 🧪 Testing Checklist

For each new name:
- [ ] Appears in names list
- [ ] Gold highlight if `hasContent: true`
- [ ] Tapping navigates to story
- [ ] All screens display correctly
- [ ] Next button works
- [ ] Progress indicator updates
- [ ] Final screen scrollable
- [ ] Scroll indicator appears/hides
- [ ] Audio attempts to play (logs message if missing)
- [ ] Continue to reflect navigates
- [ ] Reflection saves to UserDefaults
- [ ] Reflection loads on return
- [ ] Back navigation works throughout

---

## 📚 Story Ideas for Remaining Names

| Name | Story Suggestion |
|------|------------------|
| **Ar-Rahman** | Creation of humanity, Allah's mercy to all |
| **Ar-Raheem** | Repentance of Adam AS |
| **As-Salaam** | Ibrahim AS and the sacrifice |
| **Al-Mumin** | Musa AS and burning bush |
| **Al-Aziz** | Battle of Badr |
| **Al-Jabbar** | Pharaoh's tyranny vs Allah's power |
| **Al-Khaliq** | Isa AS created without father |
| **Al-Ghaffar** | Yunus AS in the whale |
| **Al-Wahhab** | Sulaiman AS given kingdom |
| **Al-Aleem** | Luqman AS wisdom |

---

## 🎓 Code Reusability

### High Reusability
✅ `SharedComponents.swift` - Use everywhere
✅ `BaseReflectionView` - Use for simple reflections
✅ `AllahNamesDatabase` - Single source of truth

### Customize Per Story
⚙️ Background gradients (set the mood)
⚙️ Visual metaphors (icons, shapes, animations)
⚙️ Screen count (story length)
⚙️ Explanation points (4-5 per name)

### Don't Repeat
❌ Don't copy-paste StoryTextBox
❌ Don't copy-paste NextButton
❌ Don't copy-paste reflection views
❌ Don't hardcode colors

Use the framework! 🚀




