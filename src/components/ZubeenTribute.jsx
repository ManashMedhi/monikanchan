import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Tribute and background music are intentionally both paused on initial render.
const ZubeenTribute = () => {
  const tributeAudioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${remainingSeconds}`;
  };

  const playTribute = async () => {
    const tributeAudio = tributeAudioRef.current;

    if (!tributeAudio) return;

    // Tell the background MusicButton to stop immediately.
    window.dispatchEvent(new Event("background-music:pause"));

    try {
      await tributeAudio.play();
      setIsPlaying(true);

      // Tell the rest of the app that the tribute owns audio playback.
      window.dispatchEvent(new Event("tribute-music:play"));
    } catch (error) {
      console.error("Unable to play tribute audio:", error);
    }
  };

  const pauseTribute = () => {
    tributeAudioRef.current?.pause();
    setIsPlaying(false);
    window.dispatchEvent(new Event("tribute-music:pause"));
  };

  const toggleTribute = () => {
    if (isPlaying) {
      pauseTribute();
    } else {
      playTribute();
    }
  };

  const handleLoadedMetadata = () => {
    const total = tributeAudioRef.current?.duration;

    if (Number.isFinite(total)) {
      setDuration(total);
    }
  };

  const handleTimeUpdate = () => {
    const audio = tributeAudioRef.current;

    if (!audio) return;

    const current = audio.currentTime || 0;
    const total = audio.duration || 0;

    setCurrentTime(current);
    setProgress(total ? (current / total) * 100 : 0);
  };

  const handleSeek = (event) => {
    const audio = tributeAudioRef.current;

    if (!audio || !duration) return;

    const value = Number(event.target.value);
    audio.currentTime = (value / 100) * duration;
    setProgress(value);
  };

  const handleTributeEnd = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setProgress(0);

    // Do NOT automatically start the background music.
    // Both players remain paused until the user presses play.
    window.dispatchEvent(new Event("tribute-music:ended"));
  };

  useEffect(() => {
    // If background music starts anywhere else, stop the tribute.
    const stopTribute = () => {
      tributeAudioRef.current?.pause();
      setIsPlaying(false);
    };

    window.addEventListener("background-music:play", stopTribute);

    return () => {
      window.removeEventListener(
        "background-music:play",
        stopTribute
      );
      tributeAudioRef.current?.pause();
    };
  }, []);

  return (
    <section
      className="
        relative
        z-20
        mt-[10vh]
        w-full
        overflow-hidden
        px-[5vw]
        pb-[8vh]
        pt-[1vh]
        sm:mt-[12vh]
        sm:pt-[6vh]
        lg:px-[6vw]
        xl:mt-[14vh]
      "
    >
      {/* =====================================================
          SOFT BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20">
        <div
          className="
            absolute
            inset-0
            bg-linear-to-b
            from-transparent
            via-[#8B1515]/2.5
            to-[#8B1515]/5.5
          "
        />

        <motion.div
          className="
            absolute
            left-1/2
            top-[42%]
            h-128
            w-lg
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#8B1515]/6
            blur-[120px]
          "
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            left-[8%]
            top-[15%]
            h-32
            w-32
            rounded-full
            bg-amber-200/20
            blur-[70px]
          "
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            bottom-[10%]
            right-[8%]
            h-48
            w-48
            rounded-full
            bg-sky-200/20
            blur-[90px]
          "
          animate={{
            x: [0, -20, 0],
            y: [0, 18, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* =====================================================
          GAMOSA BORDERS
      ====================================================== */}

      <motion.img
        src="/assets/gamosa-left.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-1/2
          z-0
          block
          h-[52%]
          max-h-82.5
          w-auto
          -translate-y-1/2
          opacity-35
          sm:h-[58%]
          sm:max-h-105
          sm:opacity-40
          md:h-[62%]
          md:max-h-125
          md:opacity-45
          lg:h-[66%]
          lg:max-h-140
          lg:opacity-50
          xl:h-[68%]
          xl:max-h-none
        "
        animate={{
          y: ["-50%", "-48.5%", "-50%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="/assets/gamosa-right.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          z-0
          block
          h-[52%]
          max-h-82.5
          w-auto
          -translate-y-1/2
          opacity-35
          sm:h-[58%]
          sm:max-h-105
          sm:opacity-40
          md:h-[62%]
          md:max-h-125
          md:opacity-45
          lg:h-[66%]
          lg:max-h-140
          lg:opacity-50
          xl:h-[68%]
          xl:max-h-none
        "
        animate={{
          y: ["-50%", "-51.5%", "-50%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          HEADING
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          text-center
        "
      >
        <p
          className="
            
            text-[9px]
            font-semibold
            tracking-[0.38em]
            text-[#8B1515]/65
            sm:text-xs
            md:text-sm
          "
        >
          A MUSICAL TRIBUTE
        </p>

        <h2
          className="
            mt-3
            font-serif
            text-[clamp(1.7rem,4vw,3.4rem)]
            font-bold
            leading-tight
            text-[#8B1515]
          "
        >
            শ্ৰদ্ধাঞ্জলি
        </h2>

        <p
          className="
            mt-2
            text-xs
            tracking-[0.12em]
            text-[#571515]/60
            sm:text-sm
            md:text-base
          "
        >
          A Tribute to Zubeen Garg
        </p>

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: "160px",
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
          }}
          className="
            mx-auto
            mt-6
            h-px
            bg-linear-to-r
            from-transparent
            via-[#8B1515]
            to-transparent
          "
        />
      </motion.div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-7
          flex
          w-full
          max-w-5xl
          items-center
          justify-center
          sm:mt-8
          md:mt-10
        "
      >
        {/* ===================================================
            MUSIC PANEL
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.1,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            flex
            w-full
            max-w-sm
            justify-center
          "
        >
          <div
            className="
            
              relative
              overflow-hidden
              rounded-[1.25rem]
              border
              border-[#8B1515]/15
              bg-white/65
              p-3.5
              shadow-[0_22px_60px_rgba(87,21,21,0.13)]
              backdrop-blur-xl
              sm:rounded-[1.35rem]
              sm:p-4
              md:p-5
            "
          >
            {/* Top bar */}
            <div
              className="
                mb-4
                flex
                items-center
                justify-between
                gap-3
                border-b
                border-[#8B1515]/10
                pb-4
              "
            >
              <div>
                <p
                  className="
                    text-[8px]
                    font-semibold
                    tracking-[0.28em]
                    text-[#8B1515]/60
                    sm:text-[10px]
                  "
                >
                  PLAY THE TRIBUTE
                </p>
                <p
                  className="
                    mt-1
                    font-serif
                    text-base
                    font-semibold
                    text-[#571515]
                    sm:text-lg
                  "
                >
                  স্মৃতি • সুৰ • শ্ৰদ্ধা
                </p>
              </div>

              <motion.div
                animate={{
                  opacity: isPlaying ? [0.5, 1, 0.5] : 0.75,
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                }}
                className="
                  flex
                  shrink-0
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-[#8B1515]/15
                  bg-white/75
                  px-2.5
                  py-1.5
                  sm:px-3
                "
              >
                <span
                  className={`
                    h-1.5
                    w-1.5
                    rounded-full
                    sm:h-2
                    sm:w-2
                    ${
                      isPlaying
                        ? "bg-green-500"
                        : "bg-[#8B1515]/40"
                    }
                  `}
                />
                <span className="text-[8px] tracking-wider text-[#571515]/70 sm:text-[9px]">
                  {isPlaying ? "PLAYING" : "READY"}
                </span>
              </motion.div>
            </div>

            {/* Music artwork */}
            <div
              className="
                relative
                mx-auto
                w-full
                overflow-hidden
                rounded-xl
                border
                border-black/5
                bg-[#dfe9df]
                shadow-inner
                sm:rounded-2xl
              "
            >
              <motion.div
                animate={
                  isPlaying
                    ? {
                        scale: [1, 1.012, 1],
                      }
                    : {
                        scale: 1,
                      }
                }
                transition={{
                  duration: 2.2,
                  repeat: isPlaying ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/assets/zubeen da.jpg"
                  alt="Tribute music artwork"
                  className="block h-72 w-full"
                  draggable="false"
                />
              </motion.div>

              {/* Audio-active glow */}
              <AnimatePresence>
                {isPlaying && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-white/2.5
                    "
                  >
                    <motion.div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-20
                        w-20
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        border
                        border-white/50
                        sm:h-28
                        sm:w-28
                      "
                      animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.15, 0.45, 0.15],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Track info */}
            <div className="mt-4">
              <div className="flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[9px] tracking-[0.18em] text-[#8B1515]/55">
                    TRIBUTE MUSIC
                  </p>
                  <h3 className="mt-1 truncate font-serif text-lg font-bold text-[#571515] sm:text-xl">
                    Zubeen Garg
                  </h3>
                </div>

                <p className="shrink-0 text-[10px] tabular-nums text-[#571515]/50 sm:text-xs">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </p>
              </div>

              {/* Progress */}
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleSeek}
                aria-label="Tribute song progress"
                className="
                  mt-4
                  h-1.5
                  w-full
                  cursor-pointer
                  appearance-none
                  rounded-full
                  bg-[#8B1515]/10
                  accent-[#8B1515]
                "
              />

              {/* Controls */}
              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-8 shrink-0 items-end gap-1">
                    {[0, 1, 2, 3, 4].map((bar) => (
                      <motion.span
                        key={bar}
                        className="w-1 rounded-full bg-[#8B1515]/65"
                        animate={
                          isPlaying
                            ? {
                                height: [6, 16, 9, 18, 6],
                              }
                            : {
                                height: 6,
                              }
                        }
                        transition={{
                          duration: 0.7 + bar * 0.1,
                          repeat: isPlaying ? Infinity : 0,
                          delay: bar * 0.07,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>

                  <span className="truncate text-[9px] tracking-widest text-[#571515]/50 sm:text-[10px]">
                    {isPlaying ? "NOW PLAYING" : "PRESS PLAY"}
                  </span>
                </div>

                {/* Play / Pause */}
                <motion.button
                  type="button"
                  onClick={toggleTribute}
                  whileHover={{
                    scale: 1.06,
                    boxShadow:
                      "0 12px 34px rgba(139,21,21,0.25)",
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    bg-[#8B1515]
                    text-white
                    shadow-[0_10px_25px_rgba(139,21,21,0.18)]
                    sm:h-14
                    sm:w-14
                  "
                  aria-label={
                    isPlaying
                      ? "Pause tribute"
                      : "Play tribute"
                  }
                >
                  <motion.span
                    className="absolute inset-0 bg-white/10"
                    animate={{
                      opacity: isPlaying
                        ? [0.1, 0.28, 0.1]
                        : 0.1,
                    }}
                    transition={{
                      duration: 1.3,
                      repeat: isPlaying ? Infinity : 0,
                    }}
                  />

                  <span className="relative z-10 text-lg sm:text-xl">
                    {isPlaying ? "Ⅱ" : "▶"}
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM TRIBUTE MESSAGE
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.9,
        }}
        className="
          relative
          z-10
          mx-auto
          mt-10
          max-w-xl
          text-center
          sm:mt-8
        "
      >
        <p
          className="
            font-serif
            text-[4vw]
            leading-relaxed
            text-[#571515]/80
            sm:text-[2vw]
            md:text-lg
          "
        >
          তেওঁৰ গীত, কণ্ঠ আৰু সুৰৰ মাজেৰে
          স্মৃতিবোৰ সদায় জীৱন্ত হৈ থাকিব।
        </p>

        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#8B1515]/25 sm:w-10" />
          <span className="text-xs text-[#8B1515]/60">✦</span>
          <span className="h-px w-8 bg-[#8B1515]/25 sm:w-10" />
        </div>
      </motion.div>

      {/* =====================================================
          AUDIO
      ====================================================== */}

      <audio
        ref={tributeAudioRef}
        src="/assets/Mayabini Ratir Bukut.mp3"
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleTributeEnd}
      />
    </section>
  );
};

export default ZubeenTribute;
