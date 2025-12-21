import { useForm } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const AddBook = () => {
  const {user}=useAuth()
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.price = Number(data.price);
    data.email = user?.email;
    axiosSecure
      .post("/books", data)
      .then((res) => {
        if (res.data.insertedId || res.data.success) {
          Swal.fire({
            icon: "success",
            title: "Book Added!",
            text: "New book added successfully",
            timer: 1500,
            showConfirmButton: false,
          });
          reset();
        }
      })
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div
        className="card w-full max-w-2xl shadow-xl bg-gradient-to-r from-pink-300 via-gray-700 to-purple-400

"
      >
        <div className="card-body">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Add New Book
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
            {/* Book Name */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Book Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter book name"
                className="input input-bordered w-full"
                {...register("name", { required: "Book name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Author */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Author Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter author name"
                className="input input-bordered w-full"
                {...register("author", { required: "Author name is required" })}
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Book Image URL</span>
              </label>
              <input
                type="url"
                placeholder="https://image-url.com/book.jpg"
                className="input input-bordered w-full"
                {...register("image", { required: "Image URL is required" })}
              />
            </div>

            {/* Status & Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Status */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Status</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("status", { required: true })}
                >
                  <option value="">Select status</option>
                  <option value="available">Publish</option>
                  <option value="unavailable">Unpublish</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Price (৳)</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="input input-bordered w-full"
                  {...register("price", {
                    required: "Price is required",
                    min: 1,
                  })}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Book Description
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Write short description..."
                rows="3"
                {...register("description")}
              ></textarea>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button className="btn bg-purple-600 text-white w-full">
                <IoMdAdd />
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
