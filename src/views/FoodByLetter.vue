<template>
    <div class="flex flex-col p-5">
        <div class="m-auto">
            <RouterLink v-for="letter in letters" :to="{ name: 'byLetter', params: { letter } }">
                <button class="p-1 m-2 bg-orange-300 rounded" @click="searchbyletter">
                    {{ letter }}
                </button>
            </RouterLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mx-3 my-2 p-5">
            <div v-for="items in byLetter.meals" :key="items.idMeal" class="card bg-gray-100 shadow-lg rounded-xl">

                <router-link :to="{ name: 'mealdetails', params: { id: items.idMeal } }">
                    <img class="card-img-top rounded-t-xl w-full h-56 object-cover" :src="items.strMealThumb" />
                </router-link>
                <div class="card-body p-1 m-3">
                    <h5 class="card-title font-bold m-2">{{ items.strMeal }}</h5>
                    <p class="card-text m-2">
                        {{ items.strInstructions.slice(1, 50) }} .....
                    </p>
                    <a :href="items.strYoutube"
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded-md"
                        target="_blank">Youtube</a>
                </div>
            </div>
        </div>
        <h2 class="bg-red-400 rounded-sm font-bold text-xl" v-if="meal == true">No Food here with
            {{ route.params.letter }} at this time </h2>
    </div>
</template>

<script setup>
import axios from "axios";
import { computed, inject, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import router from "../router";

const letters = "ABCDEFGHIJKLMOPQRSTUVWXYZ".split("");
const baseUrl = inject("baseUrl");
const byLetter = ref({});
const route = useRoute();
const meal = ref(false);

const onOpen = () => {

    byLetter.value = "";
    meal.value = false;
    axios({
        method: "get",
        url: baseUrl + `search.php?f=${route.params.letter}`,
    })
        .then((res) => {

            if (res.data.meals == null) {
                meal.value = true
            } else {
                byLetter.value = res.data;
                router.push(`/letter/${route.params.letter}`)
            }
        })
        .catch((error) => {
            console.warn("Not good man :(");
        });
}



onMounted(() => {
    onOpen()
})


const searchbyletter = () => {
    byLetter.value = "";
    axios({
        method: "get",
        url: baseUrl + `search.php?f=${route.params.letter}`,
    })
        .then((res) => {
            byLetter.value = res.data;
            onOpen()
        })
        .catch((error) => {
            console.warn("Not good man :(");
        });
};
</script>

<style lang="css" scoped></style>
