import Typewriter from "@/app/ui/typewriter";
import Blinker from "@/app/ui/blinker";
import Scramble from "@/app/ui/scramble";
import Link from "next/link";
import CubeAnimation from "@/app/ui/cube2";
import CopyClick from "@/app/ui/copyclick";

const Page = () => {
  return (
    <main className="text-amber">
      <div className="flex items-center justify-center flex-col lg:flex-row glow">
        <div className="flex flex-1 items-center justify-center flex-col mt-20 p-10">
          <div className="text-5xl w-full m-3">xirulent<Blinker interval={500}>_</Blinker></div>
          <p className="text-white">
            hello, im xirulent! i am a 16 year old programmer versed in many areas of development such as full stack web dev, game dev, and more. i am also an amateur 3d artist!
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center flex-col mt-10">
          <div className="hidden lg:absolute lg:block">nothing here for now</div>
          
        </div>
      </div>

      <div className="flex items-center justify-center flex-col lg:flex-row glow">
        <div className="hidden lg:flex flex-1 items-center justify-center flex-col mt-10">
        nothing here for now
        </div>
        <div className="flex flex-1 text-right items-center justify-center flex-col mt-20 p-10">
          <div className="text-5xl w-full m-3"><Scramble interval={160}>Experience</Scramble></div>
          <p className="text-white">
          i have experience in several areas of development. i believe in continuous improvement and im always willing to learn new stuff to complete projects. im familiar with JS/TS, python, lua, java, sql, html/css, and c#. im currently learning rust 🦀! i specialize primarily in web development and roblox games. im experienced with ui/ux design, server management, and cloudflare.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col lg:flex-row glow">
        <div className="flex flex-1 items-center justify-center flex-col mt-20 p-10">
          <div className="text-5xl m-3">wanna work together?</div>
          i am always accepting work from anyone! please contact me at one of the links below to get in touch!
          <ul className="flex flex-row text-white">
            <li className="pl-2 pr-2"><CopyClick displayText="email" copyText="xirulent@gmail.com"/></li>
            <li className="pl-2 pr-2"> • </li>
            <li className="pl-2 pr-2"><CopyClick displayText="discord" copyText="_kv."/></li>
          </ul>
        </div>
      </div>
    </main>
    
  );
};

export default Page;
