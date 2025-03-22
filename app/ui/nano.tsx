// Simple navigation UI. Specifying previous_route sets the back button redirect to that route.
"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface NanoProps {
    previous_route?: string, // Sets the directory the back button will redirect the user to. If unspecified, the user is redirected to the last page visited.
    home_route?:string, // Sets the directory the home button will redirect the user to. If unspecified, the user is redirected to /.
    directory?:string // Sets the directory displayed adjacent to the time. If unspecified, no directory is displayed.
}

const Nano = ({ previous_route, home_route, directory }: NanoProps) => {
    const [time, setTime] = useState(new Date())
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 1000)
    })

    function getTimeFormatted() {
        return `${time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}:${time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()}`
    }

    function redirectBack() {
        if (previous_route) {
            router.push(previous_route)
        } else {
            router.back()
        }
    };

    function redirectHome() {
        if (home_route) {
            router.push(home_route)
        } else {
            router.push("/index-nostartup")
        }
    }
    
    return(
        <div className="z-[40] mt-[-20px] fixed w-full box-glow text-amber text-black flex flex-row pl-5 pr-5">
            <p className="flex-1 text-black">{getTimeFormatted()} {directory}</p>
            <div className="flex flex-row text-black">
                <p className="cursor-pointer pl-2 pr-2 hover:text-white" onClick={redirectBack}>&lt;</p>
                <p className="cursor-pointer pl-2 pr-2 hover:text-white" onClick={redirectHome}>⌂</p>
            </div>
        </div>
    )
}
 
export default Nano;