import Blinker from "@/app/ui/blinker";
import Scramble from "@/app/ui/scramble";
import CopyClick from "@/app/ui/copyclick";
import Image from "next/image";
import Link from "next/link";

const yr = (new Date).getFullYear()

const Page = () => {
  return (
    <main className="text-amber">
      <div className="flex items-center justify-center flex-col lg:flex-row glow">
        <div className="flex flex-1 items-center justify-center flex-col mt-20 p-10">
          <div className="text-5xl w-full m-3">xirulent<Blinker interval={500}>_</Blinker></div>
          <p className="text-white">
            Hello, welcome to my website! I am a programmer with experience in software engineering, web & game development, etc.
            I hope you enjoy your time here :)
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center flex-col mt-20 bordered">
          <div className="hidden lg:absolute lg:block">
            <Link href="https://www.roblox.com/games/15717543958">
              <Image 
                className="bordered p-1 bordered-hover"
                src="/v7.png"
                width="480"
                height="320"
                alt="A teaser image for a canceled 17+ spinoff game based on the Vault 7 series. It's a dark room bathed in blue light. Trash and ruined wooden furniture decorate the area. A tarnished poster hangs from the wall: The Ouroboros Foundation. A small personal computer with a CRT monitor sits atop a wooden desk, illuminated by bright orange light shone through a slit in the curtain."
              />
            </Link>
            <p className="text-right" title="A teaser image for a canceled 17+ spinoff game based on the Vault 7 series.">Vault VII ⓘ</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col lg:flex-row glow">
        <div className="flex flex-1 items-center justify-center flex-col mt-20 bordered">
          <div className="hidden lg:absolute lg:block">
            <Link href="https://github.com/kvirulent/dirt-jam">
              <Image 
                className="bordered p-1 bordered-hover"
                src="/dirt-jam.png"
                width="480"
                height="320"
                alt="A screenshot from my submission to Acerola's Dirt Jam. It's a mountain view of the terrain generation compute shader I created, with basic distance-based fog and diffuse lighting."
              />
            </Link>
            <p className="text-right" title="A screenshot from my submission to Acerola's Dirt Jam">Dirt Jam ⓘ</p>
          </div>
        </div>
        <div className="flex flex-1 text-right items-center justify-center flex-col mt-20 p-10">
          <div className="text-5xl w-full m-3"><Scramble interval={160}>Experience</Scramble></div>
          <p className="text-white">
            I have experience in many areas of software development. I&apos;m familiar with lots of languages & libraries as well, but I mostly program in
            Lua, C++, and Typescript. I am currently learning to write compute shaders using GLSL and Godot. I specialize in web development 
            and Roblox games. I am familiar with server management, cloudflare, etc.
            For a comprehensive list of technologies I know, <Link href="/pages/tech">see this page.</Link>
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
