import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import Script from "next/script";
import GoatCounter from "@/app/ui/goatcounter";
import Link from "next/link";
import "./globals.css";

const scp = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "xirulent.dev",
  description: "c:\\system\\notporn>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Goatcounter count script */}
      <Script
        data-goatcounter="https://xirulent.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      />
      <body className={`${scp.className}`}>
        <div className="crt fixed w-screen h-screen fixed z-[50] pointer-events-none"></div>
        {/* Goatcounter count display */}
        <Link
          href="https://www.goatcounter.com/"
          className="fixed left-0 bottom-0 text-amber glow p-2"
        >
          <GoatCounter />
        </Link>
        <div>
          {/* Page Content */}
          {children}
        </div>
      </body>
    </html>
  );
}
