import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";

const FAQ_DUMMY = {
    "HOW MUCH DOES IT COST TO ATTEND WeTalkDATA&AI?": "The event is free of charge and only has limited capacity.",
    "CAN I REGISTER A GROUP?": "Only individual registrations are allowed.",
    "WHEN/WHERE DO I PICK UP MY BADGE/TICKET?": "By registering online, you will automatically be added to the guest list. ",
    "CAN I APPLY AS A SPEAKER FOR WeTalkDATA&AI?": "You can reach out to hello@wetalkdata.ai and we can review and discuss your proposal if the agenda for the given event is not already finalized.",
    "CAN I WATCH THE WeTalkDATA&AI SESSIONS AFTER THE EVENT?": "For the first edition, the talks won’t be recorded. Please follow us on social media for more information.",
};

const list = Object.entries(FAQ_DUMMY).map(([question, answer]) => (
    <Accordion type="single" collapsible className='mx-[15px] sm:mx-[75px] max-h-[1500px] bg-[#001330]/20'
               key={question}>
        <AccordionItem value={question} className='max-h-[500px]'>
            <AccordionTrigger className='px-6 border-l-8 border-l-[#ffd700] text-white'>{question}</AccordionTrigger>
            <AccordionContent className='bg-[#003767]/50 text-[#ffd700] pt-3'>
                {answer}
            </AccordionContent>
        </AccordionItem>
    </Accordion>
));

const FAQ = () => {
    return <section className='relative overflow-hidden bg-cover bg-no-repeat h-screen'>
        <SectionWrapperContainer>
            <div className='pt-24'>
                <HeadingWrapper>F A Q</HeadingWrapper>
                {list}
            </div>
        </SectionWrapperContainer>
    </section>
}

export default FAQ;