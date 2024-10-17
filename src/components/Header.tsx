"use client";

import { useState } from "react";
import Anchor from "@/components/Anchor";
import { useUrls } from "@/hooks/url";
import { names } from "@/data.json"

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: Readonly<HeaderProps>) {
  const urls = useUrls();

  const [titleClicks, setTitleClicks] = useState(0);

  return (
    <div className={className}>
      <header className="mb-13 flex h-14 items-center border-b border-black dark:border-slate-100">
        <button
          onClick={() => setTitleClicks(titleClicks + 1)}
          className="mr-3 flex-initial text-xl font-medium subpixel-antialiased"
        >
          {names[titleClicks % names.length]}
        </button>
        <Anchor
          href={urls.resume}
          className="font-regular ml-auto flex-initial text-base"
        >
          résumé
        </Anchor>
      </header>
    </div>
  );
}
