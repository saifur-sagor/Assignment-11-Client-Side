import React from "react";
import { FaBookOpen, FaShoppingCart } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";
import { FaBook } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import { Link, Outlet } from "react-router";
import Logo from "../Logo";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <Logo></Logo>
        </nav>
        {/* Page content here */}
        <div className="p-4">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <Link to="/">
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <MdHomeFilled className="text-purple-600" />
                  <span className="is-drawer-close:hidden">Homepage</span>
                </button>
              </Link>
            </li>
            {/* Add Book */}
            <li>
              <Link to="addBook">
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Add Book"
                >
                  {/* icon */}
                  <BiSolidBookAdd className="text-purple-600" />

                  <span className="is-drawer-close:hidden">Add Book</span>
                </button>
              </Link>
            </li>
            <li>
              <Link to="myBook">
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Book"
                >
                  {/* icon */}
                  <FaBook className="text-purple-600" />

                  <span className="is-drawer-close:hidden">My Book</span>
                </button>
              </Link>
            </li>
            {/* my orders */}
            <li>
              <Link to="myOrders">
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Orders"
                >
                  {/* icon */}
                  <FaShoppingCart className="text-purple-600" />

                  <span className="is-drawer-close:hidden">My Orders</span>
                </button>
              </Link>
            </li>

            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}

                <LuSettings2 className="text-purple-600" />
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
