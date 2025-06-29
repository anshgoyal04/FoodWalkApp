import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function BecomeGuide() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    city: "",
    phone: "",
    email: "",
    address: "",
    gender: "",
    instagram: "",
    youtube: "",
  });

  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const { data, error } = await supabase
      .from("guides")
      .insert([form]);

    if (error) {
      throw error;
    }

    alert("Thank you! We’ll reach out soon.");
    setForm({
      name: "",
      city: "",
      phone: "",
      email: "",
      address: "",
      gender: "",
      instagram: "",
      youtube: "",
    });
    setShowForm(false);
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="w-full px-4 py-16 bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-50 -mt-6">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center shadow-orange-100">
        <h2 className="text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 drop-shadow-md">
          Are You a Local Food Guide?
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          Register and start receiving leads from food lovers visiting your city!
        </p>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-200"
          >
            Register Now
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Name</label>
                  <input
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">City</label>
                  <input
                    name="city"
                    placeholder="Which city do you operate in?"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Phone</label>
                  <input
                    name="phone"
                    placeholder="e.g. 919876543210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Gender</label>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    required
                    className={`${inputClass} bg-white`}
                  >
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="e.g. you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Meeting Address</label>
                  <input
                    name="address"
                    placeholder="Where should visitors meet you?"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Instagram</label>
                  <input
                    name="instagram"
                    type="url"
                    placeholder="https://instagram.com/yourhandle"
                    value={form.instagram}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">YouTube</label>
                  <input
                    name="youtube"
                    type="url"
                    placeholder="https://youtube.com/yourchannel"
                    value={form.youtube}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-end pt-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 text-white font-semibold rounded transition ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
