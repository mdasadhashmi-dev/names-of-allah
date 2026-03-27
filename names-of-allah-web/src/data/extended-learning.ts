export interface HadithReference {
  arabicText: string;
  transliteration?: string;
  translation: string;
  reference: string;
  narrator: string;
  source: string;
  grading: string;
  context: string;
}

export interface ScholarlyInsight {
  scholar: string;
  insight: string;
  source: string;
  arabicQuote?: string;
}

export interface DuaReference {
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

export const extendedLearningDb: Record<string, ExtendedLearning> = {
  "ar-rahman": {
    nameId: "ar-rahman",
    hadiths: [
      {
        arabicText: "إِنَّ اللَّهَ خَلَقَ الرَّحْمَةَ يَوْمَ خَلَقَهَا مِائَةَ رَحْمَةٍ فَأَمْسَكَ عِنْدَهُ تِسْعًا وَتِسْعِينَ رَحْمَةً وَأَرْسَلَ فِي خَلْقِهِ كُلِّهِمْ رَحْمَةً وَاحِدَةً",
        transliteration: "Inna Allaha khalaqa ar-rahmata yawma khalaqaha mi'ata rahmah...",
        translation: "Indeed Allah created mercy on the day He created it with one hundred parts. He kept ninety-nine parts with Him and sent down one part to His creation. Because of that one part, His creatures show mercy to one another.",
        reference: "Sahih Muslim 2752",
        narrator: "Abu Hurairah رضي الله عنه",
        source: "sunnah.com/muslim:2752",
        grading: "Sahih",
        context: "This hadith demonstrates the vastness of Allah's mercy—what we see in creation is only 1% of His total mercy.",
      },
      {
        arabicText: "لَمَّا قَضَى اللَّهُ الْخَلْقَ كَتَبَ فِي كِتَابِهِ فَهُوَ عِنْدَهُ فَوْقَ الْعَرْشِ إِنَّ رَحْمَتِي غَلَبَتْ غَضَبِي",
        transliteration: "Lamma qada Allahu al-khalqa kataba fi kitabihi...",
        translation: "When Allah completed the creation, He wrote in His Book which is with Him above the Throne: 'My Mercy prevails over My Wrath.'",
        reference: "Sahih al-Bukhari 3194",
        narrator: "Abu Hurairah رضي الله عنه",
        source: "sunnah.com/bukhari:3194",
        grading: "Sahih",
        context: "Allah's mercy surpasses His anger—this is the foundation of hope for believers.",
      },
    ],
    scholarlyInsights: [
      {
        scholar: "Ibn al-Qayyim",
        insight: "Ar-Rahman is a name that encompasses all types of mercy—both worldly and eternal, for the believer and disbeliever in this life, but exclusively for believers in the Hereafter.",
        source: "Badaai' al-Fawaid",
      },
      {
        scholar: "Ibn Taymiyyah",
        insight: "The name Ar-Rahman is unique to Allah. No one else can be called Ar-Rahman. It signifies that mercy is an essential attribute of Allah, encompassing all of creation.",
        source: "Majmu' al-Fatawa",
      },
    ],
    realLifeApplications: [
      "When facing hardship, remember that Ar-Rahman's mercy encompasses everything—including your difficulty.",
      "Show mercy to Allah's creation (people, animals, environment) as a reflection of His mercy.",
      "Never despair from Ar-Rahman's mercy, no matter how great your sins.",
      "Begin every action with 'Bismillah ar-Rahman ar-Raheem' to invoke His mercy.",
    ],
    duas: [
      {
        arabicText: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
        transliteration: "Rabbana zalamna anfusana wa il-lam taghfir lana wa tarhamna lanakoonanna minal-khasireen",
        translation: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
        occasion: "When seeking Allah's mercy after sinning",
        source: "Qur'an 7:23 - Dua of Adam عَلَيْهِ ٱلسَّلَامُ",
      },
    ],
  },
  "ar-raheem": {
    nameId: "ar-raheem",
    hadiths: [
      {
        arabicText: "لَنْ يُدْخِلَ أَحَدًا مِنْكُمْ عَمَلُهُ الْجَنَّةَ. قَالُوا: وَلَا أَنْتَ يَا رَسُولَ اللَّهِ؟ قَالَ: وَلَا أَنَا، إِلَّا أَنْ يَتَغَمَّدَنِيَ اللَّهُ بِرَحْمَةٍ مِنْهُ وَفَضْلٍ",
        transliteration: "Lan yudkhila ahadun minkum 'amaluhu al-jannah...",
        translation: "None of you will enter Paradise by his deeds alone. They said: Not even you, O Messenger of Allah? He said: Not even me, unless Allah envelops me in His mercy and grace.",
        reference: "Sahih al-Bukhari 5673",
        narrator: "Abu Hurairah رضي الله عنه",
        source: "sunnah.com/bukhari:5673",
        grading: "Sahih",
        context: "Even the Prophet ﷺ relied on Allah's mercy—this teaches us humility and hope in Ar-Raheem's compassion.",
      },
    ],
    scholarlyInsights: [
      {
        scholar: "Ibn al-Qayyim",
        insight: "Ar-Raheem is specific mercy for believers who turn to Him in repentance, while Ar-Rahman is general mercy for all creation. The believer benefits from both types of mercy.",
        source: "Badaai' al-Fawaid",
      },
    ],
    realLifeApplications: [
      "When you sin, immediately turn to Ar-Raheem in repentance—His compassion awaits you.",
      "Never let past sins prevent you from seeking His mercy today.",
      "Show compassion to fellow believers, as Allah shows compassion to those who repent.",
    ],
    duas: [
      {
        arabicText: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ",
        transliteration: "Rabbi-ghfir warham wa anta khayr ar-rahimeen",
        translation: "My Lord, forgive and have mercy, and You are the best of the merciful.",
        occasion: "When seeking forgiveness and mercy",
        source: "Qur'an 23:118",
      },
    ],
  },
  "al-ghaffar": {
    nameId: "al-ghaffar",
    hadiths: [
      {
        arabicText: "وَاَلَّذِي نَفْسِي بِيَدِهِ، لَوْ لَمْ تُذْنِبُوا لَذَهَبَ اللَّهُ بِكُمْ، وَلَجَاءَ بِقَوْمٍ يُذْنِبُونَ، فَيَسْتَغْفِرُونَ اللَّهَ، فَيَغْفِرُ لَهُمْ",
        transliteration: "Wa-lladhi nafsi biyadih, law lam tudhnibu ladhahaba Allahu bikum...",
        translation: "By the One in Whose Hand is my soul! If you did not sin, Allah would replace you with a people who would sin, and they would seek forgiveness from Allah, and He would forgive them.",
        reference: "Sahih Muslim 2749",
        narrator: "Abu Ayyub and Abu Hurairah رضي الله عنهما",
        source: "sunnah.com/muslim:2749",
        grading: "Sahih",
        context: "Allah loves to forgive—His attribute Al-Ghaffar is meant to be engaged with through repentance.",
      },
    ],
    scholarlyInsights: [
      {
        scholar: "Ibn Kathir",
        insight: "Al-Ghaffar (with the intensified form) indicates that Allah forgives sins repeatedly and abundantly—not just once, but continuously for those who turn to Him.",
        source: "Tafsir Ibn Kathir",
      },
    ],
    realLifeApplications: [
      "Repent frequently—Al-Ghaffar loves those who seek His forgiveness repeatedly.",
      "Don't let the same sin returning discourage you—keep returning to Al-Ghaffar.",
      "Forgive others as you seek Al-Ghaffar's forgiveness for yourself.",
    ],
    duas: [
      {
        arabicText: "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
        transliteration: "Astaghfir-ullah alladhi la ilaha illa Huwa al-Hayy al-Qayyum wa atubu ilayh",
        translation: "I seek forgiveness from Allah, besides whom there is no deity, the Ever-Living, the Sustainer, and I repent to Him.",
        occasion: "Master dua for seeking forgiveness (erases sins even if like sea foam)",
        source: "Sunan Abu Dawud 1517 (Sahih)",
      },
    ],
  },
  "al-lateef": {
    nameId: "al-lateef",
    hadiths: [
      {
        arabicText: "إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الأَمْرِ كُلِّهِ",
        transliteration: "Inna Allaha rafiqun yuhibbur-rifqa fil-amri kullihi",
        translation: "Indeed Allah is Gentle and loves gentleness in all matters.",
        reference: "Sahih al-Bukhari 6927",
        narrator: "Aisha رضي الله عنها",
        source: "sunnah.com/bukhari:6927",
        grading: "Sahih",
        context: "Al-Lateef deals with His servants with subtle kindness and gentleness.",
      },
    ],
    scholarlyInsights: [
      {
        scholar: "Ibn al-Qayyim",
        insight: "Al-Lateef has two meanings: (1) He knows the subtle, hidden matters, and (2) He is kind to His servants, guiding them to what is good through gentle, imperceptible means.",
        source: "Shifa' al-'Alil",
      },
    ],
    realLifeApplications: [
      "Look for Allah's subtle blessings in your life—they are everywhere.",
      "Trust that Al-Lateef is working behind the scenes even when you can't see it.",
      "Be gentle with others as Al-Lateef is gentle with you.",
      "Recognize that hardships may contain hidden kindness from Al-Lateef.",
    ],
    duas: [
      {
        arabicText: "يَا لَطِيفًا بِخَلْقِهِ، يَا عَلِيمًا بِخَلْقِهِ، يَا خَبِيرًا بِخَلْقِهِ، اُلْطُفْ بِنَا",
        transliteration: "Ya Latifan bi-khalqih, ya 'Aliman bi-khalqih, ya Khabiran bi-khalqih, ultuf bina",
        translation: "O You who are Subtle with His creation, All-Knowing of His creation, All-Aware of His creation, be Subtle with us.",
        occasion: "When seeking Allah's gentle care in difficult times",
        source: "Scholars' supplications based on this name",
      },
    ],
  },
  "ar-razzaq": {
    nameId: "ar-razzaq",
    hadiths: [
      {
        arabicText: "إِنَّ اللَّهَ هُوَ الْمُسَعِّرُ الْقَابِضُ الْبَاسِطُ الرَّزَّاقُ",
        transliteration: "Inna Allaha huwa al-musa'ir al-qabid al-basit ar-Razzaq",
        translation: "Indeed Allah is the One who sets prices, withholds, gives generously, and provides.",
        reference: "Sunan Abu Dawud 3451",
        narrator: "Anas ibn Malik رضي الله عنه",
        source: "sunnah.com/abudawud:3451",
        grading: "Sahih",
        context: "When prices rose in Madinah, people asked the Prophet ﷺ to fix prices, but he reminded them that provision comes from Allah alone.",
      },
      {
        arabicText: "لَوْ أَنَّكُمْ تَوَكَّلُونَ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ لَرَزَقَكُمْ كَمَا يَرْزُقُ الطَّيْرَ تَغْدُو خِمَاصًا وَتَرُوحُ بِطَانًا",
        transliteration: "Law annakum tawakkaluna 'ala Allahi haqqa tawakkulihi larazaqakum...",
        translation: "If you were to rely upon Allah with true reliance, He would provide for you as He provides for the birds—they go out hungry in the morning and return full in the evening.",
        reference: "Sunan at-Tirmidhi 2344",
        narrator: "Umar ibn al-Khattab رضي الله عنه",
        source: "sunnah.com/tirmidhi:2344",
        grading: "Sahih",
        context: "True trust in Ar-Razzaq, combined with effort, guarantees provision.",
      },
    ],
    scholarlyInsights: [
      {
        scholar: "Ibn Taymiyyah",
        insight: "Ar-Razzaq provides both material and spiritual sustenance. The greatest provision is guidance to faith, which is the food of the soul.",
        source: "Majmu' al-Fatawa",
      },
    ],
    realLifeApplications: [
      "Work hard but trust Ar-Razzaq for the results—provision is guaranteed.",
      "Don't envy others' provision—your rizq was written before your birth.",
      "Be generous with what Ar-Razzaq has given you; it won't decrease your provision.",
      "Seek halal income knowing that Ar-Razzaq will never leave you in need.",
    ],
    duas: [
      {
        arabicText: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
        transliteration: "Allahumma-kfini bi-halalika 'an haramik, wa aghnini bi-fadlika 'amman siwak",
        translation: "O Allah, suffice me with what You have made lawful instead of what You made unlawful, and enrich me with Your bounty instead of anyone besides You.",
        occasion: "When seeking lawful provision",
        source: "Sunan at-Tirmidhi 3563 (Hasan)",
      },
    ],
  },
  "al-fattah": {
    nameId: "al-fattah",
    hadiths: [
      {
        arabicText: "مَا مِنْ مُسْلِمٍ يَدْعُو بِدَعْوَةٍ لَيْسَ فِيهَا إِثْمٌ وَلاَ قَطِيعَةُ رَحِمٍ إِلاَّ أَعْطَاهُ اللَّهُ بِهَا إِحْدَى ثَلاَثٍ",
        transliteration: "Ma min muslimin yad'u bi-da'watin...",
        translation: "No Muslim makes a supplication without sin or cutting ties—except Allah gives him one of three: either his request is answered quickly, or it is stored for him in the Hereafter, or an equivalent evil is averted from him.",
        reference: "Musnad Ahmad 10749",
        narrator: "Abu Sa'id al-Khudri رضي الله عنه",
        source: "sunnah.com/ahmad:10749",
        grading: "Sahih",
        context: "Al-Fattah opens doors of response to dua in ways we may not expect.",
      },
    ],
    scholarlyInsights: [
      {
        scholar: "Ibn al-Qayyim",
        insight: "Al-Fattah opens what is closed: He opens hearts to guidance, opens doors of provision, opens ways out of difficulty, and opens victory for the believers.",
        source: "Tariq al-Hijratayn",
      },
    ],
    realLifeApplications: [
      "When facing a closed door, call upon Al-Fattah—He opens what seems impossible.",
      "Trust that every closed door may be protection from harm.",
      "Ask Al-Fattah to open your heart to understanding the Quran.",
      "Remember the story of Musa عَلَيْهِ ٱلسَّلَامُ—Al-Fattah parted the sea when there was no way.",
    ],
    duas: [
      {
        arabicText: "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ",
        transliteration: "Rabbana-ftah baynana wa bayna qawmina bil-haqqi wa anta khayrul-fatiheen",
        translation: "Our Lord, decide between us and our people in truth, and You are the Best of those who decide.",
        occasion: "When seeking justice and resolution",
        source: "Qur'an 7:89",
      },
    ],
  },
  "al-hakim": {
    nameId: "al-hakim",
    hadiths: [
      {
        arabicText: "عَجَبًا لأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ وَلَيْسَ ذَاكَ لأَحَدٍ إِلاَّ لِلْمُؤْمِنِ",
        transliteration: "'Ajaban li-amr al-mu'min...",
        translation: "How wonderful is the affair of the believer, for all his affairs are good—and this is only for the believer. If something good happens, he is grateful, and that is good for him. If something bad happens, he is patient, and that is good for him.",
        reference: "Sahih Muslim 2999",
        narrator: "Suhaib رضي الله عنه",
        source: "sunnah.com/muslim:2999",
        grading: "Sahih",
        context: "Al-Hakim's wisdom ensures that everything in a believer's life is ultimately good.",
      },
    ],
    scholarlyInsights: [
      {
        scholar: "Ibn Taymiyyah",
        insight: "Al-Hakim does nothing without profound wisdom. Even when we cannot see the wisdom, we trust that it exists. Sometimes the wisdom is revealed in this life, sometimes only in the next.",
        source: "Majmu' al-Fatawa",
      },
    ],
    realLifeApplications: [
      "Accept what you don't understand, trusting in Al-Hakim's wisdom.",
      "Don't question 'Why me?' when difficulty strikes—Al-Hakim has a purpose.",
      "Seek wisdom from the Quran—it is the speech of Al-Hakim.",
      "Remember the story of Khidr and Musa عَلَيْهِ ٱلسَّلَامُ—wisdom is often hidden.",
    ],
    duas: [
      {
        arabicText: "اللَّهُمَّ آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
        transliteration: "Allahumma atina min ladunka rahmatan wa hayyi' lana min amrina rashada",
        translation: "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.",
        occasion: "When seeking guidance in confusing situations",
        source: "Qur'an 18:10 - Dua of the People of the Cave",
      },
    ],
  },
  "al-wadud": {
    nameId: "al-wadud",
    hadiths: [
      {
        arabicText: "إِذَا أَحَبَّ اللَّهُ الْعَبْدَ نَادَى جِبْرِيلَ إِنَّ اللَّهَ يُحِبُّ فُلاَنًا فَأَحِبَّهُ",
        transliteration: "Idha ahabba Allahu al-'abda nada Jibreel...",
        translation: "When Allah loves a servant, He calls Jibreel and says: 'I love so-and-so, so love him.' Jibreel loves him, then calls out to the inhabitants of the heavens. They love him, then acceptance is placed for him on earth.",
        reference: "Sahih al-Bukhari 3209",
        narrator: "Abu Hurairah رضي الله عنه",
        source: "sunnah.com/bukhari:3209",
        grading: "Sahih",
        context: "Al-Wadud's love cascades through creation—when He loves you, all of creation loves you.",
      },
    ],
    scholarlyInsights: [
      {
        scholar: "Ibn al-Qayyim",
        insight: "Al-Wadud is the One who loves His righteous servants, and they love Him—there is no love more complete, more pure, or more beneficial than the love between Allah and His believing servant.",
        source: "Rawdat al-Muhibbin",
      },
    ],
    realLifeApplications: [
      "Seek to earn Al-Wadud's love through following the Sunnah.",
      "Show love to Allah's creation as a means to earn His love.",
      "Remember that Al-Wadud's love is not based on what you have, but who you are.",
      "Love what Allah loves and hate what Allah hates.",
    ],
    duas: [
      {
        arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَحُبَّ عَمَلٍ يُقَرِّبُنِي إِلَى حُبِّكَ",
        transliteration: "Allahumma inni as'aluka hubbaka wa hubba man yuhibbuk wa hubba 'amalin yuqarribuni ila hubbik",
        translation: "O Allah, I ask You for Your love, the love of those who love You, and the love of deeds that bring me closer to Your love.",
        occasion: "When seeking to increase love for Allah",
        source: "Sunan at-Tirmidhi 3235 (Hasan)",
      },
    ],
  },
  "al-haafiz": {
    nameId: "al-haafiz",
    hadiths: [
      {
        arabicText: "احْفَظِ اللَّهَ يَحْفَظْكَ احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ",
        transliteration: "Ihfadhillaha yahfadhk, ihfadhillaha tajidhu tujahak",
        translation: "Be mindful of Allah and He will protect you. Be mindful of Allah and you will find Him before you.",
        reference: "Jami' at-Tirmidhi 2516",
        narrator: "Abdullah ibn Abbas رضي الله عنهما",
        source: "sunnah.com/tirmidhi:2516",
        grading: "Sahih",
        context: "The Prophet ﷺ gave this advice to the young Ibn Abbas, teaching that Allah's preservation comes to those who preserve His commands.",
      },
    ],
    scholarlyInsights: [
      {
        scholar: "Ibn al-Qayyim",
        insight: "Allah preserves His servant in two ways: He preserves his worldly affairs — his body, family, wealth, and children. And He preserves his religious affairs — his faith and his religion — protecting him from doubts and desires.",
        source: "Al-Fawaid",
      },
    ],
    realLifeApplications: [
      "Be mindful of Allah's commands and He will preserve you in ways you cannot imagine.",
      "Trust that Al-Haafiz is guarding your good deeds — nothing sincere is ever wasted.",
      "Remember that the Quran's perfect preservation for 1,400+ years is proof of Al-Haafiz's power.",
      "When you feel exposed or vulnerable, seek refuge in Al-Haafiz, the ultimate Protector.",
    ],
    duas: [
      {
        arabicText: "اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي",
        transliteration: "Allahumma ihfadhni min bayni yadayya wa min khalfi wa 'an yameeni wa 'an shimali wa min fawqi",
        translation: "O Allah, protect me from in front of me, from behind me, from my right, from my left, and from above me.",
        occasion: "Morning and evening protection",
        source: "Sunan Abu Dawud 5074 (Sahih)",
      },
    ],
  },
  "al-mubeen": {
    nameId: "al-mubeen",
    hadiths: [
      {
        arabicText: "إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
        transliteration: "Inna Allaha la yandhuru ila suwarikum wa amwalikum wa lakin yandhuru ila quloobikum wa a'malikum",
        translation: "Indeed Allah does not look at your forms and your wealth, but He looks at your hearts and your deeds.",
        reference: "Sahih Muslim 2564",
        narrator: "Abu Hurairah رضي الله عنه",
        source: "sunnah.com/muslim:2564",
        grading: "Sahih",
        context: "Allah's knowledge is clear and manifest — He sees through all outward appearances to the reality within.",
      },
    ],
    scholarlyInsights: [
      {
        scholar: "Ibn Kathir",
        insight: "Al-Mubeen means that He is manifest and clear in His existence, His oneness, and His perfect attributes. His signs in creation are clear evidence for those who reflect, and on the Day of Judgment, His truth will be made manifest to all.",
        source: "Tafsir Ibn Kathir — Surah An-Nur 24:25",
      },
    ],
    realLifeApplications: [
      "Seek clarity from Al-Mubeen when you feel confused about life decisions.",
      "Study the Quran — it is the 'Kitab Mubeen' (Clear Book) sent to remove all confusion.",
      "Live with transparency and honesty, reflecting the attribute of clarity.",
      "Trust that Al-Mubeen will make the truth manifest even when it seems buried.",
    ],
    duas: [
      {
        arabicText: "اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ وَأَرِنِي الْبَاطِلَ بَاطِلاً وَارْزُقْنِي اجْتِنَابَهُ",
        transliteration: "Allahumma arini al-haqqa haqqan warzuqni ittiba'ah, wa arini al-batila batilan warzuqni ijtinabah",
        translation: "O Allah, show me the truth as truth and grant me the ability to follow it, and show me falsehood as falsehood and grant me the ability to avoid it.",
        occasion: "When seeking clarity and guidance",
        source: "Attributed to the Prophet ﷺ — referenced by scholars including Ibn Taymiyyah",
      },
    ],
  },
  "al-qaahir": {
    nameId: "al-qaahir",
    hadiths: [
      {
        arabicText: "مَا مِنْ مَلِكٍ إِلاَّ وَاللَّهُ عَزَّ وَجَلَّ أَعَزُّ مِنْهُ",
        translation: "There is no king except that Allah, the Mighty and Majestic, is mightier than him.",
        reference: "Related meaning from Sahih Muslim 2788",
        narrator: "Abu Hurairah رضي الله عنه",
        source: "sunnah.com/muslim:2788",
        grading: "Sahih",
        context: "Allah is Al-Qaahir — He subdues and overpowers all creation, and no ruler or tyrant can escape His grasp.",
      },
    ],
    scholarlyInsights: [
      {
        scholar: "Imam al-Ghazali",
        insight: "Al-Qaahir is the one who subdues all of creation. Every created being is subdued before Him — compelled, yielding, unable to resist His decree. The heavens, the earth, the stars, the mountains — all are subdued before His majesty.",
        source: "Al-Maqsad al-Asna fi Sharh Asma Allah al-Husna",
      },
    ],
    realLifeApplications: [
      "When you see oppression, remember that Al-Qaahir will subdue every tyrant.",
      "Never be arrogant — Al-Qaahir humbles whoever rises against His decree.",
      "Find comfort in knowing that no enemy or difficulty is beyond Al-Qaahir's power to subdue.",
      "Submit willingly to Allah before you are subdued — the wise servant surrenders with love.",
    ],
    duas: [
      {
        arabicText: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
        transliteration: "Hasbuna Allahu wa ni'ma al-wakeel",
        translation: "Allah is sufficient for us, and He is the best Disposer of affairs.",
        occasion: "When facing oppression or overwhelming difficulty",
        source: "Qur'an 3:173 — said by the believers when told that a great army had gathered against them",
      },
    ],
  },
  "al-qadeer": {
    nameId: "al-qadeer",
    hadiths: [
      {
        arabicText: "إِنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        translation: "Indeed, Allah is over all things Qadeer (All-Powerful).",
        reference: "Qur'an — appears over 30 times",
        narrator: "Direct Quranic statement",
        source: "Multiple surahs including Al-Baqarah 2:20, Al-Baqarah 2:109, Aal-Imran 3:29",
        grading: "Quranic",
        context: "This phrase is repeated extensively throughout the Quran as a constant reminder that nothing is beyond Allah's power.",
      },
    ],
    scholarlyInsights: [
      {
        scholar: "Shaykh as-Sa'di",
        insight: "Al-Qadeer is the One whose power is perfect and complete. By His power He brought everything into existence, by it He arranges all affairs, by it He fashioned and perfected creation. The One who, when He wills a thing, merely says 'Be!' and it is.",
        source: "Explanation to the Beautiful and Perfect Names of Allah",
      },
    ],
    realLifeApplications: [
      "Never say 'impossible' — Al-Qadeer has power over all things.",
      "Ask Al-Qadeer for what you need, no matter how difficult it seems — He gave a child to the barren and made fire cool.",
      "Reflect on creation as a sign of His limitless power — every leaf, star, and heartbeat is by His Qudrah.",
      "When making dua, have certainty that Al-Qadeer can answer — doubting His power limits your own supplication.",
    ],
    duas: [
      {
        arabicText: "اللَّهُمَّ إِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ وَتَعْلَمُ وَلَا أَعْلَمُ وَأَنْتَ عَلَّامُ الْغُيُوبِ",
        transliteration: "Allahumma innaka taqdiru wa la aqdiru wa ta'lamu wa la a'lamu wa anta 'allamul-ghuyoob",
        translation: "O Allah, You have power and I have no power, You know and I do not know, and You are the Knower of the unseen.",
        occasion: "When entrusting your affairs to Allah's power and knowledge",
        source: "Part of Salat al-Istikhara — Sahih al-Bukhari 1166",
      },
    ],
  },
};

export function getExtendedLearning(nameId: string): ExtendedLearning | undefined {
  return extendedLearningDb[nameId];
}
