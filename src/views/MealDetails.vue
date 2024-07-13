<script setup>

import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router";

import axiosClient from "../axiosClient";

const route = useRoute();

const meals = ref({})


onMounted(() => {
  const mealId = route.params.id;

  axiosClient.get(`lookup.php?i=${mealId}`).then(({ data }) => {
    // debugger;
    meals.value = data.meals;
  })
})

</script>

<template>
  <div class="MealDetails">
    <pre>{{ meals }}</pre>
  </div>
</template>

<style scoped></style>
