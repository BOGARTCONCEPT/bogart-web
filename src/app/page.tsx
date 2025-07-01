import HomeComponent from "@/app/components/HomeComponent";
import { Toaster } from "react-hot-toast";
import OriginTracker from "./services/Tracker";

export default function Home() {
  return (
    <>  
      <Toaster position="top-center" />

       <OriginTracker />

      <HomeComponent />
    </>
  );
}
