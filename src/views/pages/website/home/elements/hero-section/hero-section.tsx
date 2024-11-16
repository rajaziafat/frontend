import React from "react";
import img from "src/assets/Frame.svg";
import GridLayerimg from "src/assets/grid-layer.png";
import { ButtonSize, ButtonType, LinkButton } from "src/components";
import { PrimaryButton, SecondaryButton } from "src/components/Buttons/Buttons";
import { Audience } from "src/views";

const HeroSection = () => {
  return (
    <div className="relative mx-auto mt-[30px] flex w-full max-w-[1920px] flex-col-reverse items-center justify-center gap-[0px] px-[20px] py-[40px] sm:gap-0 lg:flex-row lg:justify-start lg:px-[7%] lg:py-[40px] xl:py-0 xl:pl-[8%] 2xl:pl-[142px]">
      <img src={GridLayerimg} className="grid-layer-img pointer-events-none absolute right-0 top-0 !z-[0]" alt="" />
      {/* left  */}
      <div className="flex  w-full max-[768px]:-translate-y-11 flex-col items-center justify-center lg:max-w-[550px] lg:items-start 1600:max-w-[650px]">
        <h1 className="mb-[20px] font-mich max-[700px]:!mt-10 !text-center text-[30px] font-[400] text-[#FFFFFF] md:mb-[40px] md:text-[42px] lg:!text-start xl:text-[50px] 1600:mb-[70px] 1600:text-[62px]">
          Building the foundation of open source 3.0
        </h1>
        <PrimaryButton title="FIND OUT MORE" className="" path="/developer" />
      </div>
      {/* Right  */}
      <div className="w-full max-w-[700px] lg:max-w-none">
        <img
          src={img}
          alt=""
          className="pointer-events-none translate-x-[0px] scale-[1.3] sm:scale-[1] lg:scale-[1.6] xl:scale-[1.3] min-[1300px]:translate-y-[30px] min-[1600px]:translate-y-[75px] min-[1600px]:scale-[1.25]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
