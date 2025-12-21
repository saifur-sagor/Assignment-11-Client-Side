import { Link, useNavigate, useSearchParams } from "react-router";
import { FaCheckCircle } from "react-icons/fa";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const PaymentSuccess = () => {
  const axiosSecure = useAxiosSecure();
  const [transactionId, setTransactionId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const sessionId = searchParams.get("session_id"); // Stripe session_id from URL

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .get(`/stripe-session/${sessionId}`) // নতুন backend route
        .then((res) => {
          setTransactionId(res.data.transactionId); // transactionId show করার জন্য
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId, axiosSecure]);

  if (loading)
    return <p className="text-center mt-10">Processing payment...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-400 to-indigo-500 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-6xl" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <Link
            to="/dashBoard/myOrders"
            className="btn bg-purple-600 hover:bg-purple-700 text-white"
          >
            View My Orders
          </Link>

          <Link
            to="/"
            className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
