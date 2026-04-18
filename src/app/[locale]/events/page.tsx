"use client";

import { useTranslations } from "next-intl";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventsPage() {
  const t = useTranslations("Events");

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
          <p className="mt-1 text-sm text-muted-foreground">{t("timezone")}</p>
        </div>

        <div className="mx-auto max-w-2xl space-y-6">
          {/* English Lessons */}
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold">{t("lessons.title")}</h3>
            <div className="mt-3 space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 shrink-0" />
                <span>{t("lessons.day")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>{t("lessons.time")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <a
                  href="https://vrchat.com/home/world/wrld_ed6af0dd-a499-484a-9e81-0aee0ee59ec7/info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  {t("lessons.location")}
                </a>
              </div>
            </div>
            <p className="mt-4 text-sm">{t("lessons.description")}</p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="https://devalexcor.github.io/english-lessons/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                {t("lessons.detailsLink")}
              </a>
              <a
                href="https://t.me/bolat_english"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                {t("lessons.telegramLink")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}