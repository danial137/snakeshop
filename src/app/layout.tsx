import "./globals.css";
import { Vazirmatn } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { getLocale } from "@/lib/locale";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${locale === "fa" ? vazirmatn.className : ""} bg-white text-gray-900 dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <div className="flex-1 flex flex-col h-full"> {children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
