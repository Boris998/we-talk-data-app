import Schedule from "@/components/Events/Schedule";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import dynamic from "next/dynamic";

const Speakers = dynamic(()=> import('../Events/Speakers'), {ssr: false})

const UpcomingEvent = () => {
    return (
        <SectionWrapperContainer>
            <Speakers />

            <Schedule />
        </SectionWrapperContainer>
    );
}


export default UpcomingEvent;

