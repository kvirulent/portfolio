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
      <Script
        data-goatcounter="https://xirulent.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      />
      <body className={`crt ${scp.className}`}>
        <Link
          href="https://www.goatcounter.com/"
          className="absolute left-0 bottom-0 text-amber glow p-2"
        >
          <GoatCounter />
        </Link>
        <div>
          {" "}
          {/* Page Content */}
          {children}
        </div>
      </body>
    </html>
  );
}
