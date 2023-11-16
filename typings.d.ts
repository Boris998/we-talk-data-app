import {ReactNode} from "react";

interface SanityBody {
    _createdAt: string,
    _id: string,
    _rev: string,
    _updatedAt: string,
}

export interface Bars extends SanityBody {
    _type: 'Bars',
    title: string
}

export interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export interface Event extends SanityBody {
    category: string;
    name: string;
    year: number
}