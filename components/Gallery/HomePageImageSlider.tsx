import {ChevronLeftIcon, ChevronRightIcon, DotIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {HomePageGallery} from "@/typings";
import {urlFor} from "@/sanity";

type Props = {
    homePageGallery: HomePageGallery
}

const HomePageImageSlider = ({homePageGallery}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex = currentIndex === 0 && homePageGallery.sliderImages.length - 1 || currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        // const newIndex = (currentIndex === homePageGallery.sliderImages.length - 1) && 0 || currentIndex + 1;
        const newIndex = currentIndex === homePageGallery.sliderImages.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    const sliderImagesList = homePageGallery.sliderImages.map((slide, slideIndex) => {
            return <div
                key={slide?._id}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
            >
                <DotIcon key={slideIndex}/>
            </div>
        }
    );

    const urlImage = urlFor(homePageGallery?.sliderImages[currentIndex].image).url();

    const backgroundImageStyle = urlImage ? {backgroundImage: `url(${urlImage})`} : {};

    return <div className='max-w-[1400px] h-[800px] w-full m-auto py-4 px-4 relative group min-h-[300px] sm:min-h-[500px]'>
        <div
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            style={{...backgroundImageStyle}}>
        </div>

        {/*left arrow*/}
        <Button onClick={prevSlide}
                className='hidden group-hover:block absolute top-[45%] -translate-x-0 translatey-y-[-50%]
                left-5 text-2xl rounded-full bg-black/20 text-white pb-12 hover:bg-[#ffd700]/40'
        >
            <ChevronLeftIcon className='h-10 w-10'/>
        </Button>

        {/*right arrow*/}
        <Button onClick={nextSlide}
                className='hidden group-hover:block absolute top-[45%] -translate-x-0 translatey-y-[-50%]
                right-5 text-2xl rounded-full bg-black/20 text-white pb-12 hover:bg-[#ffd700]/40'
        >
            <ChevronRightIcon className='h-10 w-10'/>
        </Button>
        <div className='flex justify-center py-2'>
            {sliderImagesList}
        </div>
    </div>

}

export default HomePageImageSlider;