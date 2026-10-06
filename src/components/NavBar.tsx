import Link from "next/link"
import MaxWIdthWraper from "./MaxWIdthWraper"
import ThemeToggle from "./ThemeToggle"
import LangToggle from "./LangToggle"
import { getLocale } from "@/lib/locale"
import { dictionaries } from "@/lib/dictionaries"

const NavBar = async () => {
    const locale = await getLocale()
    const t = dictionaries[locale]

    return <nav className="sticky z-100 h-14 inset-x-0 top-0 w-full border-b border-gray-200 dark:border-zinc-800 bg-white/75 dark:bg-zinc-950/75 backdrop-blur-lg transition-all">

        <MaxWIdthWraper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200 dark:border-zinc-800">

                <Link href="/" className="flex z-40 font-semibold">

                    case<span className="text-green-600"> cobra </span>

                </Link>

                <div className="flex items-center gap-1">
                    <LangToggle locale={locale} label={t.nav.lang} />
                    <ThemeToggle label={t.nav.theme} />
                </div>

            </div>
        </MaxWIdthWraper>

    </nav>
}

export default NavBar