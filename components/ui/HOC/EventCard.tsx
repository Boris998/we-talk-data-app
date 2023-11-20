import React, {FC} from 'react';
import './EventCard.css';
import {ContainerProps} from "@/typings";

const EventCard: FC<ContainerProps> = ({children}) => {
    return (
        <figure className="snip1577 relative hover-card cursor-pointer rounded-2xl hover:bg-[#ffd700]/60">
            {children}
        </figure>
    );
};

export default EventCard;