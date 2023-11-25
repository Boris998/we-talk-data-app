import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import {SpeakerData, UpcomingEventData} from "@/typings";
import Speakers from "@/components/Events/Speakers";
import Schedule from "@/components/Events/Schedule";

type Props = {
    upcomingEvent: UpcomingEventData
}

const UpcomingEvent = ({upcomingEvent}: Props) => {
    return (
        <SectionWrapperContainer>
            {/*<Speakers />*/}

            <Schedule upcomingEvent={upcomingEvent}/>
        </SectionWrapperContainer>
    );
}


export default UpcomingEvent;

