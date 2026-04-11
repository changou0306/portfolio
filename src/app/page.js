import Nav from "@/components/Nav";
import ClientEffects from "@/components/ClientEffects";
import Link from "next/link";

/* ── tiny helpers ── */
const Tag = ({ children }) => (
  <span className="text-accent font-mono text-sm">{children}</span>
);
const Line = ({ children }) => (
  <div className="flex gap-2 font-mono text-sm leading-relaxed">{children}</div>
);
const K = ({ children }) => <span className="text-txt-muted">{children}</span>;
const V = ({ children }) => <span className="text-txt-primary">{children}</span>;

const SectionHeader = ({ tag, title, sub }) => (
  <div className="text-center mb-12 reveal">
    <Tag>&lt;{tag} /&gt;</Tag>
    <h2 className="text-3xl md:text-4xl font-display font-bold text-txt-primary mt-2">
      {title}
    </h2>
    {sub && <p className="text-txt-secondary mt-3 max-w-xl mx-auto">{sub}</p>}
  </div>
);

const ServiceCard = ({ icon, title, price, items }) => (
  <div className="bg-base-card border border-line rounded-2xl p-7 hover:border-accent/40 transition-colors reveal">
    <div className="text-3xl mb-4">
      <i className={`fas ${icon} text-accent`} />
    </div>
    <h3 className="text-xl font-display font-semibold text-txt-primary mb-1">
      {title}
    </h3>
    <p className="text-accent font-semibold text-lg mb-4">{price}</p>
    <ul className="space-y-2 text-txt-secondary text-sm">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2">
          <i className="fas fa-check text-accent mt-0.5 text-xs" /> {t}
        </li>
      ))}
    </ul>
  </div>
);

