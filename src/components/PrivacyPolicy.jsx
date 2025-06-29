// PrivacyPolicy.jsx
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-6 py-12 text-gray-800 bg-white rounded-xl shadow-md mt-8"
    >
      <h1 className="text-4xl font-bold mb-6 text-orange-600 border-b pb-2">Privacy Policy</h1>
      <p className="mb-4 leading-relaxed">
        At <strong>FoodWalk India</strong>, we value your privacy and are committed to safeguarding the information you share with us.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Information We Collect</h2>
      <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
        <li>Name, email, and contact details via forms</li>
        <li>Location and guide registration data</li>
        <li>Analytical data to improve our website</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">How We Use Your Information</h2>
      <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
        <li>Connect users with guides in their city</li>
        <li>Improve site features and personalization</li>
        <li>Send relevant updates and communication</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Third-Party Tools</h2>
      <p className="text-gray-600 mb-4">
        We utilize secure third-party services like Web3Forms and SheetDB to manage form submissions. These services have independent privacy policies.
      </p>

      <p className="text-sm text-gray-500 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
    </motion.div>
  );
}