import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Swal from "sweetalert2";

const UserAdd = () => {
  const [name, setName] = useState("");
  const [idNo, setidNo] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const HandleSaveUser = (e) => {
    e.preventDefault();
    const data = {
      name,
      idNo,
      country,
    };

    const handleSuccessAlert = () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Hotel Added Successfully",
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
      .post("http://localhost:5050/users/create", data)
      .then(() => {
        handleSuccessAlert();
        navigate("/users");
      })
      .catch((err) => {
        console.log(err);
        handleErrorAlert();
      });
  };

  return (
    <div className=" w-full ">
      <div className="flex">
        <div className="fixed">
          <Sidebar />
        </div>
        <div className="pl-80 w-full pt-8 pr-10 h-screen">
          <h1 className="text-2xl font-bold">Add New User</h1>
          <div className=" border-2 border-[#0b2428] mx-auto w-[60%] py-10 px-16 rounded-xl shadow-xl mt-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className=" font-semibold mt-5">
                User Name
              </label>
              <input
                type="text"
                placeholder="User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 rounded-lg bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className=" font-semibold mt-5">
                User ID No
              </label>
              <input
                type="text"
                placeholder="User ID No"
                value={idNo}
                onChange={(e) => setidNo(e.target.value)}
                className="w-full p-2 rounded-lg bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className=" font-semibold mt-5">
                Country
              </label>
              <textarea
                type="text"
                placeholder="Add Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full p-2 rounded-lg bg-slate-100"
              />
            </div>
            <div className="mt-10 flex justify-center gap-10">
              <button
                className="px-2 py-1 w-20 rounded-lg bg-[#32a3a9] text-white"
                onClick={HandleSaveUser}
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

export default UserAdd;
