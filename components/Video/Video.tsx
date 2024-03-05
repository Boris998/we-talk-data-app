import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";
import { FC, useRef, useState } from "react";
import { motion } from "framer-motion";

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
    <div className="w-full overflow-hidden relative my-auto max-h-[36rem]">
      <video
        loop
        controls
        ref={videoRef}
        className="relative w-full mb-[-10vh]"
      >
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>
      <div className="bg-cover text-center h-full left-0 top-0 absolute w-full z-999 bg-[#ffd700]/40">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          aria-label={`Play`}
          className="rounded-full relative top-[25%] sm:top-[50%] p-3 sm:p-5 scale-75 sm:scale-100 text-[#ffd700] hover:text-white border-2 border-[#ffd700]"
          onClick={togglePlay}
        >
          {isPlaying || <PlayIcon />}
          {isPlaying && <PauseIcon />}
        </motion.button>
      </div>
    </div>
  );
};

export default Video;
