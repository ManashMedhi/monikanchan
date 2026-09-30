import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Gallery = () => {
  // =========================================================
  // PHOTOS
  // Add your 50-60 photos here
  // =========================================================

  const galleryImages = [
    
    "/assets/batatdwara-removebg-preview (3) (1).png",

    // Add more images
    "/assets/gallery/1.webp",
    // "/assets/gallery/2.webp",
    "/assets/gallery/4.webp",
    "/assets/gallery/5.webp",
    "/assets/gallery/6.webp",
    "/assets/gallery/7.webp",
    "/assets/gallery/8.webp",
    "/assets/gallery/3.webp",
    "/assets/gallery/9.webp",
    "/assets/gallery/10.webp",
    "/assets/gallery/11.webp",
    "/assets/gallery/12.webp",
    "/assets/gallery/13.jpeg",
    "/assets/gallery/14.webp",
    "/assets/gallery/15.webp",
    "/assets/gallery/16.webp",
    "/assets/gallery/17.webp",
    "/assets/gallery/18.jpeg",
    "/assets/gallery/19.jpeg",
    "/assets/gallery/20.jpeg",
    "/assets/gallery/21.jpeg",
    "/assets/gallery/22.jpeg",
      "/assets/gallery/23.jpeg",
      "/assets/gallery/24.jpeg",
      "/assets/gallery/25.jpeg",
      "/assets/gallery/26.jpeg",
      "/assets/gallery/27.jpeg",
      "/assets/gallery/28.jpeg",
      "/assets/gallery/29.jpeg",
      "/assets/gallery/30.jpeg",
      "/assets/gallery/31.jpeg",
      "/assets/gallery/32.jpeg",

    
  ];

  // =========================================================
  // YOUTUBE VIDEOS
  //
  // Put ONLY the YouTube video ID here.
  //
  // Example:
  // https://www.youtube.com/watch?v=ABC123XYZ
  //
  // videoId = "ABC123XYZ"
  // =========================================================

  const videos = [
    {
      id: "2epNt35J6AI",
      title: "Thia Naam",
      description: "A glimpse of our traditional Thia-naam.",
    },
    {
      id: "Z-cEo3lsyww",
      title: "Bir Naam",
      description: "Traditional devotional Bir Naam.",
    },
    {
      id: "H3vNncZakbg",
      title: "Bir Naam",
      description: "Traditional devotional Bir Naam.",
    },
    {
      id: "J626anWT2dE",
      title: "Bir Naam",
      description: "Traditional devotional Bir Naam.",
    },
    // {
    //   id: "YOUR_VIDEO_ID_5",
    //   title: "Coming Soon !",
    //   description: "",
    // },
  ];

  // =========================================================
  // STATES
  // =========================================================

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // =========================================================
  // ESCAPE KEY
  // =========================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
        setSelectedVideo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // =========================================================
  // IMAGE NAVIGATION
  // =========================================================

  const nextImage = () => {
    setSelectedImage((current) => {
      if (current === null) return null;

      return current === galleryImages.length - 1
        ? 0
        : current + 1;
    });
  };

  const previousImage = () => {
    setSelectedImage((current) => {
      if (current === null) return null;

      return current === 0
        ? galleryImages.length - 1
        : current - 1;
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f1e5] text-[#571515]">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#a91616]/5 blur-3xl" />

        <div className="absolute -right-32 top-[35%] h-96 w-96 rounded-full bg-[#c98b5b]/10 blur-3xl" />

        <div className="absolute left-[40%] top-[65%] h-80 w-80 rounded-full bg-[#8B1515]/5 blur-3xl" />
      </div>


      {/* =====================================================
          HERO / HEADING
          Batadwara image as responsive background
      ===================================================== */}

      <section
        className="
          relative
          isolate
          min-h-[68svh]
          overflow-hidden
          sm:min-h-[72svh]
          md:min-h-[76svh]
          lg:min-h-[80svh]
        "
      >
        {/* Background photo */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 -z-20"
        >
          <img
            src="/assets/batatdwara-removebg-preview (3) (1).png"
            alt=""
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />
        </motion.div>

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            -z-10
            bg-linear-to-b
            from-[#571515]/20
            via-[#fff8ec]/55
            to-[#f7f1e5]
          "
        />

        {/* Soft center glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            -z-5
            h-[45vw]
            w-[45vw]
            max-h-136
            max-w-136
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/25
            blur-[90px]
          "
        />

        <div
          className="
            relative
            z-10
            flex
            min-h-[68svh]
            items-center
            justify-center
            px-5
            py-24
            sm:min-h-[72svh]
            sm:px-8
            md:min-h-[76svh]
            md:px-12
            lg:min-h-[80svh]
            lg:px-16
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="w-full max-w-4xl text-center"
          >
            <div
              className="
                mx-auto
                max-w-3xl
                rounded-[1.6rem]
                border
                border-white/70
                bg-[#fffdf8]/72
                px-5
                py-8
                shadow-[0_25px_80px_rgba(87,21,21,0.16)]
                backdrop-blur-md
                sm:rounded-4xl
                sm:px-10
                sm:py-10
                md:px-14
                md:py-12
              "
            >
              <motion.img
                src="/assets/ending mark.png"
                alt=""
                className="mx-auto mb-5 w-16 object-contain sm:mb-6 sm:w-24 md:w-28"
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -15,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                }}
              />

              <p className="text-[10px] uppercase tracking-[0.32em] text-[#a91616] sm:text-xs sm:tracking-[0.42em]">
                Our Memories
              </p>

              <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#8B1515] sm:text-5xl md:text-6xl lg:text-7xl">
                Photo Gallery
              </h1>

              <div className="mx-auto mt-5 h-px w-20 bg-[#a91616] sm:w-28" />

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#571515]/80 sm:text-base sm:leading-8 md:text-lg">
                Explore the beauty, traditions, performances and cultural
                heritage of Assam through our photographs and videos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* =====================================================
          PHOTO SECTION
      ===================================================== */}
{/* =====================================================
    PHOTO GALLERY
===================================================== */}

<section className="relative px-3 pb-24 sm:px-6 md:px-10 lg:px-14 xl:px-16">

  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}
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
        duration: 0.8,
      }}
      className="mb-10 text-center sm:mb-12"
    >

      <p className="text-xs uppercase tracking-[0.35em] text-[#a91616] sm:text-sm">
        Our Memories
      </p>

      <h2 className="mt-3 font-serif text-3xl font-bold text-[#8B1515] sm:text-4xl md:text-5xl">
        Moments Preserved
      </h2>

      <div className="mx-auto mt-5 h-px w-24 bg-[#a91616] sm:w-32" />

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#571515]/70 sm:text-base">
        Every photograph carries a memory, a tradition and a story
        from our cultural journey.
      </p>

    </motion.div>


    {/* =================================================
        PHOTO GRID
    ================================================= */}

    <div
      className="
        grid
        grid-cols-2
        gap-3

        sm:grid-cols-3
        sm:gap-5

        md:grid-cols-4
        md:gap-6

        lg:grid-cols-5
        lg:gap-7

        xl:gap-8
      "
    >

      {galleryImages.map((image, index) => (

        <motion.button
          key={index}
          type="button"
          onClick={() => setSelectedImage(index)}

          initial={{
            opacity: 0,
            y: 50,
            scale: 0.94,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}

          viewport={{
            once: true,
            amount: 0.08,
          }}

          transition={{
            duration: 0.6,
            delay: Math.min(index * 0.025, 0.3),
            ease: "easeOut",
          }}

          whileHover={{
            y: -8,
          }}

          whileTap={{
            scale: 0.97,
          }}

          className="
            group
            relative
            w-full
            cursor-pointer
            text-left
            outline-none
          "
        >

          {/* Premium black + gold photo frame */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              bg-black
              p-1.5
              shadow-[0_10px_30px_rgba(0,0,0,0.16)]
              transition-all
              duration-500
              group-hover:-translate-y-2
              group-hover:shadow-[0_20px_42px_rgba(87,21,21,0.24)]
              sm:rounded-[1.15rem]
              sm:p-2
              md:p-2.5
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-1.5
                z-20
                rounded-xl
                border
                border-[#d3a15c]/80
                sm:inset-2
                sm:rounded-[0.9rem]
                md:inset-2.5
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-3
                z-20
                rounded-[0.55rem]
                border
                border-white/15
                sm:inset-3.5
              "
            />

            <div
              className="
                relative
                aspect-4/5
                overflow-hidden
                rounded-[0.7rem]
                bg-[#e8dccb]
                sm:rounded-[0.85rem]
              "
            >
              <img
                src={image}
                alt={`Assamese cultural memory ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-black/20
                  via-transparent
                  to-white/5
                "
              />
            </div>

            <span className="pointer-events-none absolute left-3 top-3 z-30 h-5 w-5 border-l border-t border-[#e3ba78]/80 sm:left-4 sm:top-4 sm:h-6 sm:w-6" />
            <span className="pointer-events-none absolute right-3 top-3 z-30 h-5 w-5 border-r border-t border-[#e3ba78]/80 sm:right-4 sm:top-4 sm:h-6 sm:w-6" />
            <span className="pointer-events-none absolute bottom-3 left-3 z-30 h-5 w-5 border-b border-l border-[#e3ba78]/80 sm:bottom-4 sm:left-4 sm:h-6 sm:w-6" />
            <span className="pointer-events-none absolute bottom-3 right-3 z-30 h-5 w-5 border-b border-r border-[#e3ba78]/80 sm:bottom-4 sm:right-4 sm:h-6 sm:w-6" />
          </div>

          {/* =================================================
              GOLD BOTTOM LINE
          ================================================= */}

          <div
            className="
              mx-auto
              mt-2
              h-px
              w-8
              bg-[#c98b5b]
              transition-all
              duration-500

              group-hover:w-16

              sm:mt-3
            "
          />


          {/* =================================================
              IMAGE NUMBER
          ================================================= */}

          <span
            className="
              absolute
              bottom-5
              left-5
              z-20
              rounded-full
              bg-[#571515]/75
              px-2
              py-1
              text-[9px]
              font-medium
              tracking-wider
              text-white
              opacity-0
              backdrop-blur-sm
              transition-all
              duration-300

              group-hover:opacity-100

              sm:bottom-7
              sm:left-7
              sm:text-[10px]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>


          {/* =================================================
              VIEW ICON
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              z-30
              flex
              items-center
              justify-center
              opacity-0
              transition-all
              duration-500
              group-hover:opacity-100
            "
          >

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/60
                bg-[#571515]/70
                text-white
                shadow-xl
                backdrop-blur-sm

                sm:h-11
                sm:w-11
              "
            >

              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>

            </div>

          </div>

        </motion.button>

      ))}

    </div>

  </div>

</section>



      {/* =====================================================
          VIDEO SECTION
      ===================================================== */}
{/* =====================================================
    VIDEO SECTION
===================================================== */}

{/* =====================================================
    VIDEO SECTION
===================================================== */}

<section
  className="
    relative
    overflow-hidden
    rounded-4xl
    bg-[#2f3944]
    px-4
    py-16
    text-white
    sm:px-8
    sm:py-20
    md:px-12
    md:py-24
    lg:px-16
    lg:rounded-[2.5rem]
  "
>
  <div className="mx-auto w-full max-w-7xl">

    {/* Heading */}
    <motion.div
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        mx-auto
        mb-10
        max-w-3xl
        text-center
        sm:mb-12
      "
    >
      <p
        className="
          text-[10px]
          uppercase
          tracking-[0.35em]
          text-white/55
          sm:text-xs
          md:text-sm
        "
      >
        Watch & Experience
      </p>

      <h2
        className="
          mt-3
          font-serif
          text-3xl
          font-bold
          leading-tight
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
        "
      >
        Cultural Videos
      </h2>

      <div
        className="
          mx-auto
          mt-5
          h-px
          w-20
          bg-white/40
          sm:w-28
          md:w-32
        "
      />

      <p
        className="
          mx-auto
          mt-5
          max-w-2xl
          text-sm
          leading-7
          text-white/60
          sm:text-base
          sm:leading-8
          md:text-lg
        "
      >
        Experience our traditions, performances and devotional
        heritage through moving images.
      </p>
    </motion.div>


    {/* Video grid */}
    <div
      className="
        grid
        grid-cols-1
        gap-5
        sm:grid-cols-2
        sm:gap-6
        lg:grid-cols-3
        lg:gap-7
        xl:gap-8
      "
    >
      {videos.map((video, index) => (

        <motion.button
          key={`${video.id}-${index}`}
          type="button"
          onClick={() => setSelectedVideo(video)}
          initial={{
            opacity: 0,
            y: 45,
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
            duration: 0.7,
            delay: Math.min(index * 0.06, 0.3),
          }}
          whileHover={{
            y: -7,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            group
            w-full
            overflow-hidden
            rounded-[1.4rem]
            border
            border-white/10
            bg-white/5
            text-left
            shadow-[0_12px_35px_rgba(0,0,0,0.2)]
            backdrop-blur-md
            outline-none
            transition-all
            duration-500
            hover:border-white/20
            hover:bg-white/8
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]
            focus-visible:ring-2
            focus-visible:ring-white/60
            sm:rounded-[1.6rem]
          "
        >

          {/* Thumbnail */}
          <div
            className="
              relative
              aspect-video
              overflow-hidden
            "
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              loading="lazy"
              decoding="async"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-black/30
                transition-all
                duration-500
                group-hover:bg-black/45
              "
            />

            {/* Play */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >
              <motion.div
                whileHover={{
                  scale: 1.12,
                }}
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#a91616]
                  shadow-2xl
                  sm:h-16
                  sm:w-16
                "
              >
                <svg
                  className="ml-1 h-6 w-6 sm:h-7 sm:w-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>

            {/* Number */}
            <span
              className="
                absolute
                left-3
                top-3
                rounded-full
                bg-black/55
                px-2.5
                py-1
                text-[10px]
                text-white
                backdrop-blur-md
                sm:left-4
                sm:top-4
                sm:text-xs
              "
            >
              Video {String(index + 1).padStart(2, "0")}
            </span>
          </div>


          {/* Information */}
          <div className="p-4 sm:p-5 md:p-6">

            <h3
              className="
                font-serif
                text-lg
                font-bold
                text-white
                sm:text-xl
                md:text-2xl
              "
            >
              {video.title}
            </h3>

            <p
              className="
                mt-2
                line-clamp-2
                text-sm
                leading-6
                text-white/60
              "
            >
              {video.description}
            </p>

            <div
              className="
                mt-4
                flex
                items-center
                gap-2
                text-xs
                font-medium
                text-white/80
                sm:text-sm
              "
            >
              <span>Watch video</span>

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                "
              >
                →
              </span>
            </div>

          </div>

        </motion.button>

      ))}
    </div>

  </div>
</section>


      {/* =====================================================
          IMAGE LIGHTBOX
      ===================================================== */}

      <AnimatePresence>

        {selectedImage !== null && (

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
              fixed
              inset-0
              z-100
              flex
              items-center
              justify-center
              bg-black/90
              p-3
              backdrop-blur-md

              sm:p-6
            "
            onClick={() => setSelectedImage(null)}
          >

            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-2xl
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
                sm:right-7
                sm:top-7
              "
              aria-label="Close image"
            >
              ×
            </button>


            {/* Previous */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              className="
                absolute
                left-2
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-2xl
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20

                sm:left-6
                sm:h-14
                sm:w-14
              "
              aria-label="Previous image"
            >
              ‹
            </button>


            {/* Next */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="
                absolute
                right-2
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-2xl
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20

                sm:right-6
                sm:h-14
                sm:w-14
              "
              aria-label="Next image"
            >
              ›
            </button>


            {/* Image */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
              }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(event) => event.stopPropagation()}
            >

              <img
                src={galleryImages[selectedImage]}
                alt={`Gallery ${selectedImage + 1}`}
                className="
                  max-h-[82vh]
                  max-w-[90vw]
                  rounded-xl
                  object-contain
                  shadow-2xl

                  sm:rounded-2xl
                "
              />

              {/* Counter */}

              <div className="
                absolute
                bottom-3
                left-1/2
                -translate-x-1/2
                rounded-full
                bg-black/60
                px-4
                py-2
                text-xs
                text-white
                backdrop-blur-md
                sm:text-sm
              ">
                {selectedImage + 1} / {galleryImages.length}
              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>


      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

   {/* =====================================================
    VIDEO MODAL
===================================================== */}

{/* =====================================================
    VIDEO MODAL
===================================================== */}

<AnimatePresence>
  {selectedVideo && (
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
        fixed
        inset-0
        z-100
        flex
        items-center
        justify-center
        bg-black/90
        p-3
        backdrop-blur-md
        sm:p-6
      "
      onClick={() => setSelectedVideo(null)}
    >

      {/* Close */}
      <button
        type="button"
        onClick={() => setSelectedVideo(null)}
        className="
          absolute
          right-4
          top-4
          z-30
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-white/10
          text-2xl
          text-white
          backdrop-blur-md
          transition
          hover:bg-white/20
          sm:right-7
          sm:top-7
        "
      >
        ×
      </button>


      {/* Video */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 25,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 25,
        }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 22,
        }}
        className="
          w-full
          max-w-5xl
          overflow-hidden
          rounded-[1.25rem]
          bg-black
          shadow-2xl
          sm:rounded-[1.75rem]
        "
        onClick={(event) => event.stopPropagation()}
      >

        <div className="aspect-video w-full bg-black">

          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${selectedVideo.id}?rel=0&playsinline=1&enablejsapi=1&origin=${encodeURIComponent(
              window.location.origin
            )}`}
            title={selectedVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

        </div>


        {/* Details */}
        <div
          className="
            bg-[#252d35]
            px-5
            py-5
            text-white
            sm:px-6
            sm:py-6
          "
        >

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h3 className="font-serif text-xl font-bold sm:text-2xl">
                {selectedVideo.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/60">
                {selectedVideo.description}
              </p>
            </div>

            {/* Fallback */}
            <a
              href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#a91616]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#7f1010]
              "
            >
              Watch on YouTube
            </a>

          </div>

        </div>

      </motion.div>

    </motion.div>
  )}
</AnimatePresence>

    </main>
  );
};

export default Gallery;