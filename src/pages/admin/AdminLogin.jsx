
import { div } from "motion/react-client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
  `${API_URL}/api/admin/auth/login`,
  {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }
);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Unable to connect to the server");
    } finally {
      setLoading(false);
    }
  };

  return (
     
    <div className="min-h-screen bg-[#100e0b] flex items-center justify-center px-4">
      
<div className="
  relative
  w-full
  max-w-[560px]
  mx-auto
  bg-[#1c1914]
  border border-[#a88746]/30
  rounded-2xl
  px-5 py-10
  sm:px-8 sm:py-12
  md:px-10 md:py-12
  shadow-2xl
">

  {/* Brand Name - Always Centered */}
  <div className="relative flex items-center justify-center mb-9 sm:mb-11">

    <span className="
      text-[#c9a45c]
      text-xs sm:text-sm
      font-semibold
      tracking-[0.25em] sm:tracking-[0.35em]
      text-center
    ">
      MONIKANCHAN
    </span>

    {/* Close Button - Top Right */}
    <button
      type="button"
      onClick={() => navigate("/")}
      aria-label="Close admin login"
      className="
        absolute
        -right-2 sm:-right-3
        -top-6 sm:-top-7
        flex
        h-9 w-9 sm:h-10 sm:w-10
        items-center justify-center
        rounded-full
        text-gray-400
        text-2xl
        transition-all duration-300
        hover:bg-[#c9a45c]/10
        hover:text-[#c9a45c]
        focus:outline-none
        focus:ring-2
        focus:ring-[#c9a45c]/50
      "
    >
      &times;
    </button>

  </div>

  {/* Login Heading */}
  <div className="text-center mb-8 sm:mb-10">
    <h1 className="text-3xl sm:text-4xl font-serif text-white">
      Admin Login
    </h1>

    <p className="text-gray-400 mt-3 text-sm sm:text-base">
      Sign in to manage your gallery
    </p>
  </div>

  {/* Login Form */}
  <form onSubmit={handleLogin} className="w-full space-y-5 sm:space-y-6">

    <div>
      <label className="block text-gray-300 text-sm mb-2 sm:mb-3">
        Email Address
      </label>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="
          w-full h-12 sm:h-14
          bg-[#29251e]
          border border-gray-700
          rounded-xl
          px-4 sm:px-5
          text-white
          text-sm sm:text-base
          outline-none
          focus:border-[#c9a45c]
          transition-colors
        "
      />
    </div>

    <div>
      <label className="block text-gray-300 text-sm mb-2 sm:mb-3">
        Password
      </label>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
        className="
          w-full h-12 sm:h-14
          bg-[#29251e]
          border border-gray-700
          rounded-xl
          px-4 sm:px-5
          text-white
          text-sm sm:text-base
          outline-none
          focus:border-[#c9a45c]
          transition-colors
        "
      />
    </div>

    {error && (
      <p className="text-red-400 text-sm">{error}</p>
    )}

    <button
      type="submit"
      disabled={loading}
      className="
        w-full h-12 sm:h-14
        bg-[#b18a45]
        hover:bg-[#c9a45c]
        disabled:opacity-60
        text-black
        font-semibold
        rounded-xl
        transition-all duration-300
      "
    >
      {loading ? "Signing in..." : "Sign In"}
    </button>

  </form>

  {/* Footer */}
  <p className="
    text-center
    text-gray-500
    text-xs sm:text-sm
    mt-8 sm:mt-10
  ">
    Authorised administrators only
  </p>

</div>

    </div>
  );
};

export default AdminLogin;
