import {Inter} from 'next/font/google'
import About from "@/components/About/About";
import Hero from "@/components/Header/Hero";
import Gallery from "@/components/Gallery/Gallery";
import PastEvents from "@/components/Events/PastEvents";
import Head from "next/head";
import Video from "@/components/Video/Video";
import Partners from "@/components/Partners/Partners";
import Supporters from "@/components/Supporters/Supporters";
import Footer from "@/components/Footer/Footer";

const inter = Inter({subsets: ['latin']})

const Home = () => {
    return (
        <div className='scrollbar scrollbar-track-gray-500/20'>

            <Head>
                <title>We Talk Data & AI</title>
            </Head>

            {/*Navbar + Hero*/}
            <section id='header'>
                <Hero/>
            </section>

            {/* About */}
            <section id="about">
                <About />
            </section>

            {/* Video */}
            <section id='gallery'>
                <Video/>
            </section>

            {/* Gallery */}
            <section id='gallery' className='bg-[#ffd700]/10'>
                <Gallery/>
            </section>

            {/* Past Events */}
            <section id='gallery'>
                <PastEvents/>
            </section>


            {/* Partners */}
            <section id='partners' className='bg-[#ffd700]/10'>
                <Partners/>
            </section>

            {/* Supporters */}
            <section id='supporters'>
                <Supporters/>
            </section>

            {/* footer */}
            <section id='footer' className='bg-gray-800'>
                <Footer/>
            </section>

        </div>
    )
}

export default Home;
