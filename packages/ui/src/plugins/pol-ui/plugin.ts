/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import plugin from "tailwindcss/plugin.js";
import type { KeyValuePair } from "tailwindcss/types/config";

import { animations } from "./animations";
import type { ThemeColors } from "./colors";
import { colors } from "./colors/colors";
import type { ColorScale } from "./colors/types";
import { filterDefault, singleTimeline } from "./helpers";
import type { CustomPluginConfig } from "./types";
import { utilities } from "./utilities";

export const poluiPlugin = (config: CustomPluginConfig = {}): ReturnType<typeof plugin> => {
  const { colors: userColors = {} } = config;

  // allColors is the official object with all colors from pol-ui but the user can override them using the userColors object.
  // We merge the userColors with allColors to create a new object with the user's colors overriding the official ones.

  // Each color has 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, DEFAULT keys. The user may just override some keys, not all, keep the others as they are.
  const addDefault = (color: ColorScale) => {
    return {
      ...color,
      DEFAULT: color[500],
    };
  };

  const parsedColors: ThemeColors = Object.keys(colors).reduce<ThemeColors>(
    (acc, key) => {
      const color = colors[key as keyof ThemeColors];
      const userColor = userColors[key as keyof ThemeColors];

      if (userColor) {
        acc[key as keyof ThemeColors] = addDefault({
          ...color,
          ...userColor,
        });
      } else {
        acc[key as keyof ThemeColors] = addDefault(color);
      }

      return acc;
    },
    {
      ...colors,
    },
  );

  return plugin(
    ({ addUtilities, matchUtilities, theme }) => {
      // Predefined animations in same element

      type DynamicUtil = Record<
        string,
        {
          css: string;
          values: KeyValuePair;
          generateValue?: (value: string) => string;
        }
      >;

      const dynamicUtils: DynamicUtil = {
        "animate-delay": {
          css: "animation-delay",
          values: theme("animationDelay"),
        },
        "animate-duration": {
          css: "animation-duration",
          values: theme("animationDuration"),
        },
        "animate-iteration-count": {
          css: "animation-iteration-count",
          values: theme("animationIterationCount"),
        },
        "animate-fill-mode": {
          css: "animation-fill-mode",
          values: theme("animationFillMode"),
        },
        "animate-bezier": {
          css: "animation-timing-function",
          values: theme("animationCubicBezier"),
        },
        "animate-steps": {
          css: "animation-timing-function",
          values: theme("animationSteps"),
          generateValue: (value: string) => `steps(${value})`,
        },
        "animate-range": {
          css: "animation-range",
          values: theme("animationRange"),
          generateValue: (value: string) => value,
        },
        timeline: {
          css: "animation-timeline",
          values: theme("timeline"),
          generateValue: (value: string) => singleTimeline(value),
        },
        "scroll-timeline": {
          css: "scroll-timeline-name",
          values: theme("scrollTimeline"),
          generateValue: (value: string) => singleTimeline(value),
        },
        "view-timeline": {
          css: "view-timeline-name",
          values: theme("viewTimeline"),
          generateValue: (value: string) => singleTimeline(value),
        },
        "scroll-timeline-axis": {
          css: "scroll-timeline-axis",
          values: theme("scrollTimelineAxis"),
        },
        "view-timeline-axis": {
          css: "view-timeline-axis",
          values: theme("viewTimelineAxis"),
        },
        "scroll-animate": {
          css: "scroll-timeline-name",
          values: theme("scrollTimeline"),
          generateValue: (value: string) => `${singleTimeline(value)};\n  animation-timeline: ${singleTimeline(value)}`,
        },
        "view-animate": {
          css: "view-timeline-name",
          values: theme("viewTimeline"),
          generateValue: (value: string) => `${singleTimeline(value)};\n  animation-timeline: ${singleTimeline(value)}`,
        },
      };

      const dynamicUtilsEntries = Object.entries(dynamicUtils);

      for (const [name, { css, values, generateValue }] of dynamicUtilsEntries) {
        matchUtilities(
          {
            [name]: (value) => ({
              [css]: generateValue ? generateValue(value) : value,
            }),
          },
          {
            values,
          },
        );
      }

      addUtilities(utilities);
      addUtilities({
        "@keyframes enter": theme("keyframes.enter"),
        "@keyframes exit": theme("keyframes.exit"),
        ".animate-in": {
          animationName: "enter",
          animationDuration: theme("animationDuration.DEFAULT"),
          "--tw-enter-opacity": "initial",
          "--tw-enter-scale": "initial",
          "--tw-enter-rotate": "initial",
          "--tw-enter-translate-x": "initial",
          "--tw-enter-translate-y": "initial",
        },
        ".animate-out": {
          animationName: "exit",
          animationDuration: theme("animationDuration.DEFAULT"),
          "--tw-exit-opacity": "initial",
          "--tw-exit-scale": "initial",
          "--tw-exit-rotate": "initial",
          "--tw-exit-translate-x": "initial",
          "--tw-exit-translate-y": "initial",
        },
      });

      matchUtilities(
        {
          "fade-in": (value: string) => ({ "--tw-enter-opacity": value }),
          "fade-out": (value) => ({ "--tw-exit-opacity": value }),
        },
        { values: theme("animationOpacity") },
      );

      matchUtilities(
        {
          "zoom-in": (value: string) => ({ "--tw-enter-scale": value }),
          "zoom-out": (value) => ({ "--tw-exit-scale": value }),
        },
        { values: theme("animationScale") },
      );

      matchUtilities(
        {
          "spin-in": (value: string) => ({ "--tw-enter-rotate": value }),
          "spin-out": (value) => ({ "--tw-exit-rotate": value }),
        },
        { values: theme("animationRotate") },
      );

      matchUtilities(
        {
          "slide-in-from-top": (value: string) => ({
            "--tw-enter-translate-y": `-${value}`,
          }),
          "slide-in-from-bottom": (value) => ({
            "--tw-enter-translate-y": value,
          }),
          "slide-in-from-left": (value) => ({
            "--tw-enter-translate-x": `-${value}`,
          }),
          "slide-in-from-right": (value) => ({
            "--tw-enter-translate-x": value,
          }),
          "slide-out-to-top": (value) => ({
            "--tw-exit-translate-y": `-${value}`,
          }),
          "slide-out-to-bottom": (value) => ({
            "--tw-exit-translate-y": value,
          }),
          "slide-out-to-left": (value) => ({
            "--tw-exit-translate-x": `-${value}`,
          }),
          "slide-out-to-right": (value) => ({
            "--tw-exit-translate-x": value,
          }),
        },
        { values: theme("animationTranslate") },
      );

      matchUtilities(
        { duration: (value) => ({ animationDuration: value }) },
        { values: filterDefault(theme("animationDuration")) },
      );

      matchUtilities({ delay: (value: string) => ({ animationDelay: value }) }, { values: theme("animationDelay") });

      matchUtilities(
        { ease: (value) => ({ animationTimingFunction: value }) },
        { values: filterDefault(theme("animationTimingFunction")) },
      );

      addUtilities({
        ".running": { animationPlayState: "running" },
        ".paused": { animationPlayState: "paused" },
      });

      matchUtilities(
        { "fill-mode": (value: string) => ({ animationFillMode: value }) },
        { values: theme("animationFillMode") },
      );

      matchUtilities(
        { direction: (value: string) => ({ animationDirection: value }) },
        { values: theme("animationDirection") },
      );

      matchUtilities(
        { repeat: (value: string) => ({ animationIterationCount: value }) },
        { values: theme("animationRepeat") },
      );
    },

    {
      darkMode: "class",
      plugins: [require("@tailwindcss/container-queries")],

      theme: {
        extend: {
          colors: {
            ...parsedColors,
          },
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          animationDelay: ({ theme }: { theme: any }): any => ({
            ...theme("transitionDelay"),
          }),
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          animationDuration: ({ theme }: { theme: any }): any => ({
            0: "0ms",
            ...theme("transitionDuration"),
          }),
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          animationTimingFunction: ({ theme }: { theme: any }): any => ({
            ...theme("transitionTimingFunction"),
          }),
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          animationOpacity: ({ theme }: { theme: any }): any => ({
            DEFAULT: 0,
            ...theme("opacity"),
          }),
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          animationTranslate: ({ theme }: { theme: any }): any => ({
            DEFAULT: "100%",
            ...theme("translate"),
          }),
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          animationScale: ({ theme }: { theme: any }): any => ({
            DEFAULT: 0,
            ...theme("scale"),
          }),
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          animationRotate: ({ theme }: { theme: any }): any => ({
            DEFAULT: "30deg",
            ...theme("rotate"),
          }),
          ...animations,
        },
      },
    },
  );
};
