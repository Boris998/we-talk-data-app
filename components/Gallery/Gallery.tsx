import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import React from "react";
import Link from "next/link";
import HomePageImageSlider from "@/components/Gallery/HomePageImageSlider";
import {groq} from "next-sanity";
import {sanityClient} from "@/sanity";
import {useQuery} from "@tanstack/react-query";
import {motion} from "framer-motion";

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

  return (
    <SectionWrapperContainer>
      <div className="inner-wrapper-container h-[47rem] items-center text-center overflow-hidden sm:landscape:min-h-[35rem] md:landscape:min-h-[45rem] lg:landscape:min-h-[59rem] portrait:min-h-[45rem]">
        <HeadingWrapper>G a l l e r y</HeadingWrapper>
        <motion.p
          initial={{
            y: 25,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="paragraph-1 px-4 sm:px-0"
        >
          {homePageGallery?.description}
        </motion.p>
        <HomePageImageSlider homePageGallery={homePageGallery} />

        {/* refactor all buttons */}
        <button
          title="asdasd"
          className="text-[#ffd700] border-2 border-[#ffd700] px-8 py-3 rounded-full sm:mt-0 tracking-wider hover:bg-gradient-to-br hover:from-blue-800/20 hover:to-[#ffd700]/30 hover:text-[#ffd700]"
        >
          <Link href="/gallery">{homePageGallery?.btn}</Link>
        </button>
      </div>
    </SectionWrapperContainer>
  );
};

export default Gallery;
