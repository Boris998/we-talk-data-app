import Link from "next/link";


const NavBar = () => {

    const bars = ['HOME', 'ABOUT', 'GALLERY', 'EVENTS', 'PARTNERS', 'CONTACT US'];

    const barsList = bars.map((bar, id) =>
        <Link key={id}
              className='cursor-pointer text-[#ffd700]/70 hover:text-[#001330] font-extrabold bg-[#001330]/50
              hover:bg-[#ffd700]/50 p-[15px] rounded-full active:bg-[#ffd700]/50 shadow-xl'
              href={`#${bar.toLowerCase()}`}>
            {bar}
        </Link>
    );

    return (
        <nav className='mx-6 items-center space-x-4 lg:space-x-6 hidden lg:block'>
            {barsList}
        </nav>
    );
}

export default NavBar;
