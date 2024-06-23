import React, { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import Swal from "sweetalert2";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSaveFeedback = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };

    const handleSuccessAlert = () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thank You...",
        showConfirmButton: false,
        timer: 2000,
      });
    };
    const handleErrorAlert = () => {
      Swal.fire({
        title: "Something Went Wrong",
        text: "Please Try Again",
        icon: "error",
      });
    };

    axios
      .post("http://localhost:5050/feedback/create", data)
      .then(() => {
        handleSuccessAlert();
        console.log("Feedback Added");
      })
      .catch((err) => {
        handleErrorAlert();
        console.log(err);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="w-full h-[350px] mx-auto px-40 bg-[#0b2428] flex flex-col text-center justify-center items-center ">
        <h1 className="text-[50px] font-bold text-[#fdf0d5]">Feedback</h1>
        <p className="text-slate-300 mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod
          ipsam obcaecati quisquam enim? Excepturi ratione harum aperiam debitis
          eaque recusandae facere tenetur, tempore obcaecati vel dolorum aut,
          incidunt maiores!
        </p>
      </div>
      <div className=" w-full">
        <div className="w-[40%] mx-auto shadow-lg bg-[#0b2428] flex flex-col justify-center items-center my-10 p-5 rounded-lg ">
          <form className="w-full">
            <div className="flex flex-col">
              <label className="font-semibold text-md mb-2 text-white">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded-xl"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className="font-semibold text-md mb-2 text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded-xl"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className="font-semibold text-md mb-2 text-white"
              >
                Your Feedback
              </label>
              <textarea
                placeholder="Type Feedback"
                id="exampleFormControlTextarea1"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-2 rounded-xl"
              ></textarea>
            </div>
            <button
              className="mt-5 rounded-md bg-[#32a3a9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0b2428] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              onClick={handleSaveFeedback}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
