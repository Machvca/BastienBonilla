"use client";

import logoBastien from "../../../public/assets/images/logoBastien.png";
import Insta from "../../components/Insta";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bottom-0 w-full p-4 text-stone-900-900 text-center  bg-transparent mt-auto backdrop-blur-md">
      <div className="grid grid-cols-3 items-center justify-items-center max-w-7xl mx-auto px-4">
        <a
          href="https://www.instagram.com/thetintinmickey/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-stone-900-700 cursor-pointer"
        >
          <Insta
            stroke="none"
            fill="#621316"
            className="drop-shadow-lg drop-shadow-white/50"
          />
        </a>
        <h1 className="text-xs text-[#621316]">
          © {new Date().getFullYear()} {t("FOOTER_COPYRIGHT")}
        </h1>
        <Link href="/">
          <Image
            src={logoBastien}
            alt="Logo"
            className="w-14 h-16 cursor-pointer text-[#621316]"
          />
        </Link>
      </div>
    </footer>
  );
}
