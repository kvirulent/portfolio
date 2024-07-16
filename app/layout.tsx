import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import GoatCounter from "@/app/ui/goatcounter";
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
      <body className={`crt ${scp.className}`}>
        <GoatCounter />
        <div className=""> {/* Page Content */}
          {children}
        </div>
      </body>
    </html>
  );
}
