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
import { MenuGlove } from '@/components/ui/svg/MenuGloveSVG';

gsap.registerPlugin(gsap, useGSAP);

const Navbar = (/* { toggle }: { toggle: () => void } */) => {
  const isUnder768 = useMediaQuery('(max-width: 768px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); //This key forces the SVG components to re-mount triggereing the animations again

  /* function toggleHamburgerSVG() { // Switch the SVGs and trigger the animations
    setIsMenuOpen(!isMenuOpen);
    setAnimationKey(prevKey => prevKey + 1); // Increment the key to force the SVG components to re-mount and trigger the animation again
  } */

  //console.log("Navbar")
  /* const main = useRef<HTMLElement | null>(null); */
  useEffect(() => {
    const dropdownBtn = document.querySelectorAll(".dropdown-btn") as NodeListOf<HTMLButtonElement>;
    const dropdown = document.querySelectorAll(".dropdown") as NodeListOf<HTMLButtonElement>;
    const hamburgerBtn = document.getElementById("hamburger") as HTMLButtonElement | null;
    const MenuGloveSVG = document.getElementById("MenuGloveSVG") as HTMLButtonElement | null;
    const loginLink = document.querySelector(".login-link") as HTMLButtonElement | null;
    const mmappsButtons = document.querySelector(".mmappsButtons") as HTMLElement | null;
    const navMenu = document.querySelector(".menu") as HTMLElement | null;
    const navMenuSpacer = document.querySelector(".menu-spacer") as HTMLElement | null;
    const links = document.querySelectorAll(".dropdown a") as NodeListOf<HTMLAnchorElement>;

    if (isUnder768) {
      gsap.set(loginLink, {autoAlpha: 0});
      gsap.set(mmappsButtons, {autoAlpha: 0});
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

    /* function toggleHamburgerSVG() {
      if (navMenuSpacer?.classList.contains("show")){
        setIsMenuOpen(!isMenuOpen);
        setAnimationKey(prevKey => prevKey + 1);
      } else {
        setIsMenuOpen(isMenuOpen);
        setAnimationKey(prevKey => prevKey + 1);
      }
    }; */

    function toggleHamburger() {
      let matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width: 768px)", () => {
        navMenu?.classList.toggle("show");
        navMenuSpacer?.classList.toggle("show");
        loginLink?.classList.toggle("show");
      });

      matchMedia.add("(max-width: 767px)", () => {
        const shouldShow = !navMenuSpacer?.classList.contains("show");
        setIsMenuOpen(shouldShow); // Update based on whether the menu will show or hide
        setAnimationKey(prevKey => prevKey + 1); // Force SVG component re-mount

        if (navMenuSpacer?.classList.contains("show")) {
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
                mmappsButtons?.classList.toggle("show");
              },
              onStart: () => {
                gsap.fromTo(loginLink, {xPercent: 0, autoAlpha: 1}, {xPercent: 100, autoAlpha: 0, duration: 0.25, ease:"power1.in"});
                gsap.fromTo(mmappsButtons, {xPercent: 0, autoAlpha: 1}, {xPercent: 100, autoAlpha: 0, duration: 0.25, ease:"power1.in"});
                //gsap.fromTo(MenuGloveSVG, {xPercent: -50, autoAlpha: 1}, {xPercent: 100, autoAlpha: 1, duration: 0.3, delay: 0.2, ease:"power1.out"});
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
              duration: 0.35,
              ease:"power1.in",
              onStart: () => {
                navMenu?.classList.toggle("show");
                navMenuSpacer?.classList.toggle("show");
                loginLink?.classList.toggle("show");
                mmappsButtons?.classList.toggle("show");
                gsap.fromTo(loginLink, {xPercent: 100, autoAlpha: 0}, {xPercent: 0, autoAlpha: 1, duration: 0.1, delay: 0.05, ease:"power1.in"});
                gsap.fromTo(mmappsButtons, {xPercent: 100, autoAlpha: 0}, {xPercent: 0, autoAlpha: 1, duration: 0.1, delay: 0.05, ease:"power1.in"});
                gsap.fromTo(MenuGloveSVG, {xPercent: 100, autoAlpha: 1}, {xPercent: -100, autoAlpha: 1, duration: 0.5, ease:"power1.out"});
              }
            },
          );
          gsap.fromTo(dropdownBtn,
            {
              xPercent: 100,
            },
            {
              xPercent: 0,
              delay: 0.2,
              duration: 0.1,
              ease:"power1.in",
              stagger: 0.075,
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
            <div className="menu-spacer flex w-full h-full max-h-[100lvh]">
              <nav className="menu">
                <ul className="menu-bar">
                  <li>
                    <button className="nav-link dropdown-btn group" data-dropdown="dropdown1" aria-haspopup="true" aria-expanded="false" aria-label="About">
                    <img
                      src="/images/logos/mmapp/logo_on_black.svg"
                      alt="MMAPP Logo"
                      id="mmappNavMenuLogo"/>
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
                              href="/#OurExpertise"
                              data-page="/"
                              data-link="#OurExpertise"
                              className="dropdown-link">
                              Our Expertise
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
                        {/* <li role="menuitem">
                            <a
                              href="/#FAQSupport"
                              data-page="/"
                              data-link="#FAQSupport"
                              className="dropdown-link">
                              FAQs/Support
                            </a>
                        </li> */}
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
                            FAQs & Support
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
              {/* App's' links */}
              <div className="mmappsButtons flex items-center justify-center md:hidden relative w-screen mt-24">
                <div className="flex flex-col w-screen items-center justify-start">
                  <h6 className="pb-4 text-[1.8rem] text-center text-[var(--purple-250)] deboss">
                    MMAPP<br/>Apps
                  </h6>
                  <div className="flex flex-row w-screen items-center justify-around">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-[1.5rem] pb-[0.125rem] text-transparent bg-clip-text bg-gradient-to-bl from-[var(--purple-200)] to-[var(--purple-400)]">
                        Judge
                      </p>
                      <div className="flex flex-row space-x-3">
                        <a href="https://apps.apple.com/us/app/mmapp-judge/id6446885768" target="_blank" rel="noopener noreferrer" className="">
                          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 -3.552713678800501e-15 820 950" fill="rgb(200, 200, 200)" stroke="none" strokeWidth={0} strokeLinecap="round" strokeLinejoin="round" className="judge apple w-24 h-24 p-4">
                            <path d="M404.345 229.846c52.467 0 98.494-20.488 138.08-61.465s59.38-88.626 59.38-142.947c0-5.966-.472-14.444-1.414-25.434-6.912.942-12.096 1.727-15.552 2.355-48.383 6.908-90.954 30.615-127.713 71.12-36.758 40.506-55.137 83.838-55.137 129.996 0 5.337.785 14.13 2.356 26.375zM592.379 950c37.387 0 78.701-25.59 123.943-76.772S796.122 761.915 820 692.836c-88.912-45.844-133.368-111.626-133.368-197.348 0-71.591 35.973-132.82 107.92-183.688-49.954-62.486-115.931-93.729-197.931-93.729-34.56 0-66.134 5.181-94.724 15.543l-17.908 6.594-24.035 9.42c-15.709 5.966-30.004 8.95-42.885 8.95-10.054 0-23.25-3.455-39.586-10.363l-18.38-7.536-17.436-7.065c-25.449-10.676-52.782-16.014-82-16.014-78.23 0-141.065 26.376-188.506 79.128C23.72 349.479 0 419.03 0 505.379c0 121.517 38.015 233.772 114.046 336.763C166.828 914.047 215.054 950 258.724 950c18.537 0 36.916-3.611 55.138-10.833l23.092-9.42 18.38-6.594c25.762-9.106 49.482-13.659 71.16-13.659 22.935 0 49.326 5.81 79.173 17.427l14.609 5.652C550.75 944.191 574.786 950 592.379 950z"></path>
                          </svg>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.mmapp.mobile" target="_blank" rel="noopener noreferrer" className="">
                          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="42.544 -.671 467.96 553.72" fill="rgb(200, 200, 200)" stroke="none" strokeWidth={0} strokeLinecap="round" strokeLinejoin="round" className="judge android w-24 h-24 p-4">
                            <path d="m76.774 179.141c-9.529 0-17.614 3.323-24.26 9.969s-9.97 14.621-9.97 23.929v142.914c0 9.541 3.323 17.619 9.97 24.266 6.646 6.646 14.731 9.97 24.26 9.97 9.522 0 17.558-3.323 24.101-9.97 6.53-6.646 9.804-14.725 9.804-24.266v-142.914c0-9.309-3.323-17.283-9.97-23.929s-14.627-9.969-23.935-9.969zm275.198-128.294 23.598-43.532c1.549-2.882.998-5.092-1.658-6.646-2.883-1.34-5.098-.661-6.646 1.989l-23.928 43.88c-21.055-9.309-43.324-13.972-66.807-13.972-23.488 0-45.759 4.664-66.806 13.972l-23.929-43.88c-1.555-2.65-3.77-3.323-6.646-1.989-2.662 1.561-3.213 3.764-1.658 6.646l23.599 43.532c-23.929 12.203-42.987 29.198-57.167 51.022-14.18 21.836-21.273 45.698-21.273 71.628h307.426c0-25.924-7.094-49.787-21.273-71.628-14.181-21.824-33.129-38.819-56.832-51.022zm-136.433 63.318c-2.552 2.558-5.6 3.831-9.143 3.831-3.55 0-6.536-1.273-8.972-3.831-2.436-2.546-3.654-5.582-3.654-9.137 0-3.543 1.218-6.585 3.654-9.137 2.436-2.546 5.429-3.819 8.972-3.819s6.591 1.273 9.143 3.819c2.546 2.558 3.825 5.594 3.825 9.137-.007 3.549-1.285 6.591-3.825 9.137zm140.086 0c-2.441 2.558-5.434 3.831-8.971 3.831-3.551 0-6.598-1.273-9.145-3.831-2.551-2.546-3.824-5.582-3.824-9.137 0-3.543 1.273-6.585 3.824-9.137 2.547-2.546 5.594-3.819 9.145-3.819 3.543 0 6.529 1.273 8.971 3.819 2.438 2.558 3.654 5.594 3.654 9.137 0 3.549-1.217 6.591-3.654 9.137zm-231.654 292.639c0 10.202 3.543 18.838 10.63 25.925 7.093 7.087 15.729 10.63 25.924 10.63h24.596l.337 75.454c0 9.528 3.323 17.619 9.969 24.266s14.627 9.97 23.929 9.97c9.523 0 17.613-3.323 24.26-9.97s9.97-14.737 9.97-24.266v-75.447h45.864v75.447c0 9.528 3.322 17.619 9.969 24.266s14.73 9.97 24.26 9.97c9.523 0 17.613-3.323 24.26-9.97s9.969-14.737 9.969-24.266v-75.447h24.928c9.969 0 18.494-3.544 25.594-10.631 7.086-7.087 10.631-15.723 10.631-25.924v-221.361h-305.09zm352.304-227.663c-9.309 0-17.283 3.274-23.93 9.804-6.646 6.542-9.969 14.578-9.969 24.094v142.914c0 9.541 3.322 17.619 9.969 24.266s14.627 9.97 23.93 9.97c9.523 0 17.613-3.323 24.26-9.97s9.969-14.725 9.969-24.266v-142.914c0-9.517-3.322-17.552-9.969-24.094-6.647-6.53-14.737-9.804-24.26-9.804z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <p className="text-[1.5rem] pb-[0.125rem] text-transparent bg-clip-text bg-gradient-to-br from-[var(--purple-200)] to-[var(--purple-400)]">
                        RecordKeeper
                      </p>
                      <div className="flex flex-row space-x-3">
                        <a href="https://apps.apple.com/us/app/mmapp-recordkeeper/id6446888381" target="_blank" rel="noopener noreferrer" className="">
                          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 -3.552713678800501e-15 820 950" fill="rgb(200, 200, 200)" stroke="none" strokeWidth={0} strokeLinecap="round" strokeLinejoin="round" className="recordKeeper apple w-24 h-24 p-4">
                            <path d="M404.345 229.846c52.467 0 98.494-20.488 138.08-61.465s59.38-88.626 59.38-142.947c0-5.966-.472-14.444-1.414-25.434-6.912.942-12.096 1.727-15.552 2.355-48.383 6.908-90.954 30.615-127.713 71.12-36.758 40.506-55.137 83.838-55.137 129.996 0 5.337.785 14.13 2.356 26.375zM592.379 950c37.387 0 78.701-25.59 123.943-76.772S796.122 761.915 820 692.836c-88.912-45.844-133.368-111.626-133.368-197.348 0-71.591 35.973-132.82 107.92-183.688-49.954-62.486-115.931-93.729-197.931-93.729-34.56 0-66.134 5.181-94.724 15.543l-17.908 6.594-24.035 9.42c-15.709 5.966-30.004 8.95-42.885 8.95-10.054 0-23.25-3.455-39.586-10.363l-18.38-7.536-17.436-7.065c-25.449-10.676-52.782-16.014-82-16.014-78.23 0-141.065 26.376-188.506 79.128C23.72 349.479 0 419.03 0 505.379c0 121.517 38.015 233.772 114.046 336.763C166.828 914.047 215.054 950 258.724 950c18.537 0 36.916-3.611 55.138-10.833l23.092-9.42 18.38-6.594c25.762-9.106 49.482-13.659 71.16-13.659 22.935 0 49.326 5.81 79.173 17.427l14.609 5.652C550.75 944.191 574.786 950 592.379 950z"></path>
                          </svg>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.mmapp_central&hl=pt_PT&gl=US" target="_blank" rel="noopener noreferrer" className="">
                          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="42.544 -.671 467.96 553.72" fill="rgb(200, 200, 200)" stroke="none" strokeWidth={0} strokeLinecap="round" strokeLinejoin="round" className="recordKeeper android w-24 h-24 p-4">
                            <path d="m76.774 179.141c-9.529 0-17.614 3.323-24.26 9.969s-9.97 14.621-9.97 23.929v142.914c0 9.541 3.323 17.619 9.97 24.266 6.646 6.646 14.731 9.97 24.26 9.97 9.522 0 17.558-3.323 24.101-9.97 6.53-6.646 9.804-14.725 9.804-24.266v-142.914c0-9.309-3.323-17.283-9.97-23.929s-14.627-9.969-23.935-9.969zm275.198-128.294 23.598-43.532c1.549-2.882.998-5.092-1.658-6.646-2.883-1.34-5.098-.661-6.646 1.989l-23.928 43.88c-21.055-9.309-43.324-13.972-66.807-13.972-23.488 0-45.759 4.664-66.806 13.972l-23.929-43.88c-1.555-2.65-3.77-3.323-6.646-1.989-2.662 1.561-3.213 3.764-1.658 6.646l23.599 43.532c-23.929 12.203-42.987 29.198-57.167 51.022-14.18 21.836-21.273 45.698-21.273 71.628h307.426c0-25.924-7.094-49.787-21.273-71.628-14.181-21.824-33.129-38.819-56.832-51.022zm-136.433 63.318c-2.552 2.558-5.6 3.831-9.143 3.831-3.55 0-6.536-1.273-8.972-3.831-2.436-2.546-3.654-5.582-3.654-9.137 0-3.543 1.218-6.585 3.654-9.137 2.436-2.546 5.429-3.819 8.972-3.819s6.591 1.273 9.143 3.819c2.546 2.558 3.825 5.594 3.825 9.137-.007 3.549-1.285 6.591-3.825 9.137zm140.086 0c-2.441 2.558-5.434 3.831-8.971 3.831-3.551 0-6.598-1.273-9.145-3.831-2.551-2.546-3.824-5.582-3.824-9.137 0-3.543 1.273-6.585 3.824-9.137 2.547-2.546 5.594-3.819 9.145-3.819 3.543 0 6.529 1.273 8.971 3.819 2.438 2.558 3.654 5.594 3.654 9.137 0 3.549-1.217 6.591-3.654 9.137zm-231.654 292.639c0 10.202 3.543 18.838 10.63 25.925 7.093 7.087 15.729 10.63 25.924 10.63h24.596l.337 75.454c0 9.528 3.323 17.619 9.969 24.266s14.627 9.97 23.929 9.97c9.523 0 17.613-3.323 24.26-9.97s9.97-14.737 9.97-24.266v-75.447h45.864v75.447c0 9.528 3.322 17.619 9.969 24.266s14.73 9.97 24.26 9.97c9.523 0 17.613-3.323 24.26-9.97s9.969-14.737 9.969-24.266v-75.447h24.928c9.969 0 18.494-3.544 25.594-10.631 7.086-7.087 10.631-15.723 10.631-25.924v-221.361h-305.09zm352.304-227.663c-9.309 0-17.283 3.274-23.93 9.804-6.646 6.542-9.969 14.578-9.969 24.094v142.914c0 9.541 3.322 17.619 9.969 24.266s14.627 9.97 23.93 9.97c9.523 0 17.613-3.323 24.26-9.97s9.969-14.725 9.969-24.266v-142.914c0-9.517-3.322-17.552-9.969-24.094-6.647-6.53-14.737-9.804-24.26-9.804z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-end">
            <div className="right-container">
            <div id="MenuGloveSVG" className="absolute MenuGloveSVG block md:hidden invisible w-[100vw] h-[25vh] top-0 right-0">
              <MenuGlove />
            </div>
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

            <button id="hamburger" className="block md:hidden relative ml-8 mr-4" aria-label="hamburger" aria-haspopup="true" aria-expanded="false">
              {/* <i className="bx bx-menu" aria-hidden="true"></i> */}
              <div className="hamburgerMenu" /* onClick={toggleHamburgerSVG} */>
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