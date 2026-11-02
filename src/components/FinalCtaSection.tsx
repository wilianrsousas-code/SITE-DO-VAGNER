import React, { useState } from "react";
import { ArrowUpRight, Mail, Check } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig, buildWhatsAppUrl } from "../config/siteConfig";
import { WhatsAppIcon, InstagramIcon } from "./SocialIcons";

type SubjectOption = {
  id: string;
  label: string;
  message: string;
};

export const FinalCtaSection: React.FC = () => {
  const subjectOptions: SubjectOption[] = [
    {
      id: "geral",
      label: "Simulação Geral",
      message: siteConfig.contact.defaultWhatsappMessage,
    },
    ...siteConfig.developmentsSection.items.map((item) => ({
      id: item.id,
      label: item.name,
      message: item.whatsappMessage,
    })),
  ];

  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("geral");

  const activeSubject =
    subjectOptions.find((opt) => opt.id === selectedSubjectId) ||
    subjectOptions[0];

  const whatsappHref = buildWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    activeSubject.message
  );

  return (
    <section
      id="contato"
      className="relative bg-[#0C1D3B] text-[#FFFFFF] py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Brilho suave no fundo */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-[#7CC0F0]/12 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coluna Esquerda: Chamada e Seletor de Empreendimento (7 colunas) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium tracking-[0.18em] text-[#D4AF6A]">
              <span>05</span>
              <span aria-hidden="true">·</span>
              <span>{siteConfig.finalCta.kicker}</span>
            </div>

            <h2 className="font-editorial text-[clamp(2.15rem,4vw,3.65rem)] font-medium leading-[1.1] text-[#FFFFFF] text-balance">
              {siteConfig.finalCta.headline}
            </h2>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-[1.7] text-[#EBF5FC]/90 text-pretty">
              {siteConfig.finalCta.description}
            </p>

            {/* Seletor de Empreendimento para Simulação */}
            <div className="mt-8">
              <p className="mb-3 text-xs tracking-wider text-[#D8ECFA]/85">
                Selecione o empreendimento de seu interesse para iniciar a simulação:
              </p>
              <div
                role="group"
                aria-label="Selecionar empreendimento para simulação no WhatsApp"
                className="flex flex-wrap items-center gap-1.5 bg-[#152C54] p-2 border border-[#D8ECFA]/20"
              >
                {subjectOptions.map((option) => {
                  const isSelected = option.id === selectedSubjectId;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedSubjectId(option.id)}
                      className={`px-3 py-2 text-xs font-medium transition-editorial whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7CC0F0] ${
                        isSelected
                          ? "bg-[#D8ECFA] text-[#0F2952] font-semibold"
                          : "text-[#EBF5FC]/85 hover:text-[#FFFFFF]"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Botão Principal de Destaque (Único botão verde da seção) */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#1E9E5A] px-8 py-4 text-xs font-semibold tracking-[0.14em] text-[#FFFFFF] border border-[#25D366]/60 transition-editorial hover:bg-[#19874D] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7CC0F0]"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#FFFFFF]" />
                <span>{siteConfig.finalCta.buttonLabel}</span>
                <ArrowUpRight className="h-4 w-4 text-[#FFFFFF]" />
              </a>
            </div>
          </motion.div>

          {/* Coluna Direita: Cartão Oficial com o Logo Completo de Vagner Costa (5 colunas) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-[#FFFFFF] text-[#0F2952] border border-[#D8ECFA] overflow-hidden">
              {/* Topo do Cartão com o Logo Oficial sobre fundo Azul Marinho da Marca */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111E3C] px-6 py-7 flex flex-col items-center text-center border-b border-[#D4AF6A]/30 transition-opacity hover:opacity-95"
              >
                <img
                  src={siteConfig.brand.logoFullSrc}
                  alt="Logo Vagner Costa — Corretor de Imóveis — Realizando Sonhos, Construindo Histórias"
                  className="h-36 sm:h-40 w-auto object-contain"
                />
                <span className="mt-3 font-mono text-xs font-medium tracking-widest text-[#D4AF6A]">
                  {siteConfig.brand.creci}
                </span>
              </a>

              <div className="p-6 sm:p-7">
                <div className="mb-6 space-y-2.5 text-xs sm:text-sm text-[#0F2952]/85">
                  <p className="font-semibold text-[#0F2952]">
                    Consultoria para Minha Casa Minha Vida, HIS e HMP:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#1B3B6F] shrink-0 mt-0.5" />
                      <span>Casas prontas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#1B3B6F] shrink-0 mt-0.5" />
                      <span>Casas na planta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#1B3B6F] shrink-0 mt-0.5" />
                      <span>Apartamentos na planta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#1B3B6F] shrink-0 mt-0.5" />
                      <span>Apartamentos prontos</span>
                    </li>
                  </ul>
                </div>

                {/* Canais institucionais discretos no cartão (sem duplicar o botão verde ao lado) */}
                <div className="space-y-2.5 border-t border-[#0F2952]/10 pt-5 text-xs sm:text-sm">
                  <a
                    href={siteConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-[#EBF5FC] px-4 py-3 font-medium text-[#0F2952] transition-editorial hover:bg-[#D8ECFA]"
                  >
                    <span className="inline-flex items-center gap-2.5 truncate">
                      <InstagramIcon className="h-4 w-4 text-[#1B3B6F] shrink-0" />
                      <span className="truncate">
                        Instagram · {siteConfig.contact.instagramHandle}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#1B3B6F] shrink-0" />
                  </a>

                  {siteConfig.contact.email && (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center justify-between bg-[#F8FBFF] px-4 py-3 text-[#0F2952]/85 border border-[#0F2952]/10 transition-editorial hover:border-[#1B3B6F]"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Mail className="h-4 w-4 text-[#1B3B6F]" />
                        <span>E-mail</span>
                      </span>
                      <span className="truncate ml-2">
                        {siteConfig.contact.email}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
