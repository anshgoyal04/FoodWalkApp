// src/components/FoodWalkCard.jsx
import { Link } from 'react-router-dom';
import { MapPin, UserCircle, MessageSquareText } from 'lucide-react'; // Optional icons from lucide-react

export default function FoodWalkCard({ guide }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 border border-gray-200">
      <img
        src={guide.image}
        alt={guide.city}
        className="w-full h-40 object-cover rounded-t-2xl"
        onError={(e) => {
    e.target.onerror = null; // prevent infinite loop
    e.target.src = "/default.jpg";
  }}
      />

      <div className="p-4">
        {/* Name and optional badge */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-1">
            <UserCircle className="w-5 h-5 text-orange-500" />
            {guide.name}
          </h3>
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
            Verified
          </span>
        </div>

        {/* City */}
        <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
          <MapPin className="w-4 h-4 text-gray-400" />
          {guide.city}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <a
            href={guide.contact}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 text-sm rounded-full transition"
          >
            <MessageSquareText className="w-4 h-4" />
            WhatsApp
          </a>
          <Link
            to={`/guide/${encodeURIComponent(guide.name)}`}
            className="bg-orange-500  hover:bg-orange-600  text-white px-3 py-1.5 text-sm rounded-full transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
