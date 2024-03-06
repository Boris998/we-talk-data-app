import Link from "next/link";
import {ArrowDownIcon} from "@radix-ui/react-icons";
import {sanityClient, urlFor} from "@/sanity";
import {useQuery} from "@tanstack/react-query";
import {groq} from "next-sanity";
import {motion} from "framer-motion";

const Hero = () => {
  const { isPending, data: pageInfo } = useQuery({
    queryKey: ["pageInfo"],
    queryFn: async () => {
      const queryPageInfo = groq`*[_type=="pageInfo"][0]`;
      return sanityClient.fetch(queryPageInfo);
    },
  });

  if (isPending) return null;

  const urlImage = `${urlFor(pageInfo.heroImage).url()}`;

  const backgroundImageStyle = urlImage
    ? { backgroundImage: `url(${urlImage})` }
    : {};

  return (
    <>
      <header
        className=" relative flex flex-col overflow-hidden bg-cover bg-no-repeat
                 h-screen items-center justify-center text-center sm:space-y-5 space-y-2 px-3 sm:px-0"
        style={{
          backgroundPosition: "50%",
          ...backgroundImageStyle,
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          transition={{
            duration: 1.25,
          }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h3
            className="mb-4 lg:text-2xl text-xl max-w-4xl font-bold text-orange-200 uppercase
            tracking-[4px] shadow-[#003767] mix-blend-differense"
          >
            {pageInfo?.address}
          </h3>
          <h1
            dangerouslySetInnerHTML={{
              __html: pageInfo?.heading.replace("$n", "<br/>"),
            }}
            className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] xl:text-[2rem] max-w-4xl font-extrabold text-[#ffd700]
                rounded-2xl uppercase tracking-[0.5rem] sm:tracking-[1rem]"
          ></h1>
          <h3 className="text-[1rem] lg:text-[1.25rem] max-w-4xl font-bold text-amber-100 uppercase tracking-[5px] sm:mx-[4vw] ">
            {pageInfo?.subHeading.split(" ").splice(0, 6).join(" ")}
            <br />
            {pageInfo?.subHeading.split(" ").splice(6, 8)}
          </h3>
        </motion.div>
        {pageInfo?.retisterFlag && (
          <Link href="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              title="asdasd"
              className="text-[#ffd700] text-[0.75rem] sm:text-[1rem] lg:text-[1.15rem] xl:text-[1.25rem] rounded-full px-8 py-3 tracking-wider hover:bg-gradient-to-br hover:from-blue-800/20 hover:to-[#ffd700]/30 hover:text-[#ffd700] border-2 border-[#ffd700]"
            >
              REGISTER FOR WETALKDATA&AI | SKOPJE
            </motion.button>
          </Link>
        )}
        <Link href="/#about">
          <button
            className="relative sm:py-6 sm:px-8 py-4 px-5 rounded-full top-24 font-extrabold text-sm animate-[bounce_3s_infinite] shadow-xl shadow-[#003767] hover:bg-gradient-to-br from-[#003767]/70 to-[#ffd700]/90
                    hover:text-[#ffd700] text-[#ffd700] hover:bg-[#ffd700]/50 mix-blend-hard-light border-2 border-[#ffd700]"
          >
            <div className="flex flex-col items-center space-y-[10px]">
              <div className="flex flex-col scale-75 sm:scale-100">
                {pageInfo.heroBtn
                  ?.split(" ")
                  .map((word: string, index: number) => (
                    <div key={index}>{word}</div>
                  ))}
              </div>
              <ArrowDownIcon className="h-7 w-7 sm:h-10 sm:w-10" />
            </div>
          </button>
        </Link>
      </header>
    </>
  );
};

export default Hero;
