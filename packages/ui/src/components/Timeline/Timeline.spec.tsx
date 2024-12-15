import { render, screen } from "@testing-library/react";
import type { FC } from "react";
import { describe, expect, it } from "vitest";
import type { TimelineProps } from "./Timeline";
import { Timeline } from "./Timeline";
import { TimelineItem } from "./TimelineItem";

describe.concurrent("Components / Timeline", () => {
  describe("Rendering horizontal mode", () => {
    it("should have className items-base", () => {
      render(<TestTimelineNoIcon horizontal={true} />);

      expect(timeline()).toBeInTheDocument();
      expect(timeline()).toHaveClass("items-base");
    });

    it("should remove margin-top when do not icon", () => {
      render(<TestTimelineNoIcon horizontal={true} />);

      expect(timelinePoint()).toBeInTheDocument();
      expect(timelinePoint().childNodes[0]).not.toHaveClass("mt-1.5");
    });
  });
  describe("Rendering vertical mode", () => {
    it("should have margin-top when do not icon", () => {
      render(<TestTimelineNoIcon horizontal={false} />);

      expect(timelinePoint()).toBeInTheDocument();
      expect(timelinePoint().childNodes[0]).toHaveClass("mt-1.5");
    });
  });
});

const TestTimelineNoIcon: FC<TimelineProps> = ({ horizontal, className }): React.ReactNode => {
  return (
    <Timeline horizontal={horizontal} className={className}>
      <TimelineItem>
        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
        E-commerce & Marketing pages.
      </TimelineItem>
    </Timeline>
  );
};

const timeline = () => screen.getByTestId("timeline-component");
const timelinePoint = () => screen.getByTestId("timeline-point");
