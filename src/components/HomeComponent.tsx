import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import Link from "next/link";


export default function HomeComponent() {
  return (
    <>
    
    <div
      className="relative min-h-screen font-geist hidden sm:block"
      style={{
        backgroundImage: `url('/imgs/HORIZONTAL_4K.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="min-h-screen flex flex-col w-full">
        <div className="flex-grow flex items-center justify-end px-8">
          <div className="right-5 text-right flex flex-col">
            {/* GET TICKETS */}
            {/* <Link href="https://www.fourvenues.com/es/bogart"> */}          
            <a href="/events#events?date=2025-03&">
              <span className="group block sm:mb-2 font-bold text-white hover:text-gray-200 transition-all duration-300 ease-in-out text-2xl sm:text-5xl">
                <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:skew-x-12 group-hover:scale-90 origin-right">
                  TICKETS
                </span>
              </span>
            </a>

            {/* PRODUCTS */}
            <Link href="/history">
              <span className="group block mb-1 sm:mb-4 font-bold text-white hover:text-gray-200 transition-all duration-300 ease-in-out text-lg sm:text-2xl">
                <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:skew-x-12 group-hover:scale-90 origin-right">
                  HISTORIA
                </span>
              </span>
            </Link>    

            <div className="flex items-center justify-end space-x-4">
            <a
              href="https://www.instagram.com/bogartconcept/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@bogartconcept"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faTiktok} className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://open.spotify.com/playlist/1A1R4GjjCJhkBxE14BIjpU"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faSpotify} className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
          </div>
        </div>       
      </div>
    </div>

    <div
    
    className="relative min-h-screen font-geist sm:hidden"
    style={{
      backgroundImage: `url('/imgs/VERTICAL_AMPLIADA_2K.png')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    >
    <div className="min-h-screen flex flex-col w-full">
      <div className="flex-grow flex items-center justify-end px-3">
        <div className="right-5 text-right flex flex-col">
          {/* GET TICKETS */}
          {/* <Link href="https://www.fourvenues.com/es/bogart"> */}
          <a href="/events#events?date=2025-03&">
            <span className="group block sm:mb-2 font-gotham-bold text-white hover:text-gray-200 transition-all duration-300 ease-in-out text-3xl sm:text-5xl">
              <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:skew-x-12 group-hover:scale-90 origin-right">
                TICKETS
              </span>
            </span>
          </a>

          {/* PRODUCTS */}
          <Link href="/history">
            <span className="font-gotham-bold group block mb-1 sm:mb-4  text-white hover:text-gray-200 transition-all duration-300 ease-in-out text-xl sm:text-2xl">
              <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:skew-x-12 group-hover:scale-90 origin-right">
                HISTORIA
              </span>
            </span>
          </Link>    

          <div className="flex items-center justify-end space-x-4">
          <a
            href="https://www.instagram.com/bogartconcept/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@bogartconcept"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
          >
            <FontAwesomeIcon icon={faTiktok} className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://open.spotify.com/playlist/1A1R4GjjCJhkBxE14BIjpU"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
          >
            <FontAwesomeIcon icon={faSpotify} className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
        </div>
      </div>       
    </div>
    </div>
    </>
  );
}