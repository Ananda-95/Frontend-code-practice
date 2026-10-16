import { useDispatch, useSelector } from "react-redux";
import { logout } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import Users from "../users/users";
import Cart from "../cart/Cart";
import Products from "../products/Products";
import Count from "../counter/Count";
export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Dashboard</h1>

      <h3>Welcome, {user?.name}!</h3>

      <p>You have successfully logged in.</p>

      {/* <Users />
      <Cart />
      <Products /> */}
      <Count />

      <button onClick={handleLogout}>
        Logout
      </button>

  

      
    </div>
  );
}