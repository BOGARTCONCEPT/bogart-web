'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { db } from '@/services/firebase/firebase';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';

export default function OriginTracker() {
  const searchParams = useSearchParams();

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
      } catch (error: any) {
        console.log('Error while tracking visit:', error.message);
      }
    };

    trackVisit().catch(console.error);
  }, [searchParams]);

  return null;
}
