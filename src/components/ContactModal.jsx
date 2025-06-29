import { useState, useEffect } from "react";

export default function ContactModal({ show, onClose }) {
  const [status, setStatus] = useState("");

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-start overflow-y-auto pt-10 px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 relative mt-10 mb-10 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-6">
          Contact Us
        </h2>

        {/* Web3Forms Contact Form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4"
          onSubmit={() => setStatus("submitted")}
        >
          {/* Hidden Keys */}
          <input
            type="hidden"
            name="access_key"
            value="1e6f0570-0397-47e6-87e6-1e09372c793c"
          />
          <input
            type="hidden"
            name="from_name"
            value="FoodWalk Contact Form"
          />
          <input
            type="hidden"
            name="subject"
            value="New Contact Form Submission"
          />

          {/* Input Fields */}
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            Send Message
          </button>

          {/* Submission Status */}
          {status === "submitted" && (
            <p className="text-green-600 text-center mt-4">
              Message sent! We'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
