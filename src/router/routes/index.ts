import { notFound } from "@/router/routes/notFound";
import { homeRoute } from "@/router/routes/homeRoute";
import { loginRoute } from "@/router/routes/loginRoute";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [notFound, homeRoute, loginRoute];
