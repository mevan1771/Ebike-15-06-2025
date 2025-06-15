import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-200/60 via-white/80 to-green-100/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
      {/* Hero background image with overlay */}
      <div className="absolute inset-0 w-full h-[70vh] md:h-[80vh] -z-10">
        <Image
          src="/images/logo/hero2.png"
          alt="eBike Tour Hero"
          fill
          priority
          className="object-cover object-center w-full h-full scale-105 transition-transform duration-700"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
      </div>
      {/* Hero Content */}
      <main className="w-full flex flex-col items-center justify-center pt-32 md:pt-40 pb-10 px-4">
        <div className="glassmorphic max-w-2xl w-full px-8 py-12 rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/40 flex flex-col items-center text-center backdrop-blur-2xl bg-white/30 dark:bg-gray-900/30 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-xl tracking-tight">eBike Tours</h1>
          <p className="text-lg md:text-2xl text-blue-100 dark:text-blue-200 mb-4 font-medium">Sri Lanka's most scenic rides, powered by adventure.</p>
          <p className="text-base md:text-lg text-gray-100 dark:text-gray-200 mb-6 max-w-xl mx-auto">Experience the thrill of discovery and the beauty of nature on our guided eBike tours. Effortless, eco-friendly, and unforgettable.</p>
          <Link href="/booking" className="mt-2 inline-block px-10 py-4 rounded-full bg-blue-600/90 text-white font-bold text-lg shadow-lg hover:bg-blue-700/90 transition-all backdrop-blur-md">Book a Tour</Link>
        </div>
        {/* Scroll indicator */}
        <div className="mt-10 animate-bounce flex flex-col items-center">
          <span className="text-white/80 text-3xl">↓</span>
          <span className="text-xs text-white/60 mt-1">Scroll</span>
        </div>
      </main>
      {/* Features Section */}
      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 justify-center px-4 pb-16 mt-[-40px] z-10 relative">
        <div className="flex-1 glassmorphic bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-200 flex items-center gap-2">
            <span role="img" aria-label="star">🌟</span> Why Ride With Us?
          </h2>
          <ul className="text-gray-800 dark:text-gray-200 text-lg space-y-2">
            <li className="flex items-center gap-2"><span role="img" aria-label="route">🗺️</span> Stunning routes for all skill levels</li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bike">🚴‍♂️</span> Modern, comfortable eBikes</li>
            <li className="flex items-center gap-2"><span role="img" aria-label="guide">🧑‍🏫</span> Expert local guides</li>
            <li className="flex items-center gap-2"><span role="img" aria-label="group">👥</span> Flexible booking & group discounts</li>
          </ul>
        </div>
        <div className="flex-1 glassmorphic bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-200 flex items-center gap-2">
            <span role="img" aria-label="info">ℹ️</span> How It Works
          </h2>
          <ol className="text-gray-800 dark:text-gray-200 text-lg space-y-2 list-decimal list-inside">
            <li>Choose your tour & date</li>
            <li>Book online in minutes</li>
            <li>Meet your guide at the start point</li>
            <li>Enjoy the ride!</li>
          </ol>
        </div>
      </section>
      <footer className="w-full text-center py-6 text-gray-500 text-sm mt-auto z-10 bg-transparent">&copy; {new Date().getFullYear()} eBike Tours. All rights reserved.</footer>
    </div>
  );
}
