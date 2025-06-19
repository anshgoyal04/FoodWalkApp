import { useState, useRef } from "react";

export default function BecomeGuide() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "", city: "", phone: "", email: "", address: "",
  });

  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState("");
  const [showContact, setShowContact] = useState(false); // ⬅️ new state
  const contactRef = useRef(null); // ⬅️ reference to contact section

  // 👇 Call this externally when "Contact" is clicked
  window.revealContactForm = () => {
    setShowContact(true);
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["name", "city", "phone", "email", "address"].includes(name)) {
      setForm({ ...form, [name]: value });
    } else {
      setContact({ ...contact, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://sheetdb.io/api/v1/n66tdw0bhy06q", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: form }),
      });
      if (response.ok) {
        alert("Thank you! We’ll reach out soon.");
        setForm({ name: "", city: "", phone: "", email: "", address: "" });
        setShowForm(false);
      } else throw new Error("Error submitting form");
    } catch {
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus("submitting");
    try {
      const response = await fetch("https://sheetdb.io/api/v1/n66tdw0bhy06q", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: contact }),
      });
      if (response.ok) {
        setContactStatus("success");
        setContact({ name: "", email: "", message: "" });
      } else throw new Error();
    } catch {
      setContactStatus("error");
    }
  };

  return (
    <section className="w-full px-4 py-16 bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-50 -mt-6">
      {/* Become Guide Section */}
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
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {["name", "city", "phone", "email", "address"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            ))}
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
                  isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Contact Us Section */}
      {showContact && (
        <div
          ref={contactRef}
          className="max-w-2xl mx-auto mt-20 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 text-center shadow-yellow-100"
        >
          <h2 className="text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 drop-shadow-md">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Have questions or suggestions? We'd love to hear from you!
          </p>

          <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <textarea
              name="message"
              value={contact.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded h-32"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition"
            >
              Send Message
            </button>

            {contactStatus === "success" && (
              <p className="text-green-600 mt-2">Message sent successfully!</p>
            )}
            {contactStatus === "error" && (
              <p className="text-red-600 mt-2">Failed to send message. Try again.</p>
            )}
          </form>
        </div>
      )}
    </section>
  );
}
