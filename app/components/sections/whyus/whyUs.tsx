import React from "react";
import "./WhyUs.css";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const WhyUs = () => {
  return (
    <>
      <section className="whyus grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:p-2  p-4 mt-[100px] gap-[10px] my-[200px]">
        {/* image */}
        <div className="w-full h-full relative md:w-[600px] md:h-[400px] justify-self-end gap-[10px] ml-2">
          <Image
            src="/images/jp-scene.jpg"
            objectFit="cover"
            fill
            alt="image"
          />
        </div>
        {/* text */}
        <article className="text">
          <div className="secondaryTitle">About US</div>
          <div className="mainTitle">Welcome to Tourism</div>
          <p>
            At Tourism to Japan, we specialize in crafting unforgettable travel
            experiences that delve deep into the heart of Japan's rich culture,
            captivating history, and breathtaking landscapes. From the bustling
            streets of Tokyo to the serene temples of Kyoto, embark on a journey
            of discovery with us.
          </p>
          <div className=" w-full grid grid-rows-2 md:grid-cols-2">
            <ul>
              <li>
                <FaArrowRight className="icon" /> English Guides{" "}
              </li>
              <li>
                <FaArrowRight className="icon" />5 Adventure Tours{" "}
              </li>
              <li>
                <FaArrowRight className="icon" />
                150 Premium City Tours{" "}
              </li>
            </ul>
            <ul>
              <li>
                <FaArrowRight className="icon" />
                Mountain Tours
              </li>
              <li>
                <FaArrowRight className="icon" />
                Latest Model Vehicles
              </li>
              <li>
                <FaArrowRight className="icon" />
                24/7 Service
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};

export default WhyUs;
