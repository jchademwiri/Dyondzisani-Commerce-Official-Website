"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { links } from "./links";

export function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} legacyBehavior passHref>
              <NavigationMenuLink
                // className={`${navigationMenuTriggerStyle()} ${index === links.length - 1 ? "outline outline-primary hover:text-primary" : ""} mx-1`}
                className={`${navigationMenuTriggerStyle()} ${index === links.length - 1 ? "" : ""} mx-1`}
              >
                {link.title}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
