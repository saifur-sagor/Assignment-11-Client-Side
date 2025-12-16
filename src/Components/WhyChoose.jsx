import {
  FaTruckFast,
  FaBookOpenReader,
  FaClockRotateLeft,
} from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";

const WhyChoose = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-purple-600">BookCourier</span>?
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-400">
            We make borrowing books easier, faster, and more reliable by
            connecting readers with trusted libraries — all from home.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div
            className="group rounded-2xl p-6 text-center transition hover:-translate-y-2 hover:shadow-xl
  bg-gradient-to-br from-purple-100/60 via-base-200 to-purple-200/60
  dark:from-purple-900/20 dark:via-base-200 dark:to-purple-800/20"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-purple-600 text-2xl mb-4 group-hover:scale-110 transition">
              <FaTruckFast />
            </div>
            <h3 className="text-lg font-semibold mb-2">Home Delivery</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Get books delivered directly from nearby libraries to your
              doorstep without any hassle.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="group rounded-2xl p-6 text-center transition hover:-translate-y-2 hover:shadow-xl
  bg-gradient-to-br from-purple-100/60 via-base-200 to-purple-200/60
  dark:from-purple-900/20 dark:via-base-200 dark:to-purple-800/20"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-purple-600 text-2xl mb-4 group-hover:scale-110 transition">
              <FaBookOpenReader />
            </div>
            <h3 className="text-lg font-semibold mb-2">Verified Libraries</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We partner only with trusted and verified libraries to ensure
              authentic and quality books.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="group rounded-2xl p-6 text-center transition hover:-translate-y-2 hover:shadow-xl
  bg-gradient-to-br from-purple-100/60 via-base-200 to-purple-200/60
  dark:from-purple-900/20 dark:via-base-200 dark:to-purple-800/20"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-purple-600 text-2xl mb-4 group-hover:scale-110 transition">
              <FaClockRotateLeft />
            </div>
            <h3 className="text-lg font-semibold mb-2">Time Saving</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No need to travel or wait in queues. Order, return, and manage
              books in just a few clicks.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="group rounded-2xl p-6 text-center transition hover:-translate-y-2 hover:shadow-xl
  bg-gradient-to-br from-purple-100/60 via-base-200 to-purple-200/60
  dark:from-purple-900/20 dark:via-base-200 dark:to-purple-800/20"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-purple-600 text-2xl mb-4 group-hover:scale-110 transition">
              <MdOutlineSecurity />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Secure authentication, protected data, and transparent order
              tracking you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
