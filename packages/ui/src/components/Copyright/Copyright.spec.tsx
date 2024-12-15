import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Copyright } from "./Copyright";

describe("Components / Footer", () => {
  describe("Rendering", () => {
    it('should render an `<a>` with an `<img>` on `Footer.Brand href=".."`', () => {
      render(<Copyright by="Pol-ui" year={2024} />);
      const el = screen.getByTestId("ui-footer-copyright");

      expect(el).toBeInTheDocument();

      const expectedText = "Pol-ui";
      expect(el).toHaveTextContent(expectedText);
    });
  });
});
