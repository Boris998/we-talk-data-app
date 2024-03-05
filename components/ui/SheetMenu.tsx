import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

const bars = [
  { title: "HOME", href: "/#home" },
  { title: "ABOUT", href: "/#about" },
  { title: "UPCOMING EVENT", href: "/#upcoming-event" },
  { title: "GALLERY", href: "/#gallery" },
  { title: "PAST EVENTS", href: "/#past-events" },
  { title: "PARTNERS", href: "/#partners" },
  { title: "SUPPORTERS", href: "/#supporters" },
];


const SheetMenu = () => {
  const [activeLink, setActiveLink] = useState(bars[0].href);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const barsList = bars.map((bar, id) => (
    <SheetClose key={id} asChild={true}>
      <Link
        key={id}
        className={`cursor-pointer text-[#ffd700] hover:text-[#001330] text-center ${
          activeLink === bar.title
            ? "bg-gradient-to-br from-[#ffd700]/30 to-[#003767]/30"
            : "bg-[#003767]/30"
        } hover:bg-gradient-to-br active:bg-gradient-to-br from-[#ffd700]/30 to-[#003767]/30 p-[15px] rounded-full shadow-xl`}
        href={`${bar.href}`}
        onClick={() => {
          handleLinkClick(bar.title);
        }}
      >
        {bar.title}
      </Link>
    </SheetClose>
  ));

  return (
      <Sheet>
        <SheetTrigger
          className={`text-[#ffd700]/50 hover:text-[#ffd700]`}
          asChild={true}
        >
          <HamburgerMenuIcon className="h-[8vw] w-[10vw] sm:h-8 sm:w-8" />
        </SheetTrigger>
        <SheetContent side="right" className="w-full xl:block">
          <nav className="flex flex-col gap-4 mt-16 font-bold">{barsList}</nav>
        </SheetContent>
      </Sheet>
  );
};

export default SheetMenu;
