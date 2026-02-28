"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "ru" : "en";
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    router.refresh();
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLocale}
      className="min-w-[48px] font-semibold"
    >
      {locale === "en" ? "RU" : "EN"}
    </Button>
  );
}
