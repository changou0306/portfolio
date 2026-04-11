import Link from "next/link";
import LpForm from "@/components/LpForm";

export const metadata = {
  title: "マーケティング自動化ツール | 無料トライアル実施中",
  description:
    "中小企業のマーケティングを自動化。コンバージョン率3倍向上実績。14日間無料トライアル実施中。",
};

/* ── tiny helpers ── */
const SH = ({ children, sub }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{children}</h2>
    {sub && <p className="text-slate-500 mt-3 max-w-xl mx-auto">{sub}</p>}
  </div>
);

const ProblemCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
      <i className={`fas ${icon} text-red-400 text-xl`} />
    </div>
    <h3 className="font-semibold text-slate-800 text-lg mb-2">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const BenefitCard = ({ icon, title, stat, desc }) => (
  <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 text-center">
    <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-4">
      <i className={`fas ${icon} text-indigo-600 text-xl`} />
    </div>
    <h3 className="font-semibold text-slate-800 text-lg mb-1">{title}</h3>
    <p className="text-indigo-600 font-bold text-sm mb-2">{stat}</p>
    <p className="text-slate-500 text-sm">{desc}</p>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors">
    <div className="w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
      <i className={`fas ${icon} text-indigo-600`} />
    </div>
    <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const PricingCard = ({ name, price, period, features, featured, cta }) => (
  <div
    className={`rounded-2xl p-7 ${
      featured
        ? "bg-indigo-600 text-white ring-4 ring-indigo-200 relative"
        : "bg-white border border-slate-200"
    }`}
  >
    {featured && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
        おすすめ
      </span>
    )}
    <h3
      className={`text-lg font-semibold mb-4 ${
        featured ? "text-indigo-100" : "text-slate-800"
      }`}
    >
      {name}
    </h3>
    <div className="mb-5">
      {price ? (
        <>
          <span className={`text-sm ${featured ? "text-indigo-200" : "text-slate-400"}`}>¥</span>
          <span className={`text-4xl font-bold ${featured ? "text-white" : "text-slate-900"}`}>
            {price}
          </span>
          <span className={`text-sm ${featured ? "text-indigo-200" : "text-slate-400"}`}>
            /{period}
          </span>
        </>
      ) : (
        <span className={`text-2xl font-bold ${featured ? "text-white" : "text-slate-900"}`}>
          要お問い合わせ
        </span>
      )}
    </div>
    <ul className="space-y-2.5 mb-6">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm">
          <i
            className={`fas fa-check mt-0.5 text-xs ${
              featured ? "text-indigo-200" : "text-indigo-500"
            }`}
          />
          <span className={featured ? "text-indigo-50" : "text-slate-600"}>
            {f}
          </span>
        </li>
      ))}
    </ul>
    <a
      href="#form"
      className={`block text-center py-2.5 rounded-lg font-semibold transition-colors ${
        featured
          ? "bg-white text-indigo-600 hover:bg-indigo-50"
          : "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
      }`}
    >
      {cta}
    </a>
  </div>
);

const FaqItem = ({ q, a }) => (
  <details className="faq-item group border border-slate-200 rounded-xl overflow-hidden">
    <summary className="faq-question flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-slate-800 hover:bg-slate-50 transition-colors">
      <span>{q}</span>
      <i className="fas fa-chevron-down faq-chevron text-slate-400 text-sm transition-transform duration-200" />
    </summary>
    <div className="px-6 pb-4 text-slate-500 text-sm leading-relaxed">{a}</div>
  </details>
);

