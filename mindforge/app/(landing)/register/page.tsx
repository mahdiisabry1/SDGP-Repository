import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl">Get started with your account</h1>
        <p>
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:text-blue-900">
            Login
          </a>
        </p>
      </div>
      <div className="w-full max-w-md mt-4">
        <form className="flex flex-col items-center justify-center">
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-2 border border-gray-300 w-full"
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="mb-4 p-2 border border-gray-300 w-full"
          />
          <div className="w-full">
            <div className="text-sm flex justify-around mb-2">
              <ul className="list-disc">
                <li>One lowercase character</li>
                <li>One uppercase character</li>
                <li>One number</li>
              </ul>
              <ul className="list-disc">
                <li>One spacial character</li>
                <li>8 characters minimum</li>
              </ul>
            </div>
          </div>
          <div className="flex w-full items-center mt-2">
            <button
              type="submit"
              className="px-4 py-2 rounded border-3 hover:bg-gray-200"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
