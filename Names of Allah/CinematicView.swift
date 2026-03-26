import SwiftUI

struct CinematicView: View {
    let nameId: String
    
    @State private var navigateToReflection = false
    @State private var showSkipButton = false
    @State private var animationComplete = false
    
    var body: some View {
        ZStack {
            // Display the appropriate story
            switch nameId {
            case "ar-rahman": ArRahmanStoryView()
            case "ar-raheem": ArRaheemStoryView()
            case "al-qayyum": AlQayyumStoryView()
            case "al-malik": AlMalikStoryView()
            case "al-quddus": AlQuddusStoryView()
            case "as-salam": AsSalamStoryView()
            case "al-mumin": AlMuminStoryView()
            case "al-wahid": AlWahidStoryView()
            case "al-ahad": AlAhadStoryView()
            case "as-samad": AsSamadStoryView()
            case "al-aleem": AlAleemStoryView()
            case "al-lateef": YusufStoryView()
            case "al-aziz": AlAzizStoryView()
            case "al-jabbar": AlJabbarStoryView()
            case "al-mutakabbir": AlMutakabbirStoryView()
            case "al-hafeez": AlHafeezStoryView()
            case "al-khaliq": AlKhaliqStoryView()
            case "al-bari": AlBariStoryView()
            case "al-musawwir": AlMusawwirStoryView()
            case "al-qahhar": AlQahharStoryView()
            case "al-wahhab": AlWahhabStoryView()
            case "al-wakeel": AlWakeelStoryView()
            case "al-baseer": AlBaseerStoryView()
            case "al-hakam": AlHakamStoryView()
            case "al-mudhill": AlMudhillStoryView()
            case "al-adl": AlAdlStoryView()
            case "al-khabeer": AlKhabeerStoryView()
            case "al-qawiyy": AlQawiyyStoryView()
            case "al-mateen": AlMateenStoryView()
            case "al-haleem-alt": AlHaleemStoryView()
            case "al-adheem-alt": AlAdheemStoryView()
            case "al-ghafoor": AlGhafoorStoryView()
            case "ash-shakoor": AshShakoorStoryView()
            case "al-aliyy": AlAliyyStoryView()
            case "al-kabeer": AlKabeerStoryView()
            case "al-muqtadir": AlMuqtadirStoryView()
            case "al-awwal": AlAwwalStoryView()
            case "al-akhir": AlAkhirStoryView()
            case "az-zahir": AzZahirStoryView()
            case "al-batin": AlBatinStoryView()
            case "al-wali": AlWaliStoryView()
            case "al-mutaali": AlMutaaliStoryView()
            case "al-barr": AlBarrStoryView()
            case "at-tawwab": AtTawwabStoryView()
            case "al-wasi": AlWasiStoryView()
            case "al-muqeet": AlMuqeetStoryView()
            case "al-haseeb": AlHaseebStoryView()
            case "al-jaleel": AlJaleelStoryView()
            case "al-qabid": AlQabidStoryView()
            case "al-basit": AlBasitStoryView()
            case "al-khafid": AlKhafidStoryView()
            case "ar-rafi": ArRafiStoryView()
            case "al-muizz": AlMuizzStoryView()
            case "al-majeed": AlMajeedStoryView()
            case "al-hameed": AlHameedStoryView()
            case "al-hayy": AlHayyStoryView()
            case "al-muntaqim": AlMuntaqimStoryView()
            case "ar-rauf": ArRaufStoryView()
            case "al-ghaniyy": AlGhaniyyStoryView()
            case "al-muhsi": AlMuhsiStoryView()
            case "al-mubdi": AlMubdiStoryView()
            case "al-muid": AlMuidStoryView()
            case "al-muhyi": AlMuhyiStoryView()
            case "al-mumeet": AlMumeetStoryView()
            case "al-baith": AlBaithStoryView()
            case "ash-shaheed": AshShaheedStoryView()
            case "an-nur": AnNurStoryView()
            case "al-hadi": AlHadiStoryView()
            case "al-baqi": AlBaqiStoryView()
            case "al-jami": AlJamiStoryView()
            case "al-mughni": AlMughniStoryView()
            case "al-warith": AlWarithStoryView()
            case "ar-rasheed": ArRasheedStoryView()
            case "malik-ul-mulk": MalikUlMulkStoryView()
            case "al-wajid": AlWajidStoryView()
            case "al-majid": AlMajidStoryView()
            case "al-muqaddim": AlMuqaddimStoryView()
            case "al-muakhkhir": AlMuakhkhirStoryView()
            case "al-wali-alt": AlWaliAltStoryView()
            case "dhul-jalali-wal-ikram": DhulJalaliWalIkramStoryView()
            case "al-muqsit": AlMuqsitStoryView()
            case "al-mani": AlManiStoryView()
            case "ad-darr": AdDarrStoryView()
            case "an-nafi": AnNafiStoryView()
            case "al-badi": AlBadiStoryView()
            case "al-ghaffar": YunusStoryView()
            case "ar-razzaq": MaryamStoryView()
            case "as-samee": AsSameeStoryView()
            case "al-kareem": AlKareemStoryView()
            case "al-haleem": AlHaleemStoryView()
            case "ash-shakur": AshShakurStoryView()
            case "al-adheem": AlAdheemStoryView()
            case "al-haqq": AlHaqqStoryView()
            case "al-hakim": KhidrStoryView()
            case "al-wadud": AlWadudStoryView()
            case "ar-raqeeb": ArRaqeebStoryView()
            case "al-muhaymin": AlMuhayminStoryView()
            case "al-qadir": AlQadirStoryView()
            case "al-afuw": AlAfuwStoryView()
            case "al-mujeeb": AlMujeebStoryView()
            case "as-sabur": AsSaburStoryView()
            case "al-fattah": SeaPartingView()
                
                // Skip button overlay (only for continuous animations)
                VStack {
                    Spacer()
                    if showSkipButton {
                        Button(action: { navigateToReflection = true }) {
                            HStack(spacing: 8) {
                                Text(animationComplete ? "Continue to Reflect" : "Skip")
                                    .font(.system(size: 16, weight: .medium, design: .serif))
                                Image(systemName: "arrow.right")
                                    .font(.system(size: 12))
                            }
                            .foregroundColor(animationComplete ? Color(red: 0.05, green: 0.05, blue: 0.1) : .white.opacity(0.8))
                            .padding(.horizontal, 28)
                            .padding(.vertical, 14)
                            .background(
                                animationComplete ?
                                AnyShapeStyle(LinearGradient(colors: [Color.appSoftGold, Color.appGold], startPoint: .topLeading, endPoint: .bottomTrailing)) :
                                AnyShapeStyle(Color.white.opacity(0.15))
                            )
                            .clipShape(Capsule())
                        }
                        .padding(.bottom, 50)
                    }
                }
            default:
                Text("Story not found")
            }
        }
        .navigationBarTitleDisplayMode(.inline)
        .onAppear {
            // Only set up skip button for al-fattah (continuous animation)
            if nameId == "al-fattah" {
                DispatchQueue.main.asyncAfter(deadline: .now() + 5) { withAnimation { showSkipButton = true } }
                DispatchQueue.main.asyncAfter(deadline: .now() + 25) { withAnimation { animationComplete = true } }
                DispatchQueue.main.asyncAfter(deadline: .now() + 35) { navigateToReflection = true }
            }
        }
        .navigationDestination(isPresented: $navigateToReflection) {
            // Route to correct reflection view
            switch nameId {
            case "ar-rahman":
                ArRahmanReflectionView()
            case "al-lateef":
                AlLateefReflectionView()
            case "al-ghaffar":
                AlGhaffarReflectionView()
            case "ar-razzaq":
                ArRazzaqReflectionView()
            case "al-hakim":
                AlHakimReflectionView()
            case "al-fattah":
                ReflectionView()
            default:
                Text("Reflection not found")
            }
        }
    }
}
