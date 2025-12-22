import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import UseAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import defaultUser from "../../assets/UserImage.png";
import Logo from "../Logo";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logOut } = UseAuth();
  const activeRoute = ({ isActive }) =>
    isActive
      ? "text-indigo-400 font-semibold underline underline-offset-4"
      : "text-black hover:text-indigo-300";
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className={activeRoute}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="allBooks" className={activeRoute}>
                Books
              </NavLink>
            </li>
            {user ? (
              <li>
                <NavLink to="dashBoard" className={activeRoute}>
                  Dashboard
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={activeRoute}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="allBooks" className={activeRoute}>
              Books
            </NavLink>
          </li>
          <li>
            {user ? (
              <NavLink to="dashBoard" className={activeRoute}>
                Dashboard
              </NavLink>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* theme toggle  */}
        <div className="text-white">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle bg-white mr-2"
          />
        </div>
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
