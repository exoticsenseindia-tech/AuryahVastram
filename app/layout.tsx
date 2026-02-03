import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { SmartBanner } from "@/components/layout/SmartBanner";
import { NewsletterPopup } from "@/components/layout/NewsletterPopup";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/shop/CartDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auryah Vastram | Luxury Collection",
  description: "Premium Fashion, Thoughtfully Curated.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${playfair.variable} ${inter.variable} ${montserrat.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <CartProvider>
          <CustomCursor />
          <SmartBanner />
          <CartDrawer />
          <Navbar />
          <NewsletterPopup />
          <SmoothScroll>
            <Preloader />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
