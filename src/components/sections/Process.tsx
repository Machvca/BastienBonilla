"use client";

import React from "react";
import { Timeline } from "../../components/ui/timeline";
import { useTranslations } from "next-intl";
import { BackgroundLines } from "../../components/ui/background-lines";

export default function TimelineDemo() {
  const t = useTranslations();

  const data = [
    {
      title: t("TIMELINE_TITLE_1"),
      content: (
        <div className="grid grid-cols-2 gap-12 mb-12">
          <p className="text-[#621316]/90 text-xs md:text-2xl font-normal mb-8">
            {t("TIMELINE_DESC_1")}
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: t("TIMELINE_TITLE_2"),
      content: (
        <div className="mb-12">
          <p className="text-[#621316]/90 text-xs md:text-2xl font-normal mb-8">
            {t("TIMELINE_DESC_2")}
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: t("TIMELINE_TITLE_3"),
      content: (
        <div className="grid grid-cols-2 gap-12 mb-12">
          <p className="text-[#621316]/90 text-xs md:text-2xl font-normal mb-8">
            {t("TIMELINE_DESC_3")}
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: t("TIMELINE_TITLE_4"),
      content: (
        <div className="mb-12">
          <p className="text-[#621316]/90 text-xs md:text-2xl font-normal mb-8">
            {t("TIMELINE_DESC_4")}
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: t("TIMELINE_TITLE_5")  ,
      content: (
        <div className="mb-12">
          <p className="text-[#621316]/90 text-xs md:text-2xl font-normal mb-8">
            {t("TIMELINE_DESC_5")}
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];

  return (
    <>
      <BackgroundLines>
        <div className="w-full bg-transparent">
          <Timeline data={data} />
        </div>
      </BackgroundLines>

      <div className="w-full h-96 grid grid-col-2 items-center justify-center bg-[url(../../public/assets/images/hero3.webp)] bg-cover bg-center bg-no-repeat rounded-2xl shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]">
        <h1 className="text-stone-200 text-4xl font-rubik -mb-60">{t("BOOK_ME")}</h1>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-stone-900-400 focus:ring-offset-2 focus:ring-offset-stone-900-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#621316_0%,stone-500_50%,#621316_10%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-stone-900-900 px-3 py-1 text-sm font-medium font-syne text-stone-200 backdrop-blur-3xl">
            {t("CHECK_AVAILABILITY")}
          </span>
        </button>
      </div>
    </>
  );
}
