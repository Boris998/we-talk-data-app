import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import {Button} from "@/components/ui/button";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import React from "react";
import {HomePageGallery} from "@/typings";
import Link from "next/link";
import HomePageImageSlider from "@/components/Gallery/HomePageImageSlider";
import { FONTS, INNER_WRAPPER, PRIMARY_THEME_COLORS } from "@/constants/primary-theme";

type Props = {
    homePageGallery: HomePageGallery
}

const Gallery = ({homePageGallery}: Props) => {
    return <SectionWrapperContainer className='bg-white'>
        <div
            className={`${INNER_WRAPPER.container} h-screen items-center text-center overflow-hidden landscape:min-h-[1000px] portrait:min-h-[800px]`}
        >
            <HeadingWrapper>G a l l e r y</HeadingWrapper>
            <p className={`text-xs sm:text-sm lg:text-base xl:text-lg ${PRIMARY_THEME_COLORS.textWhite} px-[20px] sm:px-0`}>
                {homePageGallery?.description}
            </p>
            <HomePageImageSlider homePageGallery={homePageGallery}/>

            <Button title='asdasd' variant='outline'
                    className={`text-[${PRIMARY_THEME_COLORS.tertiary}] rounded-full py-5 mt-5 sm:mt-0 tracking-wider pb-6 hover:bg-gradient-to-br hover:from-blue-800/20 hover:to-[${PRIMARY_THEME_COLORS.tertiary}]/30 hover:text-[${PRIMARY_THEME_COLORS.tertiary}]`}>
                <Link href='/gallery'>
                    {homePageGallery?.btn}
                </Link>
            </Button>
        </div>
    </SectionWrapperContainer>;
}

export default Gallery;