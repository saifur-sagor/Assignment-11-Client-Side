import { motion } from "framer-motion";
import { FaBoxOpen, FaTruck, FaCheckCircle } from "react-icons/fa";

const Work = () => {
  const steps = [
    {
      id: 1,
      title: "Place Your Order",
      description: "Fill out our simple booking form with your parcel details and destination.",
      icon: <FaBoxOpen className="text-4xl" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "We Collect",
      description: "Our dedicated delivery man will pick up the parcel from your doorstep safely.",
      icon: <FaTruck className="text-4xl" />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 3,
      title: "Fast Delivery",
      description: "Your parcel is tracked in real-time and delivered to the recipient on time.",
      icon: <FaCheckCircle className="text-4xl" />,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-100/60 via-base-200 to-purple-200/60
  dark:from-purple-900/20 dark:via-base-200 dark:to-purple-800/20 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience a seamless shipping process from start to finish. We've simplified logistics just for you.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 transform -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-purple-100/60 via-base-200 to-purple-200/60
  dark:from-purple-900/20 dark:via-base-200 dark:to-purple-800/20 dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 relative z-10"
            >
              <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
              
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                {step.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;