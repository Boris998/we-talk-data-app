import type {NextApiRequest, NextApiResponse} from 'next'
import {groq} from 'next-sanity';
import {sanityClient} from "@/sanity";
import {HomePageGallery} from "@/typings";

const query = groq`*[_type=="homePageGallery"]{
  ...,
  sliderImages[]->
}`;

type Data = {
    gallery: HomePageGallery[]
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const gallery: HomePageGallery[] = await sanityClient.fetch(query);

    res.status(200).json({ gallery });
}
