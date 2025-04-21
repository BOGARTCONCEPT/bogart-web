"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import JoinMonthlyInspoComponent from "./JoinMonthlyInspoComponent";
import { getUsageData, saveUsageData } from "@/services/getLocalStorageItems";
import { getLeastUsedRandomItem } from "@/services/getLeastUsedRandomItem";
import { DESKTOP_BACKGROUND_IMAGES, INSPIRING_QUOTES, MOBILE_BACKGROUND_IMAGES } from "@/constants/homePageConstants";


export default function HomeComponent() {
  const [bgImage, setBgImage] = useState(DESKTOP_BACKGROUND_IMAGES[0]);
  const [mobileBgImage, setMobileBgImage] = useState(MOBILE_BACKGROUND_IMAGES[0]);
  const [quote, setQuote] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const viewCountKey = 'home_page_view_count';
    const currentCount = parseInt(localStorage.getItem(viewCountKey) || '0', 10);
    const newCount = currentCount + 1;
    localStorage.setItem(viewCountKey, newCount.toString());
  
    // Get usage data
    const usage = getUsageData();
  
    const image = getLeastUsedRandomItem(DESKTOP_BACKGROUND_IMAGES, usage.desktopBackgroundImages);
    console.log(MOBILE_BACKGROUND_IMAGES, usage.mobileBackgroundImages)
    const mobileImage = getLeastUsedRandomItem(MOBILE_BACKGROUND_IMAGES, usage.mobileBackgroundImages);

    const quoteItem = getLeastUsedRandomItem(INSPIRING_QUOTES, usage.inspiringQuotes);
  
    // Update usage counts
    usage.desktopBackgroundImages[image.id] = (usage.desktopBackgroundImages[image.id] || 0) + 1;
    usage.inspiringQuotes[quoteItem.id] = (usage.inspiringQuotes[quoteItem.id] || 0) + 1;
    usage.mobileBackgroundImages[mobileImage.id] = (usage.mobileBackgroundImages[mobileImage.id] || 0) + 1;  
  
    // Save back to localStorage
    saveUsageData(usage);
  
    // Set state
    setBgImage(image);
    setMobileBgImage(mobileImage);
    setQuote(quoteItem.quote);
    setDarkMode(!mobileImage.isClear);
  
    console.log(`User has visited this page ${newCount} times.`);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);  
  
  return (
    <>
    <div
      className=" relative font-geist hidden sm:block"
      style={{
        backgroundImage: `url(${bgImage.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="min-h-[100vh] flex justify-between flex-col"> 
        <div>
          <div className="flex flex-col w-full">
            <div className="flex-grow flex px-8 ">
              <div className="text-right flex space-x-4">
                <div className="flex items-center mt-1 sm:mt-4">
                  <Link href="/bogart-world">
                    <span className="group block mb-1 sm:mb-4 font-bold text-white hover:text-gray-200 transition-all duration-300 ease-in-out text-lg sm:text-2xl">
                      <span className="inline-block transform transition-all duration-300 ease-in-out  group-hover:scale-90 origin-right">
                        BOGART WORLD
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
          <div className="px-2 w-full mt-32 flex flex-col justify-center">
            <div className="text-center">
              <span className={`
                text-white text-3xl sm:text-5xl font-gotham-bold
                ${ darkMode ? 'text-white' : 'text-black' }
                `}>
                {quote}
              </span>
            </div>
            <div className="mt-12 flex w-full justify-center">
            <a href="/events">
                <span className={`
                    rounded-lg px-4 py-1
                  bg-zinc-50 hover:bg-opacity-60 bg-opacity-30
                    group block sm:mb-2 font-gotham-bold text-white hover:text-gray-200 
                    transition-all duration-300 ease-in-out
                    text-lg sm:text-2xl`}
                  >
                  <span>
                    GET TICKETS
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>        
      <JoinMonthlyInspoComponent isDarkMode={darkMode} />   
      </div>
    </div>
    <div
      className="relative min-h-[100vh] font-geist block sm:hidden"
      style={{
        backgroundImage: `url(${mobileBgImage.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" min-h-[100vh] flex justify-between flex-col"> 
        <div>
          <div className="flex flex-col w-full">
            <div className="flex-grow flex px-8 ">
              <div className="text-right flex space-x-4">
                <div className="flex items-center mt-1 sm:mt-4">
                  <Link href="/bogart-world">
                    <span className="group block mb-1 sm:mb-4 font-bold text-white hover:text-gray-200 transition-all duration-300 ease-in-out text-lg sm:text-2xl">
                      <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:scale-90 origin-right">
                        BOGART WORLD
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
          <div className="px-2 w-full mt-32 flex flex-col justify-center">
            <div className="text-center">
              <span className={ `
              text-white text-3xl sm:text-5xl font-gotham-bold 
              `}>
                {quote}
              </span>
            </div>
            <div className="mt-12 flex w-full justify-center">
            <a href="/events">
                <span className={`
                rounded-lg   hover:bg-opacity-60 px-4 py-1 bg-zinc-50 bg-opacity-30 group block sm:mb-2 font-gotham-bold text-white hover:text-gray-200 transition-all duration-300 ease-in-out text-lg sm:text-2xl
                `}>
                  <span>
                    GET TICKETS
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>  

        {/* <div className="w-full flex justify-center">
          <ArrowScrollDownComponent />
        </div> */}
      <JoinMonthlyInspoComponent isDarkMode={darkMode} />   
      </div>
    </div>

    </>
  );
}