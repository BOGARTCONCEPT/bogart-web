"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import BogartButtonComponent from "./BogartButtonComponent";


export default function JoinMonthlyInspoComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="min-h-72 flex w-full font-geist justify-center">
      <div className="flex flex-col  w-[240px]">

        <div className=" rounded-lg w-full max-w-sm mx-auto text-center relative">
          <button
            onClick={toggleDropdown}
            className=" text-white bg-orange-500 rounded-t-lg px-4 py-2 flex items-center justify-between gap-2 w-full"
          >
            Join the monthly inspo
            <ChevronDownIcon
              className={`h-5 w-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`
              flex bg-yellow-400 bg-opacity-30 rounded-b-lg justify-center w-full transition-all duration-300 overflow-hidden 
               text-zinc-800
              ${ isOpen ? "max-h-40  opacity-100" : "max-h-0 opacity-0" }`
            }
          >
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="bogart@concept.com"
              className="bg-transparent focus:outline-none focus:ring-0 z-10 px-4 py-[6px] rounded-bl-lg w-full placeholder-zinc-300 font-bold text-white transition-all duration-300"
            />
            <div className="p-1 bg-yellow-400 bg-opacity-40 hover:bg-opacity-60">
              <BogartButtonComponent/>  
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative mt-4 h-[200px] mb-4">
          {/* Bottom Image */}
          <div
            className="absolute top-0 left-0 h-36 w-36"
            style={{
              backgroundImage: `url('/imgs/stickers/PEGATINA 2 5X5.png')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute h-36 w-36"
            style={{
              top: `calc(12rem - 9rem)`,
              left: `calc(12rem - 6rem)`,
              backgroundImage: `url('/imgs/stickers/PEGATINA 1 5X5.png')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
}
