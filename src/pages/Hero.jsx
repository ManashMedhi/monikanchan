import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

import Animated from "../components/Animated";
import ZubeenTribute from "../components/ZubeenTribute";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  const [song, setSong] = useState(false);

  // Existing Hero/Home background music
  const heroAudioRef = useRef(null);

  const heroRef = useRef(null);

  const playTribute = async () => {
    if (heroAudioRef.current) {
      wasHeroMusicPlaying.current = !heroAudioRef.current.paused;
      heroAudioRef.current.pause();
    }

    try {
      await tributeAudioRef.current?.play();
      setTributePlaying(true);
    } catch (error) {
      console.log("Tribute audio could not start:", error);
    }
  };

  const pauseTribute = () => {
    tributeAudioRef.current?.pause();
    setTributePlaying(false);
  };

  const handleTributeEnd = () => {
    setTributePlaying(false);

    if (wasHeroMusicPlaying.current) {
      heroAudioRef.current?.play().catch(() => {});
    }
  };

  /* =========================================
     SCROLL PARALLAX
  ========================================= */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  const sunY = useTransform(smoothProgress, [0, 1], [0, 180]);
  const cloudY = useTransform(smoothProgress, [0, 1], [0, 100]);
  const japiY = useTransform(smoothProgress, [0, 1], [0, 160]);
  const birdY = useTransform(smoothProgress, [0, 1], [0, 80]);
  const titleY = useTransform(smoothProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={heroRef}
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        items-center

        overflow-hidden
        overflow-x-hidden

        bg-linear-to-b
        from-amber-100
        via-amber-50
        to-amber-50
      "
    >

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <motion.div
        style={{ y: sunY }}
        className="
          pointer-events-none
          absolute
          z-0

          top-[8vh]
          -left-5

          h-30
          w-30

          sm:h-70
          sm:w-70

          md:h-55
          md:w-55

          rounded-full

          bg-white/80
          blur-[10px]

          shadow-[0_0_80px_30px_rgba(255,255,255,0.35)]
        "
      />

      {/* =====================================================
          SECOND SOFT LIGHT
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[20%]
          top-[18%]

          h-20
          w-20

          rounded-full

          bg-white/40
          blur-3xl
        "
      />

      {/* =====================================================
          CLOUD
      ====================================================== */}

      <motion.img
        style={{ y: cloudY }}
        src="/assets/cloud.png"
        alt=""
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 0.8,
          x: 0,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          z-1

          top-[5vh]
          -right-10

          w-55

          sm:w-70
          md:w-100

          max-w-[90vw]

          opacity-80

          animate-cloud
        "
      />

      {/* =====================================================
          SMALL FLOATING PARTICLES
      ====================================================== */}

      {[...Array(12)].map((_, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [-10, -70, -120],
            x: [0, index % 2 === 0 ? 20 : -20, 0],
          }}
          transition={{
            duration: 5 + index * 0.3,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            z-1

            bottom-[20%]

            h-1
            w-1

            rounded-full
            bg-white
          "
          style={{
            left: `${8 + index * 7}%`,
          }}
        />
      ))}

      {/* =====================================================
          JAPi DESIGN
      ====================================================== */}

      <motion.div
        style={{ y: japiY }}
        initial={{
          opacity: 0,
          scale: 0.7,
          rotate: -8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          z-2

          top-[13vh]
          left-[3vw]

          w-[25vw]
          max-w-60

          sm:top-[15vh]
          sm:left-[5vw]
          sm:w-[20vw]

          md:top-[17vh]
          md:left-[7vw]
          md:w-[17vw]

          lg:w-[14vw]
        "
      >
        <motion.img
          src="/assets/taal.png"
          alt=""
          animate={{
            y: [0, -8, 0],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-auto w-full drop-shadow-xl"
        />
      </motion.div>

      {/* =====================================================
          RIGHT SIDE CULTURAL DECORATION
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.4,
          delay: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          right-[3vw]
          top-[15vh]

          z-2
          w-[18vw]
          max-w-55

          md:right-[5vw]
          md:w-[15vw]

          lg:right-[7vw]
          lg:w-[12vw]
        "
      >
        <motion.img
          src="/assets/nagara.png"
          alt=""
          animate={{
            y: [0, -6, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full drop-shadow-2xl"
        />
      </motion.div>

      {/* =====================================================
          TAAL DECORATION
      ====================================================== */}

      <motion.img
        src="/assets/taal.png"
        alt=""
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 0.9,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 1,
        }}
        className="
          pointer-events-none
          absolute
          z-2

          bottom-[25%]
          right-[7%]

          hidden

          sm:block

          w-[14vw]
          max-w-40

          md:w-[11vw]
          lg:w-[9vw]

          drop-shadow-xl
        "
      />

      {/* =====================================================
          SANKARDEV AREA
      ====================================================== */}

      <div
        className="
          relative
          z-10

          flex
          w-full
          min-w-0
          justify-center

          pt-[16vh]

          sm:pt-[20vh]

          md:pt-[30vh]
        "
      >

        {/* =================================================
            BIRDS
        ================================================== */}

        <motion.div
          style={{ y: birdY }}
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            pointer-events-none
            absolute
            z-200

            left-1/2
            top-[7vh]

            h-50
            w-[90vw]

            max-w-100

            -translate-x-1/2
          "
        >
          <DotLottieReact
            src="/animation/Birds.lottie"
            loop
            autoplay
          />
        </motion.div>

        {/* =================================================
            SANKARDEV
        ================================================== */}

        <Animated
          x={0}
          y={-60}
          scale={0.85}
          delay={0.2}
        >
          <motion.img
            src="/assets/Sankardev.png"
            alt="Sankardev"

            initial={{
              opacity: 0,
              y: 100,
              scale: 0.75,
              filter: "blur(10px)",
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}

            transition={{
              duration: 1.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="
              mt-35

              sm:mt-0

              w-[65vw]
              max-w-112.5

              sm:w-[55vw]

              md:w-[45vw]

              lg:w-[35vw]

              h-auto

              drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)]
            "
          />
        </Animated>
      </div>

      {/* =====================================================
          CULTURAL DIVIDER
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 1.2,
        }}
        className="
          relative
          z-10

          mt-[8vh]

          h-px
          w-[65vw]

          bg-linear-to-r
          from-transparent
          via-[#8B1515]/50
          to-transparent
        "
      />

      {/* =====================================================
          ABOUT SECTION
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          mt-[1vh]

          grid
          w-full
          max-w-300

          grid-cols-1

          items-center

          gap-0

          px-[5vw]

          md:grid-cols-2
          md:gap-[3vw]

          min-w-0
        "
      >

        {/* =================================================
            BATADWARA / GROUP PHOTO
        ================================================== */}

        <Animated
          x={-80}
          y={0}
          scale={0.9}
          delay={0.5}
          className="
            flex
            w-full
            min-w-0
            items-center
            justify-center
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
              rotateY: -15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >

            {/* Decorative glow */}

            <div
              className="
                absolute
                -inset-3
                rounded-3xl
                blur-xl
              "
            />

            <motion.img
              src="/assets/grp photo.jpeg"
              alt="Batadwara"

              whileHover={{
                scale: 1.03,
              }}

              transition={{
                duration: 0.4,
              }}

              className="
                relative

                mt-37

                w-[70vw]

                sm:w-[60vw]

                md:w-[42vw]

                lg:w-[35vw]

                h-auto
                max-w-full

                rounded-2xl

                border
                border-white/60

                shadow-[0_25px_60px_rgba(87,21,21,0.2)]
              "
            />

            {/* Japi mini decoration */}

            <motion.img
              src="/assets/design of japi.png"
              alt=""
              animate={{
                y: [0, -7, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                absolute

                -bottom-10
                -right-5

                w-20

                sm:w-24
                md:w-28

                drop-shadow-xl
              "
            />

          </motion.div>

        </Animated>


        {/* =================================================
            ABOUT CONTENT
        ================================================== */}

        <Animated
          x={80}
          y={0}
          delay={0.8}
          className="
            flex
            w-full
            min-w-0

            flex-col
            items-center

            text-center
          "
        >

          {/* =================================================
              ENDING MARK
          ================================================== */}

          <motion.img
            src="/assets/ending mark.png"
            alt=""

            initial={{
              opacity: 0,
              scaleX: 0,
            }}

            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}

            viewport={{
              once: true,
              amount: 0.5,
            }}

            transition={{
              duration: 1,
            }}

            className="
              w-[35vw]
              max-w-70

              sm:w-[30vw]

              md:w-[30vw]

              lg:w-[20vw]

              h-auto
            "
          />

          {/* =================================================
              ABOUT HEADING
          ================================================== */}

          <motion.h1
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
              amount: 0.4,
            }}

            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="
              mb-4

              max-w-full

              text-center

              font-serif
              font-bold

              leading-tight

              text-[clamp(2rem,5vw,4rem)]

              text-[#8B1515]
            "
          >
            About Us

            <span
              className="
                mt-1
                block

                text-[0.65em]
              "
            >
              আমাৰ পৰিচয়
            </span>
          </motion.h1>


          {/* =================================================
              DECORATIVE CULTURAL LINE
          ================================================== */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}

            whileInView={{
              width: "70%",
              opacity: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 1,
              delay: 0.2,
            }}

            className="
              mb-8
              h-px

              bg-linear-to-r
              from-transparent
              via-[#8B1515]
              to-transparent
            "
          />


          {/* =================================================
              ASSAMESE INTRO
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 1,
              delay: 0.3,
            }}

            className="
              mb-6

              w-full
              max-w-137.5

              text-[4vw]

              sm:text-[3vw]

              md:text-[1.8vw]

              lg:text-[1.3vw]

              leading-relaxed

              text-[#571515]

              wrap-break-word
            "
          >
            নমস্কাৰ আৰু আন্তৰিক শুভেচ্ছা।

            <br />
            <br />

            আমাৰ নাম দল অসমৰ নাম-প্ৰসংগ আৰু ভক্তিমূলক
            সংগীতৰ পৰম্পৰাৰ প্ৰতি উৎসৰ্গিত এক সাধাৰণ নাম দল।
            শ্ৰীমন্ত শংকৰদেৱ আৰু শ্ৰীশ্ৰী মাধৱদেৱৰ আধ্যাত্মিক
            আৰু সাংস্কৃতিক আদৰ্শৰ প্ৰতি শ্ৰদ্ধা ৰাখি আমি
            একেলগে নাম-কীৰ্তনত অংশগ্ৰহণ কৰোঁ।

            <br />
            <br />

            আমাৰ দলে বিভিন্ন নাম, বীৰ নাম, পাল নাম আৰু
            অন্যান্য ভক্তিমূলক অনুষ্ঠানত অংশগ্ৰহণ কৰে।
            বিভিন্ন সমাজ, ধৰ্মীয় অনুষ্ঠান আৰু সাংস্কৃতিক
            উপলক্ষত অনুষ্ঠিত নাম-প্ৰসংগত আমি আনন্দ আৰু
            ভক্তিৰে অংশগ্ৰহণ কৰি আহিছোঁ।

            <br />
            <br />

            আমাৰ বাবে নাম কেৱল ভক্তিৰ মাধ্যম নহয়,
            ই মানুহক একেলগে বান্ধি ৰখাৰ এক সুন্দৰ মাধ্যম।
            নগৰা, তাল, খোল আৰু সমূহীয়া নামৰ ধ্বনিয়ে
            আমাৰ মাজত একতা, শান্তি আৰু আপোনত্বৰ অনুভূতি
            জগাই তোলে।

          </motion.p>


          {/* =================================================
              THANK YOU
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              scale: 0.9,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.8,
            }}

            className="
              max-w-xl

              text-center

              font-serif
              italic

              text-[4vw]

              sm:text-[2.5vw]

              md:text-[1.5vw]

              lg:text-[1.1vw]

              text-[#8B1515]
            "
          >
            আমাৰ সৈতে এই সাংস্কৃতিক যাত্ৰাত সংযুক্ত
            হোৱাৰ বাবে আপোনালৈ আন্তৰিক ধন্যবাদ। 🙏
          </motion.p>

        </Animated>

      </div>


      {/* =====================================================
          FLOATING CULTURAL ELEMENTS
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}

        whileInView={{
          opacity: 1,
        }}

        viewport={{
          once: true,
        }}

        className="
          pointer-events-none
          relative
          z-10

          mt-24

          flex
          items-center
          justify-center

          gap-8

          opacity-80
        "
      >

        {/* NAGARA */}

        <motion.img
          src="/assets/nagara.png"
          alt="Nagara"

          animate={{
            y: [0, -8, 0],
            rotate: [-2, 2, -2],
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
            w-20

            sm:w-24

            md:w-28
          "
        />

        {/* TAAL */}

        <motion.img
          src="/assets/taal.png"
          alt="Taal"

          animate={{
            y: [0, 8, 0],
            rotate: [2, -2, 2],
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}

          className="
            w-16

            sm:w-20

            md:w-24
          "
        />

        {/* JAPI */}

        <motion.img
          src="/assets/design of japi.png"
          alt="Japi"

          animate={{
            y: [0, -10, 0],
            rotate: [-3, 3, -3],
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}

          className="
            w-20

            sm:w-24

            md:w-28
          "
        />

      </motion.div>


      {/* =====================================================
          FINAL CULTURAL MESSAGE
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
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
          duration: 1.2,
        }}

        className="
          relative
          z-10

          mx-auto

          mt-20

          mb-20

          w-[85vw]

          max-w-4xl

          text-center
        "
      >

        <p
          className="
            font-serif

            text-[4vw]

            sm:text-[2.5vw]

            md:text-[1.7vw]

            lg:text-[1.2vw]

            leading-relaxed

            text-[#571515]
          "
        >
          Through traditional art forms, music, dance and
          cultural expressions, we create a space where
          heritage meets the present.
        </p>

        <p
          className="
            mt-4

            font-serif

            text-[5vw]

            sm:text-[3vw]

            md:text-[2vw]

            lg:text-[1.5vw]

            font-semibold

            text-[#8B1515]
          "
        >
          সংস্কৃতি • ভক্তি • ঐতিহ্য
        </p>

      </motion.div>



      {/* =====================================================
          ZUBEEN GARG TRIBUTE COMPONENT
      ====================================================== */}

      <ZubeenTribute pageAudioRef={heroAudioRef} />

      {/* =====================================================
          AUDIO
      ====================================================== */}

      <audio
        ref={heroAudioRef}
        src="/assets/music.mp3"
        loop
        autoPlay={song}
      />

    </section>
  );
};

export default Hero;