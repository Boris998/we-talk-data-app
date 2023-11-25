import type {NextApiRequest, NextApiResponse} from 'next'
import {groq} from 'next-sanity';
import {sanityClient} from "@/sanity";
import {SpeakerData} from "@/typings";

const query = groq`*[_type=="speaker"]`;

type Data = {
    speakers: SpeakerData[]
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const speakers: SpeakerData[] = await sanityClient.fetch(query);

    console.log({speakers});
    res.status(200).json({speakers});
}
