import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig, buildWhatsAppUrl } from "../config/siteConfig";
import { WhatsAppIcon, InstagramIcon } from "./SocialIcons";

export const Footer: React.FC = () => {
  const whatsappHref = buildWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.defaultWhatsappMessage
  );

  const modalities = [
    "Casas prontas",
    "Casas na planta",
    "Apartamentos na planta",
    "Apartamentos prontos",
  ];

  return (
    <footer className="bg-[#08152C] text-[#EBF5FC] border-t border-[#D8ECFA]/15">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 pb-12 border-b border-[#D8ECFA]/15">
          {/* Identidade da Marca com Logo Oficial e Modalidades uma embaixo da outra (5 colunas) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center gap-5 transition-opacity hover:opacity-95"
            >
              <img
                src={siteConfig.brand.logoFullSrc}
                alt="Logo Vagner Costa — Corretor de Imóveis"
                className="h-24 w-auto object-contain self-start"
              />
              <div>
                <p className="font-editorial text-2xl font-semibold tracking-[0.12em] text-[#FFFFFF] group-hover:text-[#D8ECFA] transition-colors">
                  {siteConfig.brand.name}
                </p>
                <p className="text-xs font-medium tracking-[0.18em] text-[#D4AF6A] uppercase">
                  {siteConfig.brand.roleTitle} · {siteConfig.brand.creci}
                </p>
                <p className="mt-1.5 text-xs italic text-[#D8ECFA]/85">
                  &ldquo;{siteConfig.brand.motto}&rdquo;
                </p>
              </div>
            </a>

            <ul className="mt-6 space-y-1.5 text-xs text-[#D8ECFA]/75">
              {modalities.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    className="h-1 w-1 rounded-full bg-[#D4AF6A] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegação Rápida (3 colunas) */}
          <div className="md:col-span-3">
            <p className="mb-4 text-xs font-medium tracking-[0.16em] text-[#D4AF6A] uppercase">
              Navegação
            </p>
            <ul className="space-y-2.5 text-sm text-[#D8ECFA]/80">
              <li>
                <a href="#inicio" className="transition-editorial hover:text-[#FFFFFF]">
                  Início
                </a>
              </li>
              <li>
                <a href="#imoveis" className="transition-editorial hover:text-[#FFFFFF]">
                  Modalidades
                </a>
              </li>
              <li>
                <a href="#empreendimentos" className="transition-editorial hover:text-[#FFFFFF]">
                  Empreendimentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="transition-editorial hover:text-[#FFFFFF]">
                  Sobre Vagner Costa
                </a>
              </li>
              <li>
                <a href="#contato" className="transition-editorial hover:text-[#FFFFFF]">
                  Simulação &amp; Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato Direto com Botões de WhatsApp, Instagram e E-mail (4 colunas) */}
          <div className="md:col-span-4">
            <p className="mb-4 text-xs font-medium tracking-[0.16em] text-[#D4AF6A] uppercase">
              Contato Direto
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-[#1E9E5A] px-4 py-3 text-xs font-semibold text-[#FFFFFF] transition-editorial hover:bg-[#19874D]"
              >
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4 text-[#FFFFFF] shrink-0" />
                  <span>WhatsApp · {siteConfig.contact.whatsappDisplay}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#FFFFFF] shrink-0" />
              </a>

              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 border border-[#D4AF6A]/40 bg-[#112448] px-4 py-3 text-xs font-medium text-[#FFFFFF] transition-editorial hover:border-[#D4AF6A] hover:bg-[#183161]"
              >
                <span className="inline-flex items-center gap-2 truncate">
                  <InstagramIcon className="h-4 w-4 text-[#D4AF6A] shrink-0" />
                  <span className="truncate">
                    Instagram · {siteConfig.contact.instagramHandle}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#D4AF6A] shrink-0" />
              </a>

              {siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center justify-between gap-3 border border-[#D8ECFA]/15 bg-[#0D1E3A] px-4 py-2.5 text-xs text-[#D8ECFA]/85 transition-editorial hover:border-[#7CC0F0] hover:text-[#FFFFFF]"
                >
                  <span className="inline-flex items-center gap-2 truncate">
                    <Mail className="h-3.5 w-3.5 text-[#D4AF6A] shrink-0" />
                    <span className="truncate">{siteConfig.contact.email}</span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#D8ECFA]/60 shrink-0" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Aviso Legal à esquerda e Direitos Reservados alinhado à direita */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#D8ECFA]/60 leading-relaxed">
          <p className="max-w-2xl">{siteConfig.footer.disclaimer}</p>
          <p className="text-[#D8ECFA]/80 font-medium whitespace-nowrap shrink-0 sm:text-right self-end sm:self-auto">
            &copy; {siteConfig.footer.copyrightYear} {siteConfig.brand.shortName} - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
