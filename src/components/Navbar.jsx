
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  const location = useLocation();

  // Check the existing admin session
  useEffect(() => {
    let cancelled = false;

    const checkAdminSession = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/admin/auth/me`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!cancelled) {
          setIsAdmin(response.ok);
        }
      } catch (error) {
        if (!cancelled) {
          setIsAdmin(false);
        }
      } finally {
        if (!cancelled) {
          setCheckingSession(false);
        }
      }
    };

    checkAdminSession();

    return () => {
      cancelled = true;
    };
  }, [location.pathname]);

  // Navbar scroll behaviour
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
        setMenuOpen(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const adminLink = isAdmin
    ? "/admin/dashboard"
    : "/admin";

  const adminLabel = isAdmin
    ? "Admin Dashboard"
    : "Admin Login";

  const navLinkClass = `
    group relative py-2
    text-[12px] font-medium uppercase
    tracking-[0.18em] text-[#3b3028]
    transition-colors duration-300
    hover:text-[#a33a2b]
    lg:text-[13px]
  `;

  const mobileLinkClass = `
    text-xl sm:text-2xl
    font-medium uppercase
    tracking-[0.15em]
    text-[#3b3028]
    transition-colors duration-300
    hover:text-[#a33a2b]
  `;

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        bg-transparent
        transition-transform duration-300 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="
        mx-auto flex h-20 max-w-7xl
        items-center justify-between
        px-5 sm:px-8 md:h-24 md:px-10
      ">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group relative z-50 flex items-center"
        >
          <img
            src="/assets/favicon.svg"
            alt="POSUA"
            className="
              h-11 w-11 object-contain
              transition-transform duration-500
              group-hover:scale-105
              sm:h-12 sm:w-12
            "
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-8">

          <Link to="/" className={navLinkClass}>
            Home
            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#a33a2b] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link to="/gallery" className={navLinkClass}>
            Gallery
            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#a33a2b] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link to="/team" className={navLinkClass}>
            Team
            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#a33a2b] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link to="/about" className={navLinkClass}>
            About
            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#a33a2b] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link to="/contact" className={navLinkClass}>
            Contact
            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#a33a2b] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Dynamic Admin Link */}
          <Link
            to={adminLink}
            className={`
              inline-flex items-center gap-2
              whitespace-nowrap rounded-full
              border px-5 py-2.5
              text-[11px] font-semibold uppercase
              tracking-[0.12em]
              transition-all duration-300
              ${
                isAdmin
                  ? "border-green-600/50 text-green-700 hover:bg-green-600/10"
                  : "border-[#a33a2b] text-[#a33a2b] hover:bg-[#a33a2b] hover:text-white"
              }
            `}
          >
            {isAdmin && (
              <span className="h-2 w-2 rounded-full bg-green-500" />
            )}

            {checkingSession ? "Checking..." : adminLabel}
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            relative z-50 flex h-10 w-10
            items-center justify-center rounded-full
            border border-[#3b3028]/20
            text-[#3b3028]
            transition-all duration-300
            hover:border-[#a33a2b] hover:text-[#a33a2b]
            lg:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <div className="flex flex-col gap-1">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </div>
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`
            fixed inset-0 z-40
            flex min-h-screen flex-col
            items-center justify-center
            bg-[#f7f1e5]
            transition-all duration-500
            lg:hidden
            ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-5 opacity-0"
            }
          `}
        >
          <div className="flex flex-col items-center gap-6 sm:gap-7">

            <Link to="/" onClick={closeMenu} className={mobileLinkClass}>
              Home
            </Link>

            <Link to="/gallery" onClick={closeMenu} className={mobileLinkClass}>
              Gallery
            </Link>

            <Link to="/team" onClick={closeMenu} className={mobileLinkClass}>
              Team
            </Link>

            <Link to="/about" onClick={closeMenu} className={mobileLinkClass}>
              About
            </Link>

            <Link to="/contact" onClick={closeMenu} className={mobileLinkClass}>
              Contact
            </Link>

            {/* Mobile Admin Link */}
            <Link
              to={adminLink}
              onClick={closeMenu}
              className={`
                mt-3 inline-flex items-center gap-2
                rounded-full border px-7 py-3
                text-sm font-semibold uppercase
                tracking-[0.12em]
                transition-all duration-300
                ${
                  isAdmin
                    ? "border-green-600 text-green-700 hover:bg-green-600/10"
                    : "border-[#a33a2b] text-[#a33a2b] hover:bg-[#a33a2b] hover:text-white"
                }
              `}
            >
              {isAdmin && (
                <span className="h-2 w-2 rounded-full bg-green-500" />
              )}

              {checkingSession ? "Checking..." : adminLabel}
            </Link>

          </div>

          <p className="
            absolute bottom-8
            text-[10px] uppercase
            tracking-[0.3em]
            text-[#3b3028]/50
          ">
            Monikanchan Bir Naam Dol . CHAPAR
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
