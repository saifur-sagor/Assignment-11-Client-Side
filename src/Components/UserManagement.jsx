import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import { FiShieldOff } from "react-icons/fi";
import { FaUserShield } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState("");

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });

  // Admin handlers
  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`users/${user._id}/role`, { role: "Admin" })
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.displayName} marked as an admin`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  const handleRemoveAdmin = (user) => {
    axiosSecure
      .patch(`users/${user._id}/role`, { role: "user" })
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.displayName} removed admin access`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  // Librarian handlers
  const handleMakeLibrarian = (user) => {
    axiosSecure
      .patch(`users/${user._id}/role`, { role: "Librarian" })
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.displayName} marked as a librarian`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  const handleRemoveLibrarian = (user) => {
    axiosSecure
      .patch(`users/${user._id}/role`, { role: "user" })
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.displayName} removed librarian role`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div>
      <title>User Manage</title>
      <h1 className="text-4xl font-bold text-center">
        <span className="text-purple-600">User</span> Management {users.length}
      </h1>
      <div className="my-10 text-center">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="search"
            className="grow"
            placeholder="Search user"
          />
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Sl</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Actions</th>
              <th>Librarian Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <th>
                  {user.role === "Admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn bg-red-500 gap-2"
                    >
                      <FiShieldOff className="text-xl" /> Remove Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-green-500 gap-2"
                    >
                      <FaUserShield className="text-xl" /> Make Admin
                    </button>
                  )}
                </th>
                <th>
                  {user.role === "Librarian" ? (
                    <button
                      onClick={() => handleRemoveLibrarian(user)}
                      className="btn bg-red-500 gap-2"
                    >
                      <FiShieldOff className="text-xl" /> Remove Librarian
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeLibrarian(user)}
                      className="btn bg-blue-500 gap-2"
                    >
                      <FaBook className="text-xl" /> Make Librarian
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
