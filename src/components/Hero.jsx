import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    if (window.revealContactForm) {
      window.revealContactForm();
    }
    setMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
  ];

  return (
    <header className="relative w-full h-[800px] font-sans" id="home">
      {/* Background Image */}
      <img
        src="/hero.jpg"
        alt="Hero"
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-white/95 text-gray-800 shadow-md" : "bg-transparent text-white"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo1.jpeg"
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover shadow-md"
            />
            <span className="text-2xl md:text-3xl bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-brand animate-bounce tracking-wide drop-shadow-lg">
              BookMyFoodWalk
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className={`hidden md:flex items-center gap-8 font-medium ${scrolled ? "text-gray-800" : "text-white"}`}>
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative group transition duration-200 hover:text-orange-300"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={handleContactClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow transition"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`md:hidden text-2xl ${scrolled ? "text-gray-800" : "text-white"}`}
             onClick={() => setMenuOpen(!menuOpen)}
           >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/90 text-white px-6 pb-6 space-y-4 text-center transition-all duration-300 z-30">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-lg hover:text-orange-400 transition"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="inline-block mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow transition"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Text */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl">
          Discover{" "}
          <span className="text-orange-400">Authentic Food Walks</span> Across India
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl">
          Join local guides to explore hidden street food gems and experience the real taste of India.
        </p>
      </div>
    </header>
  );
}
