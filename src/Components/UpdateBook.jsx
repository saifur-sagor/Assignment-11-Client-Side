import { useParams, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { RxUpdate } from "react-icons/rx";
import { useEffect } from "react";

const UpdateBook = () => {
  const { id } = useParams(); // 🔹 URL থেকে book id
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  // 🔹 react-hook-form setup
  const { register, handleSubmit, reset } = useForm();

  // 🔹 single book fetch
  const { data: book, isLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books/${id}`);
      return res.data;
    },
  });

  // ✅ book data আসলেই form auto-fill হবে
  useEffect(() => {
    if (book) {
      reset({
        name: book.name,
        author: book.author,
        image: book.image,
        status: book.status,
        price: book.price,
        description: book.description,
      });
    }
  }, [book, reset]);

  // 🔹 update handler
  const handleUpdate = (data) => {
    data.price = Number(data.price); // 🔹 price number বানানো

    axiosSecure.patch(`/books/${id}`, data).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire("Updated!", "Book updated successfully", "success");

        // 🔹 update শেষ হলে My Book page এ পাঠানো
        navigate("/dashBoard/myBook");
      }
    });
  };

  if (isLoading) {
    return (
      <p className="text-center mt-10">
        <span className="loading loading-spinner text-error"></span>
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-2xl shadow-xl bg-gradient-to-r from-pink-300 via-gray-700 to-purple-400">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-purple-400 text-center mb-4">
            Update Your Book
          </h2>

          {/* 🔹 Form */}
          <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
            {/* Book Name */}
            <input
              className="input input-bordered w-full"
              {...register("name")}
            />

            {/* Author */}
            <input
              className="input input-bordered w-full"
              {...register("author")}
            />

            {/* Image */}
            <input
              className="input input-bordered w-full"
              {...register("image")}
            />

            {/* Status */}
            <select
              className="select select-bordered w-full"
              {...register("status")}
            >
              <option value="available">Publish</option>
              <option value="unavailable">Unpublish</option>
            </select>

            {/* Price */}
            <input
              type="number"
              className="input input-bordered w-full"
              {...register("price")}
            />

            {/* Description */}
            <textarea
              className="textarea textarea-bordered w-full"
              {...register("description")}
            />

            {/* Submit */}
            <button className="btn bg-purple-600 text-white w-full">
              <RxUpdate /> Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
