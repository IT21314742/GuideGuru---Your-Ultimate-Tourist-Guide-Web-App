import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";

const BlogUser = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/blogs/")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="w-full h-[350px] mx-auto px-40 bg-[#0b2428] flex flex-col text-center justify-center items-center ">
        <h1 className="text-[50px] font-bold text-[#fdf0d5]">Blog</h1>
        <p className="text-slate-300 mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod
          ipsam obcaecati quisquam enim? Excepturi ratione harum aperiam debitis
          eaque recusandae facere tenetur, tempore obcaecati vel dolorum aut,
          incidunt maiores!
        </p>
      </div>
      <div className="my-10 flex flex-wrap gap-10 px-20">
        {blogs.map((blog) => (
          <div>
            <div className=" w-[300px] h-auto flex shadow-lg pb-5 flex-col rounded-lg justify-between items-center ">
              <div>
                <img
                  className="rounded-t-lg"
                  src={`http://localhost:5050/Images/${blog.file}`}
                  alt=""
                />
              </div>
              <div className="mt-5 text-center text-lg font-semibold">
                <h1>{blog.title}</h1>
              </div>
              <div className="mt-3 text-justify px-2">
                <p>{blog.description}</p>
              </div>
              {/* <div>
                <button className="w-full mt-5 bg-[#32a3a9] text-white py-1 px-3 rounded-xl">
                  View More
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogUser;
