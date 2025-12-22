import React, { useEffect, useState } from "react";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";

const BookManage = () => {
  const axiosSecure = useAxiosSecure();
  const [books, setBooks] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get("/admin/books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [axiosSecure]);

  const handleDropdownChange = (id, status) => {
    setSelectedStatus({
      ...selectedStatus,
      [id]: status,
    });
  };
  const handleUpdate = (id) => {
    const status =
      selectedStatus[id] || books.find((book) => book._id === id)?.status;

    axiosSecure
      .patch(`/admin/books/status/${id}`, { status })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Updated!", "Book status updated", "success");
          setBooks((prev) =>
            prev.map((book) => (book._id === id ? { ...book, status } : book))
          );
        }
      })
      .catch((err) => console.error(err));
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This book will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/admin/books/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Book deleted successfully", "success");

            setBooks((prev) => prev.filter((book) => book._id !== id));
          }
        });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <title>Book Manage</title>
      <h2 className="text-4xl  text-center font-bold mb-4">
        <span className="text-purple-600">Manage</span> Books
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.email}</td>
                <td>{book.price}</td>

                <td>
                  <select
                    className="select select-sm select-bordered"
                    value={selectedStatus[book._id] || book.status}
                    onChange={(e) =>
                      handleDropdownChange(book._id, e.target.value)
                    }
                  >
                    <option value="available">Publish</option>
                    <option value="unavailable">Unpublish</option>
                  </select>
                </td>

                <td className="space-x-2">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleUpdate(book._id)}
                  >
                    Update
                  </button>

                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {books.length === 0 && (
          <p className="text-center mt-6 text-gray-500">No books found</p>
        )}
      </div>
    </div>
  );
};

export default BookManage;
