import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/NavigationMenu/Nav";
// import Footer from "@/components/Footer";
import NewFooter from "@/components/Footer/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const siteURL = "https://www.dyondzisanicommerce.co.za/";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteURL}`),
  title: {
    default: "Dyondzisani Commerce Official Website",
    template: "%s | Professional Tutors in South Africa",
  },
  description: "Dyondzisani Commerce Official Website",
  alternates: {
    canonical: `${siteURL}`,
  },

  openGraph: {
    title: "Dyondzisani Commerce Official Website",
    description: `Join a community of successful students on their path to academic excellence. Edurite offers expert assignment assistance, personalized tutoring, and professional proofreading/editing for IT and Computer Science students in South Africa.`,
    url: `${siteURL}`,
    siteName: "Dyondzisani Commerce",
    images: [
      {
        url: `${siteURL}/opengraph-image.png`,
        width: 1200,
        height: 600,
        alt: "Dyondzisani Commerce Official Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  category: "technology",
  twitter: {
    card: "summary_large_image",
    title: "Dyondzisani Commerce",
    description: `Join a community of successful students on their path to academic excellence. Edurite offers expert assignment assistance, personalized tutoring, and professional proofreading/editing for IT and Computer Science students in South Africa.`,
    siteId: "1467726470533754880",
    creator: "@jchademwiri",
    creatorId: "1467726470533754880",
    images: [`${siteURL}/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth focus:scroll-auto"
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          {/* <Footer /> */}
          <NewFooter />
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-GP407E3PGQ" />
    </html>
  );
}
