export interface CalendarEvent {
  title: string;
  rrule: {
    freq: string;
    byweekday: string[];
    dtstart: string;
  };
  duration: string;
  backgroundColor: string;
  borderColor: string;
  extendedProps: {
    location: string;
    descriptionKey: string;
  };
}

export function getCalendarEvents(
  meetupTitle: string,
  lessonsTitle: string
): CalendarEvent[] {
  return [
    {
      title: meetupTitle,
      rrule: {
        freq: "weekly",
        byweekday: ["sa"],
        dtstart: "2025-01-04T17:00:00Z",
      },
      duration: "02:00",
      backgroundColor: "oklch(0.637 0.237 25.331)",
      borderColor: "oklch(0.55 0.22 25)",
      extendedProps: {
        location: "Russian Language World",
        descriptionKey: "meetup",
      },
    },
    {
      title: lessonsTitle,
      rrule: {
        freq: "weekly",
        byweekday: ["su"],
        dtstart: "2025-01-05T17:00:00Z",
      },
      duration: "01:30",
      backgroundColor: "oklch(0.5 0.2 25)",
      borderColor: "oklch(0.45 0.18 25)",
      extendedProps: {
        location: "English Hub",
        descriptionKey: "lessons",
      },
    },
  ];
}
