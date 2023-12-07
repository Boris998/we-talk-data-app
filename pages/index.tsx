import About from "@/components/About/About";
import Hero from "@/components/Header/Hero";
import Gallery from "@/components/Gallery/Gallery";
import PastEvents from "@/components/Events/PastEvents";
import Video from "@/components/Video/Video";
import Partners from "@/components/Partners/Partners";
import Supporters from "@/components/Supporters/Supporters";
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
import UpcomingEvent from "@/components/Events/UpcomingEvent";
import {groq} from "next-sanity";
import {sanityClient} from "@/sanity";

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
        <div className='scrollbar scrollbar-track-yellow-400 scrollbar-thumb-[#ffd700]/80' id='home'>

            {/*Hero*/}
            <section id='header' className={'{/*bg-gradient-to-tl from-blue-800/70 to-[#ffd700]/60*/}'}>
                <Hero pageInfo={pageInfo}/>
            </section>

            {/* About */}
            <section id="about" className='bg-[#001330]/30'>
                <About about={about}/>
            </section>

            {/* Video */}
            {!pastEvents.featureFlag || <section>
                <Video/>
            </section>}

            <section id='upcoming-event'>
                <UpcomingEvent upcomingEvent={upcomingEvent}/>
            </section>

            {/* Gallery */}
            {homePageGallery?.featureFlag &&
                <section id='gallery' className='bg-[#001330]/40'>
                    <Gallery homePageGallery={homePageGallery}/>
                </section>
            }

            {/* Past Events */}
            {/*{!pastEvents?.featureFlag ||*/}{
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

    //fetch PageInfo
    const queryPageInfo = groq`*[_type=="pageInfo"][0]`;
    const pageInfo: PageInfo = await sanityClient.fetch(queryPageInfo);

    //fetch About
    const queryAbout = groq`*[_type=="about"][0]`;
    const about: AboutData = await sanityClient.fetch(queryAbout);

    //fetch HomePageGallery
    const queryHomePageGallery = groq`*[_type=="homePageGallery"][0]{
        ...,
        sliderImages[]->
    }`;
    const homePageGallery: HomePageGallery = await sanityClient.fetch(queryHomePageGallery);

    //fetchPastEvents
    const queryPastEvents = groq`*[_type=="pastEvents"][0]{
         ...,
         events[]->
    }`;
    const pastEvents: PastEventsData = await sanityClient.fetch(queryPastEvents);

    //fetch PartnerData
    const queryPartners = groq`*[_type=="partner"]`;
    const partners: PartnerData[] = await sanityClient.fetch(queryPartners);

    //fetch SupporterData
    const querySupporters = groq`*[_type=="supporter"]`;
    const supporters: SupporterData[] = await sanityClient.fetch(querySupporters);

    //fetch Socials
    const querySocials = groq`*[_type=="social"]`;
    const socials: Social[] = await sanityClient.fetch(querySocials);

    //fetch SpeakerData
    const querySpeakers = groq`*[_type=="speaker"]`;
    const speakers: SpeakerData[] = await sanityClient.fetch(querySpeakers);

    //fetch UpcomingEventData
    const queryUpcomingEvent = groq`*[_type=="upcomingEvent"][0]{
        ...,
        speaker[]->
    }`;
    const upcomingEvent: UpcomingEventData = await sanityClient.fetch(queryUpcomingEvent);


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
    }
}

