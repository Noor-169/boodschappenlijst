import { ref, computed } from 'vue'

//state
const groceries = ref([
    {label: 'Brood', price: 1.00, quantity: 0 },
    {label: 'Broccoli', price: 0.99, quantity: 0 },
    {label: 'Krentenbollen', price: 1.20, quantity: 0 },
    {label: 'Noten', price: 2.99, quantity: 0 },
])

//getters
export const getAllGroceries = computed(() => groceries.value);

//actions
export const addGrocery = (grocery) => groceries.value.push(grocery)
