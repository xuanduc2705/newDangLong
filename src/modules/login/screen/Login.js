import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { LoginApi } from "../../../axios";
import { useNavigate } from "react-router-dom";
import { Password } from "primereact/password";
const Login = () => {
  const header = (
    <div>
      <img
        style={{ opacity: 0.6 }}
        alt="Card"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9757d496-239b-46c5-baea-6873cbfe9b3d/ddgiuhb-635846f7-1e94-4def-9ee4-7c4d5846451a.jpg/v1/fill/w_622,h_350,q_70,strp/at_autumn_s_door_by_joeyjazz_ddgiuhb-350t.jpg"
      />
      <span className="flex justify-content-center font-bold text-4xl	text-blue-500	mt-2">
        Welcome
      </span>
    </div>
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkpass, setCheckpass] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    const response = await LoginApi(username, password);
    if (response.success) {
      localStorage.setItem("token1", response?.data);
      navigate("/home");
      window.location.reload();
    } else {
      setCheckpass(true);
    }
  };
  const footer = (
    <div className="flex justify-content-center">
      <Button label="Login" icon="pi pi-sign-in" onClick={handleLogin} />
    </div>
  );
  return (
    <div className="card flex justify-content-center align-items-center h-screen ">
      <Card
        footer={footer}
        header={header}
        className="col-4 flipup animation-duration-1000 "
        style={{
          backgroundImage: "linear-gradient(to bottom right, #A9F1DF, #FFBBBB)",
        }}
      >
        <div className="flex flex-column justify-content-center ">
          <FloatLabel className="mx-auto mb-4">
            <InputText
              className="w-17rem"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              invalid={checkpass}
            />
            <label for="username" className="font-bold text-1xl">
              Username
            </label>
          </FloatLabel>
          <FloatLabel className="mx-auto">
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              toggleMask
              feedback={false}
              invalid={checkpass}
            />
            {checkpass ? (
              <label
                for="password"
                className="font-bold text-1xl"
                style={{ color: "red" }}
              >
                Password
              </label>
            ) : (
              <label for="password" className="font-bold text-1xl ">
                Password
              </label>
            )}
          </FloatLabel>
          {checkpass && (
            <div className="col-6 mx-auto">
              <span
                className="flex  mr-4 mt-3 text-center	"
                style={{ color: "red" }}
              >
                Wrong user information! Please check again!
              </span>
            </div>
          )}
          <div className="col-6 mx-auto">
            <span className="underline cursor-pointer flex flex-row-reverse mr-4 mt-3">
              Forgot password?
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Login;
