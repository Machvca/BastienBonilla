"use client";

import Image from "next/image";
import hero2 from "../../../public/assets/images/hero2.jpg";
import hero3 from "../../../public/assets/images/hero3.jpg";
import hero4 from "../../../public/assets/images/hero4.jpg";
import about4 from "../../../public/assets/images/about4.jpg";
import { useTranslations } from "next-intl";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function About() {
  const t = useTranslations();

  const titles = [
    t("ABOUT_CARD_1_TITLE"),
    t("ABOUT_CARD_2_TITLE"),
    t("ABOUT_CARD_3_TITLE"),
  ];

  // const descriptions = [
  //   t("ABOUT_CARD_1_DESC"),
  //   t("ABOUT_CARD_2_DESC"),
  //   t("ABOUT_CARD_3_DESC"),
  // ];

  const images = [hero2, hero3, hero4];

  // Refs e inViews para cada tarjeta (declarados de forma explícita)
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const inView1 = useInView(ref1, { once: true });
  const inView2 = useInView(ref2, { once: true });
  const inView3 = useInView(ref3, { once: true });

  const refs = [ref1, ref2, ref3];
  const inViews = [inView1, inView2, inView3];

  // Ref y animaciones para bloque de texto
  const textRef = useRef(null);
  const inViewText = useInView(textRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div className="overflow-hidden bg-stone-100 relative w-full min-h-screen">
      {/* Tarjetas */}
      <div className="w-full transition min-h-screen antialiased flex flex-col md:flex-row flex-wrap my-68 md:my-0 gap-56 md:gap-8 items-center justify-center px-4">
        {images.map((bg, idx) => (
          <motion.div
            key={idx}
            ref={refs[idx]}
            initial={{ opacity: 0, y: 40 }}
            animate={inViews[idx] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 24px rgba(0, 0, 0, .6)",
            }}
            className="flex flex-col items-center justify-center group-hover:scale-125 rounded-2xl text-center px-4 sm:px-6 md:px-8 w-full md:w-[30%] h-[400px] bg-cover bg-center text-white shadow-lg mb-12 -mt-64"
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-shadow-lg">
              {titles[idx]}
            </h1>
            {/* <p className="text-center hover:scale-105 text-sm">
              {descriptions[idx]}
            </p> */}
          </motion.div>
        ))}
      </div>

      {/* Imagen con texto animado */}
      <div className="relative w-full min-h-screen overflow-hidden md:-mt-64">
        <Image
          src={about4}
          alt="Bastien Bonilla"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inViewText ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.1 }}
          style={{ y }}
          className="absolute top-0 left-0 p-6 sm:p-12 text-left sm:text-right text-white bg-black/40 m-4 sm:ml-12 sm:mt-12 rounded-xl max-w-2xl"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold">
            &quot;Bastien Bonilla&quot;
          </h1>
          <p className="mt-4 text-sm sm:text-base">
            {t("ABOUT_IMAGE_DESCRIPTION")}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
