import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import Link from "next/link";
import {InstagramLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";
import FacebookLogoIcon from "@/components/ui/FacebookLogoIcon";

const DUMMY_SOCIALS = [
    {title: 'Instagram', url: 'https://www.instagram.com/we.talk.data.ai/?hl=en'},
    {title: 'LinkedIn', url: 'https://www.linkedin.com/company/wetalkdata-ai/?viewAsMember=true'},
    {title: 'Facebook', url: 'https://www.facebook.com/wetalkdataai'}
];

const socialsList1 = DUMMY_SOCIALS?.map((social, i) => {
    return (
        <Link
            href={social.url}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
        >
            {
                social.title.toLowerCase() === 'instagram'
                    ? <InstagramLogoIcon
                        className='text-[#ffd700]/30 mx-[15px] hover:text-[#ffd700]/60 animate hover:animate-spin scale-150'/>
                    : social.title.toLowerCase() === 'linkedin'
                        ? <LinkedInLogoIcon
                            className='text-[#ffd700]/30 mx-[15px] hover:text-[#ffd700]/60 animate hover:animate-spin scale-150'/>
                        : <FacebookLogoIcon/>
            }
        </Link>
    )
});

const Footer = () => {

    return (
        <SectionWrapperContainer>
            <div
                className='relative flex flex-col max-h-[1000px] items-center text-center overflow-x-hidden py-[75px]
                px-0 sm:px-[50px] md:text-left max-w-full justify-center mx-auto overflow-y space-y-[50px]'>
                <div className='flex items-center justify-center px-[10px] w-full'>
                    {socialsList1}
                </div>
                <div className='flex flex-col text-center space-y-2 text-gray-400'>
                    <Link
                        href='/FAQ'
                        className='hover:text-[#ffd700]/70'
                    >
                        FAQ
                    </Link>
                    <Link href='/code-of-conduct'
                          className='hover:text-[#ffd700]/70'
                    >
                        Code of Conduct
                    </Link>
                    <Link href='/terms-of-use'
                          className='hover:text-[#ffd700]/70'
                    >
                        Terms of Use
                    </Link>
                    <Link href='/cp'
                          className='hover:text-[#ffd700]/70'
                    >
                        Cookie Policy
                    </Link>
                </div>

                <div className='text-sm sm:text-lg'><span className='text-gray-400'>Designed and developed by:  </span>
                    <Link
                        href='https://www.kinandcarta.com/'
                        className='text-[#ffd700]/50 hover:text-[#ffd700]'
                          target="_blank"
                          rel="noopener noreferrer">
                            @Kin + Carta
                    </Link>
                </div>
            </div>
        </SectionWrapperContainer>
    );
}

export default Footer;