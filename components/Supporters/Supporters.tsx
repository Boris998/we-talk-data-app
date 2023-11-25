import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import React from "react";
import Link from "next/link";
import CompaniesWrapper from "@/components/ui/HOC/CompaniesWrapper";
import {SupporterData} from "@/typings";
import {urlFor} from "@/sanity";

const DUMMY_Partners = [
    {src: '/assets/itQuarks-dark.png', href: 'https://www.kinandcarta.com/'},
    {src: '/assets/K+C_Logo_Black.png' , href: 'https://www.itquarks.com/'},
    {src: '/assets/Women-in-Tech-Logo-Transparent-Background.png' , href: 'https://women-in-tech.org/mk/'},
];

type Props = {
    supporters: SupporterData[]
}

const Supporters = ({supporters}: Props) => {
    const listSupporters = supporters.map((supporter, id)=>{
        return <Link href={supporter.url} key={id} className='px-[15px] hover:bg-[ffd700] rounded-full'>
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