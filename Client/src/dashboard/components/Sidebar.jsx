import { FaUsers } from "react-icons/fa";
import { RiHomeHeartFill } from "react-icons/ri";
import { FaHotel } from "react-icons/fa";
import { IoMdBookmarks } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { FaBlogger } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="w-1full h-screen bg-[#0b2428] text-center p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#32a3a9]">GuideGuru</h1>
          <h1 className="text-md text-white font-semibold">Dashboard</h1>
        </div>
        <div className="px-7">
          <ul className="text-white text-lg flex flex-col gap-4 text-left">
            <Link to="/users">
              <li className="flex gap-4 items-center">
                <FaUsers /> Users
              </li>
            </Link>
            <hr className=" opacity-15 " />
            <Link to="/places">
              <li className="flex gap-4 items-center">
                <RiHomeHeartFill /> Places
              </li>
            </Link>
            <hr className=" opacity-15 " />
            <Link to="/hotels">
              <li className="flex gap-4 items-center">
                <FaHotel className=" text-base " /> Hotels
              </li>
            </Link>
            <hr className=" opacity-15 " />
            <Link to="/bookings">
              <li className="flex gap-4 items-center">
                <IoMdBookmarks /> Bookings
              </li>
            </Link>
            <hr className=" opacity-15 " />
            <Link to="/newsemails">
              <li className="flex gap-4 items-center">
                <MdAttachEmail /> News Letter Emails
              </li>
            </Link>
            <hr className=" opacity-15 " />
            <Link to="/blogs">
              <li className="flex gap-4 items-center">
                <FaBlogger /> Blogs
              </li>
            </Link>
            <hr className=" opacity-15 " />
            <Link to="/advertisements">
              <li className="flex gap-4 items-center">
                <RiAdvertisementFill /> Advertisements
              </li>
            </Link>
            <hr className=" opacity-15 " />
            <Link to="/feedbacks">
              <li className="flex gap-4 items-center">
                <RiAdvertisementFill /> Feedbacks
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <button className="px-8 py-1 bg-[#32a3a9] text-white rounded-lg">
            Logout
          </button>
          <Link to="/">
            <button className="px-8 py-1 bg-[#32a3a9] text-white rounded-lg">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
