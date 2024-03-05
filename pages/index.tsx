import About from "@/components/About/About";
import PastEvents from "@/components/Events/PastEvents";
import UpcomingEvent from "@/components/Events/UpcomingEvent";
import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Header/Hero";
import Partners from "@/components/Partners/Partners";
import Supporters from "@/components/Supporters/Supporters";
import Video from "@/components/Video/Video";
import {sanityClient} from "@/sanity";
import {AboutData} from "@/typings";
import {useQuery} from "@tanstack/react-query";
import {GetStaticProps} from "next";
import {groq} from "next-sanity";

type Props = {
  about: AboutData;
};

const Home = ({ about }: Props) => {
  const { isPending, data: featureFlags } = useQuery({
    queryKey: ["featureFlags"],
    queryFn: async () => {
      const queryFeatureFlags = groq`*[_type=="featureFlags"][0]`;
      return sanityClient.fetch(queryFeatureFlags);
    },
  });

  if (isPending) return null;

  return (
    <div id="home">
      {/*Hero*/}
      <section id="header">
        <Hero />
      </section>

      {/* About */}
      {featureFlags.featureFlagAbout && (
        <section id="about" className='bg-[#001330]/60'>
          <About about={about} />
        </section>
      )}

      {/* Video */}
      {featureFlags.featureFlagVideo || (
        <section>
          <Video />
        </section>
      )}

      {/* UpcomingEvent */}
      {featureFlags.featureFlagUpcomingEvents && (
        <section id="upcoming-event" className='bg-[#001330]/40'>
          <UpcomingEvent />
        </section>
      )}

      {/* Gallery */}
      {featureFlags.featureFlagGallery && (
        <section id="gallery" className='bg-[#001330]/20'>
          <Gallery />
        </section>
      )}

      {/* Past Events */}
      {featureFlags.featureFlagPastEvents && (
        <section id="past-events">
          <PastEvents />
        </section>
      )}

      {/* Partners */}
      {featureFlags.featureFlagPartners && (
        <section id="partners" className='bg-[#001330]/30'>
          <Partners />
        </section>
      )}

      {/* Supporters */}
      {featureFlags.featureFlagSupporters && (
        <section id="supporters" className='bg-[#001330]/60'>
          <Supporters />
        </section>
      )}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const queryAbout = groq`*[_type=="about"][0]`;
  const about: AboutData = await sanityClient.fetch(queryAbout);

  return {
    props: { about },
  };
};
