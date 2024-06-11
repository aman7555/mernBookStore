/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., send data to API)
  };

  return (
    <div className="flex justify-center items-center h-screen mt-5">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg">Contact Us</h3>
            {/* Name */}
            <div className="mt-4 space-y-2">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your Name"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* Subject */}
            <div className="mt-4 space-y-2">
              <label htmlFor="subject">Subject:</label>
              <input
                id="subject"
                type="text"
                placeholder="Enter your Subject"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <span className="text-red-500 text-sm">
                  {errors.subject.message}
                </span>
              )}
            </div>
            {/* Message */}
            <div className="mt-4 space-y-2">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                placeholder="Enter your Message"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>
            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
