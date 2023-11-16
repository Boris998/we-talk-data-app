import ImageSlider from "@/components/Gallery/ImageSlider";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import {Button} from "@/components/ui/button";


const Gallery = () => {
    return <SectionWrapperContainer className='bg-white'>
        <div
            className='relative flex flex-col items-center text-center
            space-y-[50px] sm:px-[50px] overflow-hidden mx-auto py-[75px]'
        >
            <h3 className='relative uppercase tracking-[20px] text-gray-400 text-2xl shadow-lg p-[30px] rounded-full'>
                <span className='text-[#ffd700]'>[</span>
                Gallery
                <span className='text-[#ffd700]'>]</span>
            </h3>
            <p className='text-[10px] sm:text-[14px] lg:text-xl text-white px-[20px] sm:px-0'>
                Embark on a journey through the diverse visages of our AI conference gallery,
                where the faces of innovation converge, unveiling transformative breakthroughs
                and shaping the future of artificial intelligence with intellect and inspiration.
            </p>
            <ImageSlider/>

            <Button className='bg-[#ffd700]/50 hover:bg-[#ffd700]/70 text-[#001330] hover:text-[#003767]
            px-[35px] py-[20px] rounded-full hover:shadow-xl text-[16px]'>
                SEE FULL GALLERY
            </Button>
        </div>
    </SectionWrapperContainer>;
}

export default Gallery;