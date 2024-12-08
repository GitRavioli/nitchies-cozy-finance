<template>
  <div class="finance-page">
    <header class="header">
      <h1 class="title">Manage Your Finances</h1>
      <p class="subtitle">Track your income and expenses easily</p>
    </header>

    <section class="overview-section">
      <h2>Overview</h2>
      <div class="overview">
        <div class="overview-item">
          <h3>Total Income</h3>
          <p class="amount">${{ totalIncome }}</p>
        </div>
        <div class="overview-item">
          <h3>Total Expenses</h3>
          <p class="amount">${{ totalExpenses }}</p>
        </div>
        <div class="overview-item">
          <h3>Final Balance</h3>
          <p class="amount">${{ balance }}</p>
        </div>
      </div>
    </section>

    <section class="transactions-section">
      <h2>Transactions</h2>
      <div v-if="transactions.length === 0" class="no-data-message">
        <p>No transactions recorded yet. Start adding your income and expenses to track your finances!</p>
      </div>
      <table v-else class="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ transaction.date }}</td>
            <td>{{ transaction.category }}</td>
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.type }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="chart-section">
      <h2>Income vs Expenses & Expenses by Category</h2>
      <div class="charts-container">
        <div class="chart-item">
          <h3>Income vs Transactions</h3>
          <div v-if="totalIncome || totalExpenses">
            <apexchart type="pie" :options="incomeVsTransactionsOptions" :series="[totalIncome, totalExpenses]"
              height="350"></apexchart>
          </div>
          <p class="text-center" v-else>No data available for income vs expenses chart.</p>
        </div>
        <div class="chart-item">
          <h3>Expenses by Category</h3>
          <div v-if="Object.keys(expensesByCategory).length">
            <apexchart type="pie" :options="expensesByCategoryOptions" :series="Object.values(expensesByCategory)"
              height="350"></apexchart>
          </div>
          <p class="text-center" v-else>No data available for expenses by category chart.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted, nextTick } from "vue";
import Dexie from "dexie"; // Import Dexie.js
import ApexCharts from "vue3-apexcharts";
import { transactionHelpers } from '../utils/db';

const db = new Dexie("financeDB");
db.version(1).stores({
  transactions: "++id,date,category,amount,type", // IndexedDB schema
});

export default {
  components: {
    apexchart: ApexCharts,
  },
  data() {
    return {
      transactions: [],
      showAll: false, // Start with an empty array for transactions
      incomeVsTransactionsOptions: {
        chart: {
          type: "pie",
        },
        labels: ["Income", "Expenses"],
        colors: ["#4caf50", "#f44336"],
        legend: {
          position: "bottom",
        },
      },
      expensesByCategoryOptions: {
        chart: {
          type: "pie",
        },
        legend: {
          position: "bottom",
        },
      },
    };

  },
  async created() {
    try {
      // Load the transactions when the component is created
      this.transactions = await transactionHelpers.loadTransactions();
      console.log('Loaded transactions:', this.transactions); // Check if data is loaded
    } catch (error) {
      console.error('Error loading transactions:', error);
    }
  },
  computed: {
    displayedTransactions() {
      return this.showAll ? this.transactions : this.transactions.slice(0, 10);
    },
    totalIncome() {
      return this.transactions
        .filter((transaction) => transaction.type === "income")
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    },
    totalExpenses() {
      return this.transactions
        .filter((transaction) => transaction.type === "expense")
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    },
    balance() {
      return this.totalIncome - this.totalExpenses;
    },
    expensesByCategory() {
      const expenseCategories = {};
      this.transactions
        .filter((transaction) => transaction.type === "expense")
        .forEach((transaction) => {
          if (!expenseCategories[transaction.category]) {
            expenseCategories[transaction.category] = 0;
          }
          expenseCategories[transaction.category] += transaction.amount;
        });
      return expenseCategories;
    },
  },
  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll;
    },
    async addTransaction(transaction) {
      await db.table('transactions').add(transaction); // Add a new transaction to the database
      this.loadTransactions(); // Refresh the transactions list
    },
    getRandomColor() {
      // Random color generator for each category slice
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    async loadDataAndInitializeCharts() {
      // Fetch or load your data here
      this.totalIncome = await getTotalIncome(); // Your method to get total income
      this.totalExpenses = await getTotalExpenses(); // Your method to get total expenses
      this.expensesByCategory = await getExpensesByCategory(); // Your method to get categories

      // Now initialize the charts with the loaded data
      this.initializeCharts();
    },
    renderCharts() {
      const incomeVsTransactionsCtx = document.getElementById("incomeVsTransactionsChart");
      const expenseByCategoryCtx = document.getElementById("expenseByCategoryChart");

      // Check if the canvas elements exist
      if (!incomeVsTransactionsCtx || !expenseByCategoryCtx) {
        console.error("Canvas elements not found, rendering charts failed.");
        return;
      }

      // Income vs Transaction Chart
      new Chart(incomeVsTransactionsCtx, {
        type: "pie",
        data: {
          labels: ["Income", "Expenses"],
          datasets: [{
            data: [this.totalIncome, this.totalExpenses],
            backgroundColor: ["#4caf50", "#f44336"],
            borderColor: ["#388e3c", "#c62828"],
            borderWidth: 1,
          }],
        },
      });

      // Expense by Category Chart
      new Chart(expenseByCategoryCtx, {
        type: "pie",
        data: {
          labels: Object.keys(this.expensesByCategory),
          datasets: [{
            data: Object.values(this.expensesByCategory),
            backgroundColor: Object.keys(this.expensesByCategory).map(
              (category) => this.getRandomColor()
            ),
            borderColor: "#ddd",
            borderWidth: 1,
          }],
        },
      });
    },
  },
  async mounted() {
    await this.loadTransactions(); // Load transactions when the component mounts
    nextTick(() => {
      // Update the chart data after loading transactions
      this.incomeVsTransactionsOptions.series = [this.totalIncome, this.totalExpenses];
      this.expensesByCategoryOptions.series = Object.values(this.expensesByCategory);

      // Ensure charts are rendered after the DOM is fully updated
    });
  },
};
</script>

