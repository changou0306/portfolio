import Nav from "@/components/Nav";
import ClientEffects from "@/components/ClientEffects";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Image from "next/image";

/* ── tiny helpers ── */
const Tag = ({ children }) => (
  <span className="text-accent font-mono text-sm">{children}</span>
);

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

const WorkCard = ({ title, desc, tags, href, image }) => (
  <Link
    href={href}
    className="group block bg-base-card border border-line rounded-2xl overflow-hidden hover:border-accent/40 hover:shadow-lg transition-all reveal"
  >
    <div className="relative h-48 bg-base-secondary overflow-hidden">
      {image ? (
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className="h-full bg-gradient-to-br from-accent/10 to-base-secondary flex items-center justify-center">
          <i className="fas fa-code text-4xl text-accent/30" />
        </div>
      )}
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
                className="bg-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-light transition-colors"
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

          {/* Profile photo */}
          <div className="reveal flex justify-center md:justify-end">
            <div className="relative rounded-2xl overflow-hidden bg-base-card border border-line shadow-sm">
              <Image
                src="/profile.png"
                alt="三上 剛太"
                width={280}
                height={280}
                priority
                fetchPriority="high"
                className="block w-[240px] h-[240px] md:w-[280px] md:h-[280px] object-cover"
              />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WorkCard
              title="マーケティングSaaS LP"
              desc="架空のマーケティング自動化サービスのランディングページ。レスポンシブ対応、フォームバリデーション、FAQ実装。"
              tags={["Next.js", "Tailwind CSS", "React"]}
              href="/lp"
              image="/works/lp.png"
            />
            <WorkCard
              title="イタリアンレストラン サイト"
              desc="架空のイタリアンレストランのコーポレートサイト。メニュー紹介、店舗情報、アクセス、予約導線。"
              tags={["Next.js", "Tailwind CSS", "React"]}
              href="/demo/restaurant"
              image="/works/restaurant.png"
            />
            <WorkCard
              title="美容室 サイト"
              desc="架空の美容室サイト。メニュー・料金表、スタイリスト紹介、ネット予約導線。"
              tags={["Next.js", "Tailwind CSS", "React"]}
              href="/demo/salon"
              image="/works/salon.png"
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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left: Form */}
            <div className="bg-base-card border border-line rounded-2xl p-8 reveal">
              <ContactForm />
            </div>

            {/* Right: Other contact methods */}
            <div className="space-y-6">
              <a
                href="https://crowdworks.jp/public/employees/6329210"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-base-card border border-line rounded-2xl p-8 text-center hover:border-accent/40 transition-colors reveal"
              >
                <i className="fas fa-briefcase text-3xl text-accent mb-4" />
                <h3 className="text-lg font-semibold text-txt-primary mb-2">
                  CrowdWorks
                </h3>
                <p className="text-txt-secondary text-sm">
                  CrowdWorksからもお気軽にメッセージください。
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
        </div>
      </section>

      {/* ─── LP Banner ─── */}
      <section className="py-12 bg-base-primary border-t border-line">
        <div className="max-w-[1100px] mx-auto px-6 text-center reveal">
          <p className="text-txt-secondary mb-3">制作実績サンプル</p>
          <Link
            href="/lp"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors"
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
