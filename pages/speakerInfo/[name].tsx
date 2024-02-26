import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import { sanityClient, urlFor } from "@/sanity";
import { SpeakerData } from "@/typings";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


const SpeakerInfo = () => {
  const router = useRouter();
  const name = router.query.name;

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

  const currSpeaker = agenda.speaker.find(
    (speaker: SpeakerData) => speaker.speakerName === name
  );

  return (
    <SectionWrapperContainer>
      <figure className="inner-wrapper-container">
        <HeadingWrapper>
            <span>{currSpeaker.speakerName} | </span>
            <span>{currSpeaker.jobTitle}</span>
        </HeadingWrapper>
        <div className="flex flex-col md:flex-row relative inner-section-wrapper-fixer md:space-y-0 md:space-x-8 items-center">
          <Image
            className="flex rounded-xl object-cover md:w-1/2 md:rounded-xl"
            src={urlFor(currSpeaker.image).url()}
            alt={currSpeaker.speakerName}
            width={650}
            height={500}
          />
          <div className="space-y-3 md:text-left">
            <p className="paragraph-1">
              <span className='font-bold'>Topic description: </span>
              {currSpeaker.description}
            </p>
            <p className="paragraph-1">
              <span className="font-bold">Biography: </span>
              {currSpeaker.bio}
            </p>
            <Link
              href={currSpeaker.linkedIn}
              className='text-[#ffd700] hover:animate-pulse flex items-center justify-center relative'
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLogoIcon className="h-20 w-20 md:h-16 md:w-16 lg:h-20 lg:w-20 mt-[15px]" />
            </Link>
          </div>
        </div>
      </figure>
    </SectionWrapperContainer>
  );
};
export default SpeakerInfo;
