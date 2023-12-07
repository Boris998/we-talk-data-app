import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    const bars = [
        {title: 'HOME', href: '/#home'},
        {title: 'ABOUT', href: '/#about'},
        {title: 'UPCOMING EVENT', href: '/#upcoming-event'},
        {title: 'GALLERY', href: '/#gallery'},
        {title: 'PAST EVENTS', href: '/#past-events'},
        {title: 'PARTNERS', href: '/#partners'},
    ];

    const [activeLink, setActiveLink] = useState(bars[0].href);

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    const barsList = bars.map((bar, id) => (
        <Link
            key={id}
            className={`cursor-pointer hover:text-[#ffd700] rounded-2xl hover:shadow-xl hover:shadow-[#ffd700]/50 text-center p-1 ${
                activeLink === bar.title ? 'text-yellow-400 shadow-xl shadow-[#ffd700]/50 bg-gradient-to-br from-blue-800/20 to-[#ffd700]/30' : ''
            } text-amber-200 px-[12px] hover:bg-gradient-to-br hover:from-blue-800/20 hover:to-[#ffd700]/20 mix-blend-darken`}
            href={`${bar.href}`}
            onClick={() => handleLinkClick(bar.title)}
        >
            {bar.title}
        </Link>
    ));

    return (
        <nav className="items-center space-x-3 hidden lg:block w-full xl:pr-[8vw] mix-blend-hue">
            {barsList}
        </nav>
    );
};

export default NavBar;