import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "",
    component: () => import("../components/DefaultLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "/test",
        name: "test",
        component: () => import("../views/TestView.vue"),
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: () => import("../views/MealsByName.vue"),
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: () => import("../views/MealsByLetter.vue"),
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: () => import("../views/MealsByIngredient.vue"),
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: () => import("../views/MealDetails.vue"),
      }
    ],
  },
  {
    path: "/guest",
    name: "guest",
    component: () => import("../components/GuestLayout.vue"),
    children: [

    ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
