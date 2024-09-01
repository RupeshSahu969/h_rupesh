"use client";
import { useState } from 'react';
import Image from 'next/image';

const BlogPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionContent = (
    <p>
      Rupesh Hospitals is always looking to make things easier for you. Our aim is to provide our customers with the best medical facilities, constant care, and reliable support. If you would like to get in touch with a doctor from a specific department, would like some specific information about the services we provide, or just have a question for us, please fill up the Form given below and we will get back to you.
    </p>
  );

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full h-10 bg-[#032049]"></div>
      <div className="w-full max-w-4xl px-4 mt-10">
        <h2 className="text-3xl font-semibold text-center">Latest Blogs</h2>
        <p className="mt-4 text-center text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Tempor id id purus bibendum ultricies urna. Adipiscing sem sollicitudin euismod lorem ultricies tortor commodo venenatis.
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-10 mt-10">
          <div className="w-full md:w-[387px] bg-gray-200 flex flex-col items-center p-4">
            <Image 
              src="/blogs1.png" 
              alt="Blog Image 1" 
              width={387} 
              height={200} 
              className="object-cover w-full h-auto transition-transform transform hover:scale-105" 
            />
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt quis in libero nec neque magna tempus massa. Nibh ornare vestibulum felis etiam tortor sagittis id vel elit. Euismod phasellus dictum pellentesque tempus vel ac. Porta vitae pharetra urna ornare.
            </p>
            <button 
              onClick={() => handleAccordionClick(0)} 
              className="mt-4 text-blue-500 hover:underline"
            >
              {activeIndex === 0 ? 'Show Less' : 'Read More'}
            </button>
            {activeIndex === 0 && <div className="mt-4 text-gray-700">{accordionContent}</div>}
          </div>
          <div className="w-full md:w-[387px] bg-gray-200 flex flex-col items-center p-4">
            <Image 
              src="/blogs1.png" 
              alt="Blog Image 2" 
              width={387} 
              height={200} 
              className="object-cover w-full h-auto transition-transform transform hover:scale-105" 
            />
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolossr sit amet consectetur. Phasellus tincidunt quis in libero nec neque magna tempus massa. Nibh ornare vestibulum felis etiam tortor sagittis id vel elit. Euismod phasellus dictum pellentesque tempus vel ac. Porta vitae pharetra urna ornare.
            </p>
            <button 
              onClick={() => handleAccordionClick(1)} 
              className="mt-4 text-blue-500 hover:underline"
            >
              {activeIndex === 1 ? 'Show Less' : 'Read More'}
            </button>
            {activeIndex === 1 && <div className="mt-4 text-gray-700">{accordionContent}</div>}
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="flex flex-col items-center text-center">
            <div className="box-border h-40 w-56 border-4 h bg-gray-500 mb-4"></div>
            <h2 className="text-lg font-semibold">Heading</h2>
            <p className="mt-3">
              Lorem ipsum dolor sssit amet consectetur. Phasellus tincidunt quis in libero nec neque magna tempus massa.
            </p>
            <button 
              onClick={() => handleAccordionClick(2)} 
              className="mt-6 text-blue-500 hover:underline"
            >
              {activeIndex === 2 ? 'Show Less' : 'Read More'}
            </button>
            {activeIndex === 2 && <div className="mt-4 text-gray-700">{accordionContent}</div>}
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="box-border h-40 w-56 border-4 bg-gray-500 mb-4"></div>
            <h2 className="text-lg font-semibold">Heading</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt quis in libero nec neque magna tempus massa.
            </p>
            <button 
              onClick={() => handleAccordionClick(3)} 
              className="mt-6 text-blue-500 hover:underline"
            >
              {activeIndex === 3 ? 'Show Less' : 'Read More'}
            </button>
            {activeIndex === 3 && <div className="mt-4 text-gray-700">{accordionContent}</div>}
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="box-border h-40 w-56 border-4 bg-gray-500 mb-4"></div>
            <h2 className="text-lg font-semibold">Heading</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt quis in libero nec neque magna tempus massa.
            </p>
            <button 
              onClick={() => handleAccordionClick(4)} 
              className="mt-6 text-blue-500 hover:underline"
            >
              {activeIndex === 4 ? 'Show Less' : 'Read More'}
            </button>
            {activeIndex === 4 && <div className="mt-4 text-gray-700">{accordionContent}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
