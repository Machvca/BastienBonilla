"use client";
import Image from "next/image";
import hero1 from "../../../public/assets/images/hero1.jpg";
import { cn } from "@/src/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Hero() {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 min-h-screen items-center px-4 sm:px-8 md:px-20 py-20 md:py-34 justify-center bg-stone-100 relative w-full overflow-hidden">
      {/* Fondo con líneas */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:80px_65px]",
          "[background-image:linear-gradient(to_right,#a3a3a3_1px,transparent_1px),linear-gradient(to_bottom,#573924_1px,transparent_1px)]"
        )}
      />

      {/* Texto */}
      <div className="relative z-10 text-center px-4">
        <h1 className="bg-linear-to-b animate-blurred-fade-in animate-delay-500 from-bastien to-stone-300 bg-clip-text text-transparent font-bold text-4xl sm:text-6xl md:text-8xl xl:text-9xl leading-tight break-words">
          {t("NAME")}
        </h1>
        <p className="text-sm mt-6 md:text-xl text-[#621316] animate-blurred-fade-in animate-delay-100 font-rubik text-center mx-auto max-w-xl">
          {t("HERO_DESCRIPTION")}
        </p>

        <Link
          href={`/contact`}
          role="button"
          className="relative animate-delay-600 animate-jiggle hover:animate-scale ease-in-out inline-flex h-10 font-rubik mb-6 items-center justify-center px-4 shadow-2xl border border-[#621316] bg-[#621316] hover:bg-stone-200 hover:text-bastien text-stone-200 overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-stone-200 focus:ring-offset-2 focus:ring-offset-stone-900 mt-8"
        >
          {t("BOOK_NOW")}
        </Link>
      </div>

      {/* Imagen */}
      <div className="flex justify-center items-center md:mt-0 relative z-10 w-full px-4">
        <div className="relative w-full max-w-xs sm:max-w-md h-[350px] sm:h-[400px] md:h-[600px] xl:h-[700px] overflow-hidden rounded-xl">
          <Image
            src={hero1}
            alt={t("NAME")}
            fill
            className="rounded-xl object-cover transition-all duration-1000 ease-in-out hover:scale-110"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
