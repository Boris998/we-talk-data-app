import React, {FC} from "react";
import {ContainerProps} from "@/typings";

const HeadingWrapper: FC<ContainerProps> = ({children}) => {
    return <h3 className='relative uppercase tracking-[3px] sm:tracking-[7px] text-gray-400 text-xs sm:text-lg md:text-2xl p-[30px] rounded-full'>
        <span className='text-[#ffd700]'>[</span>
        {children}
        <span className='text-[#ffd700]'>]</span>
    </h3>;
}

export default HeadingWrapper;