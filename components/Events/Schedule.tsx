import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import { UpcomingEventData } from "@/typings";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import { urlFor } from "@/sanity";
import Image from "next/image";
import Link from "next/link";
import { SewingPinIcon } from "@radix-ui/react-icons";
import {
  FONTS,
  INNER_WRAPPER,
  PRIMARY_THEME_COLORS,
} from "@/constants/primary-theme";

type Props = {
  upcomingEvent: UpcomingEventData;
};

const Schedule = ({ upcomingEvent }: Props) => {
  const listSpeakersPresentationInfo = upcomingEvent.speaker.map((speaker) => {
    const urlImage = urlFor(speaker.image.asset._ref).url();

    return (
      <Accordion
        type="single"
        collapsible
        className="mx-[15px] sm:mx-[50px] md:mx-[75px] max-h-[1500px] bg-[#001330]/20"
        key={speaker._id}
      >
        <AccordionItem value={"sa"} className="max-h-[500px] overflow-hidden">
          <AccordionTrigger
            className={`border-l-8 border-l-[${PRIMARY_THEME_COLORS.tertiary}] hover:bg-gradient-to-br from-[${PRIMARY_THEME_COLORS.tertiary}]/30 to-[${PRIMARY_THEME_COLORS.primary}] ${PRIMARY_THEME_COLORS.textWhite} pr-[15px]`}
          >
            <span className="space-y-1 sm:space-y-3 px-[10px] flex flex-col items-center">
              <Image
                src={urlImage}
                alt={speaker.speakerName}
                height={50}
                width={50}
                className="rounded-full sm:scale-150 my-3"
              />
              <p>{speaker.jobTitle.slice(speaker.jobTitle.indexOf("|") + 1)}</p>
              <p className="text-xs w-[85px] sm:w-[120px] mx-auto mt-0">
                {speaker.presentationStartTime}
              </p>
            </span>
            <p className={`${FONTS.paragraph} sm:px-[15px] px-[2vw]`}>
              {speaker.presentationTitle}
            </p>
          </AccordionTrigger>
          <AccordionContent
            className={`bg-[${PRIMARY_THEME_COLORS.primary}]/50 text-[${PRIMARY_THEME_COLORS.tertiary}] pt-3 text-md sm:text-lg`}
          >
            {speaker.description}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  });

  return (
    <div
      className={`${INNER_WRAPPER.container} items-center text-center px-0 md:text-left max-w-full justify-center mx-auto overflow-y`}
    >
      <HeadingWrapper>
        {upcomingEvent.scheduleSectionTitle.toUpperCase()}
      </HeadingWrapper>
      <div className="flex flex-col space-y-4 text-sm sm:text-base">
        <p className="text-white flex flex-row font-extrabold justify-center">
          Location:
          <Link
            className={`px-2 text-[${PRIMARY_THEME_COLORS.tertiary}]/50 hover:text-[${PRIMARY_THEME_COLORS.tertiary}] flex flex-row`}
            href="https://maps.app.goo.gl/p25yuLr5vFrwbbcz5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SewingPinIcon className="w-6 h-6" />
            Public Room
          </Link>
          <span>{upcomingEvent.date}</span>
        </p>
        <p
          className={`${PRIMARY_THEME_COLORS.textWhite} flex flex-row font-extrabold justify-center`}
        >
          Reception and introduction: 18:00 - 18:30
        </p>
        <p
          className={`${PRIMARY_THEME_COLORS.textWhite} flex flex-row font-extrabold justify-center`}
        >
          Tech Talks: 18:30 - 19:30
        </p>
        <p
          className={`${PRIMARY_THEME_COLORS.textWhite} flex flex-row font-extrabold justify-center pb-2`}
        >
          Socializing: 19:30 - 21:00
        </p>
      </div>
      <SectionWrapperContainer>
        {listSpeakersPresentationInfo.reverse()}
      </SectionWrapperContainer>
    </div>
  );
};

export default Schedule;
