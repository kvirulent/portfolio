"use client";
import Startup from "@/app/ui/startup";
import Link from "next/link";
import CubeAnimation from "@/app/ui/cube2";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen text-amber glow">
      {/* Page Content */}
      <div className="flex items-center justify-center">
        <div className="text-amber-dim md:text-amber max-md:w-fit max-md:mx-auto max-md:absolute md:flex-1 h-screen flex items-center justify-center">
          <div className="fixed z-[1] cursor-default">
            <CubeAnimation size={190} />
          </div>
        </div>
        <div className="md:flex-1 h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl m-5 mb-0">xirulent.dev</h1>
          <div className="flex flex-row justify-center items-center w-full">
            <Link href="https://github.com/kvirulent" className="hover:box-glow hover:bg[#FFB000] hover:text-black">
              <Image className="blacken p-1 ml-2 mr-2" src="/github_amber.png" width={32} height={32} alt="github invertocat" />
            </Link>
            <Link href="https://x.com/kvirulent_" className="hover:box-glow hover:bg[#FFB000] hover:text-black">
              <Image className="blacken p-1 ml-2 mr-2" src="/bird_amber.png" width={32} height={32} alt="twitter bird" />
            </Link>
            <Link href="https://www.roblox.com/users/4824657487" className="hover:box-glow hover:bg[#FFB000] hover:text-black">
              <Image className="blacken p-1 ml-2 mr-2" src="/rblx_amber.png" width={32} height={32} alt="roblox donut" />
            </Link>
          </div>
          <ul>
            <li className="m-5 w-fit hover:box-glow hover:bg-[#FFB000] hover:text-black">
              <Link href="/pages/about-me">&gt; who r u?</Link>
            </li>
            <li className="m-5 w-fit hover:box-glow-invalid hover:text-white">
              <Link href="#">⚿ option_3</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
