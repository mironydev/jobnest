import { Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers";
import DashboardDrawer from "@/components/dashboard/DashboardDrawer";
import { Toast } from "@heroui/react";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL),

  title: "JobNest | Find Jobs & Career Opportunities",
  description:
    "JobNest is a job search platform where you can find jobs, discover companies, save opportunities, and apply for your next career opportunity.",
  verification: {
    google: "PWJTiC7FmuW6AfGwBSJ0q7bzFWK9cbJatJ5pdLEtx6Q",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunito.variable} h-full antialiased bg-[#f9f9f9] dark:bg-black scrollbar-gutter-stable`}
    >
      <body>
        <Providers>
          <Navbar />
          <DashboardDrawer />
          <main className="max-w-7xl mx-auto">{children}</main>
          <Footer />
          <Toast.Provider placement="bottom end" width="100%" />
        </Providers>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F71GQCL159"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F71GQCL159');
          `}
        </Script>

        <Script id="website-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "JobNest",
            url: "https://jobnest-x.vercel.app",
          })}
        </Script>
      </body>
    </html>
  );
}
