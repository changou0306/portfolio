import { Outfit } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "三上剛太 | System Developer & Infrastructure Engineer",
    template: "%s | 三上剛太",
  },
  description:
    "神奈川県在住のシステム開発・ITエンジニア。Web制作からサーバー構築・保守まで、フルスタックで対応。",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ja"
      className={`${outfit.variable} ${notoSansJP.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body className="font-body leading-relaxed overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
