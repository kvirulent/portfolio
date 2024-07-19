"use client";
import { useRouter } from 'next/navigation';

const Nano = (props: {previous_route: string}) => {
    const router = useRouter();

    function redirectBack() {
        router.back()
    };

    function redirectForward() {
        router.forward();
    };

    function redirectHome() {
        router.push("/index-nostartup")
    }

    return(
        <div className="fixed bottom-0 m-5 z-10 text-amber">
            <ul className="flex flex-row">
                <li className="m-2 box-glow hover:noglow"><button className="p-[2px] text-black hover:text-amber" onClick={redirectBack}>&lt;</button></li>
                <li className="m-2 box-glow hover:noglow"><button className="p-[2px] text-black hover:text-amber" onClick={redirectHome}>⌂</button></li>
                <li className="m-2 box-glow hover:noglow"><button className="p-[2px] text-black hover:text-amber" onClick={redirectForward}>&gt;</button></li>
            </ul>
        </div>
    )
}

export default Nano;