import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import Link from "next/link";

const Footer = () => {
    return (
        <SectionWrapperContainer>
            <div
                className='relative flex flex-col max-h-[1500px] items-center text-center overflow-x-hidden py-[75px]
                px-0 sm:px-[50px] md:text-left max-w-full justify-center mx-auto overflow-y space-y-[75px]'>
                <div>

                </div>
                <div>
                    <Link href='/faq'>FAQ</Link>
                    <Link href='/faq'>Code of Conduct</Link>
                    <Link href='/faq'>Terms of Conditions</Link>
                    <Link href='/faq'>Privacy Policy</Link>
                    <Link href='/faq'>Cookie Policy</Link>
                </div>
            </div>
        </SectionWrapperContainer>
    );
}

export default Footer;