import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import Image from "next/image";
import {sanityClient, urlFor} from "@/sanity";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import {GetStaticProps} from "next";
import {groq} from "next-sanity";
import {PastEventsData, UpcomingEventData} from "@/typings";
import Speakers from "@/components/Events/Speakers";

type Props = {
    upcomingEvent: UpcomingEventData
    pastEvent: PastEventsData
}

const Skopje = ({upcomingEvent, pastEvent}:Props) => {
    return <>
        <SectionWrapperContainer>
            <div
                className='relative flex flex-col max-h-[2100px] items-center text-center overflow-x-hidden
                px-0 md:text-left max-w-full justify-center mx-auto min-h-[500px] overflow-y
                sm:px-[50px] sm:space-y-[4vw] xl:space-y-[2vw] py-[9vw] sm:py-[5vw] 2xl:py-[4vw]'>
                <HeadingWrapper>
                    {pastEvent.events[0].title} | {pastEvent.events[0].city}
                </HeadingWrapper>
                <div className='flex flex-col md:flex-row relative items-center
                justify-evenly space-y-[30px] px-[20px] md:space-x-[50px] md:space-y-0'>
                    <Image
                        className='w-[400px] h-[300px] rounded-xl object-cover mx-auto
                        md:w-1/2 md:rounded-xl md:h-[370px] lg:h-[500px] 2xl:h-[26vw] max-h-[500px]'
                        src={urlFor(pastEvent.image).url()}
                        alt='Skopje 2023'
                        width={400}
                        height={300}
                    />
                    <p className='text-[0.65rem] sm:text-[0.75rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.25rem] 2xl:text-left text-white md:w-1/2'>
                        {pastEvent.events[0].description}
                    </p>
                </div>
            </div>
        </SectionWrapperContainer>
        <Speakers upcomingEvent={upcomingEvent}/>
    </>
}

export default Skopje;


export const getStaticProps: GetStaticProps<Props> = async () => {

    const queryPastEvents = groq`*[_type=="pastEvents"][0]{
         ...,
         events[]->
    }`;
    const pastEvent: PastEventsData = await sanityClient.fetch(queryPastEvents);

    const queryUpcomingEvent = groq`*[_type=="upcomingEvent"][0]{
        ...,
        speaker[]->
    }`;
    const upcomingEvent: UpcomingEventData = await sanityClient.fetch(queryUpcomingEvent);


    return {
        props: {
            pastEvent,
            upcomingEvent,
        }
    }
}