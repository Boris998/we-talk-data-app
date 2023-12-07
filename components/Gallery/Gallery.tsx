import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import {Button} from "@/components/ui/button";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import React from "react";
import {HomePageGallery} from "@/typings";
import Link from "next/link";
import HomePageImageSlider from "@/components/Gallery/HomePageImageSlider";

type Props = {
    homePageGallery: HomePageGallery
}

const Gallery = ({homePageGallery}: Props) => {
    return <SectionWrapperContainer className='bg-white'>
        <div
            className='relative flex flex-col h-screen items-center text-center overflow-hidden min-h-[900px]
            sm:px-[50px] sm:space-y-[4vw] xl:space-y-[2vw] py-[8vw] sm:py-[5vw] 2xl:py-[4vw]'
        >
            <HeadingWrapper>G a l l e r y</HeadingWrapper>
            <p className='text-[10px] sm:text-[14px] lg:text-xl text-white px-[20px] sm:px-0'>
                {homePageGallery?.description}
            </p>
            <HomePageImageSlider homePageGallery={homePageGallery}/>

            <Button title='asdasd' variant='outline'
                    className='text-[#ffd700] rounded-full py-5 mb-10 tracking-wider
                    hover:bg-gradient-to-br hover:from-blue-800/20 hover:to-[#ffd700]/30 hover:text-[#ffd700]'>
                <Link href='/gallery'>
                    {homePageGallery?.btn}
                </Link>
            </Button>
        </div>
    </SectionWrapperContainer>;
}

export default Gallery;