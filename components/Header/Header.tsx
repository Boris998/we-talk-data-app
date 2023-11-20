import HeaderContainer from "@/components/ui/HOC/ContainerHeader";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";
import NavBar from "@/components/Header/NavBar";
import SheetMenu from "@/components/ui/SheetMenu";

const Header = () => {
    return <HeaderContainer>
        <Link href='/#about' className='lg:ml-0 sm:w-[175px] w-[30vw] animate-pulse'>
            <img src="/assets/we-talk-data-logo--transparent.png" alt="logo"/>
        </Link>
        <NavBar/>
        <Button
            variant='default'
            size='icon'
            className='rounded-full text-[#ffd700]/50 hover:animate hover:animate-spin
            h-[30px] w-[30px] ml-[-20vw] md:ml-[-16vw] lg:ml-0'
        >
            <SunIcon
                className='rotate-90 scale-100 sm:h-[40px] sm:w-[40px] h-[10vw] w-[10vw]
                        transition-all dark:-rotate-0 dark:scale-100
                        text-[#ffd700]/50 hover:text-[#ffd700]'/>
            <MoonIcon
                className='absolute h-6 w-6 rotate-0 scale-0
                        transition-all dark:-rotate-90 dark:scale-0
                        hover:bg-[#ffd700]/50'/>
            <span className='sr-only'>Toggle Theme</span>
        </Button>
        <div className='lg:hidden'>
            <SheetMenu/>
        </div>
    </HeaderContainer>
}

export default Header;
