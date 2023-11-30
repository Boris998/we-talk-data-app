import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import {UpcomingEventData} from "@/typings";
import React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import {urlFor} from "@/sanity";
import Image from "next/image";
import Link from "next/link";
import {SewingPinIcon} from "@radix-ui/react-icons";

type Props = {
    upcomingEvent: UpcomingEventData
}

const Schedule = ({upcomingEvent}: Props) => {

    const listSpeakersPresentationInfo = upcomingEvent.speaker.map((speaker) => {
        const urlImage = urlFor(speaker.image.asset._ref).url();

        return <Accordion type="single" collapsible
                          className='mx-[15px] sm:mx-[50px] md:mx-[75px] max-h-[1500px] bg-[#001330]/20'
                          key={speaker._id}>
            <AccordionItem value={'sa'} className='max-h-[500px] overflow-hidden'>
                <AccordionTrigger
                    className='border-l-8 border-l-[#ffd700] hover:bg-gradient-to-br hover:from-[#ffd700]/30 hover:to-[#003767] text-white pr-[15px]'>
                    <span className='space-y-1 sm:space-y-3 px-[10px] flex flex-col items-center'>
                        <Image
                            src={urlImage}
                            alt={speaker.speakerName}
                            height={50}
                            width={50}
                            className='rounded-full sm:scale-150 my-3'/>
                        <p>
                            {speaker.jobTitle.slice(speaker.jobTitle.indexOf('|') + 1)}
                        </p>
                        <p className='text-md sm:text-xl w-[85px] sm:w-[120px]'>
                            {speaker.presentationStartTime}
                        </p>
                    </span>
                    <p className='text-xs md:text-lg lg:text-xl sm:px-[15px] px-[2vw]'>{speaker.presentationTitle}</p>
                </AccordionTrigger>
                <AccordionContent className='bg-[#003767]/50 text-[#ffd700] pt-3 text-md sm:text-lg'>
                    {speaker.description}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    });

    return (
        <div
            className='relative flex flex-col items-center text-center overflow-x-hidden
                px-0 md:text-left max-w-full justify-center mx-auto overflow-y
                sm:px-[50px] sm:space-y-[4vw] xl:space-y-[2vw] py-[9vw] sm:py-[5vw] 2xl:py-[4vw]'>
            <HeadingWrapper>
                {upcomingEvent.scheduleSectionTitle.toUpperCase()}
            </HeadingWrapper>
            <div className='flex flex-col space-y-4'>
                <p className='text-white flex flex-row font-extrabold justify-center'>
                    Location:
                    <Link
                        className='px-2 text-[#ffd700]/50 hover:text-[#ffd700] flex flex-row'
                        href='https://maps.app.goo.gl/p25yuLr5vFrwbbcz5'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SewingPinIcon className='w-6 h-6'/>Public Room
                    </Link>
                </p>
                <p className='text-white flex flex-row font-extrabold justify-center'>
                    Reception and introduction: 18:00 - 18:30
                </p>
                <p className='text-white flex flex-row font-extrabold justify-center'>
                    Tech Talks: 18:30 - 19:30
                </p>
                <p className='text-white flex flex-row font-extrabold justify-center'>
                    Socializing: 19:30 - 21:00
                </p>
            </div>
            <SectionWrapperContainer>
                {listSpeakersPresentationInfo.reverse()}
            </SectionWrapperContainer>
        </div>
    );
}


export default Schedule;

