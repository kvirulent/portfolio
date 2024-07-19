// Component that "types" text into a tag.
"use client";
import { useState, useEffect } from "react";

const TypewriterPre = (props: {
  text: string;
  delay: number;
  infinite: boolean | false;
  begin_delay: number | 0;
  infinite_delay: number | 0;
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isTyping) {
      timeout = setTimeout(() => {
        setIsTyping(true);
      }, props.begin_delay);
    } else if (currentIndex < props.text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + props.text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, props.delay);
    } else if (props.infinite) {
      timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText("");
      }, props.infinite_delay);
    }

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    props.delay,
    props.begin_delay,
    props.infinite,
    props.infinite_delay,
    isTyping,
    props.text,
  ]);

  return <pre>{currentText}</pre>;
};

export default TypewriterPre;
