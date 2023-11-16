import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";
import Link from "next/link";

const bars = ['HOME', 'ABOUT', 'GALLERY', 'PARTNERS', 'CONTACT US'];

const barsList = bars.map((bar,i) =>
        <DropdownMenuItem key={i}>
            <Link className='cursor-pointer text-2xl py-2'
                  href={`#${bar.toLowerCase()}`}>
                {bar}
            </Link>
        </DropdownMenuItem>
    )
;

const HamburgerButton = () => {
    return <DropdownMenu>
        <DropdownMenuTrigger>
            <HamburgerMenuIcon className='h-[32px] w-[32px]'/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            {/*<DropdownMenuLabel>Menu</DropdownMenuLabel>*/}
            {barsList}
        </DropdownMenuContent>
    </DropdownMenu>
}

export default HamburgerButton;