"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle({ label }: { label: string }) {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <button
            type="button"
            aria-label={label}
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
        >
            <Moon
                strokeWidth={1.75}
                className="absolute h-18px w-18px scale-100 rotate-0 opacity-100 transition-all duration-300 dark:scale-0 dark:rotate-90 dark:opacity-0"
            />
            <Sun
                strokeWidth={1.75}
                className="absolute h-18px w-18px scale-0 -rotate-90 opacity-0 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:opacity-100"
            />
        </button>
    )
}