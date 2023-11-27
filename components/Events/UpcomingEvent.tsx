import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import {UpcomingEventData} from "@/typings";
import Schedule from "@/components/Events/Schedule";
import dynamic from "next/dynamic";

type Props = {
    upcomingEvent: UpcomingEventData
}
const Speakers = dynamic(()=> import('../Events/Speakers'), {ssr: false})

const UpcomingEvent = ({upcomingEvent}: Props) => {
    return (
        <SectionWrapperContainer>
            <Speakers upcomingEvent={upcomingEvent}/>

            <Schedule upcomingEvent={upcomingEvent}/>
        </SectionWrapperContainer>
    );
}


export default UpcomingEvent;

