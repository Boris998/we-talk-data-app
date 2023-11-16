import React, {FC} from 'react';
import './EventCard.css';
import {ContainerProps} from "@/typings"; // Import the CSS file

const EventCard: FC<ContainerProps> = ({children}) => {
    return (
        <figure className="snip1577 relative hover-card cursor-pointer rounded-2xl">
            {children}
        </figure>
    );
};

export default EventCard;