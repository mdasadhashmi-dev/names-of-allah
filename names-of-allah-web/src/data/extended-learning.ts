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
};

export function getExtendedLearning(nameId: string): ExtendedLearning | undefined {
  return extendedLearningDb[nameId];
}
