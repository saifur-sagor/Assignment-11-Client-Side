import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "./Context/useAuth";
import { Link, useLocation, useNavigate } from "react-router";

import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully login",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(location?.state?.pathname || "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h3 className="text-center text-3xl">Welcome Back</h3>
        <p className="text-center ">Please Register</p>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password")}
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p>
            haven't account Please{" "}
            <Link
              state={location.state}
              className="text-blue-500 hover:underline"
              to="/register"
            >
              Register
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default Login;
