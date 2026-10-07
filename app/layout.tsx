import type { Metadata } from "next";
import { Dancing_Script, Inter } from "next/font/google";
import "./globals.css";
import { EmotionRegistry } from "@/components/ui/emotion-registry";
import { Provider } from "@/components/ui/provider";

const inter = Inter({ subsets: ["latin"] });
const brandFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-brand",
});

export const metadata: Metadata = {
  title: "Home | Foltz Concepts",
  description: "World of Zach Foltz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${brandFont.variable}`}>
        <EmotionRegistry>
          <Provider>{children}</Provider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
