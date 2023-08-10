import { createRouter, createWebHistory } from "vue-router";
import UserForm from "./components/UserForm.vue";
import ThePreview from "./components/ThePreview.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: UserForm,
    },
    { path: "/preview", component: ThePreview },
  ],
});

export default router;
