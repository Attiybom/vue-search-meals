import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: '/by-name/:name?',
    name: 'byName',
    component: () => import("../views/MealsByName.vue"),
  },
  {
    path: '/by-letter/:letter?',
    name: 'byLetter',
    component: () => import("../views/MealsByLetter.vue"),
  },
  {
    path: '/by-ingredient/:ingredient?',
    name: 'byIngredient',
    component: () => import("../views/MealsByIngredient.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
