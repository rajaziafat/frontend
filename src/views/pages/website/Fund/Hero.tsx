import { DeveloperButton } from "src/components/Buttons/Buttons";

import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="min-h-screen  py-10 relative ">
      <div className="w-full text-center relative z-20 py-32 bg-[url('/src/assets/fund.png')]   1300:!bg-[position:50%_60%] bg-no-repeat 1300:!bg-auto  700:!bg-[position:50%_-220px] 300:!bg-[position:50%_-300px] ">
        <h1 className="font-mich lg:text-6xl md:text-5xl text-4xl">
          Fund an
          <span className="text-primary-developer ml-3">Issue</span>
        </h1>
        <div className="max-w-[1300px] flex gap-12 max-[1024px]:!px-5 px-3 flex-wrap justify-center  mx-auto mt-40 pb-20">
          <Cards
            img={"https://avatars.githubusercontent.com/u/36803246?v=4"}
            // img={"https://avatars.githubusercontent.com/u/11135032?v=4"}
            description=" Build highly concurrent, distributed, and resilient message-driven applications using Java/Scala"
          />
          <Cards
            img={"https://avatars.githubusercontent.com/u/47359"}
            description=" Build highly concurrent, distributed, and resilient message-driven applications using Java/Scala"
          />
          <Cards
            img={"https://avatars.githubusercontent.com/u/17545605?v=4"}
            description="Build highly concurrent, distributed, and resilient message-driven applications using Java/Scala"
          />
        </div>
      </div>
      {/* <img src={fundbgimg} className="absolute -top-[800px] object-contain  1500:top-0 left-0 w-full h-full" alt="" /> */}
    </div>
  );
};

const Cards = ({ img, description }: { img: string; description: string }) => {
  return (
    <div className="bg-[#14233A] w-[386px] max-[540px]:w-full py-8 max-[490px]:pb-10 rounded-[40px] flex flex-col items-center justify-between gap-y-3 pt-4 pb-4">
      <div className="flex flex-col items-center justify-between ">
        {/* <div className=" bg-[url('/src/assets/glass.svg')] pt-2 size-[85px] bg-[length:100%_100%] grid place-items-center">
          <img src={img} className="size-[60px] rounded-full object-contain " alt="" />
        </div> */}
        <div className=" border rounded-full border-gray-300 p-0 size-[85px] bg-[length:100%_100%] grid place-items-center">
          <img src={img} className="w-full rounded-full object-contain " alt="" />
        </div>
        {/* <div className=""> */}
        <div className="max-[860px]:min-h-[150px]">
          <h4 className="text-3xl max-[540px]:!text-2xl font-mich mt-3 ">
            <Link to={"/"} className="text-secondary">
              Apache
            </Link>
            /<Link to={"/"}>Pekko</Link>
          </h4>
          <p className="text-lg mt-3 max-[540px]:text-base px-4 font-mont my-2 opacity-85 font-normal text-white">{description}</p>
        </div>
      </div>
      <DeveloperButton title="FUND" className="w-[214px] h-[48px] mt-2" path="/developer" />
    </div>
  );
};

export default Hero;
