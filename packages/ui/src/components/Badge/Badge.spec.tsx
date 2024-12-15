import { render, screen } from "@testing-library/react";
import { HiCheck } from "react-icons/hi";
import { describe, expect, it } from "vitest";

import { Badge } from "./Badge";

describe("Components / Badge", () => {
  describe("Rendering", () => {
    it('should render an `<a>` given `href=".."`', () => {
      render(
        <Badge href="/" icon={HiCheck}>
          A badge with a link
        </Badge>,
      );

      expect(link()).toBeInTheDocument();
      expect(link()).toHaveAttribute("href", "/");
    });
  });
});

const link = () => screen.getByRole("link");
