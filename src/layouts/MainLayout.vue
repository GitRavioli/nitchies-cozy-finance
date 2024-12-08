<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="absolute-center">Personal Finance Tracker</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <NavLink title="Home" icon="home" link="/" />
        <NavLink title="Submit Transaction" icon="attach_money" link="/submit-transaction" />
        <NavLink title="Finance" icon="payments" link="/finance" />
        <NavLink title="Settings" icon="settings" link="/settings" />
        
        <!-- Conditionally render Login/Logout as NavLinks -->
        <NavLink
          v-if="!isLoggedIn"
          flat
          title="Login/Sign Up"
          icon="login"
          @click="login"
        />
        <NavLink
          v-else
          flat
          title="Logout"
          icon="logout"
          @click="logout"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import NavLink from 'components/NavLink.vue';
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'MainLayout'
})

const leftDrawerOpen = ref(false);
const isLoggedIn = ref(false);  // Tracks if the user is logged in
const router = useRouter();

// Function to toggle the drawer state
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// Firebase auth listener to track login state
onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;  // Set isLoggedIn to true if user is logged in
  });
});

// Login function (redirect to login page)
function login() {
  router.push('/login');
}

// Logout function
function logout() {
  const auth = getAuth();
  signOut(auth).then(() => {
    isLoggedIn.value = false;
    router.push('/');  // Redirect to home page after logout
  }).catch((error) => {
    console.error("Error logging out:", error);
  });
}
</script>

<style>
.toolbar {
  background-color: #4a7262;
}
</style>
