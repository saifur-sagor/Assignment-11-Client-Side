import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "./Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import { FaUserCircle, FaEnvelope, FaLock } from "react-icons/fa";

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

  const handleDemoLogin = (email, password) => {
    setValue("email", email);
    setValue("password", password);
    handleSubmit(handleSignIn)({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2D1B36] via-[#1F2451] to-[#637CB5] p-4">
      {/* গ্লাস কার্ড */}
      <div className="w-full max-w-[400px] bg-white/10 backdrop-blur-xl rounded-[3rem] p-10 shadow-2xl border border-white/10 text-white">
        {/* user icon*/}
        <div className="flex justify-center mb-10">
          <div className="bg-white/10 p-1 rounded-full">
            <FaUserCircle className="text-white/30 text-8xl" />
          </div>
        </div>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-8">
          {/* Email Field */}
          <div className="relative flex items-center border-b border-white/40 pb-2 group focus-within:border-white transition-all">
            <FaEnvelope className="text-white/60 mr-3" />
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email ID"
              className="bg-transparent outline-none w-full placeholder:text-white/50 text-white"
            />
          </div>

          {/* Password Field */}
          <div className="relative flex items-center border-b border-white/40 pb-2 group focus-within:border-white transition-all">
            <FaLock className="text-white/60 mr-3" />
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="bg-transparent outline-none w-full placeholder:text-white/50 text-white"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-xs text-white/70">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-xs border-white/40"
              />
              <span>Remember me</span>
            </label>
            <button type="button" className="italic hover:text-white">
              Forgot Password?
            </button>
          </div>

          {/* Login Button - Gradient Style */}
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#4A0E2E] to-[#5D78FF] font-bold tracking-widest uppercase hover:opacity-90 transition-all shadow-lg">
            LOGIN
          </button>
        </form>

        {/* Demo Login Buttons */}
        <div className="mt-8">
          <div className="divider before:bg-white/10 after:bg-white/10 text-[10px] opacity-50">
            OR DEMO LOGIN
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <button
              onClick={() => handleDemoLogin("admin@test.com", "123456As!")}
              className="py-1 px-2 rounded bg-white/5 border border-white/10 text-[10px] hover:bg-white/20"
            >
              Admin
            </button>
            <button
              onClick={() => handleDemoLogin("librarian@test.com", "123456As!")}
              className="py-1 px-2 rounded bg-white/5 border border-white/10 text-[10px] hover:bg-white/20"
            >
              Librarian
            </button>
            <button
              onClick={() => handleDemoLogin("user@test.com", "123456As!")}
              className="py-1 px-2 rounded bg-white/5 border border-white/10 text-[10px] hover:bg-white/20"
            >
              User
            </button>
          </div>
        </div>

        <p className="text-center text-sm mt-8 text-white/60">
          Haven't account?{" "}
          <Link
            to="/register"
            className="text-blue-300 font-bold hover:underline"
          >
            Register
          </Link>
        </p>

        <div className="mt-4 opacity-80">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
