// default
import { createRouter, createWebHistory } from "vue-router";

// pages
import Home from "@/pages/Home";
import NotFound from "@/pages/404";

// routering
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/:catchAll(.*)",
        name: "notFound",
        component: NotFound,
    },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
