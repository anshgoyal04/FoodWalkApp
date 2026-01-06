export default function SuccessModal({ onGoHome}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-2xl p-8 text-center animate-fadeIn">
        
        {/* Icon */}
        <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-orange-100">
          <svg
            className="h-8 w-8 text-orange-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Registration Successful 🎉
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Thank you for registering as a food guide on
          <span className="font-medium text-orange-600"> BookMyFoodWalk</span>.
          <br />
          Our team will verify your profile within <b>24 hours</b>.
        </p>

        {/* Action */}
        <button
          onClick={onGoHome}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Got it, take me back
        </button>
      </div>
    </div>
  );
}
