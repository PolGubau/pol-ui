import { dateParser } from "../date-parser";

export const MINUTE = 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;
export const MONTH = DAY * 30;
export const YEAR = DAY * 365;

export function calculateElapsedTime(date: string | number | Date, now: number): [number, string, "ago" | "from now"] {
  const then = dateParser(date)?.valueOf();
  if (!then) {
    return [0, "", "ago"]; // Invalid date
  }

  const seconds = Math.round(Math.abs(now - then) / 1000);
  const suffix = then < now ? "ago" : "from now";

  const [value, unit]: [number, string] =
    seconds < MINUTE
      ? [Math.round(seconds), "second"]
      : seconds < HOUR
        ? [Math.round(seconds / MINUTE), "minute"]
        : seconds < DAY
          ? [Math.round(seconds / HOUR), "hour"]
          : seconds < WEEK
            ? [Math.round(seconds / DAY), "day"]
            : seconds < MONTH
              ? [Math.round(seconds / WEEK), "week"]
              : seconds < YEAR
                ? [Math.round(seconds / MONTH), "month"]
                : [Math.round(seconds / YEAR), "year"];

  return [value, unit, suffix];
}
