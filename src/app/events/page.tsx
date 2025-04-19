"use client";
import { useRef, useEffect } from 'react';

export default function Home() {
  const iframeContainerRef = useRef(null);

  useEffect(() => {
    // Load the Fourvenues script dynamically
    const script = document.createElement('script');
    // <script src="https://www.fourvenues.com/assets/iframe/joan-sicav/BPSD"></script>
    script.src = "https://www.fourvenues.com/assets/iframe/joan-sicav/BPSD";
    script.async = true; // Important: Make the script asynchronous

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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