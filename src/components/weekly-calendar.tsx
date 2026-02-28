"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import rrulePlugin from "@fullcalendar/rrule";
import { getCalendarEvents } from "@/lib/events";

export function WeeklyCalendar() {
  const t = useTranslations("Events");
  const locale = useLocale();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const events = getCalendarEvents(t("meetup.title"), t("lessons.title"));

  return (
    <FullCalendar
      plugins={[timeGridPlugin, listPlugin, rrulePlugin]}
      initialView={isMobile ? "listWeek" : "timeGridWeek"}
      events={events}
      locale={locale}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: isMobile ? "" : "timeGridWeek,listWeek",
      }}
      allDaySlot={false}
      slotMinTime="17:00:00"
      slotMaxTime="23:00:00"
      height="auto"
      timeZone="Europe/Moscow"
      firstDay={1}
      nowIndicator={true}
      eventContent={(arg) => {
        const location = arg.event.extendedProps.location;
        return (
          <div className="p-1">
            <div className="font-semibold text-sm">{arg.event.title}</div>
            {location && (
              <div className="text-xs opacity-80">{location}</div>
            )}
          </div>
        );
      }}
    />
  );
}