const Strength = ({ icon, title, desc }) => (
  <div className="flex gap-4 reveal">
    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
      <i className={`fas ${icon} text-accent`} />
    </div>
    <div>
      <h4 className="font-semibold text-txt-primary mb-1">{title}</h4>
      <p className="text-txt-secondary text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const SkillGroup = ({ label, skills }) => (
  <div className="reveal">
    <h4 className="text-sm font-semibold text-txt-muted uppercase tracking-wider mb-3">
      {label}
    </h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((s) => (
        <span
          key={s}
          className="px-3 py-1 rounded-full text-sm bg-base-card border border-line text-txt-secondary"
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

const WorkCard = ({ title, desc, tags, href }) => (
  <Link
    href={href}
    className="block bg-base-card border border-line rounded-2xl overflow-hidden hover:border-accent/40 transition-colors reveal"
  >
    <div className="h-48 bg-gradient-to-br from-accent/10 to-base-secondary flex items-center justify-center">
      <i className="fas fa-code text-4xl text-accent/30" />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-display font-semibold text-txt-primary mb-2">
        {title}
      </h3>
      <p className="text-txt-secondary text-sm mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

const ScheduleCard = ({ day, time, note }) => (
  <div className="bg-base-card border border-line rounded-xl p-5 text-center reveal">
    <p className="font-semibold text-txt-primary mb-1">{day}</p>
    <p className="text-accent font-mono text-sm">{time}</p>
    {note && <p className="text-txt-muted text-xs mt-1">{note}</p>}
  </div>
);

/* ── Page ── */
export default function Home() {
  return (
    <div className="bg-base-primary text-txt-primary min-h-screen">
      <Nav />
      <ClientEffects />

      {/* ─── Hero ─── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-16"
      >
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="max-w-[1100px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="reveal">
            <p className="text-accent font-mono text-sm mb-4 tracking-wide">
              System Developer &amp; Infrastructure Engineer
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-5">
              三上 剛太
              <span className="block text-txt-secondary text-xl md:text-2xl font-normal mt-2">
                Godai Mikami
              </span>
            </h1>
            <p className="text-txt-secondary leading-relaxed max-w-md mb-8">
              Web制作からサーバー構築・保守まで、フルスタックで対応。
              <br />
              神奈川を拠点に、丁寧なコードと安定したインフラをお届けします。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#services"
                className="bg-accent text-base-primary px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-light transition-colors"
              >
                サービスを見る
              </a>
              <a
                href="#contact"
                className="border border-line text-txt-secondary px-6 py-2.5 rounded-lg font-semibold hover:border-accent hover:text-accent transition-colors"
              >
                お問い合わせ
              </a>
            </div>
          </div>

          {/* Terminal card */}
          <div className="bg-base-card border border-line rounded-2xl overflow-hidden reveal">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-txt-muted font-mono text-xs ml-2">
                ~/profile
              </span>
            </div>
            <div className="p-5 space-y-1.5">
              <Line>
                <K>name:</K>
                <V>三上 剛太 (Godai Mikami)</V>
              </Line>
              <Line>
                <K>location:</K>
                <V>神奈川県</V>
              </Line>
              <Line>
                <K>role:</K>
                <V>System Dev / Infra Engineer</V>
              </Line>
              <Line>
                <K>skills:</K>
                <V>HTML, CSS, JS, Shell, Infra</V>
              </Line>
              <Line>
                <K>status:</K>
                <span className="text-accent font-mono text-sm">
                  ● available for work
                </span>
              </Line>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader
            tag="Services"
            title="提供サービス"
            sub="Webサイト制作からサーバー構築・保守まで、幅広く対応いたします。"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon="fa-laptop-code"
              title="LP制作"
              price="¥50,000〜"
              items={[
                "レスポンシブ対応",
                "フォーム実装",
                "SEO基本設定",
                "公開後の修正1回無料",
              ]}
            />
            <ServiceCard
              icon="fa-building"
              title="コーポレートサイト"
              price="¥100,000〜"
              items={[
                "5ページ構成〜",
                "CMS導入可",
                "お問い合わせフォーム",
                "スマホ最適化",
              ]}
            />
            <ServiceCard
              icon="fa-server"
              title="サーバー構築"
              price="¥30,000〜"
              items={[
                "VPS / クラウド対応",
                "SSL / ドメイン設定",
                "メールサーバー構築",
                "セキュリティ設定",
              ]}
            />
            <ServiceCard
              icon="fa-shield-halved"
              title="月額保守"
              price="¥10,000〜/月"
              items={[
                "サーバー監視",
                "セキュリティ更新",
                "バックアップ管理",
                "障害時の緊急対応",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-20 bg-base-secondary">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader
            tag="About"
            title="自己紹介"
            sub="エンジニアとしての強みと姿勢をご紹介します。"
          />
          <div className="max-w-2xl mx-auto space-y-6">
            <Strength
              icon="fa-code"
              title="フルスタック対応"
              desc="フロントエンド（HTML / CSS / JavaScript）からバックエンド、サーバー構築まで一貫して対応可能。窓口が一つで済むため、コミュニケーションコストを削減できます。"
            />
            <Strength
              icon="fa-server"
              title="インフラに強い"
              desc="VPS・クラウド環境の構築、ネットワーク設計、セキュリティ対策の実務経験あり。Webサイトの公開からサーバーの安定運用までトータルでサポートします。"
            />
            <Strength
              icon="fa-handshake"
              title="丁寧なコミュニケーション"
              desc="技術的な内容もわかりやすくご説明します。納品後の運用サポートやご質問にも誠実に対応いたします。"
            />
          </div>
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section id="skills" className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader tag="Skills" title="スキルセット" />
          <div className="max-w-2xl mx-auto space-y-8">
            <SkillGroup
              label="Frontend"
              skills={["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Next.js"]}
            />
            <SkillGroup
              label="Backend & Scripting"
              skills={["Shell Script", "Batch File", "Node.js"]}
            />
            <SkillGroup
              label="Infrastructure"
              skills={[
                "Linux",
                "VPS",
                "AWS",
                "Nginx",
                "Apache",
                "DNS",
                "SSL/TLS",
                "Firewall",
              ]}
            />
            <SkillGroup
              label="Tools"
              skills={["Git", "Docker", "VS Code", "SSH", "Vim"]}
            />
          </div>
        </div>
      </section>

      {/* ─── Works ─── */}
      <section id="works" className="py-20 bg-base-secondary">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader
            tag="Works"
            title="制作実績"
            sub="これまでに手がけたプロジェクトの一部をご紹介します。"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <WorkCard
              title="マーケティングSaaS LP"
              desc="架空のマーケティング自動化サービスのランディングページ。レスポンシブ対応、フォームバリデーション、FAQ実装。"
              tags={["Next.js", "Tailwind CSS", "React"]}
              href="/lp"
            />
            <WorkCard
              title="ポートフォリオサイト"
              desc="本サイト。ダークテーマ、ターミナル風デザイン、スクロールアニメーション、レスポンシブ対応。"
              tags={["Next.js", "Tailwind CSS", "React"]}
              href="#hero"
            />
          </div>
        </div>
      </section>

      {/* ─── Schedule ─── */}
      <section id="schedule" className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader
            tag="Schedule"
            title="稼働時間"
            sub="副業としての稼働になります。下記の時間帯でご連絡・作業が可能です。"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <ScheduleCard day="平日（月〜金）" time="20:00 – 24:00" note="本業後" />
            <ScheduleCard day="土曜日" time="10:00 – 22:00" />
            <ScheduleCard day="日曜日" time="10:00 – 20:00" />
            <ScheduleCard
              day="週あたり"
              time="12 – 17h"
              note="目安稼働時間"
            />
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-20 bg-base-secondary">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader
            tag="Contact"
            title="お問い合わせ"
            sub="お仕事のご相談やお見積もりのご依頼はお気軽にどうぞ。"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="https://crowdworks.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-base-card border border-line rounded-2xl p-8 text-center hover:border-accent/40 transition-colors reveal"
            >
              <i className="fas fa-briefcase text-3xl text-accent mb-4" />
              <h3 className="text-lg font-semibold text-txt-primary mb-2">
                CrowdWorks
              </h3>
              <p className="text-txt-secondary text-sm">
                CrowdWorksからお気軽にメッセージください。
              </p>
            </a>
            <div className="bg-base-card border border-line rounded-2xl p-8 text-center reveal">
              <i className="fas fa-video text-3xl text-accent mb-4" />
              <h3 className="text-lg font-semibold text-txt-primary mb-2">
                Web会議
              </h3>
              <p className="text-txt-secondary text-sm">
                Google Meet / Zoom
                でのお打ち合わせも可能です。お気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LP Banner ─── */}
      <section className="py-12 bg-base-primary border-t border-line">
        <div className="max-w-[1100px] mx-auto px-6 text-center reveal">
          <p className="text-txt-secondary mb-3">制作実績サンプル</p>
          <Link
            href="/lp"
            className="inline-block bg-accent text-base-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors"
          >
            LP サンプルを見る →
          </Link>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 border-t border-line text-center">
        <p className="text-txt-muted text-sm">
          &copy; {new Date().getFullYear()} Godai Mikami. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
