import {FC} from "react";
import {ContainerProps} from "@/typings";


const ContainerHeader: FC<ContainerProps> = ({children}) =>{
    return (<header className='mx-auto px-[5vw] w-full absolute bg-[#ffd700]/10 rounded-b-full
    justify-between text-center overflow-hidden py-[0vw] lg:py-[15px] flex items-center'>
        {children}
    </header>);
}

export default ContainerHeader;