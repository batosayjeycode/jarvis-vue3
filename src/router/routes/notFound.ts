import { Route } from "@/router/routes.enum";

export const notFound = {
  name: Route.NotFound,
  path: "/:catchAll(.*)",
  component: () => import("@/views/404.vue"),
  meta: {
    title: "404",
    metaTags: [
      {
        name: "description",
        content: "Page not found.",
      },
    ],
  },
};
