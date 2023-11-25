import {UpcomingEventData} from "@/typings";

export const fetchUpcomingEvent = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getUpcomingEvent`);
    const data = await res.json();

    const upcomingEvent: UpcomingEventData = data.upcomingEvent;

    // console.log("fetching...", upcomingEvent);

    return upcomingEvent;
}

