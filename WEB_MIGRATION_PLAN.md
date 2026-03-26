# Names of Allah — iOS to Web App Migration Document

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Project Structure](#3-project-structure)
4. [Data Layer Migration](#4-data-layer-migration)
5. [Component Architecture](#5-component-architecture)
6. [Page-by-Page Migration](#6-page-by-page-migration)
7. [Animation Strategy](#7-animation-strategy)
8. [State Management & Persistence](#8-state-management--persistence)
9. [Theming System](#9-theming-system)
10. [Audio & Assets](#10-audio--assets)
11. [Search & Matching Algorithms](#11-search--matching-algorithms)
12. [Notifications (Web Push)](#12-notifications-web-push)
13. [PWA Configuration](#13-pwa-configuration)
14. [Deployment](#14-deployment)
15. [Implementation Phases](#15-implementation-phases)
16. [File-by-File Mapping](#16-file-by-file-mapping)

---

## 1. Project Overview

### What We're Building
A Next.js web application that replicates the full iOS "Names of Allah" experience — including interactive multi-screen stories, personal reflection journaling, a feeling-based advisor, quizzes, and theming — running entirely client-side with localStorage persistence.

### Current iOS App Summary
- **130 Swift files** across Models, Views, Services
- **99 Names** database with metadata (Arabic, transliteration, meaning, Quranic references)
- **6 fully animated stories** (Al-Fattah, Ar-Rahman, Ar-Raheem, Al-Lateef/Yusuf, Al-Ghaffar/Yunus, Ar-Razzaq/Maryam, Al-Hakim/Khidr)
- **93 names** using a base reflection template
- **Feeling Advisor** with 26+ emotions mapped to names via fuzzy search
- **Quiz system** with progress tracking
- **Theme system** (4 color schemes, 3 appearance modes, 4 font sizes)
- **Daily notifications** cycling through names
- **Lottie animation** + **audio playback**

---

## 2. Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Next.js 14+ (App Router) | SSR/SSG for SEO, file-based routing, React Server Components |
| **Language** | TypeScript | Type safety matching Swift's strong typing |
| **Styling** | Tailwind CSS + CSS Variables | Utility-first, easy theming via CSS custom properties |
| **Animation** | Framer Motion | Declarative animations matching SwiftUI's pattern |
| **Lottie** | lottie-react | Direct port of existing `.json` animation |
| **Audio** | Howler.js or native `<audio>` | Cross-browser audio playback |
| **Icons** | Lucide React | Replaces SF Symbols |
| **Persistence** | localStorage | Matches UserDefaults behavior |
| **Deployment** | Vercel | Zero-config Next.js deployment |
| **PWA** | next-pwa | Installable web app with offline support |

### Package Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0",
    "lottie-react": "^2.4.0",
    "lucide-react": "^0.300.0",
    "tailwindcss": "^3.4.0",
    "next-pwa": "^5.6.0",
    "howler": "^2.2.4"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

---

## 3. Project Structure

```
names-of-allah-web/
├── public/
│   ├── audio/
│   │   └── yusuf-12-100.mp3
│   ├── animations/
│   │   └── al-fattah.json
│   ├── icons/
│   │   ├── icon-192.png
│   │   └── icon-512.png
│   └── manifest.json
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (ThemeProvider, fonts)
│   │   ├── page.tsx                  # Welcome/onboarding page
│   │   ├── names/
│   │   │   └── page.tsx              # Names list (main hub)
│   │   ├── story/
│   │   │   └── [nameId]/
│   │   │       └── page.tsx          # Story router (CinematicView equivalent)
│   │   ├── reflect/
│   │   │   └── [nameId]/
│   │   │       └── page.tsx          # Reflection page
│   │   ├── advisor/
│   │   │   └── page.tsx              # Feeling advisor
│   │   ├── quiz/
│   │   │   ├── page.tsx              # Quiz home (mode selection)
│   │   │   └── play/
│   │   │       └── page.tsx          # Quiz game
│   │   ├── learn/
│   │   │   └── [nameId]/
│   │   │       └── page.tsx          # Extended learning
│   │   └── settings/
│   │       └── page.tsx              # Settings/theme
│   │
│   ├── components/
│   │   ├── shared/
│   │   │   ├── StoryTextBox.tsx
│   │   │   ├── NextButton.tsx
│   │   │   ├── ExplanationPoint.tsx
│   │   │   ├── ScrollIndicator.tsx
│   │   │   ├── AyahAudioButton.tsx
│   │   │   ├── ContinueToReflectButton.tsx
│   │   │   ├── ProgressIndicator.tsx
│   │   │   └── GlassmorphismCard.tsx
│   │   ├── welcome/
│   │   │   ├── AmbientLights.tsx
│   │   │   ├── LogoSection.tsx
│   │   │   ├── HadithCard.tsx
│   │   │   └── GeometricPattern.tsx
│   │   ├── stories/
│   │   │   ├── SeaPartingView.tsx      # Al-Fattah animation
│   │   │   ├── ArRahmanStory.tsx       # 9-screen story
│   │   │   ├── ArRaheemStory.tsx       # 8-screen story
│   │   │   ├── YusufStory.tsx          # 10-screen story
│   │   │   ├── YunusStory.tsx          # 10-screen story
│   │   │   ├── MaryamStory.tsx         # 9-screen story
│   │   │   ├── KhidrStory.tsx          # 11-screen story
│   │   │   └── BaseStory.tsx           # Generic template (93 names)
│   │   ├── advisor/
│   │   │   ├── FeelingInput.tsx
│   │   │   ├── CategoryChips.tsx
│   │   │   └── ResultCard.tsx
│   │   ├── quiz/
│   │   │   ├── QuestionCard.tsx
│   │   │   ├── AnswerButton.tsx
│   │   │   └── QuizResults.tsx
│   │   └── reflection/
│   │       ├── ReflectionEditor.tsx
│   │       └── ExtendedLearningSheet.tsx
│   │
│   ├── data/
│   │   ├── names.ts                   # 99 names database
│   │   ├── feelings.json              # Direct port of feelings-to-names.json
│   │   ├── extended-learning.ts       # Hadiths, duas, scholarly insights
│   │   └── stories/                   # Story screen content
│   │       ├── ar-rahman.ts
│   │       ├── yusuf.ts
│   │       └── ...
│   │
│   ├── hooks/
│   │   ├── useLocalStorage.ts         # Generic localStorage hook
│   │   ├── useTheme.ts                # Theme state
│   │   ├── useAudioPlayer.ts          # Audio playback
│   │   ├── useQuizSession.ts          # Quiz state machine
│   │   └── useNotifications.ts        # Web Push wrapper
│   │
│   ├── lib/
│   │   ├── feeling-advisor.ts         # Search algorithm port
│   │   ├── quiz-generator.ts          # Question generation
│   │   ├── levenshtein.ts             # Fuzzy matching
│   │   └── constants.ts               # App-wide constants
│   │
│   ├── providers/
│   │   └── ThemeProvider.tsx           # Context provider for theme
│   │
│   └── styles/
│       └── globals.css                # Tailwind base + CSS variables
│
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 4. Data Layer Migration

### 4.1 AllahName Model

**Swift (current):**
```swift
struct AllahName: Identifiable, Hashable {
    let id: UUID
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

**TypeScript (target):**
```typescript
// src/data/names.ts

export interface AllahName {
  id: string;            // UUID string
  number: number;        // 1-99
  arabic: string;        // Arabic text
  transliteration: string;
  meaning: string;
  nameId: string;        // URL-safe slug (e.g., "ar-rahman")
  hasContent: boolean;
  storyTitle?: string;
  quranicReference?: string;
  audioFileName?: string;
  reflectionQuestion?: string;
}

export const allNames: AllahName[] = [
  {
    id: crypto.randomUUID(),
    number: 1,
    arabic: "الرَّحْمَنُ",
    transliteration: "Ar-Rahman",
    meaning: "The Most Merciful",
    nameId: "ar-rahman",
    hasContent: true,
    storyTitle: "The Story of Universal Mercy",
    quranicReference: "Surah Ar-Rahman 55:1-13",
    audioFileName: "ar-rahman-55-1.mp3",
    reflectionQuestion: "When was the last time you felt overwhelmed by a mercy you didn't earn?"
  },
  // ... all 99 names
];

// Helper functions
export function getNameById(nameId: string): AllahName | undefined {
  return allNames.find(n => n.nameId === nameId);
}

export function getActiveNames(): AllahName[] {
  return allNames.filter(n => n.hasContent);
}

export function getComingSoonNames(): AllahName[] {
  return allNames.filter(n => !n.hasContent);
}
```

### 4.2 Feeling Model

**TypeScript (target):**
```typescript
// src/data/feelings.ts

export type FeelingCategory = "struggling" | "seeking" | "grateful" | "reflecting";

export interface FeelingToNameLink {
  nameId: string;
  priority: number;       // 1 = primary, 2 = secondary, 3 = tertiary
  rationale: string;
}

export interface Feeling {
  id: string;
  primaryLabel: string;
  aliases: string[];
  description: string;
  category: FeelingCategory;
  linkedNames: FeelingToNameLink[];
}

export const categoryMeta: Record<FeelingCategory, { label: string; description: string; icon: string }> = {
  struggling: { label: "When life feels heavy", description: "...", icon: "cloud-rain" },
  seeking: { label: "Searching for more", description: "...", icon: "sparkles" },
  grateful: { label: "Counting blessings", description: "...", icon: "heart" },
  reflecting: { label: "Looking inward", description: "...", icon: "leaf" },
};
```

### 4.3 Extended Learning Model

```typescript
// src/data/extended-learning.ts

export interface HadithReference {
  id: string;
  arabicText: string;
  transliteration?: string;
  translation: string;
  reference: string;       // e.g., "Sahih Muslim 2752"
  narrator: string;
  source: string;
  grading: string;         // e.g., "Sahih"
  context: string;
}

export interface ScholarlyInsight {
  id: string;
  scholar: string;
  insight: string;
  source: string;
  arabicQuote?: string;
}

export interface DuaReference {
  id: string;
  arabicText: string;
  transliteration: string;
  translation: string;
  occasion: string;
  source: string;
}

export interface ExtendedLearning {
  nameId: string;
  hadiths: HadithReference[];
  scholarlyInsights: ScholarlyInsight[];
  realLifeApplications: string[];
  duas: DuaReference[];
}

// Database with content for 13 names currently
export const extendedLearningDb: Record<string, ExtendedLearning> = {
  "ar-rahman": { ... },
  "ar-raheem": { ... },
  // ... 13 entries total
};
```

### 4.4 Quiz Model

```typescript
// src/lib/quiz-generator.ts

export type QuizMode = "nameFromMeaning" | "meaningFromName";

export interface QuizQuestion {
  id: string;
  prompt: string;
  arabicText?: string;
  options: string[];       // 4 choices
  correctIndex: number;    // 0-3
  relatedNameId: string;
  explanation: string;
}

export interface QuizProgress {
  highScore: number;
  longestStreak: number;
  totalQuizzesCompleted: number;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
}

export function generateQuestions(mode: QuizMode, count: number = 10): QuizQuestion[] {
  const activeNames = getActiveNames();
  const shuffled = [...activeNames].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);

  return selected.map(name => {
    // Pick 3 wrong answers from remaining names
    const wrongNames = activeNames
      .filter(n => n.nameId !== name.nameId)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const correctIndex = Math.floor(Math.random() * 4);
    const options: string[] = [];

    let wrongIdx = 0;
    for (let i = 0; i < 4; i++) {
      if (i === correctIndex) {
        options.push(mode === "nameFromMeaning" ? name.transliteration : name.meaning);
      } else {
        options.push(mode === "nameFromMeaning"
          ? wrongNames[wrongIdx].transliteration
          : wrongNames[wrongIdx].meaning);
        wrongIdx++;
      }
    }

    return {
      id: crypto.randomUUID(),
      prompt: mode === "nameFromMeaning"
        ? `Which name means "${name.meaning}"?`
        : `What does ${name.transliteration} mean?`,
      arabicText: name.arabic,
      options,
      correctIndex,
      relatedNameId: name.nameId,
      explanation: `${name.transliteration} (${name.arabic}) means "${name.meaning}"`,
    };
  });
}
```

---

## 5. Component Architecture

### 5.1 Shared Components

Each maps directly from `SharedComponents.swift`:

| Swift Component | React Component | Props |
|----------------|-----------------|-------|
| `StoryTextBox` | `<StoryTextBox>` | `text: string, icon: string` |
| `NextButton` | `<NextButton>` | `onClick: () => void` |
| `ExplanationPoint` | `<ExplanationPoint>` | `icon: string, text: string` |
| `ScrollIndicator` | `<ScrollIndicator>` | `isVisible: boolean` |
| `AyahAudioButton` | `<AyahAudioButton>` | `isPlaying: boolean, audioFile: string, onToggle: () => void` |
| `ContinueToReflectButton` | `<ContinueToReflectButton>` | `nameId: string` |

### 5.2 Color System

```typescript
// src/lib/constants.ts

export const colors = {
  appGold: "rgb(217, 191, 140)",        // Color(red: 0.85, green: 0.75, blue: 0.55)
  appSoftGold: "rgb(230, 209, 166)",    // Color(red: 0.9, green: 0.82, blue: 0.65)
  appDarkBg: "rgb(13, 20, 46)",         // Color(red: 0.05, green: 0.08, blue: 0.18)
} as const;
```

```css
/* src/styles/globals.css */
:root {
  --app-gold: 217 191 140;
  --app-soft-gold: 230 209 166;
  --app-dark-bg: 13 20 46;
  --text-primary: 255 255 255;
  --text-secondary: 180 180 180;
}
```

### 5.3 Tailwind Configuration

```typescript
// tailwind.config.ts
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "rgb(var(--app-gold) / <alpha-value>)",
          soft: "rgb(var(--app-soft-gold) / <alpha-value>)",
        },
        dark: {
          bg: "rgb(var(--app-dark-bg) / <alpha-value>)",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        arabic: ["Amiri", "Traditional Arabic", "serif"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%": { opacity: "0.6", transform: "scale(1)" },
          "100%": { opacity: "1", transform: "scale(1.05)" },
        },
        "float": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-8px)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
};
```

---

## 6. Page-by-Page Migration

### 6.1 Welcome Page (`/`)

**iOS Source:** `WelcomeView.swift`

**Elements to Port:**
- Animated dark gradient background (deep blue → black)
- Ambient light orbs (4 positioned circles, fading animation)
- Logo section: 3 concentric circles + sparkle icon (rotating 360° over 20s)
- Arabic title "أسماء الله الحسنى" (44pt, gold glow shadow)
- English subtitle (22pt, serif)
- Hadith card with glassmorphism (blurred background, angular gradient border)
- "Begin Your Journey" gold gradient button
- Staggered entrance animation (1.2s easeOut, 0.3s delay)

**Framer Motion Animations:**
```tsx
// Staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
};

// Continuous animations
const glowAnimation = {
  scale: [1, 1.05, 1],
  opacity: [0.6, 1, 0.6],
  transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
};

const floatAnimation = {
  y: [0, -8, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
};

const rotateAnimation = {
  rotate: 360,
  transition: { duration: 20, repeat: Infinity, ease: "linear" }
};
```

**Notification Prompt:**
- Check if first visit via localStorage key `"hasSeenNotificationPrompt"`
- Show browser notification permission dialog
- Fallback: skip if not supported

### 6.2 Names List Page (`/names`)

**iOS Source:** `NamesListView.swift`

**Elements to Port:**
- Header with Arabic title + 3 action buttons (Advisor, Quiz, Settings)
- Search bar filtering by: Arabic, transliteration, meaning, number
- Scrollable list of 99 name cards:
  - Number in gold circle (unlocked) or gray circle with lock (locked)
  - Arabic text (right-aligned)
  - Transliteration + meaning
  - Chevron indicator for unlocked names
- Click → navigate to `/story/[nameId]`

**Search Logic:**
```typescript
const filteredNames = useMemo(() => {
  if (!searchText.trim()) return allNames;
  const query = searchText.toLowerCase();
  return allNames.filter(name =>
    name.arabic.includes(query) ||
    name.transliteration.toLowerCase().includes(query) ||
    name.meaning.toLowerCase().includes(query) ||
    String(name.number).includes(query)
  );
}, [searchText]);
```

### 6.3 Story Router Page (`/story/[nameId]`)

**iOS Source:** `CinematicView.swift`

**Implementation:**
```tsx
// src/app/story/[nameId]/page.tsx

export default function StoryPage({ params }: { params: { nameId: string } }) {
  const { nameId } = params;

  // Router switch - maps nameId to story component
  const StoryComponent = getStoryComponent(nameId);

  return <StoryComponent nameId={nameId} />;
}

function getStoryComponent(nameId: string) {
  switch (nameId) {
    case "al-fattah": return SeaPartingView;
    case "ar-rahman": return ArRahmanStory;
    case "ar-raheem": return ArRaheemStory;
    case "al-lateef": return YusufStory;
    case "al-ghaffar": return YunusStory;
    case "ar-razzaq": return MaryamStory;
    case "al-hakim": return KhidrStory;
    default: return BaseStory;
  }
}
```

### 6.4 Multi-Screen Story Pattern

**iOS Source:** `YusufStoryView.swift` (pattern used by all 6 custom stories)

**Pattern:**
```tsx
// src/components/stories/YusufStory.tsx

export function YusufStory({ nameId }: { nameId: string }) {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const totalScreens = 10;
  const router = useRouter();

  const nextScreen = () => {
    setShowContent(false);
    setTimeout(() => {
      if (currentScreen < totalScreens - 1) {
        setCurrentScreen(prev => prev + 1);
        setShowContent(true);
      } else {
        router.push(`/reflect/${nameId}`);
      }
    }, 400);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1a0a2e] to-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {renderScreen(currentScreen)}
        </motion.div>
      </AnimatePresence>

      {/* Progress indicator */}
      <ProgressIndicator current={currentScreen} total={totalScreens} />

      {/* Next button (hidden on final screen) */}
      {currentScreen < totalScreens - 1 && (
        <NextButton onClick={nextScreen} />
      )}
    </div>
  );
}
```

**Progress Indicator:**
```tsx
function ProgressIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className="h-1 rounded-full bg-gold"
          animate={{ width: i === current ? 24 : 8 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ opacity: i <= current ? 1 : 0.3 }}
        />
      ))}
    </div>
  );
}
```

### 6.5 Base Story Template (93 names)

**iOS Source:** `BaseReflectionView.swift` pattern

For names without custom stories, show:
- Name display (Arabic large, transliteration, meaning)
- Quranic reference
- Reflection question
- Direct link to reflection page

### 6.6 Reflection Page (`/reflect/[nameId]`)

**iOS Source:** `BaseReflectionView.swift`

**Elements:**
- Name header (Arabic 36pt, transliteration + meaning)
- Reflection prompt (from database)
- Text editor (textarea, 150px min height)
- Save button (disabled when empty, gold gradient)
- Success message with fade animation
- "Dive Deeper" button → Extended Learning page

**Persistence:**
```typescript
// Save/load reflection text
const storageKey = `${nameId}-reflection`;
const [text, setText] = useLocalStorage(storageKey, "");
```

### 6.7 Feeling Advisor Page (`/advisor`)

**iOS Source:** `FeelingAdvisorView.swift` + `FeelingAdvisorViewModel.swift`

**State Machine:**
```typescript
type AdvisorState =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "results"; result: AdvisorResult }
  | { type: "noMatch" };
```

**UI Sections:**
1. Header (heart icon + title + description)
2. Text input field with submit button
3. Category chips (4 categories, horizontal scroll)
4. Feeling chips within selected category
5. Results:
   - Primary recommendation (large card with Arabic, rationale, "Learn Story" button)
   - Supporting recommendations (compact rows)

### 6.8 Quiz Pages (`/quiz`, `/quiz/play`)

**iOS Source:** `QuizHomeView.swift` + `QuizGameView.swift`

**Quiz Home:**
- Mode selection cards (nameFromMeaning, meaningFromName)
- Stats display (high score, streak, accuracy)

**Quiz Game:**
- Progress bar (animated width)
- Question counter + score + streak badge
- Question prompt (with Arabic text if applicable)
- 4 answer buttons (A/B/C/D labels)
- Feedback section (correct/wrong icon, explanation, next button)
- Results screen (score %, message, stats, retry/exit buttons)

### 6.9 Extended Learning Page (`/learn/[nameId]`)

**iOS Source:** `ExtendedLearningView.swift`

**Sections:**
- Hadiths (Arabic + translation + narrator + reference + grading)
- Scholarly Insights (scholar name + quote + source)
- Real-Life Applications (bullet list)
- Duas (Arabic + transliteration + translation + occasion)

### 6.10 Settings Page (`/settings`)

**iOS Source:** `SettingsView.swift`

**Options:**
- Color scheme picker (Gold, Blue, Green, Purple)
- Appearance mode (System, Light, Dark)
- Font size (Small, Medium, Large, Extra Large)
- Notification toggle + time picker
- Reset onboarding
- Reset quiz progress

---

## 7. Animation Strategy

### 7.1 Animation Library Mapping

| SwiftUI Animation | Framer Motion Equivalent |
|-------------------|--------------------------|
| `.easeOut(duration: 1.2)` | `transition: { duration: 1.2, ease: "easeOut" }` |
| `.easeInOut(duration: 2.5).repeatForever()` | `transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }` |
| `.linear(duration: 20).repeatForever()` | `transition: { duration: 20, repeat: Infinity, ease: "linear" }` |
| `.spring(response: 0.3)` | `transition: { type: "spring", stiffness: 300 }` |
| `withAnimation { }` | `animate={{ }}` prop or `useAnimation()` |
| `.transition(.asymmetric(...))` | `AnimatePresence` with `initial/animate/exit` |
| `.opacity` transition | `initial={{ opacity: 0 }} animate={{ opacity: 1 }}` |

### 7.2 SeaPartingView — Complex Animation Port

**iOS Source:** `SeaPartingView.swift` (26KB, 13+ animation states)

This is the most complex animation in the app. Strategy:

**Layered Composition (bottom to top):**
1. **Night Sky** — CSS gradient background (`from-[#050814] to-[#0a1028]`)
2. **Stars Field** — 50+ absolute-positioned dots with twinkling opacity animation
3. **Clouds** — SVG shapes with horizontal translateX animation
4. **Moon** — Circle with radial gradient glow, positioned top-right
5. **Divine Light Beam** — SVG trapezoid shape, animated width 0→180px on trigger
6. **Light Particles** — Framer Motion particles floating upward
7. **Sea Floor** — Brown gradient revealed when sea parts (clipPath animation)
8. **Sea Walls** — Two mirrored blue gradient panels, translateX left/right
9. **Water Spray** — Small animated circles at sea wall edges
10. **Musa Figure** — SVG/div figure, translateY animation walking forward
11. **Soldiers** — Group of figures, opacity fade + translateX
12. **Text Overlays** — Sequential text boxes with enter/exit animations
13. **Final Message** — Overlay with scale + opacity entrance

**Sequencing (replace DispatchQueue.asyncAfter):**
```typescript
useEffect(() => {
  const sequence = [
    { delay: 0, action: () => setShowSky(true) },
    { delay: 1000, action: () => setShowSea(true) },
    { delay: 2500, action: () => setStaffRaised(true) },
    { delay: 4000, action: () => setSeaParted(true) },
    { delay: 5000, action: () => setShowPath(true) },
    { delay: 6000, action: () => setShowMusa(true) },
    { delay: 8000, action: () => setMusaWalking(true) },
    // ... etc
  ];

  const timeouts = sequence.map(({ delay, action }) =>
    setTimeout(action, delay)
  );

  return () => timeouts.forEach(clearTimeout);
}, []);
```

### 7.3 Story Screen Transitions

```tsx
// Fade out → switch screen → fade in pattern
const transition = {
  exit: { opacity: 0, transition: { duration: 0.4 } },
  enter: { opacity: 1, transition: { duration: 0.8 } },
};
```

### 7.4 Lottie Integration

```tsx
// src/components/stories/LottieAnimation.tsx
import Lottie from "lottie-react";
import alFattahAnimation from "@/public/animations/al-fattah.json";

export function AlFattahLottie() {
  return (
    <Lottie
      animationData={alFattahAnimation}
      loop={false}
      autoplay={true}
      style={{ width: 200, height: 200 }}
    />
  );
}
```

---

## 8. State Management & Persistence

### 8.1 localStorage Hook

```typescript
// src/hooks/useLocalStorage.ts

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    }
  };

  return [storedValue, setValue] as const;
}
```

### 8.2 Storage Keys (mapping from UserDefaults)

| iOS UserDefaults Key | Web localStorage Key | Data Type |
|---------------------|---------------------|-----------|
| `"{nameId}-reflection"` | `"reflection_{nameId}"` | string |
| `"app_colorScheme"` | `"theme_colorScheme"` | string |
| `"app_appearanceMode"` | `"theme_appearance"` | string |
| `"app_fontSize"` | `"theme_fontSize"` | string |
| `"quiz_highScore"` | `"quiz_highScore"` | number |
| `"quiz_longestStreak"` | `"quiz_longestStreak"` | number |
| `"quiz_totalCompleted"` | `"quiz_totalCompleted"` | number |
| `"quiz_totalAnswered"` | `"quiz_totalAnswered"` | number |
| `"quiz_totalCorrect"` | `"quiz_totalCorrect"` | number |
| `"notificationsEnabled"` | `"notifications_enabled"` | boolean |
| `"notificationTime"` | `"notifications_time"` | string (HH:MM) |
| `"hasCompletedOnboarding"` | `"onboarding_completed"` | boolean |
| `"hasSeenNotificationPrompt"` | `"notification_prompt_seen"` | boolean |

### 8.3 Quiz Session Hook

```typescript
// src/hooks/useQuizSession.ts

interface QuizState {
  questions: QuizQuestion[];
  currentIndex: number;
  score: number;
  currentStreak: number;
  isFinished: boolean;
  selectedAnswerIndex: number | null;
  showingFeedback: boolean;
}

export function useQuizSession(mode: QuizMode) {
  const [state, setState] = useState<QuizState>({...});

  const selectAnswer = (index: number) => { ... };
  const nextQuestion = () => { ... };
  const restart = () => { ... };

  return { ...state, selectAnswer, nextQuestion, restart };
}
```

---

## 9. Theming System

### 9.1 Color Schemes

```typescript
// src/lib/constants.ts

export const colorSchemes = {
  gold: {
    primary: "217 191 140",      // rgb(0.85, 0.75, 0.55)
    secondary: "230 209 166",    // rgb(0.9, 0.82, 0.65)
    gradient: ["#2a1f0a", "#1a1200", "#000000"],
    lightGradient: ["#fff8e8", "#fff0d0", "#ffffff"],
  },
  blue: {
    primary: "102 153 230",      // rgb(0.4, 0.6, 0.9)
    secondary: "128 179 242",    // rgb(0.5, 0.7, 0.95)
    gradient: ["#0a1a3d", "#060d20", "#000000"],
    lightGradient: ["#e8f0ff", "#d0e0ff", "#ffffff"],
  },
  green: {
    primary: "102 204 153",      // rgb(0.4, 0.8, 0.6)
    secondary: "128 217 179",    // rgb(0.5, 0.85, 0.7)
    gradient: ["#0a2a1a", "#061a0d", "#000000"],
    lightGradient: ["#e8fff0", "#d0ffe0", "#ffffff"],
  },
  purple: {
    primary: "179 128 230",      // rgb(0.7, 0.5, 0.9)
    secondary: "204 153 242",    // rgb(0.8, 0.6, 0.95)
    gradient: ["#1a0a3d", "#0d0620", "#000000"],
    lightGradient: ["#f0e8ff", "#e0d0ff", "#ffffff"],
  },
} as const;
```

### 9.2 Theme Provider

```tsx
// src/providers/ThemeProvider.tsx

interface ThemeContextType {
  colorScheme: keyof typeof colorSchemes;
  appearance: "system" | "light" | "dark";
  fontSize: "small" | "medium" | "large" | "extraLarge";
  setColorScheme: (scheme: keyof typeof colorSchemes) => void;
  setAppearance: (mode: "system" | "light" | "dark") => void;
  setFontSize: (size: string) => void;
  scaledSize: (base: number, isArabic?: boolean) => number;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useLocalStorage("theme_colorScheme", "gold");
  const [appearance, setAppearance] = useLocalStorage("theme_appearance", "dark");
  const [fontSize, setFontSize] = useLocalStorage("theme_fontSize", "medium");

  // Apply CSS variables to :root based on current scheme
  useEffect(() => {
    const scheme = colorSchemes[colorScheme];
    document.documentElement.style.setProperty("--color-primary", scheme.primary);
    document.documentElement.style.setProperty("--color-secondary", scheme.secondary);
    // ... etc
  }, [colorScheme, appearance]);

  const scaledSize = (base: number, isArabic = false) => {
    const scales = { small: 0.85, medium: 1, large: 1.15, extraLarge: 1.3 };
    const arabicScales = { small: 0.9, medium: 1, large: 1.2, extraLarge: 1.4 };
    return base * (isArabic ? arabicScales[fontSize] : scales[fontSize]);
  };

  return <ThemeContext.Provider value={...}>{children}</ThemeContext.Provider>;
}
```

### 9.3 CSS Variables (globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: 217 191 140;
  --color-secondary: 230 209 166;
  --bg-dark: 13 20 46;
  --font-scale: 1;
  --font-scale-arabic: 1;
}

[data-theme="dark"] {
  --text-primary: 255 255 255;
  --text-secondary: 180 180 180;
  --card-bg: 255 255 255 / 0.05;
  --card-border: 255 255 255 / 0.1;
}

[data-theme="light"] {
  --text-primary: 30 30 30;
  --text-secondary: 100 100 100;
  --card-bg: 0 0 0 / 0.03;
  --card-border: 0 0 0 / 0.08;
}
```

---

## 10. Audio & Assets

### 10.1 Audio Player Hook

```typescript
// src/hooks/useAudioPlayer.ts

export function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = (fileName: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(`/audio/${fileName}`);
    audioRef.current.play();
    setIsPlaying(true);
    audioRef.current.onended = () => setIsPlaying(false);
  };

  const stop = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  return { isPlaying, play, stop };
}
```

### 10.2 Asset Mapping

| iOS Asset | Web Location | Notes |
|-----------|-------------|-------|
| `yusuf-12-100.mp3` | `/public/audio/yusuf-12-100.mp3` | Direct copy |
| `al-fattah.json` | `/public/animations/al-fattah.json` | Direct copy, used by lottie-react |
| App Icon | `/public/icons/icon-*.png` | Generate web sizes (16, 32, 192, 512) |
| SF Symbols | Lucide React icons | Map each symbol to equivalent |

### 10.3 SF Symbol → Lucide Icon Mapping

| SF Symbol | Lucide Icon |
|-----------|-------------|
| `sparkles` | `Sparkles` |
| `heart.fill` | `Heart` |
| `leaf.fill` | `Leaf` |
| `cloud.rain.fill` | `CloudRain` |
| `gear` | `Settings` |
| `sun.max.fill` | `Sun` |
| `moon.fill` | `Moon` |
| `character.textbox` | `Type` |
| `text.magnifyingglass` | `Search` |
| `flame.fill` | `Flame` |
| `checkmark.circle.fill` | `CheckCircle` |
| `xmark.circle.fill` | `XCircle` |
| `lock.fill` | `Lock` |
| `chevron.right` | `ChevronRight` |
| `play.fill` | `Play` |
| `pause.fill` | `Pause` |

---

## 11. Search & Matching Algorithms

### 11.1 Feeling Advisor Service (Port)

```typescript
// src/lib/feeling-advisor.ts

const STOPWORDS = new Set([
  "i", "am", "feeling", "feel", "very", "really", "so", "just",
  "a", "an", "the", "bit", "little", "quite", "extremely",
  "somewhat", "today", "lately", "right", "now", "like", "kind", "of"
]);

function normalizeInput(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")  // Remove diacritics
    .split(/[^a-z0-9]+/)
    .filter(word => word.length > 0 && !STOPWORDS.has(word));
}

export function suggestNames(input: string): AdvisorResult {
  const tokens = normalizeInput(input);
  if (tokens.length === 0) return fallbackResult();

  // Tier 1: Exact match
  let result = findExactMatch(tokens);
  if (result) return createResult(result, "exact");

  // Tier 2: Alias/substring match
  result = findAliasMatch(tokens);
  if (result) return createResult(result, "alias");

  // Tier 3: Fuzzy match (Levenshtein distance ≤ 2)
  result = findFuzzyMatch(tokens);
  if (result) return createResult(result, "fuzzy");

  // Tier 4: Category keyword match
  result = findCategoryMatch(tokens);
  if (result) return createResult(result, "category");

  // Tier 5: Fallback (mercy names)
  return fallbackResult();
}
```

### 11.2 Levenshtein Distance

```typescript
// src/lib/levenshtein.ts

export function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,  // substitution
          matrix[i][j - 1] + 1,       // insertion
          matrix[i - 1][j] + 1        // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}
```

---

## 12. Notifications (Web Push)

### 12.1 Implementation

```typescript
// src/hooks/useNotifications.ts

export function useNotifications() {
  const [enabled, setEnabled] = useLocalStorage("notifications_enabled", false);

  const requestPermission = async (): Promise<boolean> => {
    if (!("Notification" in window)) return false;
    const permission = await Notification.requestPermission();
    const granted = permission === "granted";
    setEnabled(granted);
    return granted;
  };

  const scheduleDaily = () => {
    // Web Push requires a service worker for background notifications
    // For MVP: use a service worker with periodic sync
    // Alternative: just show notification when user opens app
    if ("serviceWorker" in navigator && enabled) {
      navigator.serviceWorker.ready.then(registration => {
        // Register periodic background sync (limited browser support)
        // Fallback: show "today's name" on page load
      });
    }
  };

  return { enabled, requestPermission, scheduleDaily };
}
```

**Note:** True background push notifications on web require a backend service (e.g., web-push library + server). For the localStorage-only approach, the realistic implementation is:
- Show a "Name of the Day" banner when the user opens the app
- Cycle through names based on the current date
- Use `Notification API` to show a browser notification only when the tab is open

---

## 13. PWA Configuration

### 13.1 Manifest

```json
// public/manifest.json
{
  "name": "Names of Allah",
  "short_name": "99 Names",
  "description": "Learn the 99 Beautiful Names of Allah",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0d142e",
  "theme_color": "#d9bf8c",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### 13.2 Next.js PWA Config

```javascript
// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  // Next.js config
});
```

---

## 14. Deployment

### 14.1 Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Environment:** No environment variables needed (all client-side, no backend).

### 14.2 Build & Export

```json
// package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 14.3 SEO Metadata

```tsx
// src/app/layout.tsx
export const metadata: Metadata = {
  title: "Names of Allah | 99 Beautiful Names",
  description: "Learn the 99 Beautiful Names of Allah through interactive stories, reflections, and guided learning.",
  openGraph: {
    title: "Names of Allah",
    description: "...",
    type: "website",
  },
};
```

---

## 15. Implementation Phases

### Phase 1: Foundation
- [ ] Initialize Next.js project with TypeScript + Tailwind
- [ ] Set up project directory structure
- [ ] Configure Tailwind with custom colors, fonts, animations
- [ ] Create ThemeProvider with CSS variable system
- [ ] Port `useLocalStorage` hook
- [ ] Port all data files (names.ts, feelings.json, extended-learning.ts)
- [ ] Set up global styles and font imports (Amiri for Arabic)

### Phase 2: Core Pages
- [ ] Welcome page with entrance animations (Framer Motion)
- [ ] Names list page with search and filtering
- [ ] Base story template (covers 93 names)
- [ ] Reflection page with text editor and save
- [ ] Settings page with theme/appearance controls

### Phase 3: Custom Stories
- [ ] Multi-screen story pattern component
- [ ] Progress indicator component
- [ ] Ar-Rahman story (9 screens)
- [ ] Ar-Raheem story (8 screens)
- [ ] Yusuf/Al-Lateef story (10 screens)
- [ ] Yunus/Al-Ghaffar story (10 screens)
- [ ] Maryam/Ar-Razzaq story (9 screens)
- [ ] Khidr/Al-Hakim story (11 screens)

### Phase 4: Sea Parting Animation (Al-Fattah)
- [ ] Layered animation composition (13 layers)
- [ ] Stars field with twinkling
- [ ] Sea wall parting animation (translateX)
- [ ] Musa figure walking animation
- [ ] Light beam expansion
- [ ] Sequential text overlays
- [ ] Skip button + auto-advance timer
- [ ] Lottie integration for door animation

### Phase 5: Interactive Features
- [ ] Feeling Advisor — input, search algorithm, results display
- [ ] Quiz system — mode selection, question generation, game UI, results
- [ ] Quiz progress tracking (localStorage)
- [ ] Extended Learning page (hadiths, duas, scholarly insights)
- [ ] Audio playback (AyahAudioButton)

### Phase 6: Polish & PWA
- [ ] Onboarding guide overlay
- [ ] Notification permission + "Name of the Day" feature
- [ ] PWA manifest + service worker
- [ ] Responsive design (mobile-first, tablet, desktop)
- [ ] Accessibility (ARIA labels, keyboard navigation, focus management)
- [ ] Performance optimization (code splitting, lazy loading stories)
- [ ] SEO metadata for all pages

### Phase 7: Testing & Launch
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile browser testing (iOS Safari, Android Chrome)
- [ ] Lighthouse audit (Performance, Accessibility, SEO, PWA)
- [ ] Deploy to Vercel
- [ ] Custom domain setup (if applicable)

---

## 16. File-by-File Mapping

| iOS File | Web Equivalent | Notes |
|----------|---------------|-------|
| `Names_of_AllahApp.swift` | `src/app/layout.tsx` | Root layout + providers |
| `WelcomeView.swift` | `src/app/page.tsx` | Landing page |
| `NamesListView.swift` | `src/app/names/page.tsx` | Main hub |
| `CinematicView.swift` | `src/app/story/[nameId]/page.tsx` | Dynamic route |
| `BaseReflectionView.swift` | `src/app/reflect/[nameId]/page.tsx` | Dynamic route |
| `FeelingAdvisorView.swift` | `src/app/advisor/page.tsx` | Advisor page |
| `FeelingAdvisorViewModel.swift` | `src/hooks/useAdvisor.ts` | Custom hook |
| `QuizHomeView.swift` | `src/app/quiz/page.tsx` | Mode selection |
| `QuizGameView.swift` | `src/app/quiz/play/page.tsx` | Game page |
| `ExtendedLearningView.swift` | `src/app/learn/[nameId]/page.tsx` | Dynamic route |
| `SettingsView.swift` | `src/app/settings/page.tsx` | Settings |
| `SharedComponents.swift` | `src/components/shared/*.tsx` | Split into individual files |
| `SeaPartingView.swift` | `src/components/stories/SeaPartingView.tsx` | Complex animation |
| `YusufStoryView.swift` | `src/components/stories/YusufStory.tsx` | Multi-screen |
| `ArRahmanStoryView.swift` | `src/components/stories/ArRahmanStory.tsx` | Multi-screen |
| `YunusStoryView.swift` | `src/components/stories/YunusStory.tsx` | Multi-screen |
| `MaryamStoryView.swift` | `src/components/stories/MaryamStory.tsx` | Multi-screen |
| `KhidrStoryView.swift` | `src/components/stories/KhidrStory.tsx` | Multi-screen |
| `AllahName.swift` | `src/data/names.ts` | TypeScript types + data |
| `Feeling.swift` | `src/data/feelings.ts` | Types (data in JSON) |
| `ExtendedLearning.swift` | `src/data/extended-learning.ts` | Types + data |
| `QuizModels.swift` | `src/lib/quiz-generator.ts` + `src/hooks/useQuizSession.ts` | Split logic/state |
| `ThemeManager.swift` | `src/providers/ThemeProvider.tsx` | Context provider |
| `NotificationManager.swift` | `src/hooks/useNotifications.ts` | Web Push hook |
| `FeelingAdvisorService.swift` | `src/lib/feeling-advisor.ts` | Pure function |
| `LottieView.swift` | `src/components/shared/LottieAnimation.tsx` | lottie-react wrapper |
| `OnboardingGuideView.swift` | `src/components/shared/OnboardingOverlay.tsx` | Guide overlay |
| `CalligraphyView.swift` | `src/app/calligraphy/page.tsx` | Calligraphy display |
| `feelings-to-names.json` | `src/data/feelings.json` | Direct copy |
| `al-fattah.json` | `public/animations/al-fattah.json` | Direct copy |
| `yusuf-12-100.mp3` | `public/audio/yusuf-12-100.mp3` | Direct copy |

---

## Verification

To verify the web app is working correctly after implementation:

1. **Build check:** `npm run build` should complete without errors
2. **All routes accessible:** Visit each page (`/`, `/names`, `/story/ar-rahman`, `/reflect/ar-rahman`, `/advisor`, `/quiz`, `/quiz/play`, `/learn/ar-rahman`, `/settings`)
3. **Search works:** Type in names list search, verify Arabic/transliteration/meaning/number filtering
4. **Story navigation:** Click a name → story loads → progress indicator advances → reflection page reached
5. **Persistence:** Save a reflection → refresh browser → text persists
6. **Theme switching:** Change color scheme and appearance → UI updates immediately → persists on refresh
7. **Quiz flow:** Select mode → answer questions → see results → stats saved
8. **Advisor flow:** Type a feeling → get name recommendations → click "Learn Story" → navigates to story
9. **Audio:** Click play on a story with audio → hear Quranic verse
10. **Animations:** Welcome page entrance, story transitions, sea parting sequence all animate smoothly
11. **PWA:** App installable from browser, works offline for cached pages
12. **Responsive:** Test on mobile (375px), tablet (768px), desktop (1280px)
13. **Lighthouse:** Score 90+ on Performance, Accessibility, SEO, Best Practices
