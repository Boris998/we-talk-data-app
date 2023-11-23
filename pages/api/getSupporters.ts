import type {NextApiRequest, NextApiResponse} from 'next'
import {groq} from 'next-sanity';
import {sanityClient} from "@/sanity";
import {SupporterData} from "@/typings";

const query = groq`*[_type=="supporter"]`;

type Data = {
    supporters: SupporterData[]
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const supporters: SupporterData[] = await sanityClient.fetch(query);

    res.status(200).json({supporters});
}
