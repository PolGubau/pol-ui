"use client";

import type { FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep/merge-deep";
import { getTheme } from "../../theme-store";
import type { CopyrightProps } from "./props";

/**
 * @name Copyright
 * @description Functional component for rendering copyright information, with an optional link to the author's website.
 * @param {CopyrightProps} props - Props for the Copyright component.
 * @returns {React.ReactNode}
 * @author Pol Gubau Amores - https://polgubau.com
 */
export const Copyright: FC<CopyrightProps> = ({
  by,
  className,
  href,
  theme: customTheme = {},
  year = new Date().getFullYear(),
  ...props
}: CopyrightProps): React.ReactNode => {
  const theme = mergeDeep(getTheme().copyright, customTheme);

  return (
    <div data-testid="ui-footer-copyright" className={twMerge(theme.base, className)} {...props}>
      © {year}
      {href ? (
        <a href={href} className={theme.href}>
          {by}
        </a>
      ) : (
        <span data-testid="ui-footer-copyright-span" className={theme.span}>
          {by}
        </span>
      )}
    </div>
  );
};
