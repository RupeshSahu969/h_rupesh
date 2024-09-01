"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollToTopButton from "@/components/scrolltopbutton"

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg text-center max-w-3xl mb-8">
        Rupesh Hospitals is always looking to make things easier for you. Our
        aim is to provide our customers with the best medical facilities,
        constant care, and reliable support. If you would like to get in touch
        with a doctor from a specific department, would like some specific
        information about the services we provide, or just have a question for
        us, please fill up the Form given below and we will get back to you.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold">
            <CountUp end={100} duration={3} />+
          </h3>
          <p className="text-lg">Beds</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">
            <CountUp end={108} duration={3} />+
          </h3>
          <p className="text-lg">Eminent Consultants</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">
            <CountUp end={47} duration={3} />+
          </h3>
          <p className="text-lg">ICU Beds</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">
            <CountUp end={15000} duration={5} />+
          </h3>
          <p className="text-lg">Patients Treated</p>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/about1.png"
          alt="Hospital Image 1"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full mt-5">
        <Image
          src="/about2.png"
          alt="Hospital Image 2"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default AboutUs;