<style scoped>
/* Page Background */
.finance-page {
  padding: 2rem;
  background: linear-gradient(135deg, #f1e5d6, #e0d0c2); /* Light warm gradient for a cozy feel */
  font-family: 'Quicksand', sans-serif;
  color: #4a4a4a;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #6d5c3b; /* Earthy brown for a cozy tone */
  letter-spacing: 1px;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-top: 0.5rem;
}

/* No Data Message */
.no-data-message {
  font-size: 1.1rem;
  color: #7f8c8d;
  text-align: center;
  margin-top: 2rem;
}

/* Section Styling */
.overview-section,
.transactions-section,
.chart-section {
  background: #ffffff; /* Soft white background for sections */
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Soft shadows for a cozy look */
  margin-bottom: 2rem;
}

/* Section Titles */
h2 {
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #d4a373; /* Warm gold for section titles */
  font-weight: 600;
}

/* Overview Section Layout */
.overview {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.overview-item {
  text-align: center;
  background: #f7f0e3; /* Light cream background for items */
  padding: 1rem 1.5rem; /* Reduced padding */
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for each item */
  flex-basis: 30%; /* Make the cards take up 30% of the container width */
  min-width: 150px; /* Minimum width for the cards */
}

.overview-item h3 {
  font-size: 1.7rem;
  color: #d4a373; /* Warm gold for section titles */
  font-weight: 400;
}

.chart-item h3 {
  font-size: 1.7rem;
  color: #d4a373; /* Warm gold for section titles */
  font-weight: 400;
  text-align: center;
}

.amount {
  font-size: 1.2rem; /* Slightly smaller font size */
  font-weight: 700;
  color: #4b7d3b; /* Cozy green for amount */
  margin-top: 0.5rem;
}

/* Transactions Table */
.transactions-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
}

.transactions-table th,
.transactions-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  font-size: 1rem;
}

.transactions-table th {
  background-color: #f9f9f9;
  font-weight: 600;
  color: #4a4a4a;
}

.transactions-table tbody tr:nth-child(even) {
  background: #fafafa; /* Light alternating row colors */
}

.transactions-table tbody tr:hover {
  background: #f0f0f0; /* Subtle hover effect */
  cursor: pointer;
}

/* Charts Section */
.charts-container {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
}

.chart-item {
  width: 48%;
  background: #f7f0e3; /* Light cream background for chart items */
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.chart-section h2 {
  text-align: center;
  margin-bottom: 1rem;
}

/* Canvas Styling */
canvas {
  max-width: 100%;
  height: 250px;
  border-radius: 8px; /* Slight rounding for a softer look */
}
</style>


