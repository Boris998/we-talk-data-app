import About from "@/components/About/About";
import PastEvents from "@/components/Events/PastEvents";
import UpcomingEvent from "@/components/Events/UpcomingEvent";
import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Header/Hero";
import Partners from "@/components/Partners/Partners";
import Supporters from "@/components/Supporters/Supporters";
import Video from "@/components/Video/Video";
import { sanityClient } from "@/sanity";
import {
  AboutData,
  HomePageGallery,
  PageInfo,
  PartnerData,
  PastEventsData,
  SupporterData,
  UpcomingEventData,
} from "@/typings";
import { GetStaticProps } from "next";
import { groq } from "next-sanity";

type Props = {
  pageInfo: PageInfo;
  about: AboutData;
  homePageGallery: HomePageGallery;
  pastEvents: PastEventsData;
  partners: PartnerData[];
  supporters: SupporterData[];
  upcomingEvent: UpcomingEventData;
};

const Home = ({
  pageInfo,
  about,
  homePageGallery,
  pastEvents,
}: Props) => {
  return (
    <div
      id="home"
    >
      {/*Hero*/}
      <section
        id="header"
        className=''
      >
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className={`bg-[#001330]/40`}>
        <About about={about} />
      </section>

      {/* Video */}
      {!pastEvents?.featureFlag && (
        <section>
          <Video />
        </section>
      )}

      (
        <section id="upcoming-event">
          <UpcomingEvent />
        </section>
      )

      {/* Gallery */}
      {homePageGallery?.featureFlag && (
        <section id="gallery" className={`bg-[#001330]/30`}>
          <Gallery homePageGallery={homePageGallery} />
        </section>
      )}

      {/* Past Events */}
      {!pastEvents?.featureFlag &&
        <section id="past-events" >
          <PastEvents />
        </section>
      }

      {/* Partners */}
      <section id="partners" className={`bg-[#001330]/30`}>
        <Partners />
      </section>

      {/* Supporters */}
      <section id="supporters" className={`bg-[#001330]/80`}>
        <Supporters/>
      </section>
    </div>
  );
};

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
  const homePageGallery: HomePageGallery = await sanityClient.fetch(
    queryHomePageGallery
  );

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

  //fetch UpcomingEventData
  const queryUpcomingEvent = groq`*[_type=="upcomingEvent"][0]{
        ...,
        speaker[]->
    }`;
  const upcomingEvent: UpcomingEventData = await sanityClient.fetch(
    queryUpcomingEvent
  );

  return {
    props: {
      pageInfo,
      about,
      homePageGallery,
      pastEvents,
      partners,
      supporters,
      upcomingEvent,
    },
  };
};
