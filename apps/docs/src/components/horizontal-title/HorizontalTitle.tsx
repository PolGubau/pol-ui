"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

interface HorizontalTitleProps {
  title: string;
  cards: {
    endTranslateX: number;
    rotate: number;
    src: string;
    alt?: string;
    className?: string;
  }[];
}
const HorizontalTitle = ({ title, cards }: HorizontalTitleProps) => {
  const container = useRef<HTMLDivElement>(null);

  const tl = useRef<gsap.core.Timeline>();
  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#wrapper",
          start: "top top",
          end: "+=500vw",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            gsap.to("#wrapper", {
              x: `${-250 * self.progress}vw`,
              duration: 1,
              ease: "power3.out",
            });
          },
        },
      });

      cards.forEach((card, idx) => {
        ScrollTrigger.create({
          trigger: `#card-${idx}`,
          start: "top top",
          end: "+=450vw",
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(`#card-${idx}`, {
              x: `${card.endTranslateX * self.progress}vw`,
              rotate: `${card.rotate * self.progress}deg`,
              duration: 0.5,
              ease: "power3.out",
            });
          },
        });
      });
    },
    { scope: container }
  );
  useEffect(() => {
    tl.current!.play();
  }, []);
  return (
    <div className="w-full min-h-[600vh]" ref={container}>
      <section
        id="wrapper"
        className="absolute top-0 w-[300vw] h-screen flex items-center "
      >
        <h1
          className="w-full text-white text-[35vw] z-10 text-center m-0 select-none font-bold"
          id="title"
        >
          {title}
        </h1>

        {cards.map((card, idx) => (
          <div
            className={
              "absolute w-48 h-48 rounded-2xl overflow-hidden " + card.className
            }
            id={`card-${idx}`}
          >
            <img
              src={card.src}
              alt={card?.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default HorizontalTitle;
