import type { Metadata } from "next";
import "./globals.css";

import localfont from "next/font/local";

const Popp = localfont({
  src: [
    {
      path: "./font/poppins1/Poppins-Bold.ttf",
    },
  ],
  variable: "--popp-bold",
});
const Popp1 = localfont({
  src: [
    {
      path: "./font/poppins1/Poppins-Medium.ttf",
    },
  ],
  variable: "--popp-med",
});
const Popp2 = localfont({
  src: [
    {
      path: "./font/poppins1/Poppins-Regular.ttf",
    },
  ],
  variable: "--popp-reg",
});

const Popp3 = localfont({
  src: [
    {
      path: "./font/poppins1/Poppins-Light.ttf",
    },
  ],
  variable: "--popp-lig",
});

export const metadata: Metadata = {
  title: "Integenal",
  description: "..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${Popp.variable} ${Popp1.variable} ${Popp2.variable} ${Popp3.variable}`}>
          {children}
        </body>
      </html>
    </>
  );
}
