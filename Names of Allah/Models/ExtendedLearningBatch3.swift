// ExtendedLearningBatch3.swift - Extended learning content batch 3
import Foundation

extension ExtendedLearningDatabase {
    func populateBatch3() {
        // AL-QAAHIR - The Irresistible Subduer
        learningContent["al-qaahir"] = ExtendedLearning(
            nameId: "al-qaahir",
            hadiths: [
                HadithReference(
                    arabicText: "يَقْبِضُ اللَّهُ الأَرْضَ يَوْمَ الْقِيَامَةِ وَيَطْوِي السَّمَاءَ بِيَمِينِهِ ثُمَّ يَقُولُ أَنَا الْمَلِكُ أَيْنَ مُلُوكُ الأَرْضِ",
                    transliteration: "Yaqbidu Allahu al-arda yawma al-qiyamah wa yatawi as-sama'a bi yaminihi thumma yaqulu ana al-maliku ayna mulooku al-ard",
                    translation: "Allah will fold up the earth on the Day of Resurrection and roll up the heavens in His Right Hand, then He will say: 'I am the King, where are the kings of the earth?'",
                    reference: "Sahih al-Bukhari 7382",
                    narrator: "Abu Hurairah رضي الله عنه",
                    source: "sunnah.com/bukhari:7382",
                    grading: "Sahih",
                    context: "This hadith illustrates Allah's absolute dominion and irresistible power over all creation on the Day of Judgment."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn al-Qayyim",
                    insight: "Al-Qaahir is He who subdues all of creation. Nothing can resist His will or escape His decree. Every created being is under His dominion and authority, willingly or unwillingly.",
                    source: "Badaai' al-Fawaid",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "When facing oppression, find comfort knowing that Al-Qaahir will ultimately bring all oppressors to account.",
                "Submit willingly to Allah's commands, knowing that His authority is absolute and irresistible.",
                "Let go of the illusion of control—recognize that only Al-Qaahir truly controls all affairs.",
                "When tempted by arrogance, remember that every soul is subdued before Al-Qaahir."
            ],
            duas: [
                DuaReference(
                    arabicText: "اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
                    transliteration: "Allahumma la mani'a lima a'tayta wa la mu'tiya lima mana'ta wa la yanfa'u dhal-jaddi minkal-jadd",
                    translation: "O Allah, none can withhold what You have given, and none can give what You have withheld, and no wealth or power can benefit anyone against You.",
                    occasion: "After the salaam of every obligatory prayer",
                    source: "Sahih al-Bukhari 844"
                )
            ]
        )

        // AL-QABID - The Withholder
        learningContent["al-qabid"] = ExtendedLearning(
            nameId: "al-qabid",
            hadiths: [
                HadithReference(
                    arabicText: "إِنَّ اللَّهَ هُوَ الْمُسَعِّرُ الْقَابِضُ الْبَاسِطُ الرَّازِقُ وَإِنِّي لَأَرْجُو أَنْ أَلْقَى اللَّهَ وَلَيْسَ أَحَدٌ مِنْكُمْ يُطَالِبُنِي بِمَظْلَمَةٍ فِي دَمٍ وَلَا مَالٍ",
                    transliteration: "Inna Allaha huwa al-musa'iru al-qabidu al-basitu ar-raziqu wa inni la-arju an alqa Allaha wa laysa ahadun minkum yutalibuni bi-mathlamatin fi damin wa la mal",
                    translation: "Indeed, Allah is the One who sets prices, the Withholder, the Extender, the Provider. I hope to meet Allah without anyone among you claiming that I wronged them in blood or wealth.",
                    reference: "Sunan Abu Dawud 3451",
                    narrator: "Anas ibn Malik رضي الله عنه",
                    source: "sunnah.com/abudawud:3451",
                    grading: "Sahih",
                    context: "When prices rose in Madinah, people asked the Prophet ﷺ to fix prices, but he reminded them that only Allah controls provision."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Al-Ghazali",
                    insight: "Al-Qabid withholds in wisdom, not in stinginess. When He withholds provision or ease from a servant, it is either a test, a purification, or a protection from what would harm them.",
                    source: "Al-Maqsad al-Asna fi Sharh Asma Allah al-Husna",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "When provision feels restricted, trust that Al-Qabid withholds only with wisdom and purpose.",
                "Practice contentment during times of scarcity, knowing it may be a test or a protection.",
                "Avoid panic when worldly means tighten—turn to Allah rather than unlawful means.",
                "Understand that constriction often precedes expansion, just as difficulty precedes ease."
            ],
            duas: [
                DuaReference(
                    arabicText: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
                    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wa a'udhu bika minal-'ajzi wal-kasal, wa a'udhu bika minal-jubni wal-bukhl, wa a'udhu bika min ghalabatid-dayni wa qahrir-rijal",
                    translation: "O Allah, I seek refuge in You from worry and grief, from inability and laziness, from cowardice and miserliness, and from being overcome by debt and overpowered by men.",
                    occasion: "When feeling constricted in provision or overwhelmed by difficulty",
                    source: "Sahih al-Bukhari 6369"
                )
            ]
        )

        // AL-QADEER - The All-Powerful
        learningContent["al-qadeer"] = ExtendedLearning(
            nameId: "al-qadeer",
            hadiths: [
                HadithReference(
                    arabicText: "مَنْ قَالَ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ عَشْرَ مَرَّاتٍ كَانَ كَمَنْ أَعْتَقَ أَرْبَعَةَ أَنْفُسٍ مِنْ وَلَدِ إِسْمَاعِيلَ",
                    transliteration: "Man qala la ilaha illa Allahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadeer, 'ashra marratin...",
                    translation: "Whoever says 'There is no god but Allah alone with no partner, His is the dominion and His is the praise, and He is capable of all things' ten times, it will be as if he freed four slaves from the descendants of Isma'il.",
                    reference: "Sahih al-Bukhari 6404",
                    narrator: "Abu Ayyub al-Ansari رضي الله عنه",
                    source: "sunnah.com/bukhari:6404",
                    grading: "Sahih",
                    context: "This dhikr affirms Allah's complete power over all things and carries immense reward."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn Taymiyyah",
                    insight: "Al-Qadeer possesses complete and perfect power. His power is never diminished by what He creates, nor is He ever incapable of anything He wills. His power is inseparable from His wisdom.",
                    source: "Majmu' al-Fatawa",
                    arabicQuote: nil
                ),
                ScholarlyInsight(
                    scholar: "Shaykh as-Sa'di",
                    insight: "The name Al-Qadeer implies that Allah's power encompasses all things—bringing into existence, causing death, resurrection, reward and punishment. Nothing is beyond His capability.",
                    source: "Taysir al-Karim ar-Rahman",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "When a situation seems impossible, remember that Al-Qadeer's power has no limits.",
                "Recite 'wa huwa 'ala kulli shay'in qadeer' regularly to internalize trust in Allah's power.",
                "Never doubt that Allah can change your circumstances instantly—He is Al-Qadeer.",
                "Draw strength from this name when making dua for things that seem unattainable."
            ],
            duas: [
                DuaReference(
                    arabicText: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                    transliteration: "La ilaha illa Allahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadeer",
                    translation: "There is no god but Allah alone with no partner, His is the dominion and His is the praise, and He is capable of all things.",
                    occasion: "Morning and evening adhkar, and after prayers",
                    source: "Sahih al-Bukhari 6404"
                )
            ]
        )

        // AL-QADIR - The Capable
        learningContent["al-qadir"] = ExtendedLearning(
            nameId: "al-qadir",
            hadiths: [
                HadithReference(
                    arabicText: "مَا مِنْ مُسْلِمٍ يَدْعُو بِدَعْوَةٍ لَيْسَ فِيهَا إِثْمٌ وَلَا قَطِيعَةُ رَحِمٍ إِلَّا أَعْطَاهُ اللَّهُ بِهَا إِحْدَى ثَلَاثٍ إِمَّا أَنْ تُعَجَّلَ لَهُ دَعْوَتُهُ وَإِمَّا أَنْ يَدَّخِرَهَا لَهُ فِي الْآخِرَةِ وَإِمَّا أَنْ يَصْرِفَ عَنْهُ مِنَ السُّوءِ مِثْلَهَا",
                    transliteration: "Ma min muslimin yad'u bi-da'watin laysa fiha ithmun wa la qati'atu rahimin illa a'tahu Allahu biha ihda thalath...",
                    translation: "No Muslim makes a supplication containing nothing sinful or involving breaking ties of kinship without Allah giving him one of three things: either his supplication is answered quickly, or it is stored for him in the Hereafter, or an equivalent evil is averted from him.",
                    reference: "Musnad Ahmad 10749",
                    narrator: "Abu Sa'id al-Khudri رضي الله عنه",
                    source: "sunnah.com/ahmad:10749",
                    grading: "Sahih (Al-Albani)",
                    context: "This hadith shows that Al-Qadir always responds to sincere supplication, demonstrating His capability to grant in ways we may not expect."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn al-Qayyim",
                    insight: "Al-Qadir determines all things with precise measure. His capability is not mere raw power, but power accompanied by perfect knowledge and wisdom in decreeing all matters.",
                    source: "Shifa' al-'Alil",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Trust that Allah is capable of answering your dua, even when all worldly means seem exhausted.",
                "Accept divine decree knowing that Al-Qadir measured it with perfect wisdom.",
                "When planning your affairs, do your best but rely on Al-Qadir for the outcome.",
                "Reflect on how Allah's capability is evident in every detail of creation."
            ],
            duas: [
                DuaReference(
                    arabicText: "سُبْحَانَ الَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا مِمَّا تُنبِتُ الْأَرْضُ وَمِنْ أَنفُسِهِمْ وَمِمَّا لَا يَعْلَمُونَ",
                    transliteration: "Subhana alladhi khalaqa al-azwaja kullaha mimma tunbitul-ardu wa min anfusihim wa mimma la ya'lamoon",
                    translation: "Glory be to Him who created all pairs, from what the earth grows, and from themselves, and from that which they do not know.",
                    occasion: "When reflecting on Allah's creative capability",
                    source: "Qur'an 36:36"
                )
            ]
        )

        // AL-QAHHAR - The Subduer
        learningContent["al-qahhar"] = ExtendedLearning(
            nameId: "al-qahhar",
            hadiths: [
                HadithReference(
                    arabicText: "يَطْوِي اللَّهُ عَزَّ وَجَلَّ السَّمَوَاتِ يَوْمَ الْقِيَامَةِ ثُمَّ يَأْخُذُهُنَّ بِيَدِهِ الْيُمْنَى ثُمَّ يَقُولُ أَنَا الْمَلِكُ أَيْنَ الْجَبَّارُونَ أَيْنَ الْمُتَكَبِّرُونَ",
                    transliteration: "Yatwi Allahu 'azza wa jall as-samawati yawmal-qiyamah thumma ya'khudhuhunna bi yadihil-yumna thumma yaqulu anal-maliku aynal-jabbaruna aynal-mutakabbiroon",
                    translation: "Allah will fold up the heavens on the Day of Resurrection, then He will take them in His Right Hand and say: 'I am the King! Where are the tyrants? Where are the arrogant?'",
                    reference: "Sahih Muslim 2788",
                    narrator: "Abdullah ibn Umar رضي الله عنهما",
                    source: "sunnah.com/muslim:2788",
                    grading: "Sahih",
                    context: "This hadith powerfully illustrates how Al-Qahhar will subdue every tyrant and arrogant soul on the Day of Judgment."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn Kathir",
                    insight: "Al-Qahhar is the One before whom all of creation has submitted, and to whom all faces have humbled themselves, and before whose might and power all things in existence have yielded.",
                    source: "Tafsir Ibn Kathir, Surah Yusuf 12:39",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "When witnessing injustice, remember that Al-Qahhar will subdue every oppressor.",
                "Never be arrogant, for Al-Qahhar humbles those who elevate themselves above others.",
                "Find peace knowing that no enemy or difficulty is beyond Al-Qahhar's subjugation.",
                "Submit your ego and desires to Al-Qahhar before He subdues them for you."
            ],
            duas: [
                DuaReference(
                    arabicText: "اللَّهُمَّ إِنِّي أَعُوذُ بِعِزَّتِكَ لَا إِلَهَ إِلَّا أَنْتَ أَنْ تُضِلَّنِي",
                    transliteration: "Allahumma inni a'udhu bi 'izzatika la ilaha illa anta an tudillani",
                    translation: "O Allah, I seek refuge in Your might—there is no god but You—that You would lead me astray.",
                    occasion: "When seeking protection through Allah's might and power",
                    source: "Sahih Muslim 2717"
                )
            ]
        )

        // AL-QAWIYY - The Strong
        learningContent["al-qawiyy"] = ExtendedLearning(
            nameId: "al-qawiyy",
            hadiths: [
                HadithReference(
                    arabicText: "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ وَفِي كُلٍّ خَيْرٌ",
                    transliteration: "Al-mu'minu al-qawiyyu khayrun wa ahabbu ila Allahi minal-mu'minid-da'eef, wa fi kullin khayr",
                    translation: "The strong believer is better and more beloved to Allah than the weak believer, and in each there is good.",
                    reference: "Sahih Muslim 2664",
                    narrator: "Abu Hurairah رضي الله عنه",
                    source: "sunnah.com/muslim:2664",
                    grading: "Sahih",
                    context: "The Prophet ﷺ encouraged believers to be strong in faith and action, reflecting the attribute of Al-Qawiyy."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn Taymiyyah",
                    insight: "Allah's strength is absolute and unlike created strength. His strength never diminishes, never tires, and is never overcome. He combines perfect strength with perfect wisdom, so His strength is never misused.",
                    source: "Majmu' al-Fatawa",
                    arabicQuote: nil
                ),
                ScholarlyInsight(
                    scholar: "Shaykh as-Sa'di",
                    insight: "Al-Qawiyy is the One whose strength is complete and perfect, who empowers His believing servants and supports them against their enemies, despite the believers being fewer in number.",
                    source: "Taysir al-Karim ar-Rahman",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Seek strength from Al-Qawiyy in moments of physical, emotional, or spiritual weakness.",
                "Strive to be a strong believer in faith, character, and beneficial action.",
                "Trust that Al-Qawiyy supports His servants even when they face overwhelming odds.",
                "Never rely solely on your own strength; true strength comes from Al-Qawiyy."
            ],
            duas: [
                DuaReference(
                    arabicText: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
                    transliteration: "La hawla wa la quwwata illa billah",
                    translation: "There is no power and no strength except with Allah.",
                    occasion: "When facing any challenge or difficulty requiring strength",
                    source: "Sahih al-Bukhari 4205"
                )
            ]
        )

        // AL-QAYYUM - The Sustainer
        learningContent["al-qayyum"] = ExtendedLearning(
            nameId: "al-qayyum",
            hadiths: [
                HadithReference(
                    arabicText: "اسْمُ اللَّهِ الأَعْظَمُ فِي هَاتَيْنِ الآيَتَيْنِ: وَإِلَهُكُمْ إِلَهٌ وَاحِدٌ لَا إِلَهَ إِلَّا هُوَ الرَّحْمَنُ الرَّحِيمُ وَفَاتِحَةِ سُورَةِ آلِ عِمْرَانَ: الم اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
                    transliteration: "Ism Allahi al-a'tham fi hatayni al-ayatayn...",
                    translation: "The greatest name of Allah is in these two verses: 'Your God is One God, there is no god except He, the Most Merciful' and the opening of Al Imran: 'Alif Lam Meem, Allah, there is no god except He, the Ever-Living, the Sustainer.'",
                    reference: "Sunan Abu Dawud 1496",
                    narrator: "Asma bint Yazid رضي الله عنها",
                    source: "sunnah.com/abudawud:1496",
                    grading: "Hasan (Al-Albani)",
                    context: "This hadith indicates that Al-Hayy Al-Qayyum may be part of Allah's greatest name, showing the supreme importance of this attribute."
                ),
                HadithReference(
                    arabicText: "كَانَ النَّبِيُّ ﷺ إِذَا حَزَبَهُ أَمْرٌ قَالَ يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
                    transliteration: "Kana an-Nabiyyu ﷺ idha hazabahu amrun qala: Ya Hayyu Ya Qayyumu bi rahmatika astaghith",
                    translation: "When a matter would distress the Prophet ﷺ, he would say: 'O Ever-Living, O Sustainer, by Your mercy I seek help.'",
                    reference: "Jami' at-Tirmidhi 3524",
                    narrator: "Anas ibn Malik رضي الله عنه",
                    source: "sunnah.com/tirmidhi:3524",
                    grading: "Hasan (Al-Albani)",
                    context: "The Prophet ﷺ turned to Al-Qayyum specifically during distressing moments, showing this name's power in times of need."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn al-Qayyim",
                    insight: "Al-Qayyum means the One who sustains Himself and sustains all of creation. All things depend on Him for their existence, sustenance, and preservation, while He depends on none.",
                    source: "Madarij as-Salikin",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Call upon Al-Qayyum during moments of distress, as the Prophet ﷺ did.",
                "Recognize your complete dependence on Al-Qayyum for every breath and heartbeat.",
                "When feeling overwhelmed by responsibilities, remember that Al-Qayyum sustains all things effortlessly.",
                "Recite Ayat al-Kursi regularly, which contains Al-Hayy Al-Qayyum."
            ],
            duas: [
                DuaReference(
                    arabicText: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
                    transliteration: "Ya Hayyu Ya Qayyumu bi rahmatika astaghithu, aslih li sha'ni kullahu wa la takilni ila nafsi tarfata 'ayn",
                    translation: "O Ever-Living, O Sustainer, by Your mercy I seek help. Rectify all my affairs and do not leave me to myself even for the blink of an eye.",
                    occasion: "When distressed or overwhelmed",
                    source: "Mustadrak al-Hakim 2000 (Sahih)"
                )
            ]
        )

        // AL-WAHHAB - The Bestower
        learningContent["al-wahhab"] = ExtendedLearning(
            nameId: "al-wahhab",
            hadiths: [
                HadithReference(
                    arabicText: "يَدُ اللَّهِ مَلْأَى لَا يَغِيضُهَا نَفَقَةٌ سَحَّاءُ اللَّيْلَ وَالنَّهَارَ أَرَأَيْتُمْ مَا أَنْفَقَ مُنْذُ خَلَقَ السَّمَوَاتِ وَالْأَرْضَ فَإِنَّهُ لَمْ يَغِضْ مَا فِي يَدِهِ",
                    transliteration: "Yad Allahi mal'a la yaghiduha nafaqatun sahha'u al-layla wan-nahar, ara'aytum ma anfaqa mundhu khalaqa as-samawati wal-ard...",
                    translation: "The Hand of Allah is full, spending does not diminish it. He gives generously day and night. Do you see what He has spent since He created the heavens and the earth? Yet it has not decreased what is in His Hand.",
                    reference: "Sahih al-Bukhari 4684",
                    narrator: "Abu Hurairah رضي الله عنه",
                    source: "sunnah.com/bukhari:4684",
                    grading: "Sahih",
                    context: "This hadith highlights the infinite generosity of Al-Wahhab—His giving never diminishes His treasures."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Al-Ghazali",
                    insight: "Al-Wahhab is the One who gives freely without being asked, without expecting compensation, and without any reason other than His generosity. A true gift has no motive other than the benefit of the recipient.",
                    source: "Al-Maqsad al-Asna fi Sharh Asma Allah al-Husna",
                    arabicQuote: nil
                ),
                ScholarlyInsight(
                    scholar: "Shaykh as-Sa'di",
                    insight: "Al-Wahhab bestows His favors upon His creation abundantly—blessings of religion and worldly life, apparent and hidden. He gives to the one who asks and the one who does not ask.",
                    source: "Taysir al-Karim ar-Rahman",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Ask Al-Wahhab for what you need without hesitation—His treasures are limitless.",
                "Be generous with others, emulating the quality of giving without expecting return.",
                "Recognize every blessing as a gift from Al-Wahhab, not something you earned or deserve.",
                "When given blessings, express gratitude rather than attributing them to your own effort."
            ],
            duas: [
                DuaReference(
                    arabicText: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
                    transliteration: "Rabbana la tuzigh quloobana ba'da idh hadaytana wa hab lana min ladunka rahmatan innaka antal-Wahhab",
                    translation: "Our Lord, do not let our hearts deviate after You have guided us, and grant us mercy from Yourself. Indeed, You are the Bestower.",
                    occasion: "When seeking steadfastness in faith and mercy from Allah",
                    source: "Qur'an 3:8"
                )
            ]
        )

        // AL-WAHID - The One
        learningContent["al-wahid"] = ExtendedLearning(
            nameId: "al-wahid",
            hadiths: [
                HadithReference(
                    arabicText: "مَنْ شَهِدَ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ وَأَنَّ عِيسَى عَبْدُ اللَّهِ وَرَسُولُهُ... أَدْخَلَهُ اللَّهُ الْجَنَّةَ",
                    transliteration: "Man shahida an la ilaha illa Allahu wahdahu la sharika lahu wa anna Muhammadan 'abduhu wa rasuluh...",
                    translation: "Whoever testifies that there is no god but Allah alone with no partner, and that Muhammad is His servant and messenger, and that Isa is the servant of Allah... Allah will admit him to Paradise.",
                    reference: "Sahih al-Bukhari 3435",
                    narrator: "Ubadah ibn as-Samit رضي الله عنه",
                    source: "sunnah.com/bukhari:3435",
                    grading: "Sahih",
                    context: "The testimony of Allah's oneness (Tawhid) is the key to Paradise, affirming Al-Wahid's uniqueness."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn Taymiyyah",
                    insight: "Al-Wahid negates any plurality in Allah's essence, attributes, or actions. He is One in His lordship, One in His right to be worshipped, and One in His names and attributes—none shares in any of these.",
                    source: "Majmu' al-Fatawa",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Purify your worship by directing every act of devotion solely to Al-Wahid.",
                "Eliminate hidden forms of shirk such as seeking the approval of people over Allah.",
                "When facing multiple pressures, simplify your focus by seeking only the pleasure of Al-Wahid.",
                "Reflect on Surah al-Ikhlas daily to strengthen your understanding of Allah's oneness."
            ],
            duas: [
                DuaReference(
                    arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
                    transliteration: "Qul Huwa Allahu Ahad, Allahus-Samad, lam yalid wa lam yulad, wa lam yakun lahu kufuwan ahad",
                    translation: "Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. Nor is there to Him any equivalent.",
                    occasion: "Morning and evening adhkar, and before sleep",
                    source: "Qur'an 112:1-4"
                )
            ]
        )

        // AL-WAJID - The Finder
        learningContent["al-wajid"] = ExtendedLearning(
            nameId: "al-wajid",
            hadiths: [
                HadithReference(
                    arabicText: "إِنَّ اللَّهَ لَا يَظْلِمُ مُؤْمِنًا حَسَنَةً يُعْطَى بِهَا فِي الدُّنْيَا وَيُجْزَى بِهَا فِي الْآخِرَةِ",
                    transliteration: "Inna Allaha la yadhlimu mu'minan hasanatan yu'ta biha fid-dunya wa yujza biha fil-akhirah",
                    translation: "Indeed, Allah does not wrong a believer regarding a good deed—he is given for it in this world and rewarded for it in the Hereafter.",
                    reference: "Sahih Muslim 2808",
                    narrator: "Anas ibn Malik رضي الله عنه",
                    source: "sunnah.com/muslim:2808",
                    grading: "Sahih",
                    context: "Al-Wajid finds and accounts for every good deed—nothing escapes His knowledge or His reward."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Al-Ghazali",
                    insight: "Al-Wajid is the One who is self-sufficient and lacks nothing. He finds whatever He wills whenever He wills. Nothing He seeks is ever lost to Him, and He possesses everything in absolute richness.",
                    source: "Al-Maqsad al-Asna fi Sharh Asma Allah al-Husna",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Trust that nothing is lost to Allah—every good deed, every tear, every struggle is found by Al-Wajid.",
                "Know that Al-Wajid is self-sufficient and rich beyond measure; turn to Him for your needs.",
                "When you feel your efforts go unnoticed, remember Al-Wajid sees and records everything.",
                "Seek richness of the soul rather than material wealth, following the example of the Prophet ﷺ."
            ],
            duas: [
                DuaReference(
                    arabicText: "اللَّهُمَّ أَغْنِنِي بِالْعِلْمِ وَزَيِّنِّي بِالْحِلْمِ وَأَكْرِمْنِي بِالتَّقْوَى وَجَمِّلْنِي بِالْعَافِيَةِ",
                    transliteration: "Allahumma aghnini bil-'ilm, wa zayyinni bil-hilm, wa akrimni bit-taqwa, wa jammilni bil-'afiyah",
                    translation: "O Allah, enrich me with knowledge, adorn me with forbearance, honor me with piety, and beautify me with wellbeing.",
                    occasion: "When seeking spiritual richness from Allah",
                    source: "Reported in various collections"
                )
            ]
        )

        // AL-WAKEEL - The Trustee
        learningContent["al-wakeel"] = ExtendedLearning(
            nameId: "al-wakeel",
            hadiths: [
                HadithReference(
                    arabicText: "لَوْ أَنَّكُمْ تَوَكَّلْتُمْ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ لَرَزَقَكُمْ كَمَا يَرْزُقُ الطَّيْرَ تَغْدُو خِمَاصًا وَتَرُوحُ بِطَانًا",
                    transliteration: "Law annakum tawakkaltum 'ala Allahi haqqa tawakkulihi la-razaqakum kama yarzuqu at-tayra taghdoo khimasan wa taroohu bitanan",
                    translation: "If you were to rely upon Allah with true reliance, He would provide for you as He provides for the birds—they go out hungry in the morning and return full in the evening.",
                    reference: "Jami' at-Tirmidhi 2344",
                    narrator: "Umar ibn al-Khattab رضي الله عنه",
                    source: "sunnah.com/tirmidhi:2344",
                    grading: "Sahih (Al-Albani)",
                    context: "This hadith teaches that true tawakkul (reliance on Al-Wakeel) brings provision, but it still requires effort—like the birds that go out to seek."
                ),
                HadithReference(
                    arabicText: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ قَالَهَا إِبْرَاهِيمُ عَلَيْهِ السَّلَام حِينَ أُلْقِيَ فِي النَّارِ وَقَالَهَا مُحَمَّدٌ ﷺ حِينَ قَالُوا إِنَّ النَّاسَ قَدْ جَمَعُوا لَكُمْ",
                    transliteration: "Hasbuna Allahu wa ni'mal-Wakeel, qalaha Ibrahimu 'alayhis-salam heena ulqiya fin-nar, wa qalaha Muhammadun ﷺ...",
                    translation: "'Allah is sufficient for us and He is the best Trustee.' Ibrahim عَلَيْهِ ٱلسَّلَامُ said it when he was thrown into the fire, and Muhammad ﷺ said it when told: 'The people have gathered against you.'",
                    reference: "Sahih al-Bukhari 4563",
                    narrator: "Ibn Abbas رضي الله عنهما",
                    source: "sunnah.com/bukhari:4563",
                    grading: "Sahih",
                    context: "The greatest expression of trust in Al-Wakeel, used by prophets in their most critical moments."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn al-Qayyim",
                    insight: "Tawakkul has two essential components: relying on Allah with the heart, and taking the necessary means. Neglecting either is a deficiency. The heart depends on Allah while the limbs work.",
                    source: "Madarij as-Salikin",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Combine trust in Al-Wakeel with taking practical steps—tawakkul is not passivity.",
                "Say 'Hasbunallahu wa ni'mal-Wakeel' when facing fears, threats, or overwhelming situations.",
                "Delegate your worries to Al-Wakeel before sleeping, and wake refreshed.",
                "When making decisions, do your research and istikharah, then trust Al-Wakeel with the outcome."
            ],
            duas: [
                DuaReference(
                    arabicText: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
                    transliteration: "Hasbiyal-lahu la ilaha illa huwa 'alayhi tawakkaltu wa huwa Rabbul-'Arshil-'Adheem",
                    translation: "Allah is sufficient for me. There is no god but Him. Upon Him I rely, and He is the Lord of the Great Throne.",
                    occasion: "Morning and evening, seven times for protection and sufficiency",
                    source: "Qur'an 9:129 / Sunan Abu Dawud 5081"
                )
            ]
        )

        // AL-WALI - The Protecting Friend
        learningContent["al-wali"] = ExtendedLearning(
            nameId: "al-wali",
            hadiths: [
                HadithReference(
                    arabicText: "إِنَّ اللَّهَ قَالَ مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ",
                    transliteration: "Inna Allaha qala man 'ada li waliyyan faqad adhantahu bil-harb",
                    translation: "Allah said: 'Whoever shows hostility to a friend (wali) of Mine, I declare war against him.'",
                    reference: "Sahih al-Bukhari 6502",
                    narrator: "Abu Hurairah رضي الله عنه",
                    source: "sunnah.com/bukhari:6502",
                    grading: "Sahih",
                    context: "This hadith qudsi shows how protective Al-Wali is of those who draw near to Him through devotion—He declares war on their enemies."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn Taymiyyah",
                    insight: "Allah's wilayah (protective friendship) is of two types: general wilayah over all creation through His governance, and specific wilayah for the believers through His guidance, support, and protection.",
                    source: "Al-Furqan bayna Awliya ar-Rahman wa Awliya ash-Shaytan",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Seek Allah's special friendship by performing obligatory acts and drawing closer through voluntary worship.",
                "When you feel alone, remember that Al-Wali is the closest friend who never abandons you.",
                "Treat fellow believers with love and respect, as they are also under the protection of Al-Wali.",
                "Choose righteous companions who help you maintain your connection with Al-Wali."
            ],
            duas: [
                DuaReference(
                    arabicText: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا يُخْرِجُهُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ",
                    transliteration: "Allahu waliyyul-ladhina amanu yukhrijuhum mina adh-dhulumati ilan-nur",
                    translation: "Allah is the Protecting Friend of those who believe. He brings them out of darkness into light.",
                    occasion: "When seeking Allah's guidance and protection from misguidance",
                    source: "Qur'an 2:257"
                )
            ]
        )

        // AL-WALI-ALT - The Governor
        learningContent["al-wali-alt"] = ExtendedLearning(
            nameId: "al-wali-alt",
            hadiths: [
                HadithReference(
                    arabicText: "كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْؤُولٌ عَنْ رَعِيَّتِهِ",
                    transliteration: "Kullukum ra'in wa kullukum mas'ulun 'an ra'iyyatih",
                    translation: "Each of you is a shepherd and each of you is responsible for his flock.",
                    reference: "Sahih al-Bukhari 7138",
                    narrator: "Abdullah ibn Umar رضي الله عنهما",
                    source: "sunnah.com/bukhari:7138",
                    grading: "Sahih",
                    context: "While humans have limited governance, the ultimate Al-Wali (Governor) is Allah who governs all creation with perfect justice and wisdom."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Shaykh as-Sa'di",
                    insight: "Al-Wali as the Governor manages all the affairs of creation, orchestrating the universe with His command. He governs the heavens and the earth and everything within them with perfect order.",
                    source: "Taysir al-Karim ar-Rahman",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Accept Allah's governance over your affairs even when His plan differs from your wishes.",
                "If entrusted with authority over others, govern with justice, knowing Al-Wali watches over you.",
                "Trust in Allah's management of the universe, even when events seem chaotic.",
                "Submit to Allah's rulings in Sharia as expressions of the perfect Governor's wisdom."
            ],
            duas: [
                DuaReference(
                    arabicText: "أَنتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
                    transliteration: "Anta waliyyi fid-dunya wal-akhirah, tawaffani musliman wa alhiqni bis-saliheen",
                    translation: "You are my Protector in this world and the Hereafter. Cause me to die as a Muslim and join me with the righteous.",
                    occasion: "When seeking Allah's governance and protection over your final outcome",
                    source: "Qur'an 12:101 - Dua of Yusuf عَلَيْهِ ٱلسَّلَامُ"
                )
            ]
        )

        // AL-WARITH - The Inheritor
        learningContent["al-warith"] = ExtendedLearning(
            nameId: "al-warith",
            hadiths: [
                HadithReference(
                    arabicText: "إِنَّ الْعُلَمَاءَ وَرَثَةُ الْأَنْبِيَاءِ إِنَّ الْأَنْبِيَاءَ لَمْ يُوَرِّثُوا دِينَارًا وَلَا دِرْهَمًا إِنَّمَا وَرَّثُوا الْعِلْمَ",
                    transliteration: "Innal-'ulama'a warathatu al-anbiya', innal-anbiya'a lam yuwarrithu dinaran wa la dirhaman innama warrathu al-'ilm",
                    translation: "The scholars are the heirs of the Prophets. The Prophets did not leave behind dinars or dirhams; rather they left behind knowledge.",
                    reference: "Sunan Abu Dawud 3641",
                    narrator: "Abu ad-Darda' رضي الله عنه",
                    source: "sunnah.com/abudawud:3641",
                    grading: "Sahih (Al-Albani)",
                    context: "While creation inherits knowledge, Al-Warith is the One who inherits all things when all else perishes."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn Kathir",
                    insight: "Al-Warith is the One who remains after all creation perishes. He inherits the earth and all who are upon it, and to Him all matters return. Everything belongs to Him originally and ultimately.",
                    source: "Tafsir Ibn Kathir, Surah Maryam 19:40",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Detach from material possessions, knowing that Al-Warith will inherit everything you leave behind.",
                "Invest in deeds that outlast you—charity, knowledge, and righteous children.",
                "Do not grieve excessively over lost possessions; they always belonged to Al-Warith.",
                "Live with the awareness that this world is temporary and only Al-Warith is eternal."
            ],
            duas: [
                DuaReference(
                    arabicText: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ",
                    transliteration: "Rabbi la tadharni fardan wa anta khayrul-waritheen",
                    translation: "My Lord, do not leave me alone, and You are the best of inheritors.",
                    occasion: "When seeking righteous offspring or relief from loneliness",
                    source: "Qur'an 21:89 - Dua of Zakariyya عَلَيْهِ ٱلسَّلَامُ"
                )
            ]
        )

        // AL-WASI - The All-Encompassing
        learningContent["al-wasi"] = ExtendedLearning(
            nameId: "al-wasi",
            hadiths: [
                HadithReference(
                    arabicText: "إِنَّ اللَّهَ تَعَالَى طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا وَإِنَّ اللَّهَ أَمَرَ الْمُؤْمِنِينَ بِمَا أَمَرَ بِهِ الْمُرْسَلِينَ",
                    transliteration: "Inna Allaha ta'ala tayyibun la yaqbalu illa tayyiban wa inna Allaha amara al-mu'minina bima amara bihil-mursaleen",
                    translation: "Indeed Allah is Pure and does not accept except what is pure. And indeed Allah has commanded the believers with what He commanded the messengers.",
                    reference: "Sahih Muslim 1015",
                    narrator: "Abu Hurairah رضي الله عنه",
                    source: "sunnah.com/muslim:1015",
                    grading: "Sahih",
                    context: "Al-Wasi's encompassing nature means He provides pure sustenance and accepts only pure deeds, showing the vastness of His standards and provisions."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn al-Qayyim",
                    insight: "Al-Wasi encompasses all things in His knowledge, mercy, and provision. His mercy is vast enough for all creation, His knowledge encompasses everything, and His provision reaches every living being.",
                    source: "Badaai' al-Fawaid",
                    arabicQuote: nil
                ),
                ScholarlyInsight(
                    scholar: "An-Nawawi",
                    insight: "Al-Wasi is the One whose richness, power, and mercy are vast and encompassing. He extends His bounty to all His creatures and no request diminishes what He possesses.",
                    source: "Sharh Sahih Muslim",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Never limit your dua, for Al-Wasi's treasures are vast beyond imagination.",
                "Be generous to others, knowing that Al-Wasi will replenish what you give.",
                "When the world feels narrow, remember Al-Wasi's mercy and provision are all-encompassing.",
                "Seek knowledge broadly, for the knowledge of Al-Wasi encompasses all things."
            ],
            duas: [
                DuaReference(
                    arabicText: "رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَّحْمَةً وَعِلْمًا فَاغْفِرْ لِلَّذِينَ تَابُوا وَاتَّبَعُوا سَبِيلَكَ وَقِهِمْ عَذَابَ الْجَحِيمِ",
                    transliteration: "Rabbana wasi'ta kulla shay'in rahmatan wa 'ilman faghfir lilladhina tabu wattaba'u sabilaka wa qihim 'adhab al-jaheem",
                    translation: "Our Lord, You have encompassed all things in mercy and knowledge, so forgive those who have repented and followed Your path, and protect them from the punishment of Hellfire.",
                    occasion: "When seeking comprehensive forgiveness and protection",
                    source: "Qur'an 40:7"
                )
            ]
        )

        // AN-NAFI - The Benefactor
        learningContent["an-nafi"] = ExtendedLearning(
            nameId: "an-nafi",
            hadiths: [
                HadithReference(
                    arabicText: "وَاعْلَمْ أَنَّ الْأُمَّةَ لَوِ اجْتَمَعَتْ عَلَى أَنْ يَنْفَعُوكَ بِشَيْءٍ لَمْ يَنْفَعُوكَ إِلَّا بِشَيْءٍ قَدْ كَتَبَهُ اللَّهُ لَكَ",
                    transliteration: "Wa'lam annal-ummata law ijtama'at 'ala an yanfa'uka bi shay'in lam yanfa'uka illa bi shay'in qad katabahu Allahu lak",
                    translation: "Know that if the entire nation were to gather together to benefit you with something, they would not benefit you except with what Allah has already written for you.",
                    reference: "Jami' at-Tirmidhi 2516",
                    narrator: "Abdullah ibn Abbas رضي الله عنهما",
                    source: "sunnah.com/tirmidhi:2516",
                    grading: "Sahih (Al-Albani)",
                    context: "This profound hadith establishes that all benefit ultimately comes from An-Nafi alone—no creation can bring benefit except by His decree."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Al-Ghazali",
                    insight: "An-Nafi is the One from whom every benefit in existence originates. There is no benefit in the seen or unseen world except that He created it, ordained it, and caused it to reach His servants.",
                    source: "Al-Maqsad al-Asna fi Sharh Asma Allah al-Husna",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Seek benefit from Allah before seeking it from people, for He is the source of all good.",
                "When benefiting others, recognize yourself as a means, not the source—An-Nafi is the true Benefactor.",
                "Ask Allah to make you a source of benefit to others, following the Prophet's example.",
                "Do not fear that people can withhold benefit from you—only An-Nafi controls what reaches you."
            ],
            duas: [
                DuaReference(
                    arabicText: "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا",
                    transliteration: "Allahumma-nfa'ni bima 'allamtani wa 'allimni ma yanfa'uni wa zidni 'ilma",
                    translation: "O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge.",
                    occasion: "After completing study or seeking beneficial knowledge",
                    source: "Jami' at-Tirmidhi 3599"
                )
            ]
        )

        // AN-NUR - The Light
        learningContent["an-nur"] = ExtendedLearning(
            nameId: "an-nur",
            hadiths: [
                HadithReference(
                    arabicText: "حِجَابُهُ النُّورُ لَوْ كَشَفَهُ لَأَحْرَقَتْ سُبُحَاتُ وَجْهِهِ مَا انْتَهَى إِلَيْهِ بَصَرُهُ مِنْ خَلْقِهِ",
                    transliteration: "Hijabuhu an-nuru law kashafahu la-ahraqat subuhaatu wajhihi ma intaha ilayhi basaruhu min khalqih",
                    translation: "His veil is Light. If He were to remove it, the glory of His Face would burn everything of His creation as far as His sight reaches.",
                    reference: "Sahih Muslim 179",
                    narrator: "Abu Musa al-Ash'ari رضي الله عنه",
                    source: "sunnah.com/muslim:179",
                    grading: "Sahih",
                    context: "This hadith illustrates the magnificence of An-Nur—His light is so intense that His creation could not bear to behold Him."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn al-Qayyim",
                    insight: "An-Nur illuminates the heavens and the earth with His light. He illuminates the hearts of the believers with faith and knowledge, and He illuminates their faces on the Day of Judgment. All light in existence is from His light.",
                    source: "Ijtima' al-Juyush al-Islamiyyah",
                    arabicQuote: nil
                ),
                ScholarlyInsight(
                    scholar: "Ibn Kathir",
                    insight: "The light mentioned in Ayat an-Nur (24:35) refers to Allah being the guide of the heavens and the earth. He guides the inhabitants of the heavens and earth through His light of revelation and natural disposition.",
                    source: "Tafsir Ibn Kathir, Surah an-Nur 24:35",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Seek the light of guidance from An-Nur through sincere study of the Quran and Sunnah.",
                "When feeling spiritually dark, ask An-Nur to illuminate your heart with faith.",
                "Be a source of light to others by sharing beneficial knowledge and good character.",
                "Reflect on the Verse of Light (Ayat an-Nur, 24:35) to deepen your understanding."
            ],
            duas: [
                DuaReference(
                    arabicText: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا وَعَنْ يَمِينِي نُورًا وَعَنْ يَسَارِي نُورًا",
                    transliteration: "Allahummaj'al fi qalbi nuran, wa fi basari nuran, wa fi sam'i nuran, wa 'an yamini nuran, wa 'an yasari nuran",
                    translation: "O Allah, place light in my heart, light in my sight, light in my hearing, light on my right, and light on my left.",
                    occasion: "When going to the mosque for prayer, and when seeking guidance",
                    source: "Sahih al-Bukhari 6316"
                )
            ]
        )

        // AR-RAFI - The Exalter
        learningContent["ar-rafi"] = ExtendedLearning(
            nameId: "ar-rafi",
            hadiths: [
                HadithReference(
                    arabicText: "إِنَّ اللَّهَ يَرْفَعُ بِهَذَا الْكِتَابِ أَقْوَامًا وَيَضَعُ بِهِ آخَرِينَ",
                    transliteration: "Inna Allaha yarfa'u bi hadhal-kitabi aqwaman wa yada'u bihi akhareen",
                    translation: "Indeed, Allah raises some people by this Book (the Quran) and lowers others by it.",
                    reference: "Sahih Muslim 817",
                    narrator: "Umar ibn al-Khattab رضي الله عنه",
                    source: "sunnah.com/muslim:817",
                    grading: "Sahih",
                    context: "Ar-Rafi raises those who adhere to the Quran and lowers those who abandon it—status with Allah is based on devotion, not lineage."
                ),
                HadithReference(
                    arabicText: "مَنْ تَوَاضَعَ لِلَّهِ رَفَعَهُ اللَّهُ",
                    transliteration: "Man tawada'a lillahi rafa'ahu Allah",
                    translation: "Whoever humbles himself for the sake of Allah, Allah will raise him.",
                    reference: "Sahih Muslim 2588",
                    narrator: "Abu Hurairah رضي الله عنه",
                    source: "sunnah.com/muslim:2588",
                    grading: "Sahih",
                    context: "The path to being raised by Ar-Rafi is through humility—those who humble themselves before Allah are elevated."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "An-Nawawi",
                    insight: "Ar-Rafi raises whom He wills with His obedience and lowers whom He wills with His disobedience. He raises the believers with happiness and the scholars with knowledge, and He raises the righteous with nearness to Him.",
                    source: "Al-Adhkar",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Seek elevation through humility—Ar-Rafi raises those who humble themselves before Him.",
                "Pursue knowledge of the Quran, as it is a means by which Ar-Rafi elevates people.",
                "Do not seek status through arrogance or self-promotion; true honor comes from Ar-Rafi alone.",
                "When you see others elevated, do not envy—ask Ar-Rafi to grant you from His favor."
            ],
            duas: [
                DuaReference(
                    arabicText: "رَبِّ زِدْنِي عِلْمًا",
                    transliteration: "Rabbi zidni 'ilma",
                    translation: "My Lord, increase me in knowledge.",
                    occasion: "When seeking elevation through knowledge and understanding",
                    source: "Qur'an 20:114"
                )
            ]
        )

        // AR-RAQEEB - The Watchful
        learningContent["ar-raqeeb"] = ExtendedLearning(
            nameId: "ar-raqeeb",
            hadiths: [
                HadithReference(
                    arabicText: "الإِحْسَانُ أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ",
                    transliteration: "Al-ihsanu an ta'buda Allaha ka'annaka tarahu fa in lam takun tarahu fa innahu yarak",
                    translation: "Ihsan (excellence) is to worship Allah as if you see Him, and if you do not see Him, then indeed He sees you.",
                    reference: "Sahih al-Bukhari 50",
                    narrator: "Abu Hurairah رضي الله عنه",
                    source: "sunnah.com/bukhari:50",
                    grading: "Sahih",
                    context: "The famous Hadith of Jibreel defines ihsan—the awareness that Ar-Raqeeb is always watching is the foundation of spiritual excellence."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn al-Qayyim",
                    insight: "Muraqabah (watchfulness of Allah) is the fruit of knowing that Allah sees you, hears you, and knows your innermost thoughts. It is the station that produces ihsan in worship and sincerity in all deeds.",
                    source: "Madarij as-Salikin",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Practice muraqabah—be conscious that Ar-Raqeeb watches your every action, word, and thought.",
                "Let awareness of Ar-Raqeeb prevent you from sins committed in private.",
                "Improve the quality of your worship by remembering that Ar-Raqeeb observes your sincerity.",
                "Be honest in all dealings, knowing that Ar-Raqeeb is the perfect Witness to every transaction."
            ],
            duas: [
                DuaReference(
                    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَشْيَتَكَ فِي الْغَيْبِ وَالشَّهَادَةِ",
                    transliteration: "Allahumma inni as'aluka khashyataka fil-ghaybi wash-shahadah",
                    translation: "O Allah, I ask You for fear of You in private and in public.",
                    occasion: "When seeking consciousness of Allah's watchfulness",
                    source: "Sunan an-Nasa'i 1305"
                )
            ]
        )

        // AR-RASHEED - The Guide to the Right Path
        learningContent["ar-rasheed"] = ExtendedLearning(
            nameId: "ar-rasheed",
            hadiths: [
                HadithReference(
                    arabicText: "عَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الْخُلَفَاءِ الرَّاشِدِينَ الْمَهْدِيِّينَ عَضُّوا عَلَيْهَا بِالنَّوَاجِذِ",
                    transliteration: "Alaykum bi sunnati wa sunnatil-khulafa ar-rashideen al-mahdiyyeen, 'uddu 'alayha bin-nawajidh",
                    translation: "Hold firmly to my Sunnah and the way of the rightly-guided caliphs. Bite onto it with your molars.",
                    reference: "Sunan Abu Dawud 4607",
                    narrator: "Al-Irbad ibn Sariyah رضي الله عنه",
                    source: "sunnah.com/abudawud:4607",
                    grading: "Sahih (Al-Albani)",
                    context: "The rightly-guided caliphs received their guidance from Ar-Rasheed, the ultimate source of right guidance."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Al-Ghazali",
                    insight: "Ar-Rasheed is the One who guides all creation to what benefits them and directs all affairs toward their proper conclusions. His guidance is perfect—He leads to the right path through both gentle and firm means.",
                    source: "Al-Maqsad al-Asna fi Sharh Asma Allah al-Husna",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Seek guidance from Ar-Rasheed before making important decisions through istikharah.",
                "Follow the Sunnah as the practical expression of Ar-Rasheed's guidance.",
                "When confused between options, ask Ar-Rasheed to show you the right path.",
                "Trust that what Ar-Rasheed decrees for you is the wisest course, even if you cannot see it."
            ],
            duas: [
                DuaReference(
                    arabicText: "اللَّهُمَّ أَلْهِمْنِي رُشْدِي وَأَعِذْنِي مِنْ شَرِّ نَفْسِي",
                    transliteration: "Allahumma alhimni rushdi wa a'idhni min sharri nafsi",
                    translation: "O Allah, inspire me with right guidance and protect me from the evil of my own self.",
                    occasion: "When seeking divine guidance in daily affairs",
                    source: "Jami' at-Tirmidhi 3483"
                )
            ]
        )

        // AR-RAUF - The Most Kind
        learningContent["ar-rauf"] = ExtendedLearning(
            nameId: "ar-rauf",
            hadiths: [
                HadithReference(
                    arabicText: "لَا يَرْحَمُ اللَّهُ مَنْ لَا يَرْحَمُ النَّاسَ",
                    transliteration: "La yarham Allahu man la yarhamun-nas",
                    translation: "Allah will not show mercy to those who do not show mercy to people.",
                    reference: "Sahih al-Bukhari 7376",
                    narrator: "Jarir ibn Abdullah رضي الله عنه",
                    source: "sunnah.com/bukhari:7376",
                    grading: "Sahih",
                    context: "Ar-Rauf's kindness is a model for believers—those who show kindness and mercy to others receive His kindness in return."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn Kathir",
                    insight: "Ar-Ra'uf is the One whose kindness is gentle and subtle. While Ar-Rahman indicates vast mercy, Ar-Ra'uf implies a tenderness and compassion that prevents hardship from reaching His servants when possible.",
                    source: "Tafsir Ibn Kathir, Surah al-Baqarah 2:207",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Show gentle kindness to those around you, especially those who are vulnerable.",
                "When correcting others, use kindness rather than harshness, following Ar-Rauf's example in the Quran.",
                "Appreciate Allah's kindness in the ease He places within religious obligations.",
                "Be kind to yourself in your spiritual journey—Ar-Rauf does not burden you beyond your capacity."
            ],
            duas: [
                DuaReference(
                    arabicText: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا",
                    transliteration: "Rabbana la tu'akhidhna in nasina aw akhta'na, Rabbana wa la tahmil 'alayna isran kama hamaltahu 'alal-ladhina min qablina",
                    translation: "Our Lord, do not take us to account if we forget or make mistakes. Our Lord, do not place on us a burden like that which You placed on those before us.",
                    occasion: "When seeking Allah's gentle treatment and kindness",
                    source: "Qur'an 2:286"
                )
            ]
        )

        // AS-SABUR - The Patient
        learningContent["as-sabur"] = ExtendedLearning(
            nameId: "as-sabur",
            hadiths: [
                HadithReference(
                    arabicText: "مَا أَحَدٌ أَصْبَرُ عَلَى أَذًى سَمِعَهُ مِنَ اللَّهِ يَدَّعُونَ لَهُ الْوَلَدَ ثُمَّ يُعَافِيهِمْ وَيَرْزُقُهُمْ",
                    transliteration: "Ma ahadun asbaru 'ala adhan sami'ahu min Allah, yadda'una lahul-walada thumma yu'afihim wa yarzuquhum",
                    translation: "No one is more patient with offensive words that he hears than Allah. They attribute a son to Him, yet He still gives them health and provision.",
                    reference: "Sahih al-Bukhari 7378",
                    narrator: "Abu Musa al-Ash'ari رضي الله عنه",
                    source: "sunnah.com/bukhari:7378",
                    grading: "Sahih",
                    context: "This hadith reveals Allah's extraordinary patience—despite people's blasphemy, He continues to provide for them."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Al-Ghazali",
                    insight: "As-Sabur is the One who does not hasten punishment for the disobedient. His patience is not due to inability but due to His wisdom. He gives respite so that people may repent and return to Him.",
                    source: "Al-Maqsad al-Asna fi Sharh Asma Allah al-Husna",
                    arabicQuote: nil
                ),
                ScholarlyInsight(
                    scholar: "Shaykh as-Sa'di",
                    insight: "As-Sabur gives respite to sinners and does not rush their punishment, despite His perfect power to do so. This is from His wisdom, mercy, and forbearance, giving His servants time to repent.",
                    source: "Taysir al-Karim ar-Rahman",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Cultivate patience in your life, knowing that As-Sabur loves those who are patient.",
                "When others wrong you, remember how As-Sabur is patient with those who wrong Him far more gravely.",
                "Do not rush to anger or revenge—give people time to correct themselves, as As-Sabur does.",
                "View trials as opportunities to develop the quality of patience that Allah loves."
            ],
            duas: [
                DuaReference(
                    arabicText: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
                    transliteration: "Rabbana afrigh 'alayna sabran wa thabbit aqdamana wansurna 'alal-qawmil-kafireen",
                    translation: "Our Lord, pour upon us patience, make our feet firm, and grant us victory over the disbelieving people.",
                    occasion: "When facing trials and needing patience and steadfastness",
                    source: "Qur'an 2:250"
                )
            ]
        )

        // AS-SAMAD - The Eternal Refuge
        learningContent["as-samad"] = ExtendedLearning(
            nameId: "as-samad",
            hadiths: [
                HadithReference(
                    arabicText: "قَالَ اللَّهُ تَعَالَى كَذَّبَنِي ابْنُ آدَمَ وَلَمْ يَكُنْ لَهُ ذَلِكَ وَشَتَمَنِي وَلَمْ يَكُنْ لَهُ ذَلِكَ فَأَمَّا تَكْذِيبُهُ إِيَّايَ فَقَوْلُهُ لَنْ يُعِيدَنِي كَمَا بَدَأَنِي",
                    transliteration: "Qala Allahu ta'ala kadhdhabani ibnu Adama wa lam yakun lahu dhalik wa shatamani wa lam yakun lahu dhalik...",
                    translation: "Allah said: 'The son of Adam denied Me and he had no right to do so, and he insulted Me and he had no right to do so. As for his denial—it is his saying: He will not recreate me as He created me. As for his insult—it is his saying: Allah has taken a son.' And He is As-Samad who neither begets nor is begotten.",
                    reference: "Sahih al-Bukhari 4974",
                    narrator: "Abu Hurairah رضي الله عنه",
                    source: "sunnah.com/bukhari:4974",
                    grading: "Sahih",
                    context: "This hadith qudsi affirms that As-Samad is free from having offspring—He is the self-sufficient eternal refuge whom all depend upon."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn Taymiyyah",
                    insight: "As-Samad is the One to whom all creation turns in their needs, while He Himself needs no one. He is perfect in His attributes—complete in knowledge, wisdom, power, might, glory, and mercy.",
                    source: "Majmu' al-Fatawa",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Turn to As-Samad for all your needs, as He is the ultimate refuge who never tires of being asked.",
                "Free yourself from excessive dependence on people—As-Samad alone is truly self-sufficient.",
                "Recite Surah al-Ikhlas frequently, which contains this beautiful name of Allah.",
                "When feeling empty or needy, remember that As-Samad is the One who fills every void."
            ],
            duas: [
                DuaReference(
                    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنِّي أَشْهَدُ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ الْأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
                    transliteration: "Allahumma inni as'aluka bi anni ashhadu annaka anta Allahu la ilaha illa antal-Ahadus-Samad alladhi lam yalid wa lam yulad wa lam yakun lahu kufuwan ahad",
                    translation: "O Allah, I ask You by my testimony that You are Allah, there is no god but You, the One, the Eternal Refuge, who neither begets nor is begotten, and there is none equivalent to Him.",
                    occasion: "When making an earnest supplication—this is called upon with Allah's greatest name",
                    source: "Sunan Abu Dawud 1493"
                )
            ]
        )

        // ASH-SHAHEED - The Witness
        learningContent["ash-shaheed"] = ExtendedLearning(
            nameId: "ash-shaheed",
            hadiths: [
                HadithReference(
                    arabicText: "يُؤْتَى بِالْقَاضِي الْعَادِلِ يَوْمَ الْقِيَامَةِ فَيَلْقَى مِنْ شِدَّةِ الْحِسَابِ مَا يَتَمَنَّى أَنَّهُ لَمْ يَقْضِ بَيْنَ اثْنَيْنِ فِي تَمْرَةٍ قَطُّ",
                    transliteration: "Yu'ta bil-qadil-'adili yawmal-qiyamah fa yalqa min shiddatil-hisab ma yatamanna annahu lam yaqdi bayna ithnayni fi tamratin qatt",
                    translation: "The just judge will be brought on the Day of Resurrection and will face such a severe reckoning that he will wish he had never judged between two people even regarding a date.",
                    reference: "Reported by Ahmad and Ibn Hibban",
                    narrator: "A'isha رضي الله عنها",
                    source: "Musnad Ahmad",
                    grading: "Hasan",
                    context: "Ash-Shaheed witnesses every judgment and transaction—even judges will face intense accountability before the ultimate Witness."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn al-Qayyim",
                    insight: "Ash-Shaheed is the One from whom nothing is hidden. He witnesses all things—the apparent and the hidden, the public and the private. His witnessing encompasses all of creation at all times.",
                    source: "Badaai' al-Fawaid",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Live with the awareness that Ash-Shaheed witnesses every action, word, and intention.",
                "Be truthful in all matters, knowing that Ash-Shaheed is the perfect Witness.",
                "When wronged without earthly recourse, find comfort that Ash-Shaheed has witnessed everything.",
                "Let the knowledge that Allah is your Witness motivate excellence in private worship."
            ],
            duas: [
                DuaReference(
                    arabicText: "رَبَّنَا آمَنَّا بِمَا أَنزَلْتَ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ",
                    transliteration: "Rabbana amanna bima anzalta wattaba'nar-Rasula faktubnaa ma'ash-shahideen",
                    translation: "Our Lord, we have believed in what You revealed and followed the Messenger, so register us among the witnesses.",
                    occasion: "When affirming faith and seeking to be counted among the truthful witnesses",
                    source: "Qur'an 3:53"
                )
            ]
        )

        // ASH-SHAKOOR - The Most Appreciative
        learningContent["ash-shakoor"] = ExtendedLearning(
            nameId: "ash-shakoor",
            hadiths: [
                HadithReference(
                    arabicText: "إِنَّ اللَّهَ لَيَرْضَى عَنِ الْعَبْدِ أَنْ يَأْكُلَ الْأَكْلَةَ فَيَحْمَدَهُ عَلَيْهَا أَوْ يَشْرَبَ الشَّرْبَةَ فَيَحْمَدَهُ عَلَيْهَا",
                    transliteration: "Inna Allaha la-yarda 'anil-'abdi an ya'kula al-aklata fa yahmadahu 'alayha aw yashraba ash-sharbata fa yahmadahu 'alayha",
                    translation: "Indeed, Allah is pleased with a servant who eats a meal and praises Him for it, or drinks a drink and praises Him for it.",
                    reference: "Sahih Muslim 2734",
                    narrator: "Anas ibn Malik رضي الله عنه",
                    source: "sunnah.com/muslim:2734",
                    grading: "Sahih",
                    context: "Ash-Shakoor appreciates even the smallest acts of gratitude from His servants—a simple 'Alhamdulillah' after eating pleases Him."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn al-Qayyim",
                    insight: "Ash-Shakoor is the One who appreciates the smallest deeds and rewards them abundantly. He multiplies the rewards of His servants, forgives their faults, and never wastes any good deed, no matter how small.",
                    source: "Uddat as-Sabirin wa Dhakhiratu ash-Shakirin",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Be grateful for every blessing, knowing that Ash-Shakoor appreciates and multiplies your gratitude.",
                "Never belittle any good deed—Ash-Shakoor rewards even the smallest act of worship.",
                "Express gratitude to people, as thanking them is part of thanking Ash-Shakoor.",
                "When tired of worshipping, remember that Ash-Shakoor's reward far exceeds your effort."
            ],
            duas: [
                DuaReference(
                    arabicText: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ",
                    transliteration: "Rabbi awzi'ni an ashkura ni'matakal-lati an'amta 'alayya wa 'ala walidayya wa an a'mala salihan tardah",
                    translation: "My Lord, inspire me to be grateful for Your favor which You have bestowed upon me and upon my parents, and to do righteousness that You approve.",
                    occasion: "When seeking the ability to be truly grateful",
                    source: "Qur'an 27:19"
                )
            ]
        )

        // ASH-SHAKUR - The Grateful (alternate form)
        learningContent["ash-shakur"] = ExtendedLearning(
            nameId: "ash-shakur",
            hadiths: [
                HadithReference(
                    arabicText: "أَفَلَا أَكُونُ عَبْدًا شَكُورًا",
                    transliteration: "Afala akunu 'abdan shakura",
                    translation: "Should I not be a grateful servant?",
                    reference: "Sahih al-Bukhari 4837",
                    narrator: "Al-Mughirah ibn Shu'bah رضي الله عنه",
                    source: "sunnah.com/bukhari:4837",
                    grading: "Sahih",
                    context: "When asked why he prayed until his feet swelled despite being forgiven all sins, the Prophet ﷺ said this—showing that gratitude drives worship, not fear alone."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Al-Ghazali",
                    insight: "Ash-Shakur rewards a few days of effort with eternal bliss in Paradise. He accepts minimal deeds and gives maximal rewards. This is the reality of His gratitude toward His servants—He gives endlessly for finite worship.",
                    source: "Al-Maqsad al-Asna fi Sharh Asma Allah al-Husna",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Worship out of gratitude, not just obligation—following the Prophet's example of being a 'grateful servant.'",
                "Appreciate that Allah rewards your small deeds disproportionately—a moment of charity can bring eternal reward.",
                "Show gratitude through action, not just words—let your obedience reflect your thanks.",
                "When blessed, increase in worship rather than becoming complacent."
            ],
            duas: [
                DuaReference(
                    arabicText: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
                    transliteration: "Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatik",
                    translation: "O Allah, help me to remember You, to be grateful to You, and to worship You in the best way.",
                    occasion: "After every obligatory prayer",
                    source: "Sunan Abu Dawud 1522"
                )
            ]
        )

        // AT-TAWWAB - The Accepter of Repentance
        learningContent["at-tawwab"] = ExtendedLearning(
            nameId: "at-tawwab",
            hadiths: [
                HadithReference(
                    arabicText: "لَلَّهُ أَشَدُّ فَرَحًا بِتَوْبَةِ عَبْدِهِ مِنْ أَحَدِكُمْ سَقَطَ عَلَى بَعِيرِهِ وَقَدْ أَضَلَّهُ فِي أَرْضِ فَلَاةٍ",
                    transliteration: "Lallahu ashaddu farahan bi tawbati 'abdihi min ahadikum saqata 'ala ba'irihi wa qad adallahu fi ardi falah",
                    translation: "Allah is more pleased with the repentance of His servant than one of you who finds his lost camel in a barren desert.",
                    reference: "Sahih Muslim 2747",
                    narrator: "Anas ibn Malik رضي الله عنه",
                    source: "sunnah.com/muslim:2747",
                    grading: "Sahih",
                    context: "This powerful analogy shows how much At-Tawwab loves and eagerly accepts the repentance of His servants."
                ),
                HadithReference(
                    arabicText: "إِنَّ اللَّهَ عَزَّ وَجَلَّ يَبْسُطُ يَدَهُ بِاللَّيْلِ لِيَتُوبَ مُسِيءُ النَّهَارِ وَيَبْسُطُ يَدَهُ بِالنَّهَارِ لِيَتُوبَ مُسِيءُ اللَّيْلِ",
                    transliteration: "Inna Allaha 'azza wa jalla yabsutu yadahu bil-layli li yatuba musi'un-nahar wa yabsutu yadahu bin-nahar li yatuba musi'ul-layl",
                    translation: "Indeed Allah extends His Hand at night so that the sinner of the day may repent, and extends His Hand during the day so that the sinner of the night may repent.",
                    reference: "Sahih Muslim 2759",
                    narrator: "Abu Musa al-Ash'ari رضي الله عنه",
                    source: "sunnah.com/muslim:2759",
                    grading: "Sahih",
                    context: "At-Tawwab continuously invites His servants to repent—His door is always open, day and night."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn al-Qayyim",
                    insight: "At-Tawwab's acceptance of repentance has three stages: He inspires the servant to repent, He accepts the repentance when it is made, and He then turns to the servant with mercy and forgiveness. He is At-Tawwab at every stage.",
                    source: "Madarij as-Salikin",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Never delay repentance—At-Tawwab is eager to forgive and His door is always open.",
                "When you sin repeatedly, do not despair—keep returning to At-Tawwab, for He never tires of forgiving.",
                "Make tawbah a daily habit, not just for major sins but for all shortcomings.",
                "Forgive others as you hope At-Tawwab will forgive you."
            ],
            duas: [
                DuaReference(
                    arabicText: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ وَتُبْ عَلَيْنَا إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ",
                    transliteration: "Rabbana taqabbal minna innaka antas-Sami'ul-'Aleem, wa tub 'alayna innaka antat-Tawwabur-Raheem",
                    translation: "Our Lord, accept from us. Indeed You are the Hearing, the Knowing. And turn to us in forgiveness. Indeed You are the Accepter of Repentance, the Merciful.",
                    occasion: "When seeking acceptance of deeds and repentance",
                    source: "Qur'an 2:127-128"
                )
            ]
        )

        // AZ-ZAHIR - The Manifest
        learningContent["az-zahir"] = ExtendedLearning(
            nameId: "az-zahir",
            hadiths: [
                HadithReference(
                    arabicText: "اللَّهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ",
                    transliteration: "Allahumma antal-Awwalu fa laysa qablaka shay', wa antal-Akhiru fa laysa ba'daka shay', wa antadh-Dhahiru fa laysa fawqaka shay', wa antal-Batinu fa laysa dunaka shay'",
                    translation: "O Allah, You are the First and there is nothing before You, You are the Last and there is nothing after You, You are the Manifest and there is nothing above You, You are the Hidden and there is nothing beyond You.",
                    reference: "Sahih Muslim 2713",
                    narrator: "Abu Hurairah رضي الله عنه",
                    source: "sunnah.com/muslim:2713",
                    grading: "Sahih",
                    context: "This supplication, taught by the Prophet ﷺ before sleeping, beautifully combines four names of Allah showing His absolute encompassment."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn Taymiyyah",
                    insight: "Az-Zahir means that Allah is above all of His creation, ascended over His Throne. His existence is manifest through His signs, His creation, and the evidence of His lordship that permeates every atom of existence.",
                    source: "Majmu' al-Fatawa",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "See the signs of Az-Zahir in every aspect of creation—from the stars to the cells in your body.",
                "When doubts arise, look at the manifest evidence of Allah's existence all around you.",
                "Recite the Prophet's bedtime dua that includes this beautiful name.",
                "Reflect on how Allah's attributes are apparent in the order, beauty, and precision of the universe."
            ],
            duas: [
                DuaReference(
                    arabicText: "اللَّهُمَّ أَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ",
                    transliteration: "Allahumma antadh-Dhahiru fa laysa fawqaka shay' wa antal-Batinu fa laysa dunaka shay', iqdi 'annad-dayna wa aghnina minal-faqr",
                    translation: "O Allah, You are the Manifest and there is nothing above You, You are the Hidden and there is nothing beyond You. Settle our debts and enrich us from poverty.",
                    occasion: "Before sleeping, as part of the evening supplication",
                    source: "Sahih Muslim 2713"
                )
            ]
        )

        // DHUL-JALALI-WAL-IKRAM - Possessor of Majesty and Honor
        learningContent["dhul-jalali-wal-ikram"] = ExtendedLearning(
            nameId: "dhul-jalali-wal-ikram",
            hadiths: [
                HadithReference(
                    arabicText: "أَلِظُّوا بِيَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
                    transliteration: "Alidhdhu bi Ya Dhal-Jalali wal-Ikram",
                    translation: "Persist in saying 'O Possessor of Majesty and Honor' (in your supplications).",
                    reference: "Jami' at-Tirmidhi 3524",
                    narrator: "Anas ibn Malik رضي الله عنه",
                    source: "sunnah.com/tirmidhi:3524",
                    grading: "Sahih (Al-Albani)",
                    context: "The Prophet ﷺ specifically instructed believers to frequently call upon Allah by this magnificent name in their supplications."
                ),
                HadithReference(
                    arabicText: "تَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ",
                    transliteration: "Tabaraka ismuka wa ta'ala jadduka wa la ilaha ghayruk",
                    translation: "Blessed is Your Name, exalted is Your Majesty, and there is no god other than You.",
                    reference: "Sunan Abu Dawud 775",
                    narrator: "Abu Sa'id al-Khudri رضي الله عنه",
                    source: "sunnah.com/abudawud:775",
                    grading: "Sahih",
                    context: "This opening supplication of prayer glorifies Allah's majesty and honor."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Ibn al-Qayyim",
                    insight: "Dhul-Jalali wal-Ikram combines the attributes of majesty (jalal) that inspire awe and reverence, with the attributes of beauty and generosity (ikram) that inspire love and gratitude. The believer oscillates between fear of His majesty and hope in His generosity.",
                    source: "Badaai' al-Fawaid",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Frequently call upon Allah as 'Ya Dhal-Jalali wal-Ikram' in your supplications, as the Prophet ﷺ encouraged.",
                "Balance between hope in Allah's generosity (ikram) and awe of His majesty (jalal).",
                "Honor others as a reflection of the honor that Dhul-Jalali wal-Ikram bestows on His creation.",
                "Recognize that true honor and dignity come only from the Possessor of all honor."
            ],
            duas: [
                DuaReference(
                    arabicText: "يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
                    transliteration: "Ya Dhal-Jalali wal-Ikram",
                    translation: "O Possessor of Majesty and Honor!",
                    occasion: "Persistently in all supplications, as specifically recommended by the Prophet ﷺ",
                    source: "Jami' at-Tirmidhi 3524"
                )
            ]
        )

        // MALIK-UL-MULK - Master of the Kingdom
        learningContent["malik-ul-mulk"] = ExtendedLearning(
            nameId: "malik-ul-mulk",
            hadiths: [
                HadithReference(
                    arabicText: "يَقْبِضُ اللَّهُ الأَرْضَ يَوْمَ الْقِيَامَةِ وَيَطْوِي السَّمَاءَ بِيَمِينِهِ ثُمَّ يَقُولُ أَنَا الْمَلِكُ أَيْنَ مُلُوكُ الأَرْضِ",
                    transliteration: "Yaqbidu Allahu al-arda yawma al-qiyamah wa yatwi as-sama'a bi yaminihi thumma yaqulu ana al-maliku ayna mulooku al-ard",
                    translation: "Allah will seize the earth on the Day of Resurrection and roll up the heavens in His Right Hand, then He will say: 'I am the King! Where are the kings of the earth?'",
                    reference: "Sahih al-Bukhari 7382",
                    narrator: "Abu Hurairah رضي الله عنه",
                    source: "sunnah.com/bukhari:7382",
                    grading: "Sahih",
                    context: "On the Day of Judgment, Malik-ul-Mulk will demonstrate that all earthly kingdoms were temporary—He alone is the eternal Master of all dominion."
                ),
                HadithReference(
                    arabicText: "أَخْنَعُ اسْمٍ عِنْدَ اللَّهِ رَجُلٌ تَسَمَّى مَلِكَ الْأَمْلَاكِ",
                    transliteration: "Akhna'u ismin 'inda Allahi rajulun tasamma Malik al-Amlak",
                    translation: "The most despised name to Allah is that of a man who calls himself 'King of Kings.'",
                    reference: "Sahih al-Bukhari 6205",
                    narrator: "Abu Hurairah رضي الله عنه",
                    source: "sunnah.com/bukhari:6205",
                    grading: "Sahih",
                    context: "This hadith affirms that the title of supreme sovereignty belongs exclusively to Allah—Malik-ul-Mulk."
                )
            ],
            scholarlyInsights: [
                ScholarlyInsight(
                    scholar: "Shaykh as-Sa'di",
                    insight: "Malik-ul-Mulk is the Owner of all sovereignty. He gives dominion to whom He wills and takes it from whom He wills. He honors whom He wills and humbles whom He wills. All good is in His Hand, and He has power over all things.",
                    source: "Taysir al-Karim ar-Rahman",
                    arabicQuote: nil
                )
            ],
            realLifeApplications: [
                "Never be overawed by earthly power—all authority belongs to and returns to Malik-ul-Mulk.",
                "If given authority or leadership, exercise it with humility, knowing it is borrowed from Malik-ul-Mulk.",
                "When leaders oppress, remember that Malik-ul-Mulk can strip their power at any moment.",
                "Seek lasting honor from Allah rather than temporary positions of worldly power."
            ],
            duas: [
                DuaReference(
                    arabicText: "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَاءُ وَتَنزِعُ الْمُلْكَ مِمَّن تَشَاءُ وَتُعِزُّ مَن تَشَاءُ وَتُذِلُّ مَن تَشَاءُ بِيَدِكَ الْخَيْرُ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
                    transliteration: "Qulil-lahumma Malikal-Mulki tu'til-mulka man tasha'u wa tanzi'ul-mulka mimman tasha'u wa tu'izzu man tasha'u wa tudhillu man tasha'u biyadikal-khayr innaka 'ala kulli shay'in qadeer",
                    translation: "Say: O Allah, Master of the Kingdom, You give sovereignty to whom You will and You take sovereignty from whom You will. You honor whom You will and You humble whom You will. In Your Hand is all good. Indeed, You have power over all things.",
                    occasion: "When reflecting on Allah's absolute sovereignty and seeking honor from Him",
                    source: "Qur'an 3:26"
                )
            ]
        )
    }
}
