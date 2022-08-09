import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { token } = JSON.parse(window.localStorage.getItem("user")) || {
    token: "",
  };

  if (!token) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoutes;
