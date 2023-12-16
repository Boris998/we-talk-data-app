import EventCard from "@/components/ui/HOC/EventCard";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import React, {FC} from "react";
import Link from "next/link";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import {PastEventsData} from "@/typings";
import Image from "next/image";
import { urlFor } from "@/sanity";
import { FONTS, INNER_WRAPPER, PRIMARY_THEME_COLORS } from "@/constants/primary-theme";

type Props = {
    pastEvents: PastEventsData
};

const PastEvents:FC<Props> = ({pastEvents}:Props) => {

    const listEventCards = pastEvents.events.map((event, id) => {
        return <EventCard key={id}>
            <Image src={urlFor(pastEvents.image).url()} alt='as' width={600} height={400}/>
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
            className={`px-[10px] ${INNER_WRAPPER.container}`}
        >
            <HeadingWrapper>
                {pastEvents.title.toUpperCase()}
            </HeadingWrapper>
            <p className={`${PRIMARY_THEME_COLORS.textWhite} ${FONTS.paragraph} mx-[20px] sm:px-0`}>
                {pastEvents.description}
            </p>
            <div className='flex justify-center items-center flex-wrap'>
                {listEventCards}
            </div>
        </div>
    </SectionWrapperContainer>;
}

export default PastEvents;