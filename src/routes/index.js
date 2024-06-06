import Message from "@/modules/message/screens/message";
import ErrorPath from "../modules/error/error";
import { Home } from "../modules/home";
import { Login } from "../modules/login";
import Divide from "@/modules/project/screen/divide";
import ProjectOvervew from "@/modules/project/screen/ProjectOverview";
import PageList from "@/modules/project/screen/PageList";
import UpdatePage from "@/modules/project/screen/UpdatePage";
export const routes = [
  { path: "/", component: Home, layout: true },
  { path: "/home", component: Home, layout: true },
  { path: "/divide", component: Divide, layout: true },
  // { path: "/message", component: Message, layout: true },
  { path: "/login", component: Login, public: true },
  { path: "/project_overview", component: ProjectOvervew, layout: true },
  { path: "/page_list", component: PageList, layout: true },
  { path: "/page_list/detail/:id", component: UpdatePage, layout: true },
];
export const errorPage = { path: "*", component: ErrorPath };
export const accessDeniedPage = { path: "*", component: ErrorPath };
