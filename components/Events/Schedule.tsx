import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import {UpcomingEventData} from "@/typings";
import React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";

type Props = {
    upcomingEvent: UpcomingEventData
}

const FAQ_DUMMY = {
    "What is the capital of France?": "Paris",
    "Who is the president of the United States?": "Joe Biden",
    "What is the largest mammal in the world?": "Blue Whale"
};

const list = Object.entries(FAQ_DUMMY).map(([question, answer]) => (
    <Accordion type="single" collapsible className='mx-[15px] sm:mx-[75px] max-h-[1500px] bg-[#001330]/20' key={question}>
        <AccordionItem value={question} className='max-h-[500px]'>
            <AccordionTrigger className='px-6 border-l-8 border-l-[#ffd700] text-white'>{question}</AccordionTrigger>
            <AccordionContent className='bg-[#003767]/50 text-[#ffd700] pt-3'>
                {answer}
            </AccordionContent>
        </AccordionItem>
    </Accordion>
));


const Schedule = ({upcomingEvent}: Props) => {
    return (
        <div
            className='relative flex flex-col items-center text-center overflow-x-hidden
                px-0 md:text-left max-w-full justify-center mx-auto overflow-y
                sm:px-[50px] sm:space-y-[4vw] xl:space-y-[2vw] py-[9vw] sm:py-[5vw] 2xl:py-[4vw]'>
            <HeadingWrapper>
                {upcomingEvent.scheduleSectionTitle}
            </HeadingWrapper>
            <SectionWrapperContainer>
                    {list}
            </SectionWrapperContainer>
        </div>
    );
}


export default Schedule;

