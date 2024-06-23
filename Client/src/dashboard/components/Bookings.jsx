import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/booking/")
      .then((res) => {
        setBookings(res.data);
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
        <div className="fixed">
          {" "}
          <Sidebar />
        </div>
        <div className="pl-80 pt-8 pr-10">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Bookings</h1>
            {/* <button className="px-10 py-1 bg-green-500 text-white rounded-xl">
          Add New User
        </button> */}
          </div>
          <div className="mt-10">
            <table
              className="table-fixed w-full text-center border"
              ref={componentRef}
            >
              <thead className="border">
                <tr>
                  <th className="border">name</th>
                  <th className="border">email</th>
                  <th className="border">roomType</th>
                  <th className="border">guestsCount</th>
                  <th className="border">arrivalDate</th>
                  <th className="border">departureDate</th>
                  <th className="border">time</th>
                  <th className="border">phone</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="border">{booking.name}</td>
                    <td className="border">{booking.email}</td>
                    <td className="border">{booking.roomType}</td>
                    <td className="border">{booking.guestsCount}</td>
                    <td className="border">{booking.arrivalDate}</td>
                    <td className="border">{booking.departureDate}</td>
                    <td className="border">{booking.time}</td>
                    <td className="border">{booking.phone}</td>
                  </tr>
                ))}

                {/* <tr>
                  <td className="border">Witchy Woman</td>
                  <td className="border">The Eagles</td>
                  <td className="border">1972</td>
                </tr>
                <tr>
                  <td className="border">Shining Star</td>
                  <td className="border">Earth, Wind, and Fire</td>
                  <td className="border">1975</td>
                </tr> */}
              </tbody>
            </table>
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

export default Bookings;
