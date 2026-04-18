"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/russian-english-site/community.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
      <div className="container relative mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-2xl text-foreground/80 sm:text-3xl md:text-4xl">
          {t("description")}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="outline" asChild>
            <a href="https://vrchat.com/home/group/grp_f0431999-599e-47a9-af45-f894a14efa13" target="_blank" rel="noopener noreferrer">
              {t("joinButton")}
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://discord.gg/4fW5d5dUKa" target="_blank" rel="noopener noreferrer">
              {t("discordButton")}
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://t.me/bolat_english" target="_blank" rel="noopener noreferrer">
              {t("telegramButton")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
