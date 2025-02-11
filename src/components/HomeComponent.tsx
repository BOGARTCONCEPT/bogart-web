import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok";
import Link from "next/link";

const menuItems = [
  { text: "GET TICKETS", url: "https://www.fourvenues.com/es/bogart", enabled: true, textSize: "5xl", mobileTextSize: "2xl" },
  { text: "PRODUCTS", url: "/products", enabled: false, textSize: "2xl", mobileTextSize: "lg" },
  { text: "RENDERS", url: "/renders", enabled: false, textSize: "2xl", mobileTextSize: "lg" },
  { text: "HISTORY", url: "/history", enabled: false, textSize: "2xl", mobileTextSize: "lg" },
];

export default function HomeComponent() {
  return (
    <div
      className="relative min-h-screen font-geist"
      style={{
        backgroundImage: `url('/imgs/HORIZONTAL.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="min-h-screen flex flex-col w-full">
        {/* Logo Section */}
        <div className="relative w-full h-auto">
          <div className="relative w-full h-48">
            <img
              src="/imgs/logo_no_bg.png"
              alt="Your Image"
              className="absolute top-[70px] sm:top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-56 sm:h-80"
            />
          </div>
        </div>

        {/* Menu Items Section - Centered Vertically */}
        <div className="flex-grow flex items-center justify-end px-2 sm:px-10 pt-20">
          <div className="right-5 text-right flex flex-col">
            {/* GET TICKETS */}
            <Link href="https://www.fourvenues.com/es/bogart">
              <span className="group block mb-4 font-bold text-rose-900 hover:text-gray-700 transition-all duration-300 ease-in-out text-2xl sm:text-5xl">
                <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:skew-x-12 group-hover:scale-90 origin-right">
                  GET TICKETS
                </span>
              </span>
            </Link>

            {/* PRODUCTS */}
            <Link href="/products">
              <span className="group block mb-4 font-bold text-rose-900 hover:text-gray-700 transition-all duration-300 ease-in-out text-lg sm:text-2xl">
                <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:skew-x-12 group-hover:scale-90 origin-right">
                  PRODUCTS
                </span>
              </span>
            </Link>

            {/* RENDERS */}
            <Link href="/renders">
              <span className="group block mb-4 font-bold text-rose-900 hover:text-gray-700 transition-all duration-300 ease-in-out text-lg sm:text-2xl">
                <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:skew-x-12 group-hover:scale-90 origin-right">
                  RENDERS
                </span>
              </span>
            </Link>

            {/* HISTORY */}
            <Link href="/history">
              <span className="group block mb-4 font-bold text-rose-900 hover:text-gray-700 transition-all duration-300 ease-in-out text-lg sm:text-2xl">
                <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:skew-x-12 group-hover:scale-90 origin-right">
                  HISTORY
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="w-full flex justify-start items-end p-4 px-6 mb-2">
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/bogartconcept/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-zinc-400 hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-9 h-9" />
            </a>
            <a
              href="https://www.tiktok.com/@bogartconcept"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-zinc-400 hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faTiktok} className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}