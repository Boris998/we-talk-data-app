import React, {FC} from 'react';
import './SpaekerCard.css';
import {ContainerProps} from "@/typings";

const SpeakerCard: FC<ContainerProps> = ({children}) => {
    return (
        <figure className="snip1577 relative hover-card cursor-pointer rounded-2xl hover:bg-[#ffd700]/60">
            {children}
        </figure>
    );
};

export default SpeakerCard;