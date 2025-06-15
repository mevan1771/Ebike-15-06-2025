import { useState } from "react";

const tours = [
  { label: "City Highlights", value: "city" },
  { label: "Mountain Adventure", value: "mountain" },
  { label: "Coastal Cruise", value: "coast" },
];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200/60 via-white/80 to-green-100/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="glassmorphic max-w-md w-full p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Book Your eBike Tour</h1>
        {submitted ? (
          <div className="text-center text-green-600 dark:text-green-400 font-semibold text-lg py-8">
            Thank you for booking!<br />We look forward to riding with you.
          </div>
        ) : (
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <input required type="text" placeholder="Your Name" className="rounded-lg px-4 py-3 bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
            <input required type="email" placeholder="Email Address" className="rounded-lg px-4 py-3 bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
            <input required type="date" className="rounded-lg px-4 py-3 bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
            <select required className="rounded-lg px-4 py-3 bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
              <option value="">Select a Tour</option>
              {tours.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
            <button type="submit" className="mt-2 px-6 py-3 rounded-full bg-blue-600/80 text-white font-semibold shadow-lg hover:bg-blue-700/80 transition-all backdrop-blur-md">Book Now</button>
          </form>
        )}
      </div>
    </div>
  );
} 