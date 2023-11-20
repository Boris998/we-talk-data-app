import About from "@/components/About/About";
import Hero from "@/components/Header/Hero";
import Gallery from "@/components/Gallery/Gallery";
import PastEvents from "@/components/Events/PastEvents";
import Video from "@/components/Video/Video";
import Partners from "@/components/Partners/Partners";
import Supporters from "@/components/Supporters/Supporters";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

// const inter = Inter({subsets: ['latin']})

const Home = () => {
    return (
        <div className='scrollbar scrollbar-track-gray-500/20'>

            <header className="sticky top-0 z-50">
                <Header/>
            </header>

            {/*Hero*/}
            <section id='header'>
                <Hero/>
            </section>

            {/* About */}
            <section id="about">
                <About />
            </section>

            {/* Video */}
            <section>
                <Video/>
            </section>

            {/* Gallery */}
            <section id='gallery' className='bg-[#ffd700]/10'>
                <Gallery/>
            </section>

            {/* Past Events */}
            <section id='events'>
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
