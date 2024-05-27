import EventCard from "@/components/ui/HOC/EventCard";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import { sanityClient, urlFor } from "@/sanity";
import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@/typings";
import { motion } from "framer-motion";

const PastEvents = () => {
  const { isPending, data: pastEvents } = useQuery({
    queryKey: ["pastEvents"],
    queryFn: async () => {
      const queryPastEvents = groq`*[_type=="pastEvents"][0]{
                ...,
                events[]->
           }`;
      return sanityClient.fetch(queryPastEvents);
    },
  });

  if (isPending) return null;

  const listEventCards = pastEvents.events.map((event: Event, id: number) => {
    return (
      <EventCard key={id}>
        <Image
          src={urlFor(event.image.asset._ref).url()}
          alt="as"
          width={600}
          height={400}
        />
        <Link href={`/events/${event.city}`}>
          <figcaption>
            <h3>
              {event.title} | {event.city.replace(/[0-9]/g, '')}
            </h3>
            <h4>{event.date}</h4>
          </figcaption>
        </Link>
      </EventCard>
    );
  });

  return (
    <SectionWrapperContainer>
      <div className="px-2 inner-wrapper-container">
        <HeadingWrapper>
          <span className="tracking-[0.675]">
            {pastEvents.title.toUpperCase()}
          </span>
        </HeadingWrapper>
        <motion.p
          initial={{
            y: 25,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="paragraph-1"
        >
          {pastEvents.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 2.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center flex-wrap"
        >
          {listEventCards}
        </motion.div>
      </div>
    </SectionWrapperContainer>
  );
};

export default PastEvents;
