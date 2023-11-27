// DexieIDDatabase.ts
import Dexie from 'dexie';

// Create a Dexie instance and define the database
const bookmarkdb = new Dexie<IDDBSchema>('bookmarks');

// Define the database version and stores
bookmarkdb.version(1).stores({
  ids: '&id',
});

interface IDDBSchema {
  ids: { id: number };
}

// Export the Dexie instance for external use
export default bookmarkdb;

// Export additional types/interfaces as needed
export interface IDData {
  id: number;
}

// Function to add an ID to the database
export const addId = async (id: number): Promise<void> => {
  try {
    await bookmarkdb.ids.put({ id });
    console.log(`ID ${id} added to the database.`);
  } catch (error) {
    console.error('Error adding ID to the database: ', error);
  }
};

// Function to retrieve all IDs from the database
export const getAllIds = async (): Promise<IDData[]> => {
  try {
    const allIDs = await bookmarkdb.ids.toArray();
    return allIDs;
  } catch (error) {
    console.error('Error retrieving IDs from the database: ', error);
    return [];
  }
};

// Function to remove an ID from the database
export const removeId = async (id: number): Promise<void> => {
  try {
    await bookmarkdb.ids.delete(id);
    console.log(`ID ${id} removed from the database.`);
  } catch (error) {
    console.error('Error removing ID from the database: ', error);
  }
};