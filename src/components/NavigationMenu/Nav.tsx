import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { Menu } from "./Menu";
import { MobileMenu } from "./MobileNav";
import Image from "next/image";
import { logo } from "@/data/images";

const Nav = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4">
      <Link href="/" className="font-semibold">
        <Image src={logo} alt="dyondzisani commerce logo" width={40} />
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
    </nav>
  );
};
export default Nav;
