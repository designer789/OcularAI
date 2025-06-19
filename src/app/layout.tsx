import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Tomorrow } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";

const tomorrow = Tomorrow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-tomorrow",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OcularAI",
  description: "True Crypto World Starts with Your Eyes",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${tomorrow.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <SmoothScrollProvider>
          {children}
          <CustomCursor />
        </SmoothScrollProvider>
        
        {/* Fixed fade-out overlays */}
        <div className="fixed inset-0 pointer-events-none z-50">
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900  to-transparent" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900  to-transparent" />
        </div>
      </body>
    </html>
  );
}
