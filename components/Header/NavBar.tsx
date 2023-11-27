import Link from "next/link";


const NavBar = () => {

    const bars = ['HOME', 'ABOUT', 'UPCOMING EVENT', 'GALLERY', 'PAST EVENTS', 'PARTNERS'];

    const barsList = bars.map((bar, id) =>
        <Link key={id}
              className='cursor-pointer text-[#ffd700] hover:text-[#001330] bg-[#003767]/50
              hover:bg-[#ffd700]/50 p-[15px] rounded-full active:bg-[#ffd700]/50 shadow-xl'
              href={`/#${bar.toLowerCase().split(' ').join('-')}`}>
            {bar}
        </Link>
    );

    return (
        <nav className='items-center space-x-3 lg:space-x-4 hidden lg:block w-full xl:pr-[8vw]'>
            {barsList}
        </nav>
    );
}

export default NavBar;
