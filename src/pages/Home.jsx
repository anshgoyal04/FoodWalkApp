import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import CityList from "../components/CityList";
import BecomeGuide from "../components/BecomeGuide";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";

const localGuides = [
  { name: "Raj", city: "Delhi", image: "delhi-1.jpg",  contact: "https://wa.me/919999999999" },
  { name: "Priya", city: "Mumbai", image: "mumbai-1.jpg", contact: "https://wa.me/919888888888" },
  { name: "Arjun", city: "Kolkata", image: "kolkata-1.jpg", contact: "https://wa.me/917777777777" },
  { name: "Meera", city: "Jaipur", image: "jaipur-1.jpg", contact: "https://wa.me/916666666666" },
  { name: "Aman", city: "Delhi", image: "delhi-2.jpg", contact: "https://wa.me/915555555555" },
];

export default function Home() {
  const [searchCity, setSearchCity] = useState("");
  const [allGuides, setAllGuides] = useState(localGuides);

   const scrollToContact = () => {
    setShowContact(true); // reveal contact section
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200); // small delay to ensure it's visible
  };

  useEffect(() => {
    async function fetchGuides() {
      try {
      const res = await fetch("https://sheetdb.io/api/v1/n66tdw0bhy06q");
      const sheetGuides = await res.json();

      const formattedGuides = sheetGuides.map((g, index) => {
        const baseCity = g.city.toLowerCase().replace(/\s/g, "-");
        const imageIndex = (index % 3) + 1; // to rotate delhi-1.jpg, delhi-2.jpg, etc.
        const image = `/${baseCity}-${imageIndex}.jpg`;

        return {
          name: g.name,
          city: g.city,
          contact: `https://wa.me/${g.phone}`,
          image,
        };
      });

      setAllGuides([...localGuides, ...formattedGuides]);
    } catch (error) {
      console.error("Failed to fetch guides from SheetDB:", error);
    }
    }

    fetchGuides();
  }, []);

  const uniqueCities = [...new Set(allGuides.map((g) => g.city))];

  const filteredGuides = searchCity
    ? allGuides.filter((g) =>
        g.city.toLowerCase().includes(searchCity.toLowerCase())
      )
    : Array.from(new Map(allGuides.map((g) => [g.city, g])).values());

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-orange-400 via-orange-200 to-yellow-100">
      <Hero scrollToContact={scrollToContact} />
      <AboutUs />
      <section id="services" className="w-full px-4 py-12 bg-white/80 backdrop-blur-md shadow-md">
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 fade-slide-up drop-shadow-lg">
          Find Food Walk Guides
        </h2>

        {/* City Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {uniqueCities.map((city) => (
            <button
              key={city}
              onClick={() => setSearchCity(city)}
              className={`px-4 py-1 rounded-full text-sm border transition-all duration-200 ${
                searchCity.toLowerCase() === city.toLowerCase()
                  ? "bg-orange-500 text-white border-orange-500 shadow"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto relative mb-10">
          <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            placeholder="Search city..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Guide Cards */}
        <div className="fade-slide-up">
          <CityList guides={filteredGuides} />
        </div>
      </section>

      <BecomeGuide />
      <Footer />
    </div>
  );
}
