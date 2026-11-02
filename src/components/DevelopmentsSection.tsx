import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  MapPin,
  Check,
  X,
  Info,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";
import { motion } from "motion/react";
import {
  siteConfig,
  buildWhatsAppUrl,
  DevelopmentItem,
} from "../config/siteConfig";
import { WhatsAppIcon } from "./SocialIcons";

type FilterLine = "todos" | "longitude" | "franco-da-rocha";

export const DevelopmentsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterLine>("todos");
  const [selectedProduct, setSelectedProduct] =
    useState<DevelopmentItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const openProductModal = (item: DevelopmentItem) => {
    setSelectedProduct(item);
    setActiveImageIndex(0);
  };

  // Fechar modal com tecla ESC e navegar com setas quando houver galeria
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProduct(null);
      } else if (
        selectedProduct?.gallery &&
        selectedProduct.gallery.length > 1
      ) {
        if (e.key === "ArrowRight") {
          setActiveImageIndex((prev) =>
            prev === selectedProduct.gallery!.length - 1 ? 0 : prev + 1
          );
        } else if (e.key === "ArrowLeft") {
          setActiveImageIndex((prev) =>
            prev === 0 ? selectedProduct.gallery!.length - 1 : prev - 1
          );
        }
      }
    };
    if (selectedProduct) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  const allItems = siteConfig.developmentsSection.items;
  const filteredItems =
    activeFilter === "todos"
      ? allItems
      : allItems.filter((item) => item.line === activeFilter);

  const countLongitude = allItems.filter((i) => i.line === "longitude").length;
  const countFranco = allItems.filter(
    (i) => i.line === "franco-da-rocha"
  ).length;

  const activeModalGallery = selectedProduct?.gallery;
  const currentGalleryItem =
    activeModalGallery && activeModalGallery.length > 0
      ? activeModalGallery[activeImageIndex] || activeModalGallery[0]
      : null;

  return (
    <section
      id="empreendimentos"
      className="relative bg-[#EBF5FC] text-[#0F2952] py-20 sm:py-28 lg:py-32 border-b border-[#0F2952]/10"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho da Seção + Filtro por Região/Linha */}
        <div className="mb-12 sm:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#0F2952]/15 pb-8">
          <div>
            <div className="mb-3 flex items-center gap-2.5 text-xs font-medium tracking-[0.18em] text-[#1B3B6F]">
              <span>02</span>
              <span aria-hidden="true">·</span>
              <span>{siteConfig.developmentsSection.kicker}</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-[#0F2952] text-balance max-w-xl">
              {siteConfig.developmentsSection.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base leading-[1.65] text-[#0F2952]/80 text-pretty">
              {siteConfig.developmentsSection.subtitle}
            </p>
          </div>

          {/* Controles de Filtro Interativos */}
          <div
            role="group"
            aria-label="Filtrar empreendimentos"
            className="inline-flex flex-wrap items-center gap-1.5 bg-[#FFFFFF] p-1.5 border border-[#1B3B6F]/20 self-start lg:self-end"
          >
            <button
              type="button"
              onClick={() => setActiveFilter("todos")}
              className={`px-3.5 py-2 text-xs font-medium transition-editorial whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#1B3B6F] ${
                activeFilter === "todos"
                  ? "bg-[#0F2952] text-[#FFFFFF]"
                  : "text-[#0F2952]/75 hover:text-[#0F2952]"
              }`}
            >
              Todos ({allItems.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("longitude")}
              className={`px-3.5 py-2 text-xs font-medium transition-editorial whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#1B3B6F] ${
                activeFilter === "longitude"
                  ? "bg-[#0F2952] text-[#FFFFFF]"
                  : "text-[#0F2952]/75 hover:text-[#0F2952]"
              }`}
            >
              São Paulo · Longitude ({countLongitude})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("franco-da-rocha")}
              className={`px-3.5 py-2 text-xs font-medium transition-editorial whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#1B3B6F] ${
                activeFilter === "franco-da-rocha"
                  ? "bg-[#0F2952] text-[#FFFFFF]"
                  : "text-[#0F2952]/75 hover:text-[#0F2952]"
              }`}
            >
              Franco da Rocha · VIC ({countFranco})
            </button>
          </div>
        </div>

        {/* Grid Responsivo de Produtos: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {filteredItems.map((item, index) => {
            const whatsappHref = buildWhatsAppUrl(
              siteConfig.contact.whatsappNumber,
              item.whatsappMessage
            );
            const isVerticalBanner = item.line === "longitude";
            const hasGallery = Boolean(item.gallery && item.gallery.length > 1);

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: (index % 3) * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => openProductModal(item)}
                className="group cursor-pointer flex flex-col justify-between bg-[#FFFFFF] border border-[#1B3B6F]/15 transition-editorial hover:border-[#0F2952]/50 hover:shadow-sm"
              >
                {/* Imagem de Capa do Empreendimento */}
                <div>
                  <div
                    className={`relative w-full overflow-hidden border-b border-[#0F2952]/10 ${
                      isVerticalBanner
                        ? "aspect-[4/5] bg-[#081B4B]"
                        : "aspect-[4/5] bg-[#0F2952]"
                    }`}
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className={`h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] ${
                        isVerticalBanner
                          ? "object-contain object-center"
                          : "object-cover object-center"
                      }`}
                    />

                    {/* Indicador de imagens conceituais e plantas para Horizonte e Panorama */}
                    {hasGallery && (
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-[#0C1D3B]/90 px-3 py-1.5 text-[11px] font-medium text-[#D4AF6A] backdrop-blur-sm border border-[#D4AF6A]/35">
                        <Images className="h-3.5 w-3.5" />
                        <span>{item.gallery!.length} imagens e plantas</span>
                      </div>
                    )}

                    {/* Overlay discreto indicando clique para ver informações */}
                    <div className="absolute bottom-3 right-3 bg-[#0F2952]/90 px-3 py-1.5 text-[11px] font-medium text-[#FFFFFF] backdrop-blur-sm border border-[#D8ECFA]/25 transition-editorial group-hover:bg-[#1B3B6F]">
                      <span>
                        {hasGallery
                          ? "Ver imagens e informações"
                          : "Ver detalhes"}
                      </span>
                    </div>
                  </div>

                  {/* Corpo do Card com informações transcritas */}
                  <div className="p-6 pb-4">
                    <div className="mb-2 flex flex-wrap items-center gap-1.5 text-xs text-[#1B3B6F]">
                      <span className="font-semibold uppercase tracking-wider">
                        {item.builder}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1 text-[#0F2952]/75">
                        <MapPin className="h-3 w-3 text-[#1B3B6F] shrink-0" />
                        {item.region}
                      </span>
                    </div>

                    {/* Nome do Produto / Empreendimento */}
                    <h3 className="font-editorial text-2xl font-semibold text-[#0F2952] transition-colors group-hover:text-[#1B3B6F]">
                      {item.name}
                    </h3>

                    {/* Valor / Destaque Principal transcrito */}
                    <p className="mt-2 text-base font-semibold text-[#1B3B6F] tabular-nums">
                      {item.priceHighlight}
                    </p>

                    {/* Resumo das condições */}
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#0F2952]/80 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Lista rápida de valores/condições do banner */}
                    <div className="mt-4 pt-3 border-t border-[#0F2952]/10 space-y-1.5">
                      {item.conditions.map((cond) => (
                        <div
                          key={cond.label}
                          className="flex items-baseline justify-between gap-2 text-xs"
                        >
                          <span className="text-[#0F2952]/75 truncate">
                            {cond.label}:
                          </span>
                          <span className="font-semibold text-[#0F2952] whitespace-nowrap tabular-nums">
                            {cond.originalPrice && (
                              <span className="mr-1.5 text-[11px] font-normal line-through text-[#0F2952]/50">
                                {cond.originalPrice}
                              </span>
                            )}
                            {cond.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rodapé de Ações do Card */}
                <div
                  className="px-6 pb-6 pt-2 flex flex-col gap-2.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => openProductModal(item)}
                    className="inline-flex w-full items-center justify-center gap-2 border border-[#1B3B6F]/30 bg-[#EBF5FC]/75 px-4 py-3 text-xs font-semibold tracking-wider text-[#0F2952] transition-editorial hover:bg-[#D8ECFA] whitespace-nowrap"
                  >
                    <Info className="h-3.5 w-3.5 text-[#1B3B6F]" />
                    <span>VER INFORMAÇÕES DO PRODUTO</span>
                  </button>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-between bg-[#0F2952] px-5 py-3.5 text-xs font-medium tracking-[0.1em] text-[#FFFFFF] transition-editorial hover:bg-[#1B3B6F] whitespace-nowrap"
                  >
                    <span>FAZER SIMULAÇÃO</span>
                    <ArrowUpRight className="h-4 w-4 text-[#7CC0F0]" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Modal de Informações do Produto (Com todas as imagens conceituais, perspectivas, decorado e plantas para Horizonte e Panorama) */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F2952]/85 p-4 sm:p-6 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[#FFFFFF] text-[#0F2952] border border-[#D8ECFA] max-h-[92vh] overflow-y-auto"
          >
            {/* Barra de Topo do Modal */}
            <div className="sticky top-0 z-20 flex items-center justify-between gap-4 bg-[#0F2952] px-6 py-4 text-[#FFFFFF] border-b border-[#D8ECFA]/20">
              <div>
                <p className="text-[11px] font-medium tracking-[0.16em] text-[#7CC0F0] uppercase">
                  {selectedProduct.builder} · {selectedProduct.region}
                </p>
                <h3
                  id="product-modal-title"
                  className="font-editorial text-2xl font-semibold tracking-wide"
                >
                  {selectedProduct.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Fechar informações do produto"
                className="p-2 text-[#D8ECFA] transition-editorial hover:text-[#FFFFFF]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Conteúdo Principal do Modal */}
            <div className="p-6 sm:p-8 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Coluna da Imagem Principal / Visualizador (6 colunas) */}
                <div className="lg:col-span-6 flex flex-col">
                  <div className="relative overflow-hidden bg-[#081B4B] border border-[#0F2952]/15">
                    <img
                      src={
                        currentGalleryItem
                          ? currentGalleryItem.src
                          : selectedProduct.imageSrc
                      }
                      alt={
                        currentGalleryItem
                          ? `${selectedProduct.name} — ${currentGalleryItem.label}`
                          : selectedProduct.imageAlt
                      }
                      referrerPolicy="no-referrer"
                      className="w-full h-auto max-h-[460px] object-contain mx-auto"
                    />

                    {/* Controles de navegação se o produto tiver múltiplas imagens (Horizonte / Panorama) */}
                    {activeModalGallery && activeModalGallery.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveImageIndex((prev) =>
                              prev === 0
                                ? activeModalGallery.length - 1
                                : prev - 1
                            )
                          }
                          aria-label="Imagem anterior"
                          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-[#0C1D3B]/85 text-[#FFFFFF] border border-[#D8ECFA]/30 transition-editorial hover:bg-[#1B3B6F]"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setActiveImageIndex((prev) =>
                              prev === activeModalGallery.length - 1
                                ? 0
                                : prev + 1
                            )
                          }
                          aria-label="Próxima imagem"
                          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-[#0C1D3B]/85 text-[#FFFFFF] border border-[#D8ECFA]/30 transition-editorial hover:bg-[#1B3B6F]"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>

                        {/* Legenda da foto ativa */}
                        <div className="bg-[#0C1D3B] px-4 py-3 text-xs text-[#FFFFFF] flex items-center justify-between gap-3 border-t border-[#D8ECFA]/20">
                          <div>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D4AF6A] mr-2">
                              {currentGalleryItem?.category}
                            </span>
                            <span className="font-medium">
                              {currentGalleryItem?.label}
                            </span>
                          </div>
                          <span className="font-mono text-[11px] text-[#D8ECFA] shrink-0">
                            {activeImageIndex + 1} / {activeModalGallery.length}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Miniaturas clicáveis logo abaixo da imagem principal (quando houver galeria) */}
                  {activeModalGallery && activeModalGallery.length > 1 && (
                    <div className="mt-3">
                      <p className="mb-2 text-xs font-semibold tracking-wider text-[#1B3B6F] uppercase">
                        Clique nas imagens conceituais, áreas de lazer e plantas ({activeModalGallery.length}):
                      </p>
                      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-56 overflow-y-auto pr-1">
                        {activeModalGallery.map((img, idx) => {
                          const isSelected = idx === activeImageIndex;
                          return (
                            <button
                              key={img.src}
                              type="button"
                              onClick={() => setActiveImageIndex(idx)}
                              className={`group relative overflow-hidden aspect-[4/3] bg-[#0C1D3B] border transition-all ${
                                isSelected
                                  ? "border-2 border-[#D4AF6A] ring-1 ring-[#0F2952]"
                                  : "border-[#0F2952]/20 opacity-75 hover:opacity-100"
                              }`}
                            >
                              <img
                                src={img.src}
                                alt={img.label}
                                className="h-full w-full object-cover"
                              />
                              <span className="sr-only">{img.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <p className="mt-2.5 text-[11px] text-[#0F2952]/60 text-center">
                    *Consulte condições e disponibilidade de unidades com Vagner Costa.
                  </p>
                </div>

                {/* Coluna das Informações do Produto (6 colunas) */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Programas / Enquadramento */}
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium text-[#1B3B6F]">
                      {selectedProduct.programTags.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          {idx > 0 && <span aria-hidden="true">·</span>}
                          <span>{tag}</span>
                        </React.Fragment>
                      ))}
                    </div>

                    <h4 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#0F2952]">
                      {selectedProduct.priceHighlight}
                    </h4>

                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#0F2952]/85">
                      {selectedProduct.description}
                    </p>

                    {/* Quadro de Condições e Valores do Produto */}
                    <div className="mt-6 bg-[#EBF5FC] p-5 border border-[#1B3B6F]/20">
                      <p className="text-xs font-semibold tracking-wider text-[#1B3B6F] uppercase">
                        Condições e Valores do Empreendimento
                      </p>
                      <div className="mt-3 space-y-3">
                        {selectedProduct.conditions.map((cond) => (
                          <div
                            key={cond.label}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#0F2952]/10 pb-2.5 last:border-b-0 last:pb-0"
                          >
                            <div>
                              <p className="text-sm font-semibold text-[#0F2952]">
                                {cond.label}
                              </p>
                              <p className="text-xs text-[#0F2952]/70">
                                {cond.detail}
                              </p>
                            </div>
                            <div className="sm:text-right tabular-nums">
                              {cond.originalPrice && (
                                <span className="block text-xs line-through text-[#0F2952]/55">
                                  {cond.originalPrice}
                                </span>
                              )}
                              <span className="text-lg font-bold text-[#0F2952]">
                                {cond.price}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Diferenciais do Produto */}
                    <div className="mt-6">
                      <p className="text-xs font-semibold tracking-wider text-[#1B3B6F] uppercase mb-3">
                        Destaques e Informações Importantes
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#0F2952]/85">
                        {selectedProduct.highlights.map((hl) => (
                          <li key={hl} className="flex items-start gap-2.5">
                            <Check className="h-4 w-4 text-[#1B3B6F] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Botão de Ação Direta para Simulação com Vagner Costa */}
                  <div className="pt-5 border-t border-[#0F2952]/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={buildWhatsAppUrl(
                        siteConfig.contact.whatsappNumber,
                        selectedProduct.whatsappMessage
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-between bg-[#1E9E5A] px-6 py-4 text-xs font-semibold tracking-[0.12em] text-[#FFFFFF] transition-editorial hover:bg-[#19874D]"
                    >
                      <span className="inline-flex items-center gap-2.5">
                        <WhatsAppIcon className="h-4 w-4 text-[#FFFFFF]" />
                        <span>FALE COM VAGNER · FAZER SIMULAÇÃO</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[#FFFFFF]" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedProduct(null)}
                      className="border border-[#0F2952]/25 px-5 py-4 text-xs font-medium text-[#0F2952] transition-editorial hover:bg-[#EBF5FC]"
                    >
                      FECHAR
                    </button>
                  </div>
                </div>
              </div>

              {/* Prancha Completa de Imagens Conceituais, Lazer e Plantas dentro de "Ver Informações do Produto" */}
              {activeModalGallery && activeModalGallery.length > 1 && (
                <div className="pt-8 border-t border-[#0F2952]/15">
                  <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.16em] text-[#1B3B6F] uppercase">
                        Imagens Conceituais, Perspectivas e Plantas
                      </p>
                      <h4 className="font-editorial text-2xl font-semibold text-[#0F2952]">
                        Conheça todos os ambientes do {selectedProduct.name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-[#0F2952]/70">
                      {activeModalGallery.length} imagens disponíveis
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {activeModalGallery.map((img, idx) => (
                      <div
                        key={img.src}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`group cursor-pointer overflow-hidden bg-[#F8FBFF] border transition-editorial ${
                          idx === activeImageIndex
                            ? "border-[#D4AF6A] ring-1 ring-[#0F2952]"
                            : "border-[#0F2952]/15 hover:border-[#0F2952]/45"
                        }`}
                      >
                        <div className="aspect-[16/10] w-full overflow-hidden bg-[#081B4B]">
                          <img
                            src={img.src}
                            alt={`${selectedProduct.name} — ${img.label}`}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                        <div className="px-3.5 py-2.5 flex items-center justify-between gap-2 bg-[#FFFFFF]">
                          <span className="text-xs font-medium text-[#0F2952] truncate">
                            {img.label}
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1B3B6F] shrink-0">
                            {img.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
