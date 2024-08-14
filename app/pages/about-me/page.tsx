import TypewriterPre from "@/app/ui/typewriter-pre";
import Blinker from "@/app/ui/blinker";

const Page = () => {
  return (
    <main className="flex w-screen items-center justify-center flex-col glow text-amber">
        <div className="m-5 flex w-fill h-fit items-center justify-center flex-row glow text-amber">
          <div className="flex-1">
            <div className="text-4xl">
              xirulent<Blinker interval={500} delay={0}>_</Blinker>
            </div>
          </div>
        </div>
    </main>
  );
};

export default Page;
