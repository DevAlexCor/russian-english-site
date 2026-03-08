"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function EventsPage() {
  const t = useTranslations("Events");
  const [Calendar, setCalendar] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import("@/components/weekly-calendar").then((mod) => {
      setCalendar(() => mod.WeeklyCalendar);
    });
  }, []);

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("timezone")}
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          {Calendar ? <Calendar /> : null}
        </div>
      </div>
    </section>
  );
}
