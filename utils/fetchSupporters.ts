import {SupporterData} from "@/typings";

export const fetchSupporters = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSupporters`);

    const data = await res.json();
    const supporters: SupporterData[] = data.supporters;

    // console.log("fetching...", supporters);

    return supporters;
}

