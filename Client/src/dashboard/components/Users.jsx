import { IoMdAddCircle } from "react-icons/io";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/users/")
      .then((res) => {
        setUsers(res.data);
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
            <h1 className="text-2xl font-bold">Users</h1>
            <Link to="/users/create">
              <button className="px-10 py-2 bg-[#32a3a9] text-white rounded-xl flex items-center gap-3">
                <IoMdAddCircle /> Add New User
              </button>
            </Link>
          </div>
          <div className="mt-10">
            <table
              className="table-fixed w-full text-center border"
              ref={componentRef}
            >
              <thead className="border">
                <tr>
                  <th className="border">Name</th>
                  <th className="border">ID No</th>
                  <th className="border">Country</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="border">{user.name}</td>
                    <td className="border">{user.idNo}</td>
                    <td className="border">{user.country}</td>
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

export default Users;
