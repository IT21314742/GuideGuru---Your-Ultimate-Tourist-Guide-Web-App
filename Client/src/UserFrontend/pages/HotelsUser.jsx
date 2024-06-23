import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HotelsUser = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/hotels/")
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="w-full h-[350px] mx-auto px-40 bg-[#0b2428] flex flex-col text-center justify-center items-center ">
        <h1 className="text-[50px] font-bold text-[#fdf0d5]">Hotels</h1>
        <p className="text-slate-300 mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod
          ipsam obcaecati quisquam enim? Excepturi ratione harum aperiam debitis
          eaque recusandae facere tenetur, tempore obcaecati vel dolorum aut,
          incidunt maiores!
        </p>
      </div>
      <div className="my-10">
        {hotels.map((hotel) => (
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-[#32a3a9] sm:mt-20 lg:mx-0 lg:flex lg:items-center lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {hotel.name}
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {hotel.description}
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                    Is this suitable for you?
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <div className="flex gap-10 mt-10">
                  <Link to="/bookhotel">
                    <button className="px-8 py-2 rounded-full border-2 border-slate-200 shadow-lg hover:bg-[#0b2428] hover:text-white ">
                      Book Now
                    </button>
                  </Link>

                  <button className="px-8 py-2 rounded-full border-2 border-slate-200 shadow-lg hover:bg-[#32a3a9] hover:text-white ">
                    360 View
                  </button>

                  <button className="px-8 py-2 rounded-full border-2 border-slate-200 shadow-lg hover:bg-[#32a3a9] hover:text-white ">
                    Save Hotel
                  </button>
                </div>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-transparent py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <img
                      className=" scale-150 rounded-xl "
                      src={`http://localhost:5050/Images/${hotel.file}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HotelsUser;
