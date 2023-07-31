"use client";
import Menudata from "@/data/Menudata/Menudata";
import Logo from "@/svg/Logo";
import Link from "next/link";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});

const Menubar = () => {
  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Link href="#">
          <Logo />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {Menudata?.map((menu, i) => (
              <Link
                className={DmSans.className + " " + "mx-2"}
                href={menu.url}
                key={i}
              >
                {menu.title}
              </Link>
            ))}
          </Nav>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            className={DmSans.className}
          >
            contact now
          </motion.button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
