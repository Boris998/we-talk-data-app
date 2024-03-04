import React, {FC} from "react";
import {ContainerProps} from "@/typings";

const HeadingWrapper: FC<ContainerProps> = ({children}) => {
    return <figcaption className='relative overflow-hidden uppercase tracking-[3px] sm:tracking-[7px] text-gray-400 text- sm:text-lg md:text-2xl px-6 pt-8 pb-6 rounded-full justify-center'>
        <span className='text-[#ffd700]'>[</span>
        {children}
        <span className='text-[#ffd700]'>]</span>
    </figcaption>;
}

export default HeadingWrapper;