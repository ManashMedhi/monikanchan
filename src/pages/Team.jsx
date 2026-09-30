import React, { useState } from "react";
import { motion } from "motion/react";

const Team = () => {
  // const [japiClicked, setJapiClicked] = useState(false);

  // ...
  // =====================================================
  // TEAM MEMBERS
  // =====================================================

  const pathak = [
    {
      name: "Achyut Das / অচ্যুত দাস",
      image: "/assets/team/dhonda.png",
    },
  ];

  const nagara = [
    {
      name: "Bishnu Kalita / বিষ্ণু কলিতা",
      image: "/assets/team/sukuna da.webp",
    },
    {
      name: "Hridoy Das / হৃদয় দাস",
      image: "/assets/team/papu da.webp",
    },
  ];

  const taal = [
    {
      name: " Lt.Hitesh Kalita/ স্বৰ্গীয় হিতেশ কলিতা",
      image: "/assets/team/garu khura.png",
    },
    {
      name: "Jayanta Das / জয়ন্ত দাস",
      image: "/assets/team/jd1.jpeg",
    },
    {
      name: " Biplob Das/বিপ্লৱ দাস",
      image: "/assets/team/biplob da.webp",
    },
    {
      name: "Sourav Das / সৌৰভ দাস",
      image: "/assets/team/rinku da1.webp",
    },
    {
      name: "Mridul Das / মৃদুল দাস",
      image: "/assets/team/mridul da.webp",
    },
    {
      name: "Bhuban Kalita / ভূবন কলিতা",
      image: "/assets/team/budu.webp",
    },
    {
      name: "Hridoy Das / হৃদয় দাস",
      image: "/assets/team/papu da.webp",
    },
    {
      name: "Tapan Kalita / তপন কলিতা",
      image: "/assets/team/topon da.webp",
    },
    {
      name: "Harjit Kalita / হৰজিৎ কলিতা",
      image: "/assets/team/lithu da.webp",
    },
    {
      name: "Debashis Das / দেবাশিষ দাস",
      image: "/assets/team/Taku da.webp",
    },
    {
      name: "Kaushik Kalita / কৌশিক কলিতা",
      image: "/assets/team/kaushik.png",
    },
    {
      name: "Nipon Das / নিপন দাস",
      image: "/assets/team/anku da.webp",
    },
    {
      name: "Zintu Kalita / জিণ্টু কলিতা",
      image: "/assets/team/zintu.webp",
    },
    {
      name: "Kapil Das / কপিল দাস",
      image: "/assets/team/kopil.webp",
    },
    {
      name: "Hrishikesh Medhi / ঋষিকেশ মেধী",
      image: "/assets/team/hitu.jpeg",
    },
    {
      name: "John Das / জন দাস",
      image: "/assets/team/john.webp",
    },
    {
      name: "Manash Jyoti Medhi / মানস জ্যোতি মেধী",
      image: "/assets/team/manash1.webp",
    },
  ];
  
  const socialMedia = [
    {
      name: "Bhargab Jyoti Kalita / ভৰ্গৱ জ্যোতি কলিতা",
      image: "/assets/team/bhargab.webp",
    },
    {
      name: "Joydeep Das / জয়দ্ধীপ দাস",
      image: "/assets/team/joydeep.webp",
    },
  ];
  const Pali = [
    {
      name: "Niranjan Das / নিৰঞ্জন দাস",
      image: "/assets/team/niru jetha.webp",
    },
    {
      name: "Barun Das / বৰুণ দাস",
      image: "/assets/team/bd.webp",
    },
    {
      name: "Pradip Das/ প্ৰদীপ দাস",
      image: "/assets/team/prodip da.webp",
    },
    {
      name: "Bhargab Jyoti Kalita / ভৰ্গৱ জ্যোতি কলিতা",
      image: "/assets/team/bhargab.webp",
    },
    {
      name: "Joydeep Das / জয়দ্ধীপ দাস",
      image: "/assets/team/joydeep.webp",
    },
    {
      name: "Tarun Ch. Kalita / তৰুণ চন্দ্ৰ কলিতা",
      image: "/assets/team/sutu da.webp",
    },
    {
      name: "Binondo Das / বিনন্দ দাস",
      image: "/assets/team/biki.webp",
    },
    {
      name: "Kalyan Kalita / কল্যাণ কলিতা",
      image: "/assets/team/kalyan.webp",
    },
    {
      name: "Utpal Kalita / উৎপল কলিতা",
      image: "/assets/team/bapi da.jpeg",
    },
    {
     name: "Tapash Das / তাপশ দাস",
     image: "/assets/team/tapash.webp",
   },
    {
  name: "Ratul Das / ৰতুল দাস",
  image: "/assets/team/ratul.webp",
},
{
  name: "Bishal Das / বিশাল দাস",
  image: "/assets/team/Bishal.webp",
},
{
  name: "Kaushik Das/ কৌশিক দাস ",
  image: "/assets/team/kd.jpeg",
},
{
  name: "Dilip Das/ দিলীপ দাস ",
  image: "/assets/team/dilip.jpeg",
},
{
  name: "Dhruba Jyoti Kalita / ধ্ৰুৱজ্যোতি কলিতা",
  image: "/assets/team/dhurup.webp",
},
{
  name: "Debobrata Kalita / দেৱব্ৰত কলিতা",
  image: "/assets/team/debo.webp",
},
  ];

  const Tech = [
    {
      name: "Manash Jyoti Medhi / মানস জ্যোতি মেধী",
      image: "/assets/team/manash1.webp",
    },
  ];

  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#fffdf8]
      "
    >
      {/* =====================================================
          LEFT GAMOSA
          ===================================================== */}

      <img
        src="/assets/gamosa-left.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-30
          h-full
          w-8
          object-fill
          opacity-95

          sm:w-11
          md:w-14
          lg:w-17
        "
      />

      {/* =====================================================
          RIGHT GAMOSA
          ===================================================== */}

      <img
        src="/assets/gamosa-right.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-30
          h-full
          w-8
          object-fill
          opacity-95

          sm:w-11
          md:w-14
          lg:w-17
        "
      />

      {/* =====================================================
          TOP RED BORDER
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          z-30
          h-1
          bg-[#a91616]

          sm:h-1.25
        "
      />

      {/* =====================================================
          BOTTOM RED BORDER
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-30
          h-1
          bg-[#a91616]

          sm:h-1.25
        "
      />

      {/* =====================================================
          JAPI DECORATION
          ===================================================== */}

      <motion.img
  src="/assets/design of japi.png"
  alt="Japi"
  initial={{
    opacity: 0,
    y: -20,
    rotate: -8,
  }}
  whileInView={{
    opacity: 0.90,
    y: 0,
    rotate: 0,
  }}
  whileHover={{
    y: 12,
    rotate: 8,
    scale: 1.08,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    type: "spring",
    stiffness: 200,
    damping: 15,
  }}
  className="
    pointer-events-auto
    absolute
    right-[6%]
    top-16
    z-20
    w-24
    cursor-pointer
    object-contain

    sm:w-32
    md:w-40
    lg:w-48
  "
/>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-10
          py-20

          sm:px-16
          sm:py-24

          md:px-24
          md:py-28

          lg:px-28
        "
      >
        {/* =================================================
            TEAM TITLE
            ================================================= */}

        <motion.div
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
            duration: 0.8,
          }}
          className="
            relative
            mx-auto
            mb-12
            max-w-4xl
            text-center
          "
        >
          {/* Ending decoration */}

          <img
            src="/assets/ending mark.png"
            alt=""
            className="
              mx-auto
              mb-6
              w-28
              opacity-90

              sm:w-36
              md:w-44
            "
          />

          {/* Main heading */}

          <h1
            className="
              font-serif
              text-4xl
              font-semibold
              tracking-wide
              text-[#a91616]

              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            মনিকাঞ্চন বীৰ নাম দল
          </h1>

          {/* Assamese heading */}

          <p
            className="
              mt-3
              font-serif
              text-lg
              text-[#6d3c2c]

              sm:text-xl
              md:text-2xl
            "
          >
            আমাৰ দল
          </p>

          {/* Decorative line */}

          <div
            className="
              mx-auto
              mt-7
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-12 bg-[#a91616]/50 sm:w-20" />

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#a91616]/40
                text-sm
                text-[#a91616]
              "
            >
              ✦
            </span>

            <span className="h-px w-12 bg-[#a91616]/50 sm:w-20" />
          </div>
        </motion.div>

        {/* =================================================
            SATRA IMAGE
            BETWEEN TEAM TITLE AND PATHAK
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            relative
            z-10
            mx-auto
            mb-20
            flex
            justify-center
          "
        >
          <img
            src="/assets/grp photo.jpeg"
            alt="Satra"
            className="
  overflow-hidden
  w-[78vw]
  max-w-162.5
  object-contain
  opacity-90
  rounded-4xl

  shadow-md

  transition-all
  duration-300
  ease-in-out

  hover:-translate-y-2
  hover:scale-[1.03]
  hover:shadow-xl
  hover:shadow-gray-200

  sm:w-[68vw]
  md:w-[58vw]
  lg:w-[50vw]
"
          />
        </motion.div>

        {/* =================================================
            PATHAK
            ================================================= */}

        <TeamGroup
          title="পাঠক"
          subtitle="Pathak"
          members={pathak}
          leftDecoration="/assets/Satriya dance l.png"
          rightDecoration="/assets/Satriya dance R.png"
        />

        {/* =================================================
            NAGARA
            ================================================= */}

        <TeamGroup
          title="নাগাৰা"
          subtitle="Nagara"
          members={nagara}
          leftDecoration="/assets/nagara.png"
          rightDecoration="/assets/nagara.png"
        />

        {/* =================================================
            TAAL
            ================================================= */}

        <TeamGroup
          title="তাল"
          subtitle="Taal"
          members={taal}
          leftDecoration="/assets/taal.png"
          rightDecoration="/assets/taal.png"
          isTaal
        />

        {/* =================================================
            SOCIAL MEDIA
            ================================================= */}
     {/* pali  */}


     <TeamGroup
          title="পালি"
          subtitle="Pali"
          members={Pali}
          leftDecoration="/assets/Satriya dance l.png"
          rightDecoration="/assets/Satriya dance R.png"
        />
        <TeamGroup
          title="ছ'চিয়েল মিডিয়া"
          subtitle="Social Media"
          members={socialMedia}
          leftDecoration="/assets/Satriya dance l.png"
          rightDecoration="/assets/Satriya dance R.png"
        />
        <TeamGroup
          title="টেক"
          subtitle="Tech"
          members={Tech}
          leftDecoration="/assets/Satriya dance l.png"
          rightDecoration="/assets/Satriya dance R.png"
        />
      </div>
    </section>
  );
};


// =========================================================
// TEAM GROUP
// =========================================================

const TeamGroup = ({
  title,
  subtitle,
  members,
  leftDecoration,
  rightDecoration,
  isTaal = false,
}) => {
  let gridClass = "";

  if (members.length === 1) {
    gridClass = "grid-cols-1";
  } else if (members.length === 2) {
    gridClass = "grid-cols-1 sm:grid-cols-2";
  } else {
    // Taal gets 2 columns on mobile with extra spacing
    gridClass =
      "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";
  }

  return (
    <div
      className={`
        mb-28
        last:mb-0
        ${isTaal ? "mb-32 sm:mb-28" : ""}
      `}
    >
      {/* =================================================
          GROUP HEADING
          ================================================= */}

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
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          mb-12
          flex
          items-center
          justify-center
          gap-2

          sm:gap-4
          md:gap-6
        "
      >
        {/* LEFT DECORATION */}

        <motion.img
          src={leftDecoration}
          alt=""
          initial={{
            opacity: 0,
            x: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            h-auto
            w-14
            shrink-0
            object-contain

            sm:w-20
            md:w-24
            lg:w-28
          "
        />

        {/* TITLE */}

        <div className="min-w-0 text-center">
          <h2
            className="
              font-serif
              text-2xl
              font-semibold
              text-[#a91616]

              sm:text-3xl
              md:text-4xl
            "
          >
            {title}
          </h2>

          <p
            className="
              mt-1
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#6d3c2c]/70

              sm:text-xs
              md:text-sm
            "
          >
            {subtitle}
          </p>
        </div>

        {/* RIGHT DECORATION */}

        <motion.img
          src={rightDecoration}
          alt=""
          initial={{
            opacity: 0,
            x: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            h-auto
            w-14
            shrink-0
            object-contain

            sm:w-20
            md:w-24
            lg:w-28
          "
        />
      </motion.div>

      {/* =================================================
          MEMBERS GRID
          ================================================= */}

      <div
        className={`
          mx-auto
          grid
          ${gridClass}
          max-w-6xl
          items-start
          justify-items-center

          ${
            isTaal
              ? `
                gap-x-5
                gap-y-14

                sm:gap-x-8
                sm:gap-y-14

                md:gap-x-10
                md:gap-y-16

                lg:gap-x-12
                lg:gap-y-16
              `
              : `
                gap-x-5
                gap-y-12

                sm:gap-x-8
                sm:gap-y-14

                md:gap-x-10
                lg:gap-x-12
              `
          }
        `}
      >
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              delay: Math.min(index * 0.04, 0.4),
              duration: 0.6,
            }}
            className={`
              group
              flex
              w-full
              flex-col
              items-center
              max-w-44
            `}
          >
            {/* =================================================
                MEMBER IMAGE
                ================================================= */}

            <div
              className="
                relative
                w-full
                max-w-38
                overflow-hidden
                border
                border-[#a91616]/20
                bg-[#fffaf2]
                p-1.5
                shadow-[0_8px_24px_rgba(87,21,21,0.10)]
                backdrop-blur-[2px]
                transition-all
                duration-500
                group-hover:-translate-y-2
                group-hover:shadow-[0_16px_32px_rgba(87,21,21,0.16)]
                aspect-4/5
                rounded-t-[4rem]
                sm:max-w-40
                sm:p-2
                sm:rounded-t-[5rem]
                md:max-w-44
                md:rounded-t-[5.5rem]
              "
            >
              <div
                className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-t-[3.25rem]
                  border
                  border-[#c98b5b]/30
                  bg-[#f7ecdf]
                  sm:rounded-t-[4rem]
                  md:rounded-t-[4.5rem]
                "
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>
            </div>

            {/* =================================================
                MEMBER NAME
                ================================================= */}

            <div className="mt-4 text-center">
              <h3
                className="
                  font-serif
                  text-sm
                  font-semibold
                  text-[#8B1515]

                  sm:text-base
                  md:text-lg
                "
              >
                {member.name}
              </h3>

              <div
                className="
                  mx-auto
                  mt-2
                  h-px
                  w-8
                  bg-[#c98b5b]
                  transition-all
                  duration-300

                  group-hover:w-14
                "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;