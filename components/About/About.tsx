import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import { urlFor } from "@/sanity";
import { AboutData } from "@/typings";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  about: AboutData;
};

const About = ({ about }: Props) => {
  return (
    <SectionWrapperContainer>
      <figure className="max-h-[2100px] md:text-left max-w-full mx-auto min-h-[30rem] overflow-y inner-wrapper-container">
        <HeadingWrapper>{about.title}</HeadingWrapper>
        <div className="flex flex-col md:flex-row relative items-stretch inner-section-wrapper-fixer md:space-y-0 md:space-x-8">
          <motion.span
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex md:w-1/2"
          >
            <Image
              className="rounded-xl object-cover md:rounded-xl"
              src={urlFor(about.image).url()}
              alt={about?.title}
              width={700}
              height={300}
            />
          </motion.span>
          <motion.p
            initial={{
              x: 200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2 text-left paragraph-1 flex-grow min-h-full"
          >
            {about?.description}
          </motion.p>
        </div>
      </figure>
    </SectionWrapperContainer>
  );
};

export default About;
