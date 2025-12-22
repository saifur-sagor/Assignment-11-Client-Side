import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "./Hooks/useAuth";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const BookDetails = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axiosSecure
      .get(`/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error(err));
  }, [id]);
  const handlePlaceOrder = () => {
    // order info
    const orderData = {
      userName: user.displayName,
      userEmail: user.email,
      phone,
      address,
      bookId: book._id,
      name: book.name,
      author: book.author,
      price: book.price,
    };

    // ordered book info
    const orderedBookData = {
      bookId: book._id,
      name: book.name,
      image: book.image,
      author: book.author,
      price: book.price,
      userEmail: user.email,
      userName: user.displayName,
      ownerEmail: book.email,
    };

    // save order
    axiosSecure.post("/orders", orderData).then(() => {
      // save ordered book
      axiosSecure.post("/ordered-books", orderedBookData).then(() => {
        setIsOpen(false);
        Swal.fire("Order placed successfully");
      });
    });
  };
  const handleWishedBook = () => {
    const wishedBookData = {
      bookId: book._id,
      name: book.name,
      image: book.image,
      author: book.author,
      price: book.price,
      userEmail: user.email,
      userName: user.displayName,
      ownerEmail: book.email,
    };

    axiosSecure.post("/wish-books", wishedBookData).then(() => {
      Swal.fire("Successfully save the book wish List");
    });
  };

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading book details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <title>Book Courier Details</title>
      <div className="max-w-5xl mx-auto bg-base-100 shadow-xl rounded-lg overflow-hidden md:flex">
        {/* Book Image */}
        <div className="md:w-1/2">
          <img
            src={book.image}
            alt={book.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Book Info */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">{book.name}</h2>
            <p className="text-gray-600 font-medium">Author: {book.author}</p>
            <p className="text-gray-800 font-semibold text-lg">
              Price: {book.price} ৳
            </p>
            <p
              className={`text-sm font-semibold ${
                book.status === "available" ? "text-green-600" : "text-red-600"
              }`}
            >
              {book.status === "available" ? "Publish" : "Unpublish"}
            </p>
            {book.description && (
              <p className="text-gray-700">{book.description}</p>
            )}
            <p className="text-gray-500 text-sm">
              Added on: {new Date(book.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Buttons */}
          <div>
            <div className="pt-4 flex gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="btn bg-purple-600 text-white flex-1"
              >
                Order Now
              </button>
              <button
                onClick={handleWishedBook}
                className="btn bg-purple-600 text-white flex-1"
              >
                Wishlist
              </button>
            </div>
            <button
              className="btn btn-outline w-full mt-2"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
            {isOpen && (
              <dialog className="modal modal-open">
                <div className="modal-box">
                  <h3 className="font-bold text-lg mb-4">Place Order</h3>

                  {/* Name */}
                  <input
                    type="text"
                    value={user?.displayName}
                    readOnly
                    className="input input-bordered w-full mb-3"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    value={user?.email}
                    readOnly
                    className="input input-bordered w-full mb-3"
                  />

                  {/* Phone */}
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered w-full mb-3"
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  {/* Address */}
                  <textarea
                    placeholder="Delivery Address"
                    className="textarea textarea-bordered w-full mb-4"
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  <div className="modal-action">
                    <button
                      className="btn btn-primary"
                      onClick={handlePlaceOrder}
                    >
                      Place Order
                    </button>
                    <button className="btn" onClick={() => setIsOpen(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </dialog>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
