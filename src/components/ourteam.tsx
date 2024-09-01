import React from "react";
import Image from "next/image";

const teamMembers = [
  { name: "Dr. Atirek Sinha", specialty: "General Surgeon And Laparoscopic Surgeon", image: "/avatar2.jpg" },
  { name: "Dr. Ravi Kumar", specialty: "Cardiologist", image: "/avatar1.jpeg" },
  { name: "Dr. Anjali Mehta", specialty: "Dermatologist", image: "/avatar2.jpg" },
  { name: "Dr. Pranav Sharma", specialty: "Orthopedic Surgeon", image: "/avatar1.jpeg" },
  { name: "Dr. Nisha Verma", specialty: "Pediatrician", image: "/avatar1.jpeg" },
  { name: "Dr. Aakash Singh", specialty: "Neurologist", image: "/avatar2.jpg" },
];

const Ourteam = () => {
  return (
    <div className="w-full relative bg-[#AAB8CB] flex flex-col items-center justify-start pt-[124px] px-5 pb-[124.9px] box-border gap-[69px] leading-[normal] tracking-[normal] mq750:gap-[17px] mq1125:gap-[34px]">
      <div className="w-[1512px] h-[790px] relative bg-lightsteelblue-100 hidden max-w-full" />
      <section className="w-full max-w-[1092px] flex flex-col items-start justify-center py-0 px-2 box-border text-left text-[27.1px] text-darkslateblue font-montserrat">
        <div className="w-full flex flex-col items-start justify-start gap-[7px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center ">
            <a className="[text-decoration:none] relative tracking-[-0.06em] font-medium text-[inherit] z-[1] mq450:text-[22px]">
              OUR TEAM
            </a>
          </div>
          <div className="self-stretch flex flex-row items-start  justify-center  ">
            Our Team Of Well-trained Experienced Doctors
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1092px] flex flex-col items-end justify-start gap-[53.2px] box-border text-left text-base-2 text-black font-montserrat mq750:gap-[27px]">
        <div className="w-full flex flex-wrap items-start justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-[calc(33.33%-1.5rem)] flex flex-row rounded-[6.08px] bg-white items-end justify-start py-[11.4px] px-[11px] box-border gap-[21.3px]">
              <Image
                className="rounded-[3.04px] object-cover z-[1]"
                loading="lazy"
                alt={member.name}
                src={member.image}
                width={108}
                height={108}
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[10.1px] box-border min-w-[140px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5.3px]">
                  <div className="relative inline-block min-w-[118px] z-[1]">
                    {member.name}
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[14.1px] text-smi-2 text-grey">
                    <div className="self-stretch relative z-[1]">
                      {member.specialty}
                    </div>
                    <div className="relative text-darkslateblue inline-block min-w-[79px]">{`View Profile>`}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
          <button className="cursor-pointer border-darkslateblue border-[1px] border-solid py-1.5 pl-[25px] pr-6 bg-[transparent] rounded-[5.29px] flex flex-row items-start justify-start shrink-0 z-[1]">
            <div className="relative text-[17.9px] font-medium font-montserrat text-darkslateblue text-left">
              <span className="tracking-[-0.06em]">View all Doctors</span>
            </div>
            <div className="h-[37.1px] w-[180px] relative rounded-[5.29px] border-darkslateblue border-[1px] border-solid box-border hidden" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Ourteam;
