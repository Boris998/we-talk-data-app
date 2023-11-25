import type {NextApiRequest, NextApiResponse} from 'next'
import {groq} from 'next-sanity';
import {sanityClient} from "@/sanity";
import {PastEventsData} from "@/typings";

const query = groq`*[_type=="pastEvents"][0]{
  ...,
  events[]->
}`;

type Data = {
    pastEvents: PastEventsData[]
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const pastEvents: PastEventsData[] = await sanityClient.fetch(query);

    res.status(200).json({ pastEvents });
}
