import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok"

export default function HomeComponent() {
  return (
    <div
      style={{
        backgroundImage: `url('/imgs/bogart.jpeg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="w-full flex-grow"></div>
      <div className="w-full flex justify-start items-end p-4 px-10 mb-10">
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/bogartconcept/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-orange-600 hover:text-gray-700 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@bogartconcept"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-orange-600 hover:text-gray-700 transition-colors"
          >
            <FontAwesomeIcon icon={faTiktok} className="w-6 h-6" />
            <span>TikTok</span>
          </a>
        </div>
      </div>
    </div>
  )
}

