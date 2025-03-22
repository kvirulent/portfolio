// Adds the provided item to the clipboard when the element is clicked. Only tested with text as the content and copied object.
"use client";
import { useState } from "react";

interface CopyClickProps {
    displayText: string,
    copyText: string
}

const CopyClick = ({displayText, copyText}: CopyClickProps) => {
    const [innerText, setInnerText] = useState(displayText);

    function copy() {
        navigator.clipboard.writeText(copyText);
        setInnerText("copied!");
        setTimeout(() => {
            setInnerText(displayText);
        }, 650)
    }

    return (
        <div className="cursor-pointer hover:underline" onClick={copy}>{innerText}</div>
    )
}

export default CopyClick;