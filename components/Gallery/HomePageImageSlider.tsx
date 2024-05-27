import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { HomePageGallery, Picture } from "@/typings";
import { urlFor } from "@/sanity";
import { motion } from "framer-motion";

type Props = {
  homePageGallery: HomePageGallery;
};

const HomePageImageSlider = ({ homePageGallery }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex =
      (currentIndex === 0 && homePageGallery.sliderImages.length - 1) ||
      currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    // const newIndex = (currentIndex === homePageGallery.sliderImages.length - 1) && 0 || currentIndex + 1;
    const newIndex =
      currentIndex === homePageGallery.sliderImages.length - 1
        ? 0
        : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const sliderImagesList = homePageGallery.sliderImages.map(
    (slide: Picture, slideIndex: number) => {
      return (
        <div
          key={slide?._id}
          onClick={() => goToSlide(slideIndex)}
          className="text-2xl cursor-pointer"
        >
          <DotIcon key={slideIndex} />
        </div>
      );
    }
  );

  const urlImage = urlFor(
    homePageGallery?.sliderImages[currentIndex].image
  ).url();

  const backgroundImageStyle = urlImage
    ? { backgroundImage: `url(${urlImage})` }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-[1400px] w-full m-auto py-4 px-4 relative group min-h-[25rem] lg:min-h-[35rem]"
    >
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ ...backgroundImageStyle }}
      ></div>

      {/*left arrow*/}
      <button
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[45%] -translate-x-0 translatey-y-[-50%]
                left-5 text-2xl rounded-full bg-black/20 text-white px-4 py-2
                hover:bg-gradient-to-br from-[#003767]/20 to-[#ffd700]/30 hover:text-[#ffd700]"
      >
        <ChevronLeftIcon className="h-10 w-10" />
      </button>

      {/*right arrow*/}
      <button
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[45%] -translate-x-0 translatey-y-[-50%]
                right-5 text-2xl rounded-full bg-black/20 text-white px-4 py-2
                hover:bg-gradient-to-br from-[#003767]/20 to-[#ffd700]/30 hover:text-[#ffd700]"
      >
        <ChevronRightIcon className="h-10 w-10" />
      </button>
      <div className="flex justify-center py-2">{sliderImagesList}</div>
    </motion.div>
  );
};

export default HomePageImageSlider;
