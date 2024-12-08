<template>
  <div class="homepage">
    <header class="header q-pa-md">
      <!-- Conditional Header Based on Auth Status -->
      <h1 class="title text-center text-h4 text-md-h3 text-lg-h2 text-xl-h1">
        {{ user ? `Welcome back, ${user.nickname || 'Guest'}!` : 'Welcome to the Cozy Finance Tracker' }}
      </h1>
      <p class="card-description text-center text-body2 text-md-body1 text-lg-body1">
        Managing your finances doesn't have to be stressful. Here, you can track your spending and watch your financial progress in a peaceful and comforting way.
      </p>
    </header>

     <!-- How It Works Section -->
     <section class="how-it-works-section">
      <h2 class="section-title text-center">How This Cozy Space Works</h2>
      <div class="how-it-works-cards">
        <div class="card">
          <h3 class="card-title">Track Your Spending</h3>
          <p class="card-description">
            Easily keep track of your income and expenses without the stress. You'll see a clear picture of where your money is going.
          </p>
        </div>
        <div class="card">
          <h3 class="card-title">Visualize Your Goals</h3>
          <p class="card-description">
            Whether it's saving for something special or just staying on budget, you'll have a peaceful overview of your progress.
          </p>
        </div>
        <div class="card">
          <h3 class="card-title">Stay on Track</h3>
          <p class="card-description">
            Use simple, cozy tools to manage your finances at your own pace, with no pressure to act quickly—just gentle, consistent progress.
          </p>
        </div>
      </div>
    </section>

    <!-- Why Cozy Finance Section -->
    <section class="why-cozy-section">
      <h2 class="section-title">Why Cozy Finance?</h2>
      <p class="why-cozy-text">
        Because managing money shouldn’t be stressful! Think of it as your comfy spot to breathe and take charge of your financial well-being without feeling overwhelmed.
      </p>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <h2 class="cta-title">Ready to Start Your Cozy Journey?</h2>
      <p class="cta-text">
        Let’s make your financial journey feel like a warm cup of tea. Track, plan, and grow your finances in a space that’s all about comfort.
      </p>
      <q-btn label="Start Your Cozy Finance Journey" @click="startJourney" class="cta-btn" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null, // User data
    };
  },
  methods: {
    startJourney() {
      // Navigate to the financial dashboard or main feature
      this.$router.push({ name: 'Finance' });
    },
  },
};
</script>

<style scoped>
.homepage {
  padding: 2rem;
  background: #fdf6e3; /* Warm, light color */
  font-family: 'Quicksand', sans-serif;
  color: #4a4a4a;
  min-height: 100vh;
}

/* Title Style */
.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #6f6f6f;
}

.section-title, .card-title, .cta-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #6f6f6f;
  
}

.intro-text,
.card-description,
.why-cozy-text,
.cta-text {
  font-size: 1.3rem;
  color: #8b8b8b;
  margin-top: 1rem;
}

/* Welcome Section */
.welcome-section {
  text-align: center;
  margin-bottom: 3rem;
}

.intro-text {
  margin-top: 1rem;
}

/* How It Works Section */
.how-it-works-section {
  margin-bottom: 3rem;
}

.how-it-works-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-description {
  font-size: 1.1rem;
  color: #7a7a7a;
  margin-top: 1rem;
}

/* Why Cozy Finance Section */
.why-cozy-section {
  text-align: center;
  margin-bottom: 3rem;
}

.why-cozy-text {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Call to Action Section */
.cta-section {
  text-align: center;
  background: #f8e9d2; /* Soft yellow for warmth */
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cta-btn {
  background-color: #4a7262; /* Soft green for a cozy feel */
  color: white;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  margin-top: 1.5rem;
}

.cta-btn:hover {
  background-color: #5c8071;
}
</style>
