"use client";
import { useState, useEffect } from 'react';

interface ScrambleProps {
    interval: number,
    delay?: number,
    children: React.ReactNode
}

const Scramble = ({ interval, delay = 0, children}: ScrambleProps) => {
    const [frame, setFrame] = useState(" ".repeat(children?.toString.length || 0));
    const rawText = children?.toString() || "";

    function getRandomString(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return result
    }

    useEffect(() => {
        const scrambleText = () => {
            let intervals: NodeJS.Timeout[] = [];
            const scrambleSwapInterval = 20;

            for (let i = 0; i < rawText.length; i++) {
                let remainingText = rawText.substring(i);
                
                const intervalId = setInterval(() => {
                    const scrambledText = getRandomString(remainingText.length);
                    setFrame(prevFrame => prevFrame.substring(0, i) + scrambledText);
                }, scrambleSwapInterval);

                setTimeout(() => {
                    clearInterval(intervalId);
                    setFrame(prevFrame => prevFrame.substring(0, i) + rawText.charAt(i));
                }, i * interval + delay + scrambleSwapInterval);

                intervals.push(intervalId);
            }

            return () => {
                intervals.forEach(clearInterval);
            };
        };

        scrambleText();

        return () => {};
    }, [interval, delay, rawText]);
    


    return (
        <pre className="inline-block">{frame}</pre>
    )
}

export default Scramble;