"use client";

import { useTranslations } from "next-intl";
import { TeamMemberCard } from "@/components/team-member-card";

const memberKeys = ["member1", "member2", "member3"] as const;

export default function TeamPage() {
  const t = useTranslations("Team");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memberKeys.map((key) => (
            <TeamMemberCard
              key={key}
              name={t(`members.${key}.name`)}
              role={t(`members.${key}.role`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
