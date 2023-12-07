import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import React from "react";
import {groq} from "next-sanity";
import {sanityClient} from "@/sanity";
import { GetStaticProps } from "next";
import EventGallery from "@/components/Gallery/EventGallery";
import {EventGalleryData, HomePageGallery} from "@/typings";

type Props = {
    eventGallery: EventGalleryData
}

const GalleryPage = ({eventGallery}:Props) => {

    return <SectionWrapperContainer>
        <div className='py-24 overflow-hidden'>
            <HeadingWrapper>
                <span className='mr-3'>E v e n t s </span><span>G a l l e r y</span>
            </HeadingWrapper>

            <EventGallery eventGallery={eventGallery}/>
        </div>
    </SectionWrapperContainer>;
}

export default GalleryPage;

export const getStaticProps: GetStaticProps<Props> = async () => {

    const queryEventGallery = groq`*[_type=="eventGallery"][0]{
        ...,
        sliderImages[]->
    }`;
    const eventGallery: EventGalleryData = await sanityClient.fetch(queryEventGallery);


    return {
        props: {
            eventGallery,
        }
    }
}