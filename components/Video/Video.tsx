import {Button} from "@/components/ui/button";
import {PauseIcon, PlayIcon} from "@radix-ui/react-icons";
import {FC, useRef, useState} from "react";

const Video: FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className='h-full w-full overflow-hidden relative my-auto max-h-[500px]'>
            <video loop controls ref={videoRef} className='relative w-full mb-[-100px]'>
                <source src='/assets/video.mp4' type='video/mp4'/>
            </video>
            <div className='bg-cover text-center h-full left-0 top-0 absolute w-full z-999 bg-[#ffd700]/40'>
                <Button variant='outline' className='rounded-full relative top-[50%] h-[50px] text-[#ffd700]'
                        onClick={togglePlay}>
                    {isPlaying || <PlayIcon/>}
                    {isPlaying && <PauseIcon/>}
                </Button>
            </div>
        </div>
    );
}

export default Video;