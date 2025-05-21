import { createWebHistory, createRouter } from 'vue-router'

import Overview from './Overview.vue'
import Create from './Create.vue'
import Edit from './Edit.vue'

const routes = [
  { path: '/overview', component: Overview },
  { path: '/create', component: Create },
  { path: '/edit', component: Edit },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})