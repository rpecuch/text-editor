import { openDB } from 'idb';

const initdb = async () =>
// create jate database
  openDB('jate', 1, {
    upgrade(db) {
       // check if database already exists
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // create if it does not already exist
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// makes edits to database
export const putDb = async (content) => {
  const jateDb = await openDB('jate', 1);
  // choose readwrite mode to enable editing
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  // pass in content from text editor
  const request = store.add({ id: 1, value: content});
  const result = await request;
  console.log('Data saved to database', result);
};

// retrieves data from database
export const getDb = async () => {
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  return result.value;
}

// call on page load
initdb();