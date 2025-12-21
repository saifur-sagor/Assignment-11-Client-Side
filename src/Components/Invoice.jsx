import React, { useEffect, useState } from "react";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import useAuth from "./Hooks/useAuth";

const Invoice = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [paidOrders, setPaidOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch all paid orders for the logged-in user
    axiosSecure
      .get(`/orders?email=${user.email}&status=paid`)

      .then((res) => setPaidOrders(res.data))
      .finally(() => setLoading(false));
  }, [axiosSecure]);

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <span className="loading loading-spinner text-purple-600 text-xl"></span>
      </div>
    );
  }

  if (!paidOrders.length) {
    return (
      <p className="text-center mt-10 text-gray-500">
        <span className="loading loading-spinner text-error"></span>
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">
        Paid Orders / Invoice
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>Transaction ID</th>
              <th>Paid At</th>
              <th>Paid Amount (৳)</th>
            </tr>
          </thead>
          <tbody>
            {paidOrders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.transactionId}</td>
                <td>
                  {order.paidAt}
                  {/* {new Date(order.paidAt).toLocaleString("en-BD", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })} */}
                </td>
                <td className="font-semibold">৳ {order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
