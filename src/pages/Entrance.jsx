// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { useNavigate } from "react-router-dom";

// const Entrance = () => {
//   const navigate = useNavigate();

//   const [isOpening, setIsOpening] = useState(false);
//   const [showContent, setShowContent] = useState(false);

//   // Show entrance content after initial sky animation
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowContent(true);
//     }, 700);

//     return () => clearTimeout(timer);
//   }, []);

//   // Enter website
//   const handleEnter = () => {
//     setIsOpening(true);

//     // Wait for cinematic gate/zoom animation
//     setTimeout(() => {
//       navigate("/home");
//     }, 2700);
//   };

//   return (
//     <main className="relative h-svh w-full overflow-hidden bg-sky-400">

//       {/* =========================================================
//           SKY
//       ========================================================= */}

//       <div className="absolute inset-0">

//         {/* Main sky */}
//         <div
//           className="
//             absolute inset-0
//             bg-linear-to-b
//             from-sky-500
//             via-sky-300
//             to-white
//           "
//         />

//         {/* Heavenly center glow */}
//         <motion.div
//           className="
//             absolute
//             left-1/2
//             top-[42%]
//             h-[55vh]
//             w-[80vw]
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             bg-white/40
//             blur-[100px]
//           "
//           animate={{
//             opacity: [0.3, 0.6, 0.3],
//             scale: [1, 1.08, 1],
//           }}
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         {/* Sun */}
//         <motion.div
//           className="
//             absolute
//             right-[8%]
//             top-[7%]
//             h-24
//             w-24
//             rounded-full
//             bg-white
//             blur-xl
//             sm:h-32
//             sm:w-32
//             md:h-40
//             md:w-40
//           "
//           animate={{
//             scale: [1, 1.12, 1],
//             opacity: [0.55, 0.85, 0.55],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//       </div>


//       {/* =========================================================
//           CLOUDS
//       ========================================================= */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">

//         {/* Cloud 1 */}
//         <motion.div
//           className="
//             absolute
//             left-[-25%]
//             top-[8%]
//             h-16
//             w-56
//             rounded-full
//             bg-white/80
//             blur-xl
//             sm:h-20
//             sm:w-72
//             md:h-24
//             md:w-80
//           "
//           animate={{
//             x: ["0vw", "150vw"],
//           }}
//           transition={{
//             duration: 38,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         {/* Cloud 2 */}
//         <motion.div
//           className="
//             absolute
//             right-[-30%]
//             top-[20%]
//             h-20
//             w-64
//             rounded-full
//             bg-white/75
//             blur-2xl
//             sm:h-24
//             sm:w-80
//             md:h-28
//             md:w-100
//           "
//           animate={{
//             x: ["0vw", "-150vw"],
//           }}
//           transition={{
//             duration: 45,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         {/* Cloud 3 */}
//         <motion.div
//           className="
//             absolute
//             left-[-30%]
//             top-[35%]
//             h-24
//             w-80
//             rounded-full
//             bg-white/70
//             blur-2xl
//             sm:h-28
//             sm:w-96
//             md:h-32
//             md:w-120
//           "
//           animate={{
//             x: ["0vw", "155vw"],
//           }}
//           transition={{
//             duration: 50,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         {/* Cloud 4 */}
//         <motion.div
//           className="
//             absolute
//             right-[-30%]
//             top-[52%]
//             h-28
//             w-96
//             rounded-full
//             bg-white/65
//             blur-3xl
//             sm:h-32
//             sm:w-md
//             md:h-40
//             md:w-140
//           "
//           animate={{
//             x: ["0vw", "-155vw"],
//           }}
//           transition={{
//             duration: 55,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         {/* Cloud 5 */}
//         <motion.div
//           className="
//             absolute
//             left-[-20%]
//             top-[65%]
//             h-24
//             w-[24rem]
//             rounded-full
//             bg-white/70
//             blur-3xl
//           "
//           animate={{
//             x: ["0vw", "140vw"],
//           }}
//           transition={{
//             duration: 60,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         {/* Bottom cloud layer */}
//         <motion.div
//           className="
//             absolute
//             -bottom-16
//             left-[-10%]
//             h-48
//             w-[120%]
//             rounded-[50%]
//             bg-white/85
//             blur-3xl
//           "
//           animate={{
//             x: ["-3%", "3%", "-3%"],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//       </div>


