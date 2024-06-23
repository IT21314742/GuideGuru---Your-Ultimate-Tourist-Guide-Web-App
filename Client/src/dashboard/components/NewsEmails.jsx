import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

const NewsEmails = () => {
  const [newsletter, setNewsLetter] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/newsletter/")
      .then((res) => {
        setNewsLetter(res.data);
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
          <Sidebar />
        </div>
        <div className="pl-80 pt-8 pr-10">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">News Letter Emails</h1>
          </div>
          <div className="mt-10">
            <table
              className="table-fixed w-full text-center border"
              ref={componentRef}
            >
              <thead className="border">
                <tr>
                  <th className="border">ID</th>
                  <th className="border">Email</th>
                </tr>
              </thead>
              <tbody>
                {newsletter.map((newsletter) => (
                  <tr key={newsletter._id}>
                    <td className="border">{newsletter._id}</td>
                    <td className="border">{newsletter.email}</td>
                  </tr>
                ))}
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

export default NewsEmails;
