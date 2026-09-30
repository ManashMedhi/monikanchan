import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Don't hide navbar when at the top
      if (currentScrollY <= 10) {
        setShowNavbar(true);
      }
      // Scrolling down
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
        setMenuOpen(false);
      }
      // Scrolling up
      else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        bg-transparent
        transition-transform
        duration-300
        ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-8
          md:h-24
          md:px-10
        "
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group relative z-50 flex items-center"
        >
          <img
            src="/assets/favicon.svg"
            alt="POSUA"
            className="
              h-11
              w-11
              object-contain
              transition-transform
              duration-500
              group-hover:scale-105
              sm:h-12
              sm:w-12
            "
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-10">

          <Link
            to="/"
            className="
              group relative py-2
              text-[12px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#3b3028]
              transition-colors
              duration-300
              hover:text-[#a33a2b]
              lg:text-[13px]
            "
          >
            Home

            <span
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-[#a33a2b]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </Link>

          <Link
            to="/gallery"
            className="
              group relative py-2
              text-[12px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#3b3028]
              transition-colors
              duration-300
              hover:text-[#a33a2b]
              lg:text-[13px]
            "
          >
            Gallery

            <span
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-[#a33a2b]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </Link>

          <Link
            to="/team"
            className="
              group relative py-2
              text-[12px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#3b3028]
              transition-colors
              duration-300
              hover:text-[#a33a2b]
              lg:text-[13px]
            "
          >
            Team

            <span
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-[#a33a2b]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </Link>

          <Link
            to="/about"
            className="
              group relative py-2
              text-[12px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#3b3028]
              transition-colors
              duration-300
              hover:text-[#a33a2b]
              lg:text-[13px]
            "
          >
            About

            <span
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-[#a33a2b]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </Link>

          <Link
            to="/contact"
            className="
              group relative py-2
              text-[12px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#3b3028]
              transition-colors
              duration-300
              hover:text-[#a33a2b]
              lg:text-[13px]
            "
          >
            Contact

            <span
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-[#a33a2b]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            relative
            z-50
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[#3b3028]/20
            text-[#3b3028]
            transition-all
            duration-300
            hover:border-[#a33a2b]
            hover:text-[#a33a2b]
            md:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-xl leading-none">×</span>
          ) : (
            <div className="flex flex-col gap-1.25">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </div>
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`
            fixed
            inset-0
            z-40
            flex
            min-h-screen
            flex-col
            items-center
            justify-center
            bg-[#f7f1e5]
            transition-all
            duration-500
            md:hidden

            ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-5 opacity-0"
            }
          `}
        >
          {/* Decorative Pattern */}
          <img
            src="/patterns/pattern-1.svg"
            alt=""
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              w-48
              opacity-10
            "
          />

          <img
            src="/patterns/pattern-2.svg"
            alt=""
            className="
              pointer-events-none
              absolute
              right-0
              top-24
              w-40
              opacity-10
            "
          />

          {/* Mobile Links */}
          <div className="relative flex flex-col items-center gap-7">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium uppercase tracking-[0.15em] text-[#3b3028] transition-colors duration-300 hover:text-[#a33a2b] sm:text-3xl"
            >
              Home
            </Link>

            <Link
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium uppercase tracking-[0.15em] text-[#3b3028] transition-colors duration-300 hover:text-[#a33a2b] sm:text-3xl"
            >
              Gallery
            </Link>

            <Link
              to="/team"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium uppercase tracking-[0.15em] text-[#3b3028] transition-colors duration-300 hover:text-[#a33a2b] sm:text-3xl"
            >
              Team
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium uppercase tracking-[0.15em] text-[#3b3028] transition-colors duration-300 hover:text-[#a33a2b] sm:text-3xl"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium uppercase tracking-[0.15em] text-[#3b3028] transition-colors duration-300 hover:text-[#a33a2b] sm:text-3xl"
            >
              Contact
            </Link>

          </div>

          {/* Mobile Footer Text */}
          <p
            className="
              absolute
              bottom-8
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#3b3028]/50
            "
          >
            Monikanchan Bir Naam Dol . CHAPAR
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;