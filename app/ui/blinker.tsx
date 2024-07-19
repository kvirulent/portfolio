"use client";
import { useState, useEffect } from 'react';

const Blinker = (props: { text: string; interval: number; delay: number; }) => {
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        function toggleVisibility() {
            setVisibility(!visible)
        }    

        setTimeout(() => {
            const intervalId = setInterval(() => {
                toggleVisibility()
            }, 1200)
            return () => {
                clearInterval(intervalId);
            };
        }, props.delay); 
    }, [props.delay, visible]);

    return (
        <p className={visible ? "inline-block" : "hidden"}>{props.text}</p>
    )
}

export default Blinker;