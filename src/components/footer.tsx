import Image from "next/image";
import PropTypes from "prop-types";

const Root = ({ className = "" }) => {
  return (
    <div
      className={`w-full max-w-full flex flex-col items-start justify-start leading-normal tracking-normal ${className}`}
    >
      <footer className="w-full bg-[#577297] flex flex-col items-start justify-start pt-12 pb-6 px-1 box-border gap-6 text-left text-base text-white font-montserrat mq675:pt-8 mq675:pb-5">
        <div className="hidden self-stretch h-[742px] bg-steelblue relative" />
        <div className="w-full flex flex-row items-start justify-center pt-0 px-5 pb-5 box-border text-lg">
          <div className="w-full max-w-[1113px] flex flex-row items-start justify-between gap-5 flex-wrap">
            <div className="w-[145px] flex flex-row items-end justify-start gap-3">
              {/* <Image
                className="relative z-1"
                loading="lazy"
                alt=""
                src="/logo2.png"
                width={157.7}
                height={57.7}
              /> */}
              <div className="flex-1 flex flex-col items-start justify-end pb-4">
                <div className="self-stretch flex flex-col items-start justify-start gap-1" />
              </div>
            </div>
            <div className="w-[232px] flex flex-col items-start justify-start pt-0.5 pb-0 box-border">
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-2 pl-5 pr-5 box-border w-full">
          <div className="w-full max-w-[1129px] flex flex-col items-start justify-start gap-6">
            <div className="self-stretch h-[0.5px] border-white border-t-[0.5px] border-solid box-border z-1" />
            <div className="w-full flex flex-row items-start justify-between gap-5 flex-wrap">
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-8">
                <b className="relative inline-block min-w-[105px] z-1">
                  Patient Care
                </b>
                <div className="flex flex-col items-start justify-start gap-2 text-xs">
                  <div className="relative font-semibold inline-block min-w-[84px] z-1">
                    Find a Doctor
                  </div>
                  <div className="relative font-semibold whitespace-pre-wrap z-1">
                    Book an Appointment
                  </div>
                  <div className="relative font-semibold inline-block min-w-[119px] z-1">
                    Video Consultation
                  </div>
                  <div className="relative font-semibold inline-block min-w-[72px] z-1">
                    Treatments
                  </div>
                  <div className="relative font-semibold inline-block min-w-[104px] z-1">
                    Emergency 24x7
                  </div>
                  <div className="relative font-semibold inline-block min-w-[95px] z-1">
                    Rupesh Lab
                  </div>
                  <div className="relative font-semibold z-1">
                    Health Checkup Plans
                  </div>
                  <div className="relative font-semibold inline-block min-w-[82px] z-1">
                    Technologies
                  </div>
                  <div className="relative font-semibold inline-block min-w-[88px] z-1">
                    Doctor Videos
                  </div>
                  <div className="relative font-semibold inline-block min-w-[127px] z-1">
                    Patient Testimonials
                  </div>
                  <div className="relative font-semibold inline-block min-w-[114px] z-1">
                    Health Calculators
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-8">
                <b className="relative z-1">Center of Excellence</b>
                <div className="flex flex-col items-start justify-start gap-2 text-xs">
                  <div className="relative font-semibold z-1">
                    Cancer Care / Oncology
                  </div>
                  <div className="relative font-semibold inline-block min-w-[99px] z-1">
                    Cardiac Science
                  </div>
                  <div className="relative font-semibold inline-block min-w-[96px] z-1">
                    Neuro Sciences
                  </div>
                  <div className="relative font-semibold z-1">
                    Liver Transplant And Biliary Sciences
                  </div>
                  <div className="relative font-semibold inline-block min-w-[77px] z-1">
                    Orthopedics
                  </div>
                  <div className="relative font-semibold inline-block min-w-[73px] z-1">
                    Nephrology
                  </div>
                  <div className="relative font-semibold inline-block min-w-[112px] z-1">
                    Kidney Transplant
                  </div>
                  <div className="relative font-semibold z-1">
                    Bone Marrow Transplant
                  </div>
                  <div className="relative font-semibold z-1">
                    Bariatric / Weight Loss Surgery
                  </div>
                  <div className="relative font-semibold z-1">
                    Minimal Access / Laparoscopic Surgery
                  </div>
                  <div className="relative font-semibold z-1">
                    Eye Care / Ophthalmology
                  </div>
                  <div className="relative font-semibold inline-block min-w-[100px] z-1">
                    Robotic Surgery
                  </div>
                </div>
              </div>
              <div className="w-[200px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                <b className="relative z-1">Top Procedures</b>
              </div>
              <div className="flex flex-col items-start justify-start gap-8">
                <b className="relative inline-block min-w-[84px] z-1">
                  Corporate
                </b>
                <div className="flex flex-col items-start justify-start gap-2 text-xs">
                  <div  className="relative font-semibold inline-block min-w-[58px] z-1 " >
                  <a href="contact">  Contact Us</a>
                  </div>
                  <div className="relative font-semibold inline-block min-w-[69px] z-1">
                    Leadership
                  </div>
                  <div className="relative font-semibold inline-block min-w-[57px] z-1">
                    Investors
                  </div>
                  <div className="relative font-semibold inline-block min-w-[48px] z-1">
                    Careers
                  </div>
                  <div className="relative font-semibold inline-block min-w-[61px] z-1">
                    Feedback
                  </div>
                  <div className="relative font-semibold inline-block min-w-[91px] z-1">
                    News & Events
                  </div>
                  <div className="relative font-semibold inline-block min-w-[38px] z-1">
                    Media
                  </div>
                  <div className="relative font-semibold z-1">
                    Awards & Certificates
                  </div>
                  <div className="relative font-semibold inline-block min-w-[104px] z-1">
                    Announcements
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-between w-full text-lg">
              <div className="flex flex-col items-start justify-start gap-2">
                <h3 className="m-0 relative text-inherit font-bold z-1">
                  Download App
                </h3>
                <div className="flex flex-row items-start justify-start gap-3">
                  <Image
                    className="relative max-h-full object-cover min-h-[30px] z-1"
                    loading="lazy"
                    alt="Download from App Store"
                    src="/applestore.svg"
                    width={103}
                    height={30}
                  />
                  <Image
                    className="relative max-h-full object-cover min-h-[30px] z-1"
                    loading="lazy"
                    alt="Download from Google Play"
                    src="/playstore.svg"
                    width={101}
                    height={30}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <a
                  className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[119px] z-1"
                  href="#"
                >
                  Follow us on
                </a>
                <div className="flex flex-row items-start justify-start gap-5">
                  <Image
                    className="relative z-1"
                    loading="lazy"
                    alt="Facebook"
                    src="/facebook.svg"
                    width={24}
                    height={24}
                  />
                  <Image
                    className="relative z-1"
                    loading="lazy"
                    alt="Instagram"
                    src="/instagram.svg"
                    width={24}
                    height={24}
                  />
                  <Image
                    className="relative z-1"
                    loading="lazy"
                    alt="Twitter"
                    src="/twitter.svg"
                    width={24}
                    height={24}
                  />
                  <Image
                    className="relative z-1"
                    loading="lazy"
                    alt="LinkedIn"
                    src="/linkedin.svg"
                    width={24}
                    height={24}
                  />
                  <Image
                    className="relative z-1"
                    loading="lazy"
                    alt="YouTube"
                    src="/youtube.svg"
                    width={64}
                    height={44}
                   style={{marginTop:5}} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0.5px] border-white border-t-[0.5px] border-solid box-border z-1" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-5 box-border w-full">
          <div className="w-full max-w-[1129px] flex flex-row items-end justify-between gap-5 flex-wrap">
            <div className="flex flex-row items-start justify-start gap-10 flex-wrap">
              <div className="relative font-semibold inline-block min-w-[114px] z-1">
                Privacy Policy
              </div>
              <div className="relative font-semibold z-1">
                Terms and Conditions
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 pb-1 box-border text-sm">
              <div className="flex flex-row items-end justify-start gap-1.5">
                <div className="relative font-semibold inline-block min-w-[72px] z-1">
                  Copyright
                </div>

                <div className="relative font-semibold z-1">
                  Rupesh Hospital - All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Root.propTypes = {
  className: PropTypes.string,
};

export default Root;
