import React from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig, buildWhatsAppUrl } from "../config/siteConfig";
import { EditorialMediaFrame } from "./EditorialMediaFrame";
import { WhatsAppIcon } from "./SocialIcons";

export const HeroSection: React.FC = () => {
  const whatsappHref = buildWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.defaultWhatsappMessage
  );

  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100vh-4.5rem)] items-center bg-[#0C1D3B] text-[#FFFFFF] overflow-hidden"
    >
      {/* Luz suave em Azul Bebê e Dourado da Marca no fundo Azul Anil */}
      <div
        className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#7CC0F0]/12 blur-[140px]"
        aria-hidden="true"
      />

      {/* Logotipo Oficial em Marca d'Água no fundo do Hero conforme solicitado */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-[30%] select-none opacity-[0.065]"
        aria-hidden="true"
      >
        <img
          src={siteConfig.brand.logoFullSrc}
          alt=""
          className="h-[460px] w-[460px] sm:h-[580px] sm:w-[580px] lg:h-[660px] lg:w-[660px] object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coluna Editorial (7 colunas no desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Logo Oficial da Marca Vagner Costa em Destaque (clicável para o WhatsApp) */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-6 flex items-center gap-4 border-b border-[#D8ECFA]/15 pb-5 w-full max-w-lg transition-opacity hover:opacity-95"
            >
              <img
                src={siteConfig.brand.logoEmblemSrc}
                alt="Emblema Vagner Costa Corretor de Imóveis"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain shrink-0"
              />
              <div>
                <p className="font-editorial text-2xl sm:text-3xl font-semibold tracking-[0.12em] text-[#FFFFFF] group-hover:text-[#D8ECFA] transition-colors">
                  {siteConfig.brand.name}
                </p>
                <p className="text-[11px] sm:text-xs font-medium tracking-[0.22em] text-[#D4AF6A] uppercase">
                  {siteConfig.brand.roleTitle} · {siteConfig.brand.creci}
                </p>
                <p className="mt-1 text-xs italic tracking-wider text-[#D8ECFA]">
                  &ldquo;{siteConfig.brand.motto}&rdquo;
                </p>
              </div>
            </a>

            {/* Frase da Marca no Hero */}
            <p className="mb-2 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#D4AF6A]">
              {siteConfig.hero.mottoHeadline}
            </p>

            {/* Headline Principal */}
            <h1 className="font-editorial text-[clamp(2.25rem,4.4vw,4rem)] font-medium leading-[1.08] tracking-[-0.01em] text-[#FFFFFF] text-balance max-w-2xl">
              {siteConfig.hero.headline}
            </h1>

            {/* Divisor sutil */}
            <div
              className="my-6 h-px w-20 bg-gradient-to-r from-[#D4AF6A] to-[#7CC0F0]"
              aria-hidden="true"
            />

            {/* Texto Complementar */}
            <p className="max-w-xl text-base sm:text-lg font-normal leading-[1.7] text-[#EBF5FC]/90 text-pretty">
              {siteConfig.hero.subtitle}
            </p>

            {/* Especialidades em linha tipográfica limpa */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium tracking-wider text-[#D8ECFA]">
              <span>Casas na Planta</span>
              <span aria-hidden="true" className="text-[#D4AF6A]">·</span>
              <span>Casas Prontas</span>
              <span aria-hidden="true" className="text-[#D4AF6A]">·</span>
              <span>Apartamentos na Planta</span>
              <span aria-hidden="true" className="text-[#D4AF6A]">·</span>
              <span>Apartamentos Prontos</span>
            </div>

            {/* Ações Principais */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#1E9E5A] px-7 py-4 text-xs font-semibold tracking-[0.12em] text-[#FFFFFF] border border-[#25D366]/60 transition-editorial hover:bg-[#19874D] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7CC0F0]"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#FFFFFF]" />
                <span>ME CHAME AQUI · FALE COM VAGNER</span>
                <ArrowUpRight className="h-4 w-4 text-[#FFFFFF]" />
              </a>

              <a
                href="#empreendimentos"
                className="inline-flex items-center justify-center gap-3 border border-[#D8ECFA]/40 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.12em] text-[#FFFFFF] transition-editorial hover:border-[#D4AF6A] hover:bg-[#1B3B6F]/60 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7CC0F0]"
              >
                <span>{siteConfig.hero.secondaryCta}</span>
                <ArrowDown className="h-4 w-4 text-[#D4AF6A]" />
              </a>
            </div>
          </motion.div>

          {/* Coluna Fotografia Editorial do Vagner Costa (Clicável para o WhatsApp) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div
                className="pointer-events-none absolute -bottom-3 -left-3 h-full w-full border border-[#D4AF6A]/40 hidden sm:block"
                aria-hidden="true"
              />
              <EditorialMediaFrame
                src={siteConfig.hero.portraitImageSrc}
                alt={siteConfig.hero.portraitImageAlt}
                variant="portrait-hero"
                aspectClassName="aspect-[4/5]"
                caption={siteConfig.hero.portraitCaption}
                href={whatsappHref}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
