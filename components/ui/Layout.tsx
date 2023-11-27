import {Social} from "@/typings";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {fetchSocials} from "@/utils/fetchSocials";
import {ReactNode, useEffect, useState} from "react";


type Props = {
    children?: ReactNode
}

const Layout = ({children}: Props) => {
    const [loadSocials, setLoadSocials] = useState<Social[]>([]);

    useEffect( () => {
        const fSocials = fetchSocials().then(res=>setLoadSocials(res));
    }, []);

    return <>
        <Header/>
        <main>{children}</main>
        <section id='footer' className='bg-gray-800/70'>
            <Footer socials={loadSocials}/>
        </section>
    </>
}

export default Layout;
