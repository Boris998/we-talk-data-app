import EventCard from "@/components/ui/HOC/EventCard";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import React from "react";
import Link from "next/link";

const DUMMY_EVENTS = [
    {
        title: 'WeTalkData&AI',
        city: 'Skopje',
        year: 2023,
        imageSrc: '/assets/hero.jpg'
    },
    {
        title: 'WeTalkData&AI',
        city: 'Belgrade',
        year: 2023,
        imageSrc: '/assets/hero.jpg'
    },
    {
        title: 'WeTalkData&AI',
        city: 'San Francisco',
        year: 2023,
        imageSrc: '/assets/hero.jpg'
    },
    {
        title: 'WeTalkData&AI',
        city: 'Huston',
        year: 2023,
        imageSrc: '/assets/hero.jpg'
    },
];

const PastEvents = () => {

    const listEventCards = DUMMY_EVENTS.map((event, id) => {
        return <EventCard key={id}>
            <img src={`${event.imageSrc}`} alt='as'/>
            <Link href='/'>
                <figcaption>
                    <h3>{event.title} | {event.city} {event.year}</h3>
                    <h4>category</h4>
                </figcaption>
            </Link>
        </EventCard>;
    });

    return <SectionWrapperContainer>

        <div
            className='relative items-center text-center
            space-y-[50px] sm:px-[50px] overflow-hidden mx-auto py-[75px]'
        >
            <h3 className='relative uppercase tracking-[20px] text-gray-400 text-2xl shadow-lg p-[30px] rounded-full'>
                <span className='text-[#ffd700]'>[</span>
                PAST EVENTS
                <span className='text-[#ffd700]'>]</span>
            </h3>
            {listEventCards}
        </div>
    </SectionWrapperContainer>;
}

export default PastEvents;