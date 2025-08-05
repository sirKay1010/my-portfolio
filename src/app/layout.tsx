import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kayode Kolawole Portfolio",
  description: "My Developer Portfolio",
  icons: {
    icon: "/my-portfolio-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body
        className={
          "bg-[url('/patterns/topography.svg')] bg-repeat bg-fixed antialiased bg-[--color-background] text-[--color-foreground]"
        }
      >
        {children}
      </body>
    </html>
  );
}
