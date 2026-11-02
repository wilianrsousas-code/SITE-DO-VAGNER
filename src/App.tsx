/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { PropertyCategoriesSection } from "./components/PropertyCategoriesSection";
import { DevelopmentsSection } from "./components/DevelopmentsSection";
import { AboutSection } from "./components/AboutSection";
import { JourneySection } from "./components/JourneySection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FBFF] text-[#0F2952] overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <PropertyCategoriesSection />
        <DevelopmentsSection />
        <AboutSection />
        <JourneySection />
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
