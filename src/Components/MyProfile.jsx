import React, { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "./Hooks/useAuth";

const MyProfile = () => {
  const { user, setUser, updateUserProfile } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = () => {
    if (!name || !photo) {
      toast.error("Please enter name or photo URL to update", {
        position: "top-center",
        theme: "colored",
      });
      return;
    }

    updateUserProfile({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!", {
          position: "top-center",
          theme: "colored",
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          theme: "colored",
        });
      });
  };

  return (
    <div className="max-w-md mx-auto bg-purple-200 shadow-xl rounded-2xl p-6 my-10 text-center">
      <title>Book-Courier-Profile</title>
      <div className="flex justify-center mb-4">
        <img
          src={photo || "https://via.placeholder.com/100"}
          alt="User"
          referrerPolicy="no-referrer"
          className="w-24 h-24 rounded-full border-4 border-purple-500 object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold text-purple-700 mb-2">
        Name : {user?.displayName || "No Name Found"}
      </h2>
      <p className="text-gray-600 mb-4"> Email : {user?.email}</p>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Update Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Update Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="input input-bordered w-full"
        />
        <button
          onClick={handleUpdate}
          className="btn btn-primary w-full mt-2 bg-purple-600 hover:bg-purple-700 border-none text-white"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
