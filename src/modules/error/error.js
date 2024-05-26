import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const ErrorPath = () => {
  const handleReturn = () => {
    window.history.back();
  };
  return (
    <div class="flex align-items-center justify-content-center">
      <div className="flex flex-column">
        <span className="fadein animation-duration-1000 animation-iteration-infinite font-bold text-red-500 text-8xl		">
          ERROR URL
        </span>
        <Button
          onClick={handleReturn}
          className="font-bold w-8 text-4xl mx-auto"
        >
          Click here to return
        </Button>
      </div>
    </div>
  );
};
export default ErrorPath;
