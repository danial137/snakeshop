"use client"

import { Languages } from "lucide-react"
import { useTransition } from "react"
import { setLocale } from "@/app/actions"
import type { Locale } from "@/lib/dictionaries"

export default function LangToggle({ locale, label }: { locale: Locale; label: string }) {
    const [pending, startTransition] = useTransition()
    const next: Locale = locale === "en" ? "fa" : "en"

    return (
        <button
            type="button"
            aria-label={label}
            disabled={pending}
            onClick={() => startTransition(() => setLocale(next))}
            className="flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-50 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
        >
            <Languages strokeWidth={1.75} className="h-18px w-18px" />
            <span className="uppercase">{next}</span>
        </button>
    )
}