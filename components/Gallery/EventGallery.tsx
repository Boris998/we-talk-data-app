import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import React, {useState} from "react";
import Image from "next/image";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {EventGalleryData} from "@/typings";
import {urlFor} from "@/sanity";
import {Button} from "@/components/ui/button";
import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";


type Props = {
    eventGallery: EventGalleryData
}

const EventGallery = ({eventGallery}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex = currentIndex === 0 && eventGallery.sliderImages.length - 1 || currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const newIndex = currentIndex === eventGallery.sliderImages.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    const urlImage = urlFor(eventGallery?.sliderImages[currentIndex].image).url();
    const backgroundImageStyle = urlImage ? {backgroundImage: `url(${urlImage})`} : {};


    const listSkopjeGallery = eventGallery.sliderImages
        .map((slide, slideIndex) => {

                return (<div className='px-2 py-1'
                             key={slide?._id}
                    >
                        <Dialog
                        >
                            <DialogTrigger onClick={() => goToSlide(slideIndex)}>
                                <Image
                                    className='rounded-xl h-[225px] w-full'
                                    src={urlFor(eventGallery.sliderImages[slideIndex].image).url()}
                                    alt={eventGallery._id}
                                    height={400}
                                    width={400}
                                />
                            </DialogTrigger>
                            <DialogContent>
                                <div
                                    className='h-[70vw] md:h-[80vh]  w-full m-auto relative group'>
                                    <div
                                        className='w-full h-full rounded-2xl bg-center bg-cover duration-150'
                                        style={{...backgroundImageStyle}}>
                                    </div>

                                    <Button onClick={prevSlide}
                                            className='hidden group-hover:block absolute top-[45%] -translate-x-0 translatey-y-[-50%]
                    left-5 text-2xl rounded-full bg-black/20 text-white pb-12 hover:bg-[#ffd700]/40'
                                    >
                                        <ChevronLeftIcon className='h-10 w-10'/>
                                    </Button>

                                    <Button onClick={nextSlide}
                                            className='hidden group-hover:block absolute top-[45%] -translate-x-0 translatey-y-[-50%]
                    right-5 text-2xl rounded-full bg-black/20 text-white pb-12 hover:bg-[#ffd700]/40'
                                    >
                                        <ChevronRightIcon className='h-10 w-10'/>
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                )
            }
        );


    return <SectionWrapperContainer>
        <Button title='asdasd' variant='outline' className='text-yellow-300 rounded-2xl py-5 mb-10 hover:text-white'>
            {eventGallery.title}
        </Button>
        <div className='flex justify-center items-center flex-wrap'>
            {listSkopjeGallery}
        </div>
    </SectionWrapperContainer>;
}

export default EventGallery;
