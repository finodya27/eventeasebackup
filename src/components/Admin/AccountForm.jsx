"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";

export default function AccountForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
  });

  // Load data dari localStorage saat komponen dimuat
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("accountForm"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  // Handle perubahan input
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("accountForm", JSON.stringify(formData));
    window.location.reload(); // Refresh halaman
  };

  return (
    <section className="flex flex-col px-20 min-w-[240px] w-[851px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[707px]">
        <h2 className="text-xl font-semibold leading-relaxed text-black">
          Account Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-6 w-full max-w-[707px] max-md:max-w-full">
            <label
              className="text-xs font-bold leading-none uppercase text-zinc-500"
              htmlFor="firstName"
            >
              First name *
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[40px] text-zinc-500 max-md:max-w-full focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col mt-6 w-full max-w-[707px] max-md:max-w-full">
            <label
              className="text-xs font-bold leading-none uppercase text-zinc-500"
              htmlFor="lastName"
            >
              Last name *
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[40px] text-zinc-500 max-md:max-w-full focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col mt-6 w-full max-w-[707px] max-md:max-w-full">
            <label
              className="text-xs font-bold leading-none uppercase text-zinc-500"
              htmlFor="displayName"
            >
              Display name *
            </label>
            <input
              type="text"
              id="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[40px] text-zinc-500 max-md:max-w-full focus:border-blue-500 focus:outline-none"
              required
            />
            <p className="mt-3 italic leading-loose text-xs text-zinc-500">
              This will be how your name will be displayed in the account
              section and in reviews
            </p>
          </div>

          <div className="flex flex-col mt-6 w-full max-w-[707px] max-md:max-w-full">
            <label
              className="text-xs font-bold leading-none uppercase text-zinc-500"
              htmlFor="email"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[40px] text-zinc-500 max-md:max-w-full focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <Button className="my-4">Submit</Button>
        </form>
      </div>
    </section>
  );
}
