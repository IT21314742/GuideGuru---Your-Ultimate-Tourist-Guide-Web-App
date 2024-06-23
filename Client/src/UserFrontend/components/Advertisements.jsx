import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const Advertisements = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/ads/")
      .then((res) => {
        setAds(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full h-auto my-28 px-20 ">
      <div className=" flex justify-center flex-wrap gap-20 items-center ">
        {ads.map((ad) => (
          <div className="w-[600px] h-[220px] flex justify-between gap-5 items-center shadow-lg border-2 border-slate-200 p-2 ">
            <div className=" flex-1 ">
              <img
                src={`http://localhost:5050/Images/${ad.file}`}
                alt=""
                className=" w-[300px] h-[200px] rounded-lg "
              />
            </div>
            <div className="flex-1 items-start ">
              <h1 className="text-xl font-bold mb-5 ">{ad.title}</h1>
              <p className="text-justify">{ad.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertisements;
