import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Raka | Personal Portfolio",
  description: "Welcome to the portfolio of Raka, IT Support and Developer.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        suppressHydrationWarning
        className={`${spaceMono.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors expand={false} theme="dark" />
      </body>
    </html>
  );
}
