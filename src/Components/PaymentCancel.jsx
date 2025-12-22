import { Link } from "react-router";
import { FaTimesCircle } from "react-icons/fa";

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-orange-400 to-pink-500 px-4">
      <title>Payment cancel</title>
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        {/* Cancel Icon */}
        <div className="flex justify-center mb-4">
          <FaTimesCircle className="text-red-500 text-6xl" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Cancelled
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Your payment was not completed. No money was charged. You can try
          again anytime.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <Link
            to="myOrders"
            className="btn bg-red-500 hover:bg-red-600 text-white"
          >
            Try Again
          </Link>

          <Link
            to="/"
            className="btn btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
