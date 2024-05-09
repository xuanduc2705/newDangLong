import { Home } from "../modules/home";
import { Login } from "../modules/login";

const privateRoutes = [];
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
];
export { privateRoutes, publicRoutes };
