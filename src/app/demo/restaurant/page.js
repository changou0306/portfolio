import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Trattoria Bella Luna | 本格イタリアン・東京都港区",
  description:
    "南イタリアの伝統と旬の食材が織りなす、心温まるイタリア料理。東京都港区のトラットリア ベッラ・ルーナ。ランチ・ディナー営業中。",
};

/* ── tiny helpers ── */
const SH = ({ children, sub }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{children}</h2>
    {sub && <p className="text-slate-500 mt-3 max-w-xl mx-auto">{sub}</p>}
  </div>
);

const MenuItem = ({ name, desc, price }) => (
  <div className="flex items-start justify-between gap-4 py-4 border-b border-slate-100 last:border-0">
    <div>
      <h4 className="font-semibold text-slate-800">{name}</h4>
      <p className="text-slate-500 text-sm mt-0.5">{desc}</p>
    </div>
    <span className="text-amber-700 font-bold whitespace-nowrap">&yen;{price}</span>
  </div>
);

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0">
    <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
      <i className={`fas ${icon} text-amber-600 text-sm`} />
    </div>
    <div>
      <p className="text-slate-400 text-xs mb-0.5">{label}</p>
      <p className="text-slate-800 text-sm leading-relaxed whitespace-pre-line">{value}</p>
    </div>
  </div>
);

