import {FC} from "react";
import {ContainerProps} from "@/typings";


const Container: FC<ContainerProps> = ({children}) =>{
    return (<div className='mx-auto w-full max-w-7xl'>
        {children}
    </div>);
}

export default Container;