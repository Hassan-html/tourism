"use client";
import { GiCrossedBones } from "react-icons/gi";
import React, { useEffect } from "react";
import { Tours } from "@/app/staticdata/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaLocationPin, FaUserGroup } from "react-icons/fa6";
import { Accordion } from "flowbite-react";
import { FaCheck, FaClock, FaPhone, FaPlaneDeparture } from "react-icons/fa";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import "./style.css";
import ToursSlider from "@/app/components/sections/tourSection/ToursSlider";

const TourDetail = () => {
  const param = useParams();
  const filteredData = Tours.filter((item) => {
    if (item.Id == param.id) {
      return item;
    }
  });
  useEffect(() => {
    console.log(Tours, param.id, filteredData);
  }, []);

  return (
    <>
      {!filteredData
        ? "No such tours found"
        : filteredData.map((item) => {
            return (
              <>
                <div className="gallery">
                  <div className="relative image h-[500px]">
                    <iframe
                      className="w-full h-full"
                      src={item.vlink}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                      onEnded={(e) => {
                        e.currentTarget.currentTime = 0;
                        e.currentTarget.play();
                      }}
                    ></iframe>
                  </div>
                  <div className="details">
                    <h1 className="Title">{item.Title}</h1>
                    <h3>
                      <FaLocationPin /> {item.tourLocation}
                    </h3>
                    <hr />
                    <div className="groups">
                      <div className="group">
                        <FaUserGroup />
                        <p className="grid grid-rows-2">
                          <span>From</span>
                          <span>${item.Price} For 5 persons</span>
                        </p>
                      </div>
                      <div className="group">
                        <FaClock />
                        <p className="grid grid-rows-2">
                          <span>Duration</span>
                          <span>{item.Duration}</span>
                        </p>
                      </div>
                      <div className="group">
                        <FaPlaneDeparture />
                        <p className="grid grid-rows-2">
                          <span>Tour Type</span>
                          <span>Private Tour</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end items-center p-4 gap-2">
                      <Link href="phone:+8180-8170-5680">
                        <FaPhone /> Call:+81 80-8170-5680
                      </Link>
                      <Link href="https://wa.me/818081705680?text=">
                        <BsWhatsapp /> Chat on whatsapp
                      </Link>
                    </div>
                  </div>
                </div>
                <section className="grid md:grid-cols-2 gap-4">
                  <section className="overview p-2 my-[50px] max-w-[600px]">
                    <h2 className="font-bold ">Overview</h2>
                    <p className="text-[15px] my-[30px]">{item.Overview[0]}</p>

                    {item.Overview[1].map((oitem) => {
                      return (
                        <li className="pl-8 text-[12px] text-opacity-60 list-disc">
                          {oitem}
                        </li>
                      );
                    })}

                    <Link
                      href="/pages/Contact"
                      className="primary-btn my-[40px] w-fit"
                    >
                      Book Now
                    </Link>
                    <hr />
                    <h1 className="font-bold p-2">Include/Exclude</h1>
                    <section className="p-8 gap-4 grid grid-cols-2">
                      <div className="includes grid gap-4">
                        {item.include.map((iItem) => {
                          return (
                            <>
                              <FaCheck className="text-red-400" /> {iItem}
                            </>
                          );
                        })}
                      </div>
                      <div className="exclude grid gap-4">
                        {item.exclude.map((eItem) => {
                          return (
                            <>
                              <span>
                                <GiCrossedBones className="text-gray-400" />{" "}
                                {eItem}
                              </span>
                            </>
                          );
                        })}
                      </div>
                    </section>
                    <hr />
                    <h1 className="font-bold p-2">Tour Amenities</h1>
                    <section className="grid grid-cols-2 p-4 gap-4">
                      {item.TourAmenities.map((AItem) => {
                        return <li>{AItem}</li>;
                      })}
                    </section>
                    <hr />
                    <section className="plan">
                      {item.TourPlan.map((pitem, index) => {
                        return (
                          <>
                            <Accordion collapseAll>
                              <Accordion.Panel>
                                <Accordion.Title>
                                  ({index + 1}){pitem.title}
                                </Accordion.Title>
                                <Accordion.Content>
                                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    {pitem.detail}
                                  </p>
                                  <p className="font-bold">{pitem.duration}</p>
                                </Accordion.Content>
                              </Accordion.Panel>
                            </Accordion>
                          </>
                        );
                      })}
                    </section>
                  </section>
                  <section className="details">
                    <article className="tourDetails">
                      <h4 className="font-bold border-l-red-400 text-[20px] pl-4">
                        Tour Info
                      </h4>
                      <div className="tourInfo">
                        <div className="group">
                          <FaUserGroup />
                          <p className="grid grid-rows-2">
                            <span>From</span>
                            <span>${item.Price} For 5 persons</span>
                          </p>
                        </div>
                        <div className="group">
                          <FaClock />
                          <p className="grid grid-rows-2">
                            <span>Duration</span>
                            <span>{item.Duration}</span>
                          </p>
                        </div>
                        <div className="group">
                          <FaPlaneDeparture />
                          <p className="grid grid-rows-2">
                            <span>Tour Location</span>
                            <span>{item.tourLocation}</span>
                          </p>
                        </div>
                        <div className="group">
                          <FaPlaneDeparture />
                          <p className="grid grid-rows-2">
                            <span>Language Suport</span>
                            <span>English</span>
                          </p>
                        </div>
                      </div>
                    </article>
                  </section>
                </section>
                <section className="grid p-4  gap-4 mt-[50px]">
                  <h2 className="font-bold ">Pickup details</h2>
                  <article className="text-[15px] my-[30px]">
                    If you want to be picked up outside the Tokyo, kindly let us
                    know in advance As we might charge extra depending upon the
                    location. The driver might get late up to 30 minutes in case
                    of any disruption like congestion or accident. It’s a 10
                    hours tour from pickup to drop off. The overtime will be
                    charged 5,000-10,000 Japanese yen per hour depending upon
                    the type of vehicle. *CONSUMER DISCLOSURE NOTICE
                    (Disclaimer)* Supplier shall not be responsible for any
                    injuries, damages or losses caused to any traveler in
                    connection with terrorist activities, social or labor
                    unrest, mechanical or construction failures or difficulties,
                    diseases, local laws, climatic conditions, abnormal
                    conditions or developments, or any other actions, omissions,
                    or conditions outside the Supplier’s control.{" "}
                  </article>
                  <h2 className="font-bold ">Cancellation Policy</h2>
                  <article className="text-[15px] my-[30px]">
                    You can cancel up to 24 hours in advance of the experience
                    for a full refund.
                    <li>
                      For a full refund, you must cancel at least 24 hours
                      before the experience’s start time.
                    </li>
                    <li>
                      If you cancel less than 24 hours before the experience’s
                      start time, the amount you paid will not be refunded.
                    </li>
                    <li>
                      Any changes made less than 24 hours before the
                      experience’s start time will not be accepted.
                    </li>
                    <li>
                      Cut-off times are based on the experience’s local time.
                    </li>
                    <li>
                      This experience requires good weather. If it’s canceled
                      due to poor weather, you’ll be offered a different date or
                      a full refund.
                    </li>
                  </article>
                  <h2 className="font-bold ">Additional Info</h2>
                  <p>Contact for more info</p>
                </section>
                <ToursSlider />
              </>
            );
          })}
    </>
  );
};
export default TourDetail;
