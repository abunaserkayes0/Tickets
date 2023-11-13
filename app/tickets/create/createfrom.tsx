"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function CreateFrom() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const body = form.body.value;
    const email = form.email.value;
    const priority = form.priority.value;
    const newTicket = {
      title: title,
      body: body,
      user_email: email,
      priority: priority,
    };
    const res = await fetch("http://localhost:7000/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTicket),
    });
    const data = await res.json();
    if (res.status === 201) {
      router.push("/tickets");
      router.refresh();
    }
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <form
          className="bg-white p-8 shadow-md rounded-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-6">Add Ticket</h2>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="body"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Body
            </label>
            <input
              type="body"
              id="body"
              name="body"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="select1"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Priority
            </label>
            <select
              id="select1"
              name="priority"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 font-bold text-white p-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}
