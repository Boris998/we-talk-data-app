import type {NextApiRequest, NextApiResponse} from 'next'
import {groq} from 'next-sanity';
import {sanityClient} from "@/sanity";
import {PartnerData} from "@/typings";

const query = groq`*[_type=="partner"]`;

type Data = {
    partners: PartnerData[]
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const partners: PartnerData[] = await sanityClient.fetch(query);

    res.status(200).json({partners});
}
