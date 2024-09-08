"use client";
/**
 * @name Grag Scroll Animation
 * @description A menu component that slides in from the left
 */
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
gsap.registerPlugin(Draggable);

const GragScrollAnimation = () => {
  const timeline = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const timelineWidth = timeline.current?.offsetWidth;
  const scrollerWidth = scroller.current?.offsetWidth;
  const gap = parseInt(window.getComputedStyle(document.body).fontSize);
  const maxDragX = timelineWidth! - scrollerWidth! - 3 * gap ?? 0;

  useGSAP(() => {
    Draggable.create(scroller.current, {
      type: "x",
      bounds: {
        minX: gap,
        maxX: timelineWidth! - scrollerWidth! - gap,
      },

      onDrag: function () {
        let progress = (this.x - gap) / maxDragX;
        let containerX = -400 * (timelineWidth! / 100) * progress;
        console.log({ progress, containerX, maxDragX });
        gsap.to(container.current, {
          x: containerX,
          duration: 1,
          ease: "power3.out",
        });
      },
    });
  });
  return (
    <main className="text-white bg-secondary-900">
      <nav className="fixed top-0 w-full p-4 flex justify-between">
        <a href="#">Funky title</a>
        <a href="#">About</a>
        <a href="#">Contat</a>
        <a href="#">Work</a>
      </nav>
      <div
        ref={container}
        className="absolute top-[10vh] left-0 w-[500vw] h-[90vh] flex"
      >
        {[...Array(4)].map((_, i) => (
          <section
            key={i}
            id={`section-${i + 1}`}
            className="relative w-screen h-full p-8 flex gap-6 overflow-hidden"
          >
            <h1 className="w-[50%] text-3xl uppercase semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              recusandae.
            </h1>
            <p className="w-[40%] text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              recusandae, perspiciatis tempore optio laboriosam ex neque
              provident temporibus similique dolores saepe repellat dolorem
              nobis vitae et fuga minus itaque atque cupiditate ipsam excepturi
              accusamus, consequatur sequi? Autem necessitatibus incidunt
              impedit?
            </p>
          </section>
        ))}
      </div>
      <div
        id="timeline"
        ref={timeline}
        className="fixed bottom-0 left-0 w-full h-[10vh] p-3 flex justify-around"
      >
        <div
          ref={scroller}
          className="absolute top-[50%] pointer-cursor left-0 bg-black uppercase transform -translate-y-1/2"
        >
          <p>
            [<span>Drag</span>]
          </p>
        </div>
      </div>
    </main>
  );
};

export default GragScrollAnimation;
