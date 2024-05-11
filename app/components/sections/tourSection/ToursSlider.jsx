import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import Image from "next/image";
import { FaLocationPin } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import Link from "next/link";
import { Tours } from "@/app/staticdata/data";
import Slider from "react-slick";
const ToursSlider = () => {
  const [settings, setSettings] = useState();
  const resizeHandlerRef = useRef(null);

  const first3 = Tours.filter((item) => {
    if (item.Id <= 3) {
      return item;
    }
  });
  const last3 = Tours.filter((item) => {
    if (item.Id > 3) {
      return item;
    }
  });
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
      <div className="font-bold flex flex-col justify-center items-center text-center my-[100px]">
        <h1 className="secondaryTitle">Popular Tours</h1>
        <p className="mainTitle">Exlore From The Best</p>
      </div>
      <div className="slider-container w-[70%] m-auto">
        <Slider {...settings} className="gap-[5px]">
          {first3.map((item) => {
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

          {last3.map((item) => {
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
        </Slider>
      </div>
    </>
  );
};

export default ToursSlider;
