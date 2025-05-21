<script setup>


// import GroceriesTable from './components/GroceriesTable.vue'
// import { ref } from 'vue'
// import { createRouter } from 'vue-router'


// const groceries = ref([
//     {label: 'Brood', price: 1.00, quantity: 0 },
//     {label: 'Broccoli', price: 0.99, quantity: 0 },
//     {label: 'Krentenbollen', price: 1.20, quantity: 0 },
//     {label: 'Noten', price: 2.99, quantity: 0 },
// ])



</script>

<template>

<nav>
    <RouterLink to="/overview">Go to Overview</RouterLink>
    <br>
    <RouterLink to="/create">Create</RouterLink>
</nav>
<main>
    <RouterView />
    <!-- <GroceriesTable v-model="groceries"/> -->
</main>


</template>

<style scoped>

</style>
