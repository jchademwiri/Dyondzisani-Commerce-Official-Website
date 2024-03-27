import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/NavigationMenu/Nav";
// import Footer from "@/components/Footer";
import NewFooter from "@/components/Footer/footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dyondzisani Commerce Official Website",
  description: "Dyondzisani Commerce Official Website",
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
      className="scroll-smooth  focus:scroll-auto"
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
          {/* <BackgroundBeams /> */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
