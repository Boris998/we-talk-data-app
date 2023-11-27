import { SpeakerData } from "@/typings";

export const fetchSpeakers = async (): Promise<SpeakerData[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSpeakers`);

        const data = await res.json();
        return data.speakers;
    } catch (err) {
        if (err instanceof Error) {
            console.error('error fetchSpeakers', err.message);
        } else {
            console.error('Non-Error type error occurred:', err);
        }
        throw err;
    }
};
