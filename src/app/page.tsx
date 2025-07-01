import { Suspense } from 'react';
import OriginTracker from './services/Tracker';
import HomeComponent from './components/HomeComponent';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <OriginTracker />
      </Suspense>

    <Toaster position="top-center" />
    <HomeComponent />
    </>
  );
}
