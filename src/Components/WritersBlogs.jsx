import { motion } from "framer-motion";

const writers = [
  {
    name: "J.K. Rowling",
    country: "UK",
    famousBook: "Harry Potter Series",
    desc: "British author known for the globally popular Harry Potter fantasy series.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg",
  },
  {
    name: "Haruki Murakami",
    country: "Japan",
    famousBook: "Kafka on the Shore",
    desc: "Japanese novelist known for his surreal storytelling and magical realism.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/30/Haruki_Murakami.jpg",
  },
  {
    name: "Chinua Achebe",
    country: "Nigeria",
    famousBook: "Things Fall Apart",
    desc: "Nigerian author, famous for his novels about African culture and history.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/31/Chinua_Achebe.jpg",
  },
  {
    name: "Gabriel García Márquez",
    country: "Colombia",
    famousBook: "One Hundred Years of Solitude",
    desc: "Colombian novelist, pioneer of magical realism, Nobel laureate in Literature.",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Gabriel_Garcia_Marquez.jpg",
  },
];

const WritersBlogs = () => {
  return (
    <section className="py-20 bg-base-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meet Our <span className="text-primary">Famous Writers</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Explore books from renowned international writers and discover their
          masterpieces.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {writers.map((writer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-base-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={writer.img}
              alt={writer.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="font-semibold text-lg mb-1">{writer.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {writer.country}
              </p>
              <p className="text-sm font-medium mb-2">
                Famous: {writer.famousBook}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {writer.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WritersBlogs;
