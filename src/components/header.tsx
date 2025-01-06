import React from "react";
import Link from "next/link";
import * as Icons from "./icons";
import Image from "next/image";

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

export function Header() {
  return (
    <header className="p-4 bg-white shadow xl:shadow-none xl:bg-transparent">
      <div className="grid gap-x-4 grid-cols-[1fr,auto] 2xl:grid-cols-[1fr,270px]">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Link className="xl:hidden" href="/">
              <Icons.BrandLogo className="size-10" />
            </Link>
            <h2 className="text-lg md:text-2xl font-semibold font-title">
              Dua Page
            </h2>
          </div>
          <div className="border border-gray-500 rounded-lg overflow-hidden bg-white hidden xl:flex focus-within:border-brand items-center w-92 justify-between h-13">
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="h-13 placeholder:text-gray-600 pl-4 w-full focus:outline-transparent pr-4"
            />
            <button className="w-14 h-11 mr-1 rounded bg-gray-200 inline-flex items-center justify-center">
              <Icons.Search />
            </button>
          </div>
        </div>
        <div className="flex gap-2 justify-end px-4 items-center">
          <Image
            className="size-11"
            width="60"
            height="60"
            src="/assets/icons/profile.png"
            alt="profile"
          />
          <Icons.DownArrow />
        </div>
      </div>
    </header>
  );
}

export function Navigation() {
  return (
    <header className="bg-white h-full shadow-opposite xl:shadow-none rounded-tl-3xl border xl:border-none rounded-tr-3xl xl:rounded-3xl px-8 xl:py-8 flex flex-col justify-between items-center">
      <Link className="hidden xl:block" href="/">
        <Icons.BrandLogo className="size-14 2xl:size-18" />
      </Link>
      <ul className="flex xl:flex-col gap-8 w-full h-full xl:h-auto justify-between items-center [&>*:last-child]:hidden  xl:[&>*:last-child]:flex">
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <Link
              className="size-9.5 xl:bg-gray-400 inline-flex items-center justify-center rounded-full"
              href={link.href}
            >
              {React.cloneElement(link.icon, {
                className: "size-5",
              })}
            </Link>
          </li>
        ))}
      </ul>
      <div className="size-14 hidden xl:block bg-brand rounded-xl p-1">
        <Icons.Support />
      </div>
    </header>
  );
}
