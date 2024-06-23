import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Feedbacks = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/feedback/")
      .then((res) => {
        setFeedback(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="fixed">
          <Sidebar />
        </div>
        <div className="pl-80 pt-8 pr-10">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Feedbacks</h1>
          </div>
          <div className="mt-10">
            <table
              className="table-fixed w-full text-center border"
              //   ref={componentRef}
            >
              <thead className="border">
                <tr>
                  <th className="border">Name</th>
                  <th className="border">Email</th>
                  <th className="border">Message</th>
                </tr>
              </thead>
              <tbody>
                {feedback.map((feedback) => (
                  <tr key={feedback._id}>
                    <td className="border">{feedback.name}</td>
                    <td className="border">{feedback.email}</td>
                    <td className="border">{feedback.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10">
            {/* <button
              className="px-10 py-2 bg-[#32a3a9] text-white rounded-xl"
              onClick={handlePrint}
            >
              Download Report
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
