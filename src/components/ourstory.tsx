import React from "react";
import Image from "next/image";

export const Ourstory = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center justify-start gap-3.3 leading-normal tracking-normal text-center text-darkslateblue font-montserrat">
      <div className="w-full max-w-[1097px] flex flex-col items-center justify-start gap-[49px] mq450:gap-[25px]">
        <section className="w-full flex flex-col items-center justify-center py-0 px-5 box-border text-21xl text-black font-montserrat">
          <div className="w-full flex flex-col items-center justify-start gap-[23px]">
            <div className="w-full flex justify-center py-0 px-5">
              <a className="[text-decoration:none] relative font-semibold text-black text-center mq450:text-[24px] mq900:text-[32px]">
                Our Story
              </a>
            </div>
            <div className="relative text-lg text-black">
              Lorem ipsum dolor sit amet consectetur. Tempor id id purus
              bibendum ultricies urna. Adipiscing sem sollicitudin euismod lorem
              ultricies tortor commodo venenatis.
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-[38px] text-lg text-black font-montserrat mq450:gap-[19px]">
          <Image
            className="h-auto flex-1 relative rounded-2xl max-w-full overflow-hidden object-cover min-w-[352px] mq450:min-w-full"
            alt="Our Story"
            src="/blogs1.png"
            width={1500}
            height={800}
            quality={100}
          />
          <div className="w-full max-w-[480px] flex flex-col items-start justify-start pt-0 px-0 pb-[45px] box-border min-h-[459px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[31px]">
              <div className="self-stretch relative">
                <p className="m-0">
                  At Rupesh Healthcare, our journey began with a vision to
                  provide exceptional medical care that goes beyond treating
                  illnesses. Founded by a team of dedicated healthcare
                  professionals, our mission has always been to enhance the
                  well-being of our community through compassionate, innovative,
                  and patient-centered care
                </p>
                <p className="m-0">&nbsp;</p>

                <p className="m-0">
                  From humble beginnings, we have grown into a comprehensive
                  healthcare provider, offering a wide range of medical services
                  and specialties. Our team of experienced doctors, nurses, and
                  support staff work tirelessly to ensure that each patient
                  receives personalized and effective treatment.
                </p>

                <p className="m-0">
                  We pride ourselves on using state-of-the-art technology to
                  deliver accurate diagnoses and advanced treatments. Our
                  facilities are designed with patient comfort and convenience
                  in mind, making healthcare accessible and stress-free.
                </p>
                <p className="m-0">
                  As we continue to grow, our commitment to excellence remains
                  steadfast. We are dedicated to being a trusted partner in your
                  healthcare journey, providing you with the care and attention
                  you deserve. Thank you for choosing Prathamesh Healthcare,
                  where your health is our priority.
                </p>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[59px] text-darkslateblue">
                <div className="relative inline-block min-w-[108px]">{`Read More>`}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <a className="text-4xl mt-20 font-medium text-inherit">WHY CHOOSE US</a>
      <section className="w-full flex flex-col mt-10 md:flex-row items-start justify-start gap-10 text-left text-gray-100 font-montserrat flex-wrap">
        <div className="flex flex-col items-start justify-start gap-4 flex-1">
          <div className="flex flex-row items-start justify-start pb-8 text-2xl text-black">
            <div className="font-semibold">We Truly Care for Our Patients</div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-5 box-border gap-2.5 w-full">
            <div className="text-xl text-black">Expert Medical Team</div>
            <div className="text-base text-black">
              Our team of experienced physicians, nurses, and support staff are
              experts in their respective fields.
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-5 box-border gap-2.5 w-full">
            <div className="text-xl text-black">Advanced Technology</div>
            <div className="text-base text-black">
              Latest medical equipment and technology to ensure accurate
              diagnosis, effective treatment, and positive patient outcomes.
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-start justify-start p-0 box-border w-full">
          <Image
            className="h-auto flex-1 relative rounded-2xl max-w-full overflow-hidden object-cover min-w-[352px] mq450:min-w-full"
            alt="Why Choose Us"
            src="/blogs1.png"
            width={1500}
            height={800}
            quality={100}
          />
        </div>
      </section>
    </div>
  );
};
