import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";
import Link from "next/link";

const bars = ['HOME', 'ABOUT', 'GALLERY', 'EVENTS', 'PARTNERS', 'CONTACT US'];

const barsList = bars.map((bar,i) =>
            <Link key={i}
                  className='cursor-pointer text-[#ffd700] hover:text-[#001330] text-center
              hover:bg-[#ffd700]/50 p-[15px] rounded-full active:bg-[#ffd700]/50'
                  href={`#${bar.toLowerCase()}`}>
                {bar}
            </Link>
    )
;

const SheetMenu = () => {
    return <Sheet>
        <SheetTrigger className='text-[#ffd700]/50 hover:text-[#ffd700]'>
            <HamburgerMenuIcon className='h-[32px] w-[32px]'/>
        </SheetTrigger>
        <SheetContent side='right' className='w-full md:w-[600px]'>
            <nav className='flex flex-col gap-4'>
                {barsList}
            </nav>
        </SheetContent>
    </Sheet>
}

export default SheetMenu;