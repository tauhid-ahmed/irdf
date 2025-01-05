import React from "react";
import Link from "next/link";
import * as Icons from "@/components/icons";

const navigationLinks = [
  {
    id: 1,
    icon: <Icons.House />,
    href: "#",
  },
  {
    id: 2,
    icon: <Icons.Menu />,
    href: "#",
  },
  {
    id: 3,
    icon: <Icons.Bulb />,
    href: "#",
  },
  {
    id: 4,
    icon: <Icons.Bookmark />,
    href: "#",
  },
  {
    id: 5,
    icon: <Icons.Profile />,
    href: "#",
  },
  {
    id: 6,
    icon: <Icons.Plus />,
    href: "#",
  },
];

export default function MobileNavigation() {
  return (
    <div className="fixed bottom-0 inset-x-0 p-4 rounded-tl-3xl rounded-tr-3xl overflow-hidden md:hidden">
      <ul className="flex w-full justify-between items-center">
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>
              {React.cloneElement(link.icon, {
                className: "size-5",
              })}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
