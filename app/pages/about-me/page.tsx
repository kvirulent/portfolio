import Typewriter from "@/app/ui/typewriter";
import Blinker from "@/app/ui/blinker";
import Scramble from "@/app/ui/scramble";

const Page = () => {
  return (
    <main className="text-amber">
      <div className="flex items-center justify-center flex-col lg:flex-row glow">
        <div className="flex flex-1 items-center justify-center flex-col mt-20 p-10">
          <div className="text-5xl w-full m-3">xirulent<Blinker interval={500}>_</Blinker></div>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center flex-col mt-10">
          right element
        </div>
      </div>

      <div className="flex items-center justify-center flex-col lg:flex-row glow">
        <div className="flex flex-1 items-center justify-center flex-col mt-20 p-10">
          <div className="text-5xl w-full m-3"><Scramble interval={160}>Hello World!</Scramble></div>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center flex-col mt-10">
          right element
        </div>
      </div>

      <div className="flex items-center justify-center flex-col lg:flex-row glow">
        <div className="flex flex-1 items-center justify-center flex-col mt-20 p-10">
          <div className="text-5xl w-full m-3"><Typewriter interval={40}>Hello World!</Typewriter></div>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center flex-col mt-10">
          right element
        </div>
      </div>
        
    </main>
    
  );
};

export default Page;
