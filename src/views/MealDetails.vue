<template>
    
    <div class="rounded-xl">
        <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
            <img :src="food.strMealThumb"  class="w-6/12 rounded-xl max-h-96 m-auto ">
            <div class="mt-3 font-semibold text-lg">{{food.strMeal}}</div>
            <div class="text-sm font-light w-60 md:w-auto">Category : {{ food.strCategory }} </div>
            <div class="my-4">
                <span class="font-bold text-base">Tags : {{food.strTags}}</span><br>
                <span class="font-bold text-base">Area :  {{food.strArea}}</span><br>
                <span class="font-loght text-base">Instructions :  {{food.strInstructions}}</span><br> <br>
               
              
                
            </div>

            <a :href="food.strYoutube" class="bg-[#f92f2f] text-center px-4 py-1 rounded-full font-bold text-3xl text-white border border-[#F0F0F6] shadow-xl mt-4" target="_blank">
               See promo
            </a>
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
        url: baseUrl + `lookup.php?i=${route.params.id}`,

    }).then((res) => {
       
        food.value = res.data.meals[0]
        console.log(res.data.meals[0]);

    }
    ).catch((error) => {
        console.warn('Not good man :(');

    })
})

</script>

<style lang="css" scoped>


</style>