import Header from "@/components/Header/Header";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowDownIcon} from "@radix-ui/react-icons";


const Hero = () => {
    return (<div className='relative overflow-hidden bg-cover bg-no-repeat'
                 style={{
                     backgroundPosition: '50%',
                     backgroundImage: `url('/assets/hero.jpg')`
                 }}
        >
            <Header/>
            <div className='flex h-screen items-center justify-center'>
                <div className='px-6 text-center text-white'>
                    <h1 className='mb-6 text-[62px] font-bold text-[#003767]'>Heading</h1>
                    <h3 className='mb-6 text-5xl font-bold text-[#ffd700]'>Subheading</h3>
                    <Link href='#about'>
                        <Button
                            className='relative py-[60px] rounded-full top-[60px]
                            hover:text-[#003767] text-[#ffd700] hover:bg-[#ffd700]/20 animate animate-bounce'
                            size='lg' variant='outline'
                        >
                            <div className='flex flex-col items-center space-y-[10px]'>
                                <span>Click Me!</span>
                                <ArrowDownIcon className='h-10 w-10'/>
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
