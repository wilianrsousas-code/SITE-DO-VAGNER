import React from "react";
import { motion } from "motion/react";
import { siteConfig, buildWhatsAppUrl } from "../config/siteConfig";
import { EditorialMediaFrame } from "./EditorialMediaFrame";

export const AboutSection: React.FC = () => {
  const whatsappHref = buildWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.defaultWhatsappMessage
  );

  return (
    <section
      id="sobre"
      className="relative bg-[#F8FBFF] text-[#0F2952] py-20 sm:py-28 lg:py-32 border-b border-[#0F2952]/10"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Coluna da Fotografia (5 colunas no desktop) — Clicável para o WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <EditorialMediaFrame
                src={siteConfig.about.portraitImageSrc}
                alt={siteConfig.about.portraitImageAlt}
                variant="portrait-about"
                aspectClassName="aspect-[4/5]"
                caption={siteConfig.about.portraitCaption}
                href={whatsappHref}
              />
            </div>
          </motion.div>

          {/* Coluna de Texto Editorial (7 colunas no desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start"
          >
            {/* Kicker Editorial Limpo */}
            <div className="mb-4 flex items-center gap-2.5 text-xs font-medium tracking-[0.18em] text-[#1B3B6F]">
              <span>03</span>
              <span aria-hidden="true">·</span>
              <span>{siteConfig.about.kicker}</span>
            </div>

            {/* Título da Seção */}
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-[#0F2952] text-balance max-w-xl">
              {siteConfig.about.title}
            </h2>

            {/* Frase da Marca */}
            <p className="mt-3 font-editorial text-xl italic text-[#1B3B6F]">
              &ldquo;{siteConfig.brand.motto}&rdquo;
            </p>

            {/* Linha divisória */}
            <div className="my-6 h-px w-14 bg-[#7CC0F0]" aria-hidden="true" />

            {/* Texto Principal */}
            <p className="max-w-[60ch] text-base sm:text-lg leading-[1.75] text-[#0F2952]/85 text-pretty">
              {siteConfig.about.description}
            </p>

            <p className="mt-4 max-w-[60ch] text-base leading-[1.75] text-[#0F2952]/75 text-pretty">
              {siteConfig.about.secondParagraph}
            </p>

            {/* Assinatura Editorial Limpa com Emblema VC e CRECI em Dourado */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 bg-[#0C1D3B] px-5 py-4 border border-[#D4AF6A]/35 w-full max-w-xl flex items-center justify-between gap-4 transition-opacity hover:opacity-95"
            >
              <div className="flex items-center gap-3.5">
                <img
                  src={siteConfig.brand.logoEmblemSrc}
                  alt="Logo VC"
                  className="h-12 w-12 object-contain shrink-0"
                />
                <div>
                  <p className="font-editorial text-2xl font-semibold tracking-[0.12em] text-[#FFFFFF]">
                    {siteConfig.brand.name}
                  </p>
                  <p className="text-xs font-medium tracking-[0.16em] text-[#D4AF6A] uppercase">
                    {siteConfig.brand.roleTitle} · {siteConfig.brand.creci}
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
