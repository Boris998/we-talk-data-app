import Speakers from "@/components/Events/Speakers";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import { sanityClient, urlFor } from "@/sanity";
import { Event } from "@/typings";
import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";
import Image from "next/image";
import { useRouter } from "next/router";

const Skopje = () => {
  const router = useRouter();
  const city = router.query.city;

  const { isPending, data: pastEventsData } = useQuery({
    queryKey: ["pastEventsData"],
    queryFn: async () => {
      const queryPastEvents = groq`*[_type=="event"]{
                ...,
                speakers[]->
           }`;
      return sanityClient.fetch(queryPastEvents);
    },
  });

  if (isPending) return null;

  const currEvent = pastEventsData.findIndex(
    (event: Event) => event.city === city
  ); 

  const speakersData = pastEventsData[currEvent].speakers;

  return (
    <SectionWrapperContainer>
      <figure className="inner-wrapper-container border-b">
        <HeadingWrapper>
          {pastEventsData[currEvent].title} | {pastEventsData[currEvent].city}
        </HeadingWrapper>
        <div className="flex flex-col md:flex-row relative inner-section-wrapper-fixer md:space-y-0 md:space-x-8 items-center">
          <Image
            className="flex rounded-xl object-cover md:w-1/2 md:rounded-xl"
            src={urlFor(pastEventsData[currEvent].image).url()}
            alt="Skopje 2023"
            width={500}
            height={300}
          />
          <p className="paragraph-1 text-left leading-2 xl:leading-8">
            {pastEventsData[currEvent].description}
          </p>
        </div>
      </figure>

      <Speakers speakersData={speakersData} />
    </SectionWrapperContainer>
  );
};

export default Skopje;
