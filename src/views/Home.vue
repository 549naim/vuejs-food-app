<template>
    <div>
        <div class="flex flex-col p-5">
            <div class="flex justify-center">
                <input type="text" class="bg-gray-500 p-2 w-3/4 border-double border-4 text-2xl text-white"
                @change="searchFood()" placeholder="Search Food" v-model="keyWord" >
            </div>
            <div class=" my-2 flex justify-center gap-2">
                <RouterLink v-for="letter in letters" :to="{ name: 'byLetter', params: { letter } }">
                    <h1 class="p-2 bg-orange-300 rounded"> {{ letter }} </h1>
                </RouterLink>

            </div>

        </div>
        <div class="flex flex-col p-5">
            <div class="flex justify-center text-5xl text-bold bg-yellow-400 rounded-lg">
               <span class="p-2 font-serif"> All food Category </span>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mx-3 my-2 p-5">

            <div v-for="items in ingradiants.categories" :key="items.idCategory" class="card bg-gray-100 shadow-lg rounded-xl">
                <router-link :to="{ name: 'categoryfood', params: { name: items.strCategory } }">
                    <img class="card-img-top rounded-t-xl w-full h-56 object-cover" :src="items.strCategoryThumb" />
                </router-link>
                <div class="card-body p-1 m-3">
                    <h5 class="card-title font-bold m-2">{{ items.strCategory }}</h5>
                    <p class="card-text m-2">
                        {{ items.strCategoryDescription
                            .slice(1, 50) }} .....
                    </p>
                   
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { computed, inject, onMounted, ref } from 'vue'
import { useCounterStore } from '../stores/counter'
import { useRoute } from 'vue-router';
import router from '../router';



const { food } = useCounterStore()

const foods = computed(() => food)
const letters = "ABCDEFGHIJKLMOPQRSTUVWXYZ".split("");
const baseUrl = inject('baseUrl')
const ingradiants = ref([]);
const keyWord = ref("");
const route = useRoute()

onMounted(() => {

    axios({
        method: 'get',
        url: baseUrl + 'categories.php',

    }).then((res) => {
        console.log(res.data);
        ingradiants.value = res.data

    }
    ).catch((error) => {
        console.warn('Not good man :(');

    })
})

const searchFood = () => {

food.meals = [];

    router.push('/by-name/' + keyWord.value);

}





</script>

<style lang="css" scoped></style>