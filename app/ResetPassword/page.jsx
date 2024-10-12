"use client";
import React from "react";
import Logo from "../../images/Logo2.jpeg";
import Link from "next/link";
const ResetPassword = () => {
  return (
    <div>
      <main className="w-full py-20 flex flex-col items-center justify-center px-4">
        <div className="max-w-lg w-full text-gray-600 space-y-5">
          <div className="text-center pb-8">
            <div className="">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl pb-4">
                Reset your password
              </h3>
              <p>
                Enter the email you used to log in to FavorSelect, We will send
                you a password reset link
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <button className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-800 rounded-lg duration-150">
              Send reset link
            </button>
          </form>

          <p className="text-center">
            No Account?{" "}
            <Link
              href="/Login"
              className="font-medium text-red-600 hover:text-indigo-500 underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default ResetPassword;
