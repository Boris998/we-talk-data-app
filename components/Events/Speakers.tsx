import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import SpeakerCard from "@/components/ui/HOC/SpeakerCard";
import { sanityClient, urlFor } from "@/sanity";
import { SpeakerData } from "@/typings";
import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";


const Speakers = () => {
  const { isPending, data: agenda } = useQuery({
    queryKey: ["agenda"],
    queryFn: async () => {
      const queryAgenda = groq`*[_type=="upcomingEvent"][0]{
        ...,
        speaker[]->
    }`;
      return sanityClient.fetch(queryAgenda);
    },
  });

  if (isPending) return null;

  const listSpeakerCards = agenda.speaker.map((speaker: SpeakerData) => {
    const urlImage = urlFor(speaker.image.asset._ref).url();

    return (
      <Link
        suppressHydrationWarning={false}
        href={`/speakerInfo/${speaker.speakerName}`}
        key={speaker._id}
      >
        <SpeakerCard className="z-100 ">
          <Image
            src={urlImage}
            alt={speaker.speakerName}
            height="300"
            width="400"
            className="rounded-2xl"
          />
          <figcaption className="px-5 py-8 space-y-1">
            <h3>{speaker.speakerName}</h3>
            <h3>{speaker.jobTitle}</h3>
            <h4>{speaker.bio?.substring(0, 50)}</h4>
          </figcaption>
        </SpeakerCard>
      </Link>
    );
  });

  return (
    <article className="inner-wrapper-container border-b">
      <HeadingWrapper>{agenda.speakersSectionTitle}</HeadingWrapper>
      <div className="flex justify-center items-center flex-wrap">
        {listSpeakerCards}
      </div>
    </article>
  );
};

Speakers.ssr = false;
export default Speakers;
