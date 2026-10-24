import React from "react";
import MaxWIdthWraper from "./MaxWIdthWraper";
import Link from "next/link";
import { getLocale } from "@/lib/locale";
import { dictionaries } from "@/lib/dictionaries";

const Footer = async () => {
  const locale = await getLocale();
  const t = dictionaries[locale].footer;
  const year = new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en", {
    useGrouping: false,
  }).format(new Date().getFullYear());

  return (
    <footer className=" h-20 relative ">
      <MaxWIdthWraper>
        <div className="border-t border-gray-200 dark:border-zinc-800" />

        <div className="h-full flex flex-col md:flex-row md:justify-between">
          <div className="text-center md:text-start pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {year} {t.rights}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600 dark:hover:text-zinc-300"
              >
                {t.terms}
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600 dark:hover:text-zinc-300"
              >
                {t.privacy}
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600 dark:hover:text-zinc-300"
              >
                {t.cookie}
              </Link>
            </div>
          </div>
        </div>
      </MaxWIdthWraper>
    </footer>
  );
};

export default Footer;
