import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";

const About = () => {
    return (
        <SectionWrapperContainer>
            <div
                className='relative flex flex-col max-h-[1500px] items-center text-center overflow-x-hidden py-[75px]
            px-0 sm:px-[50px] md:text-left max-w-full justify-center mx-auto min-h-[500px] overflow-y space-y-[75px]'>
                <h3 className='relative uppercase tracking-[20px] text-gray-400
                text-2xl shadow-lg p-[30px] rounded-full'>
                    <span className='text-[#ffd700]'>[</span>
                    About
                    <span className='text-[#ffd700]'>]</span>
                </h3>

                <div className='flex flex-col md:flex-row relative my-auto
                items-center justify-center space-y-[50px] px-[20px] py-1 md:space-x-[50px] md:space-y-0'>
                    <img className='w-[400px] h-[300px] rounded-xl object-cover mx-auto
                md:rounded-xl md:w-[320px] md:h-[320px] lg:w-[500px] lg:h-[500px] 2xl:w-[650px] 2xl:h-[500px]'
                         src='/assets/hero.jpg'
                         alt='asd'
                    />
                    <p className='text-[10px] sm:text-[14px] lg:text-xl 2xl:text-left text-white'>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable.
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                        Internet tend to repeat predefined chunks as necessary, making this the first true generator
                        on the Internet.
                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                        structures, to generate Lorem Ipsum which looks reasonable.
                        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                        non-characteristic words etc.
                    </p>
                </div>
            </div>
        </SectionWrapperContainer>
    );
}

export default About;