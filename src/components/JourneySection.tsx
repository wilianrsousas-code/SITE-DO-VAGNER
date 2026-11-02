import React from "react";
import { motion } from "motion/react";
import { siteConfig } from "../config/siteConfig";

export const JourneySection: React.FC = () => {
  return (
    <section
      id="atendimento"
      className="relative bg-[#FFFFFF] text-[#0F2952] py-20 sm:py-28 lg:py-32 border-b border-[#0F2952]/10"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 sm:mb-20 max-w-2xl">
          <div className="mb-3 flex items-center gap-2.5 text-xs font-medium tracking-[0.18em] text-[#1B3B6F]">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>{siteConfig.journey.kicker}</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-[#0F2952] text-balance">
            {siteConfig.journey.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#0F2952]/15">
          {siteConfig.journey.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative flex flex-col justify-between py-9 md:py-12 ${
                index < siteConfig.journey.steps.length - 1
                  ? "border-b md:border-b-0 md:border-r border-[#0F2952]/15 md:pr-8 lg:pr-10"
                  : ""
              } ${index > 0 ? "md:pl-8 lg:pl-10" : ""}`}
            >
              <div>
                <div className="mb-5 flex items-baseline justify-between">
                  <span className="font-editorial text-4xl sm:text-5xl font-semibold italic text-[#1B3B6F] tabular-nums">
                    {step.number}.
                  </span>
                  <span className="text-[11px] font-mono tracking-widest text-[#0F2952]/45 tabular-nums">
                    0{index + 1} / 0{siteConfig.journey.steps.length}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-semibold tracking-[0.08em] text-[#0F2952]">
                  {step.title}
                </h3>

                <p className="mt-3.5 text-sm sm:text-base leading-[1.7] text-[#0F2952]/80 text-pretty">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 h-0.5 w-10 bg-[#7CC0F0]" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
