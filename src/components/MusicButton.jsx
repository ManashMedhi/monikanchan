import React, { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const MusicButton = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const stopBackgroundMusic = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setIsPlaying(false);
  };

  const playBackgroundMusic = async () => {
    if (!audioRef.current) return;

    // Tribute owns the audio, so stop the background track first.
    window.dispatchEvent(new Event("tribute-music:pause"));

    try {
      await audioRef.current.play();
      setIsPlaying(true);

      // Tell ZubeenTribute to stop if it is currently playing.
      window.dispatchEvent(new Event("background-music:play"));
    } catch (error) {
      console.error("Background audio could not start:", error);
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopBackgroundMusic();
    } else {
      playBackgroundMusic();
    }
  };

  useEffect(() => {
    // Zubeen tribute starts -> background music must stop.
    const pauseBackground = () => {
      stopBackgroundMusic();
    };

    window.addEventListener(
      "background-music:pause",
      pauseBackground
    );

    return () => {
      window.removeEventListener(
        "background-music:pause",
        pauseBackground
      );
      audioRef.current?.pause();
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/song.mp3"
        loop
        preload="metadata"
      />

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-4
          right-4
          z-50
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#8B1515]
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
          hover:bg-[#6f1010]
          sm:bottom-5
          sm:right-5
          sm:h-12
          sm:w-12
          md:h-13
          md:w-13
        "
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <FaVolumeUp className="text-base sm:text-lg" />
        ) : (
          <FaVolumeMute className="text-base sm:text-lg" />
        )}
      </button>
    </>
  );
};

export default MusicButton;
