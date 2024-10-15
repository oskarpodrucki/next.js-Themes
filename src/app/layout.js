"use client"
import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/ThemeProvider"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import SwitchTheme from "@/components/SwitchTheme"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
          <ThemeSwitcher/>
          <SwitchTheme/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
