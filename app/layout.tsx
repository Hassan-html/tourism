import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Static/Header";
import Foter from "@/app/components/Static/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/app/components/Footer/Footer";
const roboto = Roboto({
  weight: ["400", "700", "500", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TourismToJapan",
  description: "Your japan Tourism WebPoint",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
