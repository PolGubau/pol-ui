import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AvatarGroup } from "./AvatarGroup";

describe("Components / Avatar.Group", () => {
  it("renders the avatar group element with the correct classname", () => {
    render(
      <AvatarGroup className="test-class">
        <div>Test child</div>
      </AvatarGroup>,
    );
    const avatarGroupElement = screen.getByTestId("avatar-group-element");
    expect(avatarGroupElement).toBeInTheDocument();
    expect(avatarGroupElement).toHaveClass("test-class");
  });
});
