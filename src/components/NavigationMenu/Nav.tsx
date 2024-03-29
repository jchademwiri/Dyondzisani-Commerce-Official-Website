import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { Menu } from "./Menu";
import { MobileMenu } from "./MobileNav";
import Image from "next/image";
import { logo } from "@/data/images";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background shadow-sm">
      <div className="container flex max-w-7xl items-center justify-between  py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold ">
          <Image
            src={logo}
            alt="dyondzisani commerce logo"
            className="h-[30px] w-auto"
          />
          <span className="hidden sm:inline">
            Dyondzisani <span className="text-primary">Commerce</span>
          </span>
        </Link>
        <div className="flex items-center gap-1">
          <div className="hidden md:block">
            <Menu />
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
