import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider 
      appearance={{
        layout :{
          logoImageUrl:'/icons/yoom-logo.svg',
          socialButtonsVariant:'iconButton'
        },
        variables:{
          colorText:'#fff',
          colorPrimary:'#0E78F9',
          colorBackground:'#1c1f2e',
          colorInputBackground:'#252a41',
          colorInputText:'#fff'
        },
        elements: {
      userButtonBox: {
        color: '#fff',
      },
      userButtonTrigger: {
        color: '#fff',
      },
      userButtonPopoverCard: {
        backgroundColor: '#1c1f2e',
        color: '#fff',
        borderColor: '#0E78F9',
      },
      userButtonPopoverActionButton: {
        color: '#fff',
        "&:hover": {
          backgroundColor: '#252a41',
          color: '#fff',
        },
      },
      userButtonPopoverActionButtonIcon: {
        color: '#fff',
        filter: 'brightness(1.5)',
        "&:hover": {
          color: '#fff',
        },
      },
      userButtonPopoverActionButtonText: {
        color: '#fff',
        "&:hover": {
          color: '#fff',
        },
      },
      // This applies to all icons in the dropdown including on hover
      card: {
        "& svg": {
          color: "white !important",
          fill: "white !important",
        },
        "& svg:hover": {
          color: "white !important",
          fill: "white !important",
        },
        "& *:hover svg": {
          color: "white !important",
          fill: "white !important",
        }
      }
    }
      }}
      >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black-1`}
      >
        {children}
      </body>
      </ClerkProvider>
    </html>
  );
}
