import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Fleur Hair Salon | 表参道の美容室",
  description:
    "表参道駅徒歩3分。あなたらしさを引き出すヘアサロン Fleur（フルール）。カット・カラー・パーマ・トリートメントなど、経験豊富なスタイリストが丁寧にご対応いたします。",
};

/* ── tiny helpers ── */
const SH = ({ children, sub }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
      {children}
    </h2>
    {sub && (
      <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
        {sub}
      </p>
    )}
    <div className="mt-4 mx-auto w-16 h-0.5 bg-rose-300 rounded-full" />
  </div>
);

const MenuCard = ({ category, items }) => (
  <div className="bg-white rounded-2xl p-7 shadow-sm border border-rose-100">
    <h3 className="font-semibold text-rose-600 text-lg mb-4 flex items-center gap-2">
      <i className="fas fa-scissors text-sm" /> {category}
    </h3>
    <ul className="space-y-3">
      {items.map(({ name, price, note }) => (
        <li key={name} className="flex items-baseline justify-between gap-2">
          <div>
            <span className="text-slate-700 text-sm font-medium">{name}</span>
            {note && (
              <span className="text-slate-400 text-xs ml-2">{note}</span>
            )}
          </div>
          <span className="text-rose-500 font-semibold text-sm whitespace-nowrap">
            {price}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const StylistCard = ({ name, role, description, color }) => (
  <div className="bg-white rounded-2xl p-7 shadow-sm border border-rose-100 text-center">
    <div
      className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center ${color}`}
    >
      <i className="fas fa-user text-3xl text-white/80" />
    </div>
    <h3 className="font-semibold text-slate-800 text-lg">{name}</h3>
    <p className="text-rose-500 text-sm mb-3">{role}</p>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-0.5">
      <i className={`fas ${icon} text-rose-400 text-sm`} />
    </div>
    <div>
      <p className="text-slate-400 text-xs mb-0.5">{label}</p>
      <p className="text-slate-700 text-sm leading-relaxed">{value}</p>
    </div>
  </div>
);

/* ── Page ── */
export default function SalonPage() {
  return (
    <div className="bg-white text-slate-800 min-h-screen">
      {/* ─── Header ─── */}
      <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-white/90 backdrop-blur-xl border-b border-rose-100">
        <div className="max-w-[1100px] mx-auto px-6 h-full flex items-center justify-between">
          <span className="font-bold text-rose-500 text-lg tracking-tight">
            <i className="fas fa-spa text-rose-400 mr-1.5" />
            Fleur
          </span>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <i className="fas fa-home text-xs" />{" "}
              <span className="hidden sm:inline">ポートフォリオに戻る</span>
              <span className="sm:hidden">戻る</span>
            </Link>
            <a
              href="#reserve"
              className="bg-rose-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-rose-600 transition-colors"
            >
              ご予約
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-rose-50/60 to-white">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-rose-400 font-medium text-sm mb-3 tracking-wide">
              HAIR SALON
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 mb-5">
              あなたらしさを
              <br />
              <span className="text-rose-500">もっと美しく</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              表参道の隠れ家サロン Fleur（フルール）。
              <br />
              一人ひとりの個性を大切に、あなただけのスタイルをご提案します。
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#reserve"
                className="inline-flex items-center gap-2 bg-rose-500 text-white px-7 py-3.5 rounded-xl text-lg font-semibold hover:bg-rose-600 transition-colors shadow-lg shadow-rose-200"
              >
                <i className="fas fa-calendar-check" /> ご予約はこちら
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 border-2 border-rose-300 text-rose-500 px-7 py-3.5 rounded-xl text-lg font-semibold hover:bg-rose-50 transition-colors"
              >
                <i className="fas fa-list" /> メニューを見る
              </a>
            </div>
            <div className="flex gap-8">
              {[
                ["10:00-20:00", "営業時間"],
                ["火曜定休", "定休日"],
                ["徒歩3分", "表参道駅から"],
              ].map(([n, t]) => (
                <div key={t}>
                  <p className="text-lg font-bold text-rose-500">{n}</p>
                  <p className="text-slate-400 text-xs">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-rose-200/40 ring-1 ring-rose-100">
            <Image
              src="/demo/salon/hero.png"
              alt="Fleurのサロン内観"
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
        <div className="max-w-[1100px] mx-auto px-6">
          <SH sub="Fleur が大切にしていること">Concept</SH>
          <div className="relative rounded-2xl overflow-hidden mb-12 shadow-lg shadow-rose-200/30 ring-1 ring-rose-100 max-w-3xl mx-auto">
            <Image
              src="/demo/salon/concept.png"
              alt="オーガニック製品と上質な空間"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-heart",
                title: "一人ひとりに寄り添う",
                desc: "丁寧なカウンセリングで、お客様のライフスタイルや髪質に合わせた最適なスタイルをご提案。「なりたい自分」を一緒に見つけます。",
              },
              {
                icon: "fa-leaf",
                title: "髪と頭皮に優しく",
                desc: "厳選したオーガニック製品を使用し、施術によるダメージを最小限に。美しさと健やかさの両立を追求します。",
              },
              {
                icon: "fa-gem",
                title: "上質な空間でくつろぎを",
                desc: "半個室のプライベート空間で、日常を忘れてリラックスできるひとときを。おもてなしの心でお迎えいたします。",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 shadow-sm border border-rose-100 hover:border-rose-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mb-4">
                  <i className={`fas ${icon} text-rose-400 text-xl`} />
                </div>
                <h3 className="font-semibold text-slate-800 text-lg mb-2">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Menu ─── */}
      <section id="menu" className="py-20 bg-rose-50/40">
        <div className="max-w-[1100px] mx-auto px-6">
          <SH sub="全メニュー税込価格です">Menu &amp; Price</SH>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <MenuCard
              category="カット"
              items={[
                { name: "カット", price: "¥6,600" },
                { name: "カット + シャンプーブロー", price: "¥7,700" },
                {
                  name: "前髪カット",
                  price: "¥1,100",
                  note: "他メニューと同時",
                },
                { name: "キッズカット", price: "¥3,300", note: "小学生以下" },
              ]}
            />
            <MenuCard
              category="カラー"
              items={[
                { name: "ワンカラー", price: "¥7,700〜" },
                { name: "リタッチカラー", price: "¥5,500〜" },
                { name: "ハイライト", price: "¥8,800〜" },
                { name: "インナーカラー", price: "¥6,600〜" },
              ]}
            />
            <MenuCard
              category="パーマ"
              items={[
                { name: "デジタルパーマ", price: "¥11,000〜" },
                { name: "コールドパーマ", price: "¥8,800〜" },
                {
                  name: "ポイントパーマ",
                  price: "¥5,500〜",
                  note: "前髪・顔まわり",
                },
                { name: "縮毛矯正", price: "¥16,500〜" },
              ]}
            />
            <MenuCard
              category="トリートメント"
              items={[
                { name: "クイックトリートメント", price: "¥3,300" },
                { name: "プレミアムトリートメント", price: "¥6,600" },
                { name: "髪質改善トリートメント", price: "¥11,000" },
                { name: "ヘッドスパ", price: "¥4,400", note: "30分" },
              ]}
            />
          </div>
          <p className="text-center text-slate-400 text-xs mt-8">
            ※ロング料金（肩下+¥550〜）が別途かかる場合がございます。詳しくはスタッフまでお問い合わせください。
          </p>
        </div>
      </section>

      {/* ─── Stylists ─── */}
      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <SH sub="経験豊富なスタイリストがお迎えします">Stylist</SH>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <StylistCard
              name="佐藤 美咲"
              role="オーナースタイリスト"
              description="都内有名サロンで12年の経験を経て独立。骨格診断を取り入れたカットが得意。あなたの魅力を最大限に引き出します。"
              color="bg-gradient-to-br from-rose-400 to-pink-300"
            />
            <StylistCard
              name="田中 優斗"
              role="トップスタイリスト"
              description="カラーリングのスペシャリスト。透明感のあるハイトーンからナチュラルカラーまで、一人ひとりに似合う色を提案します。"
              color="bg-gradient-to-br from-pink-400 to-rose-300"
            />
            <StylistCard
              name="鈴木 彩花"
              role="スタイリスト"
              description="パーマスタイルとヘアアレンジが得意。再現性の高いスタイル作りを心がけています。ヘッドスパの施術も好評です。"
              color="bg-gradient-to-br from-rose-300 to-pink-200"
            />
          </div>
        </div>
      </section>

      {/* ─── Shop Info ─── */}
      <section className="py-20 bg-rose-50/40">
        <div className="max-w-[1100px] mx-auto px-6">
          <SH>Shop Info</SH>
          <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            <div className="space-y-5">
              <InfoRow
                icon="fa-map-marker-alt"
                label="住所"
                value="〒150-0001 東京都渋谷区神宮前4-12-8 表参道ヒルズアネックス 3F"
              />
              <InfoRow
                icon="fa-clock"
                label="営業時間"
                value="10:00〜20:00（最終受付 19:00）"
              />
              <InfoRow icon="fa-calendar-xmark" label="定休日" value="毎週火曜日・第3水曜日" />
              <InfoRow
                icon="fa-phone"
                label="電話番号"
                value="03-6721-0000"
              />
              <InfoRow
                icon="fa-train"
                label="アクセス"
                value="東京メトロ 表参道駅 A2出口より徒歩3分"
              />
            </div>
            <div className="bg-gradient-to-br from-rose-100 to-pink-50 rounded-2xl h-64 md:h-auto flex items-center justify-center">
              <div className="text-center text-rose-300">
                <i className="fas fa-map-location-dot text-4xl mb-2" />
                <p className="text-sm text-rose-400">Map</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Reserve ─── */}
      <section
        id="reserve"
        className="py-20 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-center"
      >
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ご予約</h2>
          <p className="text-rose-100 text-lg mb-8 leading-relaxed">
            お電話またはネットからご予約いただけます。
            <br />
            お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:03-6721-0000"
              className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              <i className="fas fa-phone" /> 03-6721-0000
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <i className="fas fa-globe" /> ネット予約
            </a>
          </div>
          <p className="mt-6 text-rose-200 text-sm">
            <i className="fas fa-clock mr-1" />
            受付時間 10:00〜19:00（火曜定休）
          </p>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <i className="fas fa-spa text-rose-400" /> Fleur
              </h4>
              <p className="text-sm leading-relaxed">
                〒150-0001
                <br />
                東京都渋谷区神宮前4-12-8
                <br />
                表参道ヒルズアネックス 3F
                <br />
                TEL: 03-6721-0000
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">メニュー</h4>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <a
                    href="#menu"
                    className="hover:text-white transition-colors"
                  >
                    カット
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="hover:text-white transition-colors"
                  >
                    カラー
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="hover:text-white transition-colors"
                  >
                    パーマ
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="hover:text-white transition-colors"
                  >
                    トリートメント
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">SNS</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-white transition-colors"
                >
                  <i className="fab fa-instagram text-lg" />
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="hover:text-white transition-colors"
                >
                  <i className="fab fa-x-twitter text-lg" />
                </a>
                <a
                  href="#"
                  aria-label="LINE"
                  className="hover:text-white transition-colors"
                >
                  <i className="fab fa-line text-lg" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Fleur Hair Salon. All rights
              reserved.
            </p>
            <p className="text-xs text-slate-500">
              ※これは架空の美容室サイトのデモページです
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
