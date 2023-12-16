import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowDownIcon} from "@radix-ui/react-icons";
import {FC} from "react";
import {PageInfo} from "@/typings";
import {urlFor} from "@/sanity";
import { PRIMARY_THEME_COLORS } from "@/constants/primary-theme";

type Props = {
    pageInfo: PageInfo
};

const Hero: FC<Props> = ({pageInfo}: Props) => {
    const urlImage = `${urlFor(pageInfo.heroImage).url()}`;

    const backgroundImageStyle = urlImage ? {backgroundImage: `url(${urlImage})`} : {};

    return (<div className=' relative flex flex-col overflow-hidden bg-cover bg-no-repeat
                 h-screen items-center justify-center text-center space-y-[20px] px-4 sm:px-0'
                 style={{
                     backgroundPosition: '50%',
                     /* backgroundImage: `url('./assets/gall-4.png')` */
                     ...backgroundImageStyle
                 }}
        >
            <h3 className='mb-4 lg:text-[24px] text-[3vw] max-w-4xl font-bold text-orange-200 uppercase
            tracking-[4px] shadow-[#003767] sm:mx-[4vw] mix-blend-differense'>
                {pageInfo?.address}
            </h3>
            <h1 dangerouslySetInnerHTML={
                {__html: pageInfo?.heading.replace('$n', '<br/>')}
            }
                className={`mb-6 lg:text-[44px] text-[4vw]  max-w-4xl font-extrabold text-[${PRIMARY_THEME_COLORS.tertiary}]
                sm:mx-[4vw] rounded-2xl uppercase tracking-[15px] text `}>

            </h1>
            <h3 className='mb-6 lg:text-[24px] text-[3vw] max-w-4xl font-bold text-amber-100 uppercase tracking-[5px] sm:mx-[4vw] '>
                {pageInfo?.subHeading.split(' ').splice(0, 6).join(' ')}<br/>
                {pageInfo?.subHeading.split(' ').splice(6, 8)}
            </h3>
            <Link href='/#about'>
                <Button
                    className={`relative py-[65px] rounded-full top-[60px] font-extrabold text-sm animate-[bounce_3s_infinite] shadow-xl shadow-[${PRIMARY_THEME_COLORS.primary}] hover:bg-gradient-to-br from-[${PRIMARY_THEME_COLORS.primary}]/70 to-[${PRIMARY_THEME_COLORS.tertiary}]/90
                    hover:text-[${PRIMARY_THEME_COLORS.tertiary}] text-[${PRIMARY_THEME_COLORS.tertiary}] hover:bg-[${PRIMARY_THEME_COLORS.tertiary}]/50 border scale-50 sm:scale-75 md:scale-95 lg:scale-100 mix-blend-hard-light`}
                    size='lg' variant='outline'
                >
                    <div className='flex flex-col items-center space-y-[10px]'>
                        <div className="flex flex-col">
                            {pageInfo.heroBtn?.split(' ').map((word, index) => (
                                <div key={index}>{word}</div>
                            ))}
                        </div>
                        <ArrowDownIcon className='h-10 w-10'/>
                    </div>
                </Button>
            </Link>
        </div>
    );
}

export default Hero;
