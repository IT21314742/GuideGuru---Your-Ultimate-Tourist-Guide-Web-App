import React, { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookingUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roomType, setRoomType] = useState("");
  const [guestsCount, setGuestsCount] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSaveBooking = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      roomType,
      guestsCount,
      arrivalDate,
      departureDate,
      time,
      phone,
    };

    axios
      .post("http://localhost:5050/booking/create", data)
      .then(() => {
        console.log("Booking succesed");
        navigate("/hotelsuser");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavBar />
      <div className="w-full h-[250px] mx-auto px-40 bg-[#0b2428] flex flex-col text-center justify-center items-center ">
        <h1 className="text-[50px] mt-10 font-bold text-[#fdf0d5]">
          Book Hotel
        </h1>
      </div>
      <div className=" w-full bg-[#0b2428]">
        <div className="w-[40%] mx-auto shadow-lg bg-[#0b2428] flex flex-col justify-center items-center p-5 rounded-lg ">
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
                Room Type
              </label>
              <select
                name=""
                id=""
                className="p-2 rounded-xl"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
              >
                <option value="standard">Standard Room (1 to 2 people)</option>
                <option value="family">Family Room (1 to 4 people)</option>
                <option value="private">Private Room (1 to 3 people)</option>
                <option value="mix">Mix Dorm Room (6 people)</option>
              </select>
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className="font-semibold text-md mb-2 text-white"
              >
                No of guests
              </label>
              <input
                type="number"
                placeholder="Enter Guest count"
                value={guestsCount}
                onChange={(e) => setGuestsCount(e.target.value)}
                className="p-2 rounded-xl"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className="font-semibold text-md mb-2 text-white"
              >
                Arrival Date
              </label>
              <input
                type="date"
                placeholder="Enter Arrival Date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="p-2 rounded-xl"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className="font-semibold text-md mb-2 text-white"
              >
                Departure Date
              </label>
              <input
                type="date"
                placeholder="Enter Departure Date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="p-2 rounded-xl"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className="font-semibold text-md mb-2 text-white"
              >
                Time
              </label>
              <input
                type="time"
                placeholder="Enter Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="p-2 rounded-xl"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className="font-semibold text-md mb-2 text-white"
              >
                Phone No
              </label>
              <input
                type="number"
                placeholder="Enter Guest count"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-2 rounded-xl"
              />
            </div>
            <button
              className="mt-5 rounded-md bg-[#32a3a9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0b2428] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              onClick={handleSaveBooking}
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingUser;
