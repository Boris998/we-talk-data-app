import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowDownIcon} from "@radix-ui/react-icons";
import {FC} from "react";


const Hero:FC = () => {
    return (<div className='flex flex-col overflow-hidden bg-cover bg-no-repeat
                 h-screen items-center justify-center text-center'
                 style={{
                     backgroundPosition: '50%',
                     backgroundImage: `url(/assets/Hero/IMG_8682.PNG)`
                 }}
        >
            <h1 className='mb-6 lg:text-[92px] text-[8vw] font-extrabold text-[#003767]/90 uppercase tracking-[20px] drop-shadow-[0_6.2px_1.2px_rgba(255,255,255)]'>
                Heading
            </h1>
            <h3 className='mb-6 lg:text-6xl text-[5vw] font-bold text-[#ffd700] uppercase tracking-[20px] drop-shadow-[0_6.2px_1.2px_rgba(255,255,255)]'>
                Subheading
            </h3>
            <Link href='/#about'>
                <Button
                    className='relative py-[70px] rounded-full top-[60px] font-extrabold text-lg animate animate-bounce
                            hover:text-[#003767] text-[#ffd700] hover:bg-[#ffd700]/30 border-[3px] border-[#003767]/70 scale-50 sm:scale-75 md:scale-95 lg:scale-100'
                    size='lg' variant='outline'
                >
                    <div className='flex flex-col items-center space-y-[10px]'>
                        <span>Click Me!</span>
                        <ArrowDownIcon className='h-10 w-10'/>
                    </div>
                </Button>
            </Link>
        </div>
    );
}

export default Hero;
