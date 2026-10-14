import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./features/components/Login";
import Dashboard from "./features/components/Dashboard";
import ProtectedRoute from "./features/components/ProtectedRoute";
import Users from "./features/users/users";
import Cart from "./features/cart/Cart";
import Products from "./features/products/Products";
export default function App() {
  const isLoggedIn = useSelector(
    (state) => state.auth.isLoggedIn
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to={isLoggedIn ? "/dashboard" : "/login"}
            replace
          />
        }
      />

      <Route
        path="/login"
        element={
          isLoggedIn
            ? <Navigate to="/dashboard" replace />
            : <Login />
        }
      />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Route>

      
      <Route element={<ProtectedRoute />}>
        <Route
          path="/users"
          element={<Users />}
        />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route
          path="/products"
          element={<Products />}
        />
      </Route>

         <Route element={<ProtectedRoute />}>
        <Route
          path="/cart"
          element={<Cart />}
        />
      </Route>

      <Route
        path="*"
        element={
          <Navigate
            to={isLoggedIn ? "/dashboard" : "/login"}
            replace
          />
        }
      />
    </Routes>
  );
}