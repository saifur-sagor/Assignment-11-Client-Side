import React from "react";
import { Link } from "react-router";
import { FaBookOpen } from "react-icons/fa";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      {/* Icon */}
      <div className="p-2 rounded-full bg-purple-100 group-hover:bg-purple-200 transition">
        <FaBookOpen className="text-purple-600 text-xl" />
      </div>

      {/* Text */}
      <h1 className="text-2xl font-extrabold tracking-wide">
        <span className="text-purple-600">Book</span>{" "}
        <span className="text-gray-800">Courier</span>
      </h1>
    </Link>
  );
};

export default Logo;
