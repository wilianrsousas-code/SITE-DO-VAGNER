import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig, buildWhatsAppUrl } from "../config/siteConfig";
import { WhatsAppIcon } from "./SocialIcons";

export const PropertyCategoriesSection: React.FC = () => {
  return (
    <section
      id="imoveis"
      className="relative bg-[#FFFFFF] text-[#0F2952] py-20 sm:py-28 border-b border-[#0F2952]/10"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho Editorial */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#0F2952]/10 pb-8">
          <div>
            <div className="mb-3 flex items-center gap-2.5 text-xs font-medium tracking-[0.18em] text-[#1B3B6F]">
              <span>01</span>
              <span aria-hidden="true">·</span>
              <span>{siteConfig.categoriesSection.kicker}</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-[#0F2952] text-balance max-w-xl">
              {siteConfig.categoriesSection.title}
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base leading-[1.65] text-[#0F2952]/75 text-pretty">
            {siteConfig.categoriesSection.subtitle}
          </p>
        </div>

        {/* Grid de 4 Modalidades: 1 col (mobile), 2 cols (tablet), 4 cols (desktop) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {siteConfig.categoriesSection.items.map((category, index) => {
            const whatsappHref = buildWhatsAppUrl(
              siteConfig.contact.whatsappNumber,
              category.whatsappMessage
            );

            return (
              <motion.a
                key={category.id}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col justify-between bg-[#EBF5FC]/70 border border-[#1B3B6F]/15 p-6 sm:p-7 transition-editorial hover:bg-[#D8ECFA]/65 hover:border-[#1B3B6F]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B3B6F]"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between text-xs text-[#1B3B6F]/80">
                    <span className="font-mono font-semibold tabular-nums text-[#1B3B6F]">
                      {category.number}
                    </span>
                    <span className="tracking-wider uppercase text-[11px]">
                      {category.subtitle}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-semibold text-[#0F2952] transition-colors group-hover:text-[#1B3B6F]">
                    {category.title}
                  </h3>

                  <div
                    className="my-4 h-px w-10 bg-[#7CC0F0] transition-all duration-300 group-hover:w-16"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-[1.65] text-[#0F2952]/80 text-pretty">
                    {category.description}
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-[#0F2952]/10">
                  <span className="inline-flex w-full items-center justify-between bg-[#0F2952] px-4 py-3 text-xs font-semibold tracking-[0.1em] text-[#FFFFFF] transition-colors duration-200 group-hover:bg-[#1E9E5A] group-active:bg-[#1E9E5A] whitespace-nowrap shrink-0">
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366] transition-colors duration-200 group-hover:text-[#FFFFFF]" />
                      <span>CONSULTAR OPÇÕES</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#D4AF6A] transition-all duration-200 group-hover:text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
