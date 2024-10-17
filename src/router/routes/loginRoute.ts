import { Route } from "@/router/routes.enum";
import LoginView from "@/views/LoginView.vue";

export const loginRoute = {
  name: Route.Login,
  path: "/",
  alias: "/login",
  component: LoginView,
  meta: {
    metaTags: [
      {
        name: "login page",
        content: "content login page",
      },
    ],
  },
};
