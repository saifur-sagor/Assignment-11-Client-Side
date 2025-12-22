import React from "react";
import useAuth from "./Hooks/useAuth";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyWish = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  //Orders fetch
  const { data: wishList = [] } = useQuery({
    queryKey: ["myWish", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/wish-books?email=${user.email}`);
      return res.data;
    },
  });


  return (
    <div className="min-h-screen p-6 bg-base-200">
      <title>Wish List</title>
      <h2 className="text-3xl font-bold text-center mb-6">
        <span className="text-purple-600">My</span> Wish List
      </h2>

      <div className="overflow-x-auto bg-base-100 shadow rounded-lg">
        <table className="table">
          <thead className="bg-base-300">
            <tr>
              <th>Sl</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Wish Date</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {wishList.map((wish, index) => (
              <tr key={wish._id}>
                <td>{index + 1}</td>
                <td>{wish.name}</td>
                <td>{wish.author}</td>
                <td>{wish.createdAt}</td>
                <td>{wish.price} ৳</td>
              </tr>
            ))}
          </tbody>
        </table>

        {wishList.length === 0 && (
          <p className="text-center py-6 text-gray-500">No Wish List Book here</p>
        )}
      </div>
    </div>
  );
};

export default MyWish;
