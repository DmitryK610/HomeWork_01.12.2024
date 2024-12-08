import UserForm from '@/components/userForm.vue'
import { createRouter, createWebHistory } from 'vue-router'
import userForm from '@/components/userForm.vue'
import registration from '@/components/registration.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: "/",
    name: "userForm",
    component: userForm,
},
{
  path:"/registration",
  name: "registration",
  component: registration,
}
],
})

export default router
