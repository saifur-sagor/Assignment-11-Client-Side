import React, { useEffect, useState } from "react";
import useAuth from "./Hooks/useAuth";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router";

const MyBook = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/my-books?email=${user.email}`)
        .then((res) => setBooks(res.data));
    }
  }, [user, axiosSecure]);
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-purple-600 text-center">
        My Books
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Author</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Price (৳)</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <th>{index + 1}</th>
                <td className="font-medium">{book.name}</td>
                <td>{book.author}</td>

                <td>
                  <span
                    className={`badge ${
                      book.status === "available"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {book.status}
                  </span>
                </td>

                <td>{new Date(book.createdAt).toLocaleDateString()}</td>

                <td className="font-semibold">৳ {book.price}</td>

                <td className="flex gap-2">
                  <Link
                    to={`/dashBoard/updateBook/${book._id}`}
                    className="btn btn-xs btn-outline btn-info"
                  >
                    <FaEdit />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBook;
