import type {NextApiRequest, NextApiResponse} from 'next'
import {groq} from 'next-sanity';
import {sanityClient} from "@/sanity";
import {UpcomingEventData} from "@/typings";

const query = groq`*[_type=="upcomingEvent"][0]{
  ...,
  speaker[]->
}`;

type Data = {
    upcomingEvent: UpcomingEventData
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const upcomingEvent: UpcomingEventData = await sanityClient.fetch(query);

    res.status(200).json({ upcomingEvent });
}
