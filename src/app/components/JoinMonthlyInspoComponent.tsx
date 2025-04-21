"use client";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import BogartButtonComponent from "./BogartButtonComponent";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';
import { isValidEmail } from "@/utils/isValidEmail";
import { showBogartSuccessToast } from "@/hooks/BogartSuccessToast";

const FIREBASE_MAIL_COLLECTION = "emails";

type Props = {
  isDarkMode: boolean;
};

export default function JoinMonthlyInspoComponent({ isDarkMode }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true); // 🔧 default to true to avoid initial error display
  const [isMailSent, setIsMailSent] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const onEmailSubmit = async () => {
    // showBogartSuccessToast();
    if (!isValidEmail(email)) {
      setIsValid(false);
      return;
    }

    setIsValid(true);

    try {
      await addDoc(collection(db, FIREBASE_MAIL_COLLECTION), {
        email,
        createdAt: serverTimestamp(),
      });

      localStorage.setItem("bogart-monthly-email", email);
      showBogartSuccessToast();
      setIsMailSent(true);
      setIsOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect (() => {
    const storedEmail = localStorage.getItem("bogart-monthly-email");
    if (storedEmail) {
      setEmail(storedEmail);
      setIsMailSent(true);
    }
  }, []);
  

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(true);
  }

  return (
    <div className="min-h-72 flex w-full font-geist justify-center">
      <div className="flex flex-col w-[280px]">
        <div className="rounded-lg w-full max-w-sm mx-auto text-center relative">
          <button
            onClick={toggleDropdown}
            className={`shadow-2xl text-white bg-orange-500 bg-opacity-60 rounded-t-lg px-4 py-2 flex items-center justify-between gap-2 w-full
              ${isOpen ? "rounded-t-lg" : "rounded-lg"}
              font-gotham-bold text-sm`}
          >
            JOIN THE MONTHLY INSPO
            <ChevronDownIcon
              className={`h-5 w-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`
              flex flex-col gap-1 bg-yellow-400 bg-opacity-30 rounded-b-lg justify-center w-full transition-all duration-300 overflow-hidden 
              text-zinc-800
              ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
              ${isDarkMode ? "bg-yellow-400 bg-opacity-30" : 'bg-opacity-50 bg-zinc-800'}`}
          >
            <div className="flex w-full">
              <input
                id="email"
                type="email"
                value={email}
                onChange={onEmailChange}
                autoComplete="email"
                placeholder="bogart@concept.com"
                className={`
                  bg-transparent focus:outline-none focus:ring-0 z-10 px-4 py-[6px] rounded-bl-lg w-full placeholder-zinc-300 font-bold text-white transition-all duration-300
                  `}
                disabled={isMailSent} 
              />
              <div className="p-1 bg-yellow-400 bg-opacity-40 hover:bg-opacity-60">
                <BogartButtonComponent onClick={onEmailSubmit} isDisabled={isMailSent} />
              </div>
            </div>      
          </div>
        </div>
        {/* 🔧 Error Message */}
        {!isValid && (
          <p className="text-xs text-white px-2 ">Please enter a valid email address.</p>
        )}

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
