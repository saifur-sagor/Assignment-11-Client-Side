import React from "react";
import { FaBookOpen, FaUserCircle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import UseAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import defaultUser from "../../assets/UserImage.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logOut } = UseAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully logOut",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(location?.state?.pathname || "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a> Home</a>
            </li>
            <li>
              <a>Books</a>
            </li>
            {user ? (
              <li>
                <a>Dashboard</a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="flex items-center justify-center text-2xl font-bold"
        >
          <span className="text-2xl font-bold text-purple-600">Book </span>{" "}
          Courier <FaBookOpen className="text-purple-600 text-2xl" />
        </Link>
        <Link to="/"></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="allBooks">Books</Link>
          </li>
          <li>{user ? <Link to="dashBoard">Dashboard</Link> : ""}</li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mr-2">
          <img
            title={user?.displayName || "User"}
            className="w-10 h-10 rounded-full"
            src={user?.photoURL || defaultUser}
            alt="userImage"
          />
        </div>
        <div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn bg-purple-500 text-white hover:bg-purple-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="login"
              className="btn bg-purple-500 text-white hover:bg-purple-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
