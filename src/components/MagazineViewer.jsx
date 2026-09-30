import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const MagazineViewer = ({
  pdfSrc,
  coverSrc,
  title = "মণিকাঞ্চন",
  subtitle = "আমাৰ সাংস্কৃতিক স্মৃতি",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [pdfReady, setPdfReady] = useState(true);

  // Make sure the URL works with Vite's base path.
  const finalPdfSrc = useMemo(() => {
    if (!pdfSrc) {
      return `${import.meta.env.BASE_URL}assets/Magazine.pdf`;
    }

    return pdfSrc;
  }, [pdfSrc]);

  const finalCoverSrc = useMemo(() => {
    if (!coverSrc) {
      return `${import.meta.env.BASE_URL}assets/magazine-cover-photo.webp`;
    }

    return coverSrc;
  }, [coverSrc]);

  const openMagazine = () => {
    setIsOpen(true);
    setPdfReady(true);

    // Let the cover-opening animation begin first.
    setTimeout(() => {
      setShowPdf(true);
    }, 700);
  };

  const closeMagazine = () => {
    setShowPdf(false);

    setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        closeMagazine();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative mx-auto w-full max-w-5xl">

      {/* =====================================================
          CLOSED MAGAZINE
      ====================================================== */}

      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            key="closed"
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto w-full max-w-md"
          >
            <button
              type="button"
              onClick={openMagazine}
              className="
                group
                relative
                mx-auto
                block
                w-full
                max-w-68
                outline-none
                sm:max-w-sm
                md:max-w-md
              "
              aria-label="Open magazine"
            >

              {/* Shadow */}
              <div
                className="
                  absolute
                  -bottom-5
                  left-1/2
                  h-8
                  w-[75%]
                  -translate-x-1/2
                  rounded-full
                  bg-black/20
                  blur-xl
                "
              />

              {/* Cover */}
              <motion.div
                whileHover={{
                  y: -8,
                  rotate: -1,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  relative
                  rounded-[1.4rem]
                  border
                  border-[#8B1515]/25
                  bg-[#fffdf8]
                  p-2
                  shadow-[0_20px_50px_rgba(87,21,21,0.18)]
                  sm:p-2.5
                "
              >

                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#c98b5b]/60
                    bg-black
                    p-1.5
                    sm:p-2
                  "
                >

                  <div
                    className="
                      relative
                      aspect-3/4
                      overflow-hidden
                      rounded-xl
                      sm:rounded-[0.9rem]
                    "
                  >
                    <img
                      src={finalCoverSrc}
                      alt={`${title} magazine cover`}
                      loading="lazy"
                      decoding="async"
                      className="
                        h-full
                        w-full
                        object-cover
                        object-center
                        transition-transform
                        duration-700
                        group-hover:scale-[1.04]
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-linear-to-br
                        from-white/15
                        via-transparent
                        to-black/20
                      "
                    />

                    {/* Gold corners */}
                    <span className="absolute left-3 top-3 h-6 w-6 border-l border-t border-[#efc77f]/80 sm:left-4 sm:top-4 sm:h-8 sm:w-8" />
                    <span className="absolute right-3 top-3 h-6 w-6 border-r border-t border-[#efc77f]/80 sm:right-4 sm:top-4 sm:h-8 sm:w-8" />
                    <span className="absolute bottom-3 left-3 h-6 w-6 border-b border-l border-[#efc77f]/80 sm:bottom-4 sm:left-4 sm:h-8 sm:w-8" />
                    <span className="absolute bottom-3 right-3 h-6 w-6 border-b border-r border-[#efc77f]/80 sm:bottom-4 sm:right-4 sm:h-8 sm:w-8" />
                  </div>
                </div>

              </motion.div>

              {/* Open label */}
              <div
                className="
                  absolute
                  -bottom-4
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  border
                  border-[#8B1515]/20
                  bg-[#fffdf8]
                  px-4
                  py-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#8B1515]
                  shadow-md
                  sm:px-5
                  sm:text-xs
                "
              >
                Open Magazine
              </div>

            </button>

            <p className="mt-10 text-center font-serif text-base font-semibold text-[#8B1515] sm:text-lg">
              {title}
            </p>

            <p className="mt-1 text-center text-xs tracking-[0.15em] text-[#6d3c2c]/70 sm:text-sm">
              {subtitle}
            </p>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =====================================================
          OPEN MAGAZINE
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto w-full max-w-5xl"
          >

            {/* Header */}
            <div className="mb-4 flex items-center justify-between gap-3">

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.3em] text-[#a91616] sm:text-sm">
                  {title}
                </p>

                <p className="mt-1 truncate font-serif text-lg font-semibold text-[#571515] sm:text-xl">
                  {subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={closeMagazine}
                className="
                  shrink-0
                  rounded-full
                  border
                  border-[#8B1515]/20
                  bg-[#fffdf8]
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-[#8B1515]
                  shadow-sm
                  transition
                  hover:bg-[#8B1515]
                  hover:text-white
                  sm:px-5
                  sm:text-sm
                "
              >
                Close
              </button>

            </div>


            {/* =================================================
                MAGAZINE FRAME
            ================================================== */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[1.25rem]
                border
                border-[#8B1515]/20
                bg-[#efe3d2]
                p-2
                shadow-[0_25px_70px_rgba(87,21,21,0.18)]
                sm:rounded-[1.75rem]
                sm:p-3
              "
            >

              {/* Front page / page flip */}

              <motion.div
                initial={{
                  rotateY: 0,
                }}
                animate={{
                  rotateY: -90,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.76, 0, 0.24, 1],
                }}
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                  perspective: 1400,
                  backfaceVisibility: "hidden",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-2
                  z-30
                  hidden
                  overflow-hidden
                  rounded-[0.9rem]
                  bg-white
                  shadow-[10px_0_25px_rgba(0,0,0,0.12)]
                  sm:inset-3
                  sm:block
                "
              >
                <img
                  src={finalCoverSrc}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </motion.div>


              {/* =================================================
                  PDF
              ================================================== */}

              <AnimatePresence>
                {showPdf && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.25,
                    }}
                    className="
                      relative
                      z-10
                      aspect-3/4
                      w-full
                      overflow-hidden
                      rounded-[0.9rem]
                      bg-white
                      sm:aspect-4/3
                    "
                  >

                    {pdfReady ? (
                      <iframe
                        src={`${finalPdfSrc}#page=1&zoom=page-fit`}
                        title={title}
                        loading="lazy"
                        className="h-full w-full border-0"
                        onLoad={() => {
                          setPdfReady(true);
                        }}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center p-6 text-center">
                        <p className="text-[#8B1515]">
                          Unable to load the magazine.
                        </p>
                      </div>
                    )}

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            <p className="mt-3 text-center text-[10px] text-[#571515]/55 sm:text-xs">
              Turn through the magazine using the PDF viewer.
            </p>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MagazineViewer;