const CaseStudy = ({ initials, color, company, person, quote, results }) => (
  <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
    <div className="flex items-center gap-4 mb-4">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${color}`}
      >
        {initials}
      </div>
      <div>
        <h4 className="font-semibold text-slate-800">{company}</h4>
        <p className="text-slate-400 text-sm">{person}</p>
      </div>
    </div>
    <blockquote className="text-slate-600 text-sm leading-relaxed mb-4 border-l-2 border-indigo-200 pl-4">
      {quote}
    </blockquote>
    <div className="flex flex-wrap gap-2">
      {results.map((r) => (
        <span
          key={r}
          className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium"
        >
          {r}
        </span>
      ))}
    </div>
  </div>
);

/* ── Page ── */
export default function LpPage() {
  return (
    <div className="bg-white text-slate-800 min-h-screen">
      {/* ─── Header ─── */}
      <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-6 h-full flex items-center justify-between">
          <span className="font-bold text-indigo-600 text-lg tracking-tight">
            MarketAuto
          </span>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <i className="fas fa-home text-xs" /> <span className="hidden sm:inline">ポートフォリオに戻る</span><span className="sm:hidden">戻る</span>
            </Link>
            <a
              href="#form"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
            >
              無料トライアル開始
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-indigo-50/60 to-white">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 mb-5">
              マーケティング業務を
              <span className="text-indigo-600">90%自動化</span>
              <br />
              売上を3倍にするAIツール
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              中小企業専用のマーケティング自動化プラットフォーム。
              <br />
              複雑な設定不要で、今すぐ始められます。
            </p>
            <div className="mb-8">
              <a
                href="#form"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-3.5 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                <i className="fas fa-rocket" /> 14日間無料で試してみる
              </a>
              <p className="text-slate-400 text-sm mt-2">
                ※クレジットカード不要・すぐに開始可能
              </p>
            </div>
            <div className="flex gap-8">
              {[
                ["1,200+", "導入企業数"],
                ["4.8/5.0", "満足度評価"],
                ["98%", "継続率"],
              ].map(([n, t]) => (
                <div key={t}>
                  <p className="text-2xl font-bold text-indigo-600">{n}</p>
                  <p className="text-slate-400 text-sm">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 to-slate-100 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center text-slate-400">
              <i className="fas fa-chart-line text-5xl mb-3 text-indigo-300" />
              <p className="text-sm">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem ─── */}
      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <SH>こんなマーケティングの悩み、ありませんか？</SH>
          <div className="grid md:grid-cols-3 gap-6">
            <ProblemCard
              icon="fa-triangle-exclamation"
              title="手作業が多すぎて時間がない"
              desc="メール配信、SNS投稿、レポート作成...毎日の繰り返し作業に時間を取られていませんか？"
            />
            <ProblemCard
              icon="fa-chart-line"
              title="効果測定ができていない"
              desc="どの施策が効果的なのか分からず、予算を無駄にしていませんか？"
            />
            <ProblemCard
              icon="fa-users"
              title="リードの管理が煩雑"
              desc="見込み客の情報がバラバラで、フォローアップのタイミングを逃していませんか？"
            />
          </div>
        </div>
      </section>

      {/* ─── Solution ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              その悩み、すべて解決します
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              当社のマーケティング自動化ツールなら、面倒な作業をAIが代行。あなたは戦略的な業務に集中できます。
            </p>
            <ul className="space-y-3">
              {[
                "メール・SNSの自動配信",
                "リアルタイムの効果測定",
                "見込み客の自動スコアリング",
                "最適なタイミングでの自動フォロー",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-slate-700">
                  <i className="fas fa-check text-indigo-500 text-sm" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl h-72 flex items-center justify-center">
            <div className="text-center text-slate-400">
              <i className="fas fa-diagram-project text-5xl mb-3 text-indigo-300" />
              <p className="text-sm">Automation Flow</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─── */}
      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <SH>導入するとこんなメリットが</SH>
          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard
              icon="fa-clock"
              title="作業時間90%削減"
              stat="週40時間 → 4時間"
              desc="煩雑なマーケティング作業を自動化し、戦略立案に集中できます。"
            />
            <BenefitCard
              icon="fa-arrow-up"
              title="コンバージョン率3倍向上"
              stat="1.2% → 3.6%"
              desc="AIが最適なタイミングで最適な顧客にアプローチします。"
            />
            <BenefitCard
              icon="fa-yen-sign"
              title="広告費用50%削減"
              stat="月50万円 → 25万円"
              desc="効果的なターゲティングで無駄な広告費を大幅削減。"
            />
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-6">
          <SH>主な機能</SH>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="fa-envelope"
              title="メール自動配信"
              desc="顧客の行動に応じて最適なタイミングでメールを自動送信。開封率・クリック率を最大化。"
            />
            <FeatureCard
              icon="fa-chart-bar"
              title="リアルタイム分析"
              desc="マーケティング施策の効果をリアルタイムで可視化。データドリブンな意思決定を支援。"
            />
            <FeatureCard
              icon="fa-users"
              title="顧客管理"
              desc="見込み客から既存顧客まで一元管理。購買意欲に応じた自動スコアリング機能付き。"
            />
            <FeatureCard
              icon="fa-mobile-alt"
              title="SNS連携"
              desc="Facebook、Instagram、XなどのSNSと連携。投稿の自動化と効果測定が可能。"
            />
            <FeatureCard
              icon="fa-robot"
              title="AI最適化"
              desc="機械学習により配信タイミングやコンテンツを自動最適化。常に改善し続けるシステム。"
            />
            <FeatureCard
              icon="fa-shield-halved"
              title="セキュリティ"
              desc="ISO27001認証取得。顧客データを最高レベルのセキュリティで保護します。"
            />
          </div>
        </div>
      </section>

      {/* ─── Case Studies ─── */}
      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <SH>導入事例・お客様の声</SH>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <CaseStudy
              initials="A"
              color="bg-indigo-500"
              company="A商事株式会社"
              person="EC事業部 部長 田中様"
              quote="導入から3ヶ月で売上が2.5倍になりました。特にメール配信の自動化により、手作業の時間が大幅に削減され、より戦略的な業務に集中できるようになりました。"
              results={["売上: 250%向上", "作業時間: 80%削減"]}
            />
            <CaseStudy
              initials="B"
              color="bg-emerald-500"
              company="B技研株式会社"
              person="マーケティング担当 佐藤様"
              quote="導入前は月末のレポート作成に丸2日かかっていましたが、今では自動でレポートが生成されるため、その時間を新しい施策の企画に使えています。"
              results={["CV率: 300%向上", "レポート作成: 自動化"]}
            />
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-6">
          <SH>料金プラン</SH>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <PricingCard
              name="スタータープラン"
              price="9,800"
              period="月"
              features={[
                "メール配信数: 5,000通/月",
                "顧客管理: 1,000件",
                "基本レポート",
                "メールサポート",
              ]}
              cta="プランを選択"
            />
            <PricingCard
              name="ビジネスプラン"
              price="19,800"
              period="月"
              featured
              features={[
                "メール配信数: 20,000通/月",
                "顧客管理: 5,000件",
                "高度な分析レポート",
                "SNS連携",
                "電話サポート",
                "API連携",
              ]}
              cta="プランを選択"
            />
            <PricingCard
              name="エンタープライズ"
              features={[
                "メール配信数: 無制限",
                "顧客管理: 無制限",
                "カスタムレポート",
                "専任サポート",
                "オンサイト導入支援",
                "カスタム開発",
              ]}
              cta="お問い合わせ"
            />
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            ※全プラン14日間無料トライアル付き。契約期間の縛りはありません。
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20">
        <div className="max-w-[700px] mx-auto px-6">
          <SH>よくあるご質問</SH>
          <div className="space-y-3">
            <FaqItem
              q="導入までにどれくらいの時間がかかりますか？"
              a="最短30分で導入可能です。アカウント作成後、簡単な設定を行うだけですぐにご利用いただけます。専門知識は不要で、直感的な操作で設定できます。"
            />
            <FaqItem
              q="他のツールからのデータ移行は可能ですか？"
              a="はい、CSV形式でのデータインポートに対応しております。主要なマーケティングツール（HubSpot、Salesforce等）からの移行サポートも無料で提供しています。"
            />
            <FaqItem
              q="サポート体制はどのようになっていますか？"
              a="平日9:00-18:00のメール・チャットサポートを提供しています。ビジネスプラン以上では電話サポートも利用可能です。動画マニュアルやWebセミナーも定期開催しています。"
            />
            <FaqItem
              q="セキュリティ対策はどうなっていますか？"
              a="ISO27001認証を取得し、データの暗号化、定期的なセキュリティ監査を実施しています。AWSの最高レベルのセキュリティインフラを使用し、お客様のデータを確実に保護します。"
            />
            <FaqItem
              q="解約時のデータ取得は可能ですか？"
              a="解約時にはすべてのデータをCSV形式でエクスポートできます。解約後30日間はデータを保持しており、必要に応じてダウンロードが可能です。"
            />
            <FaqItem
              q="無料トライアルに制限はありますか？"
              a="14日間、機能制限なしで全ての機能をお試しいただけます。クレジットカードの登録は不要で、自動課金される心配もありません。"
            />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            今すぐマーケティングを自動化しませんか？
          </h2>
          <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
            14日間の無料トライアルで、あなたのビジネスがどれだけ変わるかお確かめください。
            <br />
            クレジットカード不要・すぐに開始可能です。
          </p>
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            <i className="fas fa-rocket" /> 無料トライアルを開始
          </a>
          <p className="mt-4 text-indigo-200 text-sm flex items-center justify-center gap-2">
            <i className="fas fa-shield-halved" /> 30日間返金保証付き
          </p>
        </div>
      </section>

      {/* ─── Form ─── */}
      <LpForm />

      {/* ─── Footer ─── */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-3">会社情報</h4>
              <p className="text-sm leading-relaxed">
                株式会社マーケティングソリューションズ
                <br />
                〒100-0001 東京都千代田区千代田1-1-1
                <br />
                TEL: 03-1234-5678
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">サービス</h4>
              <ul className="space-y-1.5 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">機能一覧</a></li>
                <li><a href="#" className="hover:text-white transition-colors">料金プラン</a></li>
                <li><a href="#" className="hover:text-white transition-colors">導入事例</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API文書</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">サポート</h4>
              <ul className="space-y-1.5 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">ヘルプセンター</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">システム状況</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">法的情報</h4>
              <ul className="space-y-1.5 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">特定商取引法</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} マーケティングソリューションズ. All
              rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="X" className="hover:text-white transition-colors">
                <i className="fab fa-x-twitter" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <i className="fab fa-facebook" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
