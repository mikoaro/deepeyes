import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CircleHelp,
  Grid3x3,
  Info,
  Bell,
  CircleUser,
} from "lucide-react";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";


export default function Banner() {
  return (
    <div className="px-4 sm:px-6 lg:px-5 py-4 flex justify-between items-center bg-slate-950 text-white h-12 fixed top-0 left-0 right-0 z-20">
      <div className="flex gap-5">
      <Link href="/" className="flex items-center">
          <Image src="/deepeyes_logo.png" alt="logo" width="180" height="40" />
        </Link>
        <Button className="" variant="ghost">
          <Grid3x3 />
        </Button>
      </div>
      <div className="flex justify-end py-5">
        <div className="relative w-[700px]">
          <Input
            type="text"
            placeholder="Search documentation..."
            className="w-full border-gray-600 rounded-none p-2 text-sm h-6"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 gap-3">
        <div className="flex items-center space-x-5 mt-1 gap-3">
          <Link
            href="/#"
            className="text-sm font-medium text-white hover:text-blue-600 text-md"
          >
            <CircleHelp className="siz-sm" />
          </Link>
          <Link
            href="/#"
            className="text-sm font-medium text-white hover:text-blue-600 text-md"
          >
            <Bell className="size-sm" />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="hover:bg-slate-100 w-5 shadow-none border-none"
              >
                <CircleUser className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/app">
                <DropdownMenuItem>User Dashboard</DropdownMenuItem>
              </Link>
              <Link href="/admin">
                <DropdownMenuItem>Admin Dashboard</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/#"
            className="text-sm font-medium text-white hover:text-blue-600 text-md"
          >
            <Info />
          </Link>
        </div>

        <Link href="" className="mt-1">
          <span className="hover:text-blue-600 text-md">Demo Mode</span>
        </Link>
      </div>
    </div>
  );
}
