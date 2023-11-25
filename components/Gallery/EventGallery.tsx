import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import React from "react";

const MOCK_belgradeGallery = [
    {src: '/assets/itQuarks-dark.png', alt: 'https://www.kinandcarta.com/'},
    {src: '/assets/K+C_Logo_Black.png', alt: 'https://www.itquarks.com/'},
];

const MOCK_skopjeGallery = [
    {src: '/assets/h3ro9.jpg', alt: 'https://www.kinandcarta.com/'},
    {src: '/assets/hero.jpg', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero8.jpg', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero8.jpg', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero8.jpg', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero8.jpg', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero8.jpg', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero8.jpg', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero8.jpg', alt: 'https://www.itquarks.com/'},
];

const EventGallery = () => {

    const listSkopjeGallery = MOCK_skopjeGallery.map((image, id)=><img key={id} src={image.src} alt={image.alt}/>);

    return <SectionWrapperContainer>
        <HeadingWrapper>
            <span className='mr-3'>P a s t </span><span>E v e n t s</span>
        </HeadingWrapper>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full px-[8vw] sm:px-[12vw] lg:px-[100px]'>
            {listSkopjeGallery}
        </div>
    </SectionWrapperContainer>;
}

export default EventGallery;