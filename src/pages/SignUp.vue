<template>
  <div class="signup-page">
    <div class="container">
      <h1 class="title">Create Your Cozy Account</h1>
      <p class="subtitle">Take the first step toward financial clarity and success!</p>

      <form @submit.prevent="handleSignUp" class="form">
        <div class="form-group">
          <label for="nickname">Nickname</label>
          <input
            id="nickname"
            v-model="nickname"
            type="text"
            placeholder="Enter your nickname"
            class="input"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="input"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            class="input"
            required
          />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            class="input"
            required
          />
        </div>

        <button type="submit" class="btn">Sign Up</button>
      </form>

      <p class="note">
        Already have an account? 
        <router-link :to="{ name: 'Login' }" class="link">Log in here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../boot/firebase";

export default {
  data() {
    return {
      nickname: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async handleSignUp() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push("/"); // Redirect to the home page
      } catch (error) {
        console.error("Sign Up error:", error.message);
        alert("Failed to create an account. Please check your details.");
      }
    },
  },
};
</script>

<style scoped>
.signup-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #fefae0, #f4c1c1); /* Soft gradient background */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  width: 100%;
  max-width: 600px;  /* Increased max-width to make the form wider */
  padding: 2rem;     /* Adjusted padding for better balance */
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 1rem;
  transform: translateY(10px);
  animation: slideIn 0.6s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.title {
  font-size: 2.4rem;   /* Larger font size for better visibility */
  color: #6b705c;
  margin-bottom: 0.5rem;
  font-weight: bold;
  line-height: 1.2;  /* Reduced line height for tighter appearance */
  white-space: nowrap; /* Ensures the title stays on one line on desktop */
  overflow: hidden; /* Prevents overflow if the title is too long */
  text-overflow: ellipsis; /* Adds ellipsis if the title is too long */
}

.subtitle {
  color: #a5a58d;
  margin-bottom: 1.5rem; /* Reduced spacing */
  font-size: 1.1rem;  /* Adjusted font size for readability */
}

.form-group {
  margin-bottom: 1.25rem;  /* Reduced margin between fields */
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #6b705c;
  font-weight: 500;
}

.input {
  width: 100%;
  padding: 0.9rem; /* Adjusted padding */
  padding-left: 1.5rem;
  border: 1px solid #d4a373;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.input:focus {
  border-color: #6b705c;
}

.btn {
  width: 100%;
  padding: 1rem;
  background: #d4a373;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background: #bc9a66;
}

.note {
  margin-top: 1.5rem;
  color: #a5a58d;
}

.link {
  color: #6b705c;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.link:hover {
  text-decoration: underline;
  color: #d4a373;
}

/* Media Queries for smaller devices */
@media (max-width: 480px) {
  .container {
    margin: 1rem;
  }

  .title {
    font-size: 1.7rem;
    white-space: normal; /* Allow word wrapping on small screens */
  }

  .subtitle {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1.5rem;  /* Reduced padding on tablet screens */
  }

  .title {
    font-size: 2rem;
    white-space: normal; /* Allow word wrapping on tablet screens */
  }
}


</style>
