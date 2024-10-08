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
        function toggleActive() {
            setActive(!active)
        }

        setTimeout(() => {
            const intervalId = setInterval(() => {
                toggleActive()
            }, interval)
            return () => {
                clearInterval(intervalId);
            };
        }, delay);
    }, [active, delay, interval])

    return (
        <pre className="inline-block">{active ? children : " ".repeat(children?.toString().length ? children?.toString().length : 0)}</pre>
    );
};

export default Blinker;