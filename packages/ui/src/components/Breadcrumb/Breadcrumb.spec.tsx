import { render, screen } from "@testing-library/react";
import type { FC } from "react";
import { HiHome } from "react-icons/hi";
import { describe, expect, it } from "vitest";

import { type CustomPoluiTheme, PoluiProvider } from "../../providers/PoluiProvider";
import { Breadcrumb } from "./Breadcrumb";
import { BreadcrumbItem } from "./BreadcrumbItem";

describe("Components / Breadcrumb", () => {
  it('should have `role="navigation"`', () => {
    render(<TestBreadcrumb />);

    expect(breadcrumb()).toBeInTheDocument();
  });

  it('should contain a `role="list"`', () => {
    render(<TestBreadcrumb />);

    expect(breadcrumb()).toContainElement(breadcrumbList());
  });

  it('should contain a `role="listitem"` for each `BreadcrumbItem`', () => {
    render(<TestBreadcrumb />);

    expect(items()[0]).toHaveTextContent("Home");
    expect(items()[1]).toHaveTextContent("Projects");
    expect(items()[2]).toHaveTextContent("PoluiProvider React");
  });

  it('should contain a `role="link"` for each `BreadcrumbItem href=".."`', () => {
    render(<TestBreadcrumb />);

    expect(links()[0]).toHaveTextContent("Home");
    expect(links()[1]).toHaveTextContent("Projects");
  });

  it("should use `aria-label` if provided", () => {
    render(<TestBreadcrumb />);

    expect(breadcrumb()).toHaveAccessibleName("test label");
  });

  it("should use custom list classes via theme={}", () => {
    const theme: CustomPoluiTheme = {
      breadcrumb: {
        root: {
          list: "gap-6",
        },
      },
    };
    render(
      <PoluiProvider theme={{ theme }}>
        <TestBreadcrumb />
      </PoluiProvider>,
    );
  });
});

const TestBreadcrumb: FC = () => (
  <Breadcrumb aria-label="test label">
    <BreadcrumbItem href="#" icon={HiHome}>
      Home
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Projects</BreadcrumbItem>
    <BreadcrumbItem icon={HiHome}>PoluiProvider React</BreadcrumbItem>
  </Breadcrumb>
);

const breadcrumb = () => screen.getByRole("navigation");

const breadcrumbList = () => screen.getByRole("list");

const items = () => screen.getAllByRole("listitem");

const links = () => screen.getAllByRole("link");
