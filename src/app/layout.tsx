"use client";

import "./globals.scss";
import React, { useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { lightTheme, darkTheme } from "./themes/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Header from "./components/Header";
import Landing from "./components/Landing";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Migraine Tracker",
  description: "Track your migraines, help doctors find a cure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const switchTheme: any = () => {
    setIsDark(!isDark);
  };

  return (
    <html lang="en">
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <body className={inter.className}>
            <Header switchTheme={switchTheme} />
            {!isLoggedIn ? <Landing /> : children}
          </body>
        </LocalizationProvider>
      </ThemeProvider>
    </html>
  );
}
