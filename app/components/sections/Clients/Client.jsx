"use client";
import React, { useEffect, useState, useRef } from "react";

import { Card } from "flowbite-react";
import Image from "next/image";
import Slider from "react-slick";

export default function Client() {
  const [settings, setSettings] = useState();
  const resizeHandlerRef = useRef(null);
  useEffect(() => {
    if (window.innerWidth > 1024) {
      setSettings({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      });
    } else if (window.innerWidth < 1024 && window.innerWidth > 500) {
      setSettings({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      });
    } else {
      setSettings({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      });
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setSettings({
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        });
      } else if (window.innerWidth < 1024 && window.innerWidth > 500) {
        setSettings({
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        });
      } else {
        setSettings({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
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
      <section>
        <h1 className="secondaryTitle w-fit m-auto">Clients</h1>
        <h2 className="mainTitle w-fit m-auto">
          What Clients have to say about Us
        </h2>

        <div className="slider-container w-[70%] m-auto">
          <Slider {...settings} className="gap-[10px]">
            <div className="grid grid-cols-2 gap-2 border-black rounded-[10px] shadow-xl border-opacity-45 w-[300px] max-w-[400px] bg-red-400 text-white">
              <div className="image relative flex justify-center items-center">
                <div className="image relative w-[50px] h-[50px] overflow-hidden rounded-none">
                  <Image
                    src="/images/person/image-1.jpg"
                    objectFit="cover"
                    fill
                  />
                </div>
              </div>
              <div className="text ">
                <h2 className="font-bold w-fit my-2 p-2  text-center mx-auto">
                  Jon
                </h2>
                <p className="text-center p-2">
                  Have Been Pleasure to work with you see you again in next
                  summer{" "}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 border-black rounded-[10px] shadow-xl border-opacity-45 w-[300px] max-w-[400px] bg-red-400 text-white">
              <div className="image relative flex justify-center items-center">
                <div className="image relative w-[50px] h-[50px] overflow-hidden rounded-none">
                  <Image
                    src="/images/person/image-1.jpg"
                    objectFit="cover"
                    fill
                  />
                </div>
              </div>
              <div className="text ">
                <h2 className="font-bold w-fit my-2 p-2  text-center mx-auto">
                  Jon
                </h2>
                <p className="text-center p-2">
                  Have Been Pleasure to work with you see you again in next
                  summer{" "}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 border-black rounded-[10px] shadow-xl border-opacity-45 w-[300px] max-w-[400px] bg-red-400 text-white">
              <div className="image relative flex justify-center items-center">
                <div className="image relative w-[50px] h-[50px] overflow-hidden rounded-none">
                  <Image
                    src="/images/person/image-1.jpg"
                    objectFit="cover"
                    fill
                  />
                </div>
              </div>
              <div className="text ">
                <h2 className="font-bold w-fit my-2 p-2  text-center mx-auto">
                  Jon
                </h2>
                <p className="text-center p-2">
                  Have Been Pleasure to work with you see you again in next
                  summer{" "}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 border-black rounded-[10px] shadow-xl border-opacity-45 w-[300px] max-w-[400px] bg-red-400 text-white">
              <div className="image relative flex justify-center items-center">
                <div className="image relative w-[50px] h-[50px] overflow-hidden rounded-none">
                  <Image
                    src="/images/person/image-1.jpg"
                    objectFit="cover"
                    fill
                  />
                </div>
              </div>
              <div className="text ">
                <h2 className="font-bold w-fit my-2 p-2  text-center mx-auto">
                  Jon
                </h2>
                <p className="text-center p-2">
                  Have Been Pleasure to work with you see you again in next
                  summer{" "}
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
