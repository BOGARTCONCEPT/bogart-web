"use client";

import { showBogartSuccessToast } from "@/hooks/BogartSuccessToast";


export default function BogartButtonComponent() {
  return (    
    <>
      <button
        onClick={() => {
          showBogartSuccessToast()
        }}
        className="w-8 h-8 py-4 px-6 bg-no-repeat bg-center bg-contain   border-none"
        style={{ backgroundImage: "url('/imgs/trimmed-icon.png')" }} 
      ></button> 
    </>
  );
}
