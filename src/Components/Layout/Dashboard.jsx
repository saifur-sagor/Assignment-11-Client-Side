import React from "react";
import { Link, Outlet } from "react-router";
import { FaFileInvoice, FaShoppingCart, FaUsers } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBookTanakh } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { VscGraphLine } from "react-icons/vsc";
import { FaBook } from "react-icons/fa6";
import Logo from "../Logo";
import useRole from "../Hooks/useRole";

const Dashboard = () => {
  const { role } = useRole();

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
          <Logo />
        </nav>

        {/* Page content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          <ul className="menu w-full grow">
            {/* Homepage always */}
            <li>
              <Link to="/">
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  <MdHomeFilled className="text-purple-600" />
                  <span className="is-drawer-close:hidden">Homepage</span>
                </button>
              </Link>
            </li>
            {/* statics */}
            <li>
              <Link to="statics">
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Statics"
                >
                  <VscGraphLine className="text-purple-600" />
                  <span className="is-drawer-close:hidden">Statics</span>
                </button>
              </Link>
            </li>

            {/* Role based links */}
            {role === "user" && (
              <>
                <li>
                  <Link to="myOrders">
                    <button
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="My Orders"
                    >
                      <FaShoppingCart className="text-purple-600" />
                      <span className="is-drawer-close:hidden">My Orders</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="invoice">
                    <button
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Invoice"
                    >
                      <FaFileInvoice className="text-purple-600" />
                      <span className="is-drawer-close:hidden">Invoice</span>
                    </button>
                  </Link>
                </li>
              </>
            )}

            {role === "Librarian" && (
              <>
                <li>
                  <Link to="addBook">
                    <button
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Add Book"
                    >
                      <BiSolidBookAdd className="text-purple-600" />
                      <span className="is-drawer-close:hidden">Add Book</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="myBook">
                    <button
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="My Books"
                    >
                      <FaBook className="text-purple-600" />
                      <span className="is-drawer-close:hidden">My Books</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="librarianOrders">
                    <button
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Orders"
                    >
                      <TbTruckDelivery className="text-purple-600" />
                      <span className="is-drawer-close:hidden">Orders</span>
                    </button>
                  </Link>
                </li>
              </>
            )}

            {role === "Admin" && (
              <>
                <li>
                  <Link to="bookManage">
                    <button
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Book Manage"
                    >
                      <FaBookTanakh className="text-purple-600" />
                      <span className="is-drawer-close:hidden">
                        Book Manage
                      </span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="userManage">
                    <button
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="User Manage"
                    >
                      <FaUsers className="text-purple-600" />
                      <span className="is-drawer-close:hidden">
                        User Manage
                      </span>
                    </button>
                  </Link>
                </li>
              </>
            )}

            {/* My Profile */}

            <li>
              <Link to="profile">
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Profile"
                >
                  <ImProfile className="text-purple-600" />
                  <span className="is-drawer-close:hidden">My Profile</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
