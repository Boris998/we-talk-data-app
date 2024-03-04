import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import {Button} from "@/components/ui/button";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import React from "react";
import Link from "next/link";
import HomePageImageSlider from "@/components/Gallery/HomePageImageSlider";
import {groq} from "next-sanity";
import {sanityClient} from "@/sanity";
import {useQuery} from "@tanstack/react-query";

const Gallery = () => {
  const { isPending, data: homePageGallery } = useQuery({
    queryKey: ["homePageGallery"],
    queryFn: async () => {
      const queryEventGallery = groq`*[_type=="homePageGallery"][0]{
        ...,
        sliderImages[]->
    }`;
      return sanityClient.fetch(queryEventGallery);
    },
  });

  if (isPending) return null;
  console.log(homePageGallery);

  return (
    <SectionWrapperContainer>
      <div className="inner-wrapper-container h-[46rem] items-center text-center overflow-y-hidden sm:landscape:min-h-[35rem] md:landscape:min-h-[45rem] lg:landscape:min-h-[59rem] portrait:min-h-[45rem]">
        <HeadingWrapper>G a l l e r y</HeadingWrapper>
        <p className="paragraph-1 px-4 sm:px-0">
          {homePageGallery?.description}
        </p>
        <HomePageImageSlider homePageGallery={homePageGallery} />

        {/* refactor all buttons */}
        <Button
          title="asdasd"
          variant="outline"
          className="text-[#ffd700] rounded-full py-5 mt-5 sm:mt-0 tracking-wider pb-6 hover:bg-gradient-to-br hover:from-blue-800/20 hover:to-[#ffd700]/30 hover:text-[#ffd700]"
        >
          <Link href="/gallery">{homePageGallery?.btn}</Link>
        </Button>
      </div>
    </SectionWrapperContainer>
  );
};

export default Gallery;
