import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
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
      <div className="flex">
        <div className=" fixed ">
          <Sidebar />
        </div>
        <div className="pl-80 pt-8 pr-10">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Blogs</h1>
            <Link to="/blogs/create">
              <button className="px-10 py-2 bg-[#32a3a9] text-white rounded-xl flex items-center gap-3">
                <IoMdAddCircle /> Add New Blog
              </button>
            </Link>
          </div>
          <div>
            <div className="mt-10 flex flex-wrap justify-between gap-10">
              {blogs.map((blog) => (
                <div
                  className="w-[350px] h-auto pb-5 flex flex-col justify-between bg-white shadow-xl rounded-lg"
                  key={blog.id}
                >
                  <img
                    src={`http://localhost:5050/Images/${blog.file}`}
                    alt=""
                    className=" rounded-t-lg "
                  />
                  <div>
                    <h1 className="text-xl font-semibold text-center mt-5 ">
                      {blog.title}
                    </h1>
                  </div>
                  <p className="px-2 text-justify">{blog.description}</p>
                  <div className="flex justify-center gap-5 items-center mt-3">
                    <Link
                      to={`/blogs/edit/${blog._id}`}
                      className="text-md font-semibold px-8 py-1 rounded-lg bg-[#32a3a9] text-white"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/blogs/delete/${blog._id}`}
                      className="text-md font-semibold px-8 py-1 rounded-lg bg-red-500 text-white"
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
