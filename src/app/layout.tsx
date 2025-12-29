import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ProjectHub App",
  description: "ProjectHub website",
  viewport: "width=device-width, initial-scale=1",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col justify-center items-center relative overflow-x-hidden">
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
