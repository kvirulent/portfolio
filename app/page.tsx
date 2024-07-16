"use client";
import Startup from "@/app/ui/startup";
import Link from "next/link";
import CubeAnimation from "@/app/ui/cube2";
import clsx from "clsx";

export default function Home() {
  return (
    <main className="min-h-screen text-amber glow">
      {/* Startup Content */}
      <div className="">
        <Startup />
      </div>
      

      {/* Page Content */}
      <div className="flex">

        <div className="flex-1 h-screen flex items-center justify-center">
          <div className="absolute z-[1] cursor-default">
            <CubeAnimation size={140} />
          </div>
          
        </div>
        <div className="flex-1 h-screen flex flex-col items-center justify-center">
          <h1 className="text-6xl">xirulent.dev</h1>
          <ul className="">
            <li className=" m-5 w-fit hover:box- hover:bg-[#FFB000] hover:text-black">
                <Link href="#">&gt; who r u?</Link>
            </li>
            <li className=" m-5 w-fit hover:box- hover:bg-[#FFB000] hover:text-black">
                <Link href="#">&gt; where am i?</Link>
            </li>
            <li className=" m-5 w-fit hover:box- hover:bg-[#FFB000] hover:text-black">
                <Link href="#">&gt; option_3</Link>
            </li>
            <li className=" m-5 w-fit hover:box- hover:bg-[#FFB000] hover:text-black">
                <Link href="#">&gt; webring</Link>
            </li>
          </ul>
        </div>
      </div>
      
      

    </main>
  );
}
