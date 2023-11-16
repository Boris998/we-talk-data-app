import {FC} from "react";
import {ContainerProps} from "@/typings";

const SectionWrapperContainer: FC<ContainerProps> = ({children}) => {
    return (<div className={`mx-auto w-full sm:max-w-[1500px] `}>
        {children}
    </div>);
}

export default SectionWrapperContainer;
