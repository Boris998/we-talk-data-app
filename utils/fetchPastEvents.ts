import {PastEventsData} from "@/typings";

export const fetchPastEvents = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPastEvents`);
    const data = await res.json();

    const pastEvents: PastEventsData = data.pastEvents;

    // console.log("fetching...", pastEvents);

    return pastEvents;
}

