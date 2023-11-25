import React, {FC} from 'react';
import styles from './SpaekerCard.module.css';
import {ContainerProps} from "@/typings";

const SpeakerCard: FC<ContainerProps> = ({children}) => {
    return (
        <figure className={`${styles.snip1577} relative hover-card cursor-pointer rounded-2xl
        hover:bg-gradient-to-br hover:from-[#ffd700]/30 hover:to-[#003767]
        `}>
            {children}
        </figure>
    );
};

export default SpeakerCard;