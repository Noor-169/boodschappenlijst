<script setup>

import { ref } from 'vue';
import GroceryForm from '../components/GroceryForm.vue'
import { addGrocery, getAllGroceries } from '../store';

//leeg groceryitem
const grocery = ref({name: '', price: 0, amount: 0})

//functie om nieuwe grocery toe te voegen aan store (=action)
// const addGrocery = (grocery) => groceries.value.push(grocery);

// const groceries = getAllGroceries

</script>

<template>

<pre>{{ grocery }}</pre>

    <GroceryForm :grocery="grocery" @submit="addGrocery" />
</template>