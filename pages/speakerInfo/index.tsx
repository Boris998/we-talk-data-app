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
        <div
            className='relative flex flex-col max-h-[2100px] items-center text-center overflow-x-hidden
                px-0 md:text-left max-w-full justify-center mx-auto min-h-[500px] overflow-y pt-[200px]
                sm:px-[50px] sm:space-y-[4vw] xl:space-y-[2vw] py-[9vw] sm:py-[5vw] 2xl:py-[4vw]'>

            <div className='flex flex-col md:flex-row relative items-center mt-[50px]
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
                        className='text-[#ffd700] hover:animate-pulse'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInLogoIcon className='h-20 w-20 mt-[25px]'/>
                    </Link>
                </div>
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
