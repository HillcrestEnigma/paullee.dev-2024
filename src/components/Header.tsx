"use client";

import { useState } from "react";
import A from "@/components/A";
import urls from "@/data/urls";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: Readonly<HeaderProps>) {
  const usernames = [
    "paullee.dev",
    "Paul Lee",
    "enigma",
    "HillcrestEnigma",
    "Kyunghan Lee",
  ];
  const [titleClicks, setTitleClicks] = useState(0);

  return (
    <div className={className}>
      <header className="mb-13 flex h-14 items-center border-b border-black dark:border-slate-100">
        <button
          onClick={() => setTitleClicks(titleClicks + 1)}
          className="mr-3 flex-initial text-xl font-medium subpixel-antialiased"
        >
          {usernames[titleClicks % usernames.length]}
        </button>
        <A
          href={urls.resume}
          className="font-regular ml-auto flex-initial text-base"
        >
          résumé
        </A>
      </header>
    </div>
  );
}
