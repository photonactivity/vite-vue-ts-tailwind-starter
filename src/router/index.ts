import { createRouter, createWebHashHistory, RouteRecordRaw, RouterLink, useLink } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Index",
    component: () => import("@v/index.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@v/test.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
