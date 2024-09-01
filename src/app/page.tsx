"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBone,
  faBrain,
  faCalendarCheck,
  faChevronLeft,
  faChevronRight,
  faCommentDots,
  faFileMedical,
  faHeartbeat,
  faLungs,
  faProcedures,
  faStethoscope,
  faTooth,
  faUserMd,
  faVenus,
  faVideo,
  faXRay,
} from "@fortawesome/free-solid-svg-icons";
import ChatBox from "@/components/chatbox";
import ScrollToTopButton from "@/components/scrolltopbutton";
import Ourteam from "@/components/ourteam";
import { Ourstory } from "@/components/ourstory";
import Link from "next/link"; // Import Link from Next.js
import ReviewPage from "@/components/reviews";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false); // State for chat box visibility
  const slides = [
    { src: "/craousel1.png", alt: "Contact Us Image" },
    { src: "/craousel2.png", alt: "Contact Us Image" },
    { src: "/craousel3.png", alt: "Logo Image" },
  ];

  useEffect(() => {
    if (!isSliding) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isSliding]);

  const handlePrev = () => {
    setIsSliding(false);
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
    setTimeout(() => setIsSliding(true), 5000); // Pause for 5 seconds
  };

  const handleNext = () => {
    setIsSliding(false);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    setTimeout(() => setIsSliding(true), 5000); // Pause for 5 seconds
  };

  return (
    <div className="space-y-3 text-justify p-4">
      <p className="justify-between">Your introduction text here</p>

      <div className="relative w-full h-96 md:h-screen overflow-hidden">
        <div className="relative w-full h-5/6">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{ transition: "opacity 0.5s ease-in-out" }}
            >
              <Image
                className="rounded-[5px]"
                loading="lazy"
                alt={slide.alt}
                src={slide.src}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white p-3 rounded-full z-20"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <FontAwesomeIcon size="3x" icon={faChevronLeft} />
          </button>
          <button
            className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white p-3 rounded-full z-20"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <FontAwesomeIcon size="3x" icon={faChevronRight} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute inset-x-0 top-3/4 mt-10  transform -translate-y-1/2 flex justify-center space-x-2 z-40 p-2 rounded-full">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-gray-400" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Chat Button */}
      <button
        className="fixed top-3/4 right-1  bg-green-500 px-3 text-white p-2 rounded-full shadow-lg z-50"
        onClick={() => setIsChatOpen(true)}
        aria-label="Open chat"
      >
        <FontAwesomeIcon icon={faCommentDots} />
      </button>

      {/* Chat Box */}
      {isChatOpen && <ChatBox onClose={() => setIsChatOpen(false)} />}

      {/* Other content sections */}

      <div className="w-full flex flex-col items-center justify-start gap-10 mt-10 text-black font-poppins">
        <section className="text-center">
          <h1 className="text-3xl font-medium">What You Like To Do Today?</h1>
        </section>
        <div className="text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="bg-[#577297] w-full p-10 mt-10 flex flex-wrap justify-center gap-10">
          {[
            {
              icon: faCalendarCheck,
              text: "Book Appointment",
              href: "/bookappointment",
            },
            {
              icon: faStethoscope,
              text: "Book Health Check-up",
              href: "/bookhealthcheckup",
            },
            { icon: faVideo, text: "Consult Online", href: "/consultonline" },
            {
              icon: faFileMedical,
              text: "View Health Records",
              href: "/viewhealthrecords",
            },
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              <article
                key={index}
                className="flex flex-col items-center   text-center text-black bg-white p-6 rounded-2xl w-40"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  size="2x"
                  style={{ marginBottom: "10px" }}
                />
                <h2 className="text-lg font-semibold">{item.text}</h2>
              </article>
            </Link>
          ))}
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-10 mt-10 text-black font-poppins">
          <section className="text-center">
            <h1 className="text-3xl font-medium">
              Explore our Centers of Clinical Excellence
            </h1>
          </section>
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-center gap-10 mt-10">
              {[
                {
                  icon: faUserMd,
                  text: "Endocrinology",
                  href: "/endocrinology",
                },
                { icon: faXRay, text: "Radiology", href: "/radiology" },
                { icon: faVenus, text: "Gynecology", href: "/gynecology" },
                { icon: faTooth, text: "Dentistry", href: "/dentistry" },
                { icon: faLungs, text: "Pulmonology", href: "/pulmonology" },
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <article className="flex flex-col items-center text-center text-black bg-slate-200 p-6 rounded-2xl w-40 hover:bg-blue-300 hover:text-white">
                    <FontAwesomeIcon
                      icon={item.icon}
                      size="2x"
                      style={{ marginBottom: "10px" }}
                    />
                    <h2 className="text-lg font-semibold">{item.text}</h2>
                  </article>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
              {[
                { icon: faHeartbeat, text: "Cardiology", href: "/cardiology" },
                { icon: faBrain, text: "Neurology", href: "/neurology" },
                { icon: faBone, text: "Orthopedic", href: "/orthopedic" },
                { icon: faProcedures, text: "Urology", href: "/urology" },
                { icon: faProcedures, text: "Nephrology", href: "/nephrology" },
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <article className="flex flex-col items-center text-center text-black bg-slate-200 p-6 rounded-2xl w-40 hover:bg-blue-300 hover:text-white">
                    <FontAwesomeIcon
                      icon={item.icon}
                      size="2x"
                      style={{ marginBottom: "10px" }}
                    />
                    <h2 className="text-lg font-semibold">{item.text}</h2>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Ourstory />
      <ReviewPage />

      <Ourteam />

      <div className="w-full flex flex-col items-center justify-center gap-10 mt-10 text-black font-poppins">
        <section className="text-center">
          <h1 className="text-3xl font-medium">What’s new at Rupesh</h1>
        </section>
        <div className="text-center">
          Lorem ipsum dolor sit amet consectetur. Tempor id id purus bibendum
          ultricies urna. Adipiscing sem sollicitudin euismod lorem ultricies
          tortor commodo venenatis.
        </div>
        <div className="flex justify-center gap-6">
          <h3>
            <u>Stories</u>
          </h3>
          <h3>
            <u>Events</u>
          </h3>
          <h3>
            <u>Announcements</u>
          </h3>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="box-border h-40 w-56 border-4 bg-gray-500 mb-4"></div>
          <h2 className="text-lg font-semibold">Heading</h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt quis in
            libero nec neque magna tempus massa.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="box-border h-40 w-56 border-4 bg-gray-500 mb-4"></div>
          <h2 className="text-lg font-semibold">Heading</h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt quis in
            libero nec neque magna tempus massa.
          </p>
          <h5 className="mt-6">Read More</h5>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="box-border h-40 w-56 border-4 bg-gray-500 mb-4"></div>
          <h2 className="text-lg font-semibold">Heading</h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt quis in
            libero nec neque magna tempus massa.
          </p>
        </div>
      </div>
      {/* <ScrollToTopButton /> */}
    </div>
  );
}
