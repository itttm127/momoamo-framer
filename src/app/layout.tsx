import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GSAPProvider } from "@/contexts/GSAPContext";

const generalSans = localFont({
  src: "../fonts/GeneralSans-Variable.ttf",
  variable: "--font-general-sans",
});

const nichrome = localFont({
  src: "../fonts/MDNichromeTest-Regular.otf",
  variable: "--font-md-nichrome",
});

export const metadata: Metadata = {
  title: "MOMOAMO",
  description: "MOMOAMO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} ${nichrome.variable}`}>
        <GSAPProvider>
          {children}
        </GSAPProvider>
      </body>
    </html>
  );
}
