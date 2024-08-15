// Component that "types" text into a tag. This component preserves whitespace using a <pre> tag.
"use client";
import { useState, useEffect } from "react";

interface TypewriterProps {
  interval?: number,
  infinite?: boolean,
  begin_delay?: number,
  infinite_delay?: number,
  children: React.ReactNode
}

const TypewriterPre = ({ interval = 0, infinite = false, begin_delay = 0, infinite_delay = 0, children}: TypewriterProps) => {
  const text = children?.toString() || "";
  const [currentText, setCurrentText] = useState(" ".repeat(text.length));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isTyping) {
      timeout = setTimeout(() => {
        setIsTyping(true);
      }, begin_delay);
    } else if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, interval);
    } else if (infinite) {
      timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText("");
      }, infinite_delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, text, infinite, begin_delay, infinite_delay, interval]);

  return <pre>{currentText}</pre>;
};

export default TypewriterPre;
