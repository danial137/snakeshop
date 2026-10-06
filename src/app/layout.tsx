import "./globals.css"
import { Vazirmatn } from "next/font/google"
import ThemeProvider from "@/components/ThemeProvider"
import NavBar from "@/components/Navbar"
import { getLocale } from "@/lib/locale"

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={`${locale === "fa" ? vazirmatn.className : ""} bg-white text-gray-900 dark:bg-zinc-950 dark:text-zinc-100`}>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}