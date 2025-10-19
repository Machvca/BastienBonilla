"use client";

import Footer from "@/src/components/sections/Footer";
import Image from "next/image";
import hero1 from "../../../../public/assets/images/hero1.webp";
import Navbar from "@/src/components/sections/Navbar";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";


export default function Home() {
  const t = useTranslations("About");

  return (
    <main className="bg-stone-000 min-h-screen flex flex-col bg-gradient-to-br from-bastien/10 via bastien/40 to-bastien/80">
      <Navbar />

      <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 my-20 md:my-40 gap-10 ">
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-xl text-left font-rubik max-w-2xl text-bastien "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
{t("description")}

    
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src={hero1}
            alt="Tintin the Magician"
            className="rounded-2xl mask-r-from-100% mask-b-from-75% mask-radial-from-100% mask-radial-to-95% hover:mask-none object-cover w-full h-auto max-w-md shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out"
            width={500}
            height={400}
            priority
          />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
