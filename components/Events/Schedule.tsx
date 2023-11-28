import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import {UpcomingEventData} from "@/typings";
import React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import {urlFor} from "@/sanity";
import Image from "next/image";

type Props = {
    upcomingEvent: UpcomingEventData
}
/*

const FAQ_DUMMY = {
    "Stojan Ganchev | General Manager | Aurora Labs": "Bringing static data to live with RoBERTa-based LLM. How from zeros and ones build a performing LLM model that is not polluted or overtrained.",
    "Who is the president of the United States?": "Joe Biden",
};
*/


const Schedule = ({upcomingEvent}: Props) => {

    const listSpeakersPresentationInfo = upcomingEvent.speaker.map((speaker) => {
        const urlImage = urlFor(speaker.image.asset._ref).url();


        return <Accordion type="single" collapsible className='mx-[15px] sm:mx-[75px] max-h-[1500px] bg-[#001330]/20'
                          key={speaker._id}>
            <AccordionItem value={'sa'} className='max-h-[500px]'>
                <AccordionTrigger className='border-l-8 border-l-[#ffd700] hover:bg-gradient-to-br hover:from-[#ffd700]/30 hover:to-[#003767] text-white pr-[15px]'>
                    <span className='space-y-2 px-[10px]'>
                        <Image src={urlImage} alt={speaker.speakerName} height='100' width='120' className='rounded-full'/>
                        <p>
                            {speaker.jobTitle.slice(speaker.jobTitle.indexOf('|')+1)}
                        </p>
                        <p className='text-xl w-[120px]'>
                            {speaker.presentationStartTime}
                        </p>
                    </span>
                    <p className='text-xl sm:px-[15px] px-[2vw]'>{speaker.presentationTitle}</p>
                </AccordionTrigger>
                <AccordionContent className='bg-[#003767]/50 text-[#ffd700] pt-3 text-lg'>
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
                {upcomingEvent.scheduleSectionTitle}
            </HeadingWrapper>
            <SectionWrapperContainer>
                {listSpeakersPresentationInfo}
            </SectionWrapperContainer>
        </div>
    );
}


export default Schedule;

