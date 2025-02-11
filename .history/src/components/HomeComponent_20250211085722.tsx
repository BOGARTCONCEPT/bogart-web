import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstalod } from '@fortawesome/free-brands-svg-icons/faInstalod'

export default function HomeComponent() {
  return (
    <div style={{ 
      backgroundImage: `url('/imgs/bogart.jpeg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensures the background covers the entire viewport
      display: 'flex',       // Enable Flexbox on the main div
      flexDirection: 'column' // Stack content vertically
    }}>
      <div className="w-full flex-grow"> 
      </div>
      <div className="w-full flex justify-start items-end p-4 px-10 border-4 mb-10"> {/* Bottom-left */}
        <div className="">
          <a href="https://www.instagram.com/bogartconcept/">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}