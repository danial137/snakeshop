"use client";

import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/dictionaries";
import Phone from "./Phone";
import MaxWIdthWraper from "./MaxWIdthWraper";

const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

function splitArray<T>(array: Array<T>, numParts: number): Array<Array<T>> {
  const result: Array<Array<T>> = Array.from({ length: numParts }, () => []);

  array.forEach((item, index) => {
    result[index % numParts].push(item);
  });

  return result;
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

function Review({ imgSrc, className, ...props }: ReviewProps) {
  return (
    <div
      className={cn(
        "rounded-[2.25rem] bg-white p-6 shadow-xl shadow-slate-900/5",
        className,
      )}
      {...props}
    >
      <Phone imgSrc={imgSrc} />
    </div>
  );
}

function ReviewColumn({
  reviews,
  direction = "up",
  duration = 40,
  className,
}: {
  reviews: string[];
  direction?: "up" | "down";
  duration?: number;
  className?: string;
}) {
  return (
    <div className={cn("relative h-full overflow-hidden", className)}>
      <div
        className={cn(
          "reviews-marquee flex flex-col gap-8",
          direction === "down" && "reviews-marquee-reverse",
        )}
        style={
          {
            "--reviews-duration": `${duration}s`,
          } as React.CSSProperties
        }
      >
        <div className="flex shrink-0 flex-col gap-8">
          {reviews.map((imgSrc) => (
            <Review key={`first-${imgSrc}`} imgSrc={imgSrc} />
          ))}
        </div>

        <div aria-hidden="true" className="flex shrink-0 flex-col gap-8">
          {reviews.map((imgSrc) => (
            <Review key={`second-${imgSrc}`} imgSrc={imgSrc} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewGrid() {
  const columns = splitArray(PHONES, 3);

  return (
    <div className="relative -mx-4 mt-16 grid h-49rem max-h-[150vh] grid-cols-1 gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
      <ReviewColumn reviews={columns[0]} direction="up" duration={35} />

      <ReviewColumn
        reviews={columns[1]}
        direction="down"
        duration={45}
        className="hidden md:block"
      />

      <ReviewColumn
        reviews={columns[2]}
        direction="up"
        duration={40}
        className="hidden lg:block"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-linear-to-b from-slate-100 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-slate-100 to-transparent" />
    </div>
  );
}

export function Reviews({ locale }: { locale: Locale }) {
  return (
    <MaxWIdthWraper className="relative max-w-5xl">
      <img
        key={locale}
        aria-hidden="true"
        alt=""
        src={
          locale === "fa"
            ? "/what-people-are-buying-fa.png"
            : "/what-people-are-buying.png"
        }
        className={cn(
          "absolute select-none hidden xl:block top-1/3 z-10 dark:bg-gray-500",
          locale === "fa" ? "-right-32" : "-left-32",
        )}
      />

      <ReviewGrid />
    </MaxWIdthWraper>
  );
}
