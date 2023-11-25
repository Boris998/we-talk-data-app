import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import Link from "next/link";
import {InstagramLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";
import {Social} from "@/typings";
import FacebookLogoIcon from "@/components/ui/FacebookLogoIcon";

type Props = {
    socials: Social[]
}

const Footer = ({socials}: Props) => {


    const socialsList = socials.map((social, i) => {
        switch (social.title.toLowerCase()) {
            case 'instagram':
                return <InstagramLogoIcon key={social._id} className='text-[#ffd700]/30 mx-[15px] hover:text-[#ffd700]/60 animate hover:animate-spin scale-150'/>
            case 'linkedin':
                return <LinkedInLogoIcon key={social._id} className='text-[#ffd700]/30 mx-[15px] hover:text-[#ffd700]/60 animate hover:animate-spin scale-150'/>
            case 'facebook':
                return <FacebookLogoIcon key={social._id}/>
            default:
                return null;
        }
    });

    return (
        <SectionWrapperContainer>
            <div
                className='relative flex flex-col max-h-[1000px] items-center text-center overflow-x-hidden py-[75px]
                px-0 sm:px-[50px] md:text-left max-w-full justify-center mx-auto overflow-y space-y-[50px]'>
                <div className='flex items-center justify-center px-[10px] w-full'>
                    {socialsList}
                </div>
                <div className='flex flex-col text-center space-y-2 text-gray-400'>
                    <Link href='/FAQ' className='hover:text-[#ffd700]/70'>FAQ</Link>
                    <Link href='/#supporters' className='hover:text-[#ffd700]/70'>Code of Conduct</Link>
                    <Link href='/#supporters' className='hover:text-[#ffd700]/70'>Terms and Conditions</Link>
                    <Link href='/#supporters' className='hover:text-[#ffd700]/70'>Privacy Policy</Link>
                    <Link href='/#supporters' className='hover:text-[#ffd700]/70'>Cookie Policy</Link>
                </div>

                <div>Designed and developed by:
                    <Link href='https://www.kinandcarta.com/' className='text-[#ffd700]/30 hover:text-[#ffd700]/70'>
                        Kin + Carta
                    </Link>
                </div>
            </div>
        </SectionWrapperContainer>
    );
}

export default Footer;