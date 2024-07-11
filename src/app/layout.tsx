import type { Metadata } from "next";

import '@fontsource/montserrat/400.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import "./globals.css";

export const metadata: Metadata = {
  title: "Managing Broker",
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
