<script setup>

import { computed } from 'vue'
const groceries = defineModel()

// deze oplossing had ook gekund!
// const totalCost = computed(() => {
//     let  totalCost = 0;
//     for (let i = 0; i < groceries.value.length; i++) {
//         totalCost += (groceries.value[i].price * groceries.value[i].quantity);
//     }
//     return totalCost
// })

const totalCost = computed(() => groceries.value.reduce((total, item) => total += item.price * item.quantity, 0))


// hieronder allemaal ingewikkelder oplossingen voor subTotals berekenen (toen de objecten in groceries nog een property subtotal hadden)
// let subTotals = computed(() => {
//     subTotals = [];
//     for (let i = 0; i < groceries.length; i++) {
//         subTotals.push(groceries[i].price.value * groceries[i].quantity.value)
//     }
//     return subTotals
// })

// let subTotals = computed(() => {
//     // let subtotal
//     for (let i = 0; i < groceries.length; i++) {
//         for (let j = 0; j < groceries.length; j++) {
//             groceries[i].subtotal.value = groceries[i].price.value * groceries[j].quantity.value
//         }
//     // groceries[i].subtotal.value = (groceries[i].price.value * groceries[i].quantity.value)
//     }
// })

// let subs = computed(() => {
//     for (let i = 0; i < groceries.length; i++) {
//     groceries[i].subtotal.value = (groceries[i].price.value * groceries[i].quantity.value)
//     }
//     return subs
// })

</script>

<template>
<body>
    <table>
    <tbody>
        <tr> 
          <td><strong>Product</strong></td>
          <td><strong>Prijs</strong></td>
          <td><strong>Aantal</strong></td>
          <td><strong>Subtotaal</strong></td>
        </tr>
          <tr v-for="item in groceries"> 
            <td>{{item.label}}</td>
            <td style="text-align:right;">{{ item.price }}</td>
            <td><input type="number" v-model="item.quantity" placeholder="0"></td>
            <td style="text-align:right;">{{ item.price * item.quantity }}</td>
          </tr>
          <tr> 
            <td colspan="3"><strong>Totaal</strong></td>
            <td style="text-align:right;"> {{ totalCost }}</td>
          </tr>

        </tbody>
      </table>
    
</body>

</template>

<style scoped>

</style>
