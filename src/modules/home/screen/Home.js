import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token1");
    navigate("/login");
  };
  return (
    <div
      style={{
        backgroundImage:
          'url("https://picstatio.com/large/gu2kkg/sci-fi-art-fantasy-land-wallpaper.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="flex flex-row-reverse	">
        <Button className="m-4" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
export default Home;
