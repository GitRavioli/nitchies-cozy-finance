<template>
  <div class="homepage">
    <header class="header q-pa-md">
      <!-- Conditional Header Based on Auth Status -->
      <h1 class="title text-center text-h4 text-md-h3 text-lg-h2 text-xl-h1">
        {{ user ? `Welcome back, ${user.nickname || 'Guest'}!` : 'Welcome to the Cozy Finance Tracker' }}
      </h1>
      <p class="subtitle text-center text-body2 text-md-body1 text-lg-body1">
        {{ user ? 'Keep track of your finances with ease.' : 'Login or Sign Up to take control of your finances, one cozy step at a time.' }}
      </p>
    </header>

    <section class="summary-section">
      <h2 class="section-title">Financial Summary</h2>
      <div class="summary-cards">
        <div class="card">
          <h3 class="card-title">Total Income</h3>
          <p class="card-value">${{ totalIncome }}</p>
        </div>
        <div class="card">
          <h3 class="card-title">Total Expenses</h3>
          <p class="card-value">${{ totalExpenses }}</p>
        </div>
        <div class="card">
          <h3 class="card-title">Recurring Monthly Income</h3>
          <p class="card-value">${{ recurringIncome }}</p>
        </div>
      </div>
    </section>

    <section class="actions-section">
      <q-btn :to="{ name: 'Finance' }" label="Go to Finance Tracker" class="action-btn" />
    </section>
  </div>
</template>

<script>
import { auth, db } from "../boot/firebase"; // Assuming you're importing Firebase properly
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore methods

export default {
  data() {
    return {
      totalIncome: 5000,
      totalExpenses: 1500,
      recurringIncome: 2000,
      user: null, // To store the logged-in user info
    };
  },
  created() {
    // Listen for authentication state changes
    onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        // Get the user document from Firestore based on the authenticated user's UID
        const userDocRef = doc(db, "users", authUser.uid); // Assuming "users" is your collection
        const userDocSnap = await getDoc(userDocRef);
        
        if (userDocSnap.exists()) {
          // Set the nickname from Firestore
          this.user = { ...authUser, nickname: userDocSnap.data().nickname };
        } else {
          console.log("No such document!");
        }
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style scoped>
.homepage {
  padding: 2rem;
  background: linear-gradient(135deg, #f1e5d6, #e0d0c2);
  font-family: "Poppins", sans-serif;
  color: #5f4b3d;
  min-height: 100vh;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2.8rem;
  font-weight: 600;
  color: #4a7262;
  text-transform: capitalize;
}

.subtitle {
  font-size: 1.25rem;
  color: #d4a373;
  margin-top: 0.5rem;
}

.summary-section {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 500;
  color: #4a7262;
  margin-bottom: 1.5rem;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  background: #f1c6a3;
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.card p {
  color: #4f4a4a;
}

.card-title {
  font-size: 1.1rem;
  color: #8a7f6b;
  margin-bottom: 0.75rem;
}

.card-value {
  font-size: 1.6rem;
  font-weight: 600;
  color: #5f4b3d;
}

.actions-section {
  display: flex;
  justify-content: center;
}

.action-btn {
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  background-color: #d4a373;
  color: white;
  font-size: 1.1rem;
}

.action-btn:hover {
  background-color: #5c8071;
  transition: background-color 0.3s ease;
}

.q-btn {
  background-color: #4a7262; /* Muted teal button */
  color: white;
  border-radius: 8px;
}

.q-btn:hover {
  background-color: #5c8071; /* Darker teal for hover effect */
}

</style>
