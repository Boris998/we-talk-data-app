import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";
import Link from "next/link";

const bars = ['HOME', 'ABOUT', 'GALLERY', 'EVENTS', 'PARTNERS', 'CONTACT US'];

const barsList = bars.map((bar,i) =>
            <Link key={i}
                  className='cursor-pointer text-[#ffd700] hover:text-[#001330] text-center bg-[#001330]/40
              hover:bg-[#ffd700]/50 p-[15px] rounded-full active:bg-[#ffd700]/50'
                  href={`/#${bar.toLowerCase()}`}>
                {bar}
            </Link>
    )
;

const SheetMenu = () => {
    return <Sheet>
        <SheetTrigger className='text-[#ffd700]/50 hover:text-[#ffd700]'>
            <HamburgerMenuIcon className='h-[8vw] w-[10vw] sm:h-[32px] sm:w-[32px]'/>
        </SheetTrigger>
        <SheetContent side='right' className='w-full lg:hidden'>
            <nav className='flex flex-col gap-4 mt-16 font-bold'>
                {barsList}
            </nav>
        </SheetContent>
    </Sheet>
}

export default SheetMenu;