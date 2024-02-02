import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const numbers = ref([1, 2, 4, 3, 5]);

  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const sortedNumbers = computed(() => numbers.value.toSorted((a: number, b: number) => a - b));

  const addNumber = (number: number) => {

    numbers.value.push(number);
  }


  return { count, doubleCount, increment, numbers, sortedNumbers, addNumber }
})
