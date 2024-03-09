import Schedule from "@/components/Events/Schedule";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import { sanityClient } from "@/sanity";
import { SpeakerData } from "@/typings";
import { useQuery } from "@tanstack/react-query";
import { groq } from "next-sanity";
import dynamic from "next/dynamic";

const Speakers = dynamic(() => import("../Events/Speakers"), { ssr: false });

type Props = {
  speakersData: SpeakerData;
};

const UpcomingEvent = ({ speakersData }: Props) => {
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

  return (
    <SectionWrapperContainer>
      <Speakers speakersData={agenda.speaker} />

      <Schedule />
    </SectionWrapperContainer>
  );
};

export default UpcomingEvent;
