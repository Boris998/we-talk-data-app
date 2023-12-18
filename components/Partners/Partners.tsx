import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import React from "react";
import Link from "next/link";
import CompaniesWrapper from "@/components/ui/HOC/CompaniesWrapper";
import {PartnerData} from "@/typings";
import {urlFor} from "@/sanity";
import Image from "next/image";

type Props = {
    partners: PartnerData[]
}

const Partners = ({partners}: Props) => {

    const listPartners = partners.map((partner, id) => {
        return <Link
            href={partner.url}
            key={id}
            className='relative overflow-hidden h-[30vw] w-[40vw] sm:h-[9em] sm:w-[12em]'
            target="_blank"
            rel="noopener noreferrer"
        >
                <Image className='object-fit'
                    src={urlFor(partner.image).url()}
                    alt={partner.title}
                    fill
                />
        </Link>
    });

    return (
        <CompaniesWrapper>
            <HeadingWrapper>
                P a r t n e r s
            </HeadingWrapper>
            <div className='flex flex-row space-x-4'>
                {listPartners.reverse()}
            </div>
        </CompaniesWrapper>
    );
}

export default Partners;
