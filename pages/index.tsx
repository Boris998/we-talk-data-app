import About from "@/components/About/About";
import Hero from "@/components/Header/Hero";
import Gallery from "@/components/Gallery/Gallery";
import PastEvents from "@/components/Events/PastEvents";
import Video from "@/components/Video/Video";
import Partners from "@/components/Partners/Partners";
import Supporters from "@/components/Supporters/Supporters";
import Header from "@/components/Header/Header";
import {
    AboutData,
    HomePageGallery,
    PageInfo,
    PartnerData,
    PastEventsData,
    Social,
    SpeakerData,
    SupporterData,
    UpcomingEventData
} from '@/typings';
import {GetStaticProps} from "next";
import {fetchAbout} from "@/utils/fetchAbout";
import {fetchHomePageGallery} from "@/utils/fetchHomePageGallery";
import {fetchPartners} from "@/utils/fetchPartners";
import {fetchSupporters} from "@/utils/fetchSupporters";
import {fetchSpeakers} from "@/utils/fetchSpeakers";
import {fetchSocials} from "@/utils/fetchSocials";
import {fetchPageInfo} from "@/utils/fetchPageInfo";
import {fetchPastEvents} from "@/utils/fetchPastEvents";
import {fetchUpcomingEvent} from "@/utils/fetchUpcomingEvent";
import UpcomingEvent from "@/components/Events/UpcomingEvent";

// const inter = Inter({subsets: ['latin']})

type Props = {
    pageInfo: PageInfo;
    about: AboutData;
    homePageGallery: HomePageGallery;
    pastEvents: PastEventsData;
    partners: PartnerData[];
    supporters: SupporterData[];
    socials: Social[];
    speakers: SpeakerData[];
    upcomingEvent: UpcomingEventData;
}

const Home = ({
                  pageInfo,
                  about,
                  homePageGallery,
                  pastEvents,
                  partners,
                  supporters,
                  socials,
                  speakers,
                  upcomingEvent
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
            <section id="about" className='bg-[#001330]/30'>
                <About about={about}/>
            </section>

            {/* Video */}
            {homePageGallery.featureFlag || <section>
                <Video/>
            </section>}

            <section id='upcoming-event' >
                <UpcomingEvent upcomingEvent={upcomingEvent}/>
            </section>

            {/* Gallery */}
            {homePageGallery?.featureFlag ||
                <section id='gallery' className='bg-[#001330]/40'>
                    <Gallery homePageGallery={homePageGallery}/>
                </section>
            }

            {/* Past Events */}
            {pastEvents?.featureFlag &&
                <section id='past-events'>
                    <PastEvents pastEvents={pastEvents}/>
                </section>
            }

            {/* Partners */}
            <section id='partners' className='bg-[#001350]/40'>
                <Partners partners={partners}/>
            </section>

            {/* Supporters */}
            <section id='supporters'>
                <Supporters supporters={supporters}/>
            </section>

        </div>
    )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const about: AboutData = await fetchAbout();
    const homePageGallery: HomePageGallery = await fetchHomePageGallery();
    const pastEvents: PastEventsData = await fetchPastEvents();
    const partners: PartnerData[] = await fetchPartners();
    const supporters: SupporterData[] = await fetchSupporters();
    const socials: Social[] = await fetchSocials();
    const speakers: SpeakerData[] = await fetchSpeakers();
    const upcomingEvent: UpcomingEventData = await fetchUpcomingEvent();

    return {
        props: {
            pageInfo,
            about,
            homePageGallery,
            pastEvents,
            partners,
            supporters,
            socials,
            speakers,
            upcomingEvent
        },
        revalidate: 2
    }
}

