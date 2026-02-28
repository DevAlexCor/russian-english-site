"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">{t("subtitle")}</p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
          {t("description")}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("joinButton")}
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("discordButton")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
