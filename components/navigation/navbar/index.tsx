"use client";
import React from "react";
import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import { useMediaQuery } from '@react-hook/media-query';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import MenuSVG from "@/components/ui/svg/MenuSVG";
import { LineMdMenu, LineMdMenuToCloseTransition, LineMdCloseToMenuTransition, LineMdCloseToMenuAltTransition } from "@/components/ui/svg/mobileMenu";
import ArrowDown from "@/components/ui/svg/bx-chevron-down";

gsap.registerPlugin(gsap, useGSAP);

const Navbar = (/* { toggle }: { toggle: () => void } */) => {
  const isUnder768 = useMediaQuery('(max-width: 768px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); //This key forces the SVG components to re-mount triggereing the animations again

  function toggleHamburgerSVG() { // Switch the SVGs and trigger the animations
    setIsMenuOpen(!isMenuOpen);
    setAnimationKey(prevKey => prevKey + 1); // Increment the key to force the SVG components to re-mount and trigger the animation again
  }
  
  //console.log("Navbar")
  /* const main = useRef<HTMLElement | null>(null); */
  useEffect(() => {
    const dropdownBtn = document.querySelectorAll(".dropdown-btn") as NodeListOf<HTMLButtonElement>;
    const dropdown = document.querySelectorAll(".dropdown") as NodeListOf<HTMLButtonElement>;
    const hamburgerBtn = document.getElementById("hamburger") as HTMLButtonElement | null;
    const loginLink = document.querySelector(".login-link") as HTMLButtonElement | null;
    const navMenu = document.querySelector(".menu") as HTMLElement | null;
    const navMenuSpacer = document.querySelector(".menu-spacer") as HTMLElement | null;
    const links = document.querySelectorAll(".dropdown a") as NodeListOf<HTMLAnchorElement>;

    if (isUnder768) {
      gsap.set(loginLink, {autoAlpha: 0});
    }

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
      let matchMedia = gsap.matchMedia();
      
      matchMedia.add("(min-width: 768px)", () => {
        navMenu?.classList.toggle("show");
        navMenuSpacer?.classList.toggle("show");
        loginLink?.classList.toggle("show");
      });

      matchMedia.add("(max-width: 767px)", () => {
        if (navMenuSpacer?.classList.contains("show")){
          gsap.fromTo(navMenuSpacer,
            {
              xPercent: 0,
            },
            {
              xPercent: 100,
              duration: 0.15,
              ease:"power1.in",
              delay: 0.2,
              onComplete: () => {
                navMenu?.classList.toggle("show");
                navMenuSpacer?.classList.toggle("show");
                loginLink?.classList.toggle("show");
              },
              onStart: () => {
                gsap.fromTo(loginLink, {xPercent: 0, autoAlpha: 1}, {xPercent: 100, autoAlpha: 0, duration: 0.25, ease:"power1.in"});
              }
            },
          );
          gsap.fromTo(dropdownBtn,
            {
              xPercent: 0,
            },
            {
              xPercent: 100,
              duration: 0.075,
              ease:"power1.out",
              stagger: -0.05,
            },
          );
        } else {
          gsap.fromTo(navMenuSpacer,
            {
              xPercent: 100,
            },
            {
              xPercent: 0,
              duration: 0.15,
              ease:"power1.in",
              onStart: () => {
                navMenu?.classList.toggle("show");
                navMenuSpacer?.classList.toggle("show");
                loginLink?.classList.toggle("show");
                gsap.fromTo(loginLink, {xPercent: 100, autoAlpha: 0}, {xPercent: 0, autoAlpha: 1, duration: 0.1, delay: 0.05, ease:"power1.in"});
              }
            },
          );
          gsap.fromTo(dropdownBtn,
            {
              xPercent: 100,
            },
            {
              xPercent: 0,
              delay: 0.15,
              duration: 0.1,
              ease:"power1.in",
              stagger: 0.05,
            },
          );
        }
      });
    }
    

    /* function toggleHamburgerIfActive() {
      navMenu?.classList.remove("show");
      navMenuSpacer?.classList.remove("show");
    } */

    dropdownBtn.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        const dropdownIndex = (e.currentTarget as HTMLElement)?.dataset.dropdown;
        const dropdownElement = document.getElementById(dropdownIndex as string) as HTMLElement;
        const dropdownContent = dropdownElement.querySelector('ul');
        const dropdownContentLi = dropdownContent?.querySelectorAll('li') as NodeListOf<HTMLLIElement>;
        const dropdownElementA = dropdownElement.querySelectorAll("a") as NodeListOf<HTMLAnchorElement>;
        //const dropdownContentLiS = gsap.utils.toArray('[role="menuitem"]');
        //console.log(dropdownContentLiS)

        /* if (btn.getAttribute("aria-expanded") === "true") {
          closeDropdownMenu();
          console.log("Here")
        } */
        if (dropdownElement?.classList.contains("active")){
          //closeDropdownMenu();
          //setAriaExpandedFalse();
          //console.log("Close");
          /* gsap.fromTo(dropdownContentLi, {xPercent: 0}, {xPercent: 100, duration: 0.125, ease:"back.in", stagger: 0.05}) */
          if (isUnder768) {
            gsap.fromTo(dropdownContentLi,
              {xPercent: 0},
              {
                xPercent: 100,
                duration: 0.1,
                ease:"power1.in",
                stagger: 0.05,
                onComplete: () => {
                  closeDropdownMenu();
                  setAriaExpandedFalse();
                }
              }
            )
          } else {
            closeDropdownMenu();
            setAriaExpandedFalse();
            //gsap.fromTo(dropdownElementA, {yPercent: 0}, {yPercent: -100, duration: 0.25, ease:"power1.out", stagger: 0.05})
          }
          /* dropdownContentLi?.forEach(box => {
            gsap.from(box, {
              ease: "power1.in",
              duration:3,
              stagger: 0.9,
            });
          }); */
        } else {
          dropdownElement?.classList.toggle("active");
          setAriaExpandedFalse();
          btn.setAttribute("aria-expanded", "true")
          //console.log("Open")
          /* gsap.fromTo(dropdownContentLi, {xPercent: 100}, {xPercent: 0, duration: 0.25, ease:"back.out", stagger: 0.1}) */
          if (isUnder768) {
            gsap.fromTo(dropdownContentLi, {xPercent: -100}, {xPercent: 0, duration: 0.125, ease:"power1.out", stagger: 0.05})
          } else {
            gsap.fromTo(dropdownContentLi, {autoAlpha: 0, yPercent: -35}, {autoAlpha: 1, yPercent: 0, duration: 0.175, ease:"power1.in", stagger: 0.05})
          }
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
      link.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
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
      
    /* const dropdownBtn = document.querySelectorAll(".dropdown-btn") as NodeListOf<HTMLButtonElement>;
    const dropdown = document.querySelectorAll(".dropdown") as NodeListOf<HTMLButtonElement>;


    function openDropdownMenu() {
      dropdown.forEach((drop) => {
        if (drop?.classList.contains("active")){
          gsap.fromTo(drop, {height: 0, duration: 5}, {height: "100%", duration: 5})
          console.log("Open")
        } else {
          gsap.fromTo(drop, {height: "100%", duration: 5}, {height: 0, duration: 5})
          console.log("Close")
        }
      });
    } */

  /* GSDevTools.create(); */

  },
  { dependencies: [ /* color, noHover, portrait, under768, isGecko, lettersYInit, lettersYLiftoff, lettersYDrop, lettersYRise */], revertOnUpdate: true, /* scope: main */ }
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
                  <button className="nav-link dropdown-btn group" data-dropdown="dropdown1" aria-haspopup="true" aria-expanded="false" aria-label="About">
                  <img
                    src="/images/logo_on_black.svg"
                    alt="MMAPP Logo"/>
                    {/* <div className="bx bx-chevron-down" aria-hidden="true"></div> */}
                    <div className="arrowDown group-aria-[expanded=false]:rotate-0 group-aria-[expanded=true]:rotate-180 transition-transform"><ArrowDown aria-hidden="true"/></div>
                  </button>
                  <div id="dropdown1" className="dropdown transition-transform">
                    <ul role="menu1">
                      <li role="menuitem">
                          <a
                            href="/#Home"
                            data-page="/"
                            data-link="#Home"
                            className="dropdown-link">
                            Home
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/#SmallMission"
                            data-page="/"
                            data-link="#SmallMission"
                            className="dropdown-link">
                            Small Mission
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/#Features"
                            data-page="/"
                            data-link="#Features"
                            className="dropdown-link">
                            Features
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/#Benefits"
                            data-page="/"
                            data-link="#Benefits"
                            className="dropdown-link">
                            Benefits for everyone
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/#FAQSupport"
                            data-page="/"
                            data-link="#FAQSupport"
                            className="dropdown-link">
                            FAQs/Support
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/#ContactUs"
                            data-page="/"
                            data-link="#ContactUs"
                            className="dropdown-link">
                            Contact Us
                          </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <button className="nav-link dropdown-btn group" data-dropdown="dropdown2" aria-haspopup="true" aria-expanded="false" aria-label="Company">
                    Company
                    {/* <div className="bx bx-chevron-down" aria-hidden="true"></div> */}
                    <div className="arrowDown group-aria-[expanded=false]:rotate-0 group-aria-[expanded=true]:rotate-180 transition-transform"><ArrowDown aria-hidden="true"/></div>
                  </button>
                  <div id="dropdown2" className="dropdown">
                    <ul role="menu2">
                      {/* <li>
                        <span className="dropdown-link-title">MMAPP for...</span>
                      </li> */}
                      <li role="menuitem">
                          <a
                            href="/company#Mission"
                            data-page="/company"
                            data-link="#Mission"
                            className="dropdown-link">
                            Mission
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/company#Vision"
                            data-page="/company"
                            data-link="#Vision"
                            className="dropdown-link">
                            Vision
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/company#CoreValues"
                            data-page="/company"
                            data-link="#CoreValues"
                            className="dropdown-link">
                            Core Values
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/company#SecurityCompliance"
                            data-page="/company"
                            data-link="#SecurityCompliance"
                            className="dropdown-link">
                            Security & Compliance
                          </a>
                      </li>
                      <li role="menuitem">
                          <a
                            href="/company#Policies"
                            data-page="/company"
                            data-link="#Policies"
                            className="dropdown-link">
                            Policies
                          </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* <li><a className="nav-link" href="/">Security & Compliance</a></li> */}
                <li>
                  <button className="nav-link dropdown-btn group" data-dropdown="dropdown3" aria-haspopup="true" aria-expanded="false" aria-label="Product">
                    Product
                    {/* <div className="bx bx-chevron-down" aria-hidden="true"></div> */}
                    <div className="arrowDown group-aria-[expanded=false]:rotate-0 group-aria-[expanded=true]:rotate-180 transition-transform"><ArrowDown aria-hidden="true"/></div>
                  </button>
                  <div id="dropdown3" className="dropdown">
                    <ul role="menu3">
                      <li role="menuitem">
                        <a
                          href="/product#MMAPP-Methodology"
                          data-page="/product"
                          data-link="#MMAPP-Methodology"
                          className="dropdown-link">
                          MMAPP Methodology
                        </a>
                      </li>
                      <li role="menuitem">
                        <a
                          href="/product#Judge"
                          data-page="/product"
                          data-link="#Judge"
                          className="dropdown-link">
                          Judge
                        </a>
                      </li>
                      <li role="menuitem">
                        <a
                          href="/product#RecordKeeper"
                          data-page="/product"
                          data-link="#RecordKeeper"
                          className="dropdown-link">
                          RecordKeeper
                        </a>
                      </li>
                      <li role="menuitem">
                        <a
                          href="/product#Dashboard"
                          data-page="/product"
                          data-link="#Dashboard"
                          className="dropdown-link">
                          Dashboard
                        </a>
                      </li>
                      <li role="menuitem">
                        <a
                          href="/product#Dashboard-Members"
                          data-page="/product"
                          data-link="#Dashboard-Members"
                          className="dropdown-link">
                          Dashboard (Members)
                        </a>
                      </li>
                      <li role="menuitem">
                        <a
                          href="/product#ContactUs"
                          data-page="/product"
                          data-link="#ContactUs"
                          className="dropdown-link">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <button className="nav-link dropdown-btn group" data-dropdown="dropdown4" aria-haspopup="true" aria-expanded="false" aria-label="Contact">
                    Contact
                    <div className="arrowDown group-aria-[expanded=false]:rotate-0 group-aria-[expanded=true]:rotate-180 transition-transform"><ArrowDown aria-hidden="true"/></div>
                  </button>
                  <div id="dropdown4" className="dropdown">
                    <ul role="menu4">
                      <li role="menuitem">
                        <a
                          href="/contact#ContactUs"
                          data-page="/contact"
                          data-link="#ContactUs"
                          className="dropdown-link">
                          Contact Us
                        </a>
                      </li>
                      <li role="menuitem">
                        <a
                          href="/contact#FAQSupport"
                          data-page="/contact"
                          data-link="#FAQSupport"
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
              <button id="loginLink" className="btn btn-primary login-link hover:ring-1 hover:ring-white hover:ring-opacity-85 hover:ring-offset-2">
                <a href="https://dashboard.mmapp.app/login">Login</a>
              </button>
            </div>

            <button id="hamburger" aria-label="hamburger" aria-haspopup="true" aria-expanded="false">
              {/* <i className="bx bx-menu" aria-hidden="true"></i> */}
              <div className="hamburgerMenu" onClick={toggleHamburgerSVG}>
                {isMenuOpen ? (
                  <LineMdMenuToCloseTransition key={animationKey} aria-hidden="true" />
                ) : (
                  <LineMdCloseToMenuAltTransition key={animationKey} aria-hidden="true" />
                )}
              </div>
              {/* <div className="menuSVG">
                <MenuSVG aria-hidden="true"/>
              </div> */}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;