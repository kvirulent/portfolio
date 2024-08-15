// Simple navigation UI. Specifying previous_route sets the back button redirect to that route.
"use client";
import { useRouter } from 'next/navigation';

interface NanoProps {
    previous_route?: string
}

const Nano = ({ previous_route }: NanoProps) => {
    const router = useRouter();

    function redirectBack() {
        if (previous_route) {
            router.push(previous_route)
        } else {
            router.back()
        }
    };

    function redirectForward() {
        router.forward();
    };

    function redirectHome() {
        router.push("/index-nostartup")
    }

    return(
        <div className="fixed bottom-0 m-5 z-1 text-amber">
            <ul className="flex flex-row">
                <li className="m-2 box-glow hover:noglow"><button className="p-[2px] text-black hover:text-amber" onClick={redirectBack}>&lt;</button></li>
                <li className="m-2 box-glow hover:noglow"><button className="p-[2px] text-black hover:text-amber" onClick={redirectHome}>⌂</button></li>
                <li className="m-2 box-glow hover:noglow"><button className="p-[2px] text-black hover:text-amber" onClick={redirectForward}>&gt;</button></li>
            </ul>
        </div>
    )
}

export default Nano;