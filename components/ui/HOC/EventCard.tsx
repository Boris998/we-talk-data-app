import React, {FC, ReactNode} from 'react';
import styles from './EventCard.module.css';

type Props = {
    children: ReactNode
}

const EventCard: FC<Props> = ({children}:Props) => {
    return (
        <figure className={`${styles.snip1577} relative hover-card cursor-pointer rounded-2xl
        hover:bg-gradient-to-br hover:from-[#ffd700]/30 hover:to-[#003767]
        `}>
            {children}
        </figure>
    );
};

export default EventCard;