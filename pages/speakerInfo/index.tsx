import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import {sanityClient, urlFor} from "@/sanity";
import {SpeakerData} from "@/typings";
import {GetStaticProps} from "next";
import {LinkedInLogoIcon} from "@radix-ui/react-icons";
import React from "react";
import Link from "next/link";
import {groq} from "next-sanity";

type Props = {
    speakers: SpeakerData[];
}

const SpeakerInfo = ({speakers}: Props) => {

    return <SectionWrapperContainer>
            <div className='flex flex-col md:flex-row relative items-center py-24 md:py-36 overflow-hidden
                justify-center space-y-[30px] px-[20px] md:space-x-[50px] md:space-y-0'>
                <img className='w-[400px] h-[300px] rounded-xl object-cover mx-auto
                md:rounded-xl md:w-[320px] md:h-[320px] lg:w-[500px] lg:h-[500px] 2xl:w-[650px] 2xl:h-[500px] '
                     src={urlFor(speakers[0].image).url()}
                     alt={speakers[0]?.speakerName}
                />
                <div className='space-y-6'>
                    <p className='text-[10px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-xl 2xl:text-left text-[#ffd700]/70'>
                        <span>{speakers[0].speakerName} | </span>
                        <span>{speakers[0].jobTitle}</span>
                    </p>
                    <p className='text-[10px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-xl 2xl:text-left pb-5 text-white'>
                        <span className='text-[#ffd700]/70'>
                            He will talk About:
                        </span>
                        {speakers[0].description}
                    </p>
                    <p className='text-[10px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-xl 2xl:text-left text-white'>
                        <span className='text-[#ffd700]/70'>Biography:</span> {speakers[0].bio}
                    </p>
                    <Link
                        href={speakers[0].linkedIn}
                        className='text-[#ffd700] hover:animate-pulse flex items-center justify-center relative'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInLogoIcon className='h-20 w-20 mt-[15px]'/>
                    </Link>
                </div>
        </div>
    </SectionWrapperContainer>
}
export default SpeakerInfo;


export const getStaticProps: GetStaticProps<Props> = async () => {

    const querySpeakers = groq`*[_type=="speaker"]`;
    const speakers: SpeakerData[] = await sanityClient.fetch(querySpeakers);

    return {
        props: {
            speakers,
        }
    }
}
