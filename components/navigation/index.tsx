"use client";
import { useState } from "react";
import Navbar from "./navbar";

const Navigation = () => {
  //console.log("Navigation")
  // toggle sidebar
  /* const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }; */
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar /* toggle={toggle} */ />
    </>
  );
};

export default Navigation;