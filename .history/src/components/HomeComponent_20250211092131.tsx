import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok"
import Link from "next/link"

const menuItems = [
  { text: "EVENT", url: "https://www.fourvenues.com/es/bogart", enabled: true },
  { text: "PRODUCTS", url: "/products", enabled: false },
  { text: "RENDERS", url: "/renders", enabled: false },
  { text: "HISTORY", url: "/history", enabled: false },
]

export default function HomeComponent() {
  return (
    <div
      className="relative min-h-screen flex flex-col font-geist"
      style={{
        backgroundImage: `url('/imgs/bogart3d.jpeg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Right side menu */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-right">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.enabled ? item.url : ''}
            className="group block mb-4 text-4xl font-bold text-orange-600 hover:text-gray-700 transition-all duration-300 ease-in-out"
          >
            <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:skew-x-12 group-hover:scale-90 origin-right">
              {item.text}
            </span>
          </Link>
        ))}
      </div>

      {/* Bottom social links */}
      <div className="mt-auto w-full flex justify-start items-end p-4 px-10 mb-10">
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

