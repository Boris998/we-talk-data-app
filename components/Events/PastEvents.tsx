import EventCard from "@/components/ui/HOC/EventCard";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import React, {FC} from "react";
import Link from "next/link";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import {PastEventsData} from "@/typings";
import Image from "next/image";

const MOCK_EVENTS = [
    {
        title: 'WeTalkData&AI',
        city: 'Skopje',
        year: 2023,
        imageSrc: '/assets/gall-5.png'
    },
];

type Props = {
    pastEvents: PastEventsData
};

const PastEvents:FC<Props> = ({pastEvents}:Props) => {

    const listEventCards = MOCK_EVENTS.map((event, id) => {
        return <EventCard key={id}>
            <Image src={`${event.imageSrc}`} alt='as' width={600} height={400}/>
            <Link href='/events/Skopje'>
                <figcaption>
                    <h3>{event.title} | {event.city}</h3>
                    <h4>{event.year}</h4>
                </figcaption>
            </Link>
        </EventCard>;
    });

    return <SectionWrapperContainer>
        <div
            className='relative flex flex-col px-[10px] space-y-[20px] overflow-x-hidden
             sm:px-[50px] sm:space-y-[4vw] xl:space-y-[2vw] py-[8vw] sm:py-[5vw] 2xl:py-[4vw]'
        >
            <HeadingWrapper>
                {pastEvents.title.toUpperCase()}
            </HeadingWrapper>
            <p className='text-[10px] sm:text-[14px] lg:text-xl text-white mx-[20px] sm:px-0'>
                {pastEvents.description}
            </p>
            <div className='flex justify-center items-center flex-wrap'>
                {listEventCards}
            </div>
        </div>
    </SectionWrapperContainer>;
}

export default PastEvents;