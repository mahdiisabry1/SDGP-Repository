import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl">Login to your account</h1>
        <p>
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:text-blue-900">
            Register
          </a>
        </p>
      </div>
      <div className="w-full max-w-md mt-4">
        <form className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Username"
            className="mb-4 p-2 border border-gray-300  w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 border border-gray-300  w-full"
          />
          <div className="flex w-full items-center mt-2">
            <button
              type="submit"
              className="px-4 py-2 rounded border-3 hover:bg-gray-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

