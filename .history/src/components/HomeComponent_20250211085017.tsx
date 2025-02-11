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
      <div className="w-full flex-grow"> {/* Takes up available space */}
        {/* Any content that should be above the "here" text */}
      </div>
      <div className="w-full flex justify-start items-end p-4 px-10 border-4 mb-10"> {/* Bottom-left */}
        <div className="">


        </div>
      </div>
    </div>
  );
}