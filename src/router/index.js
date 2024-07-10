import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(), // Remove BASE_URL here
  routes
})

export default router
