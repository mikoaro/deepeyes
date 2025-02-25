"use client";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";
import AIChatButton from "@/components/AIChatButton";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ConsoleHeader() {
  const pathname = usePathname();
  return (
    <header className="border-b border-gray-200 mt-12 h-13 fixed z-10 top-0 right-0 left-0 bg-white">
      <div className=" mx-auto px-0 sm:px-6 lg:px-4 flex justify-between items-center">
        <div className="flex gap-5">
          <Link href="/app">
            <AlignJustify className="mt-2" />
          </Link>
          <div className="space-x-5">
            <Link href="/app/review">
              <Button
                className={`rounded-none h-11 text-md ${
                  pathname === "/app/review"
                    ? "bg-white text-blue-700 shadow-none border-b border-blue-700 hover:bg-white"
                    : "bg-white text-black shadow-none hover:bg-white hover:border-blue-700 hover:text-blue-700 hover:border-b"
                }`}
                >
                Review
              </Button>
            </Link>
            <Link href="/app/explorer">
              <Button
                 className={`rounded-none h-11 text-md ${
                  pathname === "/app/explorer"
                    ? "bg-white text-blue-700 shadow-none border-b border-blue-700 hover:bg-white"
                    : "bg-white text-black shadow-none hover:bg-white hover:border-blue-700 hover:text-blue-700 hover:border-b"
                }`}
                >
                Explorer
              </Button>
            </Link>
            <Link href="/app/explorer-2">
              <Button
                 className={`rounded-none h-11 text-md ${
                  pathname === "/app/explorer-2"
                    ? "bg-white text-blue-700 shadow-none border-b border-blue-700 hover:bg-white"
                    : "bg-white text-black shadow-none hover:bg-white hover:border-blue-700 hover:text-blue-700 hover:border-b"
                }`}
                >
                Explorer 2
              </Button>
            </Link>
            <Link href="/app/events">
              <Button
                 className={`rounded-none h-11 text-md ${
                  pathname === "/app/events"
                    ? "bg-white text-blue-700 shadow-none border-b border-blue-700 hover:bg-white"
                    : "bg-white text-black shadow-none hover:bg-white hover:border-blue-700 hover:text-blue-700 hover:border-b"
                }`}
                >
                Events
              </Button>
            </Link>
            <Link href="/app/dashboard-1">
              <Button
                 className={`rounded-none h-11 text-md ${
                  pathname === "/app/dashboard-1"
                    ? "bg-white text-blue-700 shadow-none border-b border-blue-700 hover:bg-white"
                    : "bg-white text-black shadow-none hover:bg-white hover:border-blue-700 hover:text-blue-700 hover:border-b"
                }`}
                >
                Dashboard-1
              </Button>
            </Link>
            <Link href="/app/dashboard-2">
              <Button
                 className={`rounded-none h-11 text-md ${
                  pathname === "/app/dashboard-2"
                    ? "bg-white text-blue-700 shadow-none border-b border-blue-700 hover:bg-white"
                    : "bg-white text-black shadow-none hover:bg-white hover:border-blue-700 hover:text-blue-700 hover:border-b"
                }`}
                >
                Dasboard-2
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-5 my-2">
          <Button className="rounded-full h-7">+ Add widget</Button>
          <AIChatButton />
        </div>
      </div>
    </header>
  );
}
