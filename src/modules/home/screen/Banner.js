import { Carousel } from "primereact/carousel";
import { banner } from "../../../constants";
const productTemplate = (item) => {
  return (
    <div style={{ position: "relative" }}>
      <img
        className=""
        style={{
          width: "100%",
          aspectRatio: "2.5",
        }}
        src={item.src}
        alt="Banner"
      />
      {/* <h1
        style={{
          position: "absolute",
          bottom: "15px",
          right: "15px",
          margin: "10px",
        }}
      >
        BÀI ĐỌC HÔM NAY
      </h1> */}
    </div>
  );
};
const Banner = () => {
  return (
    <Carousel
      className="w-11"
      style={{ margin: "0 auto" }}
      value={banner}
      numVisible={1}
      numScroll={1}
      // orientation="vertical"
      // verticalViewPortHeight="360px"
      itemTemplate={productTemplate}
      showIndicators={false}
      autoplayInterval={3000}
      circular={true}
    />
  );
};

export default Banner;
