import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OuiLockers Paris | Premium 24/7 Luggage Storage in Le Marais",
  description: "Secure 24/7 automated luggage storage in Paris Le Marais. €30/day, up to 4 bags per locker. Book online instantly. Located at 20 Rue Saint-Antoine, 75004 Paris.",
  keywords: ["OuiLockers", "luggage storage Paris", "consigne bagages Paris", "lockers Paris", "bagages Le Marais", "storage Bastille", "24/7 luggage storage"],
  authors: [{ name: "OuiLockers by Hôtel Herse d'Or" }],
  icons: {
    icon: "/logo-officiel.png",
  },
  openGraph: {
    title: "OuiLockers Paris | Premium 24/7 Luggage Storage",
    description: "Secure 24/7 automated luggage storage in Paris Le Marais. Book online instantly and explore Paris hands-free.",
    url: "https://www.ouilockers.com",
    siteName: "OuiLockers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OuiLockers Paris | Premium 24/7 Luggage Storage",
    description: "Secure 24/7 automated luggage storage in Paris Le Marais. Book online instantly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
