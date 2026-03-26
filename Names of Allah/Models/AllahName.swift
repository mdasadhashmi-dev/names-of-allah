//
//  AllahName.swift
//  Names of Allah
//
//  Core data model for Allah's names
//

import Foundation

struct AllahName: Identifiable, Hashable {
    let id = UUID()
    let number: Int
    let arabic: String
    let transliteration: String
    let meaning: String
    let nameId: String // URL-safe identifier
    let hasContent: Bool
    
    // Story metadata
    let storyTitle: String?
    let quranicReference: String?
    let audioFileName: String?
    let reflectionQuestion: String?
    
    init(
        number: Int,
        arabic: String,
        transliteration: String,
        meaning: String,
        nameId: String,
        hasContent: Bool = false,
        storyTitle: String? = nil,
        quranicReference: String? = nil,
        audioFileName: String? = nil,
        reflectionQuestion: String? = nil
    ) {
        self.number = number
        self.arabic = arabic
        self.transliteration = transliteration
        self.meaning = meaning
        self.nameId = nameId
        self.hasContent = hasContent
        self.storyTitle = storyTitle
        self.quranicReference = quranicReference
        self.audioFileName = audioFileName
        self.reflectionQuestion = reflectionQuestion
    }
}

// MARK: - Names Database

struct AllahNamesDatabase {
    static let all: [AllahName] = [
        // Sorted by number (1-99)
        AllahName(
            number: 1,
            arabic: "ٱلرَّحْمَـٰنُ",
            transliteration: "Ar-Rahman",
            meaning: "The Most Merciful",
            nameId: "ar-rahman",
            hasContent: true,
            storyTitle: "The Mercy to All Creation",
            quranicReference: "Surah Ar-Rahman 55:1-13",
            audioFileName: "ar-rahman-55-1",
            reflectionQuestion: "When have you witnessed Allah's mercy extended to everyone, regardless of who they are?"
        ),
        AllahName(
            number: 2,
            arabic: "ٱلرَّحِيمُ",
            transliteration: "Ar-Raheem",
            meaning: "The Most Compassionate",
            nameId: "ar-raheem",
            hasContent: true,
            storyTitle: "The Mercy That Embraces",
            quranicReference: "Surah Al-Baqarah 2:37",
            audioFileName: "al-baqarah-2-37",
            reflectionQuestion: "When you sinned, did Ar-Raheem turn you away or accept your repentance?"
        ),
        AllahName(
            number: 3,
            arabic: "ٱلْمَلِكُ",
            transliteration: "Al-Malik",
            meaning: "The King",
            nameId: "al-malik",
            hasContent: true,
            storyTitle: "The Day When All Crowns Fall",
            quranicReference: "Surah Al-Hashr 59:23",
            audioFileName: "al-hashr-59-23-malik",
            reflectionQuestion: "What throne are you building in this world that will mean nothing before Al-Malik?"
        ),
        AllahName(
            number: 4,
            arabic: "ٱلْقُدُّوسُ",
            transliteration: "Al-Quddus",
            meaning: "The Most Holy",
            nameId: "al-quddus",
            hasContent: true,
            storyTitle: "The Angels Who Never Tire",
            quranicReference: "Surah Al-Hashr 59:23",
            audioFileName: "al-hashr-59-23-quddus",
            reflectionQuestion: "What impurity in your life do you need to cleanse for Al-Quddus?"
        ),
        AllahName(
            number: 5,
            arabic: "ٱلْمُؤْمِنُ",
            transliteration: "Al-Mu'min",
            meaning: "The Granter of Security",
            nameId: "al-mumin",
            hasContent: true,
            storyTitle: "The Night Fear Left",
            quranicReference: "Surah Al-Hashr 59:23",
            audioFileName: "al-hashr-59-23-mumin",
            reflectionQuestion: "What fear do you need Al-Mu'min to remove from your heart?"
        ),
        AllahName(
            number: 6,
            arabic: "ٱلْمُهَيْمِنُ",
            transliteration: "Al-Muhaymin",
            meaning: "The Guardian",
            nameId: "al-muhaymin",
            hasContent: true,
            storyTitle: "The Protected Journey",
            quranicReference: "Surah Al-Hashr 59:23",
            audioFileName: "al-hashr-59-23",
            reflectionQuestion: "When did you feel Allah's protection over every detail of your life?"
        ),
        AllahName(
            number: 7,
            arabic: "ٱلْعَزِيزُ",
            transliteration: "Al-Aziz",
            meaning: "The Almighty",
            nameId: "al-aziz",
            hasContent: true,
            storyTitle: "The Tyrant and the Believer",
            quranicReference: "Surah Al-Baqarah 2:220",
            audioFileName: "al-baqarah-2-220",
            reflectionQuestion: "When did you feel powerless, yet trust that Allah's power would prevail?"
        ),
        AllahName(
            number: 8,
            arabic: "ٱلْجَبَّارُ",
            transliteration: "Al-Jabbar",
            meaning: "The Compeller",
            nameId: "al-jabbar",
            hasContent: true,
            storyTitle: "The Broken Made Whole",
            quranicReference: "Surah Al-Hashr 59:23",
            audioFileName: "al-hashr-59-23-jabbar",
            reflectionQuestion: "What broken part of you needs Al-Jabbar to restore?"
        ),
        AllahName(
            number: 9,
            arabic: "ٱلْمُتَكَبِّرُ",
            transliteration: "Al-Mutakabbir",
            meaning: "The Supreme",
            nameId: "al-mutakabbir",
            hasContent: true,
            storyTitle: "When Pride Falls",
            quranicReference: "Surah Al-Hashr 59:23",
            audioFileName: "al-hashr-59-23-mutakabbir",
            reflectionQuestion: "What pride do you need to let go of before Al-Mutakabbir?"
        ),
        AllahName(
            number: 10,
            arabic: "ٱلْخَالِقُ",
            transliteration: "Al-Khaliq",
            meaning: "The Creator",
            nameId: "al-khaliq",
            hasContent: true,
            storyTitle: "Before You Were Born",
            quranicReference: "Surah Al-An'am 6:102",
            audioFileName: "al-anam-6-102",
            reflectionQuestion: "How does knowing Al-Khaliq created you with purpose change how you see yourself?"
        ),
        AllahName(
            number: 11,
            arabic: "ٱلْبَارِئُ",
            transliteration: "Al-Bari",
            meaning: "The Evolver",
            nameId: "al-bari",
            hasContent: true,
            storyTitle: "From Clay to Creation",
            quranicReference: "Surah Al-Hashr 59:24",
            audioFileName: "al-hashr-59-24",
            reflectionQuestion: "How has Al-Bari shaped you through your struggles?"
        ),
        AllahName(
            number: 12,
            arabic: "ٱلْمُصَوِّرُ",
            transliteration: "Al-Musawwir",
            meaning: "The Fashioner",
            nameId: "al-musawwir",
            hasContent: true,
            storyTitle: "Perfectly Designed",
            quranicReference: "Surah Al-Hashr 59:24",
            audioFileName: "al-hashr-59-24",
            reflectionQuestion: "How has Al-Musawwir fashioned you uniquely for your purpose?"
        ),
        AllahName(
            number: 13,
            arabic: "ٱلْغَفَّارُ",
            transliteration: "Al-Ghaffar",
            meaning: "The Oft-Forgiving",
            nameId: "al-ghaffar",
            hasContent: true,
            storyTitle: "Prophet Yunus عَلَيْهِ ٱلسَّلَامُ and the Whale",
            quranicReference: "Surah Taha 20:82",
            audioFileName: "taha-20-82",
            reflectionQuestion: "What mistakes have you made where you experienced Allah's forgiveness?"
        ),
        AllahName(
            number: 14,
            arabic: "ٱلْقَهَّارُ",
            transliteration: "Al-Qahhar",
            meaning: "The Subduer",
            nameId: "al-qahhar",
            hasContent: true,
            storyTitle: "The Tyrant Who Fell",
            quranicReference: "Surah Ar-Ra'd 13:16",
            audioFileName: "ar-rad-13-16",
            reflectionQuestion: "What pride or arrogance in your life needs to be subdued by Al-Qahhar?"
        ),
        AllahName(
            number: 15,
            arabic: "ٱلْوَهَّابُ",
            transliteration: "Al-Wahhab",
            meaning: "The Bestower",
            nameId: "al-wahhab",
            hasContent: true,
            storyTitle: "The Gift You Never Asked For",
            quranicReference: "Surah Sad 38:9",
            audioFileName: "sad-38-9",
            reflectionQuestion: "What blessing did Al-Wahhab bestow on you that you never even asked for?"
        ),
        AllahName(
            number: 16,
            arabic: "ٱلرَّزَّاقُ",
            transliteration: "Ar-Razzaq",
            meaning: "The Provider",
            nameId: "ar-razzaq",
            hasContent: true,
            storyTitle: "Maryam عَلَيْهَا ٱلسَّلَامُ and the Miraculous Provision",
            quranicReference: "Surah Adh-Dhariyat 51:58",
            audioFileName: "adh-dhariyat-51-58",
            reflectionQuestion: "When did you receive provision from Allah in a way you never expected?"
        ),
        AllahName(
            number: 17,
            arabic: "ٱلْفَتَّاحُ",
            transliteration: "Al-Fattah",
            meaning: "The Opener",
            nameId: "al-fattah",
            hasContent: true,
            storyTitle: "Musa عَلَيْهِ ٱلسَّلَامُ and the Parting of the Sea",
            quranicReference: "Surah Ash-Shu'ara 26:63",
            audioFileName: nil,
            reflectionQuestion: "Where did you feel Allah opening a door for you recently?"
        ),
        AllahName(
            number: 18,
            arabic: "ٱلْعَلِيمُ",
            transliteration: "Al-Aleem",
            meaning: "The All-Knowing",
            nameId: "al-aleem",
            hasContent: true,
            storyTitle: "Yusuf عَلَيْهِ ٱلسَّلَامُ and the Shirt",
            quranicReference: "Surah Yusuf 12:50",
            audioFileName: "yusuf-12-50",
            reflectionQuestion: "What secret worry or pain have you carried that Allah already knows?"
        ),
        AllahName(
            number: 19,
            arabic: "ٱلْقَابِضُ",
            transliteration: "Al-Qabid",
            meaning: "The Withholder",
            nameId: "al-qabid",
            hasContent: true,
            storyTitle: "When the Door Closes",
            quranicReference: "Surah Al-Baqarah 2:245",
            audioFileName: "al-baqarah-2-245",
            reflectionQuestion: "What has Al-Qabid withheld from you that you now realize was for your protection?"
        ),
        AllahName(
            number: 20,
            arabic: "ٱلْبَاسِطُ",
            transliteration: "Al-Basit",
            meaning: "The Extender",
            nameId: "al-basit",
            hasContent: true,
            storyTitle: "The Hand That Opens",
            quranicReference: "Surah Al-Baqarah 2:245",
            audioFileName: "al-baqarah-2-245",
            reflectionQuestion: "When did Al-Basit extend His blessings to you beyond what you imagined?"
        ),
        AllahName(
            number: 21,
            arabic: "ٱلْخَافِضُ",
            transliteration: "Al-Khafid",
            meaning: "The Reducer",
            nameId: "al-khafid",
            hasContent: true,
            storyTitle: "When Pride Was Lowered",
            quranicReference: "Surah Al-Waqi'ah 56:3",
            audioFileName: "al-waqiah-56-3",
            reflectionQuestion: "What false pride does Al-Khafid need to lower in your heart?"
        ),
        AllahName(
            number: 22,
            arabic: "ٱلرَّافِعُ",
            transliteration: "Ar-Rafi",
            meaning: "The Exalter",
            nameId: "ar-rafi",
            hasContent: true,
            storyTitle: "The Slave Who Became a Leader",
            quranicReference: "Surah Al-Mujadila 58:11",
            audioFileName: "al-mujadila-58-11",
            reflectionQuestion: "How has Ar-Rafi elevated you from where you once were?"
        ),
        AllahName(
            number: 23,
            arabic: "ٱلْمُعِزُّ",
            transliteration: "Al-Mu'izz",
            meaning: "The Bestower of Honor",
            nameId: "al-muizz",
            hasContent: true,
            storyTitle: "Honor From the Most High",
            quranicReference: "Surah Ali 'Imran 3:26",
            audioFileName: "ali-imran-3-26",
            reflectionQuestion: "What worldly honor are you chasing instead of seeking honor from Al-Mu'izz?"
        ),
        AllahName(
            number: 24,
            arabic: "ٱلْمُذِلُّ",
            transliteration: "Al-Mudhill",
            meaning: "The Humiliator",
            nameId: "al-mudhill",
            hasContent: true,
            storyTitle: "When Arrogance Falls",
            quranicReference: "Surah Ali 'Imran 3:26",
            audioFileName: "ali-imran-3-26",
            reflectionQuestion: "What arrogance do you carry that Al-Mudhill may humble to save you?"
        ),
        AllahName(
            number: 25,
            arabic: "ٱلسَّمِيعُ",
            transliteration: "As-Samee",
            meaning: "The All-Hearing",
            nameId: "as-samee",
            hasContent: true,
            storyTitle: "Hajar عَلَيْهَا ٱلسَّلَامُ in the Desert",
            quranicReference: "Surah Al-Baqarah 2:127",
            audioFileName: "al-baqarah-2-127",
            reflectionQuestion: "When did you cry out to Allah, and felt He heard you?"
        ),
        AllahName(
            number: 26,
            arabic: "ٱلْبَصِيرُ",
            transliteration: "Al-Baseer",
            meaning: "The All-Seeing",
            nameId: "al-baseer",
            hasContent: true,
            storyTitle: "When No One Was Watching",
            quranicReference: "Surah Al-Isra 17:1",
            audioFileName: "al-isra-17-1",
            reflectionQuestion: "What do you do differently when you remember Al-Baseer sees everything?"
        ),
        AllahName(
            number: 27,
            arabic: "ٱلْحَكَمُ",
            transliteration: "Al-Hakam",
            meaning: "The Judge",
            nameId: "al-hakam",
            hasContent: true,
            storyTitle: "The Day Accounts Are Settled",
            quranicReference: "Surah Al-An'am 6:114",
            audioFileName: "al-anam-6-114",
            reflectionQuestion: "What injustice are you waiting for Al-Hakam to judge?"
        ),
        AllahName(
            number: 28,
            arabic: "ٱلْعَدْلُ",
            transliteration: "Al-Adl",
            meaning: "The Just",
            nameId: "al-adl",
            hasContent: true,
            storyTitle: "Perfect Justice",
            quranicReference: "Surah An-Nisa 4:40",
            audioFileName: "an-nisa-4-40",
            reflectionQuestion: "How does trusting Al-Adl's perfect justice bring you peace?"
        ),
        AllahName(
            number: 29,
            arabic: "ٱللَّطِيفُ",
            transliteration: "Al-Lateef",
            meaning: "The Most Gentle",
            nameId: "al-lateef",
            hasContent: true,
            storyTitle: "The Journey of Yusuf عَلَيْهِ ٱلسَّلَامُ",
            quranicReference: "Surah Yusuf 12:100",
            audioFileName: "yusuf-12-100",
            reflectionQuestion: "When did you look back and realize Allah was gently guiding you, even when you didn't see it?"
        ),
        AllahName(
            number: 30,
            arabic: "ٱلْخَبِيرُ",
            transliteration: "Al-Khabeer",
            meaning: "The All-Aware",
            nameId: "al-khabeer",
            hasContent: true,
            storyTitle: "The Hidden Struggle",
            quranicReference: "Surah Al-Mulk 67:14",
            audioFileName: "al-mulk-67-14",
            reflectionQuestion: "What hidden struggle does Al-Khabeer see that no one else knows?"
        ),
        AllahName(
            number: 31,
            arabic: "ٱلْحَلِيمُ",
            transliteration: "Al-Haleem",
            meaning: "The Forbearing",
            nameId: "al-haleem",
            hasContent: true,
            storyTitle: "The Sin That Should Have Destroyed",
            quranicReference: "Surah Al-Baqarah 2:235",
            audioFileName: "al-baqarah-2-235",
            reflectionQuestion: "What repeated sin has Al-Haleem been forbearing with you about?"
        ),
        AllahName(
            number: 32,
            arabic: "ٱلْعَظِيمُ",
            transliteration: "Al-Adheem",
            meaning: "The Magnificent",
            nameId: "al-adheem",
            hasContent: true,
            storyTitle: "The Throne That Holds Everything",
            quranicReference: "Surah Al-Baqarah 2:255",
            audioFileName: "al-baqarah-2-255-adheem",
            reflectionQuestion: "What problem feels too big—until you remember Al-Adheem?"
        ),
        AllahName(
            number: 33,
            arabic: "ٱلْغَفُورُ",
            transliteration: "Al-Ghafoor",
            meaning: "The All-Forgiving",
            nameId: "al-ghafoor",
            hasContent: true,
            storyTitle: "Seventy Times Seven",
            quranicReference: "Surah Al-Zumar 39:53",
            audioFileName: "al-zumar-39-53",
            reflectionQuestion: "What sin keeps you from believing Al-Ghafoor will forgive you?"
        ),
        AllahName(
            number: 34,
            arabic: "ٱلشَّكُورُ",
            transliteration: "Ash-Shakur",
            meaning: "The Appreciative",
            nameId: "ash-shakur",
            hasContent: true,
            storyTitle: "The Grateful Servant",
            quranicReference: "Surah Fatir 35:30",
            audioFileName: "fatir-35-30",
            reflectionQuestion: "What small good deed do you do that you hope Allah appreciates?"
        ),
        AllahName(
            number: 35,
            arabic: "ٱلْعَلِيُّ",
            transliteration: "Al-Aliyy",
            meaning: "The Most High",
            nameId: "al-aliyy",
            hasContent: true,
            storyTitle: "Above All Things",
            quranicReference: "Surah Al-Baqarah 2:255",
            audioFileName: "al-baqarah-2-255-aliyy",
            reflectionQuestion: "What worldly status are you chasing that means nothing to Al-Aliyy?"
        ),
        AllahName(
            number: 36,
            arabic: "ٱلْكَبِيرُ",
            transliteration: "Al-Kabeer",
            meaning: "The Greatest",
            nameId: "al-kabeer",
            hasContent: true,
            storyTitle: "Greater Than Everything",
            quranicReference: "Surah Al-Hajj 22:62",
            audioFileName: "al-hajj-22-62",
            reflectionQuestion: "What problem feels too big until you remember Al-Kabeer is greater?"
        ),
        AllahName(
            number: 37,
            arabic: "ٱلْحَفِيظُ",
            transliteration: "Al-Hafeez",
            meaning: "The Guardian",
            nameId: "al-hafeez",
            hasContent: true,
            storyTitle: "Yusuf عَلَيْهِ ٱلسَّلَامُ in the Well",
            quranicReference: "Surah Yusuf 12:64",
            audioFileName: "yusuf-12-64",
            reflectionQuestion: "When did you feel completely alone, but Allah was guarding you?"
        ),
        AllahName(
            number: 38,
            arabic: "ٱلْمُقِيتُ",
            transliteration: "Al-Muqeet",
            meaning: "The Sustainer",
            nameId: "al-muqeet",
            hasContent: true,
            storyTitle: "The Provision That Never Ran Out",
            quranicReference: "Surah An-Nisa 4:85",
            audioFileName: "an-nisa-4-85",
            reflectionQuestion: "How has Al-Muqeet sustained you when you thought you'd run out?"
        ),
        AllahName(
            number: 39,
            arabic: "ٱلْحَسِيبُ",
            transliteration: "Al-Haseeb",
            meaning: "The Reckoner",
            nameId: "al-haseeb",
            hasContent: true,
            storyTitle: "Every Deed Is Counted",
            quranicReference: "Surah An-Nisa 4:6",
            audioFileName: "an-nisa-4-6",
            reflectionQuestion: "What deed are you doing that you think Al-Haseeb doesn't see?"
        ),
        AllahName(
            number: 40,
            arabic: "ٱلْجَلِيلُ",
            transliteration: "Al-Jaleel",
            meaning: "The Majestic",
            nameId: "al-jaleel",
            hasContent: true,
            storyTitle: "The Majesty That Humbles",
            quranicReference: "Surah Ar-Rahman 55:27",
            audioFileName: "ar-rahman-55-27",
            reflectionQuestion: "When did you truly feel the majesty of Al-Jaleel?"
        ),
        AllahName(
            number: 41,
            arabic: "ٱلْكَرِيمُ",
            transliteration: "Al-Kareem",
            meaning: "The Most Generous",
            nameId: "al-kareem",
            hasContent: true,
            storyTitle: "The Man Who Gave Everything",
            quranicReference: "Surah Al-Fajr 89:15",
            audioFileName: "al-fajr-89-15",
            reflectionQuestion: "When did Allah give you more than you deserved or expected?"
        ),
        AllahName(
            number: 42,
            arabic: "ٱلرَّقِيبُ",
            transliteration: "Ar-Raqeeb",
            meaning: "The Watchful",
            nameId: "ar-raqeeb",
            hasContent: true,
            storyTitle: "The Unseen Witness",
            quranicReference: "Surah Al-Maidah 5:117",
            audioFileName: "al-maidah-5-117",
            reflectionQuestion: "How does knowing Allah watches everything change how you act when alone?"
        ),
        AllahName(
            number: 43,
            arabic: "ٱلْمُجِيبُ",
            transliteration: "Al-Mujeeb",
            meaning: "The Responsive",
            nameId: "al-mujeeb",
            hasContent: true,
            storyTitle: "Zakariya عَلَيْهِ ٱلسَّلَامُ and the Impossible Prayer",
            quranicReference: "Surah Hud 11:61",
            audioFileName: "hud-11-61",
            reflectionQuestion: "What prayer have you been waiting for Allah to answer?"
        ),
        AllahName(
            number: 44,
            arabic: "ٱلْوَاسِعُ",
            transliteration: "Al-Wasi",
            meaning: "The All-Encompassing",
            nameId: "al-wasi",
            hasContent: true,
            storyTitle: "The Vastness Beyond Imagination",
            quranicReference: "Surah Al-Baqarah 2:247",
            audioFileName: "al-baqarah-2-247",
            reflectionQuestion: "What limitation are you placing on Al-Wasi's vastness?"
        ),
        AllahName(
            number: 45,
            arabic: "ٱلْحَكِيمُ",
            transliteration: "Al-Hakim",
            meaning: "The Most Wise",
            nameId: "al-hakim",
            hasContent: true,
            storyTitle: "Khidr and Musa عَلَيْهِ ٱلسَّلَامُ - Hidden Wisdom",
            quranicReference: "Surah Al-Baqarah 2:129",
            audioFileName: "al-baqarah-2-129",
            reflectionQuestion: "What difficulty are you facing that you now see might have hidden wisdom?"
        ),
        AllahName(
            number: 46,
            arabic: "ٱلْوَدُودُ",
            transliteration: "Al-Wadud",
            meaning: "The Most Loving",
            nameId: "al-wadud",
            hasContent: true,
            storyTitle: "A Father's Unwavering Love",
            quranicReference: "Surah Al-Buruj 85:14",
            audioFileName: "al-buruj-85-14",
            reflectionQuestion: "When have you felt Allah's love envelop you despite your shortcomings?"
        ),
        AllahName(
            number: 47,
            arabic: "ٱلْمَجِيدُ",
            transliteration: "Al-Majeed",
            meaning: "The Most Glorious",
            nameId: "al-majeed",
            hasContent: true,
            storyTitle: "Glory Beyond Compare",
            quranicReference: "Surah Hud 11:73",
            audioFileName: "hud-11-73",
            reflectionQuestion: "What worldly glory are you chasing that pales before Al-Majeed?"
        ),
        AllahName(
            number: 48,
            arabic: "ٱلْبَاعِثُ",
            transliteration: "Al-Ba'ith",
            meaning: "The Resurrector",
            nameId: "al-baith",
            hasContent: true,
            storyTitle: "Rising from the Dust",
            quranicReference: "Surah Al-Hajj 22:7",
            audioFileName: "al-hajj-22-7",
            reflectionQuestion: "Are you ready for the Day when Al-Ba'ith raises you from your grave?"
        ),
        AllahName(
            number: 49,
            arabic: "ٱلشَّهِيدُ",
            transliteration: "Ash-Shaheed",
            meaning: "The Witness",
            nameId: "ash-shaheed",
            hasContent: true,
            storyTitle: "He Sees Everything",
            quranicReference: "Surah An-Nisa 4:33",
            audioFileName: "an-nisa-4-33",
            reflectionQuestion: "How would you live differently knowing Ash-Shaheed witnesses everything?"
        ),
        AllahName(
            number: 50,
            arabic: "ٱلْحَقُّ",
            transliteration: "Al-Haqq",
            meaning: "The Truth",
            nameId: "al-haqq",
            hasContent: true,
            storyTitle: "The Hour of Truth",
            quranicReference: "Surah Yunus 10:32",
            audioFileName: "yunus-10-32",
            reflectionQuestion: "Where in your life do you need to stand firmly on truth?"
        ),
        AllahName(
            number: 51,
            arabic: "ٱلْوَكِيلُ",
            transliteration: "Al-Wakeel",
            meaning: "The Trustee",
            nameId: "al-wakeel",
            hasContent: true,
            storyTitle: "When There Was Nothing Left",
            quranicReference: "Surah Ali 'Imran 3:173",
            audioFileName: "ali-imran-3-173",
            reflectionQuestion: "What worry are you holding that you need to hand over to Al-Wakeel?"
        ),
        AllahName(
            number: 52,
            arabic: "ٱلْقَوِيُّ",
            transliteration: "Al-Qawiyy",
            meaning: "The All-Strong",
            nameId: "al-qawiyy",
            hasContent: true,
            storyTitle: "When Weakness Becomes Strength",
            quranicReference: "Surah Ash-Shura 42:19",
            audioFileName: "ash-shura-42-19",
            reflectionQuestion: "Where do you feel weak and need the strength of Al-Qawiyy?"
        ),
        AllahName(
            number: 53,
            arabic: "ٱلْمَتِينُ",
            transliteration: "Al-Mateen",
            meaning: "The Firm",
            nameId: "al-mateen",
            hasContent: true,
            storyTitle: "The Foundation That Never Shakes",
            quranicReference: "Surah Adh-Dhariyat 51:58",
            audioFileName: "adh-dhariyat-51-58",
            reflectionQuestion: "What in your life feels unstable and needs the firmness of Al-Mateen?"
        ),
        AllahName(
            number: 54,
            arabic: "ٱلْوَلِيُّ",
            transliteration: "Al-Wali",
            meaning: "The Protecting Friend",
            nameId: "al-wali",
            hasContent: true,
            storyTitle: "The Friend Who Never Leaves",
            quranicReference: "Surah Ash-Shura 42:9",
            audioFileName: "ash-shura-42-9",
            reflectionQuestion: "Do you feel alone, or do you remember Al-Wali is with you?"
        ),
        AllahName(
            number: 55,
            arabic: "ٱلْحَمِيدُ",
            transliteration: "Al-Hameed",
            meaning: "The Praiseworthy",
            nameId: "al-hameed",
            hasContent: true,
            storyTitle: "Worthy of All Praise",
            quranicReference: "Surah Ibrahim 14:1",
            audioFileName: "ibrahim-14-1",
            reflectionQuestion: "Do you praise Al-Hameed in hardship as much as in ease?"
        ),
        AllahName(
            number: 56,
            arabic: "ٱلْمُحْصِي",
            transliteration: "Al-Muhsi",
            meaning: "The Accounter",
            nameId: "al-muhsi",
            hasContent: true,
            storyTitle: "Nothing Is Forgotten",
            quranicReference: "Surah Maryam 19:94",
            audioFileName: "maryam-19-94",
            reflectionQuestion: "What deed do you think is too small for Al-Muhsi to count?"
        ),
        AllahName(
            number: 57,
            arabic: "ٱلْمُبْدِئُ",
            transliteration: "Al-Mubdi",
            meaning: "The Originator",
            nameId: "al-mubdi",
            hasContent: true,
            storyTitle: "The First Creation",
            quranicReference: "Surah Al-Buruj 85:13",
            audioFileName: "al-buruj-85-13",
            reflectionQuestion: "How does knowing Al-Mubdi originated everything from nothing impact your faith?"
        ),
        AllahName(
            number: 58,
            arabic: "ٱلْمُعِيدُ",
            transliteration: "Al-Mu'id",
            meaning: "The Restorer",
            nameId: "al-muid",
            hasContent: true,
            storyTitle: "He Will Bring You Back",
            quranicReference: "Surah Al-Buruj 85:13",
            audioFileName: "al-buruj-85-13",
            reflectionQuestion: "Do you believe Al-Mu'id will restore you on Judgment Day?"
        ),
        AllahName(
            number: 59,
            arabic: "ٱلْمُحْيِي",
            transliteration: "Al-Muhyi",
            meaning: "The Giver of Life",
            nameId: "al-muhyi",
            hasContent: true,
            storyTitle: "The Breath of Life",
            quranicReference: "Surah Fussilat 41:39",
            audioFileName: "fussilat-41-39",
            reflectionQuestion: "Every breath you take is from Al-Muhyi—do you thank Him?"
        ),
        AllahName(
            number: 60,
            arabic: "ٱلْمُمِيتُ",
            transliteration: "Al-Mumeet",
            meaning: "The Bringer of Death",
            nameId: "al-mumeet",
            hasContent: true,
            storyTitle: "When Your Time Comes",
            quranicReference: "Surah Al-Hadid 57:2",
            audioFileName: "al-hadid-57-2",
            reflectionQuestion: "Are you prepared for when Al-Mumeet calls you back?"
        ),
        AllahName(
            number: 61,
            arabic: "ٱلْحَيُّ",
            transliteration: "Al-Hayy",
            meaning: "The Ever-Living",
            nameId: "al-hayy",
            hasContent: true,
            storyTitle: "The One Who Never Dies",
            quranicReference: "Surah Al-Baqarah 2:255",
            audioFileName: "al-baqarah-2-255-hayy",
            reflectionQuestion: "Everyone you love will die—except Al-Hayy. Does that change your priorities?"
        ),
        AllahName(
            number: 62,
            arabic: "ٱلْقَيُّومُ",
            transliteration: "Al-Qayyum",
            meaning: "The Sustainer",
            nameId: "al-qayyum",
            hasContent: true,
            storyTitle: "Everything Depends on Him",
            quranicReference: "Surah Al-Baqarah 2:255",
            audioFileName: "al-baqarah-2-255",
            reflectionQuestion: "How does your life change when you realize Allah sustains every moment?"
        ),
        AllahName(
            number: 63,
            arabic: "ٱلْوَاجِدُ",
            transliteration: "Al-Wajid",
            meaning: "The Finder",
            nameId: "al-wajid",
            hasContent: true,
            storyTitle: "He Finds What Is Lost",
            quranicReference: "Surah Ad-Duha 93:7",
            audioFileName: "ad-duha-93-7",
            reflectionQuestion: "When you were lost, how did Al-Wajid find you?"
        ),
        AllahName(
            number: 64,
            arabic: "ٱلْمَاجِدُ",
            transliteration: "Al-Majid",
            meaning: "The Noble",
            nameId: "al-majid",
            hasContent: true,
            storyTitle: "The Most Noble",
            quranicReference: "Surah Al-Buruj 85:15",
            audioFileName: "al-buruj-85-15",
            reflectionQuestion: "How does knowing Al-Majid is Most Noble change how you view worldly status?"
        ),
        AllahName(
            number: 65,
            arabic: "ٱلْوَاحِدُ",
            transliteration: "Al-Wahid",
            meaning: "The One",
            nameId: "al-wahid",
            hasContent: true,
            storyTitle: "In the End, Only One Remains",
            quranicReference: "Surah Ibrahim 14:48",
            audioFileName: "ibrahim-14-48",
            reflectionQuestion: "What are you worshipping besides Al-Wahid, the One?"
        ),
        AllahName(
            number: 66,
            arabic: "ٱلْأَحَدُ",
            transliteration: "Al-Ahad",
            meaning: "The Unique",
            nameId: "al-ahad",
            hasContent: true,
            storyTitle: "Say: He is Allah, the One",
            quranicReference: "Surah Al-Ikhlas 112:1",
            audioFileName: "al-ikhlas-112-1",
            reflectionQuestion: "Do you truly grasp the uniqueness of Al-Ahad?"
        ),
        AllahName(
            number: 67,
            arabic: "ٱلصَّمَدُ",
            transliteration: "As-Samad",
            meaning: "The Eternal Refuge",
            nameId: "as-samad",
            hasContent: true,
            storyTitle: "When Everything Else Failed",
            quranicReference: "Surah Al-Ikhlas 112:2",
            audioFileName: "al-ikhlas-112-2",
            reflectionQuestion: "Who do you turn to first—people or As-Samad?"
        ),
        AllahName(
            number: 68,
            arabic: "ٱلْقَادِرُ",
            transliteration: "Al-Qadir",
            meaning: "The Capable",
            nameId: "al-qadir",
            hasContent: true,
            storyTitle: "Ibrahim عَلَيْهِ ٱلسَّلَامُ and the Fire",
            quranicReference: "Surah Al-An'am 6:65",
            audioFileName: "al-anam-6-65",
            reflectionQuestion: "What impossible situation are you facing that only Allah can change?"
        ),
        AllahName(
            number: 69,
            arabic: "ٱلْمُقْتَدِرُ",
            transliteration: "Al-Muqtadir",
            meaning: "The All-Powerful",
            nameId: "al-muqtadir",
            hasContent: true,
            storyTitle: "The Night of Power",
            quranicReference: "Surah Al-Qamar 54:42",
            audioFileName: "al-qamar-54-42",
            reflectionQuestion: "What feels impossible until you remember Al-Muqtadir's power?"
        ),
        AllahName(
            number: 70,
            arabic: "ٱلْمُقَدِّمُ",
            transliteration: "Al-Muqaddim",
            meaning: "The Expediter",
            nameId: "al-muqaddim",
            hasContent: true,
            storyTitle: "Advancing What He Wills",
            quranicReference: "Surah Al-Qamar 54:3",
            audioFileName: "al-qamar-54-3",
            reflectionQuestion: "Trust Al-Muqaddim's timing—what He advances, accept with gratitude."
        ),
        AllahName(
            number: 71,
            arabic: "ٱلْمُؤَخِّرُ",
            transliteration: "Al-Mu'akhkhir",
            meaning: "The Delayer",
            nameId: "al-muakhkhir",
            hasContent: true,
            storyTitle: "Delaying with Wisdom",
            quranicReference: "Surah Ibrahim 14:42",
            audioFileName: "ibrahim-14-42",
            reflectionQuestion: "When Al-Mu'akhkhir delays, do you trust His wisdom?"
        ),
        AllahName(
            number: 72,
            arabic: "ٱلْأَوَّلُ",
            transliteration: "Al-Awwal",
            meaning: "The First",
            nameId: "al-awwal",
            hasContent: true,
            storyTitle: "Before Time Began",
            quranicReference: "Surah Al-Hadid 57:3",
            audioFileName: "al-hadid-57-3-awwal",
            reflectionQuestion: "What existed before everything? Only Al-Awwal."
        ),
        AllahName(
            number: 73,
            arabic: "ٱلْـَٔاخِرُ",
            transliteration: "Al-Akhir",
            meaning: "The Last",
            nameId: "al-akhir",
            hasContent: true,
            storyTitle: "When Everything Ends",
            quranicReference: "Surah Al-Hadid 57:3",
            audioFileName: "al-hadid-57-3-akhir",
            reflectionQuestion: "When everything perishes, only Al-Akhir remains. Are you ready?"
        ),
        AllahName(
            number: 74,
            arabic: "ٱلظَّـٰهِرُ",
            transliteration: "Az-Zahir",
            meaning: "The Manifest",
            nameId: "az-zahir",
            hasContent: true,
            storyTitle: "The Signs Are Everywhere",
            quranicReference: "Surah Al-Hadid 57:3",
            audioFileName: "al-hadid-57-3-zahir",
            reflectionQuestion: "Can you see Az-Zahir's signs all around you?"
        ),
        AllahName(
            number: 75,
            arabic: "ٱلْبَاطِنُ",
            transliteration: "Al-Batin",
            meaning: "The Hidden",
            nameId: "al-batin",
            hasContent: true,
            storyTitle: "The Secret Within",
            quranicReference: "Surah Al-Hadid 57:3",
            audioFileName: "al-hadid-57-3-batin",
            reflectionQuestion: "What is Al-Batin hiding from you for your own good?"
        ),
        AllahName(
            number: 76,
            arabic: "ٱلْوَالِي",
            transliteration: "Al-Wali",
            meaning: "The Governor",
            nameId: "al-wali-alt",
            hasContent: true,
            storyTitle: "The Supreme Governor",
            quranicReference: "Surah Ash-Shura 42:9",
            audioFileName: "ash-shura-42-9",
            reflectionQuestion: "Al-Wali governs all affairs—do you submit to His governance?"
        ),
        AllahName(
            number: 77,
            arabic: "ٱلْمُتَعَالِي",
            transliteration: "Al-Muta'ali",
            meaning: "The Supreme",
            nameId: "al-mutaali",
            hasContent: true,
            storyTitle: "Beyond All Comparison",
            quranicReference: "Surah Ar-Ra'd 13:9",
            audioFileName: "ar-rad-13-9",
            reflectionQuestion: "What are you comparing Allah to? He is Al-Muta'ali—beyond all."
        ),
        AllahName(
            number: 78,
            arabic: "ٱلْبَرُّ",
            transliteration: "Al-Barr",
            meaning: "The Source of Goodness",
            nameId: "al-barr",
            hasContent: true,
            storyTitle: "The Good That Never Ends",
            quranicReference: "Surah At-Tur 52:28",
            audioFileName: "at-tur-52-28",
            reflectionQuestion: "What good in your life came from Al-Barr that you forgot to thank Him for?"
        ),
        AllahName(
            number: 79,
            arabic: "ٱلتَّوَّابُ",
            transliteration: "At-Tawwab",
            meaning: "The Accepter of Repentance",
            nameId: "at-tawwab",
            hasContent: true,
            storyTitle: "The Door That's Always Open",
            quranicReference: "Surah At-Tawbah 9:104",
            audioFileName: "at-tawbah-9-104",
            reflectionQuestion: "What sin are you holding onto instead of turning to At-Tawwab?"
        ),
        AllahName(
            number: 80,
            arabic: "ٱلْمُنْتَقِمُ",
            transliteration: "Al-Muntaqim",
            meaning: "The Avenger",
            nameId: "al-muntaqim",
            hasContent: true,
            storyTitle: "Justice Will Be Served",
            quranicReference: "Surah Ali 'Imran 3:4",
            audioFileName: "ali-imran-3-4",
            reflectionQuestion: "What injustice are you waiting for Al-Muntaqim to avenge?"
        ),
        AllahName(
            number: 81,
            arabic: "ٱلْعَفُوُّ",
            transliteration: "Al-Afuw",
            meaning: "The Pardoner",
            nameId: "al-afuw",
            hasContent: true,
            storyTitle: "The Record That Was Erased",
            quranicReference: "Surah An-Nisa 4:43",
            audioFileName: "an-nisa-4-43",
            reflectionQuestion: "What sin do you wish Al-Afuw would erase from your record?"
        ),
        AllahName(
            number: 82,
            arabic: "ٱلرَّءُوفُ",
            transliteration: "Ar-Ra'uf",
            meaning: "The Most Kind",
            nameId: "ar-rauf",
            hasContent: true,
            storyTitle: "The Kindness That Never Ends",
            quranicReference: "Surah Al-Baqarah 2:143",
            audioFileName: "al-baqarah-2-143",
            reflectionQuestion: "When have you felt Ar-Ra'uf's kindness in your darkest moment?"
        ),
        AllahName(
            number: 83,
            arabic: "مَـٰلِكُ ٱلْمُلْكِ",
            transliteration: "Malik-ul-Mulk",
            meaning: "Master of the Kingdom",
            nameId: "malik-ul-mulk",
            hasContent: true,
            storyTitle: "The Only King",
            quranicReference: "Surah Ali 'Imran 3:26",
            audioFileName: "ali-imran-3-26",
            reflectionQuestion: "All power belongs to Malik-ul-Mulk—where do you seek power from?"
        ),
        AllahName(
            number: 84,
            arabic: "ذُو ٱلْجَلَـٰلِ وَٱلْإِكْرَامُ",
            transliteration: "Dhul-Jalali wal-Ikram",
            meaning: "Possessor of Majesty and Honor",
            nameId: "dhul-jalali-wal-ikram",
            hasContent: true,
            storyTitle: "Majesty and Generosity",
            quranicReference: "Surah Ar-Rahman 55:27",
            audioFileName: "ar-rahman-55-27-dhul",
            reflectionQuestion: "How do you honor Dhul-Jalali wal-Ikram, the Possessor of Majesty?"
        ),
        AllahName(
            number: 85,
            arabic: "ٱلْمُقْسِطُ",
            transliteration: "Al-Muqsit",
            meaning: "The Equitable",
            nameId: "al-muqsit",
            hasContent: true,
            storyTitle: "Perfect Justice",
            quranicReference: "Surah Al-Hadid 57:25",
            audioFileName: "al-hadid-57-25",
            reflectionQuestion: "Al-Muqsit is perfectly just—do you trust His fairness?"
        ),
        AllahName(
            number: 86,
            arabic: "ٱلْجَامِعُ",
            transliteration: "Al-Jami",
            meaning: "The Gatherer",
            nameId: "al-jami",
            hasContent: true,
            storyTitle: "The Day of Gathering",
            quranicReference: "Surah Ali 'Imran 3:9",
            audioFileName: "ali-imran-3-9",
            reflectionQuestion: "Are you ready for the Day when Al-Jami gathers all of humanity?"
        ),
        AllahName(
            number: 87,
            arabic: "ٱلْغَنِيُّ",
            transliteration: "Al-Ghaniyy",
            meaning: "The Self-Sufficient",
            nameId: "al-ghaniyy",
            hasContent: true,
            storyTitle: "He Needs Nothing",
            quranicReference: "Surah Muhammad 47:38",
            audioFileName: "muhammad-47-38",
            reflectionQuestion: "Why does Al-Ghaniyy, who needs nothing, still listen to your prayers?"
        ),
        AllahName(
            number: 88,
            arabic: "ٱلْمُغْنِي",
            transliteration: "Al-Mughni",
            meaning: "The Enricher",
            nameId: "al-mughni",
            hasContent: true,
            storyTitle: "True Wealth",
            quranicReference: "Surah An-Najm 53:48",
            audioFileName: "an-najm-53-48",
            reflectionQuestion: "What wealth do you seek from Al-Mughni—worldly or spiritual?"
        ),
        AllahName(
            number: 89,
            arabic: "ٱلْمَانِعُ",
            transliteration: "Al-Mani",
            meaning: "The Preventer",
            nameId: "al-mani",
            hasContent: true,
            storyTitle: "He Withholds with Wisdom",
            quranicReference: "Surah Al-Baqarah 2:255",
            audioFileName: "al-baqarah-2-255-mani",
            reflectionQuestion: "When Al-Mani withholds, do you trust it's for your good?"
        ),
        AllahName(
            number: 90,
            arabic: "ٱلضَّارُّ",
            transliteration: "Ad-Darr",
            meaning: "The Distresser",
            nameId: "ad-darr",
            hasContent: true,
            storyTitle: "Testing Through Hardship",
            quranicReference: "Surah Al-An'am 6:17",
            audioFileName: "al-anam-6-17",
            reflectionQuestion: "When Ad-Darr tests you with hardship, will you turn to Him?"
        ),
        AllahName(
            number: 91,
            arabic: "ٱلنَّافِعُ",
            transliteration: "An-Nafi",
            meaning: "The Benefactor",
            nameId: "an-nafi",
            hasContent: true,
            storyTitle: "The Source of All Benefit",
            quranicReference: "Surah Ar-Ra'd 13:17",
            audioFileName: "ar-rad-13-17",
            reflectionQuestion: "Every benefit in your life is from An-Nafi—do you thank Him?"
        ),
        AllahName(
            number: 92,
            arabic: "ٱلنُّورُ",
            transliteration: "An-Nur",
            meaning: "The Light",
            nameId: "an-nur",
            hasContent: true,
            storyTitle: "The Light That Never Dims",
            quranicReference: "Surah An-Nur 24:35",
            audioFileName: "an-nur-24-35",
            reflectionQuestion: "When did you feel darkness in your life and need An-Nur's light?"
        ),
        AllahName(
            number: 93,
            arabic: "ٱلْهَادِي",
            transliteration: "Al-Hadi",
            meaning: "The Guide",
            nameId: "al-hadi",
            hasContent: true,
            storyTitle: "Lost and Found",
            quranicReference: "Surah Al-Hajj 22:54",
            audioFileName: "al-hajj-22-54",
            reflectionQuestion: "When were you lost, and how did Al-Hadi guide you back?"
        ),
        AllahName(
            number: 94,
            arabic: "ٱلْبَدِيعُ",
            transliteration: "Al-Badi",
            meaning: "The Incomparable",
            nameId: "al-badi",
            hasContent: true,
            storyTitle: "Beyond Comparison",
            quranicReference: "Surah Al-Baqarah 2:117",
            audioFileName: "al-baqarah-2-117",
            reflectionQuestion: "Al-Badi is incomparable—nothing resembles Him. Do you grasp His uniqueness?"
        ),
        AllahName(
            number: 95,
            arabic: "ٱلْبَاقِي",
            transliteration: "Al-Baqi",
            meaning: "The Everlasting",
            nameId: "al-baqi",
            hasContent: true,
            storyTitle: "What Remains",
            quranicReference: "Surah Ar-Rahman 55:27",
            audioFileName: "ar-rahman-55-27",
            reflectionQuestion: "Everything will perish except Al-Baqi—where is your heart attached?"
        ),
        AllahName(
            number: 96,
            arabic: "ٱلْوَارِثُ",
            transliteration: "Al-Warith",
            meaning: "The Inheritor",
            nameId: "al-warith",
            hasContent: true,
            storyTitle: "Everything Returns to Him",
            quranicReference: "Surah Maryam 19:40",
            audioFileName: "maryam-19-40",
            reflectionQuestion: "When you die, Al-Warith inherits everything—what will you leave behind?"
        ),
        AllahName(
            number: 97,
            arabic: "ٱلرَّشِيدُ",
            transliteration: "Ar-Rasheed",
            meaning: "The Guide to the Right Path",
            nameId: "ar-rasheed",
            hasContent: true,
            storyTitle: "Perfect Guidance",
            quranicReference: "Surah Hud 11:87",
            audioFileName: "hud-11-87",
            reflectionQuestion: "Do you trust Ar-Rasheed's guidance even when the path seems unclear?"
        ),
        AllahName(
            number: 98,
            arabic: "ٱلصَّبُورُ",
            transliteration: "As-Sabur",
            meaning: "The Patient",
            nameId: "as-sabur",
            hasContent: true,
            storyTitle: "Nuh عَلَيْهِ ٱلسَّلَامُ - 950 Years",
            quranicReference: "Surah At-Taghabun 64:17",
            audioFileName: "at-taghabun-64-17",
            reflectionQuestion: "What are you losing patience with that Allah is teaching you through?"
        ),
        AllahName(
            number: 99,
            arabic: "ٱلشَّكُورُ",
            transliteration: "Ash-Shakoor",
            meaning: "The Most Appreciative",
            nameId: "ash-shakoor",
            hasContent: true,
            storyTitle: "The Grateful One",
            quranicReference: "Surah Fatir 35:30",
            audioFileName: "fatir-35-30",
            reflectionQuestion: "What small act of worship did Ash-Shakoor multiply beyond measure?"
        ),
    ]
    
    // Helper methods
    static func getName(byId id: String) -> AllahName? {
        return all.first { $0.nameId == id }
    }
    
    static var activeNames: [AllahName] {
        return all.filter { $0.hasContent }
    }
    
    static var comingSoon: [AllahName] {
        return all.filter { !$0.hasContent }
    }
}


