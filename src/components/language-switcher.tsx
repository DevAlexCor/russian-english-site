"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function RussianFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="160" fill="#fff" />
      <rect width="640" height="160" y="160" fill="#0039a6" />
      <rect width="640" height="160" y="320" fill="#d52b1e" />
    </svg>
  );
}

function BritishFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="480" fill="#012169" />
      <path d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" fill="#fff" />
      <path d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" fill="#C8102E" />
      <path d="M241 0v480h160V0H241zM0 160v160h640V160H0z" fill="#fff" />
      <path d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" fill="#C8102E" />
    </svg>
  );
}

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const newLocale = locale === "en" ? "ru" : "en";
  // Replace /en/... with /ru/... or vice versa
  const newPath = pathname.replace(`/${locale}`, `/${newLocale}`) || `/${newLocale}`;

  return (
    <Link href={newPath}>
    <Button
      variant="outline"
      size="sm"
      className="min-w-[64px] gap-2 font-semibold"
    >
      {locale === "en" ? (
        <>
          <RussianFlag className="h-4 w-6 rounded-[2px]" /> RU
        </>
      ) : (
        <>
          <BritishFlag className="h-4 w-6 rounded-[2px]" /> EN
        </>
      )}
    </Button>
    </Link>
  );
}
