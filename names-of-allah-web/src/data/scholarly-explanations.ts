// Scholarly explanations from:
// "Explanation to the Beautiful and Perfect Names of Allah"
// By Shaykh Abu 'Abdu-r-Rahman Nasir as-Sa'di (d.1376H)
// Translated by Abu Rumaysah
// Published by Daar Us-Sunnah Publishers, Birmingham
//
// Content preserved verbatim from the book. Some names are explained
// together in the original text and share a combined explanation.

export interface QuranicVerse {
  text: string;
  reference: string;
}

export interface ScholarlyExplanation {
  nameId: string;
  /** Names explained together in this entry (for grouped entries) */
  groupedWith?: string[];
  explanation: string;
  quranicVerses: QuranicVerse[];
  source: string;
}

const SOURCE =
  "Explanation to the Beautiful and Perfect Names of Allah — Shaykh as-Sa'di (d.1376H), translated by Abu Rumaysah, Daar Us-Sunnah Publishers";

export const scholarlyExplanationsDb: Record<string, ScholarlyExplanation> = {
  "ar-rabb": {
    nameId: "ar-rabb",
    explanation:
      "This name has been repeatedly mentioned in many verses. Ar-Rabb is the one who nurtures and sustains all of His servants through regulating and governing their affairs and granting them all types of favours and blessings. More specifically, He is the one who nurtures and sustains his sincere friends by correcting and purifying their hearts, souls and manners. This is why their supplications are frequently made with this noble Name because they seek this specific nurturing.",
    quranicVerses: [
      {
        text: "And your Rabb is the Ever-Forgiving, Owner of Mercy. Were He to call them to account for what they had earned, surely He would have hastened on their punishment. Instead they have their appointed time beyond which they will find no escape.",
        reference: "al-Kahf (18): 58",
      },
    ],
    source: SOURCE,
  },

  allah: {
    nameId: "allah",
    explanation:
      "He is the one and only deity, the one who is worshipped and the one who deserves to be worshipped by the whole of His creation. This is due to the perfect and beautiful godly Attributes that He is described with.",
    quranicVerses: [
      {
        text: "Allah! There is none worthy of worship but He, the Living, the Self-Sustaining. He is not subject to drowsiness or sleep. To Him belongs whatsoever is in the heavens and the earth. Who is there that can intercede with Him except with His Permission? He Knows what is before them and what is behind them, but they cannot encompass anything of His Knowledge except that which He Wills. His Footstool encompasses the heavens and the earth and He feels no fatigue in preserving them. He is the Most High, the Most Great.",
        reference: "al-Baqarah (2): 255",
      },
    ],
    source: SOURCE,
  },

  "al-malik": {
    nameId: "al-malik",
    explanation:
      "He is described with the Attribute of being the Master and Owner. These are Attributes describing His grandeur, glory and majesty, omnipotence and His governance and regulation of the affairs. He is the one who directs all of the affairs to do with creation, command and recompense. To Him belongs the whole of creation, all of it is subservient to Him, owned by Him and in continuous need of Him.",
    quranicVerses: [
      {
        text: "Then High exalted be Allah, al-Malik, the Truth. Do not be in haste with the Qur'an before its revelation is completed to you and say, 'My Lord! Increase me in knowledge.'",
        reference: "Ta Ha (20): 114",
      },
      {
        text: "Say: O Allah! Malik of the kingdom, You give sovereignty to whom You will and You take sovereignty from whom You will. You exalt whom You will and You humiliate whom You will. In your Hand is [all] good, indeed You have power over all things.",
        reference: "Ali 'Imran (3): 26",
      },
      {
        text: "Alladhi lahu-l-Mulk of the heavens and the earth! And Allah is Witness over everything.",
        reference: "al-Buruj (85): 9",
      },
    ],
    source: SOURCE,
  },

  "al-wahid": {
    nameId: "al-wahid",
    groupedWith: ["al-ahad"],
    explanation:
      "He is the one who is singled out in all aspects of perfection such that nothing else shares with Him in these. It is obligatory upon the servants to single Him out alone in belief, saying and action by acknowledging His unrestricted perfection, His uniqueness and singling Him out alone for all types of worship.",
    quranicVerses: [
      {
        text: "'O two companions of the prison! Are many different lords better or Allah, al-Wahid, the Irresistible?'",
        reference: "Yusuf (12): 39",
      },
      {
        text: "Say: He is Allah, al-Ahad.",
        reference: "al-Ikhlas (112): 1",
      },
    ],
    source: SOURCE,
  },

  "al-ahad": {
    nameId: "al-ahad",
    groupedWith: ["al-wahid"],
    explanation:
      "He is the one who is singled out in all aspects of perfection such that nothing else shares with Him in these. It is obligatory upon the servants to single Him out alone in belief, saying and action by acknowledging His unrestricted perfection, His uniqueness and singling Him out alone for all types of worship.",
    quranicVerses: [
      {
        text: "'O two companions of the prison! Are many different lords better or Allah, al-Wahid, the Irresistible?'",
        reference: "Yusuf (12): 39",
      },
      {
        text: "Say: He is Allah, al-Ahad.",
        reference: "al-Ikhlas (112): 1",
      },
    ],
    source: SOURCE,
  },

  "as-samad": {
    nameId: "as-samad",
    explanation:
      "He is the one upon whom the whole of creation relies with regards all their needs, predicaments and necessities. This is due to His unrestricted perfection with regards His Person, His Names, His Attributes and His Actions.",
    quranicVerses: [
      {
        text: "Say: He is Allah the One. Allah as-Samad.",
        reference: "al-Ikhlas (112): 1-2",
      },
    ],
    source: SOURCE,
  },

  "al-aleem": {
    nameId: "al-aleem",
    groupedWith: ["al-khabeer"],
    explanation:
      "He is the one whose knowledge encompasses all the outward and hidden matters, the open and secret, all those things that must necessarily occur, all those things that are impossible to occur and all those things that can possibly occur. He knows the affairs of the whole of creation, of the past, the present and the future. There is absolutely nothing that is hidden from Him.",
    quranicVerses: [
      {
        text: "Verily Allah [alone] has the knowledge of the Hour, He sends down the rain and knows what is in the wombs. No soul knows what it will earn tomorrow and no soul knows in what land it will die. Indeed Allah is 'Alim, Khabir.",
        reference: "Luqman (31): 34",
      },
      {
        text: "O Mankind! We have created you from a male and a female and made you into nations and tribes that you may know each other. Verily, the most noble of you in the Sight of Allah is the most pious and God-Fearing of you. Indeed Allah is 'Alim, Khabir.",
        reference: "al-Hujurat (49): 13",
      },
    ],
    source: SOURCE,
  },

  "al-khabeer": {
    nameId: "al-khabeer",
    groupedWith: ["al-aleem"],
    explanation:
      "He is the one whose knowledge encompasses all the outward and hidden matters, the open and secret, all those things that must necessarily occur, all those things that are impossible to occur and all those things that can possibly occur. He knows the affairs of the whole of creation, of the past, the present and the future. There is absolutely nothing that is hidden from Him.",
    quranicVerses: [
      {
        text: "Verily Allah [alone] has the knowledge of the Hour, He sends down the rain and knows what is in the wombs. No soul knows what it will earn tomorrow and no soul knows in what land it will die. Indeed Allah is 'Alim, Khabir.",
        reference: "Luqman (31): 34",
      },
      {
        text: "O Mankind! We have created you from a male and a female and made you into nations and tribes that you may know each other. Verily, the most noble of you in the Sight of Allah is the most pious and God-Fearing of you. Indeed Allah is 'Alim, Khabir.",
        reference: "al-Hujurat (49): 13",
      },
    ],
    source: SOURCE,
  },

  "al-hakim": {
    nameId: "al-hakim",
    explanation:
      "He is the one to whom belongs the highest wisdom, the one who is All-Wise in His creating and ordering, the one who made well everything that He created. Therefore He has created nothing out of mere frivolity and He has legislated nothing that is vain and of no use. He is the one to whom belongs judgement in the beginning and the end. He has three areas of ruling that nothing else has a share in: He rules over His servants with respect to His law, His decree and His recompense. Wisdom is to put something in its correct place.",
    quranicVerses: [
      {
        text: "And who is better than Allah in judgement for a people who have firm faith?",
        reference: "al-Ma'idah (5): 50",
      },
      {
        text: "For those who believe not in the Hereafter is an evil description and for Allah is the highest description. He is the Almighty, al-Hakim.",
        reference: "an-Nahl (16): 60",
      },
      {
        text: "It is He who is the only deity in the heaven and on the earth. He is al-Hakim, the All-Knowing.",
        reference: "az-Zukhruf (43): 84",
      },
    ],
    source: SOURCE,
  },

  "ar-rahman": {
    nameId: "ar-rahman",
    groupedWith: [
      "ar-raheem",
      "al-barr",
      "al-kareem",
      "al-jawaad",
      "ar-rauf",
      "al-wahhab",
    ],
    explanation:
      "All of these Names are close in meaning and all of them point to describing the Lord with mercy, generosity and kindness. They point to the great expanse of His mercy and gifts that encompass all that is existence, being granted in accordance to the dictates of His wisdom. The believers have been specifically singled out for this and they are granted a goodly and the best portion of this. All blessings and the various aspects of beneficence are from the effects of His mercy, generosity and kindness just as all beneficence in this world and in the Hereafter is from the effects of His mercy.",
    quranicVerses: [
      {
        text: "My mercy encompasses all things and I shall decree it for those who have taqwa.",
        reference: "al-A'raf (7): 156",
      },
      {
        text: "Ar-Rahman. He taught the Qur'an and created mankind.",
        reference: "ar-Rahman (55): 1-3",
      },
      {
        text: "Verily, we used to call on Him [Alone] before. Verily He is al-Barr, ar-Rahim.",
        reference: "at-Tur (52): 28",
      },
      {
        text: "O man! What has made you careless concerning your Lord, al-Karim.",
        reference: "al-Infitar (82): 6",
      },
      {
        text: "And had it not been for the grace of Allah and His Mercy on you, [Allah would have hastened the Punishment]. And that Allah is Ra'uf, Rahim.",
        reference: "an-Nur (24): 20",
      },
      {
        text: "[They say]: Our Lord, let not our hearts deviate after You have guided us and grant us Mercy from You. Truly you are al-Wahhab.",
        reference: "Ali 'Imran (3): 8",
      },
    ],
    source: SOURCE,
  },

  "ar-raheem": {
    nameId: "ar-raheem",
    groupedWith: ["ar-rahman", "al-barr", "al-kareem", "al-jawaad", "ar-rauf", "al-wahhab"],
    explanation:
      "All of these Names are close in meaning and all of them point to describing the Lord with mercy, generosity and kindness. They point to the great expanse of His mercy and gifts that encompass all that is existence, being granted in accordance to the dictates of His wisdom. The believers have been specifically singled out for this and they are granted a goodly and the best portion of this. All blessings and the various aspects of beneficence are from the effects of His mercy, generosity and kindness just as all beneficence in this world and in the Hereafter is from the effects of His mercy.",
    quranicVerses: [
      {
        text: "My mercy encompasses all things and I shall decree it for those who have taqwa.",
        reference: "al-A'raf (7): 156",
      },
      {
        text: "Verily, we used to call on Him [Alone] before. Verily He is al-Barr, ar-Rahim.",
        reference: "at-Tur (52): 28",
      },
    ],
    source: SOURCE,
  },

  "al-barr": {
    nameId: "al-barr",
    groupedWith: ["ar-rahman", "ar-raheem"],
    explanation:
      "All of these Names are close in meaning and all of them point to describing the Lord with mercy, generosity and kindness. They point to the great expanse of His mercy and gifts that encompass all that is existence, being granted in accordance to the dictates of His wisdom. The believers have been specifically singled out for this and they are granted a goodly and the best portion of this. All blessings and the various aspects of beneficence are from the effects of His mercy, generosity and kindness just as all beneficence in this world and in the Hereafter is from the effects of His mercy.",
    quranicVerses: [
      {
        text: "Verily, we used to call on Him [Alone] before. Verily He is al-Barr, ar-Rahim.",
        reference: "at-Tur (52): 28",
      },
    ],
    source: SOURCE,
  },

  "al-kareem": {
    nameId: "al-kareem",
    groupedWith: ["ar-rahman", "ar-raheem"],
    explanation:
      "All of these Names are close in meaning and all of them point to describing the Lord with mercy, generosity and kindness. They point to the great expanse of His mercy and gifts that encompass all that is existence, being granted in accordance to the dictates of His wisdom. The believers have been specifically singled out for this and they are granted a goodly and the best portion of this. All blessings and the various aspects of beneficence are from the effects of His mercy, generosity and kindness just as all beneficence in this world and in the Hereafter is from the effects of His mercy.",
    quranicVerses: [
      {
        text: "O man! What has made you careless concerning your Lord, al-Karim.",
        reference: "al-Infitar (82): 6",
      },
    ],
    source: SOURCE,
  },

  "al-jawaad": {
    nameId: "al-jawaad",
    groupedWith: ["ar-rahman", "ar-raheem"],
    explanation:
      "All of these Names are close in meaning and all of them point to describing the Lord with mercy, generosity and kindness. They point to the great expanse of His mercy and gifts that encompass all that is existence, being granted in accordance to the dictates of His wisdom. The believers have been specifically singled out for this and they are granted a goodly and the best portion of this.",
    quranicVerses: [
      {
        text: "My mercy encompasses all things and I shall decree it for those who have taqwa.",
        reference: "al-A'raf (7): 156",
      },
    ],
    source: SOURCE,
  },

  "ar-rauf": {
    nameId: "ar-rauf",
    groupedWith: ["ar-rahman", "ar-raheem"],
    explanation:
      "All of these Names are close in meaning and all of them point to describing the Lord with mercy, generosity and kindness. They point to the great expanse of His mercy and gifts that encompass all that is existence, being granted in accordance to the dictates of His wisdom. The believers have been specifically singled out for this and they are granted a goodly and the best portion of this.",
    quranicVerses: [
      {
        text: "And had it not been for the grace of Allah and His Mercy on you, [Allah would have hastened the Punishment]. And that Allah is Ra'uf, Rahim.",
        reference: "an-Nur (24): 20",
      },
    ],
    source: SOURCE,
  },

  "al-wahhab": {
    nameId: "al-wahhab",
    groupedWith: ["ar-rahman", "ar-raheem"],
    explanation:
      "All of these Names are close in meaning and all of them point to describing the Lord with mercy, generosity and kindness. They point to the great expanse of His mercy and gifts that encompass all that is existence, being granted in accordance to the dictates of His wisdom. The believers have been specifically singled out for this and they are granted a goodly and the best portion of this.",
    quranicVerses: [
      {
        text: "[They say]: Our Lord, let not our hearts deviate after You have guided us and grant us Mercy from You. Truly you are al-Wahhab.",
        reference: "Ali 'Imran (3): 8",
      },
    ],
    source: SOURCE,
  },

  "as-samee": {
    nameId: "as-samee",
    explanation:
      "The one who hears all sounds and voices, in all of their different languages and all of their many and various needs.",
    quranicVerses: [
      {
        text: "Say: if they believe as you [O Prophet and Companions] believe then they are rightly guided, but if they turn away then they are only entrenched in hostility. Allah will suffice you against them and He is as-Sami', the All-Knowing.",
        reference: "al-Baqarah (2): 137",
      },
      {
        text: "Allah judges with truth while those whom they invoke besides Him cannot judge anything. Indeed Allah is as-Sami', the All-Seeing.",
        reference: "Ghafir (40): 20",
      },
    ],
    source: SOURCE,
  },

  "al-baseer": {
    nameId: "al-baseer",
    explanation:
      "The one who sees all things even if they be insignificant and minute. He sees the black ant on a black stone in a black night. He sees what is below the seventh earth and what is above the seventh heaven. He is also Hearing and Seeing of those who deserve recompense, in accordance to the dictates of His wisdom.",
    quranicVerses: [
      {
        text: "Say: Shall I inform you of things far better than that. For the pious and God-fearing are Gardens with their Lord underneath which rivers flow, remaining in them eternally, and pure wives, and the pleasure of Allah. Allah is the Basir of His slaves.",
        reference: "Ali 'Imran (3): 15",
      },
      {
        text: "Neither your relatives nor your children will benefit you on the Day of Resurrection. He will judge between you and Allah is Basir of what you do.",
        reference: "al-Mumtahinah (60): 3",
      },
    ],
    source: SOURCE,
  },

  "al-hameed": {
    nameId: "al-hameed",
    explanation:
      "In His Person, Names, Attributes and Actions. He possesses the best of Names and the most perfect of Attributes coupled with the best and most complete actions, for indeed the Actions of Allah are based upon grace and justice.",
    quranicVerses: [
      {
        text: "Alif Lam Ra. A Book which We have revealed to you that you might lead mankind out of darkness into the light by the leave of their Lord, the Almighty, al-Hamid.",
        reference: "Ibrahim (14): 1",
      },
      {
        text: "And indeed We bestowed upon Luqman wisdom saying, 'Give thanks to Allah,' and whosoever gives thanks, he gives thanks for [the benefit] of his own self. And whoever is ungrateful then verily Allah is All-Rich, Hamid.",
        reference: "Luqman (31): 12",
      },
    ],
    source: SOURCE,
  },

  "al-majeed": {
    nameId: "al-majeed",
    groupedWith: ["al-kabeer", "al-adheem", "al-jaleel"],
    explanation:
      "He is described with the Attributes of glory, grandeur, greatness and magnificence. He is the One who is greater, more exalted and magnificent than anything. He is glorified and magnified in the hearts of His friends and close ones, their hearts overflow with His greatness and magnificence, submission to Him and humility before His grandeur.",
    quranicVerses: [
      {
        text: "Owner of the Throne, al-Majid.",
        reference: "al-Buruj (85): 15",
      },
    ],
    source: SOURCE,
  },

  "al-kabeer": {
    nameId: "al-kabeer",
    groupedWith: ["al-majeed", "al-adheem", "al-jaleel"],
    explanation:
      "He is described with the Attributes of glory, grandeur, greatness and magnificence. He is the One who is greater, more exalted and magnificent than anything. He is glorified and magnified in the hearts of His friends and close ones, their hearts overflow with His greatness and magnificence, submission to Him and humility before His grandeur.",
    quranicVerses: [
      {
        text: "All-Knower of the unseen and the seen, al-Kabir, the Most High.",
        reference: "ar-Ra'd (13): 9",
      },
    ],
    source: SOURCE,
  },

  "al-adheem": {
    nameId: "al-adheem",
    groupedWith: ["al-majeed", "al-kabeer", "al-jaleel"],
    explanation:
      "He is described with the Attributes of glory, grandeur, greatness and magnificence. He is the One who is greater, more exalted and magnificent than anything. He is glorified and magnified in the hearts of His friends and close ones, their hearts overflow with His greatness and magnificence, submission to Him and humility before His grandeur.",
    quranicVerses: [
      {
        text: "Then glorify with praises the Name of your Lord, al-'Azim.",
        reference: "al-Waqi'ah (56): 74",
      },
    ],
    source: SOURCE,
  },

  "al-jaleel": {
    nameId: "al-jaleel",
    groupedWith: ["al-majeed", "al-kabeer", "al-adheem"],
    explanation:
      "He is described with the Attributes of glory, grandeur, greatness and magnificence. He is the One who is greater, more exalted and magnificent than anything. He is glorified and magnified in the hearts of His friends and close ones, their hearts overflow with His greatness and magnificence, submission to Him and humility before His grandeur.",
    quranicVerses: [],
    source: SOURCE,
  },

  "al-afuw": {
    nameId: "al-afuw",
    groupedWith: ["al-ghafoor", "al-ghaffar"],
    explanation:
      "The one who was, and is, known with the Attribute of forgiveness. The one who was, and is, described as showing forgiveness and clemency to His servants. Everyone is in dire need of His forgiveness just as they are in dire need of His mercy and kindness. Allah has promised forgiveness to the one who fulfils its conditions.",
    quranicVerses: [
      {
        text: "Whether you disclose a good deed, or conceal it, or pardon an evil - verily Allah is the 'Afuww, All-Powerful.",
        reference: "an-Nisa' (4): 149",
      },
    ],
    source: SOURCE,
  },

  "al-ghafoor": {
    nameId: "al-ghafoor",
    groupedWith: ["al-afuw", "al-ghaffar"],
    explanation:
      "The one who was, and is, known with the Attribute of forgiveness. The one who was, and is, described as showing forgiveness and clemency to His servants. Everyone is in dire need of His forgiveness just as they are in dire need of His mercy and kindness. Allah has promised forgiveness to the one who fulfils its conditions.",
    quranicVerses: [
      {
        text: "He is al-Ghafur, the Most Merciful.",
        reference: "al-Ahqaf (46): 8",
      },
    ],
    source: SOURCE,
  },

  "al-ghaffar": {
    nameId: "al-ghaffar",
    groupedWith: ["al-afuw", "al-ghafoor"],
    explanation:
      "The one who was, and is, known with the Attribute of forgiveness. The one who was, and is, described as showing forgiveness and clemency to His servants. Everyone is in dire need of His forgiveness just as they are in dire need of His mercy and kindness. Allah has promised forgiveness to the one who fulfils its conditions.",
    quranicVerses: [
      {
        text: "And indeed I am All-Forgiving to him who repents, believes, does righteous deeds and then remains constant in doing them.",
        reference: "Ta Ha (20): 82",
      },
    ],
    source: SOURCE,
  },

  "at-tawwab": {
    nameId: "at-tawwab",
    explanation:
      "The one who is continuously turning [in forgiveness] to those who turn to Him [in repentance] and the one who forgives the sins of the penitent. Everyone who turns to Allah sincerely, Allah turns to them by first granting them the ability to repent and to direct their hearts towards Him, then after this He turns to them by accepting their repentance and forgiving them their errors.",
    quranicVerses: [
      {
        text: "Know they not that Allah accepts the repentance from His slaves and acknowledges their charity, and that Allah is at-Tawwab, Most Merciful?",
        reference: "at-Tawbah (9): 104",
      },
      {
        text: "O you who believe! Avoid much suspicion, indeed some suspicion is sin. And spy not, neither backbite one another. Would one of you like to eat the flesh of his dead brother? You would hate it! Fear Allah, indeed Allah is Tawwab, Most Merciful.",
        reference: "al-Hujurat (49): 12",
      },
    ],
    source: SOURCE,
  },

  "al-quddus": {
    nameId: "al-quddus",
    groupedWith: ["as-salaam"],
    explanation:
      "The one who is far greater and far removed from any imperfection, or that He resemble any of His creation. Hence He is far removed from any defect just as He is far removed from anything resembling Him or coming close to resembling Him in any of His Attributes of perfection. Al-Quddus is similar in meaning to as-Salam in that they both negate any form of imperfection while at the same time including unlimited perfection in every way. This is because when deficiency has been removed then all that remains is perfection.",
    quranicVerses: [
      {
        text: "There is nothing like Him.",
        reference: "ash-Shura (42): 11",
      },
      {
        text: "There is no one equal to or comparable to Him.",
        reference: "al-Ikhlas (112): 4",
      },
      {
        text: "Do you know of any who is similar to Him?",
        reference: "Maryam (19): 65",
      },
      {
        text: "Whatsoever is in the heavens and the earth glorifies Allah - the King, al-Quddus, the Almighty, the All-Wise.",
        reference: "al-Jumu'ah (62): 1",
      },
    ],
    source: SOURCE,
  },

  "as-salaam": {
    nameId: "as-salaam",
    groupedWith: ["al-quddus"],
    explanation:
      "The one who is far greater and far removed from any imperfection, or that He resemble any of His creation. Hence He is far removed from any defect just as He is far removed from anything resembling Him or coming close to resembling Him in any of His Attributes of perfection. Al-Quddus is similar in meaning to as-Salam in that they both negate any form of imperfection while at the same time including unlimited perfection in every way. This is because when deficiency has been removed then all that remains is perfection.",
    quranicVerses: [
      {
        text: "He is Allah, other than whom none has the right to be worshipped. The King, the Holy, as-Salam, the Giver of Security, the Ever-Watcher, the Almighty, the Compeller, the Supreme. Glory be to Allah! [High is He] above all that they associate as partners with Him.",
        reference: "al-Hashr (59): 23",
      },
    ],
    source: SOURCE,
  },

  "al-aliyy": {
    nameId: "al-aliyy",
    groupedWith: ["al-alaa"],
    explanation:
      "To Him belongs highness in all of its aspects, highness of His Person, highness of His Attributes and esteem, highness of strength and power. He is the one who has risen over His Throne and the one who has encompassed the dominion. He is the one in whom all the attributes of greatness, grandeur, magnificence and beauty find perfection and fulfilment.",
    quranicVerses: [
      {
        text: "To Him belongs all that is in the heavens and the earth, and He is al-'Ali, the Exalted.",
        reference: "ash-Shura (42): 4",
      },
      {
        text: "Glorify the name of your Lord, al-A'la.",
        reference: "al-A'la (87): 1",
      },
    ],
    source: SOURCE,
  },

  "al-alaa": {
    nameId: "al-alaa",
    groupedWith: ["al-aliyy"],
    explanation:
      "To Him belongs highness in all of its aspects, highness of His Person, highness of His Attributes and esteem, highness of strength and power. He is the one who has risen over His Throne and the one who has encompassed the dominion. He is the one in whom all the attributes of greatness, grandeur, magnificence and beauty find perfection and fulfilment.",
    quranicVerses: [
      {
        text: "Glorify the name of your Lord, al-A'la.",
        reference: "al-A'la (87): 1",
      },
    ],
    source: SOURCE,
  },

  "al-aziz": {
    nameId: "al-aziz",
    explanation:
      "The one to whom belongs might and honour in its entirety, the might and honour of strength, of conquest and of prevention. He has prevented any of His creation from encompassing and grasping Him, He is Omnipotent over everything that is in existence, the whole of creation is subject and indebted to Him, yielding before His greatness.",
    quranicVerses: [
      {
        text: "[It will be said], 'Seize him and drag him into the midst of the blazing Fire. Then pour over his head the torment of boiling water. Taste you this! Indeed you were [pretending to be] al-'Aziz, the Kind!'",
        reference: "ad-Dukhan (44): 47-49",
      },
      {
        text: "Blessed be He in Whose Hand is the dominion, and He is Able to do all things. Who has created death and life that He may test which of you is best in deed, He is al-'Aziz, the Ever Forgiving.",
        reference: "al-Mulk (67): 1-2",
      },
    ],
    source: SOURCE,
  },

  "al-qawiyy": {
    nameId: "al-qawiyy",
    groupedWith: ["al-mateen"],
    explanation: "These fall under the meaning of al-'Aziz.",
    quranicVerses: [
      {
        text: "Those who have been expelled from their homes unjustly only because they said, 'our Lord is Allah' - for had it not been that Allah checks one set of people by means of another, monasteries, churches, synagogues and mosques, wherein the Name of Allah is mentioned much, would have been pulled down and destroyed. Indeed Allah will help those who help Him and Allah is Qawi, the Almighty.",
        reference: "al-Hajj (22): 40",
      },
    ],
    source: SOURCE,
  },

  "al-mateen": {
    nameId: "al-mateen",
    groupedWith: ["al-qawiyy"],
    explanation: "These fall under the meaning of al-'Aziz.",
    quranicVerses: [
      {
        text: "Indeed Allah is the Provider, Owner of Strength, al-Matin.",
        reference: "adh-Dhariyat (51): 57",
      },
    ],
    source: SOURCE,
  },

  "al-jabbar": {
    nameId: "al-jabbar",
    explanation:
      "This includes the meaning of al-'Ali and al-A'la, the meaning of al-Qahhar, and the meaning of ar-Ra'uf. The one who kindly treats and cures dejected hearts, the one who strengthens the weak and impotent, the one who protects and shelters those who resort to Him and seek refuge with Him.",
    quranicVerses: [
      {
        text: "He is Allah, other than whom none has the right to be worshipped. The King, the Holy, as-Salam, the Giver of Security, the Ever-Watcher, the Almighty, the Compeller, the Supreme. Glory be to Allah! [High is He] above all that they associate as partners with Him.",
        reference: "al-Hashr (59): 23",
      },
    ],
    source: SOURCE,
  },

  "al-mutakabbir": {
    nameId: "al-mutakabbir",
    explanation:
      "The one who is above any evil, defect and deficiency due to His greatness and grandeur.",
    quranicVerses: [
      {
        text: "He is Allah, other than whom none has the right to be worshipped. The King, the Holy, as-Salam, the Giver of Security, the Ever-Watcher, the Almighty, the Compeller, the Supreme. Glory be to Allah! [High is He] above all that they associate as partners with Him.",
        reference: "al-Hashr (59): 23",
      },
    ],
    source: SOURCE,
  },

  "al-khaliq": {
    nameId: "al-khaliq",
    groupedWith: ["al-bari", "al-musawwir"],
    explanation:
      "The one who created all that is in existence and originated it, who made everything correct and in its place in accordance to the dictates of His wisdom, who shaped everything by virtue of His praise and wisdom. He is continuously doing so.",
    quranicVerses: [
      {
        text: "He is Allah, the Creator, the Originator, the Bestower of forms. To Him belong the Most Beautiful Names. Whatsoever is in the heavens and the earth glorifies Him. He is the Almighty, the All-Wise.",
        reference: "al-Hashr (59): 24",
      },
    ],
    source: SOURCE,
  },

  "al-bari": {
    nameId: "al-bari",
    groupedWith: ["al-khaliq", "al-musawwir"],
    explanation:
      "The one who created all that is in existence and originated it, who made everything correct and in its place in accordance to the dictates of His wisdom, who shaped everything by virtue of His praise and wisdom. He is continuously doing so.",
    quranicVerses: [
      {
        text: "He is Allah, the Creator, the Originator, the Bestower of forms. To Him belong the Most Beautiful Names. Whatsoever is in the heavens and the earth glorifies Him. He is the Almighty, the All-Wise.",
        reference: "al-Hashr (59): 24",
      },
    ],
    source: SOURCE,
  },

  "al-musawwir": {
    nameId: "al-musawwir",
    groupedWith: ["al-khaliq", "al-bari"],
    explanation:
      "The one who created all that is in existence and originated it, who made everything correct and in its place in accordance to the dictates of His wisdom, who shaped everything by virtue of His praise and wisdom. He is continuously doing so.",
    quranicVerses: [
      {
        text: "He is Allah, the Creator, the Originator, the Bestower of forms. To Him belong the Most Beautiful Names. Whatsoever is in the heavens and the earth glorifies Him. He is the Almighty, the All-Wise.",
        reference: "al-Hashr (59): 24",
      },
    ],
    source: SOURCE,
  },

  "al-mumin": {
    nameId: "al-mumin",
    explanation:
      "The one who has praised Himself with perfect Attributes and with the perfection of magnificence and beauty. The one who sent His Messengers and revealed His Books along with signs and clear proofs. The one who testified to the truth of His Messengers by giving them every sign and proof that would certify the truth of what they came with.",
    quranicVerses: [
      {
        text: "He is Allah, other than whom none has the right to be worshipped. The King, the Holy, as-Salam, the Giver of Security, the Ever-Watcher, the Almighty, the Compeller, the Supreme. Glory be to Allah! [High is He] above all that they associate as partners with Him.",
        reference: "al-Hashr (59): 23",
      },
    ],
    source: SOURCE,
  },

  "al-muhaymin": {
    nameId: "al-muhaymin",
    explanation:
      "The one who sees all the hidden matters, all that the hearts keep concealed, the one whose knowledge encompasses everything.",
    quranicVerses: [
      {
        text: "He is Allah, other than whom none has the right to be worshipped. The King, the Holy, as-Salam, the Giver of Security, the Ever-Watcher, the Almighty, the Compeller, the Supreme. Glory be to Allah! [High is He] above all that they associate as partners with Him.",
        reference: "al-Hashr (59): 23",
      },
    ],
    source: SOURCE,
  },

  "al-qadir": {
    nameId: "al-qadir",
    explanation:
      "The one who has complete and perfect power and ability. By His power He brought everything into existence, by it He arranges all the affairs, by it He fashioned and perfected the creation, by it He brings to life and causes to die, by it He will resurrect the servants for their recompense - rewarding the one who did good with His good and the one who worked evil with His Hellfire. The one who, when He wills a thing to be, merely says, 'Be!' And it is. By His power and ability He turns the hearts and directs them to whatsoever He Wills and Desires.",
    quranicVerses: [
      {
        text: "For every nation there is a direction which they face, so hasten towards all that is good. Wherever you may be, Allah will bring you together, Allah is Qadir over all things.",
        reference: "al-Baqarah (2): 148",
      },
      {
        text: "[What is the matter with you?] When a single disaster smites you, although you smote (your enemies) with one twice as great, you say, 'From where does this come to us?' Say, 'It is from yourselves [because of your evil deeds].' And Allah is Qadir over all things.",
        reference: "Ali 'Imran (3): 165",
      },
    ],
    source: SOURCE,
  },

  "al-lateef": {
    nameId: "al-lateef",
    explanation:
      "The one whose knowledge encompasses all the secret and hidden matters, the one who is aware of all that is hidden [in the deepest depths of the heavens and the earth] and is aware of everything down to the most minute and finest detail. The one who is kind to His believing servants, guiding them to that which would benefit them and aid them via means that they are not aware, this by His kindness and beneficence. It also carries the meaning of al-Khabir and ar-Ra'uf.",
    quranicVerses: [
      {
        text: "No vision can grasp Him, but His Grasp is over all vision. He is al-Latif, the All-Aware.",
        reference: "al-An'am (6): 103",
      },
      {
        text: "Do you not see that Allah sends down the water from the sky and then the earth becomes green? Indeed Allah is Latif, the All-Aware.",
        reference: "al-Hajj (22): 63",
      },
    ],
    source: SOURCE,
  },

  "al-haseeb": {
    nameId: "al-haseeb",
    explanation:
      "The one who is All-Knowing of His servants and sufficient for those who put their trust in Him. The one who recompenses His servants with either good or bad based upon His wisdom and knowledge of the finest details of their actions.",
    quranicVerses: [
      {
        text: "When you are greeted with a greeting, greet in return with what is better than it or at least return it equally. Allah is Hasib of all things.",
        reference: "an-Nisa' (4): 86",
      },
      {
        text: "Those who convey the Message of Allah and fear Him and none save Him, sufficient is Allah as Hasib.",
        reference: "al-Ahzab (33): 39",
      },
    ],
    source: SOURCE,
  },

  "ar-raqeeb": {
    nameId: "ar-raqeeb",
    explanation:
      "The one who sees what is hidden in the hearts, the one who charges every soul for what it earned, the one who preserves all that is in creation and regulates them with the best of organisation and the most complete and perfect planning.",
    quranicVerses: [
      {
        text: "O Mankind! Be dutiful to your Lord Who created you from a single person, and from Him He created his wife, and from them both He created many men and women. Fear Allah through whom you demand your mutual rights, and [do not cut the relations of] the womb [kinship]. Surely Allah is Raqib over you.",
        reference: "an-Nisa' (4): 1",
      },
    ],
    source: SOURCE,
  },

  "al-hafeez": {
    nameId: "al-hafeez",
    explanation:
      "The one who protects and preserves what He created and whose knowledge encompasses all that He brought into existence. The one who protects His friends from falling into sins and the destructive matters. The one who is kind to them during their periods of activity and rest. The one who accounts the actions of the servants and their rewards.",
    quranicVerses: [
      {
        text: "And Iblis did prove true his thought about them, and they followed him, all except a group of the true believers. For Iblis had no authority over them - except that We might test him who believes in the Hereafter from him who is in doubt about it. And your Lord is Hafiz over everything.",
        reference: "Saba' (34): 20-21",
      },
      {
        text: "He said, 'How will my trusting him to your care be different from entrusting his brother before?' However Allah is the best Hafiz.",
        reference: "Yusuf (12): 64",
      },
    ],
    source: SOURCE,
  },

  "al-muheet": {
    nameId: "al-muheet",
    explanation:
      "The one who has knowledge of everything, has power over everything, His mercy encompasses everything and He is dominant over everything.",
    quranicVerses: [
      {
        text: "If good befalls you it grieves them, but if some evil overtakes you they rejoice at it. But if you remain patient and become of the God-fearing, not the least harm will their cunning do to you. Allah is Muhit of what they do.",
        reference: "Ali 'Imran (3): 120",
      },
      {
        text: "And be not like those who come out of their homes boastfully to be seen of men, and hinder from the Path of Allah. Allah is Muhit of all that they do.",
        reference: "al-Anfal (8): 47",
      },
    ],
    source: SOURCE,
  },

  "al-qahhar": {
    nameId: "al-qahhar",
    explanation:
      "The one who has subdued everything. The one before whom the whole creation has humbled itself, and submitted before His grandeur, power and perfect strength.",
    quranicVerses: [
      {
        text: "And He is al-Qahir, above His servants. He sends guardians [writing all of your deeds] over you, until when death approaches one of you, Our Messengers take his soul and they never neglect their duty.",
        reference: "al-An'am (6): 61",
      },
      {
        text: "So think not that Allah will fail to keep His promise to His Messengers. Certainly! Allah is Almighty, Owner of Retribution. On the Day when the earth will be changed to another earth and so will the heavens, and they [all creatures] will appear before Allah, the One, al-Qahhar.",
        reference: "Ibrahim (14): 47-48",
      },
    ],
    source: SOURCE,
  },

  "al-muqeet": {
    nameId: "al-muqeet",
    explanation:
      "The one who provides everything that is in existence with what would strengthen it, who provides it its nourishment and directs it howsoever He wills in accordance to His wisdom and praise.",
    quranicVerses: [
      {
        text: "Whosoever intercedes for a good cause will have the reward thereof, and whosoever intercedes for an evil cause shall have a share in its burden. Allah is Muqit over everything.",
        reference: "an-Nisa' (4): 85",
      },
    ],
    source: SOURCE,
  },

  "al-wakeel": {
    nameId: "al-wakeel",
    explanation:
      "The one who has the responsibility to dispose the affairs of the creation in accordance to His knowledge, perfect power and all-encompassing wisdom. The one who looks after His friends and makes the good easy for them, preserves them from evil and suffices for them in all of their affairs. Therefore the one who takes Him as one to be relied upon, He suffices him.",
    quranicVerses: [
      {
        text: "Allah is the Friend of those who believe, He guides them from the darknesses into the light.",
        reference: "al-Baqarah (2): 257",
      },
      {
        text: "Such is Allah your Lord! None has the right to be worshipped but He, the Creator of all things. So worship Him Alone, and He is the Wakil over everything.",
        reference: "al-An'am (6): 102",
      },
      {
        text: "And put your trust in Allah, for Allah is sufficient as Wakil.",
        reference: "al-Ahzab (33): 3",
      },
    ],
    source: SOURCE,
  },

  "dhul-jalali-wal-ikram": {
    nameId: "dhul-jalali-wal-ikram",
    explanation:
      "Meaning the one possessing greatness and grandeur, possessing mercy and generosity. The one who shows beneficence in both its general and specific aspects. The one who honours His friends and close ones - those who glorify, exalt and love Him.",
    quranicVerses: [
      {
        text: "Everything in the earth will perish. And the Face of your Lord, Dhu-l-Jalali wa-l-Ikram, will abide forever.",
        reference: "ar-Rahman (55): 27",
      },
      {
        text: "Blessed be the name of your Lord, Dhu-l-Jalali wa-l-Ikram.",
        reference: "ar-Rahman (55): 78",
      },
    ],
    source: SOURCE,
  },

  "al-wadud": {
    nameId: "al-wadud",
    explanation:
      "The one who loves His Prophets and Messengers and those who follow them, and they in turn love Him - He is more beloved to them than anything else. Their hearts have been filled with love of Him, their tongues are constantly moist with praising Him and their hearts are always drawn to Him in love, sincerity and repentance.",
    quranicVerses: [
      {
        text: "And ask forgiveness from your Lord and turn to Him in repentance. Verily my Lord is the Most Merciful, Wudud.",
        reference: "Hud (11): 90",
      },
      {
        text: "And He is Ever Forgiving, al-Wudud.",
        reference: "al-Buruj (85): 14",
      },
    ],
    source: SOURCE,
  },

  "al-fattah": {
    nameId: "al-fattah",
    explanation:
      "The one who will judge between His servants through His laws of the Shari'ah, His laws of decree and His laws of recompense. The one who opens the eyes of those who are truthful and sincere through His kindness. The one who opens their hearts so that they can know Him, love Him and repent to Him. He opens the doors of mercy and sustenance for His servants and provides them the means of attaining both the good in this life and the Hereafter.",
    quranicVerses: [
      {
        text: "Whatever mercy Allah may grant to mankind, none can withhold it; and whatever He withholds, none can grant it thereafter.",
        reference: "Fatir (35): 2",
      },
      {
        text: "Say: Our Lord will assemble us all together [on the Day of Resurrection], then He will judge between them. He is al-Fattah, the All-Knowing.",
        reference: "Saba' (34): 26",
      },
      {
        text: "He said: My Lord! Verily, my people have belied me. Therefore judge You between me and them, and save me and those of the believers who are with me.",
        reference: "ash-Shu'ara' (26): 117-118",
      },
    ],
    source: SOURCE,
  },

  "ar-razzaq": {
    nameId: "ar-razzaq",
    explanation:
      "The one who provides for all of His servants, there is not a creature on the earth except that Allah provides for it. His providing for His servants is of two types: 1) The general provision which extends to the righteous and the sinner, the first and the last. This is the provision that is required by the bodies. 2) The specific provision - this being granted to the hearts, nourishing them with knowledge and faith. Also the lawful provision that has been appointed for the benefit of the religion, this being specific to the believers and apportioned in accordance to their differing levels and what His wisdom and mercy dictate.",
    quranicVerses: [
      {
        text: "Say: Come I will recite to you what your Lord has prohibited you from: Join not anything in worship with Him; be good and dutiful to your parents; kill not your children because of poverty - We provide sustenance for you and for them; come not near shameful sins whether openly or secretly; kill not anyone who Allah has forbidden except for a just cause. This He has commanded you that you may understand.",
        reference: "al-An'am (6): 151",
      },
      {
        text: "I created man and jinn only that they may worship Me. I seek not any provisions from them nor do I ask that they feed Me. Indeed Allah is ar-Razzaq, Owner of Strength, the Powerful.",
        reference: "adh-Dhariyat (51): 56-58",
      },
    ],
    source: SOURCE,
  },

  "al-hakam": {
    nameId: "al-hakam",
    groupedWith: ["al-adl"],
    explanation:
      "The one who judges between His Servants in this life and the Hereafter with His justice and fairness. He will not oppress anyone to the extent of an atom's weight and none will be made to carry the encumbrance of another. No servant will be recompensed in a way that is greater than the magnitude of his sin, he will be given only what he deserves. Not a single person's right will be denied him, He is the Just in His regulation and decree.",
    quranicVerses: [
      {
        text: "Indeed My Lord is upon the Straight Path.",
        reference: "Hud (11): 56",
      },
      {
        text: "Say: I am on clear proof from my Lord, but you deny [the truth]. I do not have what you are impatient for (i.e. the Punishment). The judgement is only for Allah, He declares the truth, and He is the best of judges.",
        reference: "al-An'am (6): 57",
      },
    ],
    source: SOURCE,
  },

  "al-adl": {
    nameId: "al-adl",
    groupedWith: ["al-hakam"],
    explanation:
      "The one who judges between His Servants in this life and the Hereafter with His justice and fairness. He will not oppress anyone to the extent of an atom's weight and none will be made to carry the encumbrance of another. No servant will be recompensed in a way that is greater than the magnitude of his sin, he will be given only what he deserves. Not a single person's right will be denied him, He is the Just in His regulation and decree.",
    quranicVerses: [
      {
        text: "Indeed My Lord is upon the Straight Path.",
        reference: "Hud (11): 56",
      },
    ],
    source: SOURCE,
  },

  "al-jami": {
    nameId: "al-jami",
    explanation:
      "The one who will gather mankind on the Day about which there is no doubt. He will gather their actions and provisions and will not leave out a single thing, be it large or small, except that He will take it to account. He will gather together the disintegrated remains of those who have died, the early and later by His perfect power and all-encompassing knowledge, [and resurrect them].",
    quranicVerses: [
      {
        text: "Our Lord! Indeed it is You who are Jami'u-n-Nas on the Day about which there is no doubt! Verily Allah never breaks His promise!",
        reference: "Ali 'Imran (3): 9",
      },
      {
        text: "I swear by the Day of Resurrection. And I swear by the self-reproaching soul. Does man think that We shall not assemble his bones? Yes, We are able to put together in perfect order the very tips of his fingers.",
        reference: "al-Qiyamah (75): 1-4",
      },
    ],
    source: SOURCE,
  },

  "al-hayy": {
    nameId: "al-hayy",
    groupedWith: ["al-qayyum"],
    explanation:
      "The one who has perfect power, existing in and of Himself and not dependant upon anyone else. The sustainer of the inhabitants of the heavens and the earth, the one who regulates their affairs and provisions. The name al-Hayy includes all of the Attributes of His Self and the name al-Qayyum includes all the Attributes of His Actions.",
    quranicVerses: [
      {
        text: "Allah! There is no deity worthy of worship but Him, al-Hayy, al-Qayyum.",
        reference: "Ali 'Imran (3): 2",
      },
      {
        text: "All faces shall be humbled before [Allah], al-Hayy, al-Qayyum. And the one who carried the burden of wrong-doing shall be in complete loss!",
        reference: "Ta Ha (20): 111",
      },
    ],
    source: SOURCE,
  },

  "al-qayyum": {
    nameId: "al-qayyum",
    groupedWith: ["al-hayy"],
    explanation:
      "The one who has perfect power, existing in and of Himself and not dependant upon anyone else. The sustainer of the inhabitants of the heavens and the earth, the one who regulates their affairs and provisions. The name al-Hayy includes all of the Attributes of His Self and the name al-Qayyum includes all the Attributes of His Actions.",
    quranicVerses: [
      {
        text: "Allah! There is no deity worthy of worship but Him, al-Hayy, al-Qayyum.",
        reference: "Ali 'Imran (3): 2",
      },
      {
        text: "All faces shall be humbled before [Allah], al-Hayy, al-Qayyum. And the one who carried the burden of wrong-doing shall be in complete loss!",
        reference: "Ta Ha (20): 111",
      },
    ],
    source: SOURCE,
  },

  "an-nur": {
    nameId: "an-nur",
    explanation:
      "The Light of the heavens and the earth, the one who illuminates the hearts of the Gnostics with knowledge of Him, faith in Him and His guidance. He is the one who has lit the heavens and the earth with lights that He has placed therein. His veil is light and were He to uncover it, the sublimity and splendour of His Face would burn everything of the creation that His Sight fell upon.",
    quranicVerses: [
      {
        text: "Allah is the Light of the heavens and the earth. The parable of His Light is as if there were a niche and within it a lamp, the lamp is in a glass, and the glass as if it were a brilliant star, lit from a blessed tree, an olive, neither of the east or of the west, whose oil would almost glow forth [of itself] even though no fire touches it. Light upon light! Allah guides to His Light whom He Wills. Allah sets forth parables for mankind, and Allah Knows everything.",
        reference: "an-Nur (24): 35",
      },
    ],
    source: SOURCE,
  },

  "al-badi": {
    nameId: "al-badi",
    explanation:
      "Meaning their creator and originator, done so in the best of ways, with the most marvellous of creations, all in amazing and perfect order, structure and harmony.",
    quranicVerses: [
      {
        text: "Badi' u-s-Samawati wa-l-Ard, when He decrees a thing to be, He merely says: Be! - and it is.",
        reference: "al-Baqarah (2): 117",
      },
      {
        text: "Badi' u-s-Samawati wa-l-Ard, how can He have children when He has no consort? He created all things and He Knows everything.",
        reference: "al-An'am (6): 101",
      },
    ],
    source: SOURCE,
  },

  "al-qabid": {
    nameId: "al-qabid",
    groupedWith: ["al-basit"],
    explanation:
      "The one who takes the provisions and souls, the one who gives provisions freely and gives [life to] the hearts - all of this in compliance to His wisdom and mercy.",
    quranicVerses: [
      {
        text: "Who will lend to Allah a goodly loan so that He may multiply it for him many times? And it is Allah who takes and increases [your provisions] and unto Him you shall return.",
        reference: "al-Baqarah (2): 245",
      },
      {
        text: "And they made not a just estimate of Allah such as is due to Him. On the Day of Resurrection His Hand will grasp the whole of the earth and the heavens will be rolled up in His Right Hand. Glorified be He, High is He above all that they associate as partners with Him!",
        reference: "az-Zumar (39): 67",
      },
    ],
    source: SOURCE,
  },

  "al-basit": {
    nameId: "al-basit",
    groupedWith: ["al-qabid"],
    explanation:
      "The one who takes the provisions and souls, the one who gives provisions freely and gives [life to] the hearts - all of this in compliance to His wisdom and mercy.",
    quranicVerses: [
      {
        text: "Who will lend to Allah a goodly loan so that He may multiply it for him many times? And it is Allah who takes and increases [your provisions] and unto Him you shall return.",
        reference: "al-Baqarah (2): 245",
      },
    ],
    source: SOURCE,
  },

  "al-mutee": {
    nameId: "al-mutee",
    groupedWith: ["al-mani"],
    explanation:
      "There is none who can prevent what He gives and none who can give what He prevents. Every thing that can bring about good or benefit is sought and desired from Him. He is the one who gives to whomever He wills and prevents from whomever He wills, all of this in accordance to His wisdom and mercy.",
    quranicVerses: [],
    source: SOURCE,
  },

  "al-mani": {
    nameId: "al-mani",
    groupedWith: ["al-mutee"],
    explanation:
      "There is none who can prevent what He gives and none who can give what He prevents. Every thing that can bring about good or benefit is sought and desired from Him. He is the one who gives to whomever He wills and prevents from whomever He wills, all of this in accordance to His wisdom and mercy.",
    quranicVerses: [],
    source: SOURCE,
  },

  "ash-shaheed": {
    nameId: "ash-shaheed",
    explanation:
      "The one who is aware of everything. The one who hears every voice in existence - the loud and quiet. The one who sees everything in existence - the insignificant and significant, the small and large. The one whose knowledge encompasses everything. The one who will testify for or against His servants for what they did.",
    quranicVerses: [
      {
        text: "Say: What thing is the greatest witness? Say: Allah is Shahid between you and I; this Qur'an has been revealed to me that I may warn therewith - you and whomsoever it may reach.",
        reference: "al-An'am (6): 19",
      },
      {
        text: "It is He Who sent His Messenger with the guidance and the Religion of Truth that He make it prevail over all religions. And sufficient is Allah as a Shahid.",
        reference: "al-Fath (48): 28",
      },
    ],
    source: SOURCE,
  },

  "al-mubdi": {
    nameId: "al-mubdi",
    groupedWith: ["al-muid"],
    explanation:
      "He began their creation in order to test them as to which of them was best in action then He will recall them to reward those who did good and punish those who did evil for their evil. Similarly He is the one who began by creating each individual thing and then continuously repeats it.",
    quranicVerses: [
      {
        text: "He is the One Who started the creation and He will repeat it.",
        reference: "Yunus (10): 4",
      },
      {
        text: "Is not He [better than your false gods] Who originates creation and shall thereafter repeat it, and Who provides for you from the heaven and the earth?",
        reference: "an-Naml (27): 64",
      },
      {
        text: "Allah originates the creation and then repeats it.",
        reference: "al-Buruj (85): 13",
      },
    ],
    source: SOURCE,
  },

  "al-muid": {
    nameId: "al-muid",
    groupedWith: ["al-mubdi"],
    explanation:
      "He began their creation in order to test them as to which of them was best in action then He will recall them to reward those who did good and punish those who did evil for their evil. Similarly He is the one who began by creating each individual thing and then continuously repeats it.",
    quranicVerses: [
      {
        text: "He is the One Who started the creation and He will repeat it.",
        reference: "Yunus (10): 4",
      },
      {
        text: "Is not He [better than your false gods] Who originates creation and shall thereafter repeat it, and Who provides for you from the heaven and the earth?",
        reference: "an-Naml (27): 64",
      },
    ],
    source: SOURCE,
  },

  "al-ghaniyy": {
    nameId: "al-ghaniyy",
    groupedWith: ["al-mughni"],
    explanation:
      "He is Self-Sufficient completely and unrestrictedly, deference is given to His perfection and the perfection of His Attributes. He has absolutely no deficiency of any kind, it is not possible that He be anything but self-sufficient, for self-sufficiency is from the necessary consequences of His Person. Similarly it is not possible for Him to be anything but the Creator, the All-Powerful, the Provider and the Bestower of good. He is not in need of anything or anyone, He is the Self-Sufficient in whose Hand lie the treasures of the heavens and the earth, and the treasures of this life and the Hereafter. He suffices for the whole of His creation, and is sufficient for the believers of His creation in that He confers upon their hearts nurturing knowledge and the realities of faith.",
    quranicVerses: [
      {
        text: "Kind words and forgiving faults are better than giving in charity. Allah is the Ghani, the Forbearing.",
        reference: "al-Baqarah (2): 263",
      },
      {
        text: "And your Lord is al-Ghani, full of Mercy. If He Will He could destroy you and in your place make who He Will to be successors, just as He raised you from the seed of another people.",
        reference: "al-An'am (6): 133",
      },
    ],
    source: SOURCE,
  },

  "al-mughni": {
    nameId: "al-mughni",
    groupedWith: ["al-ghaniyy"],
    explanation:
      "He is Self-Sufficient completely and unrestrictedly, deference is given to His perfection and the perfection of His Attributes. He has absolutely no deficiency of any kind, it is not possible that He be anything but self-sufficient, for self-sufficiency is from the necessary consequences of His Person. He suffices for the whole of His creation, and is sufficient for the believers of His creation in that He confers upon their hearts nurturing knowledge and the realities of faith.",
    quranicVerses: [
      {
        text: "Kind words and forgiving faults are better than giving in charity. Allah is the Ghani, the Forbearing.",
        reference: "al-Baqarah (2): 263",
      },
    ],
    source: SOURCE,
  },

  "al-haleem": {
    nameId: "al-haleem",
    explanation:
      "The one who bestows favours, both outward and inward, lavishly to His creation despite their many acts of disobedience and transgression. He is gentle upon those who disobey Him and in censuring them so that perchance they may repent and gives them respite so that they may become penitent.",
    quranicVerses: [
      {
        text: "And know that Allah Knows what is in your minds, so fear Him. And know that Allah is Ever Forgiving, Halim.",
        reference: "al-Baqarah (2): 235",
      },
      {
        text: "If you lend to Allah a goodly loan He will multiply it for you and will forgive you. Allah is the Appreciative, Halim.",
        reference: "at-Taghabun (64): 17",
      },
    ],
    source: SOURCE,
  },

  "ash-shakur": {
    nameId: "ash-shakur",
    groupedWith: ["ash-shaakir"],
    explanation:
      "The one who recognises and rewards the small quantity of actions and the one who forgives the large quantity of sins. He is the one who multiplies the rewards of His sincere servants manifold without any measure. He is the one who recognises and rewards those who give thanks to Him and remembers the one who remembers Him. Whosoever seeks to get close to Him by doing any righteous action, Allah draws closer to Him by a greater degree.",
    quranicVerses: [
      {
        text: "Indeed as-Safa and al-Marwa are two of the symbols of Allah. So it is not a sin on him who performs Hajj or 'Umrah to perform the walking between them. And whoever does good voluntarily, then Allah is Shakir, the All-Knowing.",
        reference: "al-Baqarah (2): 158",
      },
      {
        text: "Indeed those who recite the Book of Allah, and establish the prayers and spend out of that which we have provided them, secretly and openly, hope for a sure trade-gain that will never perish. That He may pay them in full and give them even more out of His Grace. He is the Ever Forgiving, Shakur.",
        reference: "Fatir (35): 29-30",
      },
    ],
    source: SOURCE,
  },

  "ash-shaakir": {
    nameId: "ash-shaakir",
    groupedWith: ["ash-shakur"],
    explanation:
      "The one who recognises and rewards the small quantity of actions and the one who forgives the large quantity of sins. He is the one who multiplies the rewards of His sincere servants manifold without any measure. He is the one who recognises and rewards those who give thanks to Him and remembers the one who remembers Him. Whosoever seeks to get close to Him by doing any righteous action, Allah draws closer to Him by a greater degree.",
    quranicVerses: [
      {
        text: "Indeed as-Safa and al-Marwa are two of the symbols of Allah. So it is not a sin on him who performs Hajj or 'Umrah to perform the walking between them. And whoever does good voluntarily, then Allah is Shakir, the All-Knowing.",
        reference: "al-Baqarah (2): 158",
      },
    ],
    source: SOURCE,
  },

  "al-qareeb": {
    nameId: "al-qareeb",
    groupedWith: ["al-mujeeb"],
    explanation:
      "He, Exalted is He, is close to everybody, this closeness being of two types: 1) The general closeness which means His being close to everyone with respect to His knowledge, awareness, seeing, witnessing and encompassing. 2) The specific closeness which is specific to His worshippers, those who ask of Him and those who love Him. The reality of this type of closeness cannot be comprehended, all we can see is its resultant effects - His kindness to His servants, His aiding them and His making them to be firm upon the Straight Path. From the consequences of this closeness is His answering those who supplicate to Him and His granting them the ability to be penitent. He is the One who answers, in a general sense, those who supplicate to Him whoever they may be, wherever they may be and whatever condition they may be in as He has promised. He is the One who answers, in a specific sense, those who love Him, those who imitate and follow His Shari'ah. He is also the One who answers the one in dire need and those who have given up all hope of being answered by the creation and therefore their connection to Him has been strengthened in terms of love, hope and fear.",
    quranicVerses: [
      {
        text: "And when My slaves ask you concerning Me, I am indeed near to them. I respond to the invocations of the supplicant when He calls upon Me. So let them obey Me and believe in Me so that they may be led aright.",
        reference: "al-Baqarah (2): 186",
      },
      {
        text: "And to the Thamud We sent their brother Salih saying, 'O my people! Worship Allah besides whom there is no other deity. He brought you forth from the earth and settled you therein, then ask forgiveness of Him, and turn to Him in repentance. Certainly my Lord is Qarib, Mujib.'",
        reference: "Hud (11): 61",
      },
    ],
    source: SOURCE,
  },

  "al-mujeeb": {
    nameId: "al-mujeeb",
    groupedWith: ["al-qareeb"],
    explanation:
      "He, Exalted is He, is close to everybody, this closeness being of two types: 1) The general closeness which means His being close to everyone with respect to His knowledge, awareness, seeing, witnessing and encompassing. 2) The specific closeness which is specific to His worshippers, those who ask of Him and those who love Him. From the consequences of this closeness is His answering those who supplicate to Him and His granting them the ability to be penitent. He is the One who answers, in a general sense, those who supplicate to Him whoever they may be, wherever they may be and whatever condition they may be in as He has promised. He is the One who answers, in a specific sense, those who love Him, those who imitate and follow His Shari'ah. He is also the One who answers the one in dire need and those who have given up all hope of being answered by the creation and therefore their connection to Him has been strengthened in terms of love, hope and fear.",
    quranicVerses: [
      {
        text: "And when My slaves ask you concerning Me, I am indeed near to them. I respond to the invocations of the supplicant when He calls upon Me. So let them obey Me and believe in Me so that they may be led aright.",
        reference: "al-Baqarah (2): 186",
      },
      {
        text: "Certainly my Lord is Qarib, Mujib.",
        reference: "Hud (11): 61",
      },
    ],
    source: SOURCE,
  },

  "al-awwal": {
    nameId: "al-awwal",
    groupedWith: ["al-akhir", "az-zahir", "al-batin"],
    explanation:
      "The Prophet (peace be upon him) explained these in a succinct and clear way while addressing his Lord, \"You are the First, there was none before You. You are the Last, there will be none after You. You are the Manifest, there is nothing above You. You are the Inward, there is nothing closer than You.\"",
    quranicVerses: [
      {
        text: "He is the First, the Last, the Manifest and the Inward. He is the All-Knower of everything.",
        reference: "al-Hadid (57): 3",
      },
    ],
    source: SOURCE,
  },

  "al-akhir": {
    nameId: "al-akhir",
    groupedWith: ["al-awwal", "az-zahir", "al-batin"],
    explanation:
      "The Prophet (peace be upon him) explained these in a succinct and clear way while addressing his Lord, \"You are the First, there was none before You. You are the Last, there will be none after You. You are the Manifest, there is nothing above You. You are the Inward, there is nothing closer than You.\"",
    quranicVerses: [
      {
        text: "He is the First, the Last, the Manifest and the Inward. He is the All-Knower of everything.",
        reference: "al-Hadid (57): 3",
      },
    ],
    source: SOURCE,
  },

  "az-zahir": {
    nameId: "az-zahir",
    groupedWith: ["al-awwal", "al-akhir", "al-batin"],
    explanation:
      "The Prophet (peace be upon him) explained these in a succinct and clear way while addressing his Lord, \"You are the First, there was none before You. You are the Last, there will be none after You. You are the Manifest, there is nothing above You. You are the Inward, there is nothing closer than You.\"",
    quranicVerses: [
      {
        text: "He is the First, the Last, the Manifest and the Inward. He is the All-Knower of everything.",
        reference: "al-Hadid (57): 3",
      },
    ],
    source: SOURCE,
  },

  "al-batin": {
    nameId: "al-batin",
    groupedWith: ["al-awwal", "al-akhir", "az-zahir"],
    explanation:
      "The Prophet (peace be upon him) explained these in a succinct and clear way while addressing his Lord, \"You are the First, there was none before You. You are the Last, there will be none after You. You are the Manifest, there is nothing above You. You are the Inward, there is nothing closer than You.\"",
    quranicVerses: [
      {
        text: "He is the First, the Last, the Manifest and the Inward. He is the All-Knower of everything.",
        reference: "al-Hadid (57): 3",
      },
    ],
    source: SOURCE,
  },

  "al-wasi": {
    nameId: "al-wasi",
    explanation:
      "He is the one who is vast with respect to His Attributes and qualities and those things linked to them - this from the point of view that none can enumerate His praise as He deserves, rather He is as He has praised Himself. Vast in grandeur, authority and dominion, vast in bestowing grace and good, great in majesty and nobility.",
    quranicVerses: [
      {
        text: "The likeness of those who spend their wealth in the Way of Allah, is as the likeness of a grain (of corn); it grows seven ears, and each ear has a hundred grains. Allah gives manifold increase to whom He pleases. Allah is Wasi', the All-Knowing.",
        reference: "al-Baqarah (2): 261",
      },
      {
        text: "O you who believe! Whoever from amongst you turns back from his religion, Allah will bring about a people whom He will Love, and they will love Him; humble towards the believers, stern towards the disbelievers, fighting in the Way of Allah and never afraid of the blame of the blamers. That is the Grace of Allah which He bestows on whom He Wills. Allah is Wasi', the All-Knowing.",
        reference: "al-Ma'idah (5): 54",
      },
    ],
    source: SOURCE,
  },

  "al-hadi": {
    nameId: "al-hadi",
    groupedWith: ["ar-rasheed"],
    explanation:
      "He is the one who guides and directs His servants towards all that would be of benefit to them and away from all that would bring them harm. He is the one who teaches them what they did not previously know and guides them with a guidance that keeps them firm upon the Straight Path. He is the one who inspires their hearts with taqwa and makes them penitent and compliant to His commands. Ar-Rashid also carries the meaning of al-Hakim (the Wise). He is ar-Rashid in His Actions and Sayings. All of His legislation is good, correctly guiding and wise, His creation contains some wisdom.",
    quranicVerses: [
      {
        text: "Thus have We made for every Prophet an enemy amongst the disbelievers. But sufficient is your Lord as Hadi and Helper.",
        reference: "al-Furqan (25): 31",
      },
    ],
    source: SOURCE,
  },

  "ar-rasheed": {
    nameId: "ar-rasheed",
    groupedWith: ["al-hadi"],
    explanation:
      "He is the one who guides and directs His servants towards all that would be of benefit to them and away from all that would bring them harm. He is the one who teaches them what they did not previously know and guides them with a guidance that keeps them firm upon the Straight Path. He is the one who inspires their hearts with taqwa and makes them penitent and compliant to His commands. Ar-Rashid also carries the meaning of al-Hakim (the Wise). He is ar-Rashid in His Actions and Sayings. All of His legislation is good, correctly guiding and wise, His creation contains some wisdom.",
    quranicVerses: [
      {
        text: "Thus have We made for every Prophet an enemy amongst the disbelievers. But sufficient is your Lord as Hadi and Helper.",
        reference: "al-Furqan (25): 31",
      },
    ],
    source: SOURCE,
  },

  "al-haqq": {
    nameId: "al-haqq",
    explanation:
      "He is the Truth in His Person and Attributes, He is the most necessary of existences, He is what the whole of existence needs to exist. He has perfect Attributes. He is the one who was, and is, described with magnificence, beauty and perfection. He is the one who was and is known to be beneficent. His saying is the truth, His Actions are the truth, the meeting with Him is the truth, His Messengers are the truth, His Books are the truth, His religion is the truth, worshipping Him alone is the truth, everything that has to do with Him is the truth. This is because Allah is the Truth and what they supplicate to besides Him is false and invalid and because Allah is the Most High, the Great.",
    quranicVerses: [
      {
        text: "And say: the Truth is from your Lord, so let whosoever who wills believe, and whosoever who wills disbelieve.",
        reference: "al-Kahf (18): 29",
      },
      {
        text: "And what is there after truth apart from falsehood?",
        reference: "Yunus (10): 32",
      },
      {
        text: "Say: the truth has come and falsehood has departed, indeed falsehood by its nature is bound to depart.",
        reference: "al-Isra' (17): 81",
      },
    ],
    source: SOURCE,
  },

  // === Additional Names from ibn 'Uthaymin (pp. 96-102) ===

  "al-aalim": {
    nameId: "al-aalim",
    explanation:
      "The 'Alim of the unseen and visible.",
    quranicVerses: [
      {
        text: "The 'Alim of the unseen and visible...",
        reference: "al-An'am (6): 73",
      },
    ],
    source: SOURCE + " (Additional Names from ibn 'Uthaymin)",
  },

  "al-hafee": {
    nameId: "al-hafee",
    explanation:
      "He has always been Hafi — kind and gracious.",
    quranicVerses: [
      {
        text: "He said, 'peace be upon you. I will ask my Lord to forgive you.' He has always been Hafi to me.",
        reference: "Maryam (19): 47",
      },
    ],
    source: SOURCE + " (Additional Names from ibn 'Uthaymin)",
  },

  "al-akram": {
    nameId: "al-akram",
    explanation: "The Most Generous.",
    quranicVerses: [
      {
        text: "Recite: and your Lord is al-Akram.",
        reference: "al-'Alaq (96): 3",
      },
    ],
    source: SOURCE + " (Additional Names from ibn 'Uthaymin)",
  },

  "al-ilaah": {
    nameId: "al-ilaah",
    explanation: "The True God, the one who is truly worthy of worship.",
    quranicVerses: [
      {
        text: "Or were you present when death came to Jacob and he said to his sons, 'what will you worship when I have gone?' They said, 'we will worship your Ilah, the Ilah of your forefathers - Ibrahim, Isma'il, Ishaq, one Ilah and we are Muslims having submitted to Him.'",
        reference: "al-Baqarah (2): 133",
      },
    ],
    source: SOURCE + " (Additional Names from ibn 'Uthaymin)",
  },

  "al-khallaaq": {
    nameId: "al-khallaaq",
    explanation: "The Creator, in the intensive form denoting continuous creation.",
    quranicVerses: [
      {
        text: "Your Lord, He is al-Khallaq, the All-Knowing.",
        reference: "al-Hijr (15): 86",
      },
    ],
    source: SOURCE + " (Additional Names from ibn 'Uthaymin)",
  },

  "al-maleek": {
    nameId: "al-maleek",
    explanation: "The Sovereign, the All-Powerful King.",
    quranicVerses: [
      {
        text: "The pious and God-fearing will be amid Gardens and rivers, on seats of honour in the presence of an All-Powerful Malik.",
        reference: "al-Qamar (54): 54-55",
      },
    ],
    source: SOURCE + " (Additional Names from ibn 'Uthaymin)",
  },

  "al-mawlaa": {
    nameId: "al-mawlaa",
    explanation: "The Master and Supporter.",
    quranicVerses: [
      {
        text: "...our Lord, do not place on us a load we have not the strength to bear! Pardon us, forgive us and have mercy on us. You are our Mawla, so help us against the disbelievers.",
        reference: "al-Baqarah (2): 286",
      },
    ],
    source: SOURCE + " (Additional Names from ibn 'Uthaymin)",
  },

  "al-muqtadir": {
    nameId: "al-muqtadir",
    explanation: "The All-Able, the One who has absolute power.",
    quranicVerses: [
      {
        text: "Strike a metaphor for them of the life of the world, it is like water which We send down from the sky and the plants of the earth combine with it but then become dry chaff scattered by the winds. Allah is Muqtadir over everything.",
        reference: "al-Kahf (18): 45",
      },
    ],
    source: SOURCE + " (Additional Names from ibn 'Uthaymin)",
  },

  "al-mutaali": {
    nameId: "al-mutaali",
    explanation: "The High-Exalted.",
    quranicVerses: [
      {
        text: "The Knower of the unseen and the visible, the Great, al-Muta'al.",
        reference: "ar-Ra'd (13): 9",
      },
    ],
    source: SOURCE + " (Additional Names from ibn 'Uthaymin)",
  },

  "al-warith": {
    nameId: "al-warith",
    explanation: "The Inheritor.",
    quranicVerses: [
      {
        text: "It is We who give life and cause to die and We are the Warith.",
        reference: "al-Hijr (15): 23",
      },
    ],
    source: SOURCE + " (Additional Names from ibn 'Uthaymin)",
  },

  "al-wali": {
    nameId: "al-wali",
    explanation: "The Protector and Supporter.",
    quranicVerses: [
      {
        text: "Have they taken others besides Him as protectors? But Allah is the Wali, He gives life to the dead and has power over all things.",
        reference: "ash-Shura (42): 9",
      },
    ],
    source: SOURCE + " (Additional Names from ibn 'Uthaymin)",
  },

  "al-wali-alt": {
    nameId: "al-wali-alt",
    explanation: "The Protector and Supporter.",
    quranicVerses: [
      {
        text: "Have they taken others besides Him as protectors? But Allah is the Wali, He gives life to the dead and has power over all things.",
        reference: "ash-Shura (42): 9",
      },
    ],
    source: SOURCE + " (Additional Names from ibn 'Uthaymin)",
  },

  "an-naseer": {
    nameId: "an-naseer",
    explanation: "The Helper.",
    quranicVerses: [
      {
        text: "Do you not know that Allah is He to whom the kingdom of the heavens and the earth belongs and that, besides Allah, you have no protector and no Nasir?",
        reference: "al-Baqarah (2): 107",
      },
    ],
    source: SOURCE + " (Additional Names from ibn 'Uthaymin)",
  },
};

export function getScholarlyExplanation(
  nameId: string
): ScholarlyExplanation | undefined {
  return scholarlyExplanationsDb[nameId];
}
