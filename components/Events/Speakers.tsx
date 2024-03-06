import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import SpeakerCard from "@/components/ui/HOC/SpeakerCard";
import { sanityClient, urlFor } from "@/sanity";
import { SpeakerData } from "@/typings";
import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const shakeValue = 2;

const Speakers = () => {
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

  const listSpeakerCards = agenda.speaker.map((speaker: SpeakerData) => {
    const urlImage = urlFor(speaker.image.asset._ref).url();

    return (
      <motion.div
        key={speaker._id}
        initial={{rotateZ: 0}}
        whileHover={{
          transition: { duration: 0.5, ease: "easeInOut" },
          scale: 1.05
        }}
        whileTap={{scale: 0.95}}
        exit={{rotateZ: 0}}
      >
        <Link
          suppressHydrationWarning={false}
          href={`/speakerInfo/${speaker.speakerName}`}
        >
          <SpeakerCard className="z-100 ">
            <Image
              src={urlImage}
              alt={speaker.speakerName}
              height="300"
              width="400"
              className="rounded-2xl"
            />
            <figcaption className="px-5 py-3 space-y-1">
              <h3>{speaker.speakerName}</h3>
              <h3>{speaker.jobTitle}</h3>
              <h4>{speaker.bio?.substring(0, 50)}</h4>
            </figcaption>
          </SpeakerCard>
        </Link>
      </motion.div>
    );
  });

  return (
    <article className="inner-wrapper-container border-b">
      <HeadingWrapper>{agenda.speakersSectionTitle}</HeadingWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center items-center flex-wrap"
      >
        {listSpeakerCards}
      </motion.div>
    </article>
  );
};

Speakers.ssr = false;
export default Speakers;
