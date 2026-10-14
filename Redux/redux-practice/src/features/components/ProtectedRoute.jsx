import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute() {
  const isLoggedIn = useSelector(
    (state) => state.auth.isLoggedIn
  );

  return isLoggedIn
    ? <Outlet />
    : <Navigate to="/login" replace />;
}