<script setup>
 import { ref } from 'vue'
 import { addGrocery } from '../store'; 


//groceries beschikbaar maken uit de store:
// const groceries = defineModel()

// hier een prop
const props = defineProps({grocery:Object});

// const grocery = defineProps({grocery});

//dit is de kopie van grocery
const newGrocery = ref({...props});

// hier een emit
const emit = defineEmits(['submit'])

const submit = () => {
    emit('submit', newGrocery)
}

</script>

<template>
<!-- hier komt het formulier te staan -->
<form>
    <label>Wat: </label>
    <input type="text" id="" v-model="newGrocery.name" name="name" placeholder="Typ hier iets...">
    <br>
    <label>Aantal: </label>
    <input type="number" id="" v-model="newGrocery.amount" name="amount" placeholder="Voer getal in...">
    <br>
    <label>Prijs: </label>
    <input type="number" id="" v-model="newGrocery.price" name="price" placeholder="Voer getal in...">
    <br>
    <input type="submit" @click.prevent="submit">
</form>

<p>{{ props }}</p>
<p>{{ newGrocery }}</p>

</template>