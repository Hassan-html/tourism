"use client";

import React from "react";
import Banner from "@/app/components/secondaryBanner/Banner";
import WhyUs from "@/app/components/sections/whyus/whyUs";
import Service from "@/app/components/sections/services/Service";
import Client from "@/app/components/sections/Clients/Client";
const page = () => {
  return (
    <>
      <Banner ForCrumb="About" />
      <section className="section-1 px-4">
        <h1 className="secondaryTitle w-fit m-auto">Leave us a message</h1>
        <h2 className="mainTitle w-fit m-auto">Contact Form</h2>
      </section>
      <WhyUs />
      <Service />
      <Client />
    </>
  );
};

export default page;
