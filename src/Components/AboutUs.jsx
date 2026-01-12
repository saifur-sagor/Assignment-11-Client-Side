import React from "react";
import { FaBookReader, FaShippingFast, FaUsers, FaHeart } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 w-7xl mx-auto text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 py-20 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Connecting Book Lovers</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          We are more than just a courier service. We are a bridge between stories, 
          knowledge, and the people who cherish them.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-bold text-pink-500">BookCourier</span>, our mission is to make literature accessible to everyone, everywhere. 
            Whether it's a rare textbook or a beloved novel, we ensure your books are handled with the care they deserve. 
            We aim to foster a global community of readers through reliable and affordable delivery.
          </p>
          <div className="flex gap-4">
             <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="font-bold text-purple-700 text-xl">10k+</h4>
                <p className="text-sm">Books Delivered</p>
             </div>
             <div className="bg-pink-100 p-4 rounded-lg">
                <h4 className="font-bold text-pink-700 text-xl">5k+</h4>
                <p className="text-sm">Happy Readers</p>
             </div>
          </div>
        </div>
        <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600" 
              alt="Books" 
              className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
            />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600 text-2xl">
                <FaShippingFast />
              </div>
              <h3 className="font-bold mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-500">Express delivery options for your urgent reading needs.</p>
            </div>
            {/* Card 2 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 text-2xl">
                <FaBookReader />
              </div>
              <h3 className="font-bold mb-2">Careful Handling</h3>
              <p className="text-sm text-gray-500">We treat every book as a treasure, ensuring zero damage.</p>
            </div>
            {/* Card 3 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-2xl">
                <FaUsers />
              </div>
              <h3 className="font-bold mb-2">Community First</h3>
              <p className="text-sm text-gray-500">Building a network of readers, librarians, and students.</p>
            </div>
            {/* Card 4 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 text-2xl">
                <FaHeart />
              </div>
              <h3 className="font-bold mb-2">Passion for Books</h3>
              <p className="text-sm text-gray-500">Run by book lovers, for book lovers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto my-16 p-8 bg-gray-900 rounded-3xl text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Want to start sending books?</h2>
          <p className="mb-6 opacity-70">Join our community today and make book sharing easier than ever.</p>
          <button className="btn btn-primary bg-purple-600 border-none px-8">Get Started</button>
      </div>
    </div>
  );
};

export default AboutUs;