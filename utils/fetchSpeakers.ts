import {SpeakerData} from "@/typings";

export const fetchSpeakers = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSpeakers`);

    const data = await res.json();
    const speakers: SpeakerData[] = data.speakers;

    // console.log("fetching...", speakers);

    return speakers;
}

