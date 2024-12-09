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
      <h2>Visualize Your Finances</h2>
      <div class="charts-container">
        <div class="chart-item">
          <h3>Income vs Transactions</h3>
          <div v-if="totalIncome || totalExpenses">
            <apexchart id="incomeVsTransactionsChart" type="donut" :options="incomeVsTransactionsOptions"
              :series="[totalIncome, totalExpenses]" height="350"></apexchart>
          </div>
          <p class="text-center" v-else>No data available for income vs expenses chart.</p>
        </div>
        <div class="chart-item">
          <h3>Expenses by Category</h3>
          <div v-if="expensesByCategoryValues.amounts.length">
            <apexchart id="expenseByCategoryChart" type="donut" :options="expensesByCategoryOptions"
              :series="expensesByCategoryValues.amounts" height="350"></apexchart>

          </div>
          <p class="text-center" v-else>No data available for expenses by category chart.</p>
        </div>
        <!-- <div class="chart-item">
          <h3>Expenses Over Time</h3>
          <div>
            <select v-model="selectedTimeInterval" @change="updateLineChartData">
              <option value="YoY">Year over Year</option>
              <option value="MoM">Month over Month</option>
              <option value="WoW">Week over Week</option>
            </select>
          </div>
          <div v-if="expensesOverTime.length">
            <apexchart id="expensesOverTimeChart" type="line" :options="expensesOverTimeOptions"
              :series="expensesOverTimeSeries" height="350">
            </apexchart>

          </div>
          <p class="text-center" v-else>No data available for expenses over time chart.</p>
        </div> -->
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
      showAll: false,
      incomeVsTransactionsOptions: null,  // Start with null, will be populated later
      expensesByCategoryOptions: null,    // Start with null, will be populated later
      selectedTimeInterval: "MoM",  // Default to Month over Month
      expensesOverTime: [],
      expensesOverTimeSeries: [],
    };
  },
  async created() {
    try {
      // Load the transactions when the component is created
      this.transactions = await transactionHelpers.loadTransactions();
      console.log('Loaded transactions:', this.transactions); // Check if data is loaded
      await this.updateChartData();  // Update the charts after loading data
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

      // Group transactions by category
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
    expensesByCategoryValues() {
      // Convert the object into arrays for categories and amounts
      const categories = Object.keys(this.expensesByCategory);
      const amounts = categories.map((category) => this.expensesByCategory[category]);
      return { categories, amounts };
    },
    groupTransactionsByDate() {
      let grouped = {
        dates: [],
        expenses: [],
      };

      // Group transactions by date
      this.transactions.forEach((transaction) => {
        if (transaction.type === "expense") {
          const date = new Date(transaction.date).toLocaleDateString(); // Format the date to a string (e.g., "MM/DD/YYYY")

          // If the date isn't in the grouped dates yet, add it
          if (!grouped.dates.includes(date)) {
            grouped.dates.push(date);
            grouped.expenses.push(transaction.amount);
          } else {
            const index = grouped.dates.indexOf(date);
            grouped.expenses[index] += transaction.amount; // Sum expenses for the same date
          }
        }
      });

      // Sort the dates and expenses in ascending order
      const sortedDatesAndExpenses = grouped.dates
        .map((date, index) => ({
          date,
          expense: grouped.expenses[index],
        }))
        .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date (oldest to newest)

      // After sorting, update the dates and expenses arrays
      grouped.dates = sortedDatesAndExpenses.map(item => item.date);
      grouped.expenses = sortedDatesAndExpenses.map(item => item.expense);

      return grouped;
    },
  },
  methods: {
    async loadTransactions() {
      try {
        this.transactions = await db.table('transactions').toArray();
      } catch (error) {
        console.error("Error loading transactions:", error);
      }
    },
    async aggregateIncomeVsExpenses() {
      const transactions = await transactionHelpers.loadTransactions(); // Fetch transactions from DB

      let income = 0;
      let expenses = 0;

      transactions.forEach((transaction) => {
        console.log(`Processing transaction:`, transaction); // Log each transaction for debugging

        if (transaction.type === "income") {
          console.log(`Income transaction found: ${transaction.amount}`); // Log the amount of income transactions
          income += transaction.amount;
        } else if (transaction.type === "expense") {
          console.log(`Expense transaction found: ${transaction.amount}`); // Log the amount of expense transactions
          expenses += transaction.amount;
        }
      });

      // Log the totals to check the calculations
      console.log(`Total income: ${income}`);
      console.log(`Total expenses: ${expenses}`);

      // Function to capitalize the first letter of a string
      function toProperCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

      return {
        labels: [toProperCase("income"), toProperCase("expense")], // Capitalize labels
        series: [income, expenses], // Ensure series is in correct order
      };
    },



    async aggregateExpensesByCategory() {
      const transactions = await transactionHelpers.loadTransactions(); // Fetch transactions from DB

      // Categories to track (initialize with 0)
      const predefinedCategories = {
        'salary': 0,
        'utilities': 0,
        'rent': 0,
        'groceries': 0,
        'other': 0, // Default category for unrecognized categories
      };

      // Normalize and accumulate category values
      transactions.forEach((transaction) => {
        if (transaction.type === "expense") {

          // Clean up and normalize the category (trim whitespace and convert to lowercase)
          const cleanedCategory = (transaction.category && transaction.category.trim().toLowerCase()) || 'other';


          // If category exists in predefinedCategories, increment; otherwise, use 'other'
          if (predefinedCategories[cleanedCategory] !== undefined) {
            predefinedCategories[cleanedCategory] += transaction.amount;
          } else {
            predefinedCategories['other'] += transaction.amount; // Add to 'other' for unrecognized categories
          }
        }
      });


      function toProperCase(str) {
        return str
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }

      // Return data for chart generation
      return {
        labels: Object.keys(predefinedCategories).map(category => toProperCase(category)),
        series: Object.values(predefinedCategories), // Total per category
      };
    },


    async updateChartData() {
      const incomeVsExpensesData = await this.aggregateIncomeVsExpenses();
      let expensesByCategoryData = await this.aggregateExpensesByCategory();

      // Filter out "Salary" from the categories
      const filteredCategories = expensesByCategoryData.labels.filter(category => category !== "Salary");
      const filteredSeries = expensesByCategoryData.series.filter((_, index) => expensesByCategoryData.labels[index] !== "Salary");

      // Updated expensesByCategoryData without "Salary"
      expensesByCategoryData = {
        labels: filteredCategories,
        series: filteredSeries,
      };

      // Chart options for income vs expenses
      this.incomeVsTransactionsOptions = {
        chart: {
          type: "donut",
          toolbar: {
            show: false, // Hide the toolbar if not needed
          },
        },
        title: {
          text: "Income vs Expenses",
          align: "center",
          style: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
          },
        },
        labels: incomeVsExpensesData.labels, // Income, Expenses
        colors: ["#4caf50", "#f44336"], // Income (green) and Expenses (red)
        legend: {
          position: "top",
          fontSize: "14px",
          fontWeight: 400,
          labels: {
            useSeriesColors: true,
          },
        },
        series: incomeVsExpensesData.series, // Actual transaction values
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            // Get the actual transaction value based on the label
            const category = opts.w.globals.labels[opts.seriesIndex];
            const actualAmount = incomeVsExpensesData.series[opts.seriesIndex] || 0; // Fallback to 0 if undefined
            return `${category}: $${actualAmount.toFixed(2)}`; // Show actual amount with two decimal points
          },
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            colors: ['#fff'], // White color for the labels
          },
        },
        stroke: {
          show: true,
          width: 2, // Add border around slices
          colors: ['#fff'], // White stroke color
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%",
              },
              legend: {
                position: "bottom", // Move legend to bottom on small screens
              },
            },
          },
        ],
      };

      // Chart options for expenses by category (now excluding "Salary")
      this.expensesByCategoryOptions = {
        chart: {
          type: "donut",
          toolbar: {
            show: false, // Hide the toolbar if not needed
          },
        },
        title: {
          text: "Expenses by Category",
          align: "center",
          style: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
          },
        },
        labels: expensesByCategoryData.labels, // Categories like Rent, Utilities, etc. (no Salary)
        colors: ["#ff9800", "#3f51b5", "#9c27b0", "#607d8b", "#8bc34a"], // Example category colors
        legend: {
          position: "top",
          fontSize: "14px",
          fontWeight: 400,
          labels: {
            useSeriesColors: true,
          },
        },
        series: expensesByCategoryData.series, // Actual transaction values for each category (no Salary)
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            // Get the actual transaction value based on the category
            const category = opts.w.globals.labels[opts.seriesIndex];
            const actualAmount = expensesByCategoryData.series[opts.seriesIndex] || 0; // Fallback to 0 if undefined
            return `${category}: $${actualAmount.toFixed(2)}`; // Show actual amount with two decimal points
          },
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            colors: ['#fff'], // White color for the labels
          },
        },
        stroke: {
          show: true,
          width: 2, // Add border around slices
          colors: ['#fff'], // White stroke color
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%",
              },
              legend: {
                position: "bottom", // Move legend to bottom on small screens
              },
            },
          },
        ],
      };
    },

    async updateLineChartData() {
      let groupedData = this.groupTransactionsByDate;
      let timeInterval = this.selectedTimeInterval; // YoY, MoM, WoW

      const groupByTimeInterval = (data, interval) => {
        const grouped = { dates: [], expenses: [] };

        switch (interval) {
          case 'YoY': // Year over Year
            data.dates.forEach((date, index) => {
              const dateObj = new Date(date);
              const groupKey = dateObj.getFullYear();
              if (!grouped.dates.includes(groupKey)) {
                grouped.dates.push(groupKey);
                grouped.expenses.push(data.expenses[index]);
              } else {
                const groupIndex = grouped.dates.indexOf(groupKey);
                grouped.expenses[groupIndex] += data.expenses[index];
              }
            });
            break;

          case 'MoM': // Month over Month
            const months = [];
            const expenses = [];
            data.dates.forEach((date, index) => {
              const dateObj = new Date(date);
              const monthKey = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}`;
              if (!months.includes(monthKey)) {
                months.push(monthKey);
                expenses.push(0);
              }
              const monthIndex = months.indexOf(monthKey);
              expenses[monthIndex] += data.expenses[index];
            });

            const allMonths = this.getAllMonthsInRange(data.dates);
            allMonths.forEach((month) => {
              if (!months.includes(month)) {
                months.push(month);
                expenses.push(0);
              }
            });

            grouped.dates = months;
            grouped.expenses = expenses;
            break;

          case 'WoW': // Week over Week
            const allDays = [];
            const dailyExpenses = [];
            data.dates.forEach((date, index) => {
              const dateObj = new Date(date);
              const weekStart = new Date(dateObj);
              weekStart.setDate(dateObj.getDate() - dateObj.getDay());
              const dayKey = weekStart.toLocaleDateString();

              if (!allDays.includes(dayKey)) {
                allDays.push(dayKey);
                dailyExpenses.push(0);
              }
              const dayIndex = allDays.indexOf(dayKey);
              dailyExpenses[dayIndex] += data.expenses[index];
            });

            const allDaysInRange = this.getAllDaysInWeekRange();
            allDaysInRange.forEach((day) => {
              if (!allDays.includes(day)) {
                allDays.push(day);
                dailyExpenses.push(0);
              }
            });

            grouped.dates = allDays;
            grouped.expenses = dailyExpenses;
            break;

          default:
            data.dates.forEach((date, index) => {
              grouped.dates.push(date);
              grouped.expenses.push(data.expenses[index]);
            });
            break;
        }

        return grouped;
      };

      this.getAllMonthsInRange = (dates) => {
        const monthsSet = new Set();
        dates.forEach((date) => {
          const dateObj = new Date(date);
          monthsSet.add(`${dateObj.getFullYear()}-${dateObj.getMonth() + 1}`);
        });
        return [...monthsSet];
      };

      this.getAllDaysInWeekRange = () => {
        const currentDate = new Date();
        const allDays = [];
        for (let i = 0; i < 7; i++) {
          const day = new Date(currentDate);
          day.setDate(currentDate.getDate() - i);
          allDays.push(day.toLocaleDateString());
        }
        return allDays;
      };

      groupedData = groupByTimeInterval(groupedData, timeInterval);
      this.expensesOverTime = groupedData.dates;
      this.expensesOverTimeSeries = groupedData.expenses;
    },
  },
};
</script>








<style scoped>
/* Page Background */
.finance-page {
  padding: 1rem;
  background: linear-gradient(135deg, #f1e5d6, #e0d0c2);
  font-family: 'Quicksand', sans-serif;
  color: #4a4a4a;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: #6d5c3b;
  letter-spacing: 0.8px;
}

.subtitle {
  font-size: 1rem;
  color: #7f8c8d;
  margin-top: 0.3rem;
}

/* No Data Message */
.no-data-message {
  font-size: 1rem;
  color: #7f8c8d;
  text-align: center;
  margin-top: 1.5rem;
}

/* Section Styling */
.overview-section,
.transactions-section,
.chart-section {
  background: #ffffff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

/* Section Titles */
h2 {
  margin-bottom: 1rem;
  font-size: 1.4rem;
  color: #d4a373;
  font-weight: 600;
  text-align: center;
}

/* Overview Section Layout */
.overview {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.overview-item {
  text-align: center;
  background: #f7f0e3;
  padding: 0.8rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-basis: calc(33.33% - 0.5rem);
  min-width: 120px;
}

.overview-item h3 {
  font-size: 1.2rem;
  color: #d4a373;
  font-weight: 500;
}

.amount {
  font-size: 1rem;
  font-weight: 700;
  color: #4b7d3b;
  margin-top: 0.3rem;
}

/* Transactions Table */
.transactions-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  font-size: 0.9rem;
  overflow-x: auto;
}

.transactions-table th,
.transactions-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.transactions-table th {
  background-color: #f9f9f9;
  font-weight: 600;
  color: #4a4a4a;
}

.transactions-table tbody tr:nth-child(even) {
  background: #fafafa;
}

.transactions-table tbody tr:hover {
  background: #f5f5f5;
  cursor: pointer;
}

/* Charts Section */
.charts-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  /* Ensures the container spans the full width */
}

.chart-item {
  background: #f7f0e3;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  /* Makes sure the chart takes full width */
}

.chart-section h2 {
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 0.8rem;
}

/* Canvas Styling */
canvas {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
}

/* Media Queries for Larger Screens */
@media (min-width: 768px) {

  /* Overview Items in One Row on Tablet and Larger */
  .overview-item {
    flex-basis: calc(33.33% - 1rem);
  }

  /* Display charts in row layout on Desktop */
  .charts-container {
    flex-direction: row;
    justify-content: space-between;
    /* Spread out charts across full width */
  }

  /* Chart Section Titles */
  h2 {
    font-size: 1.6rem;
  }

  /* Data Labels Display for Desktop */
  .desktop-only {
    display: block;
  }

  .mobile-only {
    display: none;
  }

  /* Make chart items take up equal width on large screens */
  .chart-item {
    flex: 1;
    max-width: 48%;
    /* Keeps two charts side by side with space in between */
  }
}

/* Media Queries for Smaller Screens */
@media (max-width: 767px) {

  /* Overview Items in Two Rows on Mobile */
  .overview-item {
    flex-basis: calc(50% - 0.5rem);
  }

  .overview-item:nth-last-child(1) {
    flex-basis: 100%;
  }

  /* Chart Data Labels for Mobile */
  .mobile-only {
    display: block;
  }

  .desktop-only {
    display: none;
  }

  /* Title and Section Sizes Adjustments for Mobile */
  .title {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 0.9rem;
  }
}
</style>
