<template>
    <div class="finance-page">
        <header class="header">
            <h1 class="title">Manage Your Finances</h1>
            <p class="subtitle">Easily record and manage your income and expenses with ease and elegance.</p>
        </header>
        <div class="transaction-forms">
            <section class="form-section">
                <h2>Add Income or Expense</h2>
                <form @submit.prevent="handleSubmit" class="finance-form">
                    <div class="form-group">
                        <label for="type">Type</label>
                        <select id="type" v-model="transactionType" class="form-control" required>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="amount">Amount</label>
                        <input id="amount" type="number" v-model="amount" placeholder="Enter amount"
                            class="form-control" step="0.01" required />
                    </div>

                    <div class="form-group">
                        <label for="category">Category</label>
                        <select id="category" v-model="category" class="form-control" required>
                            <option value="Rent">Rent</option>
                            <option value="Salary">Salary</option>
                            <option value="Groceries">Groceries</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="date">Date</label>
                        <input id="date" type="date" v-model="date" class="form-control" required />
                    </div>

                    <button type="submit" class="btn-submit">Add Transaction</button>
                </form>
            </section>

            <section class="recurring-section">
                <h2>Recurring Income</h2>
                <form @submit.prevent="handleRecurring" class="recurring-form">
                    <div class="form-group">
                        <label for="recurring-name">Name</label>
                        <input id="recurring-name" type="text" v-model="recurringName" placeholder="e.g., Salary"
                            class="form-control" required />
                    </div>

                    <div class="form-group">
                        <label for="recurring-amount">Amount</label>
                        <input id="recurring-amount" type="number" v-model="recurringAmount" placeholder="Enter amount"
                            class="form-control" required />
                    </div>

                    <div class="form-group">
                        <label for="recurrence-type">Recurrence Type</label>
                        <select id="recurrence-type" v-model="recurrenceType" class="form-control" required>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>

                    <div class="form-group" v-if="recurrenceType === 'weekly'">
                        <label for="day-of-week">Day of the Week</label>
                        <select id="day-of-week" v-model="recurrenceDay" class="form-control" required>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                    </div>

                    <div class="form-group" v-if="recurrenceType === 'monthly'">
                        <label for="recurrence-date">Recurrence Date</label>
                        <input id="recurrence-date" type="date" v-model="recurrenceDate" class="form-control"
                            required />
                    </div>

                    <button type="submit" class="btn-submit">Add Recurring Income</button>
                </form>
            </section>
        </div>
    </div>
</template>

<script>
import db from '../utils/db'; // Import Dexie DB setup

export default {
    data() {
        return {
            transactionType: "",
            amount: "",
            category: "",
            date: "",
            recurringName: "",
            recurringAmount: "",
            recurrenceType: "",
            recurrenceDate: "",
            recurrenceDay: "",
            transactionReceipt: null, // Track the receipt popup visibility
        };
    },
    methods: {
        async handleSubmit() {
            console.log('Transaction Data:', {
                type: this.transactionType,
                amount: this.amount,
                category: this.category,
                date: this.date,
            });

            try {
                // Log data to check before submitting
                console.log('Submitting transaction:', {
                    type: this.transactionType,
                    amount: parseFloat(this.amount),
                    category: this.category,
                    date: this.date,
                });

                await db.transactions.add({
                    type: this.transactionType,
                    amount: parseFloat(this.amount),
                    category: this.category,
                    date: this.date,
                });
                this.clearForm();

                // Show the transaction receipt
                this.transactionReceipt = {
                    type: this.transactionType,
                    amount: parseFloat(this.amount),
                    category: this.category,
                    date: this.date,
                };
            } catch (error) {
                alert("Error adding transaction: " + error);
            }
        },
        async handleRecurring() {
            console.log('Recurring Income Data:', {
                name: this.recurringName,
                amount: this.recurringAmount,
                recurrenceType: this.recurrenceType,
                recurrenceDateOrDay: this.recurrenceType === 'weekly' ? this.recurrenceDay : this.recurrenceDate,
            });

            try {
                let recurrenceDetails = this.recurrenceType === 'weekly' ? this.recurrenceDay : this.recurrenceDate;
                await db.recurring.add({
                    name: this.recurringName,
                    amount: parseFloat(this.recurringAmount),
                    recurrenceType: this.recurrenceType,
                    recurrenceDateOrDay: recurrenceDetails,
                });
                this.clearRecurringForm();
                alert(`Recurring income added: ${this.recurringName} - $${this.recurringAmount}, ${this.recurrenceType} on ${recurrenceDetails}`);
            } catch (error) {
                alert("Error adding recurring income: " + error);
            }
        },
        clearForm() {
            this.amount = "";
            this.category = "";
            this.date = "";
        },
        clearRecurringForm() {
            this.recurringName = "";
            this.recurringAmount = "";
            this.recurrenceDate = "";
            this.recurrenceDay = "";
        }
    },
};
</script>

