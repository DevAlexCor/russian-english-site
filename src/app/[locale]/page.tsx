"use client";

import { useTranslations } from "next-intl";
import { HeroSection } from "@/components/hero-section";
import { PositionCard } from "@/components/position-card";
import { Button } from "@/components/ui/button";

const positionKeys = [
  "designer",
  "socialMedia",
  "photographer",
] as const;

export default function HomePage() {
  const t = useTranslations("HelpWanted");

  return (
    <>
      <HeroSection />

      {/* Help Wanted Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">{t("title")}</h2>
            <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {positionKeys.map((key) => (
              <PositionCard
                key={key}
                title={t(`positions.${key}.title`)}
                description={t(`positions.${key}.description`)}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" variant="outline" asChild>
              <a href="https://discord.com/users/377918182809272321" target="_blank" rel="noopener noreferrer">
                {t("contactButton")}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
