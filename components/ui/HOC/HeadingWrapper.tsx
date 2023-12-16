import React, {FC} from "react";
import {ContainerProps} from "@/typings";
import { PRIMARY_THEME_COLORS } from "@/constants/primary-theme";

const HeadingWrapper: FC<ContainerProps> = ({children}) => {
    return <h3 className='relative uppercase tracking-[3px] sm:tracking-[7px] text-gray-400 text- sm:text-lg md:text-2xl p-[30px] rounded-full justify-center'>
        <span className={`text-[${PRIMARY_THEME_COLORS.tertiary}]`}>[</span>
        {children}
        <span className={`text-[${PRIMARY_THEME_COLORS.tertiary}]`}>]</span>
    </h3>;
}

export default HeadingWrapper;