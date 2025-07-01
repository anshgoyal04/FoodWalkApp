// TermsConditions.jsx
import { motion } from "framer-motion";

export default function TermsConditions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-6 py-12 text-gray-800 bg-white rounded-xl shadow-md mt-8"
    >
      <h1 className="text-4xl font-bold mb-6 text-orange-600 border-b pb-2">Terms & Conditions</h1>

      <p className="mb-4 leading-relaxed">
        By using <strong>BookMyFoodwalk</strong>, you agree to the terms outlined below. Please read them carefully before using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Website Use</h2>
      <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
        <li>You must provide accurate details in any form.</li>
        <li>Do not misuse the content or data on the site.</li>
        <li>We reserve the right to modify services at any time.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Guide Listings</h2>
      <p className="text-gray-600 mb-4">
        Guides listed on our platform are independent. We are not responsible for any arrangements made between users and guides.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Limitation of Liability</h2>
      <p className="text-gray-600 mb-4">
        BookMyFoodwalk is not liable for any issues or disputes that arise from guide interactions. Please verify credentials independently.
      </p>

      <p className="text-sm text-gray-500 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
    </motion.div>
  );
}
