"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import JoinMonthlyInspoComponent from "./JoinMonthlyInspoComponent";
import ArrowScrollDownComponent from "./ArrowScrollDownComponent";

const desktopBackgroundImages = [
  { id: '/imgs/kid_desktop/1.png', image: '/imgs/kid_desktop/1.png' },
  { id: '/imgs/kid_desktop/2.png', image: '/imgs/kid_desktop/2.png' },
  { id: '/imgs/rupestre2.jpeg', image: '/imgs/rupestre2.jpeg' },
  { id: '/imgs/ropa_amarilla.jpeg' , image: '/imgs/ropa_amarilla.jpeg' },
];

const inspiringQuotes = [
  { id: 'You’re one moment away from something extraordinary.', quote: 'You’re one moment away from something extraordinary.' },
  { id: 'When was the last time that you felt inspired?', quote: 'When was the last time that you felt inspired?' },
  { id: 'You were made to feel something greater.', quote: 'You were made to feel something greater.' },
  { id: 'Remember what it feels like to dream?', quote: 'Remember what it feels like to dream?' },
  { id: 'Some feelings can’t be explained, only lived.', quote: 'Some feelings can’t be explained, only lived.' },
];

const mobileBackgroundImages = [
  {id: '/imgs/rupestre1.jpeg', image: '/imgs/rupestre1.jpeg' },
  {id: '/imgs/mobile/kid_mobile/1.png', image: '/imgs/mobile/kid_mobile/1.png' },
  {id: '/imgs/mobile/kid_mobile/2.png', image: '/imgs/mobile/kid_mobile/2.png' },
  {id: '/imgs/mobile/kid_mobile/3.png', image: '/imgs/mobile/kid_mobile/3.png' },
  {id: '/imgs/mobile/kid_mobile/4.png', image: '/imgs/mobile/kid_mobile/4.png' },
  {id: '/imgs/mobile/yelllow_clothes.jpeg', image: '/imgs/mobile/yelllow_clothes.jpeg' },
  {id: '/imgs/mobile/cuadros_phone.jpeg', image: '/imgs/mobile/cuadros_phone.jpeg' },
]


export default function HomeComponent() {
  const [bgImage, setBgImage] = useState(desktopBackgroundImages[0]);
  const [mobileBgImage, setMobileBgImage] = useState(mobileBackgroundImages[0]);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const viewCountKey = 'home_page_view_count';
    const currentCount = parseInt(localStorage.getItem(viewCountKey) || '0', 10);
    const newCount = currentCount + 1;
    localStorage.setItem(viewCountKey, newCount.toString());
  
    // Get usage data
    const usage = getUsageData();
  
    const image = getLeastUsedRandomItem(desktopBackgroundImages, usage.desktopBackgroundImages);
    const mobileImage = getLeastUsedRandomItem(mobileBackgroundImages, usage.desktopBackgroundImages);
    const quoteItem = getLeastUsedRandomItem(inspiringQuotes, usage.inspiringQuotes);
  
    // Update usage counts
    usage.desktopBackgroundImages[image.id] = (usage.desktopBackgroundImages[image.id] || 0) + 1;
    usage.inspiringQuotes[quoteItem.id] = (usage.inspiringQuotes[quoteItem.id] || 0) + 1;
  
    // Save back to localStorage
    saveUsageData(usage);
  
    // Set state
    setBgImage(image);
    setMobileBgImage(mobileImage);
    setQuote(quoteItem.quote);
  
    console.log(`User has visited this page ${newCount} times.`);
  }, []);
  

  function getUsageData() {
    const raw = localStorage.getItem("usage_data");
    return raw ? JSON.parse(raw) : { desktopBackgroundImages: {}, inspiringQuotes: {} };
  }
  
  function saveUsageData(data: unknown) {
    localStorage.setItem("usage_data", JSON.stringify(data));
  }
  
  function getLeastUsedRandomItem<T extends { id: string }>(
    items: T[],
    usageMap: Record<string, number>
  ): T {
    const minUsed = Math.min(...items.map(item => usageMap[item.id] || 0));
    const leastUsedItems = items.filter(item => (usageMap[item.id] || 0) === minUsed);
    const chosen = leastUsedItems[Math.floor(Math.random() * leastUsedItems.length)];
    return chosen;
  }
  

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
                  <Link href="/history">
                    <span className="group block mb-1 sm:mb-4 font-bold text-white hover:text-gray-200 transition-all duration-300 ease-in-out text-lg sm:text-2xl">
                      <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:skew-x-12 group-hover:scale-90 origin-right">
                        HISTORIA
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
              <span className="text-white text-3xl sm:text-5xl font-gotham-bold">
                {quote}
              </span>
            </div>
            <div className="mt-12 flex w-full justify-center">
            <a href="/events">
                <span className="rounded-lg  bg-zinc-50 hover:bg-opacity-60 bg-opacity-30 px-4 py-1 group block sm:mb-2 font-gotham-bold text-white hover:text-gray-200 transition-all duration-300 ease-in-out text-lg sm:text-2xl">
                  <span>
                    GET TICKETS
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>  

        <div className="w-full flex justify-center">
          <ArrowScrollDownComponent />
        </div>
      </div>
      <JoinMonthlyInspoComponent />   
    </div>
    <div
      className="relative min-h-[120vh] font-geist block sm:hidden"
      style={{
        backgroundImage: `url(${mobileBgImage.image})`,
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
                  <Link href="/history">
                    <span className="group block mb-1 sm:mb-4 font-bold text-white hover:text-gray-200 transition-all duration-300 ease-in-out text-lg sm:text-2xl">
                      <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:skew-x-12 group-hover:scale-90 origin-right">
                        HISTORIA
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
              <span className="text-white text-3xl sm:text-5xl font-gotham-bold">
                {quote}
              </span>
            </div>
            <div className="mt-12 flex w-full justify-center">
            <a href="/events">
                <span className="rounded-lg  bg-zinc-50 hover:bg-opacity-60 bg-opacity-30 px-4 py-1 group block sm:mb-2 font-gotham-bold text-white hover:text-gray-200 transition-all duration-300 ease-in-out text-lg sm:text-2xl">
                  <span>
                    GET TICKETS
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>  

        <div className="w-full flex justify-center">
          <ArrowScrollDownComponent />
        </div>
      </div>
      <JoinMonthlyInspoComponent />   
    </div>

    </>
  );
}