import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import React from "react";
import Link from "next/link";
import CompaniesWrapper from "@/components/ui/HOC/CompaniesWrapper";
import {PartnerData} from "@/typings";
import {urlFor} from "@/sanity";

const DUMMY_Partners = [
    {src: '/assets/itQuarks-dark.png', href: 'https://www.kinandcarta.com/'},
    {src: '/assets/K+C_Logo_Black.png', href: 'https://www.itquarks.com/'},
];

type Props = {
    partners: PartnerData[]
}

const Partners = ({partners}: Props) => {

    const listPartners = partners.map((partner, id) => {
        return <Link href={partner.url} key={id} className='px-[15px] hover:bg-[ffd700] rounded-full'>
            <img className='h-[14vw] lg:h-[12vw] xl:h-[8vw] 2xl:h-[5vw]'
                 src={urlFor(partner.image).url()}
                 alt={partner.title}/>
        </Link>
    });

    return (
        <CompaniesWrapper>
            <HeadingWrapper>
                P a r t n e r s
            </HeadingWrapper>
            <div className='flex flex-row'>
                {listPartners}
            </div>
        </CompaniesWrapper>
    );
}

export default Partners;
