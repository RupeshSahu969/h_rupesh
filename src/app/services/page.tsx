import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMd,
  faXRay,
  faVenus,
  faTooth,
  faLungs,
  faHeartbeat,
  faBrain,
  faBone,
  faProcedures,
} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

export default function SpecialtiesPage() {
  return (
    <> 
      <div className="flex flex-col items-center justify-center px-4 py-8">
        <h2 className="text-3xl font-semibold text-center">Our Specialties and Sub Specialties</h2>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur. Tempor id id purus bibendum ultricies urna. Adipiscing sem sollicitudin euismod lorem ultricies tortor commodo venenatis.</p>
        
        <div className="w-full mt-14">
          <Image src="/about1.png" alt="Hospital Image 1" width={1920} height={1080} className="w-full" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {[
              { icon: faUserMd, text: "Endocrinology" },
              { icon: faXRay, text: "Radiology" },
              { icon: faVenus, text: "Gynecology" },
              { icon: faTooth, text: "Dentistry" },
              { icon: faLungs, text: "Pulmonology" },
            ].map((item, index) => (
              <article
                key={index}
                className="flex flex-col items-center text-center text-black bg-slate-300 p-6 rounded-2xl w-40 hover:bg-blue-300 hover:text-white"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  width={20}
                  height={20} // Adjust size here
                  style={{ marginBottom: "10px" }}
                />
                <h2 className="text-lg font-semibold">{item.text}</h2>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {[
              { icon: faHeartbeat, text: "Cardiology" },
              { icon: faBrain, text: "Neurology" },
              { icon: faBone, text: "Orthopedic" },
              { icon: faProcedures, text: "Urology" },
              { icon: faProcedures, text: "Nephrology" },
            ].map((item, index) => (
              <article
                key={index}
                className="flex flex-col items-center text-center text-black bg-slate-300 p-6 rounded-2xl w-40 hover:bg-blue-300 hover:text-white"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  width={20}
                  height={20}// Adjust size here
                  style={{ marginBottom: "10px" }}
                />
                <h2 className="text-lg font-semibold">{item.text}</h2>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
