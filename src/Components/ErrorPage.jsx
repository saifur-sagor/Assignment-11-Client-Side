import React from "react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95] to-[#be185d] px-4">
      <div className="text-center text-white">
        <h1 className="text-8xl font-extrabold">404</h1>
        <p className="mt-4 text-xl">Oops! This route does not exist.</p>

        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 rounded-full bg-white text-purple-700 font-semibold hover:bg-purple-100"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
