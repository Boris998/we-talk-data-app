import type {NextApiRequest, NextApiResponse} from 'next'
import {groq} from 'next-sanity';
import {sanityClient} from "@/sanity";
import {AboutData} from "@/typings";

const query = groq`*[_type=="about"]`;

type Data = {
    about: AboutData[]
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const about: AboutData[] = await sanityClient.fetch(query);

    res.status(200).json({about});
}