//       {/* =========================================================
//           TITLE
//       ========================================================= */}

//       <AnimatePresence>
//         {showContent && !isOpening && (
//           <motion.div
//             className="
//               absolute
//               left-1/2
//               top-[6%]
//               z-30
//               w-[92%]
//               -translate-x-1/2
//               text-center
//             "
//             initial={{
//               opacity: 0,
//               y: -30,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 1,
//               ease: "easeOut",
//             }}
//           >

//             <motion.p
//               className="
//                 text-xs
//                 font-medium
//                 tracking-[0.35em]
//                 text-white/90
//                 drop-shadow-lg
//                 sm:text-sm
//                 md:text-base
//               "
//             >
//               WELCOME TO
//             </motion.p>

//             <h1
//               className="
//                 mt-2
//                 text-3xl
//                 font-semibold
//                 tracking-wide
//                 text-white
//                 drop-shadow-[0_5px_15px_rgba(0,0,0,0.35)]
//                 sm:text-4xl
//                 md:text-5xl
//                 lg:text-6xl
//               "
//             >
//               মণিকাঞ্চন
//             </h1>

//             <p
//               className="
//                 mt-2
//                 text-[10px]
//                 tracking-[0.2em]
//                 text-white/90
//                 sm:text-xs
//                 md:text-sm
//               "
//             >
//               MONIKANCHAN BIR NAAM DOL
//             </p>

//           </motion.div>
//         )}
//       </AnimatePresence>


//       {/* =========================================================
//           GATE
//       ========================================================= */}

//       <motion.div
//         className="
//           absolute
//           left-1/2
//           top-[52%]
//           z-20
//           w-[92vw]
//           max-w-262.5
//           -translate-x-1/2
//           -translate-y-1/2
//         "
//         animate={
//           isOpening
//             ? {
//                 scale: 1.45,
//                 y: "-48%",
//               }
//             : {
//                 scale: 1,
//                 y: "-50%",
//               }
//         }
//         transition={{
//           duration: 2.7,
//           ease: [0.76, 0, 0.24, 1],
//         }}
//       >

//         {/* Gate glow */}
//         <motion.div
//           className="
//             absolute
//             left-1/2
//             top-1/2
//             h-[55%]
//             w-[50%]
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             bg-white/50
//             blur-3xl
//           "
//           animate={{
//             opacity: isOpening ? 1 : 0.35,
//             scale: isOpening ? 1.7 : 1,
//           }}
//           transition={{
//             duration: 2,
//             ease: "easeInOut",
//           }}
//         />

//         {/* YOUR SATRA GATE */}
//         <motion.img
//           src="/assets/satra gate.webp"
//           alt="Assamese Satra Gate"
//           draggable="false"
//           className="
//             relative
//             z-10
//             mx-auto
//             block
//             h-auto
//             w-full
//             select-none
//             object-contain
//             drop-shadow-[0_25px_40px_rgba(0,0,0,0.28)]
//           "
//           animate={{
//             filter: isOpening
//               ? "brightness(1.35)"
//               : "brightness(1)",
//           }}
//           transition={{
//             duration: 2,
//             ease: "easeInOut",
//           }}
//         />

//       </motion.div>


//       {/* =========================================================
//           ENTER BUTTON
//       ========================================================= */}

//       <AnimatePresence>
//         {showContent && !isOpening && (
//           <motion.div
//             className="
//               absolute
//               bottom-[7%]
//               left-1/2
//               z-50
//               -translate-x-1/2
//               text-center
//             "
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               delay: 0.5,
//               duration: 0.8,
//             }}
//           >

//             <motion.button
//               onClick={handleEnter}
//               whileHover={{
//                 scale: 1.05,
//               }}
//               whileTap={{
//                 scale: 0.94,
//               }}
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-full
//                 border
//                 border-white/80
//                 bg-black/20
//                 px-8
//                 py-3
//                 text-xs
//                 font-semibold
//                 tracking-[0.2em]
//                 text-white
//                 shadow-[0_10px_35px_rgba(0,0,0,0.2)]
//                 backdrop-blur-md
//                 transition-all
//                 duration-300
//                 hover:bg-white
//                 hover:text-sky-700
//                 sm:px-10
//                 sm:py-4
//                 sm:text-sm
//                 md:px-12
//                 md:py-4
//                 md:text-base
//               "
//             >

