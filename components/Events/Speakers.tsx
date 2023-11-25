import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import {UpcomingEventData} from "@/typings";
import Link from "next/link";
import React from "react";
import {urlFor} from "@/sanity";
import Image from 'next/image';
import SpeakerCard from "@/components/ui/HOC/SpeakerCard";

type Props = {
    upcomingEvent: UpcomingEventData
}

const Speakers = ({upcomingEvent}: Props) => {

    const listSpeakerCards = upcomingEvent.speaker.map((speaker) => {
        const urlImage = urlFor(speaker.image.asset._ref).url();

        return <SpeakerCard key={speaker._id}>
            <Image src={urlImage} alt={speaker.speakerName} height='300' width='400' className='rounded-2xl'/>
            <Link href='/#speakers'>
                <figcaption>
                    <h3 className='hover:text-[#003767]'>view more</h3>
                    <h3>{speaker.speakerName} | {speaker.jobTitle}</h3>
                    <h4>{speaker.bio?.substring(0, 50)}</h4>
                </figcaption>
            </Link>
        </SpeakerCard>;
    });

    return (
        <div className='relative flex flex-col items-center text-center overflow-x-hidden
                px-0 md:text-left max-w-full justify-center mx-auto overflow-y border-b
                sm:px-[50px] sm:space-y-[4vw] xl:space-y-[2vw] py-[9vw] sm:py-[5vw] 2xl:py-[4vw]'>
            <HeadingWrapper>
                {upcomingEvent.speakersSectionTitle}
            </HeadingWrapper>
            <div className='flex justify-center items-center flex-wrap '>
                {listSpeakerCards}
            </div>
        </div>
    );
}


export default Speakers;

