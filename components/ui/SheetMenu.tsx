import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {useState} from "react";

const SheetMenu = () => {
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

        <SheetClose key={id} asChild={true}>
            <Link
                key={id}
                className={`cursor-pointer text-[#ffd700] hover:text-[#001330] text-center ${
                    activeLink === bar.title ? 'bg-[#ffd700]/50' : 'bg-[#003767]/50'
                } hover:bg-[#ffd700]/50 p-[15px] rounded-full active:bg-[#ffd700]/50 shadow-xl`}
                href={`${bar.href}`}
                onClick={() => {
                    handleLinkClick(bar.title)
                }}
            >
                {bar.title}
            </Link>
        </SheetClose>

    ));

    return <div>
        <Sheet >
            <SheetTrigger className='text-[#ffd700]/50 hover:text-[#ffd700]' asChild={true}>
                <HamburgerMenuIcon className='h-[8vw] w-[10vw] sm:h-[32px] sm:w-[32px]'/>
            </SheetTrigger>
            <SheetContent side='right' className={`w-full lg:block`}>
                <nav className='flex flex-col gap-4 mt-16 font-bold'>
                    {barsList}
                </nav>
            </SheetContent>
        </Sheet>
    </div>
}

export default SheetMenu;