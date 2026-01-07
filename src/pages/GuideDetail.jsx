import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function GuideDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(name);
  const [guide, setGuide] = useState(null);
 const sectionsRef = useRef([]);
  useEffect(() => {
  async function fetchGuides() {
    // const localGuides = [
    //   {
    //     name: "Raj", city: "Delhi", email: "", phone: "919999999999",
    //     address: "", gender: "Male", instagram: "", youtube: "",
    //     image: "/delhi-1.jpg"
    //   },
    // ];

    try {
      const { data: sheetGuidesRaw, error } = await supabase
        .from("guides")
        .select("*")
        .eq("status", "verified");
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
  about: g.about,
  speciality: g.speciality,
  walks_done: g.walks_done,
  image,
};
      });

      // const allGuides = [...localGuides, ...sheetGuides];

      const matched = sheetGuides.find(
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
useEffect(() => {
  if (!guide) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-show");
        }
      });
    },
    { threshold: 0.15 }
  );

  sectionsRef.current.forEach((section) => {
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, [guide]);


  if (!guide)
    return (
      <p className="text-center mt-10 text-gray-600 font-medium animate-pulse">
        Loading guide details...
      </p>
    );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-16 px-4">
<div
  className="absolute inset-0 opacity-[0.60] pointer-events-none"
  style={{
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/food.png')",
    backgroundRepeat: "repeat",
  }}
/>
{/* Soft background blobs */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-orange-200 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute top-1/3 -right-40 w-[460px] h-[460px] bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
</div>
<div className="relative z-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-orange-600 hover:underline flex items-center"
      >
        ← Back to guides
      </button>

{/* HERO SECTION */}
<div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-md">

  {/* Image */}
  <img
    src={guide.image}
    alt={guide.name}
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Hero Content */}
  <div className="absolute bottom-6 left-6 text-white">
    <h1 className="text-4xl font-extrabold">
      {guide.name}
    </h1>

    <p className="mt-1 text-lg font-medium flex items-center gap-2">
      📍 {guide.city}
    </p>

    <span className="inline-block mt-2 bg-green-500/90 text-white text-sm px-3 py-1 rounded-full">
      ✔ Verified Food Guide
    </span>
  </div>

</div>
{guide.about && (
  <div
  ref={(el) => (sectionsRef.current[0] = el)}
  className="section-hidden mt-10 bg-white/80 backdrop-blur-sm border border-orange-100 rounded-xl p-6"
>

    <h2 className="text-2xl font-semibold text-orange-600 mb-3">
      About the Food Walk
    </h2>
    <p className="text-gray-700 leading-relaxed">
      {guide.about}
    </p>
  </div>
)}
{/* EXPERIENCE & EXPERTISE */}
{(guide.speciality || guide.walks_done) && (
  <div
  ref={(el) => (sectionsRef.current[1] = el)}
  className="section-hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
>

    
    {guide.speciality && (
      <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
        <p className="text-sm text-gray-500 mb-1">
          Speciality
        </p>
        <p className="font-semibold text-gray-800">
          {guide.speciality}
        </p>
      </div>
    )}

    {guide.walks_done && (
      <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
        <p className="text-sm text-gray-500 mb-1">
          Food Walks Completed
        </p>
        <p className="font-semibold text-gray-800">
          {guide.walks_done}+ walks
        </p>
      </div>
    )}

  </div>
)}

      <div ref={(el) => (sectionsRef.current[2] = el)} className="section-hidden bg-white/80 backdrop-blur-sm border border-orange-100 rounded-xl mt-6 space-y-4">

        {guide.gender && (
          <p className="text-gray-700">
            <span className="text-orange-500">👤</span>
            <span className="font-semibold">Gender:</span> {guide.gender}
          </p>
        )}
        {guide.email && (
          <p className="text-gray-700">
            <span className="text-orange-500">📧</span>
            <span className="font-semibold">Email:</span> {guide.email}
          </p>
        )}
        {guide.address && (
          <p className="text-gray-700">
            <span className="text-orange-500">📍</span>
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
      {/* WHY BOOK SECTION */}
<div
  ref={(el) => (sectionsRef.current[3] = el)}
  className="section-hidden mt-12 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-100 rounded-xl p-8 text-center"
>
  <h3 className="text-2xl font-bold text-orange-600">
    Why Book a Food Walk on BookMyFoodWalk?
  </h3>

  <p className="mt-3 text-gray-700">
    Experience cities like a local — through food, stories, and hidden gems.
  </p>

  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
    <div className="flex gap-3">
      <span>🍽️</span>
      <p>Handpicked local food experiences</p>
    </div>
    <div className="flex gap-3">
      <span>✔</span>
      <p>Verified and trusted food guides</p>
    </div>
    <div className="flex gap-3">
      <span>📍</span>
      <p>Authentic street food & hidden gems</p>
    </div>
    <div className="flex gap-3">
      <span>💬</span>
      <p>Direct communication with guides</p>
    </div>
  </div>
</div>
</div>
    </div>
  );
}
