// Custom 404 page
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const path = usePathname();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <p className="text-amber glow">
        cd : Cannot find path @&apos;{path}&apos; because it does not exist.
      </p>
      <Link href="/" className="text-amber glow text-xs m-4">
        Back to safety...
      </Link>
    </main>
  );
};

export default Page;
