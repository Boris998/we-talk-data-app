import {Social} from "@/typings";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {ReactNode, useState} from "react";


type Props = {
    children?: ReactNode
}

const Layout = ({children}: Props) => {
    const [socials, setSocials] = useState<Social[]>([]);

    return <>
        <header className="sticky top-0 z-50">
            <Header/>
        </header>
        <main>{children}</main>
        <section id='footer' className='bg-gray-800/70'>
            <Footer socials={socials}/>
        </section>
    </>
}

export default Layout;
