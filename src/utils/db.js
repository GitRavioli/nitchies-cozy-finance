import Dexie from 'dexie';

// Initialize the database
const db = new Dexie('FinanceDB');

// Define the schema
db.version(1).stores({
  transactions: '++id, type, amount, category, date', // Indexed fields
  recurring: '++id, name, amount, recurrenceType, recurrenceDateOrDay', // Indexed fields
});

// Helper functions for transactions
export const transactionHelpers = {
  /**
   * Add a transaction to the database
   * @param {Object} transaction - The transaction object (type, amount, category, date).
   */
  async addTransaction(transaction) {
    try {
      const id = await db.table('transactions').add(transaction);
      console.log('Transaction added with ID:', id);
      return id;
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  },

  /**
   * Load all transactions from the database
   * @returns {Promise<Array>} - The list of transactions.
   */
  async loadTransactions() {
    try {
      const transactions = await db.table('transactions').toArray();
      console.log('Loaded transactions:', transactions);
      return transactions;
    } catch (error) {
      console.error('Error loading transactions:', error);
      return [];
    }
  },

  /**
   * Delete all transactions from the database
   */
  async clearTransactions() {
    try {
      await db.table('transactions').clear();
      console.log('All transactions cleared.');
    } catch (error) {
      console.error('Error clearing transactions:', error);
    }
  },
};

export default db;
