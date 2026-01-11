import { motion } from "framer-motion";
import { FaStar, FaBox } from "react-icons/fa";

const DeliveryMan = () => {
  const deliveryMen = [
    { id: 1, name: "Sinthiya Hossain", photo: "https://i.pravatar.cc/150?u=1", parcels: 450, rating: 4.9 },
    { id: 2, name: "Arif Ahmed", photo: "https://i.pravatar.cc/150?u=2", parcels: 380, rating: 4.8 },
    { id: 3, name: "Xefer Kein", photo: "https://i.pravatar.cc/150?u=3", parcels: 320, rating: 4.7 },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold dark:text-white">Our Top <span className="text-purple-600"> Delivery Heroes</span></h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">The people who deliver your trust on time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliveryMen.map((man, index) => (
            <motion.div
              key={man.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 text-center"
            >
              <img src={man.photo} alt={man.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-600 p-1" />
              <h3 className="text-xl font-bold dark:text-white">{man.name}</h3>
              <div className="flex justify-center items-center gap-2 mt-2">
                <FaBox className="text-purple-500" />
                <span className="text-gray-600 dark:text-gray-400">{man.parcels} Parcels Delivered</span>
              </div>
              <div className="flex justify-center items-center gap-1 mt-2 text-yellow-500">
                <FaStar /> <span className="font-bold text-gray-800 dark:text-white">{man.rating}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryMan;