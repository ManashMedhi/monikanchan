import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import MagazineViewer from "../components/MagazineViewer";

const About = () => {
  const { scrollYProgress } = useScroll();

  // =========================================================
  // HERO PARALLAX
  // =========================================================

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, -180]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1, 1.12]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, -80]
  );

  return (
    
    <main className="relative overflow-hidden bg-[#fffdf8] text-[#571515]">

      {/* =====================================================
          GAMOSA SIDE BORDERS
      ===================================================== */}

      <img
        src="/assets/gamosa-left.png"
        alt=""
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-50
          h-screen
          w-6
          object-fill

          sm:w-8
          md:w-10
          lg:w-14
          xl:w-16
        "
      />

      <img
        src="/assets/gamosa-right.png"
        alt=""
        className="
          pointer-events-none
          fixed
          right-0
          top-0
          z-50
          h-screen
          w-6
          object-fill

          sm:w-8
          md:w-10
          lg:w-14
          xl:w-16
        "
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          overflow-hidden
          px-6
          sm:px-10
        "
      >

        {/* Satra background */}

        <motion.img
          src="/assets/gallery photo.png"
          alt=""
          style={{
            y: heroY,
            scale: heroScale,
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[15%]
            w-[95vw]
            max-w-275
            -translate-x-1/2
            object-contain
            opacity-[0.16]

            sm:w-[80vw]
            md:w-[68vw]
            lg:w-[60vw]
          "
        />

        {/* Japi */}

        <motion.img
          src="/assets/design of japi.png"
          alt="Japi"
          initial={{
            opacity: 0,
            y: -80,
            rotate: -15,
          }}
          animate={{
            opacity: 0.8,
            y: 0,
            rotate: -1,
          }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 80,
          }}
          whileHover={{
            y: 20,
            rotate: 7,
            scale: 1.08,
          }}
          className="
            absolute
            right-[6%]
            top-20
            z-20
            w-20
            cursor-pointer
            object-contain

            sm:right-[8%]
            sm:w-28

            md:w-36

            lg:right-[9%]
            lg:top-24
            lg:w-48

            xl:w-52
          "
        />

        {/* Hero content */}

        <motion.div
          style={{ y: titleY }}
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-6xl
            flex-col
            items-center
            px-6
            text-center

            sm:px-10
          "
        >

          {/* Ending mark */}

          <motion.img
            src="/assets/ending mark.png"
            alt=""
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
            }}
            className="
              mx-auto
              mb-8
              w-24

              sm:w-32
              md:w-40
            "
          />

          {/* Small heading */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="
              mb-4
              text-xs
              uppercase
              tracking-[0.45em]
              text-[#a91616]

              sm:text-sm
              sm:tracking-[0.5em]
            "
          >
            Our Story
          </motion.p>

          {/* Main Assamese heading */}

          <motion.h1
  initial={{
    opacity: 0,
    y: 50,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
    delay: 0.2,
    ease: "easeOut",
  }}
  className="
    relative
    z-10
    px-2
    font-serif
    text-5xl
    font-bold
    leading-[1.2]
    tracking-wide
    text-[#8B1515]

    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl
  "
>
  আমাৰ পৰিচয়
</motion.h1>

          {/* English subtitle */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            className="
              mt-4
              font-serif
              text-2xl
              italic
              text-[#6d3c2c]

              sm:text-3xl
              md:text-4xl
            "
          >
            About Monikanchan Bir Naam Dol
          </motion.h2>

          {/* Red line */}

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "180px",
            }}
            transition={{
              delay: 1.2,
              duration: 1,
            }}
            className="
              mx-auto
              mt-8
              h-0.5
              bg-[#a91616]
            "
          />

        </motion.div>

        {/* Scroll indicator */}

        <motion.div
          animate={{
            y: [0, 12, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            text-center
          "
        >
          <span className="text-xs uppercase tracking-[0.4em]">
            Scroll
          </span>

          <div className="mx-auto mt-3 h-10 w-px bg-[#a91616]" />
        </motion.div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        className="
          relative
          px-6
          py-24

          sm:px-10
          sm:py-28

          md:px-16
          md:py-32

          lg:px-20
          lg:py-40

          xl:px-24
        "
      >

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-6xl
            items-center

            gap-14

            md:grid-cols-[0.85fr_1.15fr]
            md:gap-16

            lg:grid-cols-2
            lg:gap-24

            xl:gap-28
          "
        >

          {/* =================================================
              SATRIYA IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -100,
              rotate: -5,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            className="
              relative
              flex
              justify-center

              md:justify-end
              lg:justify-center
            "
          >

            <div
              className="
                absolute
                h-64
                w-64
                rounded-full
                border
                border-[#a91616]/20

                sm:h-72
                sm:w-72

                md:h-80
                md:w-80
              "
            />

            <img
              src="/assets/Satriya dance l.png"
              alt="Satriya dancer"
              className="
                relative
                z-10
                w-44
                object-contain

                sm:w-56
                md:w-64
                lg:w-72
              "
            />

          </motion.div>


          {/* =================================================
              TEXT
          ================================================= */}

        {/* =================================================
    TEXT
================================================= */}

<motion.div
  initial={{
    opacity: 1,
    x: 0,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{
    once: true,
    amount: 0.05,
  }}
  transition={{
    duration: 0.8,
  }}
  className="
    mx-auto
    w-full
    max-w-xl
    min-w-0
    md:mx-0
  "
>

  {/* Small heading */}
  <p
    className="
      mb-3
      text-sm
      uppercase
      tracking-[0.4em]
      text-[#a91616]
    "
  >
    Who We Are
  </p>


  {/* Main heading */}
  <h2
    className="
      font-serif
      text-4xl
      font-bold
      leading-tight
      text-[#8B1515]

      sm:text-5xl
      md:text-6xl
    "
  >
    Culture lives
    <br />
    through us.
  </h2>


  {/* Decorative line */}
  <div className="mt-7 h-px w-24 bg-[#c98b5b]" />


  {/* =================================================
      ENGLISH SECTION
  ================================================= */}

  <div
    className="
      mt-7
      text-base
      leading-8
      text-[#571515]/80
      sm:text-lg
    "
  >

    {/* English Welcome */}
    <p
      className="
        mb-6
        text-center
        font-serif
        font-semibold
        text-lg
        text-[#8B1515]
        sm:text-xl
      "
    >
      Namaskar and heartfelt greetings to everyone.
    </p>


    {/* Paragraph 1 */}
    <p>
      Our Naam Dal is a humble group devoted to the tradition of
      Naam-Prasanga and devotional music of Assam. We come together
      with faith, devotion, and a deep respect for the spiritual
      heritage of Srimanta Sankardev and Madhavdev.
    </p>


    {/* Paragraph 2 */}
    <p className="mt-5">
      Our group regularly participates in Naam, Bir Naam, Pal Naam,
      and other traditional devotional gatherings. Through these
      programmes, we try to preserve the beautiful tradition of
      collective prayer and Naam-Kirtan.
    </p>


    {/* Paragraph 3 */}
    <p className="mt-5">
      We participate in Naam-Prasangas held in different communities,
      cultural occasions, and religious gatherings. For us, Naam is
      not only a form of devotion but also a way of bringing people
      together.
    </p>


    {/* Paragraph 4 */}
    <p className="mt-5">
      The rhythm of the Nagara, Taal, Khol, and the collective voice
      of Naam create a sense of unity and belonging. We believe that
      these traditions should continue to reach younger generations.
    </p>


    {/* Paragraph 5 */}
    <p className="mt-5">
      Our members learn, practise, and perform with sincerity while
      respecting the traditional style of Naam. We also value the
      spirit of community, humility, discipline, and togetherness
      that comes with Naam-Prasanga.
    </p>


    {/* Paragraph 6 */}
    <p className="mt-5">
      Through every gathering and performance, we hope to keep our
      cultural roots alive. Our journey is a small contribution
      towards preserving and sharing the rich devotional culture
      of Assam.
    </p>


    {/* English Thank You */}
    <p
      className="
        mt-7
        text-center
        font-serif
        font-semibold
        text-[#8B1515]
      "
    >
      Thank you sincerely for being a part of our cultural journey.
    </p>

  </div>


  {/* =================================================
      ASSAMESE SECTION
  ================================================= */}

  <div
    className="
      mt-12
      text-base
      leading-8
      text-[#571515]/80
      sm:text-lg
    "
  >
     <img src="/assets/ending mark.png" alt="" 
     className="-mt-40"/>
    {/* Assamese Welcome */}
    <p
      className="
        -mt-25
        mb-6
        text-center
        font-serif
        font-semibold
        text-lg
        text-[#8B1515]
        sm:text-xl
      "
    >
      নমস্কাৰ আৰু আন্তৰিক শুভেচ্ছা।
    </p>


    {/* Paragraph 1 */}
    <p>
      আমাৰ নাম দল অসমৰ নাম-প্ৰসংগ আৰু ভক্তিমূলক সংগীতৰ পৰম্পৰাৰ
      প্ৰতি উৎসৰ্গিত এক সাধাৰণ নাম দল। শ্ৰীমন্ত শংকৰদেৱ আৰু
      শ্ৰীশ্ৰী মাধৱদেৱৰ আধ্যাত্মিক আৰু সাংস্কৃতিক আদৰ্শৰ প্ৰতি
      শ্ৰদ্ধা ৰাখি আমি একেলগে নাম-কীৰ্তনত অংশগ্ৰহণ কৰোঁ।
    </p>


    {/* Paragraph 2 */}
    <p className="mt-5">
      আমাৰ দলে বিভিন্ন নাম, বীৰ নাম, পাল নাম আৰু অন্যান্য
      ভক্তিমূলক অনুষ্ঠানত অংশগ্ৰহণ কৰে। বিভিন্ন সমাজ, ধৰ্মীয়
      অনুষ্ঠান আৰু সাংস্কৃতিক উপলক্ষত অনুষ্ঠিত নাম-প্ৰসংগত
      আমি আনন্দ আৰু ভক্তিৰে অংশগ্ৰহণ কৰি আহিছোঁ।
    </p>


    {/* Paragraph 3 */}
    <p className="mt-5">
      আমাৰ বাবে নাম কেৱল ভক্তিৰ মাধ্যম নহয়, ই মানুহক একেলগে
      বান্ধি ৰখাৰ এক সুন্দৰ মাধ্যম। নগৰা, তাল, খোল আৰু সমূহীয়া
      নামৰ ধ্বনিয়ে আমাৰ মাজত একতা, শান্তি আৰু আপোনত্বৰ অনুভূতি
      জগাই তোলে।
    </p>


    {/* Paragraph 4 */}
    <p className="mt-5">
      নতুন প্ৰজন্মৰ মাজলৈ আমাৰ এই চহকী পৰম্পৰা আগবঢ়াই নিয়াটো
      আমি এক গুৰুত্বপূৰ্ণ দায়িত্ব বুলি বিশ্বাস কৰোঁ। আমাৰ
      সদস্যসকলে নিষ্ঠা আৰু শ্ৰদ্ধাৰে নামৰ পৰম্পৰাগত শৈলী শিকে,
      অনুশীলন কৰে আৰু পৰিৱেশন কৰে।
    </p>


    {/* Paragraph 5 */}
    <p className="mt-5">
      নাম-প্ৰসংগৰ মাজেৰে গঢ় লৈ উঠা বিনয়, শৃংখলা, একতা আৰু
      ভাতৃত্ববোধক আমি বিশেষভাৱে মূল্য দিওঁ। প্ৰতিটো নাম আৰু
      প্ৰতিটো অনুষ্ঠানৰ জৰিয়তে আমি আমাৰ শিপা, পৰিচয় আৰু
      সাংস্কৃতিক ঐতিহ্যক জীয়াই ৰাখিবলৈ চেষ্টা কৰোঁ।
    </p>


    {/* Paragraph 6 */}
    <p className="mt-5">
      অসমৰ চহকী ভক্তিমূলক আৰু সাংস্কৃতিক পৰম্পৰাক সংৰক্ষণ আৰু
      আগবঢ়াই নিয়াৰ এই যাত্ৰাত আমাৰ প্ৰচেষ্টা এক সৰু অৱদান।
    </p>


    {/* Assamese Thank You */}
    <p
      className="
        mt-7
        text-center
        font-serif
        font-semibold
        text-[#8B1515]
      "
    >
      আমাৰ সৈতে এই সাংস্কৃতিক যাত্ৰাত সংযুক্ত হোৱাৰ বাবে
      আপোনালৈ আন্তৰিক ধন্যবাদ।
    </p>


    {/* Final Dhanyabad */}
    <p
      className="
        mt-2
        text-center
        font-serif
        text-lg
        font-bold
        text-[#8B1515]
      "
    >
      ধন্যবাদ। 🙏
    </p>

  </div>


  {/* =================================================
      CLOSING MESSAGE
  ================================================= */}

  <p
    className="
      mt-8
      border-t
      border-[#c98b5]/40
      pt-6
      text-center
      text-base
      leading-8
      text-[#571515]/70
      sm:text-lg
    "
  >
    Through traditional art forms, music, dance and cultural
    expressions, we create a space where heritage meets the present.
  </p>

</motion.div>

        </div>

      </section>



      {/* =====================================================
          MAGAZINE
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          px-6
          py-20
          sm:px-10
          sm:py-24
          md:px-16
          md:py-28
          lg:px-20
          lg:py-32
          xl:px-24
        "
      >
        <div className="mx-auto w-full max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-10 text-center sm:mb-12"
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#a91616]
                sm:text-sm
                sm:tracking-[0.4em]
              "
            >
              Our Magazine
            </p>

            <h2
              className="
                mt-3
                font-serif
                text-3xl
                font-bold
                leading-tight
                text-[#8B1515]
                sm:text-4xl
                md:text-5xl
              "
            >
              আমাৰ স্মৃতিৰ পৃষ্ঠা
            </h2>

            <div className="mx-auto mt-5 h-px w-20 bg-[#a91616] sm:w-28" />

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-[#571515]/70
                sm:text-base
                sm:leading-8
              "
            >
              Explore our magazine and turn through its pages to discover
              moments, stories and memories from our cultural journey.
            </p>
          </motion.div>

          <MagazineViewer
            pdfSrc="/assets/Magazine.pdf"
            coverSrc="/assets/magazine-cover-photo.webp"
            title="মণিকাঞ্চন"
            subtitle="আমাৰ সাংস্কৃতিক স্মৃতি"
          />

        </div>
      </section>


      {/* =====================================================
          CULTURAL ELEMENTS
      ===================================================== */}

      <section
        className="
          relative
          bg-[#f8eee4]
          px-6
          py-20

          sm:px-10
          sm:py-28

          md:px-16
          md:py-32

          lg:px-20
          lg:py-36

          xl:px-24
        "
      >

        <div className="mx-auto w-full max-w-6xl">

          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              mb-14
              text-center

              sm:mb-16
              md:mb-20
            "
          >

            <p
              className="
                text-sm
                uppercase
                tracking-[0.4em]
                text-[#a91616]
              "
            >
              Our Heritage
            </p>

            <h2
              className="
                mt-4
                font-serif
                text-4xl
                font-bold
                text-[#8B1515]

                sm:text-5xl
                md:text-6xl
              "
            >
              The soul of Assam
            </h2>

          </motion.div>


          {/* Cards */}

          <div
            className="
              grid
              gap-6
              sm:gap-8
              md:grid-cols-3
              md:gap-8

              lg:gap-10
            "
          >

            <CultureCard
              image="/assets/design of japi.png"
              title="Japi"
              text="A distinctive symbol of Assamese tradition and identity."
              delay={0}
            />

            <CultureCard
              image="/assets/nagara.png"
              title="Nagara"
              text="Traditional rhythm that brings energy to cultural celebrations."
              delay={0.15}
            />

            <CultureCard
              image="/assets/taal.png"
              title="Taal"
              text="Rhythm and movement woven into Assamese musical traditions."
              delay={0.3}
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          SATRA SECTION
          ONLY ONE SATRA IMAGE
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          px-6
          py-24

          sm:px-10
          sm:py-28

          md:px-16
          md:py-32

          lg:px-20
          lg:py-40

          xl:px-24
        "
      >

        {/* =================================================
            IMPORTANT:
            The old large faded background Satra image
            has been completely removed.
            Only ONE image is rendered below.
        ================================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-6xl
            text-center
          "
        >

          {/* Single Satra image */}

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1.2,
              type: "spring",
            }}
            className="
              mx-auto
              flex
              justify-center
            "
          >

            <motion.img
              src="/assets/gallery photo.png"
              alt="Satra"
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                w-full
                max-w-162.5
                rounded-4xl
                object-contain
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-amber-50

                sm:w-[85%]
                md:w-[70%]
                lg:w-162.5
              "
            />

          </motion.div>


          {/* Heading */}

          <motion.p
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
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="
              mt-12
              font-serif
              text-3xl
              font-bold
              text-[#8B1515]

              sm:text-4xl
              md:text-5xl
            "
          >
            Heritage that continues.
          </motion.p>


          {/* Description */}

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
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-[#571515]/75

              sm:text-lg
            "
          >
            Our heritage is not simply something preserved in the
            past. It continues through people, art, music,
            traditions and generations.
          </motion.p>

        </div>

      </section>


      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}

      <section
        className="
        rounded-t-full
          relative
          flex
          min-h-[70vh]
          items-center
          justify-center
          overflow-hidden
          bg-[#2f3944]
          px-6
          py-28
          text-center
          sm:px-10
        "
      >

        {/* Right dancer */}

        <motion.img
          src="/assets/Satriya dance R.png"
          alt=""
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 0.35,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            absolute
            right-[2%]
            bottom-0
            w-32
            object-contain

            sm:right-[3%]
            sm:w-44

            md:w-60

            lg:w-72
          "
        />

        {/* Left dancer */}

        <motion.img
          src="/assets/Satriya dance l.png"
          alt=""
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 0.35,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            absolute
            left-[2%]
            bottom-0
            w-32
            object-contain

            sm:left-[3%]
            sm:w-44

            md:w-60

            lg:w-72
          "
        />


        {/* Center content */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            type: "spring",
          }}
          className="
            relative
            z-10
            w-full
            max-w-4xl
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.4em]
              text-white/70

              sm:text-sm
              sm:tracking-[0.5em]
            "
          >
            Monikanchan
          </p>

          <h2
            className="
              mt-6
              font-serif
              text-5xl
              font-bold
              text-white

              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            আমাৰ সংস্কৃতি
          </h2>

          <p
            className="
              mt-5
              text-xl
              italic
              text-white/80

              sm:text-2xl
            "
          >
            Our culture. Our identity.
          </p>

          <div className="mx-auto mt-10 h-px w-32 bg-white/50" />

        </motion.div>

      </section>

    </main>
  );
};


// =========================================================
// CULTURE CARD
// =========================================================

const CultureCard = ({
  image,
  title,
  text,
  delay,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        rotateX: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay,
        duration: 0.9,
        type: "spring",
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-[#a91616]/10
        bg-[#fffdf8]
        p-5
        shadow-lg
        transition-shadow
        duration-500
        hover:shadow-2xl

        sm:p-6
      "
    >

      {/* Image */}

      <div
        className="
          flex
          h-52
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          bg-[#f5e9dc]

          sm:h-60
        "
      >

        <motion.img
          src={image}
          alt={title}
          whileHover={{
            scale: 1.12,
            rotate: 3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            h-full
            w-full
            object-contain
            p-8
          "
        />

      </div>


      {/* Title */}

      <h3
        className="
          mt-6
          font-serif
          text-2xl
          font-bold
          text-[#8B1515]
        "
      >
        {title}
      </h3>


      {/* Description */}

      <p
        className="
          mt-3
          leading-7
          text-[#571515]/70
        "
      >
        {text}
      </p>


      {/* Bottom animation */}

      <div
        className="
          mt-6
          h-0.5
          w-10
          bg-[#c98b5b]
          transition-all
          duration-500
          group-hover:w-20
        "
      />

    </motion.div>
  );
};

export default About;