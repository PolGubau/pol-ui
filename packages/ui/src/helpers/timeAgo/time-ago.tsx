// @flow

import type * as React from "react";
import { useEffect, useState } from "react";
import { dateParser } from "./date-parser";
import { defaultFormatter } from "./formatter";

export type Unit = "second" | "minute" | "hour" | "day" | "week" | "month" | "year";
export type Suffix = "ago" | "from now";

export type Formatter = (
  value: number,
  unit: Unit,
  suffix: Suffix,
  epochMilliseconds: number,
  nextFormatter: () => React.ReactNode,
  now: () => number,
) => React.ReactNode;

export type Props = Readonly<{
  live?: boolean;
  minPeriod?: number;
  maxPeriod?: number;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  component?: string | React.ComponentType<any>;
  title?: string;
  formatter?: Formatter;
  date: string | number | Date;
  now?: () => number;
}>;

// Constants for readability
const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

const defaultNow = () => Date.now();

export function TimeAgo({
  date,
  formatter = defaultFormatter,
  component = "time",
  live = true,
  minPeriod = 0,
  maxPeriod = WEEK,
  title,
  now = defaultNow,
  ...passDownProps
}: Props): null | React.ReactElement {
  const [timeNow, setTimeNow] = useState(now());

  useEffect(() => {
    if (!live) {
      return;
    }

    const tick = (): number | null => {
      const then = dateParser(date)?.valueOf();
      if (!then) {
        console.warn("[react-timeago] Invalid Date provided");
        return null;
      }

      const seconds = Math.round(Math.abs(timeNow - then) / 1000);
      const unboundPeriod =
        seconds < MINUTE ? 1000 : seconds < HOUR ? 1000 * MINUTE : seconds < DAY ? 1000 * HOUR : 1000 * WEEK;

      const period = Math.min(Math.max(unboundPeriod, minPeriod * 1000), maxPeriod * 1000);

      return window.setTimeout(() => {
        setTimeNow(now());
      }, period);
    };

    const timeoutId = tick();
    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [date, live, maxPeriod, minPeriod, now, timeNow]);

  useEffect(() => {
    setTimeNow(now());
  }, [date, now]);

  const Komponent: React.ElementType =
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    typeof component === "string" || typeof component === "function" ? component : ("time" as any);

  const then = dateParser(date)?.valueOf();
  if (!then) {
    return null;
  }

  const seconds = Math.round(Math.abs(timeNow - then) / 1000);
  const suffix: Suffix = then < timeNow ? "ago" : "from now";

  const [value, unit]: [number, Unit] =
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

  const passDownTitle =
    typeof title === "undefined"
      ? typeof date === "string"
        ? date
        : dateParser(date)?.toISOString()?.substr(0, 16).replace("T", " ")
      : title;

  const spreadProps =
    Komponent === "time" ? { ...passDownProps, dateTime: dateParser(date)?.toISOString() } : passDownProps;

  const nextFormatter = defaultFormatter.bind(null, value, unit, suffix);

  return (
    <Komponent title={passDownTitle} {...spreadProps}>
      {formatter(value, unit, suffix, then, nextFormatter, now)}
    </Komponent>
  );
}
