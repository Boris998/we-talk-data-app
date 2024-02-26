import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import { sanityClient, urlFor } from "@/sanity";
import { PartnerData } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import SectionWrapperContainer from "../ui/HOC/SectionWrapperContainer";
import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";

const Partners = () => {
  const { isPending, data: partners } = useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      const queryPartners = groq`*[_type=="partner"]`;
      return sanityClient.fetch(queryPartners);
    },
  });

  if (isPending) return null;

  const listPartners = partners.map((partner: PartnerData, id: number) => {
    return (
      <Link
            href={partner.url}
            key={id}
            className={`flex relative ${partner.title.toLocaleLowerCase().includes('kin')?'w-[20rem] sm:w-[20rem]':'w-[10rem] sm:w-[9rem]'} h-auto items-center justify-center`}
            target="_blank"
            rel="noopener noreferrer"
        >
                <Image className='object-fit'
                    src={urlFor(partner.image).url()}
                    alt={partner.title}
                    height={300}
                    width={500}
                />
        </Link>
    );
  });

  return (
    <SectionWrapperContainer>
      <article className="inner-wrapper-container">
        <HeadingWrapper>P a r t n e r s</HeadingWrapper>
        <div className="flex items-center flex-col sm:flex-row space-x-4 space-y-4">
          {listPartners.reverse()}
        </div>
      </article>
    </SectionWrapperContainer>
  );
};

export default Partners;