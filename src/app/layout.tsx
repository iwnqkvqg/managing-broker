import type { Metadata } from "next";

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import "./globals.css";

export const metadata: Metadata = {
  title: "Tinubu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
