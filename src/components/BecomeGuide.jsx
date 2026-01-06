import { useNavigate } from "react-router-dom";

export default function BecomeGuide() {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 py-16 bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-50 -mt-6">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center shadow-orange-100">
        <h2 className="text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 drop-shadow-md">
          Are You a Local Food Guide?
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          Register and start receiving leads from food lovers visiting your city!
        </p>

        <button
          onClick={() => navigate("/become-guide")}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
        >
          Register Now
        </button>
      </div>
    </section>
  );
}
