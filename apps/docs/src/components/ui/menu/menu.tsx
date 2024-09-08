"use client";
/**
 * @name Fullscreen Menu
 * @description A menu component that slides in from the left
 */
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { links } from "@/data/links";
import { Button } from "pol-ui";

export interface LinkShape {
  href: string;
  label: string;
}
export interface MenuProps {
  links?: LinkShape[];
  isMockup?: boolean;
}

const defaultLinks = [
  { href: "_///_", label: "Home" },
  { href: "_///_", label: "About Me" },
  { href: "_///_", label: "Projects" },
];
const Menu = ({ links: innerLinks = defaultLinks, isMockup }: MenuProps) => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline>();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useGSAP(
    () => {
      gsap.set("#menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to("#menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power4.inOut",
        })
        .to("#menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container }
  );
  useEffect(() => {
    if (isMenuOpen) {
      tl.current!.play();
    } else {
      tl.current!.reverse();
    }
  }, [isMenuOpen]);

  const classNames = {
    links:
      "outline-none text-primary-900 text-5xl sm:text-7xl lg:text-9xl leading-[85%] text-center uppercase tracking-tight hover:pl-2 lg:hover:pl-6 lg:focus-visible:pl-6 transition-all duration-300 ease-in-out cursor-pointer border-l-8 border-transparent hover:border-primary-900 focus-visible:border-primary-900 truncate",
  };

  return (
    <div ref={container}>
      <div className="fixed top-0 left-0 w-screen py-4 px-8 flex justify-between items-center z-10 text-primary-50 uppercase bg-secondary-900 border-b-secondary-800 border-b">
        {isMockup ? (
          <p>Pol Gubau Amores</p>
        ) : (
          <Link href="/">Pol Gubau Amores</Link>
        )}

        <Button
          className="uppercase text-primary-50"
          onClick={toggleMenu}
          variant={"ghost"}
        >
          Open
        </Button>
      </div>
      <div
        id="menu-overlay"
        className="z-20 fixed top-0 left-0 w-screen py-4 px-8 flex justify-between h-screen bg-primary flex-col"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        <div className="flex w-full justify-between items-center text-black uppercase">
          {isMockup ? (
            <p>Pol Gubau Amores</p>
          ) : (
            <Link href="/">Pol Gubau Amores</Link>
          )}
          <Button
            className="uppercase"
            style={{ color: "black" }}
            onClick={toggleMenu}
            variant={"ghost"}
          >
            Close
          </Button>
        </div>
        <div className="w-full flex justify-between h-full">
          <div
            className="hidden md:flex flex-[2] items-end cursor-pointer "
            onClick={toggleMenu}
          >
            <button
              className="text-[100px] flex items-end justify-end -webkit-text-stroke-[5px] leading-[70%] stroke-primary text-primary-900"
              style={{
                WebkitTextStroke: "4px #ff4",
              }}
            >
              &#x2715;
            </button>
          </div>
          <div className="flex-[4] flex flex-col justify-between pt-16 md:pt-8">
            <div className="menu-links flex flex-col gap-4 items-center md:items-start">
              {innerLinks?.map((link) => (
                <div
                  className="w-max-content"
                  key={link.label}
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                  }}
                >
                  <div
                    id="menu-link-item-holder"
                    className="relative cursor-pointer"
                    onClick={toggleMenu}
                  >
                    {/* You can delete this, done just for the mockup of the interactive demo */}
                    {link.href === "_///_" ? (
                      <p className={classNames.links}>{link.label}</p>
                    ) : (
                      // Just leave this part ↙
                      <Link href={link.href} className={classNames.links}>
                        {link.label}
                      </Link>
                      // Just leave this part ↖
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex">
              <div className="flex-1 flex flex-col gap-2 justify-end text-primary-900 ">
                <a target="_blank" href={links.github}>
                  Github &#8599;
                </a>
                <a target="_blank" href={links.linkedin}>
                  Linkedin &#8599;
                </a>
                <a target="_blank" href={links.author}>
                  Personal site &#8599;
                </a>
              </div>
              <div className="flex-1 flex flex-col gap-2 justify-end text-primary-900">
                <a href={links.email} target="_blank">
                  gubaupol@gmail.com
                </a>
                <p>Thanks :)</p>
              </div>
            </div>
          </div>
          <div className="flex-[4] hidden md:flex justify-end items-end text-primary-900">
            <Link href={"/catalog#fullscreenMenu"}>Check this component</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
