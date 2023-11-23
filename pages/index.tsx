import About from "@/components/About/About";
import Hero from "@/components/Header/Hero";
import Gallery from "@/components/Gallery/Gallery";
import PastEvents from "@/components/Events/PastEvents";
import Video from "@/components/Video/Video";
import Partners from "@/components/Partners/Partners";
import Supporters from "@/components/Supporters/Supporters";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import {AboutData, HomePageGallery, PageInfo, PartnerData, Social, SpeakerData, SupporterData} from '@/typings';
import {GetStaticProps} from "next";
import {fetchAbout} from "@/utils/fetchAbout";
import {fetchHomePageGallery} from "@/utils/fetchHomePageGallery";
import {fetchPartners} from "@/utils/fetchPartners";
import {fetchSupporters} from "@/utils/fetchSupporters";
import {fetchSpeakers} from "@/utils/fetchSpeakers";
import {fetchSocials} from "@/utils/fetchSocials";
import {fetchPageInfo} from "@/utils/fetchPageInfo";

// const inter = Inter({subsets: ['latin']})

type Props = {
    pageInfo: PageInfo;
    about: AboutData;
    homePageGallery: HomePageGallery;
    partners: PartnerData[];
    supporters: SupporterData[];
    socials: Social[];
    speakers: SpeakerData[];
}

const Home = ({
                  pageInfo,
                  about,
                  homePageGallery,
                  partners,
                  supporters,
                  socials,
                  speakers
              }: Props) => {
    return (
        <div className='scrollbar scrollbar-track-yellow-400 scrollbar-thumb-[#ffd700]/80'>

            <header className="sticky top-0 z-50">
                <Header/>
            </header>

            {/*Hero*/}
            <section id='header'>
                <Hero pageInfo={pageInfo}/>
            </section>

            {/* About */}
            <section id="about">
                <About/>
            </section>

            {/* Video */}
            <section>
                <Video/>
            </section>

            {/* Gallery */}
            <section id='gallery' className='bg-[#001330]/40'>
                <Gallery/>
            </section>

            {/* Past Events */}
            <section id='events'>
                <PastEvents/>
            </section>


            {/* Partners */}
            <section id='partners' className='bg-[#001350]/40'>
                <Partners/>
            </section>

            {/* Supporters */}
            <section id='supporters'>
                <Supporters/>
            </section>

            {/* footer */}
            <section id='footer' className='bg-gray-800/70'>
                <Footer/>
            </section>

        </div>
    )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const about: AboutData = await fetchAbout();
    const homePageGallery: HomePageGallery = await fetchHomePageGallery();
    const partners: PartnerData[] = await fetchPartners();
    const supporters: SupporterData[] = await fetchSupporters();
    const socials: Social[] = await fetchSocials();
    const speakers: SpeakerData[] = await fetchSpeakers();

    return {
        props: {
            pageInfo,
            about,
            homePageGallery,
            partners,
            supporters,
            socials,
            speakers
        },
        revalidate: 30
    }
}

