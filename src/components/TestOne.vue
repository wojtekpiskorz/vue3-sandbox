<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

function randomNumber() {
  return Math.floor(Math.random() * 10) + 1
}

</script>

<template>
  <button @click="store.increment()">Add Number</button>
  <p>{{ store.count }}</p>


  <p>{{ store.numbers }}</p>
  <p>{{ store.sortedNumbers }}</p>
  <button @click="store.addNumber(randomNumber())">add number from 1 to 10</button>
</template>