"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function AddEvent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const shortDescription = e.target.shortDescription.value;
    const fullDescription = e.target.fullDescription.value;
    const price = e.target.price.value;
    const date = e.target.date.value;
    const priority = e.target.priority.value;
    const imageURL = e.target.imageURL.value;
    const category = e.target.category.value;
    const newEvent = {
      title,
      shortDescription,
      fullDescription,
      price: Number(price),
      date,
      priority,
      imageURL,
      category,
    };

    // post Event
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          toast.success("Successfully Added a Event")
          e.target.reset()
        }
      });
  };
  const categories = [
    "Wedding",
    "Luxury",
    "Rustic",
    "Modern",
    "Destination",
    "Budget",
    "Cultural",
    "Classic",
    "Adventure",
    "Seasonal"
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-[#BDE0FE] -mt-25 pt-50  py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Add New Event
          </h1>
          <p className="text-gray-600 text-lg">
            Create a beautiful event that will be featured on our platform
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title & Category Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Title *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFAFCC] focus:border-transparent transition-all duration-300"
                  placeholder="Enter event title"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFAFCC] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Short Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Short Description *
              </label>
              <textarea
                name="shortDescription"
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFAFCC] focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Brief description of your event (max 150 characters)"
                maxLength={150}
              />
              <div className="text-right text-sm text-gray-500 mt-1">/150</div>
            </div>

            {/* Full Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Description *
              </label>
              <textarea
                name="fullDescription"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFAFCC] focus:border-transparent transition-all duration-300 resize-vertical"
                placeholder="Detailed description of your event"
              />
            </div>

            {/* Price, Date & Priority Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price ($) *
                </label>
                <input
                  type="number"
                  name="price"
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFAFCC] focus:border-transparent transition-all duration-300"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFAFCC] focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Priority *
                </label>
                <select
                  name="priority"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFAFCC] focus:border-transparent transition-all duration-300"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                name="imageURL"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFAFCC] focus:border-transparent transition-all duration-300"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="btn btn-primary text-white rounded-full"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>

        {/* Help Text */}
        <div className="text-center mt-8 text-gray-600">
          <p>All fields marked with * are required</p>
        </div>
      </div>
    </div>
  );
}
