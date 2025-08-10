// Blinks the the text between the openning and closing tags. Untested when using components as children.
"use client"
import { useState, useEffect } from "react";

interface BlinkerProps {
    interval: number,
    delay?: number,
    children: React.ReactNode,
}

const Blinker = ({interval, delay, children}: BlinkerProps) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const intervalId = setInterval(() => {
                setActive(prevActive => !prevActive);
            }, interval);

            return () => {
                clearInterval(intervalId);
            };
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        };

    }, [delay, interval])

    return (
        <pre className="inline-block">{active ? children : " ".repeat(children?.toString().length || 0)}</pre>
    );
};

export default Blinker;