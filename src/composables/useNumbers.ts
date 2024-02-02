import { ref } from "vue";



export default function () {
  const numbers = ref([1, 2, 3, 4, 5]);

  const addNumber = (number: number) => {
    numbers.value.push(number);
  };

  return { numbers, addNumber }
}