import type {NextApiRequest, NextApiResponse} from 'next'
import {groq} from 'next-sanity';
import {sanityClient} from "@/sanity";
import {HomePageGallery} from "@/typings";

const query = groq`*[_type=="homePageGallery"][0]{
  ...,
  sliderImages[]->
}`;

type Data = {
    homePageGallery: HomePageGallery[]
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const homePageGallery: HomePageGallery[] = await sanityClient.fetch(query);

    res.status(200).json({ homePageGallery });
}
