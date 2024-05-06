"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import { HiBars3 } from "react-icons/hi2";

// framer motion variants

const Header = () => {
  const [nav, setNav] = useState(false);
  const [variants, setVarients] = useState();
  const resizeHandlerRef = useRef(null);
  useEffect(() => {
    if (window.innerWidth > 1024) {
      setNav(true);
      setVarients({
        ulactive: { height: "auto", overflow: "visible" },
        ulinactive: { height: "auto", overflow: "visible" },
        active: {
          y: [10, , 5, 0],
          opacity: [0, 0.5, 1],
        },
        inactive: {
          y: [10, 0],
        },
      });
    } else {
      setVarients({
        ulactive: { height: "400px" },
        ulinactive: { height: "0px", overflow: "hidden" },
        active: {
          x: 0,
        },
        inactive: {
          x: -200,
        },
      });
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setNav(true);
        setVarients({
          ulactive: { height: "auto", overflow: "visible" },
          ulinactive: { height: "auto", overflow: "visible" },
          active: {
            y: [10, , 5, 0],
            opacity: [0, 0.5, 1],
          },
          inactive: {
            y: [10, 0],
          },
        });
      } else {
        setVarients({
          ulactive: { height: "400px" },
          ulinactive: { height: "0px", overflow: "hidden" },
          active: {
            x: 0,
          },
          inactive: {
            x: -200,
          },
        });
      }
    };
    resizeHandlerRef.current = handleResize;

    const resizeListener = () => {
      resizeHandlerRef.current();
    };

    window.addEventListener("resize", resizeListener);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <>
      <header className="p-4">
        <motion.nav className="flex lg:flex-row flex-col gap-[20px] items-start justify-between lg:items-center  max-w-[100%] lg:max-w-[90%] m-auto">
          <div className="box flex justify-between items-center   w-[100%] ">
            <div className="flex items-center  gap-4]">
              <div className="md:w-[50px] rounded-full  md:h-[50px] w-[40px] h-[40px] overflow-hidden relative">
                <Image src={"/favicon.ico"} fill objectFit="cover" />
              </div>
              <div className="md:text-[25px] text-[20px]  font-bold">
                Tourism-To-
                <span className="bg-red-700 text-white p-2 rounded-lg">
                  Japan
                </span>
              </div>
            </div>
            <HiBars3
              className="lg:hidden text-[30px]"
              onClick={() => {
                setNav(!nav);
              }}
            />
          </div>
          <AnimatePresence>
            <motion.ul
              variants={variants}
              transition={nav ? { delay: 0.1 } : { delay: 1 }}
              initial="ulinactive"
              animate={nav ? "ulactive" : "ulinactive"}
              exit="ulinactive"
              className={`flex lg:flex-row flex-col gap-[25px] tracking-wider text-[15px] navlink transition-all `}
              layout
            >
              <motion.li
                variants={variants}
                initial="inactive"
                transition={{ delay: 0.5 }}
                animate={nav ? "active" : "inactive"}
                exit="inactive"
                className="lg:opacity-0"
              >
                <Link href="/">Home</Link>
              </motion.li>
              <motion.li
                variants={variants}
                initial="inactive"
                transition={{ delay: 0.7 }}
                animate={nav ? "active" : "inactive"}
                exit="inactive"
                className="lg:opacity-0"
              >
                <Link href="/Home">All Tours</Link>
              </motion.li>
              <motion.li
                variants={variants}
                initial="inactive"
                transition={{ delay: 0.8 }}
                animate={nav ? "active" : "inactive"}
                exit="inactive"
                className="lg:opacity-0"
              >
                <Link href="/Home">About</Link>
              </motion.li>
              <motion.li
                variants={variants}
                initial="inactive"
                transition={{ delay: 0.9 }}
                animate={nav ? "active" : "inactive"}
                exit="inactive"
                className="lg:opacity-0"
              >
                <Link href="/Home">Contact</Link>
              </motion.li>
              <motion.li
                variants={variants}
                initial="inactive"
                transition={{ delay: 1 }}
                animate={nav ? "active" : "inactive"}
                exit="inactive"
                className="lg:opacity-0"
              >
                <Link href="/Home">Terms & Conditions</Link>
              </motion.li>
            </motion.ul>
          </AnimatePresence>
        </motion.nav>
      </header>
    </>
  );
};

export default Header;
