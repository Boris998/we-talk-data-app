import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import React from "react";
import Link from "next/link";
import CompaniesWrapper from "@/components/ui/HOC/CompaniesWrapper";
import {SupporterData} from "@/typings";
import {urlFor} from "@/sanity";
import Image from "next/image";


type Props = {
    supporters: SupporterData[]
}

const Supporters = ({supporters}: Props) => {
    const listSupporters = supporters.map((supporter, id)=>{
        return <Link
            href={supporter.url}
            key={id}
            className='relative h-[30vw] w-[40vw] sm:h-[9em] sm:w-[12em]'
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image className='object-fit'
                   src={urlFor(supporter.image).url()}
                   alt={supporter.title}
                   fill
            />
        </Link>
    });

    return (
        <CompaniesWrapper>
            <HeadingWrapper>
                S u p p o r t e r s
            </HeadingWrapper>
            <div className='flex flex-row'>
                {listSupporters}
            </div>
        </CompaniesWrapper>
    );
}

export default Supporters;