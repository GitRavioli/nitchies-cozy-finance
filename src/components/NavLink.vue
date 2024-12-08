<template>
  <q-item clickable v-ripple @click="navigateTo(link)">
    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from 'vue-router'


const router = useRouter()

const props = defineProps({
  title: String,
  icon: String,
  link: String
})

const navigateTo = (link) => {
  if (router && link) {
    // Safely navigate to the route
    router.push(link).catch((err) => {
      console.error('Navigation error:', err);
    });
  } else {
    console.error('Invalid link or router not defined:', link, router);
  }
}
</script>
