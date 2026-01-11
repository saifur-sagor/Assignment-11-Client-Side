import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "./Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { signInUser } = UseAuth();
  const { register, handleSubmit, setValue } = useForm(); 
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
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
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password",
        });
      });
  };

  //demo handler
  const handleDemoLogin = (email, password) => {
    setValue("email", email);
    setValue("password", password);
    // from filed and login
    handleSubmit(handleSignIn)({ email, password });
  };

  return (
    <div className="card bg-gradient-to-r from-pink-300 via-gray-700 to-purple-400 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-10 text-white">
      <title>Login</title>
      <div className="card-body">
        <h3 className="text-center text-3xl font-bold">Welcome Back</h3>
        <p className="text-center text-gray-200">Please Login to continue</p>
        
        <form onSubmit={handleSubmit(handleSignIn)}>
          <fieldset className="fieldset">
            <label className="label text-white">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input text-black bg-white"
              placeholder="Email"
            />
            <label className="label text-white">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="input text-black bg-white"
              placeholder="Password"
            />
            <div className="mt-1">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>
            <button className="btn btn-neutral w-full mt-4 border-none bg-slate-800 hover:bg-black transition-all">
              Login
            </button>
          </fieldset>
        </form>

        <div className="divider divider-neutral text-xs opacity-50 uppercase">Or Login as Demo</div>
        
        {/* Demo Buttons */}
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-3 gap-2">
            <button 
              onClick={() => handleDemoLogin("admin@test.com", "123456As!")}
              className="btn btn-xs btn-error text-[10px]"
            >Admin</button>
            <button 
              onClick={() => handleDemoLogin("librarian@test.com", "123456As!")}
              className="btn btn-xs btn-warning text-[10px]"
            >Librarian</button>
            <button 
              onClick={() => handleDemoLogin("user@test.com", "123456As!")}
              className="btn btn-xs btn-info text-[10px]"
            >User</button>
          </div>
        </div>

        <p className="text-sm mt-4 text-center">
          Haven't account? Please{" "}
          <Link
            state={location.state}
            className="text-blue-300 hover:underline font-bold"
            to="/register"
          >
            Register
          </Link>
        </p>
        
        <div className="mt-2">
           <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;