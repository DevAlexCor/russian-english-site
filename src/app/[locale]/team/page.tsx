"use client";

import { useTranslations } from "next-intl";
import { TeamMemberCard } from "@/components/team-member-card";

const members = [
  { key: "alex", image: "/russian-english-site/team/alex.png" },
  { key: "ravida", image: "/russian-english-site/team/ravida.png" },
  { key: "andrey04o", image: "/russian-english-site/team/andrey04o.png" },
  { key: "boogieGreen", image: "/russian-english-site/team/boogie_green.png" },
] as const;

export default function TeamPage() {
  const t = useTranslations("Team");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map(({ key, image }) => (
            <TeamMemberCard
              key={key}
              name={t(`members.${key}.name`)}
              role={t(`members.${key}.role`)}
              image={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
