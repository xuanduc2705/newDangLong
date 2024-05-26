import { Navigate } from "react-router-dom";

export const PrivateRoutes = () => {
  return <Navigate to="/login" />;
};

export const PublicRoutes = () => {
  return <Navigate to="/" />;
};
