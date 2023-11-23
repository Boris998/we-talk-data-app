import {FC} from "react";
import {ContainerProps} from "@/typings";

const SectionWrapperContainer: FC<ContainerProps> = ({children}) => {
    return (<div className={`mx-auto w-full sm:max-w-screen-2xl text-center`}>
        {children}
    </div>);
}

export default SectionWrapperContainer;
