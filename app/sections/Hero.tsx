"use client";
import Image from "next/image";
import { Spotlight } from "../components/ui/spotlight-new";
import hero1 from "../../assets/images/hero1.jpg";
import { Spoiler } from "spoiled";

function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#0d0d0d] via-[#1a1a2e] to-[#3a0ca3]/20 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen items-center px-4 sm:px-8 md:px-20 py-24">
        {/* Texto */}
        <div className="text-center md:text-left">
          <Spotlight />
          <h1 className="bg-gradient-to-b from-[#432259] to-stone-300 bg-clip-text py-6 md:pb-10 text-5xl sm:text-6xl md:text-8xl font-bold text-transparent leading-tight">
            Tintin the Magician
          </h1>
          <p className="text-sm md:text-xl text-stone-200 text-left">
            A magnetic performer with a unique style, Tintin captivates
            audiences with his blend of magic and humor. His shows are a
            delightful mix of illusion and entertainment.
          </p>
          <Spoiler>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-50 my-4">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#432259_0%,#f4f4ff_40%,#fbf7ff_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-4 py-1 text-base md:text-lg font-medium text-[#432259] backdrop-blur-3xl">
                BOOK NOW
              </span>
            </button>
          </Spoiler>
        </div>

        {/* Imagen */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src={hero1}
            alt="Tintin the Magician"
            className="rounded-2xl object-cover max-w-full h-auto"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
