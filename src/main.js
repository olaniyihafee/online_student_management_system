import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { makeServer } from "./server"

import App from './App.vue'
import router from './router'
/* 
import './assets/main.css' */

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

if (process.env.NODE_ENV === "development") {
    makeServer()
}
  
const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app') 

 