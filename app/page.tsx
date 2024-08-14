import Startup from "@/app/ui/startup";
import Link from "next/link";
import CubeAnimation from "@/app/ui/cube2";

export default function Home() {

  return (
    <main className="min-h-screen text-amber glow">
      {/* Startup Content -> Why is this constantly disabled?? */}
      <div className="hidden md:fixed">
        <Startup />
      </div>

      {/* Page Content */}
      <div className="flex items-center justify-center">
        <div className="text-amber-dim md:text-amber max-md:w-fit max-md:mx-auto max-md:absolute md:flex-1 h-screen flex items-center justify-center">
          <div className="fixed z-[1] cursor-default">
            <CubeAnimation size={190} />
          </div>
        </div>
        <div className="md:flex-1 h-screen flex flex-col z-[10] items-center justify-center">
          <h1 className="text-4xl md:text-6xl m-5">xirulent.dev</h1>
          <ul>
            <li className="m-5 w-fit hover:box-glow hover:bg-[#FFB000] hover:text-black">
              <Link href="/pages/about-me">&gt; who r u?</Link>
            </li>
            <li className="m-5 w-fit hover:box-glow hover:bg-[#FFB000] hover:text-black">
              <Link href="#">&gt; where am i?</Link>
            </li>
            <li className="m-5 w-fit hover:box-glow hover:bg-[#FFB000] hover:text-black">
              <Link href="#">&gt; option_3</Link>
            </li>
            <li className="m-5 w-fit hover:box-glow hover:bg-[#FFB000] hover:text-black">
              <Link href="/pages/webring">&gt; webring</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
