import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Loader } from "./Loader";

describe("Components / Loader", () => {
  describe("A11y", () => {
    it('should have `role="status"` by default', () => {
      const loader = getloader(render(<Loader aria-label="My loader" />));

      expect(loader).toHaveAccessibleName("My loader");
    });
  });
});

const getloader = ({ getByRole }: Pick<RenderResult, "getByRole">): HTMLElement => getByRole("status");
