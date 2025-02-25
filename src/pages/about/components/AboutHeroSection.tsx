import React from "react";
import Images from "../../../components/constant/Images";
import {  FaUser } from "react-icons/fa6";

const AboutHeroSection: React.FC = () => {
  return (
    <section className="opacity-[0.9] lg:py-[10rem] md:py-[4rem] py-[4rem]">
      <section className="lg:flex flex flex-col sm:flex-row items-center justify-center gap-[4rem] lg:px-[4rem] md:px-[2.5rem] px-[2rem] ">
        <section className="lg:w-[50%] md:w-[90%]">
          <img
            src={Images.AboutHeroImage}
            alt=""
            className="rounded-tr-[50px] rounded-bl-[50px]"
          />
        </section>
        <div className="lg:w-[50%]">
          <p className="text-[#2AA100] flex justify-center text-center items-center gap-2 py-[0.5rem] px-[0.5rem] w-[110px] rounded-[5px] bg-[#D1FFBD]">
            <FaUser />
            About Us
          </p>
          <h1 className="lg:text-[38px] md:text-[20px] text-[18px] mt-[1rem] font-sans font-semibold tracking-[1px]">
            We are here to assist <br /> you <span className="text-[#ee009d]">in recruiting.</span>
          </h1>
          <p className="lg:text-[14px] md:text-[14px] text-[10px] text-[#646A73] font-sans font-normal mt-[1rem] lg:w-[65%] md:w-[75%]">
            We are a recruitment agency with the belief that recruitment is a
            basic company activity and recruitment should be simple, fast,
            transparent and easy for anyone to particiapte.
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutHeroSection;
