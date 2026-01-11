import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import useAxiosSecure from "./Hooks/useAxiosSecure";

const AllBooks = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    axiosSecure
      .get(`/books?search=${searchText}&sort=${sortOrder}`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, [searchText, sortOrder, axiosSecure]);

  return (
    <div className="p-6">
      <title>Book Courier All Books</title>
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-600">
        All Books : {books.length}
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-10">
        <label className="input">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="search"
            className="grow"
            placeholder="Search Book Name"
          />
        </label>

        {/* Sort Dropdown */}
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Default Sort</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div
            key={book._id}
            className="card bg-gradient-to-tr from-purple-100 via-pink-100 to-yellow-100 shadow-lg hover:shadow-2xl rounded-xl cursor-pointer transition transform hover:-translate-y-1"
            onClick={() => navigate(`/books/${book._id}`)}
          >
            <figure className="overflow-hidden rounded-t-xl">
              <img
                src={book.image}
                alt={book.name}
                className="h-56 w-full object-cover hover:scale-105 transition-transform"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-bold text-purple-700">
                {book.name}
              </h3>
              <p className="text-gray-700 font-medium">Author: {book.author}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="badge bg-purple-600 text-white px-3 py-1">
                  {book.price} ৳
                </span>
                <span
                  className={`badge ${
                    book.status === "available"
                      ? "badge-success"
                      : "badge-error"
                  } text-white px-3 py-1`}
                >
                  {book.status === "available" ? "Publish" : "Unpublish"}
                </span>
              </div>
              <p className="text-gray-600 mt-2 line-clamp-3">
                {book.description || "No description available."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
