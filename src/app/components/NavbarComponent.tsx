
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import { usePathname } from "next/navigation";


type Props = {
  isFixed?: boolean;
}
export default function NavbarComponent({ isFixed }: Props) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className={`
      ${isFixed ? "fixed" : "block"}
      flex flex-col w-full bg-transparent z-50
    `}>
      <div className="flex-grow flex px-8">
        <div className="text-right flex space-x-4">
          <div className="flex items-center mt-1 sm:mt-4">
            <Link href={isHome ? "/bogart-world" : "/"}>
              <span className="group block mb-1 sm:mb-4 font-bold text-white hover:text-gray-200 transition-all duration-300 ease-in-out text-lg sm:text-2xl">
                <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:scale-90 origin-right">
                  {isHome ? "BOGART WORLD" : "HOME"}
                </span>
              </span>
            </Link>    
          </div>

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
  );
}
