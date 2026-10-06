import Link from "next/link"
import MaxWIdthWraper from "./MaxWIdthWraper"
import ThemeToggle from "./ThemeToggle"
import LangToggle from "./LangToggle"
import { getLocale } from "@/lib/locale"
import { dictionaries } from "@/lib/dictionaries"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"

const Navbar = async () => {
    const user = undefined
    const isAdmin = false
    const locale = await getLocale()
    const t = dictionaries[locale]

    return <nav className="sticky z-100 h-14 inset-x-0 top-0 w-full border-b border-gray-200 dark:border-zinc-800 bg-white/75 dark:bg-zinc-950/75 backdrop-blur-lg transition-all">

        <MaxWIdthWraper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200 dark:border-zinc-800">

                <Link href="/" className="flex z-40 font-semibold">

                    case<span className="text-green-600"> cobra </span>

                </Link>


                <div className="h-full flex items-center space-x-4">

                    {user ? (

                        <>
                            <Link href='/api/auth/logout' className={buttonVariants({ size: "sm", variant: 'ghost' })}> Sign Out </Link>
                            {isAdmin ? <Link href='/api/auth/logout' className={buttonVariants({ size: "sm", variant: 'ghost' })}> Dashboard </Link> : null}
                            <Link href='/configure/upload' className={buttonVariants({ size: "sm", className: "hidden sm:flex itesm-center gap-1" })}> Create case <ArrowRight className="ml-1.5 h-5 w-5 transition-all" /> </Link>
                        </>

                    ) : (<>
                        <Link href='/api/auth/register' className={buttonVariants({ size: "sm", variant: 'ghost' })}> Sign up </Link>
                        <Link href='/api/auth/login' className={buttonVariants({ size: "sm", className: "hidden sm:flex itesm-center gap-1" })}> Login <ArrowRight className="ml-1.5 h-5 w-5 transition-all" /> </Link>
                    </>)}

                </div>

                <div className="flex items-center gap-1">
                    <LangToggle locale={locale} label={t.nav.lang} />
                    <ThemeToggle label={t.nav.theme} />
                </div>

            </div>
        </MaxWIdthWraper>

    </nav>
}

export default Navbar