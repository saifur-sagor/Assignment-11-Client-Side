import { motion } from "framer-motion";
import { FaShieldAlt, FaBox, FaUserCheck } from "react-icons/fa";

const SafetySecurity = () => {
  const features = [
    {
      id: 1,
      title: "Tamper-Proof Packaging",
      desc: "Every book is wrapped in waterproof bubble wrap to prevent any liquid damage.",
      icon: <FaBox className="text-3xl" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      title: "Insured Shipping",
      desc: "We provide 100% insurance coverage for lost or damaged book parcels.",
      icon: <FaShieldAlt className="text-3xl" />,
      color: "from-purple-600 to-pink-500",
    },
    {
      id: 3,
      title: "Verified Librarians",
      desc: "Our delivery agents are specially trained to handle delicate books with care.",
      icon: <FaUserCheck className="text-3xl" />,
      color: "from-indigo-600 to-blue-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl font-black text-gray-800 dark:text-white mb-6 leading-tight">
              Your Books Are{" "}
              <span className="text-purple-600">Safe In Our Hands</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              We understand the emotional value of books. That's why we have
              implemented a multi-layer security system to ensure they reach
              their destination in mint condition.
            </p>
            <button className="btn btn-primary rounded-full px-8 shadow-lg">
              Learn More
            </button>
          </motion.div>

          {/* Right Side: Security Cards */}
          <div className="flex-1 grid grid-cols-1 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700"
              >
                <div
                  className={`w-16 h-16 shrink-0 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySecurity;
