import { Route } from "@/router/routes.enum";
import HomeView from "@/views/HomeView.vue";

export const homeRoute = {
  name: Route.Home,
  path: "/home",
  component: HomeView,
  meta: {
    auth: true,
    metaTags: [
      {
        name: "description",
        content: "content",
      },
    ],
  },
};
