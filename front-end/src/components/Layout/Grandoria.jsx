import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
// AOS (Animations on Scroll)
import AOS from "aos";
import "aos/dist/aos.css";

// Swiper (Sliders)
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// GLightbox (Lightbox)
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
// Isotope (Grille filtrable)
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
// PureCounter (Compteurs animés)
import PureCounter from "@srexi/purecounterjs";

const Grandoria = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleDropdown = (index) =>
        setDropdownOpen(dropdownOpen === index ? null : index);

    const handleResize = () => {
        const mobile = window.innerWidth < 1200;
        setIsMobile(mobile);
        if (!mobile) setMenuOpen(false);
    };

    useEffect(() => {
        // Resize listener
        window.addEventListener("resize", handleResize);

        // Scroll effect
        const handleScroll = () => {
            const header = document.getElementById("header");
            if (!header) return;

            // Body scrolled
            if (window.scrollY > 100) document.body.classList.add("scrolled");
            else document.body.classList.remove("scrolled");

            // Scroll-top button
            const scrollTopBtn = document.querySelector(".scroll-top");
            if (scrollTopBtn) {
                if (window.scrollY > 100) scrollTopBtn.classList.add("active");
                else scrollTopBtn.classList.remove("active");
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", handleScroll);

        // Mobile nav toggle
        const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
        const mobileNavToogle = () => {
            document.body.classList.toggle("mobile-nav-active");
            if (!mobileNavToggleBtn) return;
            mobileNavToggleBtn.classList.toggle("bi-list");
            mobileNavToggleBtn.classList.toggle("bi-x");
        };
        if (mobileNavToggleBtn)
            mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

        // Preloader
        const preloader = document.getElementById("preloader");
        if (preloader) {
            window.addEventListener("load", () => preloader.remove());
        }

        // Init AOS
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });

        // Init PureCounter
        new PureCounter();

        // Init GLightbox
        GLightbox({ selector: ".glightbox" });

        // Init Swiper
        document.querySelectorAll(".init-swiper").forEach((swiperEl) => {
            const configEl = swiperEl.querySelector(".swiper-config");
            let config = {};
            if (configEl) config = JSON.parse(configEl.innerHTML.trim());
            new Swiper(swiperEl, config);
        });

        // Init Isotope
        document.querySelectorAll(".isotope-layout").forEach((isoEl) => {
            const container = isoEl.querySelector(".isotope-container");
            if (!container) return;
            let isoInstance;
            imagesLoaded(container, () => {
                isoInstance = new Isotope(container, {
                    itemSelector: ".isotope-item",
                    layoutMode: isoEl.getAttribute("data-layout") || "masonry",
                    filter: isoEl.getAttribute("data-default-filter") || "*",
                    sortBy: isoEl.getAttribute("data-sort") || "original-order",
                });
            });

            isoEl
                .querySelectorAll(".isotope-filters li")
                .forEach((filterBtn) => {
                    filterBtn.addEventListener("click", () => {
                        const active = isoEl.querySelector(".filter-active");
                        if (active) active.classList.remove("filter-active");
                        filterBtn.classList.add("filter-active");
                        if (isoInstance)
                            isoInstance.arrange({
                                filter: filterBtn.getAttribute("data-filter"),
                            });
                        AOS.refresh();
                    });
                });
        });

        // Countdown
        const updateCountDown = (cdItem) => {
            const daysEl = cdItem.querySelector(".count-days");
            const hoursEl = cdItem.querySelector(".count-hours");
            const minutesEl = cdItem.querySelector(".count-minutes");
            const secondsEl = cdItem.querySelector(".count-seconds");

            const timeleft =
                new Date(cdItem.getAttribute("data-count")).getTime() -
                new Date().getTime();
            const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeleft % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

            if (daysEl) daysEl.innerHTML = days;
            if (hoursEl) hoursEl.innerHTML = hours;
            if (minutesEl) minutesEl.innerHTML = minutes;
            if (secondsEl) secondsEl.innerHTML = seconds;
        };

        document.querySelectorAll(".countdown").forEach((cd) => {
            updateCountDown(cd);
            setInterval(() => updateCountDown(cd), 1000);
        });

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("load", handleScroll);
            if (mobileNavToggleBtn)
                mobileNavToggleBtn.removeEventListener(
                    "click",
                    mobileNavToogle
                );
        };
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <header id="header" className="header sticky-top">
                <div className="topbar d-flex align-items-center dark-background">
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="contact-info d-flex align-items-center gap-3">
                            <i className="bi bi-envelope">
                                <a href="mailto:contact@example.com">
                                    contact@example.com
                                </a>
                            </i>
                            <i className="bi bi-phone">
                                <span>+1 5589 55488 55</span>
                            </i>
                        </div>
                        <div className="social-links d-flex align-items-center gap-3">
                            <a href="#" className="twitter">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            <a href="#" className="facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="linkedin">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="branding d-flex align-items-center">
                    <div className="container d-flex justify-content-between align-items-center">
                        <Link to="/" className="logo d-flex align-items-center">
                            <h1 className="sitename">Grandoria</h1>
                        </Link>

                        {isMobile && (
                            <button
                                className={`mobile-nav-toggle ${
                                    menuOpen ? "open" : ""
                                }`}
                                onClick={toggleMenu}
                            >
                                ☰
                            </button>
                        )}

                        <nav className={`navmenu ${menuOpen ? "active" : ""}`}>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/rooms">Rooms</Link>
                                </li>
                                <li>
                                    <Link to="/amenities">Amenities</Link>
                                </li>
                                <li>
                                    <Link to="/location">Location</Link>
                                </li>

                                <li className="dropdown">
                                    <span onClick={() => toggleDropdown(0)}>
                                        Pages{" "}
                                        <i className="bi bi-chevron-down toggle-dropdown"></i>
                                    </span>
                                    <ul
                                        className={
                                            dropdownOpen === 0 ? "show" : ""
                                        }
                                    >
                                        <li>
                                            <Link to="/room-details">
                                                Room Details
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/restaurant">
                                                Restaurant
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/offers">Offers</Link>
                                        </li>
                                        <li>
                                            <Link to="/events">Events</Link>
                                        </li>
                                        <li>
                                            <Link to="/gallery">Gallery</Link>
                                        </li>
                                        <li>
                                            <Link to="/booking">Booking</Link>
                                        </li>
                                        <li>
                                            <Link to="/terms">Terms Page</Link>
                                        </li>
                                        <li>
                                            <Link to="/privacy">
                                                Privacy Page
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/404">404 Page</Link>
                                        </li>
                                        <li>
                                            <Link to="/starter-page">
                                                Starter Page
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/login">
                                        <LuLogIn size={30} /> Sign in
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <a href="#top" className="scroll-top" onClick={scrollToTop}>
                <i className="bi bi-arrow-up-short"></i>
            </a>

            <div id="preloader"></div>
        </>
    );
};

export default Grandoria;
