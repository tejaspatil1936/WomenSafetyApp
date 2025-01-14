import { getFirestore, enableIndexedDbPersistence, setPersistence, IndexedDbPersistence } from 'firebase/firestore';

const enableOfflineMode = async () => {
  const db = getFirestore();
  try {
    // If you want to enable offline persistence, you can use the new approach with `setPersistence`:
    await setPersistence(db, IndexedDbPersistence);
    console.log('Offline mode enabled');
  } catch (err) {
    console.log('Error enabling offline mode:', err);
  }
};
