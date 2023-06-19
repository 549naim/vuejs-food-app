// @ts-nocheck
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { provide } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide('baseUrl','https://www.themealdb.com/api/json/v1/1/');

app.mount('#app')
