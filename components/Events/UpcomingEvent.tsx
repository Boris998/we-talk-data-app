import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import {UpcomingEventData} from "@/typings";
import Speakers from "@/components/Events/Speakers";
import Schedule from "@/components/Events/Schedule";

type Props = {
    upcomingEvent: UpcomingEventData
}

const UpcomingEvent = ({upcomingEvent}: Props) => {
    return (
        <SectionWrapperContainer>
            <Speakers upcomingEvent={upcomingEvent}/>

            <Schedule upcomingEvent={upcomingEvent}/>
        </SectionWrapperContainer>
    );
}


export default UpcomingEvent;

