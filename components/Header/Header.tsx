import Container from "@/components/ui/HOC/container";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";
import NavBar from "@/components/Header/NavBar";
import SheetMenu from "@/components/ui/SheetMenu";

const Header = () => {
    return <header className='sticky justify-evenly sm:flex sm:justify-between py-3 px-4 bg-[#ffd700]/10'>
        <Container>
            <div className='relative px-4 sm:px-6 lg:px-8
            flex h-16 items-center justify-between w-full'>
                <div className='flex items-center'>
                    <Link href='/' className='lg:ml-0'>
                        <h1 className='text-xl font-bold flex flex-col text-center
                        text-[#003767] hover:text-[#001330] animate animate-pulse'>
                            WeTalk<span className='text-[#ffd700]/50 hover:text-[#ffd700]'>Data&AI</span>
                        </h1>
                    </Link>
                </div>
                <NavBar/>
                <Button
                    variant='default'
                    size='icon'
                    className='rounded-2xl text-[#ffd700]/50 hover:animate hover:animate-spin'
                >
                    <SunIcon
                        className='h-6 w-6 rotate-90 scale-100
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
            </div>
        </Container>
    </header>
}

export default Header;