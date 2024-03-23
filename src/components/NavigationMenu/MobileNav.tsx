"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Facebook, Linkedin, MenuIcon, Twitter } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { links } from "./links";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Dyondzisani Commerce</SheetTitle>
          <SheetDescription>We have a heart for teaching.</SheetDescription>
        </SheetHeader>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="my-4">
              {links.map((link, index) => (
                <div key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`my-1 grid gap-2 rounded-sm p-2 hover:bg-accent
                      ${index === links.length - 1 ? "bg-primary" : ""}`}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                </div>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <SheetFooter className="flex-row gap-2 sm:justify-start">
          <Button size={"icon"} variant={"outline"}>
            <Link href="/" className="p-2">
              <Facebook />
            </Link>
          </Button>
          <Button size={"icon"} variant={"outline"}>
            <Link href="/" className="p-2">
              <Twitter />
            </Link>
          </Button>
          <Button size={"icon"} variant={"outline"}>
            <Link href="/" className="p-2">
              <Linkedin />
            </Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
