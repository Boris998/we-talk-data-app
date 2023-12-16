import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import { FONTS, PRIMARY_THEME_COLORS } from "@/constants/primary-theme";

const DUMMY_COC = [
  {
    one: "Purpose",
    two: [
      "WeTalkDATA & AI is a community-driven event created by and for data and AI enthusiasts. We are dedicated to providing an accepting environment that provides space for making friends and earning knowledge regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion or lack thereof. Harassment of event attendees, speakers, sponsors and any others will not be tolerated at WeTalkDATA&AI. Event participants violating these rules may be sanctioned or expelled from the event. ",
    ],
  },
  {
    one: "Unacceptable Behavior",
    two: [
      "To maintain an accepting environment, WeTalkDATA&AI condemns the following (but not limited to) unacceptable: \n",
      "Offensive verbal comments related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age & religion. \n",
      "Sexual references/imagery in public spaces. \n",
      "Deliberate intimidation, stalking, or following. \n",
      "Harassing photography or recording. \n",
      "Sustained disruption of talks or other events. \n",
      "Inappropriate physical contact. \n",
      "Invasion of personal space. \n",
      "Unwelcome sexual attention. \n",
      "Advocating for or encouraging, any of the above behavior.\n",
    ],
  },
  {
    one: "Enforcement",
    two: [
      "If you are subject to unacceptable behavior, notice that someone else is being subject to unacceptable behavior, or have any other concerns, please follow these steps:",
      "Let the person know that what they did is unacceptable and ask them to stop.",
      "That person should immediately stop the behavior.",
      "If that person doesn’t comply, please contact event staff as soon as possible.",
      "WeTalkData&AI event staff will ensure your safety and maintain desired privacy.",
      "WeTalkData&AI event staff members will take immediate actions against Code of Conduct violators.",
    ],
  },
  {
    one: "Reporting",
    two: [
      "If you are subject to unacceptable behavior, notice that someone else is being subject to unacceptable behavior, or have any other concerns, please follow these steps: WeTalkData&AI event organizers can be identified through branded shirts/badges.",
      "Email: hello@wetalkdata.ai",
    ],
  },
];

const cocList = DUMMY_COC.map((code, i) => {
  return (
    <div key={i} className="text-left py-4">
      <h1 className="font-extrabold 2xl:text-4xl xl:text-3xl text-xl lg:text-2xl text-white">
        {code.one}
      </h1>
      {code.two.map((line1, i) => (
        <div key={i}>
          {i === 0 && (
            <p
              className={`text-[${PRIMARY_THEME_COLORS.tertiary}] ${FONTS.paragraph} py-1`}
            >
              {line1}
            </p>
          )}
          {i >= 1 && (
            <li
              className={`text-[${PRIMARY_THEME_COLORS.tertiary}] ${FONTS.paragraph} py-1`}
            >
              {line1}
            </li>
          )}
        </div>
      ))}
    </div>
  );
});

const CodeOfConduct = () => {
  return (
    <SectionWrapperContainer>
      <div className="sm:py-24 py-16 px-6 sm:px-10 overflow-hidden">
        <HeadingWrapper>CODE OF CONDUCT</HeadingWrapper>
        <div>{cocList}</div>
      </div>
    </SectionWrapperContainer>
  );
};

export default CodeOfConduct;
