// @ts-nocheck
import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const FoodList = () => import("../views/FoodList.vue");
const FoodByName = () => import("../views/FoodByName.vue");
const FoodByLetter = () => import("../views/FoodByLetter.vue");
const FoodByIngredient = () => import("../views/FoodByIngredient.vue");
const MealDetails = () => import("../views/MealDetails.vue");
const CategoryFood = () => import("../views/CategoryFood.vue");




const router = createRouter({
  history: createWebHistory(),
  routes: [


    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/foodlist",
      name: "foodlist",
      component: FoodList,
    },

    {
      path: "/letter/:letter?",
      name: "byLetter",
      component: FoodByLetter,
    },
    {
      path: "/by-name/:name?",
      name: "by-name",
      component: FoodByName,
    },
    {
      path: "/by-letter/:letter?",
      name: "by-letter",
      component: FoodByLetter,
    },
    {
      path: "/by-ingredient/:ingredient?",
      name: "by-ingredient",
      component: FoodByIngredient,
    },
    {
      path: "/mealdetails/:id?",
      name: "mealdetails",
      component: MealDetails,
    },
    {
      path: "/categoryfood/:name?",
      name: "categoryfood",
      component: CategoryFood,
    },
  ],
});

// router.beforeEach((to, from) => {
// if(to.meta.requiresAuth && !localStorage.getItem('token')) {
//    return {name: 'Login'}
// }
// if (to.meta.requiresAuth==false && localStorage.token && localStorage.userType == 1) {
//    return {name:'admindashboard'}
// }
// if (to.meta.requiresAuth==false && localStorage.token && localStorage.userType == 0) {
//    return {name:'studentdashboard'}
// }
// })

export default router;
