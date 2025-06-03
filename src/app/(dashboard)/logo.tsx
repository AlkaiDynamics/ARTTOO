import Link from "next/link";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Space_Grotesk({
  weight: ["700"],
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2 hover:opacity-75 transition h-[68px] px-4">
        <div className="size-8 relative">
          <Image src="/arttoo_logo.png" alt="ARTTOO" fill />
        </div>
        <h1 className={cn(font.className, "text-xl font-bold")}>ARTTOO</h1>
      </div>
    </Link>
  );
};
