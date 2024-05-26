import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import { items, items2 } from "../../../constants";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const token = localStorage.getItem("token");
  return (
    // <div
    //   style={{
    //     backgroundImage:
    //       'url("https://picstatio.com/large/gu2kkg/sci-fi-art-fantasy-land-wallpaper.jpg")',
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     width: "100vw",
    //     height: "100vh",
    //   }}
    // >
    //   <div className="flex flex-row-reverse	">
    //     <Button className="m-4" onClick={handleLogout}>
    //       Logout
    //     </Button>
    //   </div>
    // </div>
    <div>
      <div
        className="font-bold text-white border-round-bottom-3xl text-center w-4 p-1 m-auto"
        style={{ backgroundColor: "#cc8d35" }}
      >
        Free Shipping on Everything - Limited Time Offer
      </div>
      <div className="flex flex-row">
        <div className="flex mt-4 col-5 justify-center">
          <Menubar model={items} className="w-12 justify-center " />
        </div>
        <div className="flex flex-column w-full justify-content-center">
          <span
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              textAlign: "center",
              color: "#cc8d35",
            }}
          >
            DECORITY
          </span>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            ITEMS
          </span>
        </div>
        <div className="flex flex-row-reverse mt-4 col-5 mr-4">
          {token ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button onClick={handleLogin}>Login</Button>
          )}
          <Menubar model={items2} className="w-9" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
