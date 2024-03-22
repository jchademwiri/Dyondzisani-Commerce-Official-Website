import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { Menu } from "./Menu";
import { MobileMenu } from "./MobileNav";
import Image from "next/image";
import { logo } from "@/data/images";
import { Button } from "../ui/button";

const Nav = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4">
      <Link href="/" className="font-semibold">
        <Image
          src={logo}
          alt="dyondzisani commerce logo"
          height={35}
          className="w-auto"
        />
      </Link>
      <div className="flex items-center gap-1">
        <div className="hidden md:block">
          <Menu />
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
        <Link href={"/"} title="Phone number">
          <Button>Call Us Now</Button>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};
export default Nav;
