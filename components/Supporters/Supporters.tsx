import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";

const Supporters = () => {
    return (
        <SectionWrapperContainer>
            <div
                className='relative flex flex-col max-h-[1500px] items-center text-center overflow-x-hidden py-[75px]
            px-0 sm:px-[50px] md:text-left max-w-full justify-center mx-auto overflow-y space-y-[75px]'>
                <h3 className='relative uppercase tracking-[20px] text-gray-400
                text-2xl shadow-lg p-[30px] rounded-full'>
                    <span className='text-[#ffd700]'>[</span>
                    Supporters
                    <span className='text-[#ffd700]'>]</span>
                </h3>
            </div>
        </SectionWrapperContainer>
    );
}

export default Supporters;