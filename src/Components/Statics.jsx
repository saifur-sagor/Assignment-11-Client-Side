import React from "react";
import { FaUsers, FaUserShield, FaBook } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./Hooks/useAxiosSecure";

const Statics = () => {
  const axiosSecure = useAxiosSecure();

  // All Users
  const { data: usersData = { count: 0 }, isLoading: isUsersLoading } =
    useQuery({
      queryKey: ["all-users"],
      queryFn: async () => {
        const res = await axiosSecure.get("/stats/users");
        return res.data;
      },
    });

  // All Librarians
  const {
    data: librariansData = { count: 0 },
    isLoading: isLibrariansLoading,
  } = useQuery({
    queryKey: ["all-librarians"],
    queryFn: async () => {
      const res = await axiosSecure.get("/stats/librarians");
      return res.data;
    },
  });

  // All Books
  const { data: booksData = { count: 0 }, isLoading: isBooksLoading } =
    useQuery({
      queryKey: ["all-books"],
      queryFn: async () => {
        const res = await axiosSecure.get("/stats/books");
        return res.data;
      },
    });

  if (isUsersLoading || isLibrariansLoading || isBooksLoading) {
    return (
      <div className="text-center py-10 text-purple-600 font-bold">
        Loading statistics...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      <title>Statics</title>
      {/* Users Card */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
        <FaUsers className="text-4xl" />
        <div>
          <p className="text-xl font-bold">{usersData.count}</p>
          <p>All Users</p>
        </div>
      </div>

      {/* Librarians Card */}
      <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
        <FaUserShield className="text-4xl" />
        <div>
          <p className="text-xl font-bold">{librariansData.count}</p>
          <p>All Librarians</p>
        </div>
      </div>

      {/* Books Card */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
        <FaBook className="text-4xl" />
        <div>
          <p className="text-xl font-bold">{booksData.count}</p>
          <p>Total Books</p>
        </div>
      </div>
    </div>
  );
};

export default Statics;
