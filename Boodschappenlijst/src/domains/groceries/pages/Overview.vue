<script setup>

import GroceriesTable from '../../../components/GroceriesTable.vue';
import { ref } from 'vue'


const groceries = ref([
    {label: 'Brood', price: 1.00, quantity: 0 },
    {label: 'Broccoli', price: 0.99, quantity: 0 },
    {label: 'Krentenbollen', price: 1.20, quantity: 0 },
    {label: 'Noten', price: 2.99, quantity: 0 },
])


</script>

<template>
    <main>
        <GroceriesTable v-model="groceries"/>
    </main>
</template>