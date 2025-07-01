'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { db } from '@/services/firebase/firebase';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';

export default function OriginTracker() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const origin = searchParams.get('origin');
    const event = searchParams.get('event');

    if (!origin || !event) return;

    const trackVisit = async () => {
      try {
        const docId = `${origin}_${event}`;
        const ref = doc(db, 'origin_event_trackers', docId);

        const existing = await getDoc(ref);

        if (existing.exists()) {
          await updateDoc(ref, {
            count: existing.data().count + 1,
            updatedAt: serverTimestamp(),
          });
        } else {
          await setDoc(ref, {
            origin,
            event,
            count: 1,
            updatedAt: serverTimestamp(),
          });
        }

        // Remove 'origin' and 'event' from URL without reloading or scrolling
        const url = new URL(window.location.href);
        url.searchParams.delete('origin');
        url.searchParams.delete('event');

        router.replace(url.toString(), { scroll: false });
      } catch (error: any) {
        console.error('Error while tracking visit:', error.message);
      }
    };

    trackVisit();
  }, [searchParams, router]);

  return null;
}
