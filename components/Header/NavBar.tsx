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
            className={`cursor-pointer text-[#ffd700] hover:text-[#ffd700] rounded-2xl hover:shadow-xl hover:shadow-[#ffd700]/50 text-center ${
                activeLink === bar.title ? 'text-[#ffd700] shadow-xl shadow-[#ffd700]/50' : ''
            } px-[12px]`}
            href={`${bar.href}`}
            onClick={() => handleLinkClick(bar.title)}
        >
            {bar.title}
        </Link>
    ));

    return (
        <nav className="items-center space-x-3 hidden lg:block w-full xl:pr-[8vw]">
            {barsList}
        </nav>
    );
};

export default NavBar;