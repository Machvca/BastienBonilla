import type { Metadata } from "next";
import { Archivo, Syne, Rubik } from "next/font/google";
import { routing, type Locale } from "@/src/i18n/routing";
import "../../app/globals.css";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

// Cargar fuentes
const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});
const syne = Syne({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-syne",
});
const rubik = Rubik({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Bastien Bonilla",
  description: "My personal website",
};

type LocaleLayoutProps = {
  children: ReactNode;
  // Next.js 15 pasa params como promesa a layouts async
  params: Promise<{ locale: string }> | { locale: string };
};

export default async function LocaleLayout(props: LocaleLayoutProps) {
  const { children } = props;

  // 🔑 Esperar params antes de usar
  const params = await props.params;
  const locale = params.locale as Locale;

  // Validar locale
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Cargar mensajes
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`
          ${syne.variable} ${archivo.variable} ${rubik.variable} 
          font-syne antialiased cursor-crosshair flex flex-col
          min-h-screen overflow-x-hidden
        `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
