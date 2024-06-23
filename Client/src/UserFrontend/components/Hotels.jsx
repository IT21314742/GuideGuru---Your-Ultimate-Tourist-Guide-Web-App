import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import shangrila from "../images/shangrila.jpg";
import citadel from "../images/citadel.jpg";
import { Link } from "react-router-dom";

const includedFeatures = [
  "541 rooms, suites and apartments",
  "Signature dining venues",
  "versatile event spaces",
  "event facilities",
];
const includedFeatures2 = [
  "Kid's Safe Here",
  "Yoga Therapy Sessions",
  "Happy Hour Drinks",
  "Dinner For Couples",
];

const Hotels = () => {
  return (
    <div className="w-full h-auto my-20">
      <div className=" mx-auto w-[30%] mt-10 p-2 bg-slate-200 rounded-full flex justify-center items-center ">
        <h1>Top Hotels</h1>
      </div>
      <h1 className="text-3xl text-center font-semibold mt-10">
        Explore Our Top Hotels
      </h1>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-[#0b2428] sm:mt-20 lg:mx-0 lg:flex lg:items-center lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-[#fdf0d5]">
              Hotel Shangri-La , Colombo
            </h3>
            <p className="mt-6 text-base leading-7 text-white">
              Our well-situated luxury Shangri-La Colombo offers exquisite
              rooms, suites and extensive dining choices with heartfelt and
              thoughtful service.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-[#bc6c25]">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-[#bc6c25]" />
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-[#bc6c25]"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-transparent py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                {/* <p className="text-base font-semibold text-gray-600">
                  Pay once, own it forever
                </p> */}
                <img
                  className=" scale-150 rounded-xl ring-1 ring-[#0b2428] "
                  src={shangrila}
                  alt="Shangri-La"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-[#0b2428] sm:mt-20 lg:mx-0 lg:flex lg:items-center lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-[#fdf0d5]">
              Cinnamon Citadel , Kandy
            </h3>
            <p className="mt-6 text-base leading-7 text-white">
              Welcome to Cinnamon Citadel Kandy, a haven set against the
              backdrop of the Knuckles Mountain Range and the Mahaweli River.
              Enveloped by lush foliage and vibrant blooms, the resort's vantage
              point affords guests panoramic vistas that showcase the raw beauty
              of nature.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-[#bc6c25]">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-[#bc6c25]" />
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6">
              {includedFeatures2.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-[#bc6c25]"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-transparent py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                {/* <p className="text-base font-semibold text-gray-600">
                  Pay once, own it forever
                </p> */}
                <img
                  className=" scale-150 rounded-xl ring-1 ring-[#0b2428] "
                  src={citadel}
                  alt="Cinnamon Citadel"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto w-[15%] mt-14 p-2 bg-transparent rounded-full flex justify-center items-center ">
        <Link to="/hotelsuser">
          <button className="w-full bg-[#32a3a9] text-white py-2 px-4 rounded-xl">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hotels;
