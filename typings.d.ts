import {ReactNode} from "react";

interface SanityBody {
    _createdAt: string,
    _id: string,
    _rev: string,
    _updatedAt: string,
}

interface Image extends SanityBody {
    _type: 'image',
    asset: {
        _ref: string;
        _type: 'reference';
    }
}

interface Picture extends SanityBody{
    _type: 'picture'
    title: string,
    image: Image
}

export interface Bars extends SanityBody {
    _type: 'Bars',
    title: string
}

export interface ContainerProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export interface Event extends SanityBody {
    featureFlag: boolean
    title: string;
    city: string;
    year: string;
    description: number;
    image: Image;
}

export interface Social extends SanityBody {
    _type: "social",
    title: string,
    url: string,
}

export interface AboutData extends SanityBody {
    _type: "about",
    title: string,
    image: string,
    description: string
}

export interface HomePageGallery extends SanityBody {
    _type: "homePageGallery",
    title: string,
    description: string,
    sliderImages: Picture[]
    featureFlag: boolean
    btn: string
}

export interface EventGalleryData extends SanityBody {
    _type: "eventGallery",
    title: string,
    sliderImages: Picture[]
    featureFlag: boolean
    _ref: boolean
}

export interface SpeakerData extends SanityBody {
    _type: "speaker",
    speakerName: string,
    jobTitle: string,
    bio: string,
    linkedIn: string,
    image: Image,
    presentationTitle: string,
    description: string,
    presentationStartTime: string;
    additionalInfo: string,
}

export interface SupporterData extends SanityBody {
    _type: "supporter",
    title: string,
    url: string,
    image: Image
}

export interface PartnerData extends SanityBody {
    _type: "partner",
    featureFlag: boolean,
    title: string,
    url: string,
    image: Image
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo',
    title: string,
    heroImage: Image,
    logo: Image,
    heading: string;
    subHeading: string;
    heroBtn: string;
    additionalInfo: string;
    address: string;
}

export interface PastEventsData extends SanityBody {
    _type: 'pastEvents',
    title: string,
    featureFlag: boolean,
    description: string,
    image: string,
    events: Event[]
}

export interface UpcomingEventData extends SanityBody {
    _type: 'upcomingEvent',
    speakersSectionTitle: string,
    scheduleSectionTitle: string,
    featureFlag: boolean,
    date: date,
    speaker: SpeakerData[]
}

export interface RetisterFormInput {
    _id: string;
    name: string;
    email: string;
    experience: string;
    comment?: string;
}