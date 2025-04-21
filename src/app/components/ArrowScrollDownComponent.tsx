import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function ArrowScrollDownComponent() {
  // Initialize isVisible as true to ensure the arrow is visible initially
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(false); // Hide arrow after scroll
      } else {
        setIsVisible(true); // Show arrow when at the top
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures it runs only once

  // If isVisible is false, the component will return null and hide the arrow
  if (!isVisible) return null;

  return (
    <>
    <div className="left-1/2 -translate-x-1/2 animate-bounce text-white z-50">
      <ChevronDownIcon className="h-10 w-10 text-white animate-pulse" />
    </div>
    </>
  );
}
