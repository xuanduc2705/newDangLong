import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { privateRoutes, publicRoutes, routes } from "./routes";
import { useEffect } from "react";
import { Login } from "./modules/login";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
function App() {
  const NavigationScroll = ({ children }) => {
    const location = useLocation();
    const { pathname } = location;
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, [pathname]);

    return children || null;
  };
  const token = localStorage.getItem("token1");
  console.log(token);
  return (
    <Router>
      <NavigationScroll>
        <Routes>
          {[...publicRoutes].map((routes, index) => {
            const Page = routes.component;
            return (
              <>
                {token ? (
                  <Route
                    key={index}
                    path={routes.path}
                    element={
                      <>
                        <Page />
                      </>
                    }
                  />
                ) : (
                  <>
                    <Route
                      key={index}
                      path={routes.path}
                      element={
                        <>
                          <Login />
                        </>
                      }
                    />
                  </>
                )}
              </>
            );
          })}
        </Routes>
      </NavigationScroll>
    </Router>
  );
}

export default App;
