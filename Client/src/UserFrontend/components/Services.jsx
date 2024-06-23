import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import { FaPersonChalkboard } from "react-icons/fa6";
import { RiTimerFlashFill } from "react-icons/ri";
import { MdSentimentVerySatisfied } from "react-icons/md";

const Services = () => {
  return (
    <div className="w-full h-auto my-28">
      <div className=" ml-36 w-[30%] p-2 bg-slate-200 rounded-full flex justify-center items-center mt-32 ">
        <h1>Our Services</h1>
      </div>
      <h1 className="text-3xl ml-36 font-semibold mt-5">
        We Offer Best Services For Our Customers
      </h1>
      <div className=" w-[80%] h-[300px] mt-20 mx-auto rounded-xl bg-[#0b2428] flex justify-between items-center ">
        <div className=" flex-1 flex-col">
          <FaMapLocationDot className=" text-[60px] my-5 mx-auto text-[#32a3a9]" />
          <h1 className="text-center text-xl font-semibold text-white ">
            Best <br /> Destinations
          </h1>
        </div>
        <div className=" flex-1 flex-col">
          <MdStars className=" text-[60px] my-5 mx-auto text-[#32a3a9]" />
          <h1 className="text-center text-xl font-semibold text-white ">
            Top Rated <br /> Hotels
          </h1>
        </div>
        <div className=" flex-1 flex-col">
          <FaPersonChalkboard className=" text-[60px] my-5 mx-auto text-[#32a3a9]" />
          <h1 className="text-center text-xl font-semibold text-white ">
            Expert <br /> Guide
          </h1>
        </div>
        <div className=" flex-1 flex-col">
          <RiTimerFlashFill className=" text-[60px] my-5 mx-auto text-[#32a3a9]" />
          <h1 className="text-center text-xl font-semibold text-white ">
            Time <br /> Flexibility
          </h1>
        </div>
        <div className=" flex-1 flex-col">
          <MdSentimentVerySatisfied className=" text-[60px] my-5 mx-auto text-[#32a3a9]" />
          <h1 className="text-center text-xl font-semibold text-white ">
            Customer <br /> Delight
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
