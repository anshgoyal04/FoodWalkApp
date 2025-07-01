import { FaInstagram, FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 pt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-10 text-center md:text-left">
          {/* Left: About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">BookMyFoodWalk</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Discover India's rich street food culture with expert local guides.
              Join our walking tours and taste the authentic flavors of each city.
            </p>
          </div>

          {/* Middle: Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
              <li><a href="#about" className="hover:text-orange-400 transition">About</a></li>
              <li><a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.revealContactForm) {
                    window.revealContactForm();
                  } else {
                    console.warn("window.revealContactForm is not defined");
                  }
                }}
                className="hover:text-orange-400 transition"
              >
                Contact
              </a></li>
              <li><Link to="/faq" className="hover:text-orange-400 transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Right: Follow Us & Button */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-5 text-xl mb-4">
              <a
                href="https://www.instagram.com/bookmyfoodwalk?igsh=Znpyemt0d3lncTZv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/anshgoyal45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:bookmyfoodwalk@gmail.com"
                className="text-gray-400 hover:text-white transition"
              >
                <FaEnvelope />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mx-auto md:mx-0 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm flex items-center gap-2 transition"
            >
              <FaArrowUp /> Back to Top
            </button>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="text-center text-sm text-gray-500 mt-6 space-y-2 pb-2">
          <div className="flex justify-center gap-6 mt-2 text-sm">
            <Link to="/privacy" className="hover:text-orange-400 transition">Privacy Policy</Link>
            <span className="text-gray-400">|</span>
            <Link to="/terms" className="hover:text-orange-400 transition">Terms & Conditions</Link>

          </div>
          <p>&copy; {new Date().getFullYear()} BookMyFoodWalk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