/* ── Page ── */
export default function RestaurantPage() {
  return (
    <div className="bg-white text-slate-800 min-h-screen">
      {/* ─── Header ─── */}
      <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-6 h-full flex items-center justify-between">
          <span className="font-bold text-amber-700 text-lg tracking-tight">
            <i className="fas fa-moon text-amber-500 mr-1.5" />
            Bella Luna
          </span>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <i className="fas fa-home text-xs" /> <span className="hidden sm:inline">ポートフォリオに戻る</span><span className="sm:hidden">戻る</span>
            </Link>
            <a
              href="#reserve"
              className="bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-800 transition-colors"
            >
              ご予約
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-amber-50/60 to-white">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-700 font-medium mb-3 tracking-wide text-sm uppercase">
              Trattoria
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 mb-5">
              Bella Luna
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-3">
              トラットリア ベッラ・ルーナ
            </p>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              南イタリアの陽光と風を感じる、
              <br />
              心温まる本格トラットリア。
              <br />
              旬の食材を活かした料理とワインで、
              <br />
              特別なひとときをお届けします。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-amber-700 text-white px-7 py-3.5 rounded-xl text-lg font-semibold hover:bg-amber-800 transition-colors shadow-lg shadow-amber-200"
              >
                <i className="fas fa-utensils" /> メニューを見る
              </a>
              <a
                href="#reserve"
                className="inline-flex items-center gap-2 border-2 border-amber-700 text-amber-700 px-7 py-3.5 rounded-xl text-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                <i className="fas fa-phone" /> ご予約
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-amber-200/40 ring-1 ring-amber-100">
            <Image
              src="/demo/restaurant/hero.png"
              alt="Bella Lunaの本格イタリアンパスタ"
              width={1200}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 540px"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ─── Concept ─── */}
      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-amber-200/30 ring-1 ring-amber-100">
            <Image
              src="/demo/restaurant/concept.png"
              alt="南イタリアの温かな食卓"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 540px"
              className="w-full h-auto"
            />
          </div>
          <div>
            <p className="text-amber-700 font-medium mb-2 tracking-wide text-sm uppercase">Concept</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
              大切な人と過ごす、<br />温かな食卓
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              オーナーシェフ・白石が南イタリアで修業した経験をもとに、
              現地の家庭料理から本格コースまで幅広くご提供。
              素材の味を最大限に引き出すシンプルな調理法にこだわっています。
            </p>
            <p className="text-slate-500 leading-relaxed">
              毎朝、築地と契約農家から届く旬の食材を使い、
              季節ごとに変わるメニューをお楽しみいただけます。
              ソムリエが厳選したイタリアワインとのペアリングもぜひお試しください。
            </p>
          </div>
        </div>
      </section>

      {/* ─── Menu ─── */}
      <section id="menu" className="py-20 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-6">
          <SH sub="季節の食材を活かした、シェフおすすめの一皿">メニュー</SH>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Lunch */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <i className="fas fa-sun text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">ランチ</h3>
                <span className="text-slate-400 text-sm ml-auto">11:30 - 14:30</span>
              </div>
              <MenuItem
                name="本日のパスタランチ"
                desc="サラダ・フォカッチャ・ドリンク付き"
                price="1,480"
              />
              <MenuItem
                name="マルゲリータランチ"
                desc="自家製生地の窯焼きピッツァ・サラダ付き"
                price="1,380"
              />
              <MenuItem
                name="シェフの気まぐれランチコース"
                desc="前菜・パスタ・メイン・ドルチェ・コーヒー"
                price="2,800"
              />
            </div>

            {/* Dinner */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <i className="fas fa-moon text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">ディナー</h3>
                <span className="text-slate-400 text-sm ml-auto">17:30 - 22:00</span>
              </div>
              <MenuItem
                name="生ウニのクリームパスタ"
                desc="北海道産ウニをふんだんに使った濃厚クリームソース"
                price="2,400"
              />
              <MenuItem
                name="和牛ランプのタリアータ"
                desc="A5ランク和牛をルッコラとパルミジャーノで"
                price="3,200"
              />
              <MenuItem
                name="本日の鮮魚のアクアパッツァ"
                desc="築地直送の鮮魚をトマトとオリーブで煮込んだ一品"
                price="2,800"
              />
              <MenuItem
                name="ディナーコース（全7品）"
                desc="前菜盛合せ・スープ・パスタ・魚料理・肉料理・ドルチェ・コーヒー"
                price="6,800"
              />
            </div>
          </div>

          <p className="text-center text-slate-400 text-sm mt-6">
            ※価格は全て税込みです。仕入れ状況により内容が変わる場合がございます。
          </p>
        </div>
      </section>

      {/* ─── Shop Info ─── */}
      <section id="info" className="py-20">
        <div className="max-w-[700px] mx-auto px-6">
          <SH>店舗情報</SH>
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
            <InfoRow
              icon="fa-map-marker-alt"
              label="住所"
              value="〒107-0052 東京都港区赤坂3-12-8 ルーナビル 1F"
            />
            <InfoRow
              icon="fa-clock"
              label="営業時間"
              value={`ランチ 11:30 - 14:30（L.O. 14:00）\nディナー 17:30 - 22:00（L.O. 21:00）`}
            />
            <InfoRow
              icon="fa-calendar-xmark"
              label="定休日"
              value="毎週月曜日（祝日の場合は翌火曜日）"
            />
            <InfoRow
              icon="fa-phone"
              label="電話番号"
              value="03-1234-5678"
            />
            <InfoRow
              icon="fa-chair"
              label="席数"
              value="テーブル席 28席 / カウンター 6席 / テラス席 8席"
            />
            <InfoRow
              icon="fa-credit-card"
              label="お支払い"
              value="現金 / クレジットカード / 電子マネー / QRコード決済"
            />
          </div>
        </div>
      </section>

      {/* ─── Access ─── */}
      <section id="access" className="py-20 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-6">
          <SH sub="赤坂駅から徒歩3分。赤坂見附駅からも徒歩5分。">アクセス</SH>

          {/* Map placeholder */}
          <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl h-80 flex items-center justify-center mb-8">
            <div className="text-center text-slate-500">
              <i className="fas fa-map-location-dot text-5xl mb-3 text-slate-400" />
              <p className="text-sm">Google Maps Embed</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: "fa-train",
                line: "東京メトロ千代田線",
                station: "赤坂駅 2番出口",
                time: "徒歩3分",
              },
              {
                icon: "fa-train",
                line: "東京メトロ銀座線・丸ノ内線",
                station: "赤坂見附駅 A出口",
                time: "徒歩5分",
              },
              {
                icon: "fa-car",
                line: "お車でお越しの方",
                station: "近隣コインパーキングあり",
                time: "駐車場提携なし",
              },
            ].map((a) => (
              <div
                key={a.line}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center"
              >
                <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-3">
                  <i className={`fas ${a.icon} text-amber-600`} />
                </div>
                <p className="text-slate-800 font-semibold text-sm mb-0.5">{a.line}</p>
                <p className="text-slate-500 text-sm">{a.station}</p>
                <p className="text-amber-700 font-bold text-sm mt-1">{a.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Reserve ─── */}
      <section id="reserve" className="py-20 bg-gradient-to-r from-amber-700 to-orange-700 text-white text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ご予約・お問い合わせ</h2>
          <p className="text-amber-100 text-lg mb-8 leading-relaxed">
            お電話にてご予約を承っております。
            <br />
            お気軽にお問い合わせください。
          </p>
          <a
            href="tel:03-1234-5678"
            className="inline-flex items-center gap-3 bg-white text-amber-700 px-8 py-4 rounded-xl text-xl font-bold hover:bg-amber-50 transition-colors"
          >
            <i className="fas fa-phone" />
            03-1234-5678
          </a>
          <p className="mt-4 text-amber-200 text-sm">
            <i className="fas fa-clock mr-1.5" />
            受付時間: 10:00 - 21:00（月曜定休）
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <i className="fab fa-instagram" /> Instagram
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <i className="fab fa-line" /> LINE
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <i className="fas fa-moon text-amber-400" /> Trattoria Bella Luna
              </h4>
              <p className="text-sm leading-relaxed">
                〒107-0052
                <br />
                東京都港区赤坂3-12-8 ルーナビル 1F
                <br />
                TEL: 03-1234-5678
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">営業時間</h4>
              <ul className="space-y-1.5 text-sm">
                <li>ランチ 11:30 - 14:30</li>
                <li>ディナー 17:30 - 22:00</li>
                <li>定休日: 毎週月曜日</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">SNS</h4>
              <div className="flex gap-4">
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                  <i className="fab fa-instagram text-lg" />
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                  <i className="fab fa-facebook text-lg" />
                </a>
                <a href="#" aria-label="LINE" className="hover:text-white transition-colors">
                  <i className="fab fa-line text-lg" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Trattoria Bella Luna. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              ※ これは架空のレストランサイトです（ポートフォリオ用デモ）
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
