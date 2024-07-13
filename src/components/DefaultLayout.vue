<script setup>
import Navbar from "./Navbar.vue";

</script>

<template>
  <div class="default=layout">
    <div class="bg-gray-100 h-full">
      <Navbar />
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
