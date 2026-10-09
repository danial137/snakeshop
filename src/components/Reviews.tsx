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

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;

    if (!result[index]) {
      result[index] = [];
    }

    result[index].push(array[i]);
  }

  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
}: {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
}) {
  return (
    <div className={cn("space-y-8 py-4", className)}>
      {reviews.map((imgSrc, reviewIndex) => (
        <Review
          key={imgSrc}
          className={reviewClassName?.(reviewIndex)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
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

function ReviewGrid() {
  const columns = splitArray(PHONES, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div className="relative -mx-4 mt-16 grid grid-cols-1 items-start gap-8 overflow-visible px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
      <ReviewColumn
        reviews={[...column1, ...column3.flat(), ...column2]}
        reviewClassName={(reviewIndex) =>
          cn({
            "md:hidden": reviewIndex >= column1.length + column3[0].length,
            "lg:hidden": reviewIndex >= column1.length,
          })
        }
      />

      <ReviewColumn
        reviews={[...column2, ...column3[1]]}
        className="hidden md:block"
        reviewClassName={(reviewIndex) =>
          reviewIndex >= column2.length ? "lg:hidden" : ""
        }
      />

      <ReviewColumn reviews={column3.flat()} className="hidden lg:block" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-slate-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-100" />
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
