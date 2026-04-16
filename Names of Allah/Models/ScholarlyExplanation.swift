//
//  ScholarlyExplanation.swift
//  Names of Allah
//
//  Scholarly explanations from "Explanation to the Beautiful and Perfect Names of Allah"
//  By Shaykh Abu 'Abdu-r-Rahman Nasir as-Sa'di (d.1376H)
//  Translated by Abu Rumaysah, Daar Us-Sunnah Publishers
//

import Foundation

struct QuranicVerse {
    let text: String
    let reference: String
}

struct ScholarlyExplanation {
    let nameId: String
    let groupedWith: [String]?
    let explanation: String
    let quranicVerses: [QuranicVerse]
    let source: String
}

// MARK: - Scholarly Explanations Database
struct ScholarlyExplanationsDatabase {
    static let source = "Explanation to the Beautiful and Perfect Names of Allah — Shaykh as-Sa'di (d.1376H), translated by Abu Rumaysah, Daar Us-Sunnah Publishers"

    static let all: [String: ScholarlyExplanation] = [
        "ar-rahman": ScholarlyExplanation(
            nameId: "ar-rahman",
            groupedWith: ["ar-raheem", "al-barr", "al-kareem", "ar-rauf", "al-wahhab"],
            explanation: "All of these Names are close in meaning and all of them point to describing the Lord with mercy, generosity and kindness. They point to the great expanse of His mercy and gifts that encompass all that is existence, being granted in accordance to the dictates of His wisdom. The believers have been specifically singled out for this and they are granted a goodly and the best portion of this. All blessings and the various aspects of beneficence are from the effects of His mercy, generosity and kindness just as all beneficence in this world and in the Hereafter is from the effects of His mercy.",
            quranicVerses: [
                QuranicVerse(text: "My mercy encompasses all things and I shall decree it for those who have taqwa.", reference: "al-A'raf (7): 156"),
                QuranicVerse(text: "Ar-Rahman. He taught the Qur'an and created mankind.", reference: "ar-Rahman (55): 1-3"),
            ],
            source: source
        ),
        "ar-raheem": ScholarlyExplanation(
            nameId: "ar-raheem",
            groupedWith: ["ar-rahman", "al-barr", "al-kareem", "ar-rauf", "al-wahhab"],
            explanation: "All of these Names are close in meaning and all of them point to describing the Lord with mercy, generosity and kindness. They point to the great expanse of His mercy and gifts that encompass all that is existence, being granted in accordance to the dictates of His wisdom. The believers have been specifically singled out for this and they are granted a goodly and the best portion of this.",
            quranicVerses: [
                QuranicVerse(text: "My mercy encompasses all things and I shall decree it for those who have taqwa.", reference: "al-A'raf (7): 156"),
            ],
            source: source
        ),
        "al-malik": ScholarlyExplanation(
            nameId: "al-malik",
            groupedWith: nil,
            explanation: "He is described with the Attribute of being the Master and Owner. These are Attributes describing His grandeur, glory and majesty, omnipotence and His governance and regulation of the affairs. He is the one who directs all of the affairs to do with creation, command and recompense. To Him belongs the whole of creation, all of it is subservient to Him, owned by Him and in continuous need of Him.",
            quranicVerses: [
                QuranicVerse(text: "Then High exalted be Allah, al-Malik, the Truth. Do not be in haste with the Qur'an before its revelation is completed to you and say, 'My Lord! Increase me in knowledge.'", reference: "Ta Ha (20): 114"),
                QuranicVerse(text: "Say: O Allah! Malik of the kingdom, You give sovereignty to whom You will and You take sovereignty from whom You will. You exalt whom You will and You humiliate whom You will. In your Hand is [all] good, indeed You have power over all things.", reference: "Ali 'Imran (3): 26"),
            ],
            source: source
        ),
        "al-quddus": ScholarlyExplanation(
            nameId: "al-quddus",
            groupedWith: ["as-salaam"],
            explanation: "The one who is far greater and far removed from any imperfection, or that He resemble any of His creation. Hence He is far removed from any defect just as He is far removed from anything resembling Him or coming close to resembling Him in any of His Attributes of perfection. Al-Quddus is similar in meaning to as-Salam in that they both negate any form of imperfection while at the same time including unlimited perfection in every way.",
            quranicVerses: [
                QuranicVerse(text: "There is nothing like Him.", reference: "ash-Shura (42): 11"),
                QuranicVerse(text: "Whatsoever is in the heavens and the earth glorifies Allah - the King, al-Quddus, the Almighty, the All-Wise.", reference: "al-Jumu'ah (62): 1"),
            ],
            source: source
        ),
        "al-mumin": ScholarlyExplanation(
            nameId: "al-mumin",
            groupedWith: nil,
            explanation: "The one who has praised Himself with perfect Attributes and with the perfection of magnificence and beauty. The one who sent His Messengers and revealed His Books along with signs and clear proofs. The one who testified to the truth of His Messengers by giving them every sign and proof that would certify the truth of what they came with.",
            quranicVerses: [
                QuranicVerse(text: "He is Allah, other than whom none has the right to be worshipped. The King, the Holy, as-Salam, the Giver of Security, the Ever-Watcher, the Almighty, the Compeller, the Supreme.", reference: "al-Hashr (59): 23"),
            ],
            source: source
        ),
        "al-muhaymin": ScholarlyExplanation(
            nameId: "al-muhaymin",
            groupedWith: nil,
            explanation: "The one who sees all the hidden matters, all that the hearts keep concealed, the one whose knowledge encompasses everything.",
            quranicVerses: [
                QuranicVerse(text: "He is Allah, other than whom none has the right to be worshipped. The King, the Holy, as-Salam, the Giver of Security, the Ever-Watcher, the Almighty, the Compeller, the Supreme.", reference: "al-Hashr (59): 23"),
            ],
            source: source
        ),
        "al-aziz": ScholarlyExplanation(
            nameId: "al-aziz",
            groupedWith: nil,
            explanation: "The one to whom belongs might and honour in its entirety, the might and honour of strength, of conquest and of prevention. He has prevented any of His creation from encompassing and grasping Him, He is Omnipotent over everything that is in existence, the whole of creation is subject and indebted to Him, yielding before His greatness.",
            quranicVerses: [
                QuranicVerse(text: "Blessed be He in Whose Hand is the dominion, and He is Able to do all things. Who has created death and life that He may test which of you is best in deed, He is al-'Aziz, the Ever Forgiving.", reference: "al-Mulk (67): 1-2"),
            ],
            source: source
        ),
        "al-jabbar": ScholarlyExplanation(
            nameId: "al-jabbar",
            groupedWith: nil,
            explanation: "This includes the meaning of al-'Ali and al-A'la, the meaning of al-Qahhar, and the meaning of ar-Ra'uf. The one who kindly treats and cures dejected hearts, the one who strengthens the weak and impotent, the one who protects and shelters those who resort to Him and seek refuge with Him.",
            quranicVerses: [
                QuranicVerse(text: "He is Allah, other than whom none has the right to be worshipped. The King, the Holy, as-Salam, the Giver of Security, the Ever-Watcher, the Almighty, the Compeller, the Supreme.", reference: "al-Hashr (59): 23"),
            ],
            source: source
        ),
        "al-mutakabbir": ScholarlyExplanation(
            nameId: "al-mutakabbir",
            groupedWith: nil,
            explanation: "The one who is above any evil, defect and deficiency due to His greatness and grandeur.",
            quranicVerses: [
                QuranicVerse(text: "He is Allah, other than whom none has the right to be worshipped. The King, the Holy, as-Salam, the Giver of Security, the Ever-Watcher, the Almighty, the Compeller, the Supreme.", reference: "al-Hashr (59): 23"),
            ],
            source: source
        ),
        "al-khaliq": ScholarlyExplanation(
            nameId: "al-khaliq",
            groupedWith: ["al-bari", "al-musawwir"],
            explanation: "The one who created all that is in existence and originated it, who made everything correct and in its place in accordance to the dictates of His wisdom, who shaped everything by virtue of His praise and wisdom. He is continuously doing so.",
            quranicVerses: [
                QuranicVerse(text: "He is Allah, the Creator, the Originator, the Bestower of forms. To Him belong the Most Beautiful Names.", reference: "al-Hashr (59): 24"),
            ],
            source: source
        ),
        "al-ghaffar": ScholarlyExplanation(
            nameId: "al-ghaffar",
            groupedWith: ["al-afuw", "al-ghafoor"],
            explanation: "The one who was, and is, known with the Attribute of forgiveness. The one who was, and is, described as showing forgiveness and clemency to His servants. Everyone is in dire need of His forgiveness just as they are in dire need of His mercy and kindness. Allah has promised forgiveness to the one who fulfils its conditions.",
            quranicVerses: [
                QuranicVerse(text: "And indeed I am All-Forgiving to him who repents, believes, does righteous deeds and then remains constant in doing them.", reference: "Ta Ha (20): 82"),
            ],
            source: source
        ),
        "al-wahhab": ScholarlyExplanation(
            nameId: "al-wahhab",
            groupedWith: ["ar-rahman", "ar-raheem"],
            explanation: "All of these Names are close in meaning and all of them point to describing the Lord with mercy, generosity and kindness. They point to the great expanse of His mercy and gifts that encompass all that is existence, being granted in accordance to the dictates of His wisdom.",
            quranicVerses: [
                QuranicVerse(text: "[They say]: Our Lord, let not our hearts deviate after You have guided us and grant us Mercy from You. Truly you are al-Wahhab.", reference: "Ali 'Imran (3): 8"),
            ],
            source: source
        ),
        "ar-razzaq": ScholarlyExplanation(
            nameId: "ar-razzaq",
            groupedWith: nil,
            explanation: "The one who provides for all of His servants, there is not a creature on the earth except that Allah provides for it. His providing for His servants is of two types: 1) The general provision which extends to the righteous and the sinner. This is the provision that is required by the bodies. 2) The specific provision - this being granted to the hearts, nourishing them with knowledge and faith.",
            quranicVerses: [
                QuranicVerse(text: "I created man and jinn only that they may worship Me. I seek not any provisions from them nor do I ask that they feed Me. Indeed Allah is ar-Razzaq, Owner of Strength, the Powerful.", reference: "adh-Dhariyat (51): 56-58"),
            ],
            source: source
        ),
        "al-fattah": ScholarlyExplanation(
            nameId: "al-fattah",
            groupedWith: nil,
            explanation: "The one who will judge between His servants through His laws of the Shari'ah, His laws of decree and His laws of recompense. The one who opens the eyes of those who are truthful and sincere through His kindness. The one who opens their hearts so that they can know Him, love Him and repent to Him. He opens the doors of mercy and sustenance for His servants.",
            quranicVerses: [
                QuranicVerse(text: "Whatever mercy Allah may grant to mankind, none can withhold it; and whatever He withholds, none can grant it thereafter.", reference: "Fatir (35): 2"),
                QuranicVerse(text: "Say: Our Lord will assemble us all together [on the Day of Resurrection], then He will judge between them. He is al-Fattah, the All-Knowing.", reference: "Saba' (34): 26"),
            ],
            source: source
        ),
        "al-aleem": ScholarlyExplanation(
            nameId: "al-aleem",
            groupedWith: ["al-khabeer"],
            explanation: "He is the one whose knowledge encompasses all the outward and hidden matters, the open and secret, all those things that must necessarily occur, all those things that are impossible to occur and all those things that can possibly occur. He knows the affairs of the whole of creation, of the past, the present and the future. There is absolutely nothing that is hidden from Him.",
            quranicVerses: [
                QuranicVerse(text: "Verily Allah [alone] has the knowledge of the Hour, He sends down the rain and knows what is in the wombs. No soul knows what it will earn tomorrow and no soul knows in what land it will die. Indeed Allah is 'Alim, Khabir.", reference: "Luqman (31): 34"),
            ],
            source: source
        ),
        "al-hakim": ScholarlyExplanation(
            nameId: "al-hakim",
            groupedWith: nil,
            explanation: "He is the one to whom belongs the highest wisdom, the one who is All-Wise in His creating and ordering, the one who made well everything that He created. Therefore He has created nothing out of mere frivolity and He has legislated nothing that is vain and of no use. He is the one to whom belongs judgement in the beginning and the end. Wisdom is to put something in its correct place.",
            quranicVerses: [
                QuranicVerse(text: "And who is better than Allah in judgement for a people who have firm faith?", reference: "al-Ma'idah (5): 50"),
                QuranicVerse(text: "It is He who is the only deity in the heaven and on the earth. He is al-Hakim, the All-Knowing.", reference: "az-Zukhruf (43): 84"),
            ],
            source: source
        ),
        "al-wahid": ScholarlyExplanation(
            nameId: "al-wahid",
            groupedWith: ["al-ahad"],
            explanation: "He is the one who is singled out in all aspects of perfection such that nothing else shares with Him in these. It is obligatory upon the servants to single Him out alone in belief, saying and action by acknowledging His unrestricted perfection, His uniqueness and singling Him out alone for all types of worship.",
            quranicVerses: [
                QuranicVerse(text: "'O two companions of the prison! Are many different lords better or Allah, al-Wahid, the Irresistible?'", reference: "Yusuf (12): 39"),
                QuranicVerse(text: "Say: He is Allah, al-Ahad.", reference: "al-Ikhlas (112): 1"),
            ],
            source: source
        ),
        "as-samad": ScholarlyExplanation(
            nameId: "as-samad",
            groupedWith: nil,
            explanation: "He is the one upon whom the whole of creation relies with regards all their needs, predicaments and necessities. This is due to His unrestricted perfection with regards His Person, His Names, His Attributes and His Actions.",
            quranicVerses: [
                QuranicVerse(text: "Say: He is Allah the One. Allah as-Samad.", reference: "al-Ikhlas (112): 1-2"),
            ],
            source: source
        ),
        "al-qadir": ScholarlyExplanation(
            nameId: "al-qadir",
            groupedWith: nil,
            explanation: "The one who has complete and perfect power and ability. By His power He brought everything into existence, by it He arranges all the affairs, by it He fashioned and perfected the creation, by it He brings to life and causes to die. The one who, when He wills a thing to be, merely says, 'Be!' And it is.",
            quranicVerses: [
                QuranicVerse(text: "For every nation there is a direction which they face, so hasten towards all that is good. Wherever you may be, Allah will bring you together, Allah is Qadir over all things.", reference: "al-Baqarah (2): 148"),
            ],
            source: source
        ),
        "al-lateef": ScholarlyExplanation(
            nameId: "al-lateef",
            groupedWith: nil,
            explanation: "The one whose knowledge encompasses all the secret and hidden matters, the one who is aware of all that is hidden and is aware of everything down to the most minute and finest detail. The one who is kind to His believing servants, guiding them to that which would benefit them and aid them via means that they are not aware, this by His kindness and beneficence.",
            quranicVerses: [
                QuranicVerse(text: "No vision can grasp Him, but His Grasp is over all vision. He is al-Latif, the All-Aware.", reference: "al-An'am (6): 103"),
            ],
            source: source
        ),
        "al-wadud": ScholarlyExplanation(
            nameId: "al-wadud",
            groupedWith: nil,
            explanation: "The one who loves His Prophets and Messengers and those who follow them, and they in turn love Him - He is more beloved to them than anything else. Their hearts have been filled with love of Him, their tongues are constantly moist with praising Him and their hearts are always drawn to Him in love, sincerity and repentance.",
            quranicVerses: [
                QuranicVerse(text: "And ask forgiveness from your Lord and turn to Him in repentance. Verily my Lord is the Most Merciful, Wudud.", reference: "Hud (11): 90"),
                QuranicVerse(text: "And He is Ever Forgiving, al-Wudud.", reference: "al-Buruj (85): 14"),
            ],
            source: source
        ),
        "al-hayy": ScholarlyExplanation(
            nameId: "al-hayy",
            groupedWith: ["al-qayyum"],
            explanation: "The one who has perfect power, existing in and of Himself and not dependant upon anyone else. The sustainer of the inhabitants of the heavens and the earth, the one who regulates their affairs and provisions. The name al-Hayy includes all of the Attributes of His Self and the name al-Qayyum includes all the Attributes of His Actions.",
            quranicVerses: [
                QuranicVerse(text: "Allah! There is no deity worthy of worship but Him, al-Hayy, al-Qayyum.", reference: "Ali 'Imran (3): 2"),
            ],
            source: source
        ),
        "al-qayyum": ScholarlyExplanation(
            nameId: "al-qayyum",
            groupedWith: ["al-hayy"],
            explanation: "The one who has perfect power, existing in and of Himself and not dependant upon anyone else. The sustainer of the inhabitants of the heavens and the earth, the one who regulates their affairs and provisions. The name al-Hayy includes all of the Attributes of His Self and the name al-Qayyum includes all the Attributes of His Actions.",
            quranicVerses: [
                QuranicVerse(text: "Allah! There is no deity worthy of worship but Him, al-Hayy, al-Qayyum.", reference: "Ali 'Imran (3): 2"),
            ],
            source: source
        ),
        "an-nur": ScholarlyExplanation(
            nameId: "an-nur",
            groupedWith: nil,
            explanation: "The Light of the heavens and the earth, the one who illuminates the hearts of the Gnostics with knowledge of Him, faith in Him and His guidance. He is the one who has lit the heavens and the earth with lights that He has placed therein.",
            quranicVerses: [
                QuranicVerse(text: "Allah is the Light of the heavens and the earth. The parable of His Light is as if there were a niche and within it a lamp, the lamp is in a glass, and the glass as if it were a brilliant star, lit from a blessed tree, an olive, neither of the east or of the west, whose oil would almost glow forth [of itself] even though no fire touches it. Light upon light!", reference: "an-Nur (24): 35"),
            ],
            source: source
        ),
        "al-haqq": ScholarlyExplanation(
            nameId: "al-haqq",
            groupedWith: nil,
            explanation: "He is the Truth in His Person and Attributes, He is the most necessary of existences. His saying is the truth, His Actions are the truth, the meeting with Him is the truth, His Messengers are the truth, His Books are the truth, His religion is the truth, worshipping Him alone is the truth, everything that has to do with Him is the truth.",
            quranicVerses: [
                QuranicVerse(text: "And say: the Truth is from your Lord, so let whosoever who wills believe, and whosoever who wills disbelieve.", reference: "al-Kahf (18): 29"),
                QuranicVerse(text: "Say: the truth has come and falsehood has departed, indeed falsehood by its nature is bound to depart.", reference: "al-Isra' (17): 81"),
            ],
            source: source
        ),
        "at-tawwab": ScholarlyExplanation(
            nameId: "at-tawwab",
            groupedWith: nil,
            explanation: "The one who is continuously turning [in forgiveness] to those who turn to Him [in repentance] and the one who forgives the sins of the penitent. Everyone who turns to Allah sincerely, Allah turns to them by first granting them the ability to repent and to direct their hearts towards Him, then after this He turns to them by accepting their repentance and forgiving them their errors.",
            quranicVerses: [
                QuranicVerse(text: "Know they not that Allah accepts the repentance from His slaves and acknowledges their charity, and that Allah is at-Tawwab, Most Merciful?", reference: "at-Tawbah (9): 104"),
            ],
            source: source
        ),
        "al-haafiz": ScholarlyExplanation(
            nameId: "al-haafiz",
            groupedWith: nil,
            explanation: "Al-Haafiz is the one who preserves and protects all that He has created. He preserves the heavens and the earth and all that is between them. He preserves His servant from destruction and calamity, and He preserves the deeds of His servants — nothing is lost with Him. He sent down the Quran and took upon Himself to preserve it, and so it has remained unchanged for over fourteen centuries, letter by letter, exactly as it was revealed.",
            quranicVerses: [
                QuranicVerse(text: "Indeed, it is We who sent down the Reminder, and indeed, We will be its Guardian.", reference: "al-Hijr (15): 9"),
                QuranicVerse(text: "For him [each person] there are angels in succession, before and behind him. They guard him by the Command of Allah.", reference: "ar-Ra'd (13): 11"),
            ],
            source: source
        ),
        "al-mubeen": ScholarlyExplanation(
            nameId: "al-mubeen",
            groupedWith: nil,
            explanation: "Al-Mubeen is the one who is manifest and clear in His existence, His oneness, and His perfect attributes. His proofs and evidences are clear, His religion is clear, and His judgement is clear. He makes the truth manifest and distinguishes it from falsehood. On the Day of Judgement, He will pay every soul its just recompense, and they will know that Allah — He is the Clear Truth.",
            quranicVerses: [
                QuranicVerse(text: "On that Day, Allah will pay them their just due, and they will know that Allah — He is the Clear Truth (al-Haqq al-Mubeen).", reference: "an-Nur (24): 25"),
            ],
            source: source
        ),
        "al-qaahir": ScholarlyExplanation(
            nameId: "al-qaahir",
            groupedWith: nil,
            explanation: "Al-Qaahir is the one before whom all of creation is subdued. He is above His servants, and all things are subject to His authority. No creature can resist His will, no tyrant can escape His grasp, and no power in the heavens or the earth can challenge His dominion. He subdues the arrogant, humbles the oppressors, and executes His decree upon all of creation without resistance.",
            quranicVerses: [
                QuranicVerse(text: "And He is al-Qaahir above His servants. And He is the Wise, the Acquainted.", reference: "al-An'am (6): 18"),
                QuranicVerse(text: "And He is al-Qaahir above His servants, and He sends guardians over you.", reference: "al-An'am (6): 61"),
            ],
            source: source
        ),
        "al-qadeer": ScholarlyExplanation(
            nameId: "al-qadeer",
            groupedWith: ["al-qadir"],
            explanation: "Al-Qadeer is the one whose power is perfect and complete, who is able to do all things. By His power He brought everything into existence, by it He arranges all the affairs, by it He fashioned and perfected the creation, by it He brings to life and causes to die. The one who, when He wills a thing to be, merely says 'Be!' and it is. He gave a child to Maryam without a father, made the fire cool for Ibrahim, and split the sea for Musa — nothing is beyond His perfect power.",
            quranicVerses: [
                QuranicVerse(text: "Is not He who created the heavens and the earth able to create the likes of them? Yes indeed! He is al-Khallaaq, al-Aleem.", reference: "Ya Sin (36): 81"),
                QuranicVerse(text: "Does man think that We cannot assemble his bones? Yes indeed, We are Qadir to put together in perfect order the tips of his fingers.", reference: "al-Qiyamah (75): 3-4"),
            ],
            source: source
        ),
    ]

    static func getExplanation(for nameId: String) -> ScholarlyExplanation? {
        return all[nameId]
    }
}
