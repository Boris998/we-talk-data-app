import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import React from "react";
import Link from "next/link";
import CompaniesWrapper from "@/components/ui/HOC/CompaniesWrapper";
import {SupporterData} from "@/typings";
import {urlFor} from "@/sanity";


type Props = {
    supporters: SupporterData[]
}

const Supporters = ({supporters}: Props) => {
    const listSupporters = supporters.map((supporter, id)=>{
        return <Link
            href={supporter.url}
            key={id}
            className='px-[15px] hover:bg-[ffd700] rounded-full'
            target="_blank"
            rel="noopener noreferrer"
        >
            <img className='h-[14vw] lg:h-[12vw] xl:h-[8vw] 2xl:h-[5vw]'
                 src={urlFor(supporter.image).url()}
                 alt={supporter.title} />
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