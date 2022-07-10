import { createRouter, createWebHistory } from 'vue-router'
import TaskDetailView from '@/views/TaskDetailView.vue'
import LoginView from "@/views/LoginView";
import SignUpView from "@/views/SignUpView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {auth: true}
  },
  {
    path: '/task/:id',
    name: 'taskDetail',
    component: TaskDetailView,
    meta: {auth: true}
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {auth: false}
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView,
    meta: {auth: false}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.auth);
  if (requireAuth && !localStorage.getItem("token")){
    next("/login")
  }
  else if((to.name == "login" || to.name == "signup") && localStorage.getItem("token")){
    next(from)
  }else{
    next()
  }
})

export default router
