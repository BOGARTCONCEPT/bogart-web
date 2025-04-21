import HomeComponent from "@/app/components/HomeComponent";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>  
      <Toaster position="top-center" />

      <HomeComponent />
    </>
  );
}
