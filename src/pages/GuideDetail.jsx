// src/pages/GuideDetail.jsx 
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function GuideDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(name);
  const [guide, setGuide] = useState(null);

  useEffect(() => {
    async function fetchGuides() {
      const localGuides = [
        { name: "Raj", city: "Delhi", email: "", phone: "919999999999", address: "", image: "https://source.unsplash.com/400x200/?delhi,food" },
        { name: "Priya", city: "Mumbai", email: "", phone: "919888888888", address: "", image: "https://source.unsplash.com/400x200/?mumbai,food" },
        { name: "Arjun", city: "Kolkata", email: "", phone: "917777777777", address: "", image: "https://source.unsplash.com/400x200/?kolkata,food" },
        { name: "Meera", city: "Jaipur", email: "", phone: "916666666666", address: "", image: "https://source.unsplash.com/400x200/?jaipur,food" },
        { name: "Aman", city: "Delhi", email: "", phone: "915555555555", address: "", image: "https://source.unsplash.com/400x200/?delhi,streetfood" },
      ];

      try {
        const res = await fetch("https://sheetdb.io/api/v1/n66tdw0bhy06q");
        const sheetGuidesRaw = await res.json();
        const sheetGuides = sheetGuidesRaw.map((g) => ({
          name: g.name,
          city: g.city,
          email: g.email,
          phone: g.phone,
          address: g.address,
          image: `https://source.unsplash.com/400x200/?${g.city},food`,
        }));

        const allGuides = [...localGuides, ...sheetGuides];
        const matched = allGuides.find(
          (g) => g.name.toLowerCase() === decodedName.toLowerCase()
        );
        setGuide(matched);
      } catch (error) {
        console.error("Failed to fetch guides from sheet:", error);
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
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-blue-600 hover:underline flex items-center"
      >
        ← Back
      </button>

      <img
        src={guide.image}
        alt={guide.name}
        className="w-full h-60 object-cover rounded-xl shadow-sm"
      />
      <h1 className="text-3xl font-bold mt-4 text-gray-800">
        {guide.name}
      </h1>
      <p className="text-lg text-orange-600 font-medium mt-1">
        City: {guide.city}
      </p>
      {guide.email && (
        <p className="text-gray-700 mt-2">
          <span className="font-semibold">Email:</span> {guide.email}
        </p>
      )}
      {guide.address && (
        <p className="text-gray-700 mt-1">
          <span className="font-semibold">Meeting Point:</span> {guide.address}
        </p>
      )}
      {guide.phone && (
        <a
          href={`https://wa.me/${guide.phone}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-md"
        >
          Connect on WhatsApp
        </a>
      )}
    </div>
  );
}
