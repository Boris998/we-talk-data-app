import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import React from "react";
import EventGallery from "@/components/Gallery/EventGallery";


const GalleryPage = () => {

    return <SectionWrapperContainer>
        <HeadingWrapper>
            <span className='mr-3'>P a s t </span><span>E v e n t s</span>
        </HeadingWrapper>

        <EventGallery/>
    </SectionWrapperContainer>;
}

export default GalleryPage;