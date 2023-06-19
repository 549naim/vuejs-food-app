<template>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mx-3 my-2 p-5">
        <div v-for="items in food.meals" :key="items.idMeal" class="card bg-gray-100 shadow-lg rounded-xl">
            <router-link :to="{ name: 'mealdetails', params: { id: items.idMeal } }">

                <img class="card-img-top rounded-t-xl w-full h-56 object-cover " :src="items.strMealThumb">
            </router-link>
            <div class="card-body p-1 m-3">
                <h5 class="card-title font-bold  m-2">{{ items.strMeal }}</h5>
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

const baseUrl = inject('baseUrl')
const route = useRoute()
const food = ref({});

onMounted(() => {
    axios({
        method: 'get',
        url: baseUrl + `filter.php?c=${route.params.name}`,

    }).then((res) => {
       
        food.value = res.data
        console.log(res.data);

    }
    ).catch((error) => {
        console.warn('Not good man :(');

    })
})

</script>

<style lang="css" scoped>


</style>