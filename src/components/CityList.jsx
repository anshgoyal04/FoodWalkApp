// src/components/CityList.jsx
import FoodWalkCard from "./FoodWalkCard";

export default function CityList({ guides }) {
  if (guides.length === 0) {
    return <p className="text-center mt-6 text-gray-600">No food walks found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {guides.map((guide, index) => (
        <FoodWalkCard key={index} guide={guide} />
      ))}
    </div>
  );
}
