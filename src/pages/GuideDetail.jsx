import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { supabase } from "../supabaseClient";

export default function GuideDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(name);
  const [guide, setGuide] = useState(null);

  useEffect(() => {
  async function fetchGuides() {
    const localGuides = [
      {
        name: "Raj", city: "Delhi", email: "", phone: "919999999999",
        address: "", gender: "Male", instagram: "", youtube: "",
        image: "/delhi-1.jpg"
      },
    ];

    try {
      const { data: sheetGuidesRaw, error } = await supabase
        .from("guides")
        .select("*");

      if (error) throw error;

      const sheetGuides = sheetGuidesRaw.map((g, index) => {
        const imageIndex = (index % 3) + 1;
        const baseCity = g.city.toLowerCase().replace(/\s+/g, "-");
        const image = `/${baseCity}-${imageIndex}.jpg`;

        return {
          name: g.name,
          city: g.city,
          email: g.email,
          phone: g.phone,
          address: g.address,
          gender: g.gender,
          instagram: g.instagram,
          youtube: g.youtube,
          image,
        };
      });

      const allGuides = [...localGuides, ...sheetGuides];

      const matched = allGuides.find(
        (g) => g.name.toLowerCase() === decodedName.toLowerCase()
      );

      setGuide(matched);
    } catch (error) {
      console.error("Failed to fetch guides from Supabase:", error);
      setGuide(null);
    }
  }

  fetchGuides();
}, [decodedName]);

  if (!guide)
    return (
      <p className="text-center mt-10 text-gray-600 font-medium animate-pulse">
        Loading guide details...
      </p>
    );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-2xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-orange-600 hover:underline flex items-center"
      >
        ← Back to guides
      </button>

      <img
        src={guide.image}
        alt={guide.name}
        className="w-full h-64 object-cover rounded-xl shadow-md"
      />

      <div className="mt-6 space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">
          {guide.name}
        </h1>
        <p className="text-xl font-semibold text-orange-600">
          📍 {guide.city}
        </p>

        {guide.gender && (
          <p className="text-gray-700">
            <span className="font-semibold">Gender:</span> {guide.gender}
          </p>
        )}
        {guide.email && (
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> {guide.email}
          </p>
        )}
        {guide.address && (
          <p className="text-gray-700">
            <span className="font-semibold">Meeting Point:</span> {guide.address}
          </p>
        )}

        <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-6">
          {guide.phone && (
            <a
              href={`https://wa.me/${guide.phone}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md transition"
            >
              <FaWhatsapp className="text-xl" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          )}
          {guide.instagram && (
            <a
              href={guide.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-md transition"
            >
              <FaInstagram className="text-xl" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          )}
          {guide.youtube && (
            <a
              href={guide.youtube}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md transition"
            >
              <FaYoutube className="text-xl" />
              <span className="hidden sm:inline">YouTube</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
