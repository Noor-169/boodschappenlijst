<script setup>

import GroceriesTable from '../components/GroceriesTable.vue';
// import { ref } from 'vue'
import { getAllGroceries } from '../store';





</script>

<template>
    <main>
        <GroceriesTable v-model="getAllGroceries"/>
    </main>
</template>