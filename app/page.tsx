"use client";
import Image from "next/image";
import Link from "next/link";
import WhyUs from "@/app/components/sections/whyus/whyUs";
import ToursSlider from "@/app/components/sections/tourSection/ToursSlider";
import Service from "@/app/components/sections/services/Service";
import Client from "@/app/components/sections/Clients/client";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col md:flex-row justify-end items-center w-full overflow-hidden">
        <video
          className="w-full"
          autoPlay
          muted
          onEnded={(e) => {
            e.currentTarget.currentTime = 0;
            e.currentTarget.play();
          }}
        >
          <source src="/vedios/japan.mp4" type="video/mp4" />
          Your browser doesnt support the vedio tag
        </video>
        <div className="relative md:absolute flex flex-col justify-center  left-0  h-full md:w-[40%] items-center text-black md:text-white md:text-start text-center ">
          <div className="half-box "></div>
          <section className="z-10 mt-[20px] md:mt-auto md:w-[60%] m-auto flex md:items-start justify-center items-center  flex-col  gap-5">
            {" "}
            <div className="text ">
              <h1 className="text-[25px] md:text-[35px] font-[900]">
                <span className="tracking-[10px]">T.R.A.V.E.L</span>{" "}
                <div>Like Never Before</div>
              </h1>
              <p className="text-sm mt-2">
                Your gateway to adventure, discovery, and unforgettable
                experiences. Let us guide you on your next journey.
              </p>
            </div>
            <Link href={"/"} className="primary-btn text-white">
              Book Now
            </Link>
          </section>
        </div>
      </div>

      <Service />
      <ToursSlider />
      <WhyUs />
      <Client />
    </>
  );
}
