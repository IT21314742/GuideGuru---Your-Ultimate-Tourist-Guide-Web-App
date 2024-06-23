import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Swal from "sweetalert2";

const AdEdit = () => {
  //   const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5050/ads/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
      })
      .catch((err) => {
        alert("Something went wrong...");
        console.log(err);
      });
  }, [id]);

  const handleSaveAd = () => {
    const data = {
      title,
      description,
    };

    const handleSuccessAlert = () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Blog Editd Successfully",
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
      .put(`http://localhost:5050/ads/edit/${id}`, data)
      .then(() => {
        handleSuccessAlert();
        navigate("/advertisements");
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
          <h1 className="text-2xl font-bold">Update Ad</h1>
          <div className=" border-2 border-[#0b2428] mx-auto w-[60%] py-10 px-16 rounded-xl shadow-xl mt-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className=" font-semibold mt-5">
                Ad Title
              </label>
              <input
                type="text"
                placeholder="Hotel Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                onClick={handleSaveAd}
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

export default AdEdit;
