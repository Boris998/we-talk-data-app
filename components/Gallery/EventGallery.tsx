import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import React from "react";
import Image from "next/image";

const MOCK_skopjeGallery = [
    {src: '/assets/hero.png', alt: 'https://www.kinandcarta.com/'},
    {src: '/assets/hero.png', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero.png', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero.png', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero.png', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero.png', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero.png', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero.png', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero.png', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero.png', alt: 'https://www.itquarks.com/'},
    {src: '/assets/hero.png', alt: 'https://www.itquarks.com/'},
];

const EventGallery = () => {

    const listSkopjeGallery = MOCK_skopjeGallery
        .map((image, id) =>
            (
                <Image className='rounded-xl' key={id} src={image.src} alt={image.alt} height={1500} width={1500}/>
            )
        );

    return <SectionWrapperContainer>
        <div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full px-[8vw] sm:px-[12vw] lg:px-[100px]'>
            {listSkopjeGallery}
        </div>
    </SectionWrapperContainer>;
}

export default EventGallery;