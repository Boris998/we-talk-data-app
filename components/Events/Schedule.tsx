import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import {sanityClient, urlFor} from "@/sanity";
import {SpeakerData} from "@/typings";
import {SewingPinIcon} from "@radix-ui/react-icons";
import {useQuery} from "@tanstack/react-query";
import {groq} from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

const Schedule = () => {
  const { isPending, data: agenda } = useQuery({
    queryKey: ["agenda"],
    queryFn: async () => {
      const queryAgenda = groq`*[_type=="upcomingEvent"][0]{
          ...,
          speaker[]->
      }`;
      return sanityClient.fetch(queryAgenda);
    },
  });

  if (isPending) return null;

  const listSpeakersPresentationInfo = agenda.speaker.map(
    (speaker: SpeakerData) => {
      const urlImage = urlFor(speaker.image.asset._ref).url();

      return (
        <Accordion
          type="single"
          collapsible
          className="max-h-[1500px] bg-[#001330]/20"
          key={speaker._id}
        >
          <AccordionItem value={"sa"} className="overflow-hidden">
            <AccordionTrigger className="border-l-8 border-l-[#ffd700] hover:bg-gradient-to-br from-[#ffd700]/30 to-[#003767] text-white pr-4">
              <span className="space-y-1 sm:space-y-3 px-2 py-2 flex flex-col items-center">
                <Image
                  src={urlImage}
                  alt={speaker.speakerName}
                  height={50}
                  width={50}
                  className="rounded-full mb-2 sm:scale-150"
                />
                <p>
                  {speaker.jobTitle.slice(speaker.jobTitle.indexOf("|") + 1)}
                </p>
                <p className="text-xs w-[16ch] sm:w-[25ch] mx-auto mt-0">
                  {speaker.presentationStartTime}
                </p>
              </span>
              <p className="paragraph-1 px-1 sm:px-6 md:px-10">
                {speaker.presentationTitle}
              </p>
            </AccordionTrigger>
            <AccordionContent className="bg-[#003767]/50 text-[#ffd700] pt-3 text-md sm:text-lg">
              {speaker.description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    }
  );

  return (
    <article className="inner-wrapper-container">
      <HeadingWrapper>
        {agenda.scheduleSectionTitle.toUpperCase()}
      </HeadingWrapper>
      <figure className="space-y-4 text-sm sm:text-base">
        <motion.p
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-white flex flex-row font-extrabold justify-center"
        >
          Location:
          <Link
            className="first-line:px-2 text-[#ffd700]/50 hover:text-[#ffd700] flex flex-row pr-2"
            href="https://maps.app.goo.gl/p25yuLr5vFrwbbcz5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SewingPinIcon className="w-6 h-6" />
            Public Room
          </Link>
          <span>{agenda.date}</span>
        </motion.p>
        <motion.p
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-white-centered-1"
        >
          Reception and introduction: 18:00 - 18:30
        </motion.p>
        <motion.p
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.8
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-white-centered-1"
        >
          Tech Talks: 18:30 - 19:30
        </motion.p>
        <motion.p
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 1.2
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-white-centered-1 pb-2"
        >
          Socializing: 19:30 - 21:00
        </motion.p>
      </figure>
      <Link href="/register">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="asdasd"
          className="text-[#ffd700] text-[0.75rem] sm:text-[1rem] lg:text-[1.15rem] xl:text-[1.25rem] rounded-full px-8 py-3 tracking-wider hover:bg-gradient-to-br hover:from-blue-800/20 hover:to-[#ffd700]/30 hover:text-[#ffd700] border-2 border-[#ffd700] "
        >
          REGISTER FOR WETALKDATA&AI | SKOPJE
        </motion.button>
      </Link>
      <SectionWrapperContainer>
        {listSpeakersPresentationInfo.reverse()}
      </SectionWrapperContainer>
    </article>
  );
};

export default Schedule;