//               <span className="relative z-10">
//                 প্ৰৱেশ কৰক
//               </span>

//               {/* Button shine */}
//               <motion.span
//                 className="
//                   absolute
//                   -left-full
//                   top-0
//                   h-full
//                   w-[50%]
//                   skew-x-[-20deg]
//                   bg-white/30
//                 "
//                 animate={{
//                   left: ["-100%", "200%"],
//                 }}
//                 transition={{
//                   duration: 2.5,
//                   repeat: Infinity,
//                   repeatDelay: 2,
//                   ease: "easeInOut",
//                 }}
//               />

//             </motion.button>

//             <motion.p
//               className="
//                 mt-3
//                 text-[8px]
//                 tracking-[0.25em]
//                 text-white/80
//                 sm:text-[10px]
//                 md:text-xs
//               "
//               animate={{
//                 opacity: [0.5, 1, 0.5],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//               }}
//             >
//               ENTER THE WORLD OF ASSAMESE CULTURE
//             </motion.p>

//           </motion.div>
//         )}
//       </AnimatePresence>


//       {/* =========================================================
//           ENTRY LIGHT / TRANSITION
//       ========================================================= */}

//       <AnimatePresence>
//         {isOpening && (
//           <>
//             {/* White left sweep */}
//             <motion.div
//               className="
//                 pointer-events-none
//                 absolute
//                 left-0
//                 top-0
//                 z-40
//                 h-full
//                 w-1/2
//                 bg-linear-to-r
//                 from-white
//                 via-white/90
//                 to-transparent
//               "
//               initial={{
//                 x: "-100%",
//                 opacity: 0,
//               }}
//               animate={{
//                 x: "0%",
//                 opacity: [0, 1, 1, 0],
//               }}
//               transition={{
//                 duration: 2.5,
//                 times: [0, 0.25, 0.75, 1],
//                 ease: "easeInOut",
//               }}
//             />

//             {/* White right sweep */}
//             <motion.div
//               className="
//                 pointer-events-none
//                 absolute
//                 right-0
//                 top-0
//                 z-40
//                 h-full
//                 w-1/2
//                 bg-linear-to-l
//                 from-white
//                 via-white/90
//                 to-transparent
//               "
//               initial={{
//                 x: "100%",
//                 opacity: 0,
//               }}
//               animate={{
//                 x: "0%",
//                 opacity: [0, 1, 1, 0],
//               }}
//               transition={{
//                 duration: 2.5,
//                 times: [0, 0.25, 0.75, 1],
//                 ease: "easeInOut",
//               }}
//             />

//             {/* Center light */}
//             <motion.div
//               className="
//                 pointer-events-none
//                 absolute
//                 left-1/2
//                 top-1/2
//                 z-50
//                 h-20
//                 w-20
//                 -translate-x-1/2
//                 -translate-y-1/2
//                 rounded-full
//                 bg-white
//                 blur-2xl
//                 sm:h-32
//                 sm:w-32
//                 md:h-40
//                 md:w-40
//               "
//               initial={{
//                 scale: 0,
//                 opacity: 0,
//               }}
//               animate={{
//                 scale: [0, 1, 5, 15],
//                 opacity: [0, 1, 0.9, 0],
//               }}
//               transition={{
//                 duration: 2.6,
//                 ease: "easeInOut",
//               }}
//             />

//             {/* Full screen white flash */}
//             <motion.div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 z-55
//                 bg-white
//               "
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: [0, 0, 0.15, 0],
//               }}
//               transition={{
//                 duration: 2.6,
//                 times: [0, 0.45, 0.75, 1],
//                 ease: "easeInOut",
//               }}
//             />

//           </>
//         )}
//       </AnimatePresence>


//       {/* =========================================================
//           CINEMATIC VIGNETTE
//       ========================================================= */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           z-60
//           shadow-[inset_0_0_140px_rgba(0,60,120,0.25)]
//         "
//       />

//     </main>
//   );
// };

// export default Entrance;