"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log("Forgot password request for:", data.email);

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/auth/verify-email");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white">

      <div className="flex-1 flex justify-center items-center">
        <div className="p-14 rounded-2xl w-full max-w-md">
          <h1 className="text-2xl font-medium text-center text-[#333333] mb-4">Forgot Password?</h1>
          <p className="text-center text-[#333333] mb-6 text-sm">
            Please enter your email to get verification code
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-xs font-medium text-[#333333] mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full px-3 py-2 border text-[#5C5C5C] text-xs bg-white rounded-sm ${errors.email ? "border-red-500" : "border-[#1F3D2C]"
                  } focus:outline-none cursor-pointer`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1F3D2C] rounded-sm border border-gray-400 text-white py-2 text-xs px-4 hover:bg-[#428a85] transition duration-200 cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Continue"}
            </button>
          </form>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/images/auth-image.png"
          alt=""
          width={500}
          height={500}
          className="h-screen w-full"
        />
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
