import React from "react";

const DestinationCard = ({ img, alt, title, icon, location, btn }) => {
  return (
    <div>
      <div className="w-[250px] h-[300px] shadow-xl rounded-xl flex flex-col justify-between">
        <div>
          <img className=" rounded-t-xl " src={img} alt={alt} />
        </div>
        <div className="text-center px-5 ">
          <h1 className=" text-[22px] font-bold ">{title}</h1>
          <div className="flex items-center justify-center gap-1">
            {icon}
            <h1>{location}</h1>
          </div>
        </div>
        <button className=" px-2 py-1 mb-5 rounded-full w-[50%] mx-auto bg-slate-100 font-semibold   ">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
