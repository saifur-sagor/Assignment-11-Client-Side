import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    review:
      "Fast delivery and excellent service. My favorite library platform!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "Verified libraries and authentic books. Very reliable!",
    rating: 4,
  },
  {
    name: "Alex Johnson",
    review: "Love the home delivery feature. Saves so much time!",
    rating: 5,
  },
];

const Review = () => {
  return (
    <section className="py-20 bg-purple-50 dark:bg-purple-900">
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="text-primary">Readers Say</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-300 max-w-xl mx-auto">
          Our users love BookCourier. Here’s what they have to say about our
          service.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-base-200 rounded-2xl p-6 shadow-md text-left"
          >
            <div className="flex items-center mb-2 gap-2">
              {Array.from({ length: item.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {item.review}
            </p>
            <h4 className="font-semibold">{item.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Review;
