<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

import axiosClient from '../axiosClient';


const store = useStore();


const meals = computed(() => store.state.meals);

const lettersArray = `A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`.split(' ')

const ingredients = ref([])

onMounted(async () => {
  const res = await axiosClient.get('/list.php?i=list')
  console.log('res', res.data.meals)
  ingredients.value = res.data.meals
})

</script>

<template>
  <div class="home flex flex-col items-center p-8 ">

    <input type="text" class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
    />

    <div class="flex gap-2 justify-center mt-2">
      <RouterLink :to="{ name: 'byLetter', params: {letter} }" v-for="letter of lettersArray" :key="letter">
        {{ letter }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
