"use client";

import { useTranslations } from "next-intl";
import { Calendar, Clock, MapPin } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { PositionCard } from "@/components/position-card";
import { TeamMemberCard } from "@/components/team-member-card";
import { Button } from "@/components/ui/button";

const positionKeys = ["designer", "socialMedia", "photographer"] as const;

const members = [
  { key: "alex", image: "/russian-english-site/team/alex.png" },
  { key: "boogieGreen", image: "/russian-english-site/team/boogie_green.png" },
  { key: "andrey04o", image: "/russian-english-site/team/andrey04o.png" },
  { key: "ravida", image: "/russian-english-site/team/ravida.png" },
] as const;

export default function HomePage() {
  const tHelp = useTranslations("HelpWanted");
  const tEvents = useTranslations("Events");
  const tTeam = useTranslations("Team");

  return (
    <>
      <HeroSection />

      {/* Events */}
      <section id="events" className="scroll-mt-20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">{tEvents("title")}</h2>
            <p className="mt-2 text-muted-foreground">{tEvents("subtitle")}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {tEvents("timezone")}
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold">
                {tEvents("lessons.title")}
              </h3>
              <div className="mt-3 space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 shrink-0" />
                  <span>{tEvents("lessons.day")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span>{tEvents("lessons.time")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <a
                    href="https://vrchat.com/home/world/wrld_ed6af0dd-a499-484a-9e81-0aee0ee59ec7/info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    {tEvents("lessons.location")}
                  </a>
                </div>
              </div>
              <p className="mt-4 text-sm">{tEvents("lessons.description")}</p>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="https://t.me/bolat_english"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  {tEvents("lessons.telegramLink")}
                </a>
                <a
                  href="https://www.youtube.com/@bolate_english"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  {tEvents("lessons.youtubeLink")}
                </a>
              </div>
              <Button className="mt-6 w-full" asChild>
                <a
                  href="https://devalexcor.github.io/english-lessons/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tEvents("lessons.detailsLink")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">{tTeam("title")}</h2>
            <p className="mt-2 text-muted-foreground">{tTeam("subtitle")}</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {members.map(({ key, image }) => (
              <TeamMemberCard
                key={key}
                name={tTeam(`members.${key}.name`)}
                role={tTeam(`members.${key}.role`)}
                image={image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Help Wanted */}
      <section id="help" className="scroll-mt-20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">{tHelp("title")}</h2>
            <p className="mt-2 text-muted-foreground">{tHelp("subtitle")}</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {positionKeys.map((key) => (
              <PositionCard
                key={key}
                title={tHelp(`positions.${key}.title`)}
                description={tHelp(`positions.${key}.description`)}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://discord.com/users/377918182809272321"
                target="_blank"
                rel="noopener noreferrer"
              >
                {tHelp("contactButton")}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}