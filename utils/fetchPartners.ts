import {PartnerData} from "@/typings";

export const fetchPartners = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPartners`);

    const data = await res.json();
    const partners: PartnerData[] = data.partners;

    // console.log("fetching...", partners);

    return partners;
}

