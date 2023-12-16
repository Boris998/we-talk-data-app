import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import { sanityClient, urlFor } from "@/sanity";
import { SpeakerData } from "@/typings";
import { GetStaticProps } from "next";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import Link from "next/link";
import { groq } from "next-sanity";
import Image from "next/image";

type Props = {
  speakers: SpeakerData[];
};

const SpeakerInfo = ({ speakers }: Props) => {
  return (
    <SectionWrapperContainer>
      <div
        className="flex flex-col md:flex-row relative items-center py-24 md:py-36 overflow-hidden
                justify-center space-y-[30px] px-[20px] md:space-x-[50px] md:space-y-0"
      >
        <Image
          className="w-[400px] h-[300px] rounded-xl object-cover mx-auto md:rounded-xl md:w-[400px] md:h-[450px] lg:w-[500px] lg:h-[550px] 2xl:w-[650px] 2xl:h-[500px]"
          src={urlFor(speakers[0].image).url()}
          alt={speakers[0].speakerName}
          width={650}
          height={500}
        />
        <div className="space-y-3 md:text-left">
          <p className="text-[10px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-xl text-[#ffd700]/70">
            <span>{speakers[0].speakerName} | </span>
            <span>{speakers[0].jobTitle}</span>
          </p>
          <p className="text-[10px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-xl text-white">
            <span className="text-[#ffd700]/70 font-extrabold">Topic description:{" "}</span>
            {speakers[0].description}
          </p>
          <p className="text-[10px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-xl text-white">
            <span className="text-[#ffd700]/70 font-extrabold">Biography:{" "}</span>
            {speakers[0].bio}
          </p>
          <Link
            href={speakers[0].linkedIn}
            className="text-[#ffd700] hover:animate-pulse flex items-center justify-center relative"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogoIcon className="h-20 w-20 md:h-16 md:w-16 lg:h-20 lg:w-20 mt-[15px]" />
          </Link>
        </div>
      </div>
    </SectionWrapperContainer>
  );
};
export default SpeakerInfo;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const querySpeakers = groq`*[_type=="speaker"]`;
  const speakers: SpeakerData[] = await sanityClient.fetch(querySpeakers);

  return {
    props: {
      speakers,
    },
  };
};
