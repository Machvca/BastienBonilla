"use client";
import Image from "next/image";
import hero1 from "../../../public/assets/images/hero1.webp";
// import { cn } from "@/src/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Hero() {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 min-h-screen items-center px-4 sm:px-8 md:px-20 py-20 md:py-34 justify-center bg-stone-100 relative w-full overflow-hidden">
      {/* Fondo con líneas */}
    

      {/* Texto */}
      <div className="relative z-10 text-center px-4">
        <h1 className="bg-linear-to-b animate-blurred-fade-in md:leading-30 animate-delay-500 from-bastien to-stone-300 bg-clip-text text-transparent font-bold text-5xl  md:text-8xl xl:text-9xl leading-tight break-words">
          {t("NAME")}
        </h1>
        <p className="text-sm mt-6 md:text-xl text-[#621316] animate-blurred-fade-in animate-delay-100 font-rubik text-center mx-auto max-w-xl">
          {t("HERO_DESCRIPTION")}
        </p>

        <Link
          href={`/contact`}
          role="button"
          className="relative animate-delay-500 hover:animate-jiggle animate-blurred-fade-in inline-flex h-10 font-rubik mb-6 items-center justify-center px-4 shadow-2xl shadow-bastien border border-[#621316] bg-[#621316]   text-stone-200 overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-stone-200 focus:ring-offset-2 focus:ring-offset-stone-900 mt-8"
        >
          {t("BOOK_NOW")}
        </Link>
      </div>

      {/* Imagen */}
      <div className="flex justify-center items-center md:mt-0 relative z-10 w-full px-4">
        <div className="relative w-full hover:scale-110 ease-in-out transition duration-300 max-w-xs sm:max-w-md h-[350px] sm:h-[400px] md:h-[600px] xl:h-[700px] overflow-hidden rounded-xl">
          <Image
            src={hero1}
            alt={t("NAME")}
            fill
            className="rounded-xl shadow-2xl shadow-bastien mask-r-from-97% mask-b-from-95% mask-from-0% mask-to-0% object-cover transition-all duration-1000 ease-in-out hover:scale-125"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
