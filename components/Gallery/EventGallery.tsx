import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import React, {useState} from "react";
import Image from "next/image";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {Picture} from "@/typings";
import {sanityClient, urlFor} from "@/sanity";
import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {groq} from "next-sanity";
import {useQuery} from "@tanstack/react-query";
import {motion} from "framer-motion";

const EventGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const {isPending, data: eventGallery} = useQuery({
        queryKey: ["eventGallery"],
        queryFn: async () => {
            const queryEventGallery = groq`*[_type=="eventGallery"][0]{
        ...,
        sliderImages[]->
    }`;
            return sanityClient.fetch(queryEventGallery);
        },
    });

    if (isPending) return null;
    console.log(eventGallery);


    const prevSlide = () => {
        const newIndex =
            (currentIndex === 0 && eventGallery.sliderImages.length - 1) ||
            currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex =
            currentIndex === eventGallery.sliderImages.length - 1
                ? 0
                : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    const urlImage = urlFor(eventGallery?.sliderImages[currentIndex].image).url();
    const backgroundImageStyle = urlImage
        ? {backgroundImage: `url(${urlImage})`}
        : {};

    const listSkopjeGallery = eventGallery.sliderImages.map(
        (slide: Picture, slideIndex: number) => {
            return (
                <div className="px-2 py-1" key={slide?._id}>
                    <Dialog>
                        <DialogTrigger onClick={() => goToSlide(slideIndex)}>
                            <motion.div
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="h-[225px] w-[300px] relative">
                                <Image
                                    className="rounded-xl object-cover"
                                    src={urlFor(slide.image).url()}
                                    alt={eventGallery._id}
                                    fill
                                />
                            </motion.div>
                        </DialogTrigger>
                        <DialogContent>
                            <div className="h-[70vw] md:h-[80vh] w-full m-auto relative group">
                                <div
                                    className="w-full h-full rounded-2xl bg-center bg-cover duration-150"
                                    style={{...backgroundImageStyle}}
                                ></div>

                                <button
                                    onClick={prevSlide}
                                    className='hidden group-hover:block absolute top-[45%] -translate-x-0 translatey-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white px-4 py-2 hover:bg-gradient-to-br hover:from-[#003767]/90 hover:to-[#ffd700]/30 hover:text-[#ffd700]'
                                >
                                    <ChevronLeftIcon className="h-10 w-10"/>
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className='hidden group-hover:block absolute top-[45%] -translate-x-0 translatey-y-[-50%]
                  right-5 text-2xl rounded-full bg-black/20 text-white px-4 py-2
                  hover:bg-gradient-to-br hover:from-[#003767]/90 hover:to-[#ffd700]/30 hover:text-[#ffd700]'
                                >
                                    <ChevronRightIcon className="h-10 w-10"/>
                                </button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            );
        }
    );

    return (
        <SectionWrapperContainer>
            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                title={eventGallery?.title}
                className='text-[#ffd700] text-[0.75rem] sm:text-[1rem] lg:text-[1.15rem] xl:text-[1.25rem] rounded-full py-3 px-8 tracking-wider border-2 border-[#ffd700] my-5
        hover:bg-gradient-to-br hover:from-[#003767]/20 hover:to-[#ffd700]/30 hover:text-[#ffd700] hover:shadow-xl hover:shadow-[#ffd700]/30'
            >
                <Link href="/gallery">{eventGallery?.title}</Link>
            </motion.button>
            <div className="flex justify-center items-center flex-wrap">
                {listSkopjeGallery}
            </div>
        </SectionWrapperContainer>
    );
};

export default EventGallery;
