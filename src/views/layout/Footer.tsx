import * as React from "react"; // Import React and useEffect for AOS
import { useEffect } from "react";
import logo from "../../assets/Logo-footer.svg"; // Importing logo image
import "./Footer.css";
import { SocialMedia } from "../../components/socialMedia/SocialMedia";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import backdropSVG2 from "../../assets/footer-bd-rr.png";
import backdropSVG3 from "../../assets/footer-bd-ll.png";

export const Footer = () => {
  // Defining the Footer functional component
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="bg-2 relative">
      <img src={backdropSVG2} className="pointer-events-none absolute bottom-0 right-0 z-[-1] max-w-[500px] lg:max-w-[700px]" alt="" />
      <img src={backdropSVG3} className="pointer-events-none absolute bottom-0 left-0 z-[-1] max-w-[600px] lg:max-w-[1100px]" alt="" />

      <div className="bg-1">
        <div className="boxlayers">
          <div className="footer px-md-5 container max-[376px]:max-w-[95%]">
            <div className="row">
              <div
                className="col-md-6 pt-4"
                data-aos="fade-right" // AOS animation for fading in from the right
              >
                <a href="/" className="">
                  <img src="/Logo-svg.svg" className="img-fluid footerlogo" alt="Logo" />
                </a>
                <div className="d-flex align-items-center mt-4 gap-3">
                  <SocialMedia />
                </div>
              </div>

              <div
                className="col-md-6 pt-4"
                data-aos="fade-left" // AOS animation for fading in from the left
              >
                <div className="d-flex flex-column align-items-md-end justify-content-md-end">
                  <h1 className="footer-h1-text font-mich mb-2">Stay Tuned!</h1>
                  <div className=" flex justify-between mt-2 bg-white rounded-xl h-[56px]">
                    <input
                      type="email"
                      className="bg-transparent outline-none border-none text-black pl-3 w-[calc(100%-122px)] text-sm"
                      placeholder="Enter your email"
                    />
                    <button
                      className={`gradient-btn-bg font-mich h-[57px] rounded-r-md min-w-[112px] hover:bg-transparent duration-300 relative after:absolute after:w-[106px] after:top-1/2 after:left-1/2 after:bg-secondary after:h-[53px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-r-md after:opacity-0 after:hover:opacity-100 after:duration-300  `}
                    >
                      <span className="relative z-30">Join now</span>
                    </button>
                    {/* <button className="footerbtn !rounded-l-none !text-sm flex justify-center items-center sm:text-base w-28 ">Join now</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
