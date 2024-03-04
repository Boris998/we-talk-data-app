import EventCard from "@/components/ui/HOC/EventCard";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import { sanityClient, urlFor } from "@/sanity";
import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@/typings";

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
          src={urlFor(pastEvents.image).url()}
          alt="as"
          width={600}
          height={400}
        />
        <Link href="/events/Skopje">
          <figcaption>
            <h3>
              {event.title} | {event.city}
            </h3>
            <h4>30.11.{event.year}</h4>
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
        <p className="paragraph-1">{pastEvents.description}</p>
        <div className="flex justify-center items-center flex-wrap">
          {listEventCards}
        </div>
      </div>
    </SectionWrapperContainer>
  );
};

export default PastEvents;
