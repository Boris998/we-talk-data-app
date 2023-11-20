import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import Header from "@/components/Header/Header";

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

const FAQ = () => {
    return <div className='relative overflow-hidden bg-cover bg-no-repeat h-screen'>
        <header className="sticky top-0 z-50 bg-[#ffd700]/10">
            <Header/>
        </header>
        <SectionWrapperContainer>
            <div className='pt-[100px]'>
                <HeadingWrapper>F A Q</HeadingWrapper>
                {list}
            </div>
        </SectionWrapperContainer>
    </div>
}

export default FAQ;