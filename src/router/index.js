import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { LoginPage, SignupPage } from "../views/Auth";
import BaseLayout from "../layout/BaseLayout.vue";
import BoardsPage from "../views/Boards/Board.vue";

const routes = [
  {
    path: "/components",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: "home",
    component: BaseLayout,
    children: [
      {
        path: "boards/:id",
        name: "Boards",
        component: BoardsPage,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupPage,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