<style scoped>

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 2rem;
    width: 80%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 9999; /* Ensures it's above other content */
    display: none; /* Hidden by default */
    opacity: 0;
    transition: opacity 0.3s ease;
}

.modal.active {
    display: block;
    opacity: 1;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); /* Semi-transparent background */
    z-index: 9998; /* Just below the modal */
    display: none; /* Hidden by default */
}

.modal-overlay.active {
    display: block;
}

.btn-close {
  background-color: #4a7262;
  color: white;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease-in-out;
}

.btn-close:hover {
  background-color: #5c8071;
}

.finance-page {
    padding: 1.5rem;
    background: linear-gradient(135deg, #f1e5d6, #e0d0c2);
    font-family: 'Roboto', sans-serif;
    color: #3d3d3d;
    min-height: 100vh;
}

.header {
    text-align: center;
    margin-bottom: 2rem;
}

.title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #4a7262;
}

.subtitle {
    font-size: 1.1rem;
    color: #7f8c8d;
}

.transaction-forms {
    display: grid;
    grid-template-columns: 1fr;
    /* Default 1 column layout for smaller screens */
    gap: 1rem;
    /* Space between the sections */
    justify-items: center;
    /* Centers content */
}

.form-section,
.recurring-section {
    background: #ffffff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    /* Ensures forms use full width of their container */
    max-width: 40vw;
    /* Max width for each form to ensure they don't become too wide */
    margin: 0 auto;
    transition: transform 0.3s ease-in-out;
    min-height: 500px;
}

.form-section:hover,
.recurring-section:hover {
    transform: translateY(-10px);
}

h2 {
    font-size: 1.8rem;
    color: #16a085;
    /* Soft teal for a cozy vibe */
    margin-bottom: 1.5rem;
    text-align: center;
    /* Centers the headings */
}

.finance-form,
.recurring-form {
    display: grid;
    gap: 1.2rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #2c3e50;
}

.form-control {
    padding: 0.9rem;
    font-size: 1rem;
    border-radius: 8px;
    border: 2px solid #ecf0f1;
    outline: none;
    transition: border-color 0.3s ease-in-out;
}

.form-control:focus {
    border-color: #5c8071;
}

.btn-submit {
    background-color: #4a7262;
    color: white;
    padding: 0.8rem 1.6rem;
    border-radius: 8px;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    width: 100%;
    /* Makes the button the same width as the form */
}

.btn-submit:hover {
    background-color: #5c8071;
    /* Lighter green for hover */
}

/* Media query for tablet and desktop screens */
@media (min-width: 768px) {
    .transaction-forms {
        grid-template-columns: 1fr 1fr;
        /* 2 columns layout on desktop/tablet */
    }

    .form-section,
    .recurring-section {
        max-width: 75vw;
    }


}

/* Mobile-specific styles */
@media (max-width: 767px) {

    .form-section h2,
    .recurring-section h2 {
        text-align: center;
        /* Centers the headings on mobile */
    }

    .form-section h2,
    .finance-form h2 {
        line-height: 1.2;
    }

    .header h1 {
        line-height: 1.2;
    }

    .form-section,
    .recurring-section {
        max-width: 75vw;
    }
}
</style>