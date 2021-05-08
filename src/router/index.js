import { createRouter, createWebHistory } from "vue-router";
import Artists from "@/views/Artists.vue";
import Impressum from "@/views/Impressum.vue";

const routes = [
  {
    path: "/",
    name: "Artists",
    component: Artists,
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: Impressum,
  },
  {
    path: "/:artistId",
    name: "ArtistDetails",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ArtistDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
