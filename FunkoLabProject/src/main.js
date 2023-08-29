import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Vuex
import store from "./store/index"

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)

app.use(router)
.use(vuetify)
.use(store)
app.mount('#app')
