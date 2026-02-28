"use client";

import { useState } from "react";

const CustomEidCardForm = () => {
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    // later you can POST to your API route
    // await fetch("/api/cards", { method: "POST", body: JSON.stringify(data) })
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-[#043915] flex items-center justify-center px-6 py-16">
      <div className="bg-black shadow-yellow-400 bg-opacity-40 shadow-2xl rounded-3xl p-10 w-full max-w-2xl">
        
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-yellow-400">
          Create Customized Eid Card ✨
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          {/* CATEGORY RADIO */}
          <div>
            <p className="font-semibold mb-3 text-slate-200">
              Select Category
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                "warm & friendly",
                "corporate",
                "best buddy",
                "romantic",
                "poetric",
              ].map((cat) => (
                <label
                  key={cat}
                  className={`cursor-pointer border-0 rounded-xl p-3 text-center capitalize ${
                    category === cat
                      ? "bg-green-950 text-white"
                      : "bg-gray-50 text-yellow-400"
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    className="hidden"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* CONDITIONAL FIELDS */}

          {/* Warm & Friendly */}
          {category === "warm & friendly" && (
            <>
              <input
                type="text"
                name="personName"
                placeholder="Person Name"
                required
                className="w-full border rounded-xl p-3"
              />

              <textarea
                name="message"
                placeholder="Short Eid Mubarak Message"
                required
                className="w-full border rounded-xl p-3"
              />
            </>
          )}

          {/* Corporate */}
          {category === "corporate" && (
            <>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                required
                className="w-full border rounded-xl p-3"
              />

              <textarea
                name="message"
                placeholder="Short Eid Mubarak Message"
                required
                className="w-full border rounded-xl p-3"
              />
            </>
          )}

          {/* Best Buddy */}
          {category === "best buddy" && (
            <>
              <input
                type="text"
                name="personName"
                placeholder="Best Buddy Name"
                required
                className="w-full border rounded-xl p-3"
              />

              <input
                type="text"
                name="tagWords"
                placeholder="Short Tag Words (e.g. Happy Vibes)"
                required
                className="w-full border rounded-xl p-3"
              />

              <textarea
                name="message"
                placeholder="Short Eid Message"
                required
                className="w-full border rounded-xl p-3"
              />

              <div>
                <p className="mb-2 font-medium text-gray-700">
                  Choose Color:
                </p>

                <div className="flex gap-4">
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      value="pink"
                      required
                    />{" "}
                    Pink
                  </label>

                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      value="blue"
                    />{" "}
                    Blue
                  </label>
                </div>
              </div>
            </>
          )}

          {/* Romantic */}
          {category === "romantic" && (
            <>
              <input
                type="text"
                name="personName"
                placeholder="Their Name"
                required
                className="w-full border rounded-xl p-3"
              />

              <textarea
                name="message"
                placeholder="Short Romantic Eid Message"
                required
                className="w-full border rounded-xl p-3"
              />
            </>
          )}

          {/* Poetric */}
          {category === "poetric" && (
            <>
              <input
                type="text"
                name="personName"
                placeholder="Person Name"
                required
                className="w-full border rounded-xl p-3"
              />
            </>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold py-3 rounded-xl transition"
          >
            Generate Eid Card 🌙
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomEidCardForm;