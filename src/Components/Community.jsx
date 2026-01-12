import { useQuery } from "@tanstack/react-query";
import useAuth from "./Hooks/useAuth";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaRegHeart, FaRegComment, FaShareAlt, FaPlus } from "react-icons/fa";

const CommunityBoard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: posts = [], isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/posts");
      return res.data;
    },
  });

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;

    const newPost = {
      userName: user?.displayName || "Anonymous",
      userEmail: user?.email,
      userPhoto: user?.photoURL || "",
      content: content,
      createdAt: new Date(),
      likes: 0,
    };

    try {
      const res = await axiosSecure.post("/posts", newPost);
      if (res.data.insertedId) {
        Swal.fire("Success", "Post shared!", "success");
        e.target.reset();
        document.getElementById("post_modal").close();
        refetch();
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Could not post", "error");
    }
  };

  if (isLoading) return <div className="text-center py-20"><span className="loading loading-spinner loading-lg text-purple-600"></span></div>;

  return (
    <div className="min-h-screen dark:bg-black-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight dark:text-white">Community <span className="text-purple-600">Board</span></h2>
          <button
            onClick={() => document.getElementById("post_modal").showModal()}
            className="btn bg-purple-600 hover:bg-purple-700 text-white border-none rounded-full px-6"
          >
            <FaPlus /> Create Post
          </button>
        </div>

        {/* Modal */}
        <dialog id="post_modal" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">New Post</h3>
            <form onSubmit={handlePostSubmit}>
              <textarea
                name="content"
                className="textarea textarea-bordered w-full h-32 focus:border-purple-500"
                placeholder="What's on your mind?"
                required
              ></textarea>
              <div className="modal-action">
                <button type="button" onClick={() => document.getElementById("post_modal").close()} className="btn btn-ghost">Cancel</button>
                <button type="submit" className="btn bg-purple-600 text-white border-none px-6">Post Now</button>
              </div>
            </form>
          </div>
        </dialog>

        {/* Post Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <img src={post.userPhoto} className="w-10 h-10 rounded-full object-cover" alt="" />
                <div>
                  <h4 className="font-bold text-gray-800">{post.userName}</h4>
                  <p className="text-xs text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{post.content}</p>
              <div className="flex gap-6 border-t pt-4 text-gray-400">
                <button className="flex items-center gap-2 hover:text-pink-500"><FaRegHeart /> {post.likes}</button>
                <button className="flex items-center gap-2 hover:text-purple-600"><FaRegComment /> Reply</button>
                <button className="flex items-center gap-2 ml-auto"><FaShareAlt /></button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CommunityBoard;