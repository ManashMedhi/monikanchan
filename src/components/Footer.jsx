import React from "react";
import { motion } from "motion/react";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        rounded-t-4xl
        bg-[#e4edf1]
        text-[#571515]
      "
    >

      {/* =========================
          MAIN FOOTER
      ========================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-7
          sm:px-6
          sm:py-8
          md:px-10
          md:py-10
        "
      >

        {/* =========================
            BRAND
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mb-6 text-center sm:mb-7"
        >

          <h2
            className="
              flex
              items-center
              justify-center
              gap-2
              sm:gap-3
              font-serif
              text-2xl
              font-bold
              text-[#8B1515]
              sm:text-3xl
              md:text-4xl
            "
          >

            {/* Left image */}
            <img
              src="/assets/Satriya dance l.png"
              alt="satriya dance"
              className="
                w-6
                h-auto
                sm:w-8
              "
            />

            <span>
              মনিকাঞ্চন বীৰ নাম দল
            </span>

            {/* Right image */}
            <img
              src="/assets/Satriya dance R.png"
              alt="satriya dance"
              className="
                w-6
                h-auto
                sm:w-8
              "
            />

          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-lg
              px-3
              text-xs
              leading-relaxed
              text-[#571515]
              sm:text-sm
            "
          >
            Discover, celebrate and preserve the rich cultural
            heritage and traditions of Assam.
          </p>

        </motion.div>


        {/* =========================
            DECORATIVE MARK
        ========================== */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            mb-7
            flex
            items-center
            justify-center
            gap-3
            sm:mb-8
          "
        >

          <div
            className="
              h-px
              w-10
              bg-[#c98b5b]
              sm:w-16
              md:w-20
            "
          />

          <motion.span
            animate={{ rotate: [0, 180, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-lg text-[#8B1515] sm:text-xl"
          >
            ❈
          </motion.span>

          <div
            className="
              h-px
              w-10
              bg-[#c98b5b]
              sm:w-16
              md:w-20
            "
          />

        </motion.div>


        {/* =========================
            FOOTER COLUMNS
        ========================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-5
            gap-y-7
            text-center

            sm:gap-x-8
            sm:gap-y-8

            md:grid-cols-4
            md:gap-7
            md:text-left

            lg:gap-10
          "
        >

          {/* =========================
              ABOUT
          ========================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="min-w-0"
          >

            <h3
              className="
                mb-2
                font-serif
                text-base
                font-bold
                text-[#8B1515]
                sm:text-lg
              "
            >
              About
            </h3>

            <p
              className="
                mx-auto
                max-w-xs
                text-[11px]
                leading-relaxed
                text-[#571515]
                sm:text-xs
                md:mx-0
                md:text-sm
              "
            >
              A digital space dedicated to showcasing the
              traditions, art, history and cultural heritage
              of Assam.
            </p>

          </motion.div>


          {/* =========================
              EXPLORE
          ========================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >

            <h3
              className="
                mb-2
                font-serif
                text-base
                font-bold
                text-[#8B1515]
                sm:text-lg
              "
            >
              Explore
            </h3>

            <ul className="space-y-1 text-[11px] sm:text-xs md:text-sm">

              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-[#b33a3a]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition-colors duration-300 hover:text-[#b33a3a]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#culture"
                  className="transition-colors duration-300 hover:text-[#b33a3a]"
                >
                  Culture
                </a>
              </li>

              <li>
                <a
                  href="#heritage"
                  className="transition-colors duration-300 hover:text-[#b33a3a]"
                >
                  Heritage
                </a>
              </li>

            </ul>

          </motion.div>


          {/* =========================
              CULTURE
          ========================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
          >

            <h3
              className="
                mb-2
                font-serif
                text-base
                font-bold
                text-[#8B1515]
                sm:text-lg
              "
            >
              Culture
            </h3>

            <ul className="space-y-1 text-[11px] sm:text-xs md:text-sm">

              <li className="cursor-pointer hover:text-[#b33a3a]">
                Naam/Thia Naam/Bir Naam
              </li>

              <li className="cursor-pointer hover:text-[#b33a3a]">
                Satriya Dance
              </li>

              <li className="cursor-pointer hover:text-[#b33a3a]">
                Kirtan
              </li>


              <li className="cursor-pointer hover:text-[#b33a3a]">
                Bihu
              </li>
            </ul>

          </motion.div>


          {/* =========================
              CONNECT
          ========================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
            className="min-w-0"
          >

            <h3
              className="
                mb-2
                font-serif
                text-base
                font-bold
                text-[#8B1515]
                sm:text-lg
              "
            >
              Connect
            </h3>

            <div
              className="
                flex
                flex-col
                items-center
                gap-2
                md:items-start
              "
            >

              {/* Instagram */}
              <a
                href="https://www.instagram.com/manikanchan_naamdol?stkn=dWlsbGF3M3Nua2hm"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  text-[11px]
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#b33a3a]
                  sm:text-xs
                  md:text-sm
                "
              >
                <FaInstagram className="text-sm sm:text-base" />
                <span>Instagram</span>
              </a>


              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/19d7NuxMG1/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  text-[11px]
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#b33a3a]
                  sm:text-xs
                  md:text-sm
                "
              >
                <FaFacebookF className="text-sm sm:text-base" />
                <span>Facebook</span>
              </a>


              {/* GitHub */}
              <a
                href="https://github.com/ManashMedhi"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  text-[11px]
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#b33a3a]
                  sm:text-xs
                  md:text-sm
                "
              >
                <FaGithub className="text-sm sm:text-base" />
                <span>GitHub</span>
              </a>


              {/* Phone */}
              <a
                href="tel:96784 39591"
                className="
                  flex
                  items-center
                  gap-2
                  text-[11px]
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#b33a3a]
                  sm:text-xs
                  md:text-sm
                  break-all
                "
              >
                <FaPhoneAlt className="shrink-0 text-xs sm:text-sm" />

                <span>
                  96784 39591 / 8876611988
                </span>
              </a>

            </div>

          </motion.div>

        </div>


        {/* =========================
            BOTTOM DIVIDER
        ========================== */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-7
            h-px
            w-full
            bg-[#c98b5b]/40
            sm:mt-8
          "
        />

      </div>


      {/* =========================
          COPYRIGHT
      ========================== */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          px-4
          pb-4
          text-center
        "
      >

        <p
          className="
            text-[10px]
            text-[#571515]/75
            sm:text-xs
          "
        >
          © 2026 মনিকাঞ্চন বীৰ নাম দল. All rights reserved.
        </p>

        <p
          className="
            mt-1
            text-[9px]
            text-[#571515]/55
            sm:text-[10px]
          "
        >
          Made with love for Assam
        </p>

      </motion.div>

    </footer>
  );
};

export default Footer;