import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowDownIcon} from "@radix-ui/react-icons";
import {FC} from "react";
import {PageInfo} from "@/typings";
import {sanityClient, urlFor} from "@/sanity";
import {useQuery} from "@tanstack/react-query";
import {groq} from "next-sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero: FC<Props> = ({ pageInfo }: Props) => {
  const urlImage = `${urlFor(pageInfo.heroImage).url()}`;

  /*     //fetch PageInfo
    const queryPageInfo = groq`*[_type=="pageInfo"][0]`;
    const pageInfo: PageInfo = await sanityClient.fetch(queryPageInfo);
   */

  const { isPending, data } = useQuery({
    queryKey: ["pageInfo"],
    queryFn: async () => {
      const queryPageInfo = groq`*[_type=="pageInfo"][0]`;
      return sanityClient.fetch(queryPageInfo);
    },
  });

  const backgroundImageStyle = urlImage
    ? { backgroundImage: `url(${urlImage})` }
    : {};

  return (
    <header
      className=" relative flex flex-col overflow-hidden bg-cover bg-no-repeat
                 h-screen items-center justify-center text-center sm:space-y-5 space-y-2 px-3 sm:px-0"
      style={{
        backgroundPosition: "50%",
        ...backgroundImageStyle,
      }}
    >
      <h3
        className="mb-4 lg:text-2xl text-xl max-w-4xl font-bold text-orange-200 uppercase
            tracking-[4px] shadow-[#003767] mix-blend-differense"
      >
        {data?.address}
      </h3>
      <h1
        dangerouslySetInnerHTML={{
          __html: pageInfo?.heading.replace("$n", "<br/>"),
        }}
        className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] xl:text-[2rem] max-w-4xl font-extrabold text-white
                rounded-2xl uppercase tracking-[0.5rem] sm:tracking-[1rem]"
      ></h1>
      <h3 className="text-[1rem] lg:text-[1.25rem] max-w-4xl font-bold text-amber-100 uppercase tracking-[5px] sm:mx-[4vw] ">
        {pageInfo?.subHeading.split(" ").splice(0, 6).join(" ")}
        <br />
        {pageInfo?.subHeading.split(" ").splice(6, 8)}
      </h3>
      <Link href="/register">
        <Button
          title="asdasd"
          variant="outline"
          className="text-[#ffd700] rounded-full p-6 tracking-wider hover:bg-gradient-to-br hover:from-blue-800/20 hover:to-[#ffd700]/30 hover:text-[#ffd700] scale-75 sm:scale-100"
        >
          REGISTER FOR WETALKDATA&AI | SKOPJE
        </Button>
      </Link>
      <Link href="/#about">
        <Button
          className="relative sm:py-16 sm:px-8 py-12 px-3 rounded-full top-24 font-extrabold text-sm animate-[bounce_3s_infinite] shadow-xl shadow-[#003767] hover:bg-gradient-to-br from-[#003767]/70 to-[#ffd700]/90
                    hover:text-[#ffd700] text-[#ffd700] hover:bg-[#ffd700]/50 border mix-blend-hard-light"
          size="lg"
          variant="outline"
        >
          <div className="flex flex-col items-center space-y-[10px]">
            <div className="flex flex-col scale-75 sm:scale-100">
              {pageInfo.heroBtn?.split(" ").map((word, index) => (
                <div key={index}>{word}</div>
              ))}
            </div>
            <ArrowDownIcon className="h-7 w-7 sm:h-10 sm:w-10" />
          </div>
        </Button>
      </Link>
    </header>
  );
};

export default Hero;
