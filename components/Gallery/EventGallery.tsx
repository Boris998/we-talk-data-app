import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { sanityClient, urlFor } from "@/sanity";
import { EventGalleryData, Picture } from "@/typings";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EventGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { isPending, data: eventGalleries } = useQuery({
    queryKey: ["eventGallery"],
    queryFn: async () => {
      const queryEventGallery = groq`*[_type=="eventGallery"]{
        ...,
        sliderImages[]->
    }`;
      return sanityClient.fetch(queryEventGallery);
    },
  });

  if (isPending || !eventGalleries) return null;

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const listGalleries = eventGalleries.map(
    (gallery: EventGalleryData, index: number) => (
      <div
        key={index}
        id={gallery.title}
        className="py-16 border-b-2 border-[#fad700]"
      >
        <h2 className="text-2xl text-[#fad700] pb-8 pt-4 text-center xl:text-left pl-8">
          {gallery.title}
        </h2>

        <div className="flex justify-center items-center flex-wrap">
          {gallery.sliderImages.map((slide: Picture, slideIndex: number) => {
            const backgroundImageStyle =
              gallery.sliderImages?.[currentIndex]?.image &&
              urlFor(gallery.sliderImages?.[currentIndex]?.image)?.url()
                ? {
                    backgroundImage: `url(${urlFor(
                      gallery.sliderImages[currentIndex].image
                    ).url()})`,
                  }
                : {};

            return (
              <div className="px-2 py-1" key={slide._id} id={slide._id}>
                <Dialog>
                  <DialogTrigger onClick={() => goToSlide(slideIndex)}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="h-[225px] w-[300px] relative"
                    >
                      <Image
                        className="rounded-xl object-cover"
                        src={urlFor(slide.image).url()}
                        alt={gallery.title}
                        fill
                      />
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent>
                    <div className="h-[70vw] md:h-[80vh] w-full m-auto relative group">
                      <div
                        className="w-full h-full rounded-2xl bg-center bg-cover duration-150"
                        style={{ ...backgroundImageStyle }}
                      ></div>
                      <button
                        onClick={() =>
                          setCurrentIndex((prevSlide) =>
                            prevSlide === 0
                              ? gallery.sliderImages.length - 1
                              : prevSlide - 1
                          )
                        }
                        className="hidden group-hover:block absolute top-[45%] -translate-x-0 translatey-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white px-4 py-2 hover:bg-gradient-to-br hover:from-[#003767]/90 hover:to-[#ffd700]/30 hover:text-[#ffd700]"
                      >
                        <ChevronLeftIcon className="h-10 w-10" />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentIndex((nextIndex) =>
                            nextIndex === gallery.sliderImages.length - 1
                              ? 0
                              : nextIndex + 1
                          )
                        }
                        className="hidden group-hover:block absolute top-[45%] -translate-x-0 translatey-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white px-4 py-2 hover:bg-gradient-to-br hover:from-[#003767]/90 hover:to-[#ffd700]/30 hover:text-[#ffd700]"
                      >
                        <ChevronRightIcon className="h-10 w-10" />
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            );
          })}
        </div>
      </div>
    )
  );

  const actionButtons = eventGalleries.map(
    (actionButton: EventGalleryData, i: number) => {
      console.log("asd", actionButton.title);
      return (
        <motion.button
          key={i}
          id={actionButton._id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-[#ffd700] text-[0.75rem] sm:text-[1rem] lg:text-[1.15rem] xl:text-[1.25rem] rounded-full py-3 px-8 tracking-wider border-2 border-[#ffd700] my-5 mx-4
            hover:bg-gradient-to-br hover:from-[#003767]/20 hover:to-[#ffd700]/30 hover:text-[#ffd700] hover:shadow-xl hover:shadow-[#ffd700]/30"
        >
          <Link href={`#${actionButton.title}`}>
            View {actionButton.title} Gallery
          </Link>
        </motion.button>
      );
    }
  );

  return (
    <SectionWrapperContainer>
      <div className="flex flex-col xl:flex-row flex-wrap items-center xl:items-start">
        {actionButtons}
      </div>

      <div className="flex justify-center items-center flex-wrap">
        {listGalleries}
      </div>
    </SectionWrapperContainer>
  );
};

export default EventGallery;
