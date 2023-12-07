import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import {UpcomingEventData} from "@/typings";
import Link from "next/link";
import React from "react";
import {urlFor} from "@/sanity";
import Image from 'next/image';
import SpeakerCard from "@/components/ui/HOC/SpeakerCard";
import {LinkedInLogoIcon} from "@radix-ui/react-icons";

type Props = {
    upcomingEvent: UpcomingEventData
}

const Speakers = ({upcomingEvent}: Props) => {

    const listSpeakerCards = upcomingEvent.speaker.map((speaker) => {
        const urlImage = urlFor(speaker.image.asset._ref).url();
        let href0 = speaker.speakerName.toLowerCase() === 'stojan ganchev' ? '/speakerInfo/stojan':'/speakerInfo/bisera';

        return (
            <Link suppressHydrationWarning={false} href={href0} key={speaker._id}>
                <SpeakerCard className='z-100'>
                    <Image src={urlImage} alt={speaker.speakerName} height='300' width='400' className='rounded-2xl'/>
                    <figcaption className='px-5 py-8 space-y-1'>
                        <h3>{speaker.speakerName}</h3>
                        <h3>{speaker.jobTitle}</h3>
                        <h4>{speaker.bio?.substring(0, 50)}</h4>
                    </figcaption>
                </SpeakerCard>
            </Link>
        )
    });

    return (
        <div className='relative flex flex-col items-center text-center overflow-x-hidden
                px-0 md:text-left max-w-full justify-center mx-auto overflow-y border-b
                sm:px-[50px] pt-[9vw] sm:pt-[5vw] 2xl:pt-[4vw]'>
            <HeadingWrapper>
                {upcomingEvent.speakersSectionTitle}
            </HeadingWrapper>
            <div className='flex justify-center items-center flex-wrap'>
                {listSpeakerCards}
            </div>
        </div>
    );
}

Speakers.ssr = false;
export default Speakers;

