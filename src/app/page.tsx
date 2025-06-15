import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200/60 via-white/80 to-green-100/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="w-full max-w-2xl px-4 py-12 flex flex-col items-center gap-8">
        <div className="backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/40 p-8 w-full flex flex-col items-center text-center glassmorphic">
          <Image src="/ebike.png" alt="eBike Tour" width={120} height={120} className="mb-4 rounded-full shadow-lg" />
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white drop-shadow-lg">eBike Tours</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-4">Discover scenic routes with our guided eBike adventures. Book your unforgettable ride today!</p>
          <Link href="/booking" className="mt-4 inline-block px-8 py-3 rounded-full bg-blue-600/80 text-white font-semibold shadow-lg hover:bg-blue-700/80 transition-all backdrop-blur-md">Book a Tour</Link>
        </div>
        <section className="w-full flex flex-col md:flex-row gap-6 justify-center">
          <div className="flex-1 backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Why Ride With Us?</h2>
            <ul className="text-gray-700 dark:text-gray-300 text-left list-disc list-inside space-y-1">
              <li>Stunning routes for all skill levels</li>
              <li>Modern, comfortable eBikes</li>
              <li>Expert local guides</li>
              <li>Flexible booking & group discounts</li>
            </ul>
          </div>
          <div className="flex-1 backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">How It Works</h2>
            <ol className="text-gray-700 dark:text-gray-300 text-left list-decimal list-inside space-y-1">
              <li>Choose your tour & date</li>
              <li>Book online in minutes</li>
              <li>Meet your guide at the start point</li>
              <li>Enjoy the ride!</li>
            </ol>
          </div>
        </section>
      </main>
      <footer className="w-full text-center py-6 text-gray-500 text-sm mt-auto">&copy; {new Date().getFullYear()} eBike Tours. All rights reserved.</footer>
    </div>
  );
}
