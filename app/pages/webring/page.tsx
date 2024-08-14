import Blinker from "@/app/ui/blinker";

const Page = () => {
  return (
    <>
      Hello <Blinker interval={1000} delay={0}>World</Blinker>!
    </>
  );
};

export default Page;
