import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./authSlice";
import { useState } from "react";

const auth = () => {
      const { user, isLoggedIn } = useSelector(
    (state) => state.auth
  );
    const dispatch = useDispatch();


return (
    <div>
      <h2>Authentication Demo</h2>

      {isLoggedIn ? (
        <>
          <h3>Welcome, {user.name}!</h3>

          <button onClick={() => dispatch(logout())}>
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={() =>
            dispatch(login({ name: "Admin" }))
          }
        >
          Demo Login
        </button>
      )}
    </div>
  );
}

export default auth