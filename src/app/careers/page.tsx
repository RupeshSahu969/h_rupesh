import React from "react";
import Image from "next/image";

export default function Careers() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-8">
        <h2 className="text-3xl font-semibold text-center">
          Our Specialties and Sub Specialties
        </h2>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur. Tempor id id purus bibendum
          ultricies urna. Adipiscing sem sollicitudin euismod lorem ultricies
          tortor commodo venenatis.
        </p>

        <div className="relative w-full mt-14">
          {/* Container for the Image and Overlay Text */}
          <div className="relative">
            {/* Text Overlay */}
            <div className="relative w-full">
              {/* Image */}
              <Image
                src="/careers1.png"
                alt="Hospital Image 1"
                width={1920}
                height={1080}
                className="w-full"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50 text-white">
                {/* Heading */}
                <h1 className="text-3xl mt-20 font-bold mb-4">
                  Career At Rupesh
                </h1>
                {/* Paragraph */}
                <p className="text-xl font-semibold text-center">
                  At Fortis, our vision is to create a world-class integrated
                  healthcare delivery system in India, entailing the finest
                  medical skills combined with compassionate patient care.
                  Empowered by our values Patient centricity, Teamwork,
                  Ownership, Innovation, and Integrity, we are transforming care
                  across our hospital network.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <h2 className="text-xl font-semibold">Explore Opportunities</h2>
        </div>

        {/* Image Rows */}
        <div className="w-full flex flex-col gap-10 mt-10">
          {/* First Row */}
          <div className="flex flex-row justify-center gap-10">
            <div className="w-full md:w-[387px] bg-gray-200 flex flex-col items-center p-4">
              <Image
                src="/careers2.png"
                alt="Careers Image 1"
                width={387}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="w-full md:w-[387px] bg-gray-200 flex flex-col items-center p-4">
              <Image
                src="/careers3.png"
                alt="Careers Image 2"
                width={387}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-row justify-center gap-10">
            <div className="w-full md:w-[387px] bg-gray-200 flex flex-col items-center p-4">
              <Image
                src="/careers4.png"
                alt="Careers Image 3"
                width={387}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="w-full md:w-[387px] bg-gray-200 flex flex-col items-center p-4">
              <Image
                src="/careers5.png"
                alt="Careers Image 4"
                width={387}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-row justify-center gap-10">
            <div className="w-full md:w-[387px] bg-gray-200 flex flex-col items-center p-4">
              <Image
                src="/careers6.png"
                alt="Careers Image 5"
                width={387}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="w-full md:w-[387px] bg-gray-200 flex flex-col items-center p-4">
              <Image
                src="/careers3.png"
                alt="Careers Image 6"
                width={387}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
