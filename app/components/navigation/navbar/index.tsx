"use client";
import React from "react";
import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import MenuSVG from "./MenuSVG";
import ArrowDown from "./bx-chevron-down";
import styles from "./index.module.css";

gsap.registerPlugin(useGSAP);

const Navbar = (/* { toggle }: { toggle: () => void } */) => {
  /* const router = useRouter();
  const aniStart = () => {
    console.log("Animation Start");
  };
  const aniEnd = () => {
    console.log("Animation End");
  };
  useEffect(() => {
    router.events.on("routeChangeStart", aniStart);
    router.events.on("routeChangeComplete", aniEnd);
    router.events.on("routeChangeError", aniEnd);

    return () => {
      router.events.off("routeChangeStart", aniStart);
      router.events.off("routeChangeComplete", aniEnd);
      router.events.off("routeChangeError", aniEnd);
    };
  }, [router]); */


  //console.log("Navbar")
  /* const main = useRef<HTMLElement | null>(null); */
  useEffect(() => {
    const dropdownBtn = document.querySelectorAll(".dropdown-btn");
    const dropdown = document.querySelectorAll(".dropdown");
    const hamburgerBtn = document.getElementById("hamburger");
    const navMenu = document.querySelector(".menu");
    const navMenuSpacer = document.querySelector(".menu-spacer");
    const links = document.querySelectorAll(".dropdown a");

    function setAriaExpandedFalse() {
      dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
    }

    function closeDropdownMenu() {
      dropdown.forEach((drop) => {
        drop.classList.remove("active");
        drop.addEventListener("click", (e) => e.stopPropagation());
      });
    }

    function toggleHamburger() {
      navMenu?.classList.toggle("show");
      navMenuSpacer?.classList.toggle("show");
    }

    /* function toggleHamburgerIfActive() {
      navMenu?.classList.remove("show");
      navMenuSpacer?.classList.remove("show");
    } */

    dropdownBtn.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        const dropdownIndex = (e.currentTarget as HTMLElement)?.dataset.dropdown;
        const dropdownElement = document.getElementById(dropdownIndex as string) as HTMLElement;

        /* if (btn.getAttribute("aria-expanded") === "true") {
          closeDropdownMenu();
          console.log("Here")
        } */
        if (dropdownElement?.classList.contains("active")){
          closeDropdownMenu();
          setAriaExpandedFalse();
        } else {
          dropdownElement?.classList.toggle("active");
          setAriaExpandedFalse();
          btn.setAttribute("aria-expanded", "true")
        }

        dropdown.forEach((drop) => {
          if (drop.id !== (btn as HTMLElement).dataset["dropdown"]) {
            drop.classList.remove("active");
          }
        });
        e.stopPropagation();
        /* setAriaExpandedFalse(); */
        /* btn.setAttribute(
          "aria-expanded",
          btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
        ); */
      });
    });
    
    // close dropdown menu when the dropdown links are clicked
    links.forEach((link) =>
      link.addEventListener("click", () => {
        closeDropdownMenu();
        setAriaExpandedFalse();
        toggleHamburger();
      })
    );

    // close dropdown menu when the logo link is clicked
    // This needs to be disabled if no logo is present
    /* document.querySelector(".logo-link img").addEventListener("click", () => {
      closeDropdownMenu();
      setAriaExpandedFalse();
      toggleHamburgerIfActive();
    }) */

    // close dropdown menu when you click on the document body
    document.documentElement.addEventListener("click", () => {
      closeDropdownMenu();
      setAriaExpandedFalse();
    });

    // close dropdown when the escape key is pressed
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeDropdownMenu();
        setAriaExpandedFalse();
      }
    });

    // toggle hamburger menu
    hamburgerBtn?.addEventListener("click", toggleHamburger);
  }, []); // Empty dependency array ensures this runs once on mount


  /* ===== GSAP React ===== */
  useGSAP(
    () => {
  /* GSDevTools.create(); */

  },
  { dependencies: [/* color, noHover, portrait, under768, isGecko, lettersYInit, lettersYLiftoff, lettersYDrop, lettersYRise */], revertOnUpdate: true, /* scope: main */ }
  );

  return (
    <>
      <header id="nav-menu" aria-label="navigation bar"/*  ref={main} */>
        <div className="nav-container">
          <div className="nav-start">
            {/* <a className="logo logo-link" data-link="#home">
              <img src="/images/logo.png" alt="MMAPP Logo" />
            </a> */}
            <div className="menu-spacer">
            <nav className="menu">
              <ul className="menu-bar">
                <li>
                  <button className="nav-link dropdown-btn" data-dropdown="dropdown1" aria-haspopup="true" aria-expanded="false" aria-label="About">
                    <img src="/images/logo_on_black.svg" alt="MMAPP Logo" />
                    {/* <div className="bx bx-chevron-down" aria-hidden="true"></div> */}
                    <div className={styles.arrowDown}><ArrowDown aria-hidden="true"/></div>
                  </button>
                  <div id="dropdown1" className="dropdown">
                    <ul role="menu1">
                      <li role="menuitem">
                          <a
                            href="/#home"
                            data-page="/"
                            data-link="#home"
                            className="dropdown-link">
                            Home
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/#homeFeatures"
                            data-page="/"
                            data-link="#homeFeatures"
                            className="dropdown-link">
                            Features
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/#homeBenefits"
                            data-page="/"
                            data-link="#homeBenefits"
                            className="dropdown-link">
                            Benefits for everyone
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/#homeOurmission"
                            data-page="/"
                            data-link="#homeOurmission"
                            className="dropdown-link">
                            Our Mission
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/#homeFAQSupport"
                            data-page="/"
                            data-link="#homeFAQSupport"
                            className="dropdown-link">
                            FAQs/Support
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/#homeContactUs"
                            data-page="/"
                            data-link="#homeContactUs"
                            className="dropdown-link">
                            Contact Us
                          </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <button className="nav-link dropdown-btn" data-dropdown="dropdown2" aria-haspopup="true" aria-expanded="false" aria-label="Company">
                    Company
                    {/* <div className="bx bx-chevron-down" aria-hidden="true"></div> */}
                    <div className={styles.arrowDown}><ArrowDown aria-hidden="true"/></div>
                  </button>
                  <div id="dropdown2" className="dropdown">
                    <ul role="menu2">
                      {/* <li>
                        <span className="dropdown-link-title">MMAPP for...</span>
                      </li> */}
                      <li role="menuitem">
                          <a
                            href="/company#companyVision"
                            data-page="/company"
                            data-link="#companyVision"
                            className="dropdown-link">
                            Vision
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/company#companyMission"
                            data-page="/company"
                            data-link="#companyMission"
                            className="dropdown-link">
                            Mission
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/company#companyCoreValues"
                            data-page="/company"
                            data-link="#companyCoreValues"
                            className="dropdown-link">
                            Core Values
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/company#companySecurityCompliance"
                            data-page="/company"
                            data-link="#companySecurityCompliance"
                            className="dropdown-link">
                            Security & Compliance
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/company#companyPolicies"
                            data-page="/company"
                            data-link="#companyPolicies"
                            className="dropdown-link">
                            Policies
                          </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* <li><a className="nav-link" href="/">Security & Compliance</a></li> */}
                <li>
                  <button className="nav-link dropdown-btn" data-dropdown="dropdown3" aria-haspopup="true" aria-expanded="false" aria-label="Product">
                    Product
                    {/* <div className="bx bx-chevron-down" aria-hidden="true"></div> */}
                    <div className={styles.arrowDown}><ArrowDown aria-hidden="true"/></div>
                  </button>
                  <div id="dropdown3" className="dropdown">
                    <ul role="menu3">
                      <li role="menuitem">
                        <a
                          href="/product#productFeatures"
                          data-page="/product"
                          data-link="#productFeatures"
                          className="dropdown-link">
                          Features
                        </a>
                      </li>
                      <li role="menuitem">
                        <a
                          href="/product#productBenefits"
                          data-page="/product"
                          data-link="#productBenefits"
                          className="dropdown-link">
                          Benefits
                        </a>
                      </li>
                      <li role="menuitem">
                        <a
                          href="/product#productContactUs"
                          data-page="/product"
                          data-link="#productContactUs"
                          className="dropdown-link">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <button className="nav-link dropdown-btn" data-dropdown="dropdown4" aria-haspopup="true" aria-expanded="false" aria-label="Contact">
                    Contact
                    <div className={styles.arrowDown}><ArrowDown aria-hidden="true"/></div>
                  </button>
                  <div id="dropdown4" className="dropdown">
                    <ul role="menu4">
                      <li role="menuitem">
                        <a
                          href="/contact#contactContactUs"
                          data-page="/contact"
                          data-link="#contactContactUs"
                          className="dropdown-link">
                          Contact Us
                        </a>
                      </li>
                      <li role="menuitem">
                        <a
                          href="/contact#contactFAQSupport"
                          data-page="/contact"
                          data-link="#contactFAQSupport"
                          className="dropdown-link">
                          FAQs/Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
            </div>
          </div>

          <div className="nav-end">
            <div className="right-container">
              {/* <form className="search" role="search">
                <input type="search" name="search" placeholder="Search" />
                <i className="bx bx-search" aria-hidden="true"></i>
              </form> */}
              {/* <a href="#profile">
                <img src="https://???" width="30" height="30" alt="user image" />
              </a> */}
              <button className="btn btn-primary login-link">
                <a href="#">Login</a>
              </button>
            </div>

            <button id="hamburger" aria-label="hamburger" aria-haspopup="true" aria-expanded="false">
              {/* <i className="bx bx-menu" aria-hidden="true"></i> */}
              <div className={styles.menuSVG}>
                <MenuSVG aria-hidden="true"/>
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;