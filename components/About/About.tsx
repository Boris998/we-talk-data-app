import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import {AboutData} from "@/typings";
import {urlFor} from "@/sanity";

type Props = {
    about: AboutData
}

const About = ({about}:Props) => {
    return (
        <SectionWrapperContainer>
            <div
                className='relative flex flex-col max-h-[2100px] items-center text-center overflow-x-hidden
                px-0 md:text-left max-w-full justify-center mx-auto min-h-[500px] overflow-y
                sm:px-[50px] sm:space-y-[4vw] xl:space-y-[2vw] py-[9vw] sm:py-[5vw] 2xl:py-[4vw]'>
                <HeadingWrapper>
                    {about.title}
                </HeadingWrapper>
                <div className='flex flex-col md:flex-row relative items-center
                justify-center space-y-[30px] px-[20px] md:space-x-[50px] md:space-y-0'>
                    <img className='w-[400px] h-[300px] rounded-xl object-cover mx-auto
                md:rounded-xl md:w-[320px] md:h-[320px] lg:w-[500px] lg:h-[500px] 2xl:w-[650px] 2xl:h-[500px]'
                         src={urlFor(about.image).url()}
                         alt={about?.title}
                    />
                    <p className='text-[10px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-xl 2xl:text-left text-white'>
                        {about?.description}
                    </p>
                </div>
            </div>
        </SectionWrapperContainer>
    );
}

export default About;