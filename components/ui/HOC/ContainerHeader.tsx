import { FC, useState, useEffect } from "react";
import { ContainerProps } from "@/typings";

const ContainerHeader: FC<ContainerProps> = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);
    const bg = 'bg-[#ffd700]/20';

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const headerClassName = `mx-auto px-8 w-full absolute rounded-b-full
    justify-between text-center overflow-hidden lg:py-[0.5em] flex items-center ${
        scrolled ? bg: ''
    }`;

    return <header className={headerClassName}>{children}</header>;
};

export default ContainerHeader;