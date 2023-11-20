import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";

const About = () => {
    return (
        <SectionWrapperContainer>
            <div
                className='relative flex flex-col max-h-[2100px] items-center text-center overflow-x-hidden
                px-0 md:text-left max-w-full justify-center mx-auto min-h-[500px] overflow-y
                sm:px-[50px] sm:space-y-[4vw] xl:space-y-[2vw] py-[9vw] sm:py-[5vw] 2xl:py-[4vw]'>
                <HeadingWrapper>
                    A b o u t
                </HeadingWrapper>
                <div className='flex flex-col md:flex-row relative items-center
                justify-center space-y-[30px] px-[20px] md:space-x-[50px] md:space-y-0'>
                    <img className='w-[400px] h-[300px] rounded-xl object-cover mx-auto
                md:rounded-xl md:w-[320px] md:h-[320px] lg:w-[500px] lg:h-[500px] 2xl:w-[650px] 2xl:h-[500px]'
                         src='/assets/hero4.webp'
                         alt='asd'
                    />
                    <p className='text-[10px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-xl 2xl:text-left text-white'>
                        WeTalkDATA & AI is a community-driven event created by and for data and AI
                        enthusiasts. Our mission is to provide a series of events where passionate individuals
                        can come together to explore the dynamic world of data science, analytics and
                        technology.
                        At WeTalkDATA & AI, we're all about the power of knowledge-sharing and staying on the
                        cutting edge of data trends and innovations. We curate a program featuring in-depth
                        talks and discussions led by seasoned professionals from our thriving local data
                        community.
                        Our core value is to foster an inclusive and welcoming environment, free from the
                        pressures of recruitment, marketing or sales pitches.
                        Instead, WeTalkDATA & AI is all about building connections and making friends within
                        the data community.
                        Join us because everyone loves being around those who share their data-driven dreams.
                        Together, we'll explore the limitless possibilities of data in a warm and supportive
                        community.
                    </p>
                </div>
            </div>
        </SectionWrapperContainer>
    );
}

export default About;