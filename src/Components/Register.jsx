import React from "react";
import useAuth from "./Context/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import useAxiosSecure from "./Context/AxiosSecure";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // user create handler
  const handleRegister = (data) => {
    console.log("after register", data);
    const profilePhoto = data.photo[0];
    registerUser(data.email, data.password)
      .then(() => {
        //  store the image in form data
        const formData = new FormData();
        formData.append("image", profilePhoto);
        // send the photo to store and get the uri
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;

        axios.post(image_API_URL, formData).then((res) => {
          const photoURL = res.data.data.url;
          // create user
          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: photoURL,
          };
          console.log(userInfo);

          axiosSecure.post("/users", userInfo).then((res) => {
            console.log(res.data);

            if (res.data.insertedId) {
              console.log("user created in the database");
            }
          });
          // update user profile to firebase
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };
          updateUserProfile(userProfile)
            .then(() => {
              navigate(location.state || "/");
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">
          Welcome to <span className="text-purple-600">Book</span>Courier
        </h2>
        <p className="text-center ">Please Register</p>
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            {/* name field */}
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input"
              placeholder="Your name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}
            {/* image field */}
            <label className="label">Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input"
              placeholder="photo"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-500">photo is required</p>
            )}
            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
            {/* password field */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
              })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 character longer
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must be one upperCase,one lowerCase,one number and
                special character
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            Already have an account Please{" "}
            <Link
              state={location.state}
              className="text-blue-500 hover:underline"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
