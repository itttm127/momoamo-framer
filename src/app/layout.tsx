import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GSAPProvider } from "@/contexts/GSAPContext";

const generalSans = localFont({
  src: [
    {
      path: "../fonts/GeneralSans-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});

const nichrome = localFont({
  src: [
    {
      path: "../fonts/MDNichrome-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MDNichrome-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/MDNichrome-Black.otf",
      weight: "900",
      style: "normal",
    },
    // Add more styles/weights if available
  ],
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
