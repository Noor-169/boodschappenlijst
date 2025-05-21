import { createWebHistory, createRouter } from 'vue-router'

import Overview from '../domains/groceries/pages/overview.vue'
import Create from '../domains/groceries/pages/Create.vue'
import Edit from '../domains/groceries/pages/Edit.vue'

const routes = [
  { path: '/overview', component: Overview },
  { path: '/create', component: Create },
  { path: '/edit', component: Edit },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router