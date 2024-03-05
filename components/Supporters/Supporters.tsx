import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import { sanityClient, urlFor } from "@/sanity";
import { SupporterData } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import SectionWrapperContainer from "../ui/HOC/SectionWrapperContainer";
import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";
import { motion } from "framer-motion";

const Supporters = () => {
  const { isPending, data: supporters } = useQuery({
    queryKey: ["supporters"],
    queryFn: async () => {
      const querySupporters = groq`*[_type=="supporter"]`;
      return sanityClient.fetch(querySupporters);
    },
  });

  if (isPending) return null;

  const listSupporters = supporters.map(
    (supporter: SupporterData, id: number) => {
      return (
        <Link
          href={supporter.url}
          key={id}
          className="relative w-[12rem] "
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="object-fit"
            src={urlFor(supporter.image).url()}
            alt={supporter.title}
            height={300}
            width={500}
          />
        </Link>
      );
    }
  );

  return (
    <SectionWrapperContainer>
      <article className="inner-wrapper-container overflow-hidden">
        <HeadingWrapper>S u p p o r t e r s</HeadingWrapper>
        <motion.div
          initial={{
            y: 120,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-row"
        >
          {listSupporters}
        </motion.div>
      </article>
    </SectionWrapperContainer>
  );
};

export default Supporters;
