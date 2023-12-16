import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import { AboutData } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";
import { FONTS, INNER_WRAPPER, PRIMARY_THEME_COLORS } from "@/constants/primary-theme";

type Props = {
  about: AboutData;
};

const About = ({ about }: Props) => {
  return (
    <SectionWrapperContainer>
      <div className={`max-h-[2100px] items-center text-center px-0 md:text-left max-w-full justify-center mx-auto min-h-[500px] overflow-y ${INNER_WRAPPER.container}`}>
        <HeadingWrapper>{about.title}</HeadingWrapper>
        <div
          className="flex flex-col md:flex-row relative items-center
                justify-evenly space-y-[30px] px-[20px] md:space-y-0 md:space-x-8"
        >
          <Image
            className="w-[400px] h-[300px] sm:w-[500px] sm:h-[360px] rounded-xl object-cover md:w-1/2 md:rounded-xl md:h-[400px] lg:h-[500px] 2xl:h-[26vw] max-h-[500px]"
            src={urlFor(about.image).url()}
            alt={about?.title}
            width={400}
            height={300}
          />
          <p
            className={`${FONTS.paragraph} ${PRIMARY_THEME_COLORS.textWhite}
                    md:w-1/2 max-w-[400px] sm:max-w-[500px] text-left`}
          >
            {about?.description}
          </p>
        </div>
      </div>
    </SectionWrapperContainer>
  );
};

export default About;
