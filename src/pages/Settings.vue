<template>
    <q-page padding>
        <!-- Header -->
        <div class="row justify-between items-center q-mb-lg">
            <q-btn flat round icon="arrow_back" @click="goBack" />
            <q-toolbar-title>Settings</q-toolbar-title>
        </div>

        <!-- Clear Database -->
        <q-card class="q-mb-md">
            <q-card-section>
                <q-item>
                    <q-item-section>
                        <q-item-label>Clear Database</q-item-label>
                        <q-item-label caption>Clear all data stored in your app</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-btn flat label="Clear" color="negative" @click="clearDatabase" />
                    </q-item-section>
                </q-item>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
import { transactionHelpers } from '../utils/db'; // Import your helper functions

export default {
    data() {
        return {};
    },
    methods: {
        
        goBack() {
            this.$router.go(-1);  // Navigates back to the previous page
        },
        
        
        async clearDatabase() {
            try {
                // Clear transactions using the helper function
                await transactionHelpers.clearTransactions();

                // If you have other tables to clear, you can call their respective functions here
                // Example for recurring table:
                // await transactionHelpers.clearRecurring();

                // Notify the user using Quasar Notify
                this.$q.notify({
                    color: 'green',
                    message: 'Database cleared successfully.',
                    icon: 'check'
                });
            } catch (error) {
                // Handle any error during the clearing process
                this.$q.notify({
                    color: 'red',
                    message: 'Error clearing database.',
                    icon: 'error'
                });
                console.error('Error clearing database:', error);
            }
        }
    }
};
</script>

<style scoped>
.q-page {
    background-color: #f0f8ff;
    /* Cozy background color */
    color: #000;
    /* Light text color */
}

.q-toolbar-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #3e2723;
    /* Cozy brown text */
}
</style>
