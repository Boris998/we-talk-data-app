import {ReactNode} from "react";

interface Image {
    _type: 'image',
    asset: {
        _ref: string;
        _type: 'reference';
    }
}

interface Picture extends Image{
    title: string,
    image: Image
}

interface SanityBody {
    _createdAt: string,
    _id: string,
    _rev: string,
    _updatedAt: string,
}

export interface Bars extends SanityBody {
    _type: 'Bars',
    title: string
}

export interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export interface Event extends SanityBody {
    category: string;
    name: string;
    year: number
}

export interface Social extends SanityBody {
    _type: "social",
    title: string,
    url: string,
}

export interface AboutData extends SanityBody {
    _type: "about",
    title: string,
    image: Image,
    description: string
}

export interface HomePageGallery extends SanityBody {
    _type: "gallery",
    title: string,
    description: string,
    sliderImages: Picture[]
}

export interface SpeakerData extends SanityBody {
    _type: "speaker",
    name: string,
    jobTitle: string,
    bio: string,
    image: Image,
    presentationTitle: string,
    description?: string,
    additionalInfo?: string,
}

export interface SupporterData extends SanityBody {
    _type: "supporter",
    title: string,
    url: string,
    image: Image
}

export interface PartnerData extends SanityBody {
    _type: "partner",
    title: string,
    url: string,
    image: Image
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo',
    title: string,
    heroImage: Image,
    logo: Image,
    heading?: string;
    subHeading?: string;
    additionalInfo?: string;
    address?: string;
}