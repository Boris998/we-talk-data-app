import {ChevronLeftIcon, ChevronRightIcon, DotIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import {useState} from "react";

const slides = [
    {
        url: 'https://img.freepik.com/free-photo/3d-digital-background-with-connecting-lines-dots_1048-11639.jpg?w=1480&t=st=1699960616~exp=1699961216~hmac=8e909275faf18c90e87c8d8d2f9bd4e582cb6b9a4c914f54caafa24ad6517f63'
    },
    {
        url: 'https://img.freepik.com/free-photo/3d-render-modern-background-with-flowing-cyber-particles_1048-13851.jpg?w=1380&t=st=1699960631~exp=1699961231~hmac=bd7fba92d5b5389db35c3e4ba7cc8cfdade2776f6c90dbe45ff1689fbb08e7ef'
    },
    {
        url: 'https://img.freepik.com/free-photo/3d-render-modern-particle-flow-background-with-cyber-dots_1048-15365.jpg?w=1380&t=st=1699960651~exp=1699961251~hmac=f00d1c2f751368a3dd0194304522c057b1f33ae06208d57407afdf5e5459b17f'
    },
    {
        url: 'https://img.freepik.com/free-photo/3d-render-modern-technology-background-with-flowing-lines-floating-particles-design_1048-13620.jpg?w=1380&t=st=1699960668~exp=1699961268~hmac=ef88554b18d01f01a8fc61ed87b8c8ce696f12321513ee929fb557922cbc56e3'
    },
];


const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(3);

    const prevSlide = () => {
        const newIndex = currentIndex === 0 && slides.length - 1 || currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const newIndex = currentIndex === slides.length - 1 && 0 || currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    const slidesList = slides.map((slide, slideIndex) =>
        <div key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
             className='text-2xl cursor-pointer'
        >
            <DotIcon key={slideIndex}/>
        </div>
    );

    return <div className='max-w-[1400px] h-[800px] w-full m-auto py-4 px-4 relative group'>
        <div
            className='w-full h-full rounded-2xl bg-center bg-cover duration-1000'
            style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
        </div>

        {/*left arrow*/}
        <Button onClick={prevSlide}
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translatey-y-[-50%]
                left-5 text-2xl rounded-full bg-black/20 text-white pb-12'
        >
            <ChevronLeftIcon className='h-10 w-10'/>
        </Button>

        {/*right arrow*/}
        <Button onClick={nextSlide}
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translatey-y-[-50%]
                right-5 text-2xl rounded-full bg-black/20 text-white pb-12'
        >
            <ChevronRightIcon className='h-10 w-10'/>
        </Button>
        <div className='flex justify-center py-2'>
            {slidesList}
        </div>
    </div>

}

export default ImageSlider;