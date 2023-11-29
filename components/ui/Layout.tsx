import Header from "@/components/Header/Header";
import {ReactNode} from "react";
import Footer from "@/components/Footer/Footer";


type Props = {
    children?: ReactNode
}

const Layout = ({children}: Props) => {

    return <>
        <header className="sticky top-0 z-50">
            <Header/>
        </header>
        <main>{children}</main>
        <section id='footer' className='bg-gray-800/70'>
            <Footer/>
        </section>
    </>
}

export default Layout;
