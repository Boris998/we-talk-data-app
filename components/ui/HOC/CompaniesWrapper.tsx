import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import React, {FC} from "react";
import {ContainerProps} from "@/typings";

const CompaniesWrapper: FC<ContainerProps> = ({children}) =>{
    return (
        <SectionWrapperContainer>
            <div
                className='relative flex flex-col max-h-[1500px] items-center text-center overflow-x-hidden
                sm:px-[50px] sm:space-y-[4vw] xl:space-y-[2vw] py-[8vw] sm:py-[5vw] 2xl:py-[4vw]'>
                    {children}
            </div>
        </SectionWrapperContainer>
    );
}

export default CompaniesWrapper;