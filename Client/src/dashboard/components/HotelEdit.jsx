import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Swal from "sweetalert2";

const HotelEdit = () => {
  //   const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [hotelLocation, setHotelLocation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5050/hotels/${id}`)
      .then((res) => {
        setName(res.data.name);
        setHotelLocation(res.data.hotelLocation);
        setDescription(res.data.description);
      })
      .catch((err) => {
        alert("Something went wrong...");
        console.log(err);
      });
  }, [id]);

  const handleSaveHotel = () => {
    const data = {
      name,
      hotelLocation,
      description,
    };

    const handleSuccessAlert = () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Hotel Editd Successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    };
    const handleErrorAlert = () => {
      Swal.fire({
        title: "Something Went Wrong",
        text: "Fix it and try again",
        icon: "error",
      });
    };

    axios
      .put(`http://localhost:5050/hotels/edit/${id}`, data)
      .then(() => {
        handleSuccessAlert();
        navigate("/hotels");
      })
      .catch((err) => {
        handleErrorAlert();
        console.log(err);
      });
  };

  return (
    <div className=" w-full ">
      <div className="flex">
        <div className="fixed">
          <Sidebar />
        </div>
        <div className="pl-80 w-full pt-8 pr-10 h-screen">
          <h1 className="text-2xl font-bold">Edit Hotel</h1>
          <div className=" border-2 border-[#0b2428] mx-auto w-[60%] py-10 px-16 rounded-xl shadow-xl mt-5">
            {/* <div className="flex flex-col gap-2">
              <label htmlFor="" className=" font-semibold mt-5">
                Hotel Image
              </label>
              <input
                type="file"
                placeholder="Select image"
                onChange={(e) => setFile(e.target.files[0])}
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-black hover:file:bg-violet-100"
              />
            </div> */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className=" font-semibold mt-5">
                Hotel Name
              </label>
              <input
                type="text"
                placeholder="Hotel Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 rounded-lg bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className=" font-semibold mt-5">
                Hotel Location
              </label>
              <input
                type="text"
                placeholder="Hotel Location"
                value={hotelLocation}
                onChange={(e) => setHotelLocation(e.target.value)}
                className="w-full p-2 rounded-lg bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className=" font-semibold mt-5">
                Description
              </label>
              <textarea
                type="text"
                placeholder="Add Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 rounded-lg bg-slate-100"
              />
            </div>
            <div className="mt-10 flex justify-center gap-10">
              <button
                className="px-2 py-1 w-20 rounded-lg bg-[#32a3a9] text-white"
                onClick={handleSaveHotel}
              >
                Save
              </button>
              <button className="px-2 py-1 w-20 rounded-lg bg-[#c0426c] text-white">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelEdit;
