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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxrr1YyquFejH8ysg7nRiagh_lsSEq4LqskLtBm3Q1FClBDCFarhTYJ6iVCO1Q74-fd8xT8dwm5Y-CuviXA0utAQQGXbqIZZwdK6uNOk&s=10",
  },
  {
    name: "Kazi Nazrul Islam",
    country: "Bangladesh",
    famousBook: "Bidrohi, Agnibeena",
    desc: "Bangladeshi poet, writer, and musician, famous for his revolutionary writings and poems that protested against oppression and inspired freedom, equality, and human spirit.",
    img: "https://www.bssnews.net/bangla/assets/news_photos/2025/05/24/image-201996-1748086886.jpg",
  },
  {
    name: "Rabindranath Tagore",
    country: "India",
    famousBook: "One Hundred Years of Solitude",
    desc: "Indian poet, writer, philosopher, and Nobel laureate, famous for his poems, songs, and stories that express human emotions, nature, and spiritual ideas.",
    img: "https://biography.com.bd/uploads/images/202503/image_870x_67d593a68c55d.jpg",
  },
];

const WritersBlogs = () => {
  return (
    <section className="py-20 bg-base-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meet Our <span className="text-purple-600">Famous Writers</span>
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
