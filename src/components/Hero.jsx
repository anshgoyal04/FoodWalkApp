export default function Hero() {
  return (
    <header className="relative h-[800px] w-full" id="home">
      {/* Background Image */}
      <img
        src="/hero.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20 bg-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover shadow-md"
            />
            <span className="text-2xl font-extrabold text-white tracking-wide">
              FoodWalk India
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-white font-medium">
            {["Home", "About", "Services"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group transition duration-200 hover:text-orange-300"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow transition cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Discover <span className="text-orange-400">Authentic Food Walks</span> Across India
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl">
          Join local guides to explore hidden street food gems and experience the real taste of India.
        </p>
      </div>
    </header>
  );
}
