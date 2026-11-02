import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig, buildWhatsAppUrl } from "../config/siteConfig";
import { WhatsAppIcon, InstagramIcon } from "./SocialIcons";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappHref = buildWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.defaultWhatsappMessage
  );

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Modalidades", href: "#imoveis" },
    { label: "Empreendimentos", href: "#empreendimentos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        isScrolled
          ? "bg-[#0B1E3D]/95 text-[#FFFFFF] backdrop-blur-md border-b border-[#D8ECFA]/15"
          : "bg-[#0B1E3D] text-[#FFFFFF] border-b border-[#D8ECFA]/15"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-5 py-3.5 sm:px-8 lg:px-12">
        {/* Zone 1: Brand Lockup (Emblem + Name) */}
        <a
          href="#inicio"
          className="inline-flex items-center gap-3 transition-opacity hover:opacity-90 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7CC0F0]"
        >
          <img
            src={siteConfig.brand.logoEmblemSrc}
            alt="Logo Vagner Costa"
            className="h-10 w-10 object-contain shrink-0"
          />
          <span className="font-editorial text-xl sm:text-2xl font-semibold tracking-[0.14em] text-[#FFFFFF]">
            {siteConfig.brand.name}
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-7 text-sm font-normal text-[#D8ECFA]/85"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-[#D8ECFA]/85 transition-editorial hover:text-[#FFFFFF] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D4AF6A] after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7CC0F0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Dedicated Instagram button + Styled WhatsApp CTA button */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de Vagner Costa (${siteConfig.contact.instagramHandle})`}
            title={`Instagram ${siteConfig.contact.instagramHandle}`}
            className="inline-flex items-center gap-2 border border-[#D4AF6A]/45 bg-[#132952] px-3 py-2 text-xs font-medium tracking-wider text-[#FFFFFF] transition-editorial hover:border-[#D4AF6A] hover:bg-[#1B3B6F] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7CC0F0]"
          >
            <InstagramIcon className="h-4 w-4 text-[#D4AF6A]" />
            <span className="hidden md:inline">Instagram</span>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2.5 border border-[#1E9E5A]/70 bg-[#14353E] px-4 py-2 text-xs font-semibold tracking-wider text-[#FFFFFF] transition-editorial hover:border-[#25D366] hover:bg-[#1E9E5A] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7CC0F0]"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            <span>Fale com Vagner</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#D4AF6A]" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen
                ? "Fechar menu de navegação"
                : "Abrir menu de navegação"
            }
            className="inline-flex h-10 w-10 items-center justify-center text-[#FFFFFF] transition-editorial hover:text-[#7CC0F0] lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7CC0F0]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile & Tablet */}
      {mobileMenuOpen && (
        <div className="border-t border-[#D8ECFA]/15 bg-[#0B1E3D] px-5 py-6 sm:px-8 lg:hidden">
          <nav
            aria-label="Navegação mobile"
            className="flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-editorial text-xl tracking-wide text-[#FFFFFF] transition-editorial hover:text-[#7CC0F0]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#D8ECFA]/15 flex flex-col gap-2.5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="inline-flex w-full items-center justify-center gap-2.5 bg-[#1E9E5A] px-5 py-3.5 text-xs font-semibold tracking-[0.12em] text-[#FFFFFF] transition-editorial hover:bg-[#19874D] whitespace-nowrap"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>ME CHAME AQUI · FALE COM VAGNER</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="inline-flex w-full items-center justify-center gap-2.5 border border-[#D4AF6A]/45 bg-[#132952] px-5 py-3 text-xs font-medium tracking-[0.12em] text-[#FFFFFF] transition-editorial hover:bg-[#1B3B6F] whitespace-nowrap"
              >
                <InstagramIcon className="h-4 w-4 text-[#D4AF6A]" />
                <span>INSTAGRAM · {siteConfig.contact.instagramHandle}</span>
                <ArrowUpRight className="h-4 w-4 text-[#D4AF6A]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
