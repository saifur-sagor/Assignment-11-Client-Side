import { motion } from "framer-motion";
import { FaBookOpen, FaRocket, FaWarehouse } from "react-icons/fa";

const PricingInfo = () => {
  const deliveryOptions = [
    {
      id: 1,
      title: "Standard",
      price: "50",
      time: "3-5 Business Days",
      description: "Ideal for non-urgent book deliveries with careful handling.",
      icon: <FaBookOpen />,
      gradient: "from-purple-500 via-pink-500 to-red-500",
    },
    {
      id: 2,
      title: "Express",
      price: "120",
      time: "24 Hours Delivery",
      description: "Get your books delivered within a day. Priority shipping.",
      icon: <FaRocket />,
      gradient: "from-blue-600 via-indigo-500 to-purple-500",
    },
    {
      id: 3,
      title: "Library",
      price: "250",
      time: "2-3 Business Days",
      description: "Best for shipping multiple books or entire collections.",
      icon: <FaWarehouse />,
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    },
  ];

  // Framer Motion Variants for Staggered Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -2 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
  };

  return (
    <section className="py-24 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-4"
          >
            Delivery Service Charges
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Review our fixed delivery types. You can select these options during your book parcel booking process.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {deliveryOptions.map((option) => (
            <motion.div
              key={option.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative p-0.5 rounded-3xl bg-gradient-to-br ${option.gradient} shadow-2xl`}
            >
              <div className="bg-white dark:bg-slate-800 rounded-[calc(1.5rem-1px)] p-8 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${option.gradient} flex items-center justify-center text-white text-3xl mb-6 shadow-lg`}>
                    {option.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {option.title}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400">
                      ৳{option.price}
                    </span>
                    <span className="text-gray-500 text-sm font-medium">/ per delivery</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {option.description}
                  </p>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-gray-500 uppercase tracking-wider">Estimate:</span>
                    <span className="text-purple-600 font-bold">{option.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingInfo;