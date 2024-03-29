import {createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2023-05-03",
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_TOKEN
}

export const sanityClient = createClient(config);

export const urlFor = (source:any)=>
    createImageUrlBuilder(config).image(source);
