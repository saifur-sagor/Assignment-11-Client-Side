import React from "react";
import { FaUsers, FaUserShield, FaBook } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const Statics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: usersData = { count: 0 }, isLoading: isUsersLoading } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/stats/users");
      return res.data;
    },
  });

  const { data: librariansData = { count: 0 }, isLoading: isLibrariansLoading } = useQuery({
    queryKey: ["all-librarians"],
    queryFn: async () => {
      const res = await axiosSecure.get("/stats/librarians");
      return res.data;
    },
  });

  const { data: booksData = { count: 0 }, isLoading: isBooksLoading } = useQuery({
    queryKey: ["all-books"],
    queryFn: async () => {
      const res = await axiosSecure.get("/stats/books");
      return res.data;
    },
  });

  if (isUsersLoading || isLibrariansLoading || isBooksLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-bars loading-lg text-primary"></span>
      </div>
    );
  }

  
  const chartData = [
    { name: "Users", value: usersData.count },
    { name: "Librarians", value: librariansData.count },
    { name: "Books", value: booksData.count },
  ];

  const COLORS = ["#8b5cf6", "#14b8a6", "#f59e0b"]; 

  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-900 rounded-2xl shadow-inner">
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Overall Statistics Analysis</h2>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side */}
        <div className="flex-1 grid grid-cols-1 gap-4 w-full">
          <div className="bg-gradient-to-r from-purple-500 via-pink-300 to-indigo-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4 transform hover:scale-105 transition-transform">
            <FaUsers className="text-4xl" />
            <div>
              <p className="text-2xl font-bold">{usersData.count}</p>
              <p className="opacity-90">All Users</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4 transform hover:scale-105 transition-transform">
            <FaUserShield className="text-4xl" />
            <div>
              <p className="text-2xl font-bold">{librariansData.count}</p>
              <p className="opacity-90">All Librarians</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4 transform hover:scale-105 transition-transform">
            <FaBook className="text-4xl" />
            <div>
              <p className="text-2xl font-bold">{booksData.count}</p>
              <p className="opacity-90">Total Books</p>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="flex-1 w-full h-[350px] bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                 contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
      </div>
    </div>
  );
};

export default Statics;