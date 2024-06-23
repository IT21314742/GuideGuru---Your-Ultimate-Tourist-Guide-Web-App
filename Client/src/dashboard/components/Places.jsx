import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

const Places = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/places/")
      .then((res) => {
        setPlaces(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div className="flex">
        <div className=" fixed ">
          <Sidebar />
        </div>
        <div className="pl-80 pt-8 pr-10">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Places</h1>
            <Link to="/places/create">
              <button className="px-10 py-2 bg-[#32a3a9] text-white rounded-xl flex items-center gap-3">
                <IoMdAddCircle /> Add New Place
              </button>
            </Link>
          </div>
          <div>
            <div
              className="mt-10 flex flex-wrap justify-between gap-10"
              ref={componentRef}
            >
              {places.map((place) => (
                <div
                  className="w-[350px] h-auto pb-5 flex flex-col justify-between bg-white shadow-xl rounded-lg"
                  key={place.id}
                >
                  <img
                    src={`http://localhost:5050/Images/${place.file}`}
                    alt=""
                    className=" rounded-t-lg "
                  />
                  <div>
                    <h1 className="text-xl font-semibold text-center mt-5 ">
                      {place.name}
                    </h1>
                    <h1 className="text-md font-medium text-center mt-2 ">
                      {place.placeLocation}
                    </h1>
                  </div>
                  <p className="px-2 text-justify">{place.description}</p>
                  <div className="flex justify-center gap-5 items-center mt-3">
                    <Link
                      to={`/places/edit/${place._id}`}
                      className="text-md font-semibold px-8 py-1 rounded-lg bg-[#32a3a9] text-white"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/places/delete/${place._id}`}
                      className="text-md font-semibold px-8 py-1 rounded-lg bg-red-500 text-white"
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <button
              className="px-10 py-2 bg-[#32a3a9] text-white rounded-xl"
              onClick={handlePrint}
            >
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
