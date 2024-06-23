import React from "react";
import DestinationCard from "./DestinationCard";
import sigiriya from "../images/sigiriya.jpg";
import templetooth from "../images/templetooth.jpg";
import sinharaja from "../images/sinharaja.jpg";
import ambuluwawa from "../images/ambuluwawa.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Destinations = () => {
  return (
    <div className="w-full h-auto my-10">
      <div className=" mx-auto w-[30%] p-2 bg-slate-200 rounded-full flex justify-center items-center ">
        <h1>Top Destinations</h1>
      </div>
      <h1 className="text-3xl text-center font-semibold mt-10">
        Explore Our Top Destinations
      </h1>
      <div className="flex justify-center gap-20 items-center mt-16">
        <DestinationCard
          img={sigiriya}
          alt={"Sigiriya"}
          title={"Sigiriya"}
          icon={<FaLocationDot />}
          location={"Dambulla"}
          btn={"See More"}
        />
        <DestinationCard
          img={templetooth}
          alt={"Temple Of Tooth"}
          title={"Temple Of Tooth"}
          icon={<FaLocationDot />}
          location={"Kandy"}
          btn={"See More"}
        />
        <DestinationCard
          img={sinharaja}
          alt={"sinharaja Forest"}
          title={"Sinharaja Forest"}
          icon={<FaLocationDot />}
          location={"Rathnapura"}
          btn={"See More"}
        />
        <DestinationCard
          img={ambuluwawa}
          alt={"Ambuluwawa Tower"}
          title={"Ambuluwawa Tower"}
          icon={<FaLocationDot />}
          location={"Gampola"}
          btn={"See More"}
        />
      </div>
      <div className=" mx-auto w-[15%] mt-14 p-2 bg-transparent rounded-full flex justify-center items-center ">
        <Link to="/placesuser">
          {" "}
          <button className="w-full bg-[#0b2428] text-white py-2 px-4 rounded-xl">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Destinations;
