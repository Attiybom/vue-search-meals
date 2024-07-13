<script setup>
import { ref, computed, onMounted } from 'vue';
import store from "../store/index";
import { useRoute } from "vue-router";


const route = useRoute();

const keyword = ref('')

const meals = computed(() => store.state.searchedMeals)
function searchMeals() {
  // axiosClient.get(`search.php?s=${keyword.value}`)
  console.log('keyword', keyword.value)
  store.dispatch('searchMeals', keyword.value)
}


onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals()
  }
})

</script>

<template>
  <div class="search-by-name p-8 pd-0">
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals"
      @change="searchMeals" v-model="keyword" />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover" />

        </router-link>
        <div class="p-3">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
          <p class="mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequatur odio
          </p>
          <div class="flex items-center justify-between">
            <a :href="meal.strYoutube" target="_blank"
              class="px-3 py-2 rounded border-2 border-red-600 bg-red-500 hover:bg-red-600 text-white transition-colors ">youtube</a>
            <!-- <router-link to="/"
              class="px-3 py-2 rounded border-2 border-purple-600 bg-purple-500 hover:bg-purple-600 text-white transition-colors ">
              View
            </router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
