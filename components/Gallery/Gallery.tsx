import ImageSlider from "@/components/Gallery/ImageSlider";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import {Button} from "@/components/ui/button";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import React from "react";
import {HomePageGallery} from "@/typings";
import Link from "next/link";

type Props = {
    homePageGallery: HomePageGallery
}

const Gallery = ({homePageGallery}: Props) => {
    return <SectionWrapperContainer className='bg-white'>
        <div
            className='relative flex flex-col h-screen items-center text-center overflow-hidden sm:min-h-[900px] min-h-[500px]
            sm:px-[50px] sm:space-y-[4vw] xl:space-y-[2vw] py-[8vw] sm:py-[5vw] 2xl:py-[4vw]'
        >
            <HeadingWrapper>G a l l e r y</HeadingWrapper>
            <p className='text-[10px] sm:text-[14px] lg:text-xl text-white px-[20px] sm:px-0'>
                {homePageGallery?.description}
            </p>
            <ImageSlider homePageGallery={homePageGallery}/>

            <Button className='bg-[#ffd700]/50 hover:bg-[#ffd700]/70 text-[#001330] hover:text-[#003767]
            px-[35px] py-[20px] rounded-full hover:shadow-xl text-[16px] my-[30px]'>
                <Link href='/gallery'>
                    {homePageGallery?.btn}
                </Link>
            </Button>
        </div>
    </SectionWrapperContainer>;
}

export default Gallery;