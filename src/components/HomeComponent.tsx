import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok"
import Link from "next/link"
import Image from "next/image"

const menuItems = [
  { text: "EVENT", url: "https://www.fourvenues.com/es/bogart", enabled: true, text_size: '4xl' },
  { text: "PRODUCTS", url: "/products", enabled: false, text_size: 'xl' },
  { text: "RENDERS", url: "/renders", enabled: false,  text_size: 'xl' },
  { text: "HISTORY", url: "/history", enabled: false,  text_size: 'xl' },
]

export default function HomeComponent() {
  return (
    <>
    <div
      className="relative min-h-screen font-geist"
      style={{
        backgroundImage: `url('/imgs/HORIZONTAL.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
    <div className="min-h-screen  flex w-full flex-col ">    
    <div className="relative w-full h-48">
        <img src="/imgs/logo_no_bg.png" alt="Your Image" className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-80"/>
    </div>
      <div>
        <div className="absolute right-5 bottom-36 text-right"> 
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.enabled ? item.url : ''}
              className={`group block mb-4 text-${item.text_size} font-bold hover:text-orange-600 text-gray-700 transition-all duration-300 ease-in-out`}
            >            
              <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:skew-x-12 group-hover:scale-90 origin-right">
                {item.text}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-auto w-full flex justify-start items-end p-4 px-6 mb-2">
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/bogartconcept/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-900 hover:text-gray-200 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
          </a>
          <a
            href="https://www.tiktok.com/@bogartconcept"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-900 hover:text-gray-200 transition-colors"
          >
            <FontAwesomeIcon icon={faTiktok} className="w-8 h-8" />
          </a>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}