"use client";

import { useEffect, useState } from "react";

import { getCookie, setCookie } from "../../helpers";

interface UseCookieReturnType {
  cookie: string | undefined;
  setCookie: (value: string, days?: number) => void;
}

const useCookie = (cookieName: string): UseCookieReturnType => {
  const [cookie, setCookieState] = useState<string | undefined>(() => getCookie(cookieName));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const newCookie = getCookie(cookieName);
      if (newCookie !== cookie) {
        setCookieState(newCookie);
      }
    }, 100);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [cookie, cookieName]);

  return {
    cookie,
    setCookie: (value: string, days?: number) => {
      setCookie(cookieName, value, days);
    },
  };
};

export { useCookie, type UseCookieReturnType };
