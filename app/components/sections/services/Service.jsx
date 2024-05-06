import React from "react";
import { easeInOut, motion } from "framer-motion";
import { FaHatCowboy, FaHotel, FaMap, FaPlaneDeparture } from "react-icons/fa6";
const Service = () => {
  return (
    <>
      {" "}
      <h1 className="secondaryTitle w-fit mt-[100px]  mx-auto">Our Services</h1>
      <h2 className="mainTitle w-fit m-auto">Tourism Service we provide</h2>
      <section className="homeSec1 min-h-[200px]  px-10 gap-[40px] grid lg:grid-cols-4 items-center justify-items-center my-[20px] mt-[350px] md:mt-[150px]">
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.7, delay: 0.4 }}
          className="relative flex justify-center items-center flex-col  gap-[10px]"
        >
          <div className="icon">
            <FaMap className="text-[20px]" />
          </div>
          <h2 className="title">Customized Itineraries</h2>
          <p className="description text-xs text-center">
            Personalized travel plans tailored to your preferences and
            interests.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.7, delay: 0.5 }}
          className="relative flex justify-center items-center flex-col  gap-[10px]"
        >
          <div className="icon">
            <FaHatCowboy className="text-[20px]" />
          </div>
          <h2 className="title">Expert Guides</h2>
          <p className="description text-xs text-center">
            Knowledgeable and experienced guides to accompany you on your
            journey
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.7, delay: 0.7 }}
          className="relative flex justify-center items-center flex-col  gap-[10px]"
        >
          <div className="icon">
            <FaPlaneDeparture className="text-[20px]" />
          </div>
          <h2 className="title text-center">Seamless Transportation</h2>
          <p className="description text-xs text-center">
            Hassle-free transportation arrangements for smooth and comfortable
            travels
          </p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.7, delay: 0.8 }}
          className="relative flex justify-center items-center flex-col  gap-[10px]"
        >
          <div className="icon">
            <FaHotel className="text-[20px]" />
          </div>
          <h2 className="title text-center">Exclusive Guides</h2>
          <p className="description text-xs text-center">
            Great Travels with great guides join to know more
          </p>
        </motion.article>
      </section>
    </>
  );
};

export default Service;
