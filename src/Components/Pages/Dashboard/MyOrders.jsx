import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // 1️⃣ fetch orders
  const {
    data: orders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myOrders", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?email=${user.email}`);
      return res.data;
    },
  });

  // cancel order
  const handleCancel = (id) => {
    axiosSecure.patch(`/orders/cancel/${id}`).then(() => {
      Swal.fire("Cancelled!", "Order cancelled", "success");
      refetch();
    });
  };

  //  pay order
  const handlePay = (id) => {
    axiosSecure.patch(`/orders/pay/${id}`).then(() => {
      Swal.fire("Success!", "Payment successful", "success");
      refetch();
    });
  };

  if (isLoading) {
    return (
      <p className="text-center mt-10">
        <span className="loading loading-spinner text-error"></span>
      </p>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-6">My Orders</h2>

      <div className="overflow-x-auto bg-base-100 shadow rounded-lg">
        <table className="table">
          <thead className="bg-base-300">
            <tr>
              <th>Sl</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>{order.author}</td>
                <td>{order.price} ৳</td>

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

                <td className="space-x-2">
                  {/* Cancel button */}
                  {order.status === "pending" && (
                    <button
                      onClick={() => handleCancel(order._id)}
                      className="btn btn-sm btn-error"
                    >
                      Cancel
                    </button>
                  )}

                  {/* Pay button */}
                  {order.status === "pending" && (
                    <button
                      onClick={() => handlePay(order._id)}
                      className="btn btn-sm btn-success"
                    >
                      Pay Now
                    </button>
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

export default MyOrders;
