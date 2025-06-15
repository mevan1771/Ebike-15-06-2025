import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200/60 via-white/80 to-green-100/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 w-full h-[60vh] md:h-[70vh] -z-10">
        <Image
          src="/images/logo/hero2.png"
          alt="eBike Tour Hero"
          fill
          priority
          className="object-cover object-center w-full h-full opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-transparent dark:from-gray-900/60 dark:via-gray-900/20 dark:to-transparent" />
      </div>
      <main className="w-full max-w-3xl px-4 pt-32 pb-12 flex flex-col items-center gap-12">
        <div className="glassmorphic bg-white/60 dark:bg-gray-900/60 rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/40 p-10 w-full flex flex-col items-center text-center backdrop-blur-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white drop-shadow-lg tracking-tight">eBike Tours</h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto">Experience the thrill of adventure and the beauty of nature on our guided eBike tours. Book your unforgettable ride today!</p>
          <Link href="/booking" className="mt-2 inline-block px-10 py-4 rounded-full bg-blue-600/90 text-white font-bold text-lg shadow-lg hover:bg-blue-700/90 transition-all backdrop-blur-md">Book a Tour</Link>
        </div>
      </main>
      <section className="w-full max-w-5xl flex flex-col md:flex-row gap-8 justify-center px-4 pb-12">
        <div className="flex-1 glassmorphic bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/20">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Why Ride With Us?</h2>
          <ul className="text-gray-700 dark:text-gray-300 text-left list-disc list-inside space-y-2 text-lg">
            <li>Stunning routes for all skill levels</li>
            <li>Modern, comfortable eBikes</li>
            <li>Expert local guides</li>
            <li>Flexible booking & group discounts</li>
          </ul>
        </div>
        <div className="flex-1 glassmorphic bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/20">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">How It Works</h2>
          <ol className="text-gray-700 dark:text-gray-300 text-left list-decimal list-inside space-y-2 text-lg">
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
