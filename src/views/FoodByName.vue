<template>
    <div class="flex flex-col p-5">
        <div class="flex justify-center">
            <input type="text" class="bg-gray-500 p-1 w-3/4 border-double rounded text-2xl text-white" v-model="keyWord"
                @change="searchFood()" placeholder="Search Food">
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mx-3 my-2 p-5">
        <div v-for="items in food.meals" :key="items.idMeal" class="card bg-gray-100 shadow-lg rounded-xl">
            <router-link :to="{ name: 'mealdetails', params: { id: items.idMeal } }">

                <img class="card-img-top rounded-t-xl w-full h-56 object-cover " :src="items.strMealThumb">
            </router-link>
            <div class="card-body p-1 m-3">
                <h5 class="card-title font-bold  m-2">{{ items.strMeal }}</h5>
                <p class="card-text m-2">{{ items.strInstructions.slice(1, 50) }} .....</p>
                <a :href="items.strYoutube"
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded-md"
                    target="_blank">Youtube</a>

            </div>


        </div>

    </div>
</template>

<script setup>

import axios from 'axios'
import { onMounted, inject, ref } from 'vue'
import { useCounterStore } from '../stores/counter'
import { useRoute } from 'vue-router';
import router from '../router';

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
const baseUrl = inject('baseUrl')
const keyWord = ref({});

const { food } = useCounterStore()
const route = useRoute()

const searchFood = () => {

    food.meals = [];
    axios({
        method: 'get',
        url: baseUrl + `search.php?s=${keyWord.value}`,

    }).then((res) => {
        food.meals = res.data.meals
        router.push('/by-name/' + keyWord.value);
    }

        // @ts-ignore
    ).catch((error) => {
        console.warn('Not good man :(');

    })
}

onMounted(() => {

    keyWord.value = route.params.name
    if (keyWord.value) {
        searchFood()

    }

})



// @ts-ignore
</script>

<style lang="css" scoped></style>