"use client";
import Banner from "@/app/components/secondaryBanner/Banner";
import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import Link from "next/link";
import { Tours } from "@/app/staticdata/data";
import Image from "next/image";
import "@/app/components/sections/tourSection/style.css";
import ToursSlider from "@/app/components/sections/tourSection/ToursSlider";
const page = () => {
  return (
    <>
      <Banner ForCrumb="Tours" />
      <ToursSlider />
      <div className="font-bold flex flex-col justify-center items-center text-center my-[100px]">
        <h1 className="secondaryTitle">All Tours</h1>
        <p className="mainTitle">Pick one to Your Licking </p>
      </div>
      <section className="flex gap-2  flex-wrap items-center justify-center p-[20px] m-[50px]">
        {Tours.map((item) => {
          return (
            <>
              <div className="card grid grid-rows-2 min-w-[300px] h-[500px] justify-self-center self-center">
                <div className="relative image">
                  <Image
                    src={`/images/tours/${item.mainImg}`}
                    objectFit="cover"
                    fill
                    alt="Not found"
                  />
                </div>
                <div className="text bg-white">
                  <h1 className="heading">{item.Title}</h1>
                  <h3 className="details">
                    <FaLocationPin /> {item.tourLocation}
                  </h3>
                  <div className="price">
                    From <span className="text-red-600">${item.Price}</span>
                  </div>
                  <div className="moreDetails">
                    <div className="data">
                      <span>
                        <BsClock />
                        {item.Duration}
                      </span>
                      <span>
                        <BiUser />
                        13
                      </span>
                    </div>
                    <Link href={`/pages/Tours/${item.Id}`} target="_blank">
                      Browse
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default page;
