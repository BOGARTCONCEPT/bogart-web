"use client";
import { useRef, useEffect } from 'react';

export default function Home() {
  const iframeContainerRef = useRef(null);

  useEffect(() => {
    // Load the Fourvenues script dynamically
    const script = document.createElement('script');
    script.src = "https://www.fourvenues.com/assets/iframe/bogart/events";
    script.async = true; // Important: Make the script asynchronous

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts to prevent memory leaks
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once after mount

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
      <div id="fourvenues-iframe" ref={iframeContainerRef}></div>
    </div>
  );
}