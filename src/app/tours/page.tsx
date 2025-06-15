import Link from "next/link";
import Image from "next/image";

const tours = [
  {
    name: "City Highlights",
    desc: "Explore the city's landmarks and hidden gems on a relaxed eBike ride.",
    image: "/images/gallery/1.jpg",
  },
  {
    name: "Mountain Adventure",
    desc: "Tackle scenic mountain trails with our powerful eBikes and expert guides.",
    image: "/images/gallery/tea-trails.jpg",
  },
  {
    name: "Coastal Cruise",
    desc: "Enjoy breathtaking ocean views and fresh air along the coast.",
    image: "/images/gallery/coastal-ride.jpg",
  },
];

export default function ToursPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-200/60 via-white/80 to-green-100/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <h1 className="text-4xl font-bold my-8 text-gray-900 dark:text-white">Our eBike Tours</h1>
      <div className="grid gap-8 w-full max-w-4xl grid-cols-1 md:grid-cols-3">
        {tours.map(tour => (
          <div key={tour.name} className="glassmorphic flex flex-col items-center p-6 text-center">
            <div className="w-full h-40 mb-4 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <Image src={tour.image} alt={tour.name} width={320} height={160} className="object-cover w-full h-40" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{tour.name}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{tour.desc}</p>
            <Link href="/booking" className="mt-auto px-6 py-2 rounded-full bg-blue-600/80 text-white font-semibold shadow-lg hover:bg-blue-700/80 transition-all backdrop-blur-md">Book Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
} 