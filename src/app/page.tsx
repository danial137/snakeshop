import MaxWIdthWraper from "@/components/MaxWIdthWraper";
import Phone from "@/components/Phone";
import { Checkbox } from "@base-ui/react";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import { getLocale } from "@/lib/locale";
import { dictionaries } from "@/lib/dictionaries";
import { Icons } from "@/components/Icon";
import { Reviews } from "@/components/Reviews";

export default async function Home() {
  const locale = await getLocale();
  const t = dictionaries[locale].home;

  return (
    <div className="bg-slate-50 dark:bg-zinc-950">
      <section>
        <MaxWIdthWraper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-start flex flex-col items-center lg:items-start ">
              <div className="absolute inset-0 -top-10 w-16 sm:-top-14 sm:w-20 md:-top-16 md:w-24 lg:-top-20 lg:w-28">
                <img src="/snake-1.png" className="w-full " />
              </div>

              <h1 className="relative w-fit lg:-inset-s-15 my-6 lg:m-14 tracking-tight text-balance font-bold leading-tight! text-gray-900 dark:text-zinc-50 text-5xl md:text-6xl lg:text-7xl">
                {t.heroBefore}
                <span className="bg-green-600 px-2 text-white">
                  {t.heroHighlight}
                </span>
                {t.heroAfter}
              </h1>

              <p className="pt-5 text-lg lg:pe-10 max-w-prose text-center lg:text-start text-balance md:text-wrap ">
                {t.introBefore}
                <span className="font-semibold">{t.introHighlight}</span>
                {t.introAfter}
              </p>

              <ul className="mt-8 space-y-2 text-start font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  {t.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-1.5 items-center text-start"
                    >
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4 ">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 dark:ring-zinc-950"
                    src="/users/user-1.png"
                    alt="users"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 dark:ring-zinc-950"
                    src="/users/user-2.png"
                    alt="users"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 dark:ring-zinc-950"
                    src="/users/user-3.png"
                    alt="users"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 dark:ring-zinc-950"
                    src="/users/user-4.jpg"
                    alt="users"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100 dark:ring-zinc-950"
                    src="/users/user-5.jpg"
                    alt="users"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>

                  <p>
                    <span className="font-semibold p-1">{t.count}</span>
                    {t.customers}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src={locale === "fa" ? "/yourpik.png" : "/your-image.png"}
                className="absolute w-40 lg:w-52 inset-s-56 -top-20 select-none hidden sm:block lg:hidden xl:block dark:bg-white"
              />
              <img
                src="/line.png"
                className="absolute w-20 -inset-s-6 -bottom-6 select-none"
              />
              <Phone imgSrc="/testimonials/1.jpg" className="w-64" />
            </div>
          </div>
        </MaxWIdthWraper>
      </section>

      {/* value proposition section  */}

      <section className="bg-slate-100 dark:bg-zinc-950 py-24">
        <MaxWIdthWraper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance leading-tight! font-bold text-5xl md:text-6xl text-gray-900 dark:text-zinc-50">
              {t.reviews.titleBefore}
              <span className="relative px-2">
                {t.reviews.titleHighlight}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 top-full -mt-12 text-green-500" />
              </span>
              {t.reviews.titleAfter}
            </h2>

            <img src="/snake-2.png" className="w-24 order-0 lg:order-2" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16 ">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>

              <div className="text-lg leading-8">
                <p>
                  {t.reviews.review1Before}
                  <span className="font-semibold p-0.5 bg-slate-800 text-white">
                    {t.reviews.review1Highlight}
                  </span>
                  {t.reviews.review1After}
                </p>
              </div>

              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-1.png"
                  alt="user"
                />

                <div className="flex flex-col">
                  <p className="">{t.reviews.user1}</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />

                    <p className="text-sm"> Verified Purchase </p>
                  </div>
                </div>
              </div>
            </div>

            {/* second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pe-8 xl:pe-20 xl:pr-5">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>

              <div className="text-lg leading-8">
                <p>
                  {t.reviews.review2Before}{" "}
                  <span className="font-semibold p-0.5 bg-slate-800 text-white">
                    {t.reviews.review2Highlight}
                  </span>{" "}
                </p>
              </div>

              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-2.png"
                  alt="user"
                />

                <div className="flex flex-col">
                  <p className="">{t.reviews.user2}</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />

                    <p className="text-sm"> Verified Purchase </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWIdthWraper>

        <div className="pt-16">
          <Reviews locale={locale} />
        </div>
      </section>
    </div>
  );
}
