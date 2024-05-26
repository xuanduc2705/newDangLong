import { Button } from "primereact/button";
import Banner from "./Banner";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { ChartTest, LineDemo, RadarDemo } from "./chart";

const Home = () => {
  return (
    <>
      {/* <div className="mb-5">
        <Navbar />
      </div>
      <div className="flex flex-column justify-center">
        <Banner />
        <Link
          to={"/divide"}
          className="mx-auto  "
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            class="scalein animation-ease-out animation-duration-200 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary border-round m-2 px-5 py-3"
          >
            CLICK HERE
          </div>
        </Link>
      </div> */}
      <div className="flex flex-column">
        <div className="grid">
          <div className="col-6">
            <ChartTest color1={"red"} color2={"blue"} />
          </div>
          <div className="col-6">
            <ChartTest color1={"green"} color2={"orange"} />
          </div>
        </div>
        <div className="grid">
          <div className="col-6">
            <LineDemo />
          </div>
          <div className="col-6">
            <RadarDemo />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
