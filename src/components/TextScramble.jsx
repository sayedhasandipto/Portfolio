"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

export default function TextScramble({ text, delay = 0 }) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef(null);

  useEffect(() => {
    let started = false;
    const timeout = setTimeout(() => {
      started = true;
      const len = text.length;
      let frame = 0;
      const totalFrames = len * 3;

      const tick = () => {
        let out = "";
        for (let i = 0; i < len; i++) {
          if (i < Math.floor(frame / 3)) {
            out += text[i];
          } else {
            out += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        setDisplay(out);
        frame++;
        if (frame <= totalFrames) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setDisplay(text);
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, delay]);

  return <span>{display}</span>;
}
