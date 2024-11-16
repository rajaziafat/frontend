import React from "react";
import { ButtonType, LinkButton } from "src/components";
import { Audience } from "src/views";
import sec2icon1 from "src/assets/sec2img.png";
import sec2icon2 from "src/assets/icon/sec2img3.png";
import sec2icon3 from "src/assets/sec2img2.png";
import startimg from "src/assets/star.png";
import { DeveloperButton, UserButton } from "src/components/Buttons/Buttons";

const FeaturesSection = () => {
  return (
    <div className="!z-[10]  flex w-full items-center justify-center px-[30px] py-[40px] lg:py-[70px] min-[1279px]:px-0">
      <div className="z-[20]  w-full max-w-[1250px]  justify-center flex flex-wrap  1500:gap-[30px] gap-6  min-[1600px]:max-w-[1305px] ">
        {/* 1  */}
        <div
          data-aos="fade-left"
          data-aos-delay="0"
          className="box11 max-w-[550px] lg:py-16 1500:max-w-[610px] max-[1279px]:py-12 max-[1279px]:max-w-[460px] max-[1024px]:max-w-[400px]  group flex w-full flex-col-reverse items-center justify-between gap-[20px] rounded-[30px] bg-[#14233A] px-[40px] py-[20px] xl:flex-row lg:items-center lg:gap-0 lg:rounded-[50px] lg:px-[40px]  min-[1600px]:px-[67px] min-[1600px]:py-[73px]"
        >
          <div className="max-[1279px]:flex flex-col items-center max-[1200px]text-center">
            <h1 className="font-mich text-[28px] font-[400] lg:text-[36px]">Get Paid</h1>
            <h2 className="font-most mt-[20px] w-full max-[1279px]:text-center text-[16px] font-[400] leading-[1.5]">
              Stop begging for donations! <br /> Fund your future. Have a Say
            </h2>
            <div className="mt-[42px]">
              <DeveloperButton title="DEVELOPERS" path="/developer" className="" />
            </div>
          </div>
          <div className="relative">
            <img className="h-[150px] w-[150px] object-cover sm:h-[178x] sm:w-[177px]" src={sec2icon1} alt="Get Paid Icon" />{" "}
            <div className="absolute left-[10px] top-[48px] sm:left-[16px] sm:top-[43px]">
              <img src={startimg} alt="" className="size-[45px] duration-300 group-hover:rotate-90" />
            </div>
          </div>
        </div>
        {/* 2  */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="box22 max-w-[550px] lg:py-16 1500:max-w-[610px] max-[1279px]:py-12 max-[1279px]:max-w-[460px] max-[1024px]:max-w-[400px]  group flex w-full flex-col-reverse items-center justify-between rounded-[30px] bg-[#14233A] px-[40px] py-[20px] xl:flex-row lg:items-center lg:gap-0 lg:rounded-[50px] lg:px-[40px]  min-[1600px]:px-[67px] min-[1600px]:py-[73px]"
        >
          <div className="max-[1279px]:flex flex-col items-center max-[1200px]:text-center">
            <h1 className="text-nowrap  font-mich text-[28px] font-[400] lg:text-[36px]">Get Support</h1>
            <h2 className="font-most mt-[20px] w-full text-[16px] max-[1279px]:text-center font-[400] leading-[1.5]">
              {" "}
              Forget the far west! Secure your <br /> platform, secure your business.
            </h2>
            <div className="mt-[42px]">
              <UserButton title="OPEN SOURCE USERS" className="px-4" path="/user" />
            </div>
          </div>
          <div className="relative ">
            <img className="aspect-square h-[160px] w-[170px] sm:!h-[203px] sm:!min-w-[216px]" src={sec2icon2} alt="Get Paid Icon" />{" "}
            <div className="absolute right-[40px] top-[35px] sm:right-[60px] sm:top-[50px]">
              <img src={startimg} alt="" className="size-[45px] duration-300 group-hover:rotate-90" />
            </div>
          </div>
        </div>
        <div className=" md:col-span-2 flex w-full items-center justify-center">
          {/* 3  */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="box33 group flex lg:py-16 1500:max-w-[610px] max-[1279px]:py-12  flex-col-reverse items-center justify-between gap-[20px] rounded-[30px] bg-[#14233A] px-[40px] py-[20px] max-[1279px]:max-w-[460px] max-[1024px]:max-w-[400px]   max-w-[550px] xl:flex-row xl:items-center lg:gap-0 lg:rounded-[50px]   min-[1600px]:max-w-[630px] min-[1600px]:px-[67px] min-[1600px]:py-[73px]"
          >
            <div className="relative w-fit max-[1279px]:flex flex-col items-center max-[1200px]text-center">
              <div className="absolute left-0 top-0 flex h-[102%] w-full items-center justify-start bg-[#14233A] opacity-0 duration-300 group-hover:!opacity-100">
                <h1 className="text-[28px] font-mich max-[1279px]:text-center w-full font-[400] leading-[1.1] lg:text-[45px]">
                  Coming <br /> Soon
                </h1>
              </div>
              <h1 className="text-[28px] font-mich font-[400] lg:text-[36px] max-[1279px]:text-center">Get a Stake</h1>
              <h2 className="font-most mt-[20px] w-full text-[20px] max-[1279px]:text-center font-[400] leading-[1.4]">
                {" "}
                Support, invest, or donate in <br /> projects to get a part of its <br />
                business, governance, and ecosystem.
              </h2>
            </div>
            <div className="relative">
              <img className="aspect-square h-[150px] w-[150px] object-cover sm:!h-[200px] sm:!w-[200px]" src={sec2icon3} alt="Get Paid Icon" />{" "}
              <div className="absolute bottom-[5px] left-[60px]">
                <img src={startimg} alt="" className="size-[45px] duration-300 group-hover:rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
