import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import useAuth from "./Hooks/useAuth";
import Swal from "sweetalert2";

const LibrarianOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: orders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["librarianOrders", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/librarian-orders?email=${user.email}`
      );
      return res.data;
    },
  });

  // Cancel order
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/librarian-orders/cancel/${id}`).then(() => {
          Swal.fire("Cancelled!", "Order has been cancelled.", "success");
          refetch();
        });
      }
    });
  };

  if (isLoading)
    return (
      <p className="text-center mt-10">
        <span className="loading loading-spinner text-purple-600 text-xl"></span>
      </p>
    );

  return (
    <div className="p-6 min-h-screen bg-base-200">      
    <title>Librarian Orders</title>
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
        My Book Orders
      </h2>

      <div className="overflow-x-auto bg-base-100 shadow rounded-lg">
        <table className="table table-zebra w-full">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Price (৳)</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>{order.userName}</td>
                <td>{order.userEmail}</td>
                <td>{order.price}</td>
                <td>
                  <span
                    className={`badge ${
                      order.status === "pending"
                        ? "badge-warning"
                        : order.status === "paid"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>
                  {order.status === "pending" && (
                    <button
                      onClick={() => handleCancel(order._id)}
                      className=""
                    >
                      Cancel
                    </button>
                  )}
                  {order.status !== "pending" && (
                    <span className="text-gray-500">N/A</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <p className="text-center py-6 text-gray-500">No orders found</p>
        )}
      </div>
    </div>
  );
};

export default LibrarianOrders;
