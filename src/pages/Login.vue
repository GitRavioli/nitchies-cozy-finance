<template>
  <div class="login-page">
    <div class="container">
      <h1 class="title">Welcome Back!</h1>
      <p class="subtitle">Let’s revisit your cozy journey.</p>

      <form @submit.prevent="handleLogin" class="form">
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

        <button type="submit" class="btn">Log In</button>
      </form>

      <p class="note">
        Don’t have an account? 
        <router-link :to="{ name: 'SignUp' }" class="link">Sign up here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../boot/firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push("/"); // Redirect to the home page
      } catch (error) {
        console.error("Login error:", error.message);
        alert("Failed to log in. Please check your credentials.");
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #fefae0, #f4c1c1); /* Soft gradient background */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  width: 100%;
  max-width: 500px;
  padding: 3rem;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 1rem;
  transform: translateY(10px);
  animation: slideIn 0.6s ease-out; /* Slide-in animation */
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
  font-size: 2.4rem;
  color: #6b705c;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.subtitle {
  color: #a5a58d;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.form-group {
  margin-bottom: 1.5rem;
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
  padding: 1rem;
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
  }

  .subtitle {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 2rem;
  }
}
</style>
