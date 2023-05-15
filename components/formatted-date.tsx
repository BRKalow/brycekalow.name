import { useMemo } from "react";

export function FormattedDate({ date }) {
  const formattedDate = useMemo(() => {
    let dateToFormat = date;

    if (typeof date === "string") {
      const [year, month, day] = date.split("-");
      dateToFormat = Date.UTC(
        Number.parseInt(year, 10),
        Number.parseInt(month, 10) - 1,
        Number.parseInt(day, 10)
      );
    }

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(dateToFormat);
  }, [date]);

  return <>{formattedDate}</>;
}
