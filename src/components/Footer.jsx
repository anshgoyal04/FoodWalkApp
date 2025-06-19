import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} FoodWalk India. All rights reserved.</p>
      <p className="text-sm text-gray-400">Built with ❤️ by Ansh Goyal</p>
    </footer>
  );
}
