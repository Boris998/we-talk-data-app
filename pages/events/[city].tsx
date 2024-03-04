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

  const { isPending, data: pastEvent } = useQuery({
    queryKey: ["pastEvent"],
    queryFn: async () => {
        const queryPastEvents = groq`*[_type=="pastEvents"][0]{
            ...,
            events[]->
       }`;
      return sanityClient.fetch(queryPastEvents);
    },
  });

    if (isPending) return null;
    
    // console.log(pastEvent.events[0]);
/*
    const currEvent = pastEvent.events.find(
        (event: Event) => event.city === city
    );*/
    
    // console.log('asd',currEvent);

  return (
    <SectionWrapperContainer>
      <figure className="inner-wrapper-container border-b">
        <HeadingWrapper>
          {pastEvent.events[0].title} | {pastEvent.events[0].city}
        </HeadingWrapper>
        <div className="flex flex-col md:flex-row relative inner-section-wrapper-fixer md:space-y-0 md:space-x-8 items-center">
          <Image
            className="flex rounded-xl object-cover md:w-1/2 md:rounded-xl"
            src={urlFor(pastEvent.image).url()}
            alt="Skopje 2023"
            width={500}
            height={300}
          />
          <p className="paragraph-1 text-left leading-2 xl:leading-8">
            {pastEvent.events[0].description}
          </p>
        </div>
      </figure>

      <Speakers />
    </SectionWrapperContainer>
  );
};

export default Skopje;
