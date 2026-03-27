// Authenticated duas linked to specific Names of Allah.
// Sources: Qur'an, Sahih al-Bukhari, Sahih Muslim, Sunan Abu Dawud,
//          Sunan at-Tirmidhi, Musnad Ahmad (graded Sahih/Hasan).
// Principle: "And to Allah belong the best names, so invoke Him by them." — Qur'an 7:180

export interface NameDua {
  nameId: string;
  nameArabic: string;
  nameTransliteration: string;
  nameMeaning: string;
  // The dua itself
  arabicText: string;
  transliteration: string;
  translation: string;
  source: string;
  // Brief context for why this dua connects to this name
  connection: string;
}

export const duasByName: Record<string, NameDua> = {
  "ar-rahman": {
    nameId: "ar-rahman",
    nameArabic: "ٱلرَّحْمَـٰنُ",
    nameTransliteration: "Ar-Rahman",
    nameMeaning: "The Most Merciful",
    arabicText:
      "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
    transliteration:
      "Rabbana zalamna anfusana wa il-lam taghfir lana wa tarhamna lanakoonanna minal-khasireen",
    translation:
      "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
    source: "Qur'an 7:23 — Dua of Adam عَلَيْهِ ٱلسَّلَامُ",
    connection: "Ar-Rahman's mercy is the only refuge for those who have fallen short.",
  },

  "ar-raheem": {
    nameId: "ar-raheem",
    nameArabic: "ٱلرَّحِيمُ",
    nameTransliteration: "Ar-Raheem",
    nameMeaning: "The Most Compassionate",
    arabicText: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ",
    transliteration: "Rabbi-ghfir warham wa anta khayr ar-rahimeen",
    translation: "My Lord, forgive and have mercy, and You are the best of the merciful.",
    source: "Qur'an 23:118",
    connection: "Ar-Raheem's special mercy embraces all who turn to Him in sincere repentance.",
  },

  "al-fattah": {
    nameId: "al-fattah",
    nameArabic: "ٱلْفَتَّاحُ",
    nameTransliteration: "Al-Fattah",
    nameMeaning: "The Opener of All Doors",
    arabicText:
      "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ",
    transliteration:
      "Rabbana-ftah baynana wa bayna qawmina bil-haqqi wa anta khayrul-fatiheen",
    translation:
      "Our Lord, decide between us and our people in truth, and You are the Best of those who decide.",
    source: "Qur'an 7:89 — Dua of Prophet Shu'ayb عَلَيْهِ ٱلسَّلَامُ",
    connection: "Al-Fattah opens every closed door — material, spiritual, and beyond.",
  },

  "al-wakeel": {
    nameId: "al-wakeel",
    nameArabic: "ٱلْوَكِيلُ",
    nameTransliteration: "Al-Wakeel",
    nameMeaning: "The Trustee, The Disposer of Affairs",
    arabicText:
      "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    transliteration:
      "Hasbiya Allahu la ilaha illa Huwa 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Azeem",
    translation:
      "Allah is sufficient for me. There is no deity except Him. Upon Him I have relied, and He is the Lord of the Great Throne.",
    source: "Qur'an 9:129 — recited 7× morning and evening (Sunan Abu Dawud 5081, Sahih)",
    connection: "When you feel like you cannot carry your burdens, hand them entirely to Al-Wakeel.",
  },

  "al-ghaffar": {
    nameId: "al-ghaffar",
    nameArabic: "ٱلْغَفَّارُ",
    nameTransliteration: "Al-Ghaffar",
    nameMeaning: "The Perpetual Forgiver",
    arabicText:
      "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
    transliteration:
      "Astaghfir-ullah alladhi la ilaha illa Huwa al-Hayy al-Qayyum wa atubu ilayh",
    translation:
      "I seek forgiveness from Allah, besides Whom there is no deity, the Ever-Living, the Sustainer, and I repent to Him.",
    source: "Sunan Abu Dawud 1517 — graded Sahih; erases sins even if like sea foam",
    connection: "Al-Ghaffar forgives again and again — no sin is too great, no return too late.",
  },

  "al-ghafoor": {
    nameId: "al-ghafoor",
    nameArabic: "ٱلْغَفُورُ",
    nameTransliteration: "Al-Ghafoor",
    nameMeaning: "The All-Forgiving",
    arabicText:
      "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration:
      "Rabbana-ghfir lana dhunubana wa israfana fi amrina wa thabbit aqdamana wansurna 'alal-qawmil-kafirin",
    translation:
      "Our Lord, forgive us our sins and our excess in our affairs, make our feet firm, and grant us victory over the disbelieving people.",
    source: "Qur'an 3:147 — Dua of those who remained steadfast",
    connection: "Al-Ghafoor's forgiveness covers all sins completely — leaving no trace.",
  },

  "al-afuw": {
    nameId: "al-afuw",
    nameArabic: "ٱلْعَفُوُّ",
    nameTransliteration: "Al-Afuw",
    nameMeaning: "The Pardoner",
    arabicText: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    transliteration: "Allahumma innaka 'Afuwwun tuhibbul-'afwa fa'fu 'anni",
    translation: "O Allah, You are the Pardoner, You love to pardon, so pardon me.",
    source: "Sunan at-Tirmidhi 3513 — graded Sahih; taught by the Prophet ﷺ for Laylat al-Qadr",
    connection:
      "Al-Afuw doesn't just forgive — He erases the sin from your record entirely.",
  },

  "at-tawwab": {
    nameId: "at-tawwab",
    nameArabic: "ٱلتَّوَّابُ",
    nameTransliteration: "At-Tawwab",
    nameMeaning: "The Accepter of Repentance",
    arabicText: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ وَتُبْ عَلَيْنَا إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ",
    transliteration:
      "Rabbana taqabbal minna innaka antas-Sami'ul-'Aleem, wa tub 'alayna innaka antat-Tawwabur-Raheem",
    translation:
      "Our Lord, accept from us. Indeed, You are the Hearing, the Knowing. And accept our repentance. Indeed, You are the Accepting of Repentance, the Merciful.",
    source: "Qur'an 2:127-128",
    connection: "At-Tawwab loves when His servants return to Him — every sincere return is welcomed.",
  },

  "al-lateef": {
    nameId: "al-lateef",
    nameArabic: "ٱللَّطِيفُ",
    nameTransliteration: "Al-Lateef",
    nameMeaning: "The Subtle, The Most Gentle",
    arabicText:
      "يَا لَطِيفًا بِخَلْقِهِ يَا عَلِيمًا بِخَلْقِهِ يَا خَبِيرًا بِخَلْقِهِ اُلْطُفْ بِنَا",
    transliteration:
      "Ya Latifan bi-khalqih, ya 'Aliman bi-khalqih, ya Khabiran bi-khalqih, ultuf bina",
    translation:
      "O You who are Subtle with Your creation, All-Knowing of Your creation, All-Aware of Your creation — be Subtle with us.",
    source: "Scholarly supplication grounded in Qur'an 67:14 and 42:19",
    connection: "Al-Lateef works through hidden paths — sometimes what feels like hardship is His subtle care.",
  },

  "ar-razzaq": {
    nameId: "ar-razzaq",
    nameArabic: "ٱلرَّزَّاقُ",
    nameTransliteration: "Ar-Razzaq",
    nameMeaning: "The All-Provider",
    arabicText:
      "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    transliteration:
      "Allahumma-kfini bi-halalika 'an haramik, wa aghnini bi-fadlika 'amman siwak",
    translation:
      "O Allah, suffice me with what You have made lawful instead of what You have made unlawful, and enrich me with Your bounty instead of anyone besides You.",
    source: "Sunan at-Tirmidhi 3563 — graded Hasan",
    connection: "Ar-Razzaq's provision is guaranteed — this dua realigns your trust to the true Provider.",
  },

  "al-wahhab": {
    nameId: "al-wahhab",
    nameArabic: "ٱلْوَهَّابُ",
    nameTransliteration: "Al-Wahhab",
    nameMeaning: "The Bestower of Gifts",
    arabicText:
      "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
    transliteration:
      "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana min ladunka rahmah, innaka antal-Wahhab",
    translation:
      "Our Lord, do not let our hearts deviate after You have guided us, and grant us from Your mercy. Indeed, You are the Bestower.",
    source: "Qur'an 3:8",
    connection: "Al-Wahhab gives without measure — including the greatest gift of a steadfast heart.",
  },

  "al-mughni": {
    nameId: "al-mughni",
    nameArabic: "ٱلْمُغْنِى",
    nameTransliteration: "Al-Mughni",
    nameMeaning: "The Enricher",
    arabicText:
      "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    transliteration:
      "Allahumma-kfini bi-halalika 'an haramik, wa aghnini bi-fadlika 'amman siwak",
    translation:
      "O Allah, suffice me with what You have made lawful instead of what You have made unlawful, and enrich me with Your bounty instead of anyone besides You.",
    source: "Sunan at-Tirmidhi 3563 — graded Hasan",
    connection: "Al-Mughni enriches in ways beyond money — He enriches the heart with contentment.",
  },

  "al-hakim": {
    nameId: "al-hakim",
    nameArabic: "ٱلْحَكِيمُ",
    nameTransliteration: "Al-Hakim",
    nameMeaning: "The All-Wise",
    arabicText:
      "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
    transliteration:
      "Rabbana atina min ladunka rahmatan wa hayyi' lana min amrina rashada",
    translation:
      "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.",
    source: "Qur'an 18:10 — Dua of the People of the Cave",
    connection: "Al-Hakim's wisdom guides every step — trust His plan even when you can't see it.",
  },

  "al-wadud": {
    nameId: "al-wadud",
    nameArabic: "ٱلْوَدُودُ",
    nameTransliteration: "Al-Wadud",
    nameMeaning: "The Most Loving",
    arabicText:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَحُبَّ عَمَلٍ يُقَرِّبُنِي إِلَى حُبِّكَ",
    transliteration:
      "Allahumma inni as'aluka hubbaka wa hubba man yuhibbuk wa hubba 'amalin yuqarribuni ila hubbik",
    translation:
      "O Allah, I ask You for Your love, the love of those who love You, and the love of deeds that bring me closer to Your love.",
    source: "Sunan at-Tirmidhi 3235 — graded Hasan",
    connection: "Al-Wadud's love is pure and unconditional — asking for it is the greatest request.",
  },

  "al-aleem": {
    nameId: "al-aleem",
    nameArabic: "ٱلْعَلِيمُ",
    nameTransliteration: "Al-Aleem",
    nameMeaning: "The All-Knowing",
    arabicText: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni 'ilma",
    translation: "My Lord, increase me in knowledge.",
    source: "Qur'an 20:114 — the only dua the Prophet ﷺ was commanded to make for increase",
    connection: "Al-Aleem knows all — asking Him for knowledge connects you to the Source of all wisdom.",
  },

  "al-hayy": {
    nameId: "al-hayy",
    nameArabic: "ٱلْحَىُّ",
    nameTransliteration: "Al-Hayy",
    nameMeaning: "The Ever-Living",
    arabicText: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
    transliteration: "Ya Hayyu Ya Qayyumu bi-rahmatika astaghith",
    translation: "O Ever-Living, O Sustainer of all existence, I seek help through Your mercy.",
    source: "Sunan at-Tirmidhi 3524 — graded Hasan",
    connection: "Al-Hayy never sleeps, never tires — His watchful mercy is constant over you.",
  },

  "al-qayyum": {
    nameId: "al-qayyum",
    nameArabic: "ٱلْقَيُّومُ",
    nameTransliteration: "Al-Qayyum",
    nameMeaning: "The Sustainer of All",
    arabicText: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
    transliteration: "Ya Hayyu Ya Qayyumu bi-rahmatika astaghith",
    translation: "O Ever-Living, O Sustainer of all existence, I seek help through Your mercy.",
    source: "Sunan at-Tirmidhi 3524 — graded Hasan",
    connection: "Al-Qayyum holds all of creation — when you feel like you're falling, He holds you too.",
  },

  "an-nur": {
    nameId: "an-nur",
    nameArabic: "ٱلنُّورُ",
    nameTransliteration: "An-Nur",
    nameMeaning: "The Light",
    arabicText:
      "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا وَعَنْ يَمِينِي نُورًا وَعَنْ يَسَارِي نُورًا وَفَوْقِي نُورًا وَتَحْتِي نُورًا وَأَمَامِي نُورًا وَخَلْفِي نُورًا وَاجْعَلْ لِي نُورًا",
    transliteration:
      "Allahumma-j'al fi qalbi nuran wa fi basari nuran wa fi sam'i nuran wa 'an yamini nuran wa 'an yasari nuran wa fawqi nuran wa tahti nuran wa amami nuran wa khalfi nuran wa-j'al li nuran",
    translation:
      "O Allah, place light in my heart, light in my sight, light in my hearing, light to my right, light to my left, light above me, light below me, light before me, light behind me, and grant me light.",
    source: "Sahih al-Bukhari 6316 — Dua of the Prophet ﷺ",
    connection: "An-Nur illuminates every dimension — this dua asks for light to fill your entire being.",
  },

  "al-hadi": {
    nameId: "al-hadi",
    nameArabic: "ٱلْهَادِى",
    nameTransliteration: "Al-Hadi",
    nameMeaning: "The Guide",
    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
    transliteration: "Allahumma inni as'alukal-huda wat-tuqa wal-'afafa wal-ghina",
    translation:
      "O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.",
    source: "Sahih Muslim 2721",
    connection: "Al-Hadi guides willing hearts — this dua is a sincere request to be among the guided.",
  },

  "al-mumin": {
    nameId: "al-mumin",
    nameArabic: "ٱلْمُؤْمِنُ",
    nameTransliteration: "Al-Mu'min",
    nameMeaning: "The Granter of Security",
    arabicText:
      "اللَّهُمَّ أَنتَ رَبِّي لَا إِلَهَ إِلَّا أَنتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنتَ",
    transliteration:
      "Allahumma anta Rabbi la ilaha illa anta khalaqtani wa ana 'abduka wa ana 'ala 'ahdika wa wa'dika mastata'tu a'udhu bika min sharri ma sana'tu abuu'u laka bi-ni'matika 'alayya wa abuu'u bi-dhanbi fa-ghfir li fa-innahu la yaghfirudh-dhunuba illa ant",
    translation:
      "O Allah, You are my Lord. There is no deity but You. You created me and I am Your servant. I am upon Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me, and I acknowledge my sin — so forgive me, for none forgives sins but You.",
    source: "Sahih al-Bukhari 6306 — Sayyid al-Istighfar; best dua for seeking forgiveness and security",
    connection: "Al-Mu'min grants security — this master supplication is the ultimate act of trust in Him.",
  },

  "as-samee": {
    nameId: "as-samee",
    nameArabic: "ٱلسَّمِيعُ",
    nameTransliteration: "As-Samee",
    nameMeaning: "The All-Hearing",
    arabicText:
      "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Rabbana taqabbal minna innaka antas-Sami'ul-'Aleem",
    translation:
      "Our Lord, accept from us. Indeed, You are the All-Hearing, the All-Knowing.",
    source: "Qur'an 2:127 — Dua of Ibrahim and Isma'il عَلَيْهِمَا ٱلسَّلَامُ",
    connection: "As-Samee hears every whisper, every unspoken prayer — your dua has never gone unheard.",
  },

  "al-baseer": {
    nameId: "al-baseer",
    nameArabic: "ٱلْبَصِيرُ",
    nameTransliteration: "Al-Baseer",
    nameMeaning: "The All-Seeing",
    arabicText:
      "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا",
    transliteration:
      "Allahumma-j'al fi qalbi nuran wa fi basari nuran wa fi sam'i nuran",
    translation:
      "O Allah, place light in my heart, light in my sight, and light in my hearing.",
    source: "Sahih al-Bukhari 6316 — Dua of the Prophet ﷺ",
    connection: "Al-Baseer sees your situation in full — ask Him to grant you clear sight of what matters.",
  },

  "al-khabeer": {
    nameId: "al-khabeer",
    nameArabic: "ٱلْخَبِيرُ",
    nameTransliteration: "Al-Khabeer",
    nameMeaning: "The All-Aware",
    arabicText:
      "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً",
    transliteration:
      "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana min ladunka rahmah",
    translation:
      "Our Lord, do not let our hearts deviate after You have guided us, and grant us from Your mercy.",
    source: "Qur'an 3:8",
    connection:
      "Al-Khabeer is aware of what is hidden in your heart — He knows your pain before you speak it.",
  },

  "al-haleem": {
    nameId: "al-haleem",
    nameArabic: "ٱلْحَلِيمُ",
    nameTransliteration: "Al-Haleem",
    nameMeaning: "The Forbearing",
    arabicText:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَالْجُبْنِ وَالْبُخْلِ وَالْهَرَمِ وَعَذَابِ الْقَبْرِ",
    transliteration:
      "Allahumma inni a'udhu bika minal-'ajzi wal-kasali wal-jubni wal-bukhli wal-harami wa 'adhabil-qabr",
    translation:
      "O Allah, I seek refuge in You from incapacity, laziness, cowardice, miserliness, old age, and the punishment of the grave.",
    source: "Sahih al-Bukhari 6367",
    connection: "Al-Haleem is patient beyond measure — ask Him for patience when your limits are tested.",
  },

  "al-wali": {
    nameId: "al-wali",
    nameArabic: "ٱلْوَلِىُّ",
    nameTransliteration: "Al-Wali",
    nameMeaning: "The Protecting Friend",
    arabicText:
      "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    transliteration:
      "Hasbiya Allahu la ilaha illa Huwa 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Azeem",
    translation:
      "Allah is sufficient for me. There is no deity except Him. Upon Him I have relied, and He is the Lord of the Great Throne.",
    source: "Qur'an 9:129 — recited 7× (Sunan Abu Dawud 5081, Sahih)",
    connection: "Al-Wali is your Protecting Friend who never abandons you — you are never truly alone.",
  },

  "ash-shakur": {
    nameId: "ash-shakur",
    nameArabic: "ٱلشَّكُورُ",
    nameTransliteration: "Ash-Shakur",
    nameMeaning: "The Most Appreciative",
    arabicText:
      "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ",
    transliteration:
      "Rabbi awzi'ni an ashkura ni'mataka allati an'amta 'alayya wa 'ala walidayya wa an a'mala salihan tardahu wa adkhilni bi-rahmatika fi 'ibadikash-saliheen",
    translation:
      "My Lord, enable me to be grateful for Your favour which You have bestowed upon me and upon my parents, and to do righteousness of which You approve, and admit me by Your mercy into the ranks of Your righteous servants.",
    source: "Qur'an 27:19 — Dua of Sulayman عَلَيْهِ ٱلسَّلَامُ",
    connection: "Ash-Shakur is grateful even for the smallest deed — let gratitude flow both ways.",
  },

  "al-hameed": {
    nameId: "al-hameed",
    nameArabic: "ٱلْحَمِيدُ",
    nameTransliteration: "Al-Hameed",
    nameMeaning: "The Praiseworthy",
    arabicText:
      "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ",
    transliteration: "Alhamdu lillahi alladhi bi-ni'matihi tatimmus-salihat",
    translation: "All praise is to Allah by Whose blessing all good things are completed.",
    source: "Sunan Ibn Majah 3803 — graded Sahih",
    connection: "Al-Hameed deserves all praise — returning praise to Him brings more blessings.",
  },

  "al-khaliq": {
    nameId: "al-khaliq",
    nameArabic: "ٱلْخَالِقُ",
    nameTransliteration: "Al-Khaliq",
    nameMeaning: "The Creator",
    arabicText: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ",
    transliteration: "Rabbi la tadharni fardan wa anta khayrul-waritheen",
    translation: "My Lord, do not leave me alone, and You are the best of inheritors.",
    source: "Qur'an 21:89 — Dua of Zakariya عَلَيْهِ ٱلسَّلَامُ",
    connection: "Al-Khaliq created you with unique purpose — ask Him to fulfil what He created you for.",
  },

  "al-haqq": {
    nameId: "al-haqq",
    nameArabic: "ٱلْحَقُّ",
    nameTransliteration: "Al-Haqq",
    nameMeaning: "The Absolute Truth",
    arabicText:
      "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا",
    transliteration:
      "Rabbana la tu'akhidhna in nasina aw akhta'na rabbana wa la tahmil 'alayna isran kama hamaltahu 'alal-ladhina min qablina",
    translation:
      "Our Lord, do not punish us if we forget or make a mistake. Our Lord, do not burden us as You burdened those before us.",
    source: "Qur'an 2:286",
    connection: "Al-Haqq is the absolute truth — in Him there is no injustice and no deception.",
  },

  "al-qawiyy": {
    nameId: "al-qawiyy",
    nameArabic: "ٱلْقَوِىُّ",
    nameTransliteration: "Al-Qawiyy",
    nameMeaning: "The All-Strong",
    arabicText:
      "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    transliteration: "La hawla wa la quwwata illa billahi al-'Aliyyil-'Azeem",
    translation:
      "There is no power and no strength except with Allah, the Most High, the Most Great.",
    source: "Sahih al-Bukhari 6021 — called 'a treasure from the treasures of Paradise'",
    connection: "Al-Qawiyy's strength has no limit — lean on it whenever yours runs out.",
  },

  "al-muqtadir": {
    nameId: "al-muqtadir",
    nameArabic: "ٱلْمُقْتَدِرُ",
    nameTransliteration: "Al-Muqtadir",
    nameMeaning: "The All-Powerful",
    arabicText:
      "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    transliteration: "La hawla wa la quwwata illa billahi al-'Aliyyil-'Azeem",
    translation:
      "There is no power and no strength except with Allah, the Most High, the Most Great.",
    source: "Sahih al-Bukhari 6021",
    connection: "Al-Muqtadir is All-Powerful — nothing is beyond Him, including your situation.",
  },

  "as-sabur": {
    nameId: "as-sabur",
    nameArabic: "ٱلصَّبُورُ",
    nameTransliteration: "As-Sabur",
    nameMeaning: "The Most Patient",
    arabicText:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الصَّبْرَ وَأَعُوذُ بِكَ مِنَ الْجَزَعِ",
    transliteration: "Allahumma inni as'alukas-sabra wa a'udhu bika minal-jaza'",
    translation:
      "O Allah, I ask You for patience and I seek refuge in You from anxiety and grief.",
    source: "Dua reported from the Companions, based on prophetic encouragement in Sahih Muslim 918",
    connection: "As-Sabur's patience is infinite — in every delay is His perfect wisdom.",
  },

  "al-jabbar": {
    nameId: "al-jabbar",
    nameArabic: "ٱلْجَبَّارُ",
    nameTransliteration: "Al-Jabbar",
    nameMeaning: "The Mender of the Broken",
    arabicText:
      "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
    transliteration:
      "Rabbana zalamna anfusana wa il-lam taghfir lana wa tarhamna lanakoonanna minal-khasireen",
    translation:
      "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
    source: "Qur'an 7:23 — Dua of Adam عَلَيْهِ ٱلسَّلَامُ",
    connection: "Al-Jabbar mends what is broken — hearts, hopes, and lives that seem beyond repair.",
  },

  "al-adl": {
    nameId: "al-adl",
    nameArabic: "ٱلْعَدْلُ",
    nameTransliteration: "Al-Adl",
    nameMeaning: "The Perfectly Just",
    arabicText:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الظُّلْمِ",
    transliteration: "Allahumma inni a'udhu bika minaz-zulm",
    translation: "O Allah, I seek refuge in You from oppression and injustice.",
    source: "Derived from Sahih Muslim 2577 — seeking refuge from injustice",
    connection: "Al-Adl's justice is perfect and complete — every wrong will be set right.",
  },

  "al-fattah_opener": {
    nameId: "al-fattah",
    nameArabic: "ٱلْفَتَّاحُ",
    nameTransliteration: "Al-Fattah",
    nameMeaning: "The Opener of All Doors",
    arabicText: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    transliteration: "Rabbi inni lima anzalta ilayya min khayrin faqeer",
    translation: "My Lord, indeed I am, for whatever good You would send down to me, in need.",
    source: "Qur'an 28:24 — Dua of Musa عَلَيْهِ ٱلسَّلَامُ after his greatest trial",
    connection: "Musa said this in desperation — and Allah opened every door for him.",
  },
  "al-haafiz": {
    nameId: "al-haafiz",
    nameArabic: "ٱلْحَافِظُ",
    nameTransliteration: "Al-Haafiz",
    nameMeaning: "The Preserver",
    arabicText: "اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي",
    transliteration: "Allahumma ihfadhni min bayni yadayya wa min khalfi wa 'an yameeni wa 'an shimali wa min fawqi",
    translation: "O Allah, protect me from in front of me, from behind me, from my right, from my left, and from above me.",
    source: "Sunan Abu Dawud 5074 — graded Sahih",
    connection: "Al-Haafiz preserves from every direction — this dua asks Him for complete protection.",
  },
  "al-mubeen": {
    nameId: "al-mubeen",
    nameArabic: "ٱلْمُبِينُ",
    nameTransliteration: "Al-Mubeen",
    nameMeaning: "The Clear, The Manifest",
    arabicText: "اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ وَأَرِنِي الْبَاطِلَ بَاطِلاً وَارْزُقْنِي اجْتِنَابَهُ",
    transliteration: "Allahumma arini al-haqqa haqqan warzuqni ittiba'ah, wa arini al-batila batilan warzuqni ijtinabah",
    translation: "O Allah, show me the truth as truth and grant me the ability to follow it, and show me falsehood as falsehood and grant me the ability to avoid it.",
    source: "Attributed to the Prophet ﷺ — referenced by scholars including Ibn Taymiyyah",
    connection: "Al-Mubeen makes truth manifest — this dua asks Him to make truth and falsehood clear in your life.",
  },
  "al-qaahir": {
    nameId: "al-qaahir",
    nameArabic: "ٱلْقَاهِرُ",
    nameTransliteration: "Al-Qaahir",
    nameMeaning: "The Irresistible Subduer",
    arabicText: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Hasbuna Allahu wa ni'ma al-wakeel",
    translation: "Allah is sufficient for us, and He is the best Disposer of affairs.",
    source: "Qur'an 3:173 — said by the believers when facing a great army",
    connection: "Al-Qaahir subdues all forces — this dua entrusts your affairs to the One no power can resist.",
  },
  "al-qadeer": {
    nameId: "al-qadeer",
    nameArabic: "ٱلْقَدِيرُ",
    nameTransliteration: "Al-Qadeer",
    nameMeaning: "The All-Powerful",
    arabicText: "اللَّهُمَّ إِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ وَتَعْلَمُ وَلَا أَعْلَمُ وَأَنْتَ عَلَّامُ الْغُيُوبِ",
    transliteration: "Allahumma innaka taqdiru wa la aqdiru wa ta'lamu wa la a'lamu wa anta 'allamul-ghuyoob",
    translation: "O Allah, You have power and I have no power, You know and I do not know, and You are the Knower of the unseen.",
    source: "Part of Salat al-Istikhara — Sahih al-Bukhari 1166",
    connection: "Al-Qadeer has complete power — this dua acknowledges His power over all that is beyond your ability.",
  },
};

// Default fallback dua for any name not in the database
export const fallbackDua: Omit<NameDua, "nameId" | "nameArabic" | "nameTransliteration" | "nameMeaning"> = {
  arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ ﷺ وَأَعُوذُ بِكَ مِنْ شَرِّ مَا اسْتَعَاذَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ ﷺ",
  transliteration: "Allahumma inni as'aluka min khayri ma sa'alaka minhu nabiyyuka Muhammadun ﷺ wa a'udhu bika min sharri mas-ta'adha minhu nabiyyuka Muhammadun ﷺ",
  translation: "O Allah, I ask You for the best of what Your Prophet Muhammad ﷺ asked You for, and I seek refuge in You from the worst of what Your Prophet Muhammad ﷺ sought refuge from.",
  source: "Sunan at-Tirmidhi 3521 — graded Hasan",
  connection: "This comprehensive dua encompasses all good and protection from all harm.",
};

export function getDuaForName(nameId: string): NameDua | null {
  return duasByName[nameId] ?? null;
}